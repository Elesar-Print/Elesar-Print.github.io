import { html } from '../lib/lit-html.js';
import { text } from '../utils.js';

export const layoutTemplate = (ctx, content) => html`<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <a class="logo navbar-brand text-white font-weight-bold" href="/">
        <img src="../../static/images/logo.png" width=60 heigth=60 /> <span>${
          text.nav.title[localStorage.getItem('lang') || 'bg']
        }</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link text-white font-weight-bold" href="/"
              ><i class="fa-solid fa-house"></i> ${
                text.nav.home[localStorage.getItem('lang') || 'bg']
              }</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white font-weight-bold" href="/contact"><i class="fa-solid fa-phone"></i> ${
              text.nav.contacts[localStorage.getItem('lang') || 'bg']
            }</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link font-weight-bold text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa-solid fa-globe"></i> ${
                text.nav.language[localStorage.getItem('lang') || 'bg']
              }
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="javascript:void(0)" @click="${() =>
                ctx.setLang('en')}">English </a>
              <a class="dropdown-item" href="javascript:void(0)" @click="${() =>
                ctx.setLang('bg')}">Български</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div>
    <main role="main">${content}</main>
  </div>
  <footer class="container">
    <p>&copy; ${
      text.footer[localStorage.getItem('lang') || 'bg']
    } 2018-${new Date().getFullYear()}</p>
  </footer>
</div>`;
