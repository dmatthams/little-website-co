let mix = require('laravel-mix');

mix.js('src/home.js', 'dist').vue();

mix.browserSync({
	proxy: 'https://little-website-co.webflow.io',
	files: "./src/",
	serveStatic: ['.'],
	// rewriteRules: [
	//   {
	// 	match: new RegExp('https://uploads-ssl.webflow.com/5f11a16f2e41f9b9380c2796/css/dmatthams.webflow.26d0ca22c.min.css'),
	// 	fn: function() {
	// 	  return '/app.css';
	// 	}
	//   }
	// ]
});