# Sujal S Kamble - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a Full-Stack Developer.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Typing effects, hover animations, and scroll-triggered animations
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Flexbox, CSS Grid, Custom Properties
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome
- **Deployment**: Vercel

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Large Tablet**: 1024px
- **Tablet**: 768px
- **Mobile**: 480px
- **Small Mobile**: 360px

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── profile.png         # Profile image
├── Sujal_S_Kamble_Resume.pdf  # Resume download
└── README.md           # Project documentation
```

## ⚡ Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Open `index.html` in your browser or serve locally:
   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`

## 🎨 Customization

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #52c5f7;
}
```

### Content
- Update personal information in `index.html`
- Replace `profile.png` with your photo
- Update `Sujal_S_Kamble_Resume.pdf` with your resume

## 📧 Contact

- **Email**: kamblesujal835@gmail.com
- **LinkedIn**: [Sujal S Kamble](https://linkedin.com/in/sujalskamble)
- **GitHub**: [sujal511](https://github.com/sujal511)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this portfolio helpful, please give it a star!

## Features

✨ **Modern Design**
- Clean, light-themed aesthetic with soft blue accents
- Responsive design that works on all devices
- Smooth scrolling and elegant animations
- Professional typography with Poppins font

🚀 **Interactive Elements**
- Mobile-friendly navigation menu
- Smooth scroll animations on scroll
- Hover effects on buttons and cards
- Counter animations for statistics
- Typing effect for hero section

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for tablets and desktops
- Touch-friendly interface elements
- Accessible navigation

## Sections Included

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Section** - Personal description with animated statistics
3. **Skills Section** - Technical skills organized by categories
4. **Projects Section** - Featured projects with hover overlays
5. **Education Section** - Educational background and certifications
6. **Contact Section** - Contact information and social links

## Customization Guide

### 1. Personal Information

**Update the Hero Section (`index.html` around line 35):**
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Job Title</h2>
<p class="hero-description">
    Your personal description here...
</p>
```

**Update Contact Information (`index.html` around line 310):**
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<p>Your City, Your Country</p>
```

### 2. Social Media Links

Update all social media links by replacing `#` with your actual URLs:
```html
<a href="https://github.com/yourusername" class="social-link">
<a href="https://linkedin.com/in/yourusername" class="social-link">
<a href="mailto:your.email@example.com" class="social-link">
```

### 3. Skills Section

**Add or modify skills (`index.html` around line 110):**
```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill</span>
    <span class="skill-tag">Another Skill</span>
    <!-- Add more skills -->
</div>
```

### 4. Projects Section

**Update project information (`index.html` around line 180):**
```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Description of your project...
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

**Add project links:**
```html
<div class="project-links">
    <a href="https://github.com/yourusername/project" class="project-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://yourproject.com" class="project-link">
        <i class="fas fa-external-link-alt"></i>
    </a>
</div>
```

### 5. Education Section

**Update education details (`index.html` around line 280):**
```html
<div class="education-info">
    <h3>Your Degree</h3>
    <h4>Your Institution</h4>
    <p class="education-date">Start Year - End Year</p>
    <p class="education-grade">Your Grade/GPA</p>
</div>
```

### 6. Colors and Styling

**Primary Colors (in `styles.css`):**
- Primary Blue: `#3498db`
- Secondary Blue: `#52c5f7`
- Text Dark: `#2c3e50`
- Text Light: `#5a6c7d`
- Background: `#fafbfc`

**To change the accent color, find and replace:**
```css
/* Replace #3498db with your preferred color */
/* Replace #52c5f7 with a lighter shade of your color */
```

### 7. Profile Photo

To add your profile photo:
1. Replace `images/profile.svg` with your actual photo (recommended: `profile.jpg` or `profile.png`)
2. Ensure the image is square (300x300px or larger) for best results
3. Update the HTML if you change the file extension:

```html
<img src="images/profile.jpg" alt="Sujal S Kamble" class="profile-image">
```

### 8. Images

To add images to projects:
1. Create an `images` folder in your project directory
2. Add your project images
3. Update the CSS background-image for `.project-image`:

```css
.project-card:nth-child(1) .project-image {
    background-image: url('images/project1.jpg');
    background-size: cover;
    background-position: center;
}
```

### 8. Resume Download

Add your resume file to the project folder and update the link:
```html
<a href="your-resume.pdf" class="btn btn-secondary" download>
    <i class="fas fa-download"></i> Resume
</a>
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md          # This file
└── images/            # Your images (create this folder)
    ├── project1.jpg
    ├── project2.jpg
    └── profile.jpg
```

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minimize HTTP Requests**: Keep external dependencies minimal
3. **Test on Multiple Devices**: Use browser dev tools to test responsiveness
4. **Check Loading Speed**: Test with slow network connections

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Import your GitHub repository to Vercel
2. Deploy with zero configuration

## Support

If you need help customizing this portfolio:
1. Check the HTML comments for guidance
2. Refer to this README for common customizations
3. Test changes in small increments

## License

This template is free to use for personal and commercial projects.

---

**Happy coding! 🚀**