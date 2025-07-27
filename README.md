# Safar Dil Se - Travel Website

A modern, responsive travel website built with Next.js 14 for Safar Dil Se travel company.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with app directory
- **Interactive Map** - Leaflet.js map showing travel destinations across North India
- **HubSpot Integration** - Lead capture forms for booking inquiries
- **WhatsApp Integration** - Floating chat widget for instant communication
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Dark Mode** - Light/dark theme toggle with persistence
- **SEO Optimized** - Meta tags and structured data for travel business

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Map:** Leaflet.js with OpenStreetMap
- **Forms:** HubSpot
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Extract the project files** to your desired location
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run development server:**
   ```bash
   npm run dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Upload to GitHub:**
   - Create a new repository on GitHub
   - Upload ALL project files (not as ZIP)
   - Commit changes

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🔧 Configuration

### HubSpot Form
The HubSpot form is already configured with:
- **Portal ID:** 243303486
- **Form ID:** 887d4be4-ee48-43ca-aab4-450d9ce1bfb7

### WhatsApp Integration
WhatsApp widget is configured for: **9599863263**

### Social Media
- **Instagram:** @safardilse_2000
- **Email:** safardilse.jiyokhulke@gmail.com

## 🗺️ Map Features

The interactive map includes:
- **Delhi NCR** - Departure point
- **Kasol** - Mini Israel of India
- **Tosh** - Hippie village
- **Manali** - Adventure capital
- **Tungnath** - Highest Shiva temple trek
- **Tirthan Valley** - Natural beauty and trout fishing

## 📱 Contact Integration

- **WhatsApp:** Floating widget with instant messaging
- **HubSpot:** Professional lead capture forms
- **Instagram:** Direct DM integration
- **Email:** Contact form submissions

## 🎨 Customization

### Colors (in tailwind.config.js)
- **Adventure Orange:** #f97316
- **Mountain Blue:** #0ea5e9  
- **Nature Green:** #10b981

### Fonts & Styling
All styling is in `app/globals.css` using Tailwind CSS classes.

## 🐛 Troubleshooting

### Build Errors
- Ensure all files are in correct directories
- Check that `app/` directory exists with `layout.js` and `page.js`
- Verify `package.json` contains all dependencies

### Map Not Loading
- Clear browser cache
- Check console for JavaScript errors
- Ensure internet connection for OpenStreetMap tiles

### HubSpot Form Issues
- Verify Portal ID and Form ID are correct
- Check browser console for loading errors
- Ensure HubSpot script is loading properly

## 📄 File Structure

```
safar-dil-se-travel-website/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Homepage
│   └── globals.css        # Global styles with Leaflet CSS
├── components/
│   ├── HomePage.js        # Main homepage component
│   ├── InteractiveMap.js  # Leaflet map component
│   └── HubSpotForm.js     # HubSpot integration
├── public/
│   └── images/            # Static images
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🔄 Making Updates

1. **Content Updates:** Edit components in `components/` folder
2. **Styling:** Modify `app/globals.css` or Tailwind classes
3. **New Pages:** Add new files in `app/` directory
4. **Deploy:** Push changes to GitHub (auto-deploys on Vercel)

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed: `npm install`
3. Clear build cache: `npm run build` (delete `.next` folder first)
4. Try redeploying on Vercel with fresh build

---

**Safar Dil Se - Jiyo Khul Ke!** 🏔️
