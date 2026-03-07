---
sidebar_position: 1
---
# Introduction to Advanced Root Hiding

## Preparation
- Your device should've been rooted using KernelSU or its forks (I didn't test Magisk so idk).
- You have a broad knowledge of rooting and how it works.
- ALWAYS backup your data before doing anything important (including just installing a module - it can brick your device).
- Wish for the best outcome, and don't be disappointed if you fail :)

## Notes
- Most root solutions are open source, and their forks sometimes deliver better hiding (e.g. KernelSU-Next vs KernelSU). If there are multiple options for you, you should use these forks which are more frequently maintained, better communities, ...
- Some root checking apps can check for root traces and give detailed results so you don't have to guess, e.g. [Native Detector](https://github.com/reveny/Android-Native-Root-Detector), ...
- As of my knowledge, if you let LSPosed hook into an app then that app will immediately detect root, so for these apps it's better to NOT use any LSPosed modules. Still, if you want to try then go ahead, find your own way (and contribute back to us please)

## My setup for reference
:::info
I'm using root in a Google Pixel 6 (oriole) with Android 16 (latest release) and kernel `android14-6.1`. I don't use custom roms, so I don't know how to hide custom rom traces. As this is my main device, I don't want everything to be complicated, so I'll just focus on root hiding, for other things then... you're on your own 😛
:::
- [KernelSU-Next](https://github.com/KernelSU-Next/KernelSU-Next) v3.0.0 (can be newer)
- [SuSFS](https://gitlab.com/simonpunk/susfs4ksu) v2.0.0
- AnyKernel3: [WildKernels GKI](https://github.com/WildKernels/GKI_KernelSU_SUSFS) (Include both KSU-Next and SUSFS :thumbsup:)
- Metamodule: [Hybrid Mount](https://github.com/KernelSU-Modules-Repo/hybrid_mount)
- Zygisk: [Zygisk Next](https://github.com/Dr-TSNG/ZygiskNext)
- Play Integrity: [Integrity Box](https://github.com/MeowDump/Integrity-Box) and [TEESimulator](https://github.com/JingMatrix/TEESimulator)

<a><img src="/img/Screenshot_20260307-223813.png" width="400"/></a>
<a><img src="/img/Screenshot_20260308-020427.png" width="400"/></a>

***Thanks for reading until here, now please go to other chapters, I don't like to talk much here*** 😛

> I translated for ya, for the god sake this doesn't use AI to translate :)
