---
sidebar_position: 2
---
# Building (the repo way)

This will help you on building kernels (12 or older)

## Guide

### Cloning the needed manifest

#### MSM kernels (Qualcomm)
Clone the manifest, replace `manifest.xml` with actual one (e.g. `AU_LINUX_KERNEL.PLATFORM.1.0.R1.00.00.00.000.189.xml`), you can find the one you need by searching
on Telegram with the board you base on (e.g. `taro` would use the manifest file above).

```bash
repo init -u https://git.codelinaro.org/clo/la/kernelplatform/manifest/ -b release -m <manifest.xml> --depth 1
```

#### AOSP

> Follow this guide for reference: https://source.android.com/docs/setup/build/building-kernels

Clone the manifest, replace `<branch>` with actual one (e.g. `common-android12-5.10`), you can find the one you need by searching https://android.googlesource.com/kernel/manifest/+refs

```bash
repo init -u https://android.googlesource.com/kernel/manifest -b <branch> --depth 1
```

### Sync the sources

```bash
repo sync -c -j$(nproc --all) --no-clone-bundle --no-tags
```

### (Optional) Set optimized build environment variables

```bash
export CC="ccache clang"
export LTO=thin
```

### Build the kernel itself

Replace `BUILD_CONFIG` value with the config you want to use but generally we'll be building for GKI platform

```bash
export BUILD_CONFIG=common/build.config.gki.aarch64
./build/build.sh
```

This will build a GKI kernel.

