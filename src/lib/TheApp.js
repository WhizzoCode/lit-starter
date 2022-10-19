import {LitElement, html} from 'lit';

export class TheApp extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>lit-starter</h1>
    `;
  }

}

customElements.define('the-app', TheApp);
