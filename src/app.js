import page from './lib/page.mjs';

import { addRender } from './middlewares/render.js';

import { renderHome } from './views/home.js';

page(addRender);

page('/index.html', '/');
page('/', renderHome);

page.start();
