# AID UP Landing Page - Cloudflare Pages Deployment Guide

## Overview

This landing page uses device-aware CTA routing:
- **Mobile users**: Direct redirect to `https://myaidup.com/native_app_page?signup=yes`
- **Desktop users**: QR code modal with scannable link

## Prerequisites

1. Cloudflare account (free tier works)
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Access to your domain DNS (myaidup.com)

---

## Step 1: Push to Git Repository

```bash
# Initialize git if not already
git init

# Add all files
git add .

# Commit
git commit -m "Initial landing page with device-aware CTA routing"

# Add remote (replace with your repo)
git remote add origin https://github.com/YOUR_USERNAME/aidup-landing.git

# Push
git push -u origin main
```

---

## Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Authorize and select your repository
5. Configure build settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | None (or Vite) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave blank) |
| **Node.js version** | 18 or 20 |

6. Click **Save and Deploy**

---

## Step 3: Configure Custom Domain (Optional)

If you want to host at `landing.myaidup.com` or similar:

1. In Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `landing.myaidup.com`
4. Cloudflare will automatically configure DNS if domain is on Cloudflare

### Alternative: Subdirectory on Main Domain

If you want `myaidup.com/landing`:
- You'll need to configure a Cloudflare Worker to route traffic
- Or use Bubble's SEO settings to redirect

---

## Step 4: Environment Variables (Optional)

If you need different URLs for staging vs production:

1. In Pages project → **Settings** → **Environment variables**
2. Add for Production:
   ```
   VITE_BUBBLE_URL=https://myaidup.com
   ```
3. Add for Preview:
   ```
   VITE_BUBBLE_URL=https://myaidup.com/version-test
   ```

Then update `src/lib/deviceRouting.ts`:
```typescript
export const BUBBLE_APP_URL = import.meta.env.VITE_BUBBLE_URL || 'https://myaidup.com';
```

---

## Step 5: Verify Bubble Integration

Your Bubble app at `native_app_page` should:

1. **Read URL parameter**: `signup` (yes/no)
2. **On page load workflow**:
   - Condition: `Get signup from page URL is "yes"`
   - Action: Set state to show signup modal/flow

This matches your existing workflow shown in the screenshots.

---

## Analytics

Cloudflare Pages includes **Web Analytics** automatically:
- Page views
- Unique visitors
- Geographic distribution
- Device breakdown

To enable:
1. Pages project → **Analytics**
2. Cloudflare auto-injects the tracking script

---

## Deployment Workflow

After initial setup, deployments are automatic:

1. Push to `main` branch → Production deploy
2. Push to other branches → Preview deploy (unique URL)
3. Preview URLs look like: `abc123.aidup-landing.pages.dev`

---

## Troubleshooting

### Build Fails

```bash
# Test locally first
npm install
npm run build
```

Common issues:
- Missing TypeScript types: Install `@types/*` packages
- Tailwind not working: Check `tailwind.config.js` content paths

### QR Code Not Rendering

The fallback uses `api.qrserver.com` which should always work. If the npm package fails:
- Check console for errors
- Verify `qrcode` package is installed

### Mobile Detection Not Working

Test by:
1. Chrome DevTools → Toggle device toolbar
2. Select iPhone/Android
3. Refresh page and click CTA

---

## Cost Summary

| Service | Monthly Cost |
|---------|--------------|
| Cloudflare Pages | $0 |
| Cloudflare Analytics | $0 |
| Custom Domain | $0 (if already on CF) |
| SSL Certificate | $0 (automatic) |
| **Total** | **$0** |

---

## Files Modified

- `src/lib/deviceRouting.ts` - Device detection + routing logic
- `src/components/CTAButton.tsx` - Reusable CTA with QR modal trigger
- `src/components/QRCodeModal.tsx` - QR code popup for desktop
- `src/components/Hero.tsx` - Updated to use CTAButton
- `src/components/Navigation.tsx` - Updated to use CTAButton
- `src/components/FinalCTA.tsx` - Updated to use CTAButton
- `package.json` - Added qrcode dependency
- `public/_headers` - Security headers
- `public/_redirects` - SPA routing
- `tailwind.config.js` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
