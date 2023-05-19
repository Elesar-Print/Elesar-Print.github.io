import { html } from '../lib/lit-html.js';

export function renderHome(ctx) {
  ctx.render(homeTemplate());
}

const homeTemplate = () => html`<h1>Hello World!</h1>`;
