# New Year 2025 Animation 🎆

A professional, responsive web animation celebrating New Year 2025 using pure HTML, CSS, and JavaScript. The animation features a realistic starry sky, animated fireworks, and a cityscape silhouette.

![Animation Preview](/api/placeholder/800/400)

## Features

- **Pure Frontend Stack**: Built with vanilla HTML, CSS, and JavaScript - no dependencies required
- **Fully Responsive**: Adapts seamlessly to all screen sizes and devices
- **High Performance**: Optimized animations using CSS transforms and requestAnimationFrame
- **Realistic Effects**:
  - Dynamic firework launching and explosions
  - Twinkling stars background
  - Glowing moon
  - City silhouette
  - Animated celebration text

## Quick Start

1. Clone this repository:
```bash
git clone https://github.com/your-username/new-year-animation.git
cd new-year-animation
```

2. Open `index.html` in your web browser or serve it using a local development server.

## Project Structure

```plaintext
new-year-animation/
├── index.html      # Main HTML file containing all code
├── README.md       # Documentation
└── LICENSE         # License file
```

## Technical Details

### Animation Components

#### Sky Background
- Gradient background using CSS
- Dynamically generated stars with randomized positions
- Animated moon with radial gradient and glow effect

#### Fireworks
- Launch animation with trajectory calculation
- Particle system for explosions
- Dynamic color generation
- Physics-based particle movement

#### City Silhouette
- SVG-based city skyline
- Optimized for performance
- Responsive scaling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

1. **CSS Animations**
   - Hardware-accelerated transforms
   - Optimized keyframes
   - Efficient particle cleanup

2. **JavaScript Optimizations**
   - Event delegation
   - Efficient DOM manipulation
   - Memory leak prevention
   - Automatic cleanup on window resize

## Customization

### Modifying Fireworks

```javascript
// Adjust firework frequency (milliseconds)
setInterval(createFirework, 800);

// Modify firework colors
const colors = ['#ff0', '#0ff', '#f0f', '#ff5', '#5ff'];

// Adjust particle count
const particles = 30;
```

### Adjusting Star Background

```javascript
// Change number of stars
const numberOfStars = 200;

// Modify star size
star.style.width = Math.random() * 3 + 'px';
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by professional web animations
- SVG city skyline optimized for performance
- Particle system based on modern animation techniques

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter)  
Project Link: [https://github.com/your-username/new-year-animation](https://github.com/your-username/new-year-animation)

---

Made with ❤️ for the web