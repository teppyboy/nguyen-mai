import { defineI18nUI } from 'fumadocs-ui/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { i18n, locales } from '@/lib/i18n';

const translations = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      displayName: getDictionary(locale).displayName,
      chooseLanguage: getDictionary(locale).localeSwitcherLabel,
      toc: locale === 'vi' ? 'Trên trang này' : 'On This Page',
      tocNoHeadings: locale === 'vi' ? 'Không có đề mục' : 'No headings',
      lastUpdate: locale === 'vi' ? 'Cập nhật lần cuối' : 'Last updated',
      nextPage: locale === 'vi' ? 'Trang kế tiếp' : 'Next Page',
      previousPage: locale === 'vi' ? 'Trang trước' : 'Previous Page',
      chooseTheme: locale === 'vi' ? 'Chọn giao diện' : 'Choose Theme',
      editOnGithub: locale === 'vi' ? 'Chỉnh sửa trên GitHub' : 'Edit on GitHub',
      search: locale === 'vi' ? 'Tìm kiếm' : 'Search',
      searchNoResult: locale === 'vi' ? 'Không có kết quả' : 'No result',
    },
  ]),
);

export const { provider } = defineI18nUI(i18n, {
  translations,
});
