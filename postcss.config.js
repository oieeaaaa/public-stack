// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      purge: {
        enabled: true,
        content: ["./public/**/*.html"]
      },
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {}
      },
      variants: {},
      plugins: []
    },
    autoprefixer: {}
  }
};
