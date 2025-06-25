---
sidebar_position: 3
---
# Building (the semi-manual way)

This will help you on building kernels from source code (12 or older)

## Guide

### Cloning the needed build tools

To simplify our life, we'll use `repo` (yes) to clone these.

Clone the manifest, replace `<branch>` with actual one (e.g. `common-android12-5.10`), you can find the one you need by searching https://android.googlesource.com/kernel/manifest/+refs

```
repo init -u https://android.googlesource.com/kernel/manifest -b <branch> --depth 1
```

Sync the sources

```
repo sync -c -j$(nproc --all) --no-clone-bundle --no-tags
```

### Cloning the kernel source

First, we'll remove the `common` folder which contains the generic kernel.

```bash
rm -rf ./common
```

Then after that, clone the kernel source to the `common` folder, where `<kernel source>` would be something like `https://github.com/LineageOS/android_kernel_xiaomi_sm8450`, and optionally set the branch with `-b <branch>` in the clone command.

```bash
git clone <kernel source> common --depth 1
```

### Set build environment variables

First, cd to `common`

```bash
cd common
```

To simplify our lives, we'll use environment variables defined by build configs

```bash
source build.config.common
source build.config.aarch64
```

Then export these variables 

```bash
export ARCH="arm64"
export CC="clang ccache"
export LTO="thin"
export PATH="$(realpath ../build/build-tools/path/linux-x86):$(realpath ../$CLANG_PREBUILT_BIN):$(realpath ../build/build-tools/path/linux-x86):$(realpath ./out/android12-5.10/common/host_tools):$PATH"
```

Ignore any error you encountered, as long as the kernel builds then it's fine.

### Build the kernel itself

0. Cleanup

This will cleanup any artifacts from the last old (failed) build. This is required to perform a build.

```bash
make O=out LLVM=1 LLVM_IAS=1 mrproper
```

1. Apply base defconfig

Typically you'll apply the GKI one, but in case you want to use custom defconfig then you can find (or place it) here: `common/arch/arm64/configs/`

```bash
make O=out LLVM=1 LLVM_IAS=1 gki_defconfig
```

2. (Optional) Apply vendor configs

In case you want to apply any vendor changes, apply it here. The example below adds configs for waipio (the base config for SM8450) -> xiaomi (the vendor) -> diting (the device). You can find the .config files in `common/arch/arm64/configs/vendor/`

```bash
make O=out LLVM=1 LLVM_IAS=1 vendor/waipio_GKI.config 
make O=out LLVM=1 LLVM_IAS=1 vendor/xiaomi_GKI.config
make O=out LLVM=1 LLVM_IAS=1 vendor/diting_GKI.config
```

3. Compile the kernel

```bash
make -j$(nproc --all) O=out LLVM=1 LLVM_IAS=1
```

This will build a GKI kernel in `common/out/arch/arm64/boot/Image`
