Example:

```js
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
  console.log(matches ? 'wide screen' : 'narrow sreen');
});
```

```js
export const installMediaQueryWatcher = (mediaQuery, layoutChangedCallback) => {
    let mql = window.matchMedia(mediaQuery);
    mql.addListener((e) => layoutChangedCallback(e.matches));
    layoutChangedCallback(mql.matches);
};
```

Deep querySelector

```js
const query = `my-app::shadow a[href="/${href}"]`;

window.deepQuerySelector = function(query) {
  const parts = query.split('::shadow');
  let el = document;
  for (let i = 0; i < parts.length; i++) {
    el = el.querySelector(parts[i]);
    if (i % 2 === 0) {
      el = el.shadowRoot;
    }
  }
  return el === document ? null : el;
}
console.log(window.deepQuerySelector);
```
