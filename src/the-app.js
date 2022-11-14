import {LitElement, css, html} from 'lit';

export class TheApp extends LitElement {

  static properties = {
    myValue: { type: Number }
  };

  constructor() {
    super();
    this.myValue = 0;
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
