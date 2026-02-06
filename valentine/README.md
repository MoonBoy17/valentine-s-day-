# 💝 Valentine's Day Interactive Website

A romantic, playful, and emotionally warm Valentine's Day website experience created with pure HTML, CSS, and JavaScript. No frameworks, no dependencies—just heartfelt code.

![Valentine's Day](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎭 Five Interactive Sections

1. **Landing Screen** - Sweet greeting with animated button and heart burst effect
2. **Valentine Proposal** - Interactive "Will you be my Valentine?" with playful dodging "No" button
3. **Memory Lane** - Scroll-based romantic memories with smooth animations
4. **Love Letter** - Typewriter effect displaying a heartfelt message
5. **Celebration Finale** - Confetti explosion and final romantic message

### 🎨 Design Highlights

- **Soft Pastel Palette**: Blush pink, lavender, and cream colors
- **Smooth Animations**: 60fps GPU-accelerated CSS animations
- **Floating Hearts**: Background hearts that respond to clicks
- **Glassmorphism**: Modern blur effects on cards
- **Responsive Design**: Works beautifully on mobile and desktop

### 🎮 Easter Eggs

- 💖 **Clickable Hearts**: Click floating hearts for surprise messages
- ✨ **Double-click Sparkles**: Hidden messages on sparkle elements
- 🎮 **Konami Code**: Try the classic cheat code (↑ ↑ ↓ ↓ ← → ← →)

### 🎵 Background Music

Toggle romantic background music during the love letter section for an enhanced emotional experience.

## 🚀 Quick Start

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/valentine-website.git
   cd valentine-website
   ```

2. **Open in browser**
   - Simply double-click `index.html`
   - Or right-click → Open with → Your Browser

That's it! No build process, no dependencies.

### Adding Your Song

Replace `45_0HW2p0x.mp3` with your own romantic song, or update the filename in `index.html`:

```html
<audio id="bgMusic" loop>
    <source src="your-song.mp3" type="audio/mpeg">
</audio>
```

## 📝 Customization

### Personalizing Messages

**Love Letter** (`script.js` line 195):
```javascript
const loveLetterText = `Your personalized message here...`;
```

**Memory Cards** (`index.html` lines 71-100):
Update the 6 memory cards with your own special moments, emojis, and captions.

**Landing Greeting** (`index.html` line 41):
```html
<h1 class="main-title">Hey [Name]! 💕</h1>
```

### Color Theme

Edit CSS variables in `style.css`:
```css
:root {
    --blush-pink: #FFB6C1;
    --rose: #FF69B4;
    --lavender: #E6E6FA;
    --cream: #FFFDD0;
}
```

## 🎯 User Journey

```
Landing → Proposal → Memories → Love Letter → Celebration
   ↓         ↓          ↓           ↓            ↓
  Click    Yes/No    Scroll      Typewriter   Confetti
  Hearts   Choice    Cards       Effect       & Hearts
```

## 🛠️ Technical Details

### Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Animations, Grid, Flexbox
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - Pacifico & Quicksand typography

### Performance

- ⚡ **Load Time**: Instant (< 50KB total)
- 🎯 **FPS**: Smooth 60fps animations
- 📱 **Mobile**: Fully responsive
- ♿ **Accessibility**: Keyboard navigation, reduced motion support

### Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📂 File Structure

```
valentine-website/
├── index.html          # Main HTML structure
├── style.css           # Complete styling & animations
├── script.js           # Interactive functionality
├── 45_0HW2p0x.mp3     # Background music
└── README.md          # You are here!
```

## 🎬 Deployment Options

### GitHub Pages (Free & Easy)

1. Push your code to GitHub
2. Go to **Settings → Pages**
3. Select **main** branch → **Save**
4. Your site will be live at `https://yourusername.github.io/valentine-website`

### Netlify Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your folder
3. Get instant hosting and shareable link

### Other Options

- Vercel
- Firebase Hosting
- Any static hosting service

## 💡 Usage Ideas

### Delivery Methods

1. **Direct Link** - Text or email the website URL
2. **QR Code** - Generate a QR code for a printed card
3. **Screen Share** - Watch them experience it on video call
4. **Scheduled Send** - Time it for midnight on Valentine's Day

### Make It Extra Special

- Add actual photos to memory cards
- Record a personal audio message
- Create a countdown timer
- Add more personalized easter eggs

## 🎨 Design Philosophy

This website prioritizes **emotional impact** over technical complexity:

1. **Progressive Disclosure** - Each section reveals gradually
2. **Playful Interaction** - "No" button creates laughter
3. **Intentional Pacing** - Typewriter forces slower, intimate reading
4. **Surprise & Delight** - Easter eggs reward exploration
5. **Personal Touch** - Every element is customizable

## 📸 Screenshots

> Add your own screenshots here after deploying!

## 🤝 Contributing

This is a personal project, but feel free to:
- Fork it for your own Valentine
- Suggest improvements via issues
- Share your customized versions

## 📜 License

MIT License - Feel free to use this for your own romantic endeavors! ❤️

## 💖 Made With Love

Created for someone special. May your Valentine's Day be filled with joy and love!

---

**Pro Tip**: Don't forget to customize the love letter and memory cards before sharing! The personal touches make all the difference. 💝✨

---

<div align="center">

### ⭐ If this helped you sweep someone off their feet, consider giving it a star!

**Built with love by [Harsh](https://github.com/yourusername)**

</div>
