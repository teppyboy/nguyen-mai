import { defineConfig } from "vitepress";

const enSidebar = [
  {
    text: "Documentation",
    link: "/docs/",
    items: [],
  },
  {
    text: "Android Rooting",
    link: "/docs/android-rooting/",
    collapsed: false,
    items: [
      {
        text: "Root Hiding",
        link: "/docs/android-rooting/root-hiding.md",
      },
      {
        text: "Play Integrity",
        items: [
          {
            text: "Modules",
            link: "/docs/android-rooting/play-integrity/modules.md",
          },
          {
            text: "PlayStrong",
            link: "/docs/android-rooting/play-integrity/playstrong.md",
          },
        ],
      },
      { text: "LineageOS", link: "/docs/android-rooting/lineage.md" },
      {
        text: "Advanced Root Hiding",
        link: "/docs/android-rooting/root-hiding-again/",
        items: [
          {
            text: "App Hiding",
            link: "/docs/android-rooting/root-hiding-again/app-hiding.md",
          },
          {
            text: "KernelSU v3",
            link: "/docs/android-rooting/root-hiding-again/kernelsu-3.md",
          },
          {
            text: "Play Integrity",
            link: "/docs/android-rooting/root-hiding-again/play-integrity.md",
          },
        ],
      },
    ],
  },
  {
    text: "AOSP Development",
    link: "/docs/aosp-development/",
    collapsed: false,
    items: [
      {
        text: "Kernel (GKI 1/2) (12 and older)",
        items: [
          {
            text: "Dependency",
            link: "/docs/aosp-development/kernel-old/dependency.md",
          },
          {
            text: "Building Repo",
            link: "/docs/aosp-development/kernel-old/building-repo.md",
          },
          {
            text: "Building (the semi-manual way)",
            link: "/docs/aosp-development/kernel-old/building-manual.md",
          },
          {
            text: "Packaging",
            link: "/docs/aosp-development/kernel-old/packaging.md",
          },
          {
            text: "Bootable Image (Legacy)",
            link: "/docs/aosp-development/kernel-old/bootable-image-legacy.md",
          },
        ],
      },
      {
        text: "Pixel Kernel",
        link: "/docs/aosp-development/pixel-kernel.md",
      },
      {
        text: "Patches",
        items: [
          {
            text: "KernelSU",
            link: "/docs/aosp-development/patches/kernelsu.md",
          },
        ],
      },
    ],
  },
  {
    text: "Windows",
    link: "/docs/windows/",
    collapsed: false,
    items: [
      {
        text: "Tweaks",
        items: [
          { text: "Atlas OS", link: "/docs/windows/tweaks/atlas-os.md" },
          { text: "Sophia", link: "/docs/windows/tweaks/sophia.md" },
        ],
      },
    ],
  },
];

const viSidebar = [
  {
    text: "Tài liệu",
    link: "/vi/docs/",
    items: [],
  },
  {
    text: "Android Rooting",
    link: "/vi/docs/android-rooting/",
    collapsed: false,
    items: [
      {
        text: "Root Hiding",
        link: "/vi/docs/android-rooting/root-hiding.md",
      },
      {
        text: "Play Integrity",
        items: [
          {
            text: "Modules",
            link: "/vi/docs/android-rooting/play-integrity/modules.md",
          },
          {
            text: "PlayStrong",
            link: "/vi/docs/android-rooting/play-integrity/playstrong.md",
          },
        ],
      },
      { text: "LineageOS", link: "/vi/docs/android-rooting/lineage.md" },
      {
        text: "Ẩn root nâng cao",
        link: "/vi/docs/android-rooting/root-hiding-again/",
        items: [
          {
            text: "Ẩn ứng dụng",
            link: "/vi/docs/android-rooting/root-hiding-again/app-hiding.md",
          },
          {
            text: "KernelSU v3",
            link: "/vi/docs/android-rooting/root-hiding-again/kernelsu-3.md",
          },
          {
            text: "Play Integrity",
            link: "/vi/docs/android-rooting/root-hiding-again/play-integrity.md",
          },
        ],
      },
    ],
  },
  {
    text: "AOSP Development",
    link: "/vi/docs/aosp-development/",
    collapsed: false,
    items: [
      {
        text: "English only",
        items: [{ text: "Open AOSP docs", link: "/docs/aosp-development/" }],
      },
    ],
  },
  {
    text: "Windows",
    link: "/vi/docs/windows/",
    collapsed: false,
    items: [
      {
        text: "English only",
        items: [{ text: "Open Windows docs", link: "/docs/windows/" }],
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nguyễn Mai",
  description: "Various documentations for what I am working on",
  lang: "en-US",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Documentation", link: "/docs/" },
        ],
        sidebar: {
          "/docs/": enSidebar,
        },
      },
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi-VN",
      title: "Nguyễn Mai",
      description: "Tài liệu cho những thứ tôi đang làm",
      themeConfig: {
        nav: [
          { text: "Trang chủ", link: "/vi/" },
          { text: "Tài liệu", link: "/vi/docs/" },
        ],
        sidebar: {
          "/vi/docs/": viSidebar,
        },
      },
    },
  },
  themeConfig: {
    logo: "/img/ruan-mei-character_icon.webp",
    socialLinks: [
      { icon: "github", link: "https://github.com/teppyboy/nguyen-mai" },
    ],
  },
});
