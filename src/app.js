import page from './lib/page.mjs';

import { text } from './utils.js';

import { addRender } from './middlewares/render.js';
import { title } from './middlewares/title.js';

import { renderContact } from './views/contact.js';
import { renderHome } from './views/home.js';

page(addRender);

page('/index.html', '/');
page('/', title(text.home[localStorage.getItem('lang') || 'bg']), renderHome);
page(
  '/contact',
  title(text.contacts[localStorage.getItem('lang') || 'bg']),
  renderContact
);

page.start();
