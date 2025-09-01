---
sidebar_position: 2
---
# Root Hiding

So, you want to use Magisk but without being detected by banking apps? Then this guide is for you :D. Note that for better hiding results, consider using KernelSU/APatch/KernelSU-Next/SukiSU which implemented root hiding in mind.

## Magisk

Magisk doesn't support root hiding or any of the hiding steps, so to get Magisk with those, use [Magisk Alpha](https://t.me/magiskalpha) (proprietary)

### Modules

Either use this combination

+ [ReZygisk](https://github.com/PerformanC/ReZygisk/actions) (use the CI builds for best experience)
+ [Treat Wheel](https://t.me/zygote64_32)
+ [Nohello](https://github.com/MhmRdd/NoHello/actions) (if it conflicts find "mod" version in Telegram)

or

+ [Zygisk Next](https://github.com/Dr-TSNG/ZygiskNext)
+ [Shamiko](https://github.com/LSPosed/LSPosed.github.io/releases)

DO NOT MIX THEM AS THEY WILL CONFLICT AND WILL NOT WORK.

#### Optional
+ [MMRL](https://github.com/MMRLApp/MMRL) - A module manager app with the capability to search modules from repositories online.

## KernelSU/APatch

Install [modules](#modules) to bypass.

## KernelSU-Next/SukiSU

### With SuSFS

You don't have to do anything because SuSFS will work and deal with all of these for you, but in some cases if it doesn't then install [modules](#modules) to bypass.

### Without SuSFS

#### Stock ROM

Chances are it'll work, but in some cases if it doesn't then install [modules](#modules) to bypass.

#### Custom ROM

Install [modules](#modules) to bypass.

## FAQ

### BShield-based apps (VNeId, Techcombank, etc.) not bypassing?

Check [LineageOS/BShield](./lineage.md#bshield) for more information.

### How do I get Play Integrity with STRONG verdict?

Check [Play Integrity](/docs/category/play-integrity-strong) for more information.
