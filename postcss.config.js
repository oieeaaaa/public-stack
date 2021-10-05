const tailwindcssConfig = require('./tailwind.config');

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: tailwindcssConfig,
    autoprefixer: {}
  }
};
