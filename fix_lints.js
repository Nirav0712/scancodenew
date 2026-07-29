const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('d:/om majithiya/scancodeweb2/scancodeweb/app');

files.filter(f => f.endsWith('.tsx')).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Fix: react/jsx-no-comment-textnodes
  // E.g., >// HARDWARE //< into >{"// HARDWARE //"}<
  newContent = newContent.replace(/>\s*\/\/\s*([\w\s\-&]+)\s*\/\/\s*</g, '>{"// $1 //"}<');

  // Fix: react/no-unescaped-entities
  if(file.includes('about\\page.tsx') || file.includes('about/page.tsx')) {
     newContent = newContent.replace(/We've/g, 'We&apos;ve');
  }
  if(file.includes('TestimonialsSection.tsx')) {
     newContent = newContent.replace(/Don't/g, 'Don&apos;t');
     newContent = newContent.replace(/>"([^<]+)"</g, '>&quot;$1&quot;<');
  }
  if(file.includes('contact\\page.tsx') || file.includes('contact/page.tsx')) {
     newContent = newContent.replace(/We'd/g, 'We&apos;d').replace(/you're/g, 'you&apos;re');
  }
  if(file.includes('services\\page.tsx') || file.includes('services/page.tsx')) {
     newContent = newContent.replace(/don't/g, 'don&apos;t');
  }
  if(file.includes('solutions\\page.tsx') || file.includes('solutions/page.tsx')) {
     newContent = newContent.replace(/you're/g, 'you&apos;re');
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Fixed ' + file);
  }
});
