import { html, nothing } from '../lib/lit-html.js';
import { classMap } from '../lib/directives/class-map.js';

export const layoutTemplate = (content) => html`<header>
    <nav
      class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Elesar Print</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse d-sm-inline-flex justify-content-between"
        >
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                asp-area="Customer"
                asp-controller="Home"
                asp-action="Index"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                asp-area="Customer"
                asp-controller="Home"
                asp-action="Privacy"
                >Privacy</a
              >
            </li>
            @if (this.User.IsInRole(Roles.Admin)) {
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Content Managment
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a
                    class="dropdown-item"
                    asp-area="Admin"
                    asp-controller="Category"
                    asp-action="Index"
                    >Category</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li class="nav-item">
                  <a
                    class="dropdown-item"
                    asp-area="Admin"
                    asp-controller="Product"
                    asp-action="Index"
                    >Product</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
              </ul>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="container mb-3 pb-3" style="min-height:100vh">
      <main role="main" class="pb-3">${content}</main>
    </div>
  </main>
  <footer class="border-top footer text-muted bg-primary">
    <div class="container">&copy; @DateTime.Now.Year - Elesar Print</div>
  </footer>`;
