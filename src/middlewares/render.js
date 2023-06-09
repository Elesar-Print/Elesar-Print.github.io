import { render } from '../lib/lit-html.js';
import { text } from '../utils.js';
import { layoutTemplate } from '../views/layout.js';

const root = document.getElementById('content');

export function addRender(ctx, next) {
  ctx.render = renderView.bind(ctx);
  ctx.setLang = (lang) => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  };

  next();
}

function renderView(content) {
  document.title = [
    this?.customTitle,
    text.title[localStorage.getItem('lang') || 'bg'],
  ]
    .filter((x) => x) //* Removes falsy values
    .join(' | ');

  render(layoutTemplate(this, content), root);
}
