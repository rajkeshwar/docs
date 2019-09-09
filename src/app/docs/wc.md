Dynamically register all your web-components

```js
// filename demo-component.wc.js
// All filename must have .wc.js extension 
export class DemoWcComponent extends HTMLElement {

  static get is() {
    return 'demo-wc-comp';
  }
  // ...
}

// Grab all the files which has .wc.js extension 
// Register as web component with the static property is 
const context = require.context("./", true, /\.wc\.js$/);

// Dynanically registering all the custom elements as web components
const importAllWebComponents = r => r.keys().forEach(key => {
  const [cmpClazz] = Object.values(r(key));
  if (!window.customElements.get(cmpClazz.is)) {
    window.customElements.define(cmpClazz.is, cmpClazz);
  }
});
```
