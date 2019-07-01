

### Custom element snippets for vs-code

```js
import { LitElement, html, unsafeCSS } from "lit-element";

import styles from "./chat-modal.scss";

export class ChatModal extends LitElement {

  static get is() {
    return 'chat-modal';
  }

  static get styles() {
    return unsafeCSS`
      ${styles.toString()}
    `;
  }

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.styles = styles;
    this.name = 'Rajkeshwar Prasad';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <style>${this.styles}</style>
      <h3 class="chat-modal">{this.name}</h3>
    `;
  }
}
```

### Snippets to convert to for `user_snippets.json`

```js
str.split(/\n/).map(it => `"${it}",`).join('\n')
```
