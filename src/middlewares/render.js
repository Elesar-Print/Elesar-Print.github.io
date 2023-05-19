import { render } from '../lib/lit-html.js';
import { layoutTemplate } from '../views/layout.js';

const root = document.getElementById('content');

export function addRender(ctx, next) {
  ctx.render = renderView.bind(ctx);

  next();
}

function renderView(content) {
  document.title = [this?.customTitle, 'Elesar Print']
    .filter((x) => x) //* Removes falsy values
    .join(' | ');

  render(layoutTemplate(content), root);
}
