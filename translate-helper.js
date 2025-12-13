// Translation helper script
// This script helps translate the en.json file to other languages
// You can use this with Google Translate API or manually

const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'messages', 'en.json');
const targetLanguages = {
  'id': 'Indonesian',
  'pt': 'Portuguese', 
  'ru': 'Russian',
  'ko': 'Korean',
  'ja': 'Japanese',
  'zh': 'Chinese',
  'ar': 'Arabic'
};

console.log('Translation Helper Script');
console.log('========================\n');
console.log('Source file:', sourceFile);
console.log('\nLanguages to translate:');
Object.entries(targetLanguages).forEach(([code, name]) => {
  console.log(`  ${code} - ${name}`);
});

console.log('\n\nTo translate these files, you can:');
console.log('1. Use Google Cloud Translation API');
console.log('2. Use DeepL API (recommended for quality)');
console.log('3. Copy en.json content to ChatGPT/Claude and ask for translation');
console.log('4. Use professional translation services\n');

// Read the source file
const sourceContent = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
const lineCount = JSON.stringify(sourceContent, null, 2).split('\n').length;

console.log(`Total lines to translate: ${lineCount}`);
console.log(`Estimated translation time (manual): ${Math.ceil(lineCount / 50)} hours\n`);
