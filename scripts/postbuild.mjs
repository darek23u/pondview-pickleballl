import { readFile, mkdir, writeFile } from 'node:fs/promises';
const html=await readFile('dist/index.html','utf8');
for (const [path,title] of [['about','About Us'],['contact','Contact Us'],['code-of-conduct','Code of Conduct']]) {
 await mkdir(`dist/${path}`,{recursive:true});
 await writeFile(`dist/${path}/index.html`,html.replace(/<title>.*?<\/title>/s,`<title>${title} | Pondview Pickleball</title>`));
}
