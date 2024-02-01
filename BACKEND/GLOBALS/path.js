import path from "path";
const __dirname = import.meta.dirname;

const filePath = path.join("/content","subfolder","test.js");

console.log(filePath);

const mainPath = path.resolve(__dirname, 'content','subfolder');
console.log(mainPath);
