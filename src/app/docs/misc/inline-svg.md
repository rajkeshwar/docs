Inline external svg files

```js


import path from 'path'
import fs from 'fs'

export default function svgtojs ({ input, output }) {

  const files = fs.readdirSync(input)

  let outputSvgStr = `
  /**
   * GENERATED FILE. PLEASE DO NOT MODIFY
   * 
   * Generated by the script 'node scripts/inline-svg.js'
   * */ \n
  `;

  for (const file of files) {
    if (file.slice(-4) !== '.svg') continue

    const code = fs.readFileSync(path.join(input, file), 'utf-8')

    const name = file.slice(0, -4)
    const body = code.replace(/[\r\n]+/g, '').replace(/\s+/g, ' ');
    const camelCase = name.replace(/-+./g, (m) => m.slice(-1).toUpperCase())

    outputSvgStr += `export const ${camelCase} = '${body}';\n\n\n`;
  }

  const outputSvgFile = path.join(output, 'svg-icons.esm.js');

  // Create the output directory if doesnt exist
  if (!fs.existsSync(output)){
    fs.mkdirSync(output);
  }

  // Save files if specified in output path
  fs.writeFileSync(outputSvgFile, outputSvgStr)

  console.log('Generated successfully')
}

svgtojs({
  input: 'public/svgs',
  output: 'output'
})

```
