import { html } from '../lib/lit-html.js';

export function renderHome(ctx) {
  ctx.render(homeTemplate());
}

const homeTemplate = () => html`<link
    href="../../static/css/home.css"
    rel="stylesheet"
  />
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Hello, world!</h1>
      <p>
        This is a template for a simple marketing or informational website. It
        includes a large callout called a jumbotron and three supporting pieces
        of content. Use it as a starting point to create something more unique.
      </p>
      <p>
        <a class="btn btn-primary btn-lg" href="#" role="button"
          >Learn more &raquo;</a
        >
      </p>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Etiam porta sem malesuada magna mollis
          euismod. Donec sed odio dui.
        </p>
        <p>
          <a class="btn btn-secondary" href="#" role="button"
            >View details &raquo;</a
          >
        </p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Etiam porta sem malesuada magna mollis
          euismod. Donec sed odio dui.
        </p>
        <p>
          <a class="btn btn-secondary" href="#" role="button"
            >View details &raquo;</a
          >
        </p>
      </div>
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Vestibulum id ligula porta felis euismod semper. Fusce
          dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
          fermentum massa justo sit amet risus.
        </p>
        <p>
          <a class="btn btn-secondary" href="#" role="button"
            >View details &raquo;</a
          >
        </p>
      </div>
    </div>
    <hr />
  </div>
  <div class="container mb-5">
    <h2>Our Clients</h2>
    <section class="customer-logos slider">
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
        />
      </div>
      <div class="slide">
        <img
          src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
        />
      </div>
    </section>
  </div>`;
