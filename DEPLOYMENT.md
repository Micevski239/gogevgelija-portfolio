# Deployment Guide

This guide covers how to deploy the GoGevgelija portfolio website to various hosting platforms.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment for Vite/React apps.

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live at: `https://your-project.vercel.app`

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite
4. Deploy!

### 2. Netlify

**Using Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Using Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect your Git repository

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add base to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/gogevgelija-website/',
  plugins: [react()]
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Configure:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No`

4. Deploy:
```bash
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket and enable static hosting

3. Upload `dist` folder contents to S3

4. Set up CloudFront distribution (optional, for CDN)

5. Configure bucket policy for public access

### 6. DigitalOcean App Platform

1. Connect your Git repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy

## Environment Variables

If you need environment variables (e.g., API keys, analytics):

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

**Important:** Prefix with `VITE_` to expose to client-side code.

## Custom Domain

After deployment, you can add a custom domain:

1. Purchase domain (e.g., gogevgelija.com)
2. In your hosting provider dashboard:
   - Add custom domain
   - Configure DNS records
   - Enable SSL/HTTPS

**DNS Configuration Example:**
```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: your-site.hosting.com
```

## Performance Optimization

1. **Enable Compression**: Most hosting providers auto-enable gzip/brotli
2. **CDN**: Use CloudFront, Cloudflare, or built-in CDN
3. **Caching**: Configure cache headers for static assets
4. **Image Optimization**: Already using optimized PNGs/JPGs
5. **Lazy Loading**: Implemented with Framer Motion

## SSL/HTTPS

All recommended hosting providers offer free SSL certificates (Let's Encrypt).

## Monitoring

Consider adding:
- **Google Analytics**: Track visitors
- **Sentry**: Error monitoring
- **Hotjar**: User behavior analytics

## SEO Optimization

Already included in `index.html`:
- Meta description
- Meta keywords
- Open Graph tags (add these for social sharing)

**Add to index.html for social sharing:**
```html
<meta property="og:title" content="GoGevgelija - Discover the Best of Gevgelija" />
<meta property="og:description" content="Your local guide to events, promotions, and activities in Gevgelija" />
<meta property="og:image" content="/GoGevgelija-01.jpg" />
<meta property="og:url" content="https://gogevgelija.com" />
<meta name="twitter:card" content="summary_large_image" />
```

## Continuous Deployment

Set up automatic deployments on Git push:

1. Connect your repository to hosting provider
2. Enable automatic deployments
3. Every push to `main` branch triggers a new deployment

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify social media links
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Test download buttons
- [ ] Verify SEO meta tags

## Troubleshooting

**Issue: Blank page after deployment**
- Check browser console for errors
- Verify `base` path in vite.config.js
- Ensure all assets are in `public/` folder

**Issue: 404 on refresh**
- Configure hosting for SPA routing
- Add redirect rules to serve index.html

**Issue: Images not loading**
- Use absolute paths: `/logo.png` instead of `./logo.png`
- Ensure images are in `public/` folder

## Support

For deployment issues:
- Vite Docs: [vitejs.dev](https://vitejs.dev)
- Hosting Provider Documentation
- Community forums

---

**Deployed Site URL:** [Update after deployment]
