const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

sitemap({
  baseUrl: "https://www.sayekarthikeyan.com",
  pagesDirectory: path.resolve(__dirname, '../src/app'),
  targetDirectory:path.resolve(__dirname, '../src/app'),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["404"],
  allowFileExtensions: false
});
