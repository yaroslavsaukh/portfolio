# Google Search Console

Підключення та індексацію не виконано з репозиторію. DNS-запис не змінювався, а production не деплоївся.

## Підтвердження домену

1. У Google Search Console додайте ресурс типу **Domain** зі значенням `ysaukh.tech`.
2. Скопіюйте виданий Google TXT token (`google-site-verification=...`).
3. Якщо домен використовує nameservers Vercel, відкрийте **Vercel → Domains → ysaukh.tech → DNS Records** і додайте TXT-запис із host/name `@` та скопійованим значенням. Якщо DNS обслуговує інший провайдер, додайте запис у його панелі; для перевірки не потрібно змінювати nameservers.
4. Після того як DNS оновиться, поверніться в Search Console й натисніть **Verify**.

## Надсилання sitemap та homepage

- У Search Console відкрийте **Sitemaps**, введіть `sitemap.xml` і натисніть **Submit**. Публічна адреса: `https://ysaukh.tech/sitemap.xml`.
- Для запиту індексації відкрийте **URL inspection**, введіть `https://ysaukh.tech/` і виберіть **Request indexing**.
- Сторінки трьох послуг включені в sitemap. Демонстраційні сайти вигаданих брендів доступні для перегляду, але мають `noindex,follow` і не включені в sitemap.

Довідка: [підтвердження права власності Google](https://support.google.com/webmasters/answer/9008080), [звіт Sitemaps](https://support.google.com/webmasters/answer/7451001), [керування DNS у Vercel](https://vercel.com/docs/domains/managing-dns-records).

## Канонічний домен

`vercel.json` перенаправляє `www.ysaukh.tech` на `https://ysaukh.tech` зі збереженням шляху. Після наступного деплою перевірте редирект у браузері або командою `curl -I https://www.ysaukh.tech/`; live-перевірка не була доступна під час цієї роботи.
