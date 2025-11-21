# Deployment Checklist

Before deploying to production, ensure the following items are addressed:

## Environment Variables
- [ ] `CONTACT_FORM_RECIPIENT` is set to the correct email address.
- [ ] `NEXT_PUBLIC_ANALYTICS_WRITE_KEY` is set (if using analytics).
- [ ] Feature flags (`NEXT_PUBLIC_CHAT_ENABLED`, `NEXT_PUBLIC_SOCIAL_FEED_ENABLED`) are configured as desired.

## SEO & Metadata
- [ ] `metadata` in `app/layout.tsx` is accurate (Title, Description).
- [ ] Favicon and app icons are present in `app/favicon.ico` or `app/icon.png`.
- [ ] Open Graph images are configured (optional but recommended).

## Performance
- [ ] All heavy images use `next/image` with `sizes` and `loading="lazy"` (except LCP images).
- [ ] Fonts are optimized using `next/font`.
- [ ] `npm run build` passes without errors.

## Functionality
- [ ] Contact form submits successfully (check logs or email provider).
- [ ] Navigation links scroll to the correct sections.
- [ ] Mobile menu opens/closes correctly and locks body scroll.
- [ ] Portfolio filtering works as expected.
- [ ] Image modal opens/closes and traps focus.

## Accessibility
- [ ] All interactive elements are keyboard accessible (Tab order).
- [ ] Focus states are visible.
- [ ] Images have descriptive `alt` text.
- [ ] Headings follow a logical hierarchy (`h1` -> `h2` -> `h3`).

## Analytics
- [ ] Analytics tracking is firing correctly (check console in dev or dashboard in prod).

## Final Polish
- [ ] Check for any console errors or warnings.
- [ ] Test on mobile devices (iOS and Android).
- [ ] Verify cross-browser compatibility (Chrome, Firefox, Safari, Edge).

## Vercel Deployment

1. **Push to Git**: Ensure your code is pushed to a GitHub/GitLab/Bitbucket repository.
2. **Import Project**: Go to [Vercel Dashboard](https://vercel.com/dashboard) -> "Add New..." -> "Project" -> Import your repository.
3. **Configure Project**:
   - **Framework Preset**: Next.js (should be auto-detected).
   - **Root Directory**: `./` (default).
   - **Build Command**: `next build` (default).
   - **Output Directory**: `.next` (default).
   - **Install Command**: `npm install` (default).
4. **Environment Variables**: Add the following variables in the "Environment Variables" section:
   - `CONTACT_FORM_RECIPIENT`: Your email address.
   - `NEXT_PUBLIC_ANALYTICS_WRITE_KEY`: Your analytics key (optional).
   - `NEXT_PUBLIC_CHAT_ENABLED`: `true` or `false`.
   - `NEXT_PUBLIC_SOCIAL_FEED_ENABLED`: `true` or `false`.
5. **Deploy**: Click "Deploy". Vercel will build and deploy your site.
6. **Verify**: Visit the provided URL to ensure everything works as expected.
