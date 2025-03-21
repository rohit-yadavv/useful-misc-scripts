const fs = require("fs");

// Input file (change this to your file)
const inputFilePath = "input.txt"; // Change to your .js, .html, or any file
const outputFilePath = "translations.json";

// Read the file content
const fileContent = fs.readFileSync(inputFilePath, "utf-8");

// Regular expression to extract text (improves detection)
const textRegex = /[a-zA-Z0-9\s.,!?'"-]+/g;
const matches = fileContent.match(textRegex) || [];

// Create JSON object
const translations = {};
matches.forEach(text => {
  const trimmed = text.trim();
  if (trimmed.length > 1 && !translations[trimmed]) {
    translations[trimmed] = trimmed; // Auto-map text to itself
  }
});

// Write to JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(translations, null, 2));

console.log(`✅ Extracted text saved to ${outputFilePath}`);
