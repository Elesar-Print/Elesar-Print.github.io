import { html } from '../lib/lit-html.js';
import { text } from '../utils.js';

export function renderHome(ctx) {
  ctx.render(
    homeTemplate(
      text.home.welcomeHeader[localStorage.getItem('lang') || 'bg'],
      text.home.welcomeText[localStorage.getItem('lang') || 'bg'],
      text.home.buttonLearnMore[localStorage.getItem('lang') || 'bg'],
      text.home.clients[localStorage.getItem('lang') || 'bg']
    )
  );

  $(document).ready(function () {
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });
}

const homeTemplate = (header, text, buttonText, clients) => html`<link
    href="../../static/css/home.css"
    rel="stylesheet"
  />
  <div class="jumbotron text-white mb-0" style="height: 100vh;">
    <div class="container">
      <h1 class="display-3">${header}</h1>
      <p>${text}</p>
      <!-- <p>
        <a class="btn btn-primary btn-lg" href="#" role="button"
          >${buttonText} &raquo;</a
        >
      </p> -->
    </div>
  </div>
  <div class="py-4 bg-primary text-white">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-4 px-5 mb-3">
        <h2><i class="fas fa-print"></i> Принтер Mimaki UJF-6042</h2>
        <p>
          <i class="fas fa-check"></i>
          Разполага с уникална глава с винтов механизъм, който подобрява
          точността на капките мастило при печат на изображения върху различни
          медии.
        </p>
        <p>
          <i class="fas fa-check"></i>
          Прецизността, с която се печата всяка точка мастило, значително
          намалява възможността печатът да стане на ленти.
        </p>
        <p>
          <i class="fas fa-check"></i>
          Възможност да се печата с четири цвята / CMYK / плюс с 2-ино бяло, лак
          и грунд за метал.
        </p>
        <p>
          <i class="fas fa-check"></i>
          Предлага офорт – техника, която се възползва от корозионните качества
          на метала. Това позволява постигането на изображения с високо качество
          и при печат върху метал.
        </p>
        <p>
          <i class="fas fa-check"></i>
          Принтирането с различни слоеве на мастило прави всяко изображение да
          изглежда по-привлекателно за окото.
        </p>
        <!-- <p>
          <a class="btn btn-secondary" href="#" role="button"
            >View details &raquo;</a
          >
        </p> -->
      </div>
      <div class="col-md-4 align-self-center">
        <img class="img-fluid" src="../../static/images/printer.png" />
      </div>
      <div class="col-md-2"></div>
      <!-- <div class="col-md-4">
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
      </div> -->
    </div>
    <hr />
  </div>
  <div class="container mb-5">
    <h2>${clients}</h2>
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
