const src = [
  // AdminLTE Dist
  {
    from: 'dist/css/',
    to  : 'docs/assets/css/'
  },
  {
    from: 'dist/js/',
    to  : 'docs/assets/js/'
  },
  // jQuery
  {
    from: 'node_modules/jquery/dist/',
    to  : 'docs/assets/src/jquery/'
  },
  // Popper
  {
    from: 'node_modules/popper.js/dist/',
    to  : 'docs/assets/src/popper/'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/dist/js/',
    to  : 'docs/assets/src/bootstrap/js/'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css/',
    to  : 'docs/assets/src/fontawesome-free/css/'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
    to  : 'docs/assets/src/fontawesome-free/webfonts/'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars/js/',
    to  : 'docs/assets/src/overlayScrollbars/js/'
  },
  {
    from: 'node_modules/overlayscrollbars/css/',
    to  : 'docs/assets/src/overlayScrollbars/css/'
  }
]

module.exports = src
