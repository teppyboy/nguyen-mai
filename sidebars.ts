import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AOSP Development',
      link: { type: 'doc', id: 'aosp-development/intro' },
      items: [
        {
          type: 'category',
          label: 'Kernel (GKI 1/2) (12 and older)',
          link: { type: 'generated-index' },
          items: [
            'aosp-development/kernel-old/dependency',
            'aosp-development/kernel-old/building-repo',
            {
              type: 'category',
              label: 'Building (the semi-manual way)',
              link: { type: 'doc', id: 'aosp-development/kernel-old/building-manual' },
              items: ['aosp-development/kernel-old/kernelsu'],
            },
            'aosp-development/kernel-old/packaging',
            'aosp-development/kernel-old/bootable-image-legacy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Android Rooting',
      link: { type: 'doc', id: 'android-rooting/intro' },
      items: [
        'android-rooting/root-hiding',
        'android-rooting/lineage',
        {
          type: 'category',
          label: 'Play Integrity (Strong)',
          link: { type: 'generated-index' },
          items: [
            'android-rooting/play-integrity/modules',
            'android-rooting/play-integrity/playstrong',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Root Hiding',
          link: { type: 'generated-index' },
          items: [
            'android-rooting/root-hiding-again/introduction',
            'android-rooting/root-hiding-again/play-integrity',
            'android-rooting/root-hiding-again/kernelsu-3',
            'android-rooting/root-hiding-again/app-hiding',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Windows',
      link: { type: 'generated-index' },
      items: [
        'windows/general',
        {
          type: 'category',
          label: 'Tweaks',
          link: { type: 'generated-index' },
          items: [
            'windows/tweaks/sophia',
            'windows/tweaks/atlas-os',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
