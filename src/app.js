import page from './lib/page.mjs';

import { addRender } from './middlewares/render.js';
import { renderContact } from './views/contact.js';

import { renderHome } from './views/home.js';

page(addRender);

page('/index.html', '/');
page('/', renderHome);
page('/contact', renderContact);

page.start();
