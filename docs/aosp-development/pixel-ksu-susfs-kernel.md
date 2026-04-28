# Pixel Kernel with KernelSU and SuSFS

*If you had bad experience with the prebuilt kernels like [WildKernels](https://github.com/WildKernels/GKI_KernelSU_SUSFS), e.g. random reboots, crashes, failed drivers, etc... you can try patching the kernel from exactly the same source code as Google provides with their releases to get more stable and reliable kernel.*

## Prerequisites

- Pixel devices with Google Tensor SoC (Qualcomm devices is too old, I think it isn't necessary to write a completely new guide)
- Stock firmware image installed
- Linux (amd64) computer with [Kleaf](https://cs.android.com/android/kernel/superproject/+/common-android-mainline:build/kernel/kleaf/docs/kleaf.md) build environment set up (check for other guides in this website if you haven't done it yet)
- Basic knowledge of Linux command line, git, and kernel building

:::warning
Only tested on Pixel with Android 16 QPR3 and kernel version `android14-6.1` (GKI 2). It may or may not work on your device, you should only use that guide as a reference.
:::

## Instructions

### 1. Inspect your stock kernel strings

Your stock kernel string would be looked like this. Keep a copy of yours, it's very useful later:
```
6.1.145-android14-11-gfa1d6308d1fe-ab14691759
#1 Fri Jan  9 16:33:46 UTC 2026
```

> This is `android14-6.1` kernel, patch level `145`. You'll need to **build the kernel with the same kernel version, and the same or higher patch level**, otherwise your device won't even boot.

Notice the tail part of the kernel string, it has the format of `-g<commit_hash>-ab<build_number>`, in my example, the commit hash is `fa1d6308d1fe` and the build number is `14691759`.

:::info
With the commit hash, you can jump into the exact commit in the Android kernel source code. In my example: [https://android.googlesource.com/kernel/common/+/fa1d6308d1fe](https://android.googlesource.com/kernel/common/+/fa1d6308d1fe)

The build number is Android Build ID, you can search for artifacts from Google's server. In my example: [https://ci.android.com/builds/submitted/14691759/kernel_aarch64/latest/](https://ci.android.com/builds/submitted/14691759/kernel_aarch64/latest/)
:::

*I hope that you can understand the meaning of these URL path to find resources for your own device. If you can't, you should ~~kys~~ stop reading this guide, you can't go any further without understanding these basic things.*

### 2. Download the source code

From the artifact page, you can find a file named `manifest_<build_number>.xml`, which is the manifest file of the exact source code that Google used to build the kernel. Download it.

Then init repo:
```bash
mkdir kernel_source && cd kernel_source # choose any working directory name you want, without spaces
repo init -u https://android.googlesource.com/kernel/manifest -b common-android14-6.1 --depth=1
```

**Replace the content of `.repo/manifests/default.xml` with the `manifest_<build_number>.xml` you downloaded**, then sync:
```bash
repo sync -c --no-tags -j$(nproc)
```

If no error happens, you should have the exact same source code as Google used to build the kernel on your computer now.

### 3. (Optional) Build the kernel without any modification to make sure everything works fine before patching

```bash
tools/bazel run --config=fast --config=stamp --lto=thin --verbose_failures //common:kernel_aarch64_dist
```

If everything works fine, you should be able to find the built kernel `Image` in `out/dist/` folder.

Now clean the working directory to prepare for patching:

```bash
tools/bazel clean --expunge
```

### 4. Patch the kernel with SuSFS

Clone the [susfs4ksu fork repo by pershoot](https://gitlab.com/pershoot/susfs4ksu):
```bash
git clone https://gitlab.com/pershoot/susfs4ksu.git -b gki-android14-6.1-dev --depth=1
```

New folder `susfs4ksu` should appear. Then copy the patch files to the kernel source code:
```bash
cp susfs4ksu/kernel_patches/50_add_susfs_in_gki-android14-6.1.patch  common/
cp susfs4ksu/kernel_patches/fs/*                                     common/fs/
cp susfs4ksu/kernel_patches/include/linux/*                          common/include/linux/
```

Patch the kernel:
```bash
cd common
patch -p1 < 50_add_susfs_in_gki-android14-6.1.patch
```

:::warning
**If you see any patch failure in the output, stop immediately and manually fix the patching issue.**

*Although it's rarely happens if you use the exact same source code as Google, you may end up with a broken kernel that won't boot. You'd better learn to check the reject files and fix the patching issue by yourself, or you can ask someone for help, or you can fix the patch files and contribute to the original repo to help everyone.*
:::

Go back to your working directory root:
```bash
cd ..
```

### 5. Install KernelSU-Next into the kernel

Simply run this on the root of your working directory:
```bash
curl -LSs "https://raw.githubusercontent.com/pershoot/KernelSU-Next/dev-susfs/kernel/setup.sh" | bash -s dev-susfs
```

This fork is pre-applied with the patch to support integration with SuSFS, you don't need to apply `10_enable_susfs_for_ksu.patch` anymore!

### 6. Build the patched kernel

:::warning
Before building, you need to:

1. Remove protected exports and patch files (otherwise WiFi, Bluetooth, and some other drivers won't work):
```bash
sed -i '/^[[:space:]]*"protected_exports_list"[[:space:]]*:[[:space:]]*"android\/abi_gki_protected_exports_aarch64",$/d' common/BUILD.bazel
rm common/android/abi_gki_protected_exports_* common/50_add_susfs_in_gki-android14-6.1.patch
```

2. Commit the changes to the kernel source git repository at `common/` folder (to remove the `-dirty` tag in the kernel string):
```bash
cd common
git add -A
git commit -a -m "Patch kernel with KernelSU-Next and SuSFS"
cd ..
```

3. 6

4. It's not necessary to manually add `CONFIG_<...>=y` to `gki_defconfig` file. KSU & SuSFS will be automatically added to the kernel and configurations is enabled by default.

5. DO NOT FORGET TO CLEAN THE BUILD OUTPUT BEFORE BUILDING. `tools/bazel clean --expunge`
:::

Run the build command on the working directory root:
```bash
tools/bazel run --config=fast --config=stamp --lto=thin --verbose_failures //common:kernel_aarch64_dist
```

:::info
You should see the **KernelSU-Next and SuSFS version messages appear in the build output**, which means the patches are applied successfully.
:::

If everything works fine, you should be able to find the built kernel `Image` and `boot.img` in `out/dist/` folder.

Either bundle it in a [AnyKernel3](https://github.com/osm0sis/AnyKernel3) flashable zip, or flash the `boot.img` directly with Fastboot, you can test the kernel on your device now!

## FAQ

1. Is my kernel string suspicious? It doesn't have `-ab<build_number>` at the end?
> The `-ab<build_number>` part is added by Google's build system, if you build the kernel by yourself, it won't be there. You can simply ignore it, it doesn't affect anything. Anyway, you should spoof your kernel string with the original value you took from your stock kernel with the support of SuSFS (some apps can check the kernel string and build date to flag modified devices).

2. Why do you apply SuSFS patch before applying KernelSU-Next?
> Gotcha!

:::tip
To install necessary dependencies in Fedora 43 host:
```bash
sudo dnf group install "c-development" "development-tools"
sudo dnf install -y \
  git bc bison flex \
  dtc lz4 xz zstd rsync \
  zlib-devel ncurses-devel openssl-devel \
  elfutils-libelf-devel dwarves \
  libX11-devel readline-devel mesa-libGL-devel \
  libxml2 libxslt libarchive \
  python3 python3-markdown \
  java-17-openjdk-devel \
  p7zip p7zip-plugins \
  android-tools erofs-utils \
  dos2unix kmod openssl \
  perl cpio repo
```
*Provided by Claude* 🤓
:::
