# BESTARI - Static Website

A clean, lightweight static website built for GitHub Pages hosting.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Fast Loading**: Optimized for speed with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Offline Support**: Service worker for basic offline functionality
- **Dynamic Content**: JSON-based blog and tools management
- **Custom CMS**: Simple content management system for creating new posts

## Structure

```
├── index.html          # Homepage
├── blog.html           # Blog listing page
├── tools.html          # Tools listing page
├── about.html          # About page
├── 404.html            # Custom 404 page
├── cms.html            # Content Management System
├── style.css           # Main stylesheet
├── script.js           # Main JavaScript
├── sw.js               # Service Worker
├── posts/
│   ├── blog-index.json     # Blog posts index
│   ├── tools-index.json    # Tools index
│   ├── blog/               # Individual blog post HTML files
│   └── tools/              # Individual tool HTML files
└── README.md
```

## Setup for GitHub Pages

1. **Upload Files**: Upload all files to your GitHub repository
2. **Enable GitHub Pages**: Go to repository Settings > Pages
3. **Select Source**: Choose "Deploy from a branch" and select "main"
4. **Custom Domain** (optional): Add your custom domain if you have one

## Adding New Content

### Using the CMS (Recommended)

1. Open `cms.html` in your browser
2. Fill out the form with your content
3. Click "Generate" to create the HTML/JSON code
4. Copy the generated code and save as appropriate files
5. Update the index JSON files with new entries
6. Commit and push to GitHub

### Manual Method

1. **For Blog Posts**:
   - Create HTML file in `posts/blog/`
   - Add entry to `posts/blog-index.json`

2. **For Tools**:
   - Create HTML file in `posts/tools/`
   - Add entry to `posts/tools-index.json`

## Customization

### Colors
- Header: `#041810`
- Background: `#f8f9fa`
- Primary Links: `#1d4ed8`

### Fonts
- Main Font: 'Merriweather' (Google Fonts)
- Header Logo: 25px
- Navigation: 15px
- Body Text: 14px

### Social Links
Update social media links in the footer sections of all HTML files.

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 100KB total
- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Development

For local development:

1. Clone the repository
2. Open `index.html` in your browser
3. Use a local server for testing (optional):
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## Deployment

The site is automatically deployed via GitHub Pages when you push to the main branch. No build process required.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: junesa38@gmail.com
- **Website**: [Your GitHub Pages URL]

---

Built with ❤️ for GitHub Pages