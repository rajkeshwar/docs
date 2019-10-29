Create a version bump in npm version 
```sh 
#!/usr/bin/env node

/*
 * @Author: rajkeshwar.prasad.extern@ing.de 
 * @Date: 2019-08-28 15:10:07 
 * @Last Modified by: rajkeshwar.prasad.extern@ing.de
 * @Last Modified time: 2019-08-28 15:46:14
 */

const shell = require('shelljs');
const { version } = require('../package.json');

const SILENT = { silent: true };

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// Abort the script if there are uncommitted files
if (shell.exec('git diff-index --quiet HEAD', SILENT).code !== 0) {
  shell.echo('Error: Uncommitted files. Please commit your files to procceed.');
  shell.exit(1);
}

// eslint-disable
// npm --no-git-tag-version version $(node config/bump.js)
// Ex: npm --no-git-tag-version version  "10.1.6-develop-80a3053"
// eslint-enable 

let commitHash = '';
if (commitHash = shell.exec('git rev-parse --short HEAD', SILENT)) {
  // Getting the base version from package.json
  const baseVersion = version.match(/[\d+]{1,}\.[\d+]{1,}\.[\d+]{1,}/)[0];

  // Concatenating base-version with develop-commit-hash
  const hashedVersion = `${baseVersion}-develop-${commitHash}`;
  shell.exec(`npm --no-git-tag-version version ${hashedVersion}`, SILENT);

  // Show on console the changed version while pushing the code
  console.log(`package.json bumped to: ${hashedVersion}`);

  // Since the package.json got modified hence need to commit the changes
  shell.exec(`git add . && git commit -m ${commitHash}`, SILENT);
}

shell.exit(0);
```
