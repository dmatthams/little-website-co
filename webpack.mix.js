let mix = require('laravel-mix');

mix.js('src/home.js', 'dist').vue();
mix.css('src/home.css', 'dist');

mix.browserSync({
	proxy: 'https://little-website-co.webflow.io',
	files: "./src/",
	serveStatic: ['.'],
	rewriteRules: [
	  {
		match: new RegExp(/https:\/\/dmatthams.github.io\/little-website-co\//g),
		fn: function() {
		  return '/dist/';
		}
	  }
	]
});