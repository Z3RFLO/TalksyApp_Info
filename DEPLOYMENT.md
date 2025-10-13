# Deployment Guide - Talksy Info

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Vite and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   - Drag and drop the `dist` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repo for automatic deployments

### Option 3: GitHub Pages
1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Environment Variables

No environment variables are required for this project.

## 📊 Performance Optimization

The project is already optimized for production:
- **Bundle size**: ~289KB (gzipped: ~92KB)
- **CSS size**: ~7.6KB (gzipped: ~2.1KB)
- **Lighthouse score**: 90+ expected

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'talksy-dark': '#010004',
  'talksy-slate': '#312a3d',
  'talksy-purple': '#8b64c1',
  'talksy-lilac': '#dfd9f6',
  'talksy-blue': '#6790af'
}
```

### Content
- Update text content in component files
- Replace placeholder images in `public/` folder
- Modify meta tags in `index.html`

### Animations
- Adjust animation timings in `src/lib/motionVariants.js`
- Modify blob animations in `tailwind.config.js`

## 🔍 SEO Optimization

The project includes:
- Meta tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Open Graph tags

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly interactions
- Optimized viewport settings
- Mobile menu with smooth animations

## 🚀 Production Checklist

- [ ] Update all placeholder content
- [ ] Add real images and assets
- [ ] Configure custom domain (if needed)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit
- [ ] Set up monitoring and error tracking

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## 📞 Support

For deployment issues or questions, refer to:
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Documentation](https://vercel.com/docs)

