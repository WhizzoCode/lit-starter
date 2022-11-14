import {LitElement, css, html} from 'lit';

export class TheApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <h1>lit-starter</h1>
    `;
  }

}

customElements.define('the-app', TheApp);
