---
sidebar_position: 6
---
# Create a bootable image (boot.img) (legacy)

For legacy devices where boot.img contains ramdisk, you'll have to extract ramdisk from a prebuilt image itself and then append to ours.

If you don't have existing boot.img, you can download the prebuilt boot.img matching your kernel from [KernelSU releases](https://github.com/tiann/KernelSU/releases) or [Android.com](https://source.android.com/docs/core/architecture/kernel/gki-release-builds)

> It is STRONGLY recommended to download `boot.img` which is known to work on your devices, or else it'll be unbootable. You can test them by using `fastboot boot <boot.img>` to see if it boots on your device.

> Refer to official tutorial for more information: https://source.android.com/docs/setup/build/building-kernels#id-bootimage-no-init-boot

## Clone the mkbootimg source

```bash
git clone https://android.googlesource.com/platform/system/tools/mkbootimg/ --depth 1
cd mkbootimg
```

## Unpack the working boot.img

Place the working boot.img in the `mkbootimg` directory so we can work easier

```bash
./unpack_bootimg.py --boot_img boot.img --out boot
``` 

The unpacked boot image will be in `boot/` directory, also upon unpacking you should see something like this:
```
boot magic: ANDROID!
kernel_size: 44493028
ramdisk size: 2713820
os version: 15.0.0
os patch level: 2025-06
boot image header version: 4
command line args: 
boot.img signature size: 0
```

Remember the details because you'll need them later (except the kernel & ramdisk size)

## Create our own boot image

Place the `Image` to the current directory, and now execute this command to create a new boot image

```bash
./mkbootimg.py --kernel Image --ramdisk boot/ramdisk --os_version <os version> --os_patch_level <os patch level> --header_version 4 --cmdline <command line args> --out my_boot.img
```

Fill the missing fields with the information above, and if command line args is empty then you can ignore the argument. The new boot image will be named `my_boot.img` in the current working directory. 

Congrats on your custom kernel :D, now you're ready to flash them on your devices!
