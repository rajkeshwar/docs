### Copy to clipboard

```js 
Array.from(document.querySelectorAll('button.copy')).forEach(btn => {
    btn.onclick = event => {
      const btn = event.target;
      const ctr = event.target.parentNode;
      const code = ctr.querySelector('pre');
      const ta = document.createElement('textarea');
      ctr.removeChild(btn);
      ta.value = code.textContent;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch(e) {}
      document.body.removeChild(ta);
      ctr.insertBefore(btn, code);
      requestAnimationFrame(_ => btn.focus());
    };
  });
  ```
  
  ### Github gh-pages push
  
  ```sh
  #!/bin/bash

set -e 

git stash
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
npm run build
git branch -D gh-pages
git checkout -f --orphan gh-pages
rm .gitignore
git add site/*
git mv site/* .
git clean -f
git commit -am 'Website'
git checkout $CURRENT_BRANCH
git stash pop 
```
