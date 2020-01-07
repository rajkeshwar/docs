Vscode snippets for LitElement

```json
{
	"Lit_Element": {
		"prefix": "lit-element",
		"body": [
			"import { LitElement, html } from 'lit-element';",
			"",
			"export class $1 extends LitElement {",
			"",
			"  static get is() {",
			"    return '$2';",
			"  }",
			"",
			"  static get properties() {",
			"    return {",
			"      name: {",
			"        type: String,",
			"      },",
			"    };",
			"  }",
			"",
			"  constructor() {",
			"    super();",
			"    this.name = 'Rajkeshwar Prasad';",
			"  }",
			"",
			"  connectedCallback() {",
			"    super.connectedCallback();",
			"  }",
			"",
			"  render() {",
			"    return html`",
			"      <h3 class=\"chat-modal\">${this.name}</h3>",
			"    `;",
			"  }",
			"}",
			""
		]
  }
