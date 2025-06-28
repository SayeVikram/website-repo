const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

sitemap({
  baseUrl: "https://www.sayekarthikeyan.com",
  pagesDirectory: path.resolve(__dirname, '../src'),
  targetDirectory:path.resolve(__dirname, '../src/'),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["404"],
  allowFileExtensions: true
});
