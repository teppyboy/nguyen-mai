---
sidebar_position: 6
---
# Create a bootable image (boot.img) (legacy)

For legacy devices where boot.img contains ramdisk, you'll have to extract ramdisk from a prebuilt GKI itself and then append to ours.

You can download the prebuilt boot.img matching your kernel from [KernelSU releases](https://github.com/tiann/KernelSU/releases) or [Android.com](https://source.android.com/docs/core/architecture/kernel/gki-release-builds)

> Refer to official tutorial for more information: https://source.android.com/docs/setup/build/building-kernels#id-bootimage-no-init-boot