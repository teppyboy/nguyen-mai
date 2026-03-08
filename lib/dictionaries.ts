import type { SiteLocale } from '@/lib/i18n';

export type Dictionary = {
  displayName: string;
  localeSwitcherLabel: string;
  siteTitle: string;
  siteTagline: string;
  nav: {
    docs: string;
    blog: string;
    github: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    docsSummary: string;
    blogSummary: string;
    localeSummary: string;
  };
  footer: {
    docs: string;
    blog: string;
    github: string;
    copyright: string;
  };
  blog: {
    title: string;
    description: string;
    by: string;
    published: string;
    back: string;
    empty: string;
  };
  docs: {
    title: string;
    description: string;
  };
  markdownPage: {
    title: string;
    description: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};

export const dictionaries: Record<SiteLocale, Dictionary> = {
  en: {
    displayName: 'English',
    localeSwitcherLabel: 'Language',
    siteTitle: 'Nguyen Mai',
    siteTagline: 'Various documentations for what I am working on',
    nav: {
      docs: 'Documentation',
      blog: 'Blog',
      github: 'GitHub',
    },
    home: {
      eyebrow: 'Static docs and notes',
      title: 'A bilingual knowledge base for Android, AOSP, and Windows tweaks.',
      description:
        'This site now runs as a fully static Next.js + Fumadocs build so it stays simple to maintain and easy to host on GitHub Pages.',
      primaryCta: 'Open documentation',
      secondaryCta: 'Read the blog',
      docsSummary: 'Technical guides, references, and setup notes grouped by topic.',
      blogSummary: 'Shorter posts, experiments, and migration notes outside the docs tree.',
      localeSummary: 'English lives at the root and Vietnamese stays available under /vi.',
    },
    footer: {
      docs: 'Documentation',
      blog: 'Blog',
      github: 'GitHub',
      copyright: 'Built with Next.js, Fumadocs, and Bun.',
    },
    blog: {
      title: 'Blog',
      description: 'Posts and notes published alongside the documentation.',
      by: 'Written by',
      published: 'Published',
      back: 'Back to blog',
      empty: 'No posts available yet.',
    },
    docs: {
      title: 'Documentation',
      description: 'Browse the available documentation sections from the sidebar.',
    },
    markdownPage: {
      title: 'Markdown page example',
      description: "You don't need React to write simple standalone pages.",
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you requested does not exist or was moved during the migration.',
      cta: 'Back to home',
    },
  },
  vi: {
    displayName: 'Tiếng Việt',
    localeSwitcherLabel: 'Ngôn ngữ',
    siteTitle: 'Nguyen Mai',
    siteTagline: 'Tài liệu tổng hợp cho những gì mình đang làm',
    nav: {
      docs: 'Tài liệu',
      blog: 'Blog',
      github: 'GitHub',
    },
    home: {
      eyebrow: 'Trang tài liệu tĩnh',
      title: 'Kho tài liệu song ngữ cho Android, AOSP và các tinh chỉnh Windows.',
      description:
        'Trang này chạy bằng Next.js + Fumadocs dưới dạng static export để dễ bảo trì và triển khai trực tiếp lên GitHub Pages.',
      primaryCta: 'Mở tài liệu',
      secondaryCta: 'Xem blog',
      docsSummary: 'Hướng dẫn kỹ thuật, ghi chú cấu hình và tài liệu tham khảo theo từng chủ đề.',
      blogSummary: 'Các bài viết ngắn, thử nghiệm và ghi chú nằm ngoài cây tài liệu chính.',
      localeSummary: 'Tiếng Anh ở đường dẫn gốc, còn tiếng Việt nằm dưới /vi.',
    },
    footer: {
      docs: 'Tài liệu',
      blog: 'Blog',
      github: 'GitHub',
      copyright: 'Xây dựng với Next.js, Fumadocs và Bun.',
    },
    blog: {
      title: 'Blog',
      description: 'Các bài viết và ghi chú đi kèm hệ thống tài liệu.',
      by: 'Tác giả',
      published: 'Ngày đăng',
      back: 'Quay lại blog',
      empty: 'Chưa có bài viết nào.',
    },
    docs: {
      title: 'Tài liệu',
      description: 'Duyệt các nhóm tài liệu hiện có từ thanh điều hướng bên cạnh.',
    },
    markdownPage: {
      title: 'Ví dụ trang Markdown',
      description: 'Bạn không cần React để viết các trang đơn giản, độc lập.',
    },
    notFound: {
      title: 'Không tìm thấy trang',
      description: 'Trang bạn cần không tồn tại hoặc đã được chuyển trong quá trình migration.',
      cta: 'Về trang chủ',
    },
  },
};

export function getDictionary(locale: SiteLocale): Dictionary {
  return dictionaries[locale];
}
