import { html } from '../lib/lit-html.js';
import { text } from '../utils.js';

export function renderContact(ctx) {
  ctx.render(contactsTemplate(sendEmail));

  function sendEmail(event) {
    event.preventDefault();

    const button = document.getElementById('send-email');
    button.disabled = true;

    emailjs.init('6rh4IuhCdUoLBLrsj');

    const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    if (!params.name || !params.email || !params.message) {
      Swal.fire(
        text.alert.error[localStorage.getItem('lang') || 'bg'],
        text.alert.fields[localStorage.getItem('lang') || 'bg'],
        'error'
      );
      button.disabled = false;
      return;
    }

    const serviceId = 'service_yx05bzk';
    const templateId = 'template_pvh9qqc';
    emailjs
      .send(serviceId, templateId, params)
      .then((_) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        Swal.fire(
          text.alert.success[localStorage.getItem('lang') || 'bg'],
          text.alert.sEmail[localStorage.getItem('lang') || 'bg'],
          'success'
        );
      })
      .catch((_) => {
        Swal.fire(
          text.alert.error[localStorage.getItem('lang') || 'bg'],
          text.alert.eEmail[localStorage.getItem('lang') || 'bg'],
          'error'
        );
      })
      .finally(() => (button.disabled = false));
  }
}

const contactsTemplate = (sendEmail) =>
  html`<div class="container mt-4">
    <h1 class="text-center">
      ${text.contacts[localStorage.getItem('lang') || 'bg']}
    </h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="embed-responsive embed-responsive-1by1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.5208804988956!2d23.29162087643999!3d42.73503067116057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa903e24151d03%3A0xc909551ffc0546ae!2z0YPQuy4g4oCe0JHRj9C7INC70Y7Qu9GP0LrigJwgMiwgMTIzMSDQti7Qui4g0J3QsNC00LXQttC00LAgNCwg0KHQvtGE0LjRjw!5e0!3m2!1sbg!2sbg!4v1684948566435!5m2!1sbg!2sbg"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              ${text.contacts.find[localStorage.getItem('lang') || 'bg']}
            </h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fas fa-phone mr-2"></i>
                <strong>
                  ${text.contacts.phone[localStorage.getItem('lang') || 'bg']}
                  :</strong
                >
                +359 88 427 8954
              </li>
              <li class="mb-3">
                <i class="fas fa-envelope mr-2"></i>
                <strong>
                  ${text.contacts.email[localStorage.getItem('lang') || 'bg']}
                  :</strong
                >
                elesar.print@gmail.com
              </li>
              <li>
                <i class="fas fa-map-marker-alt mr-2"></i>
                <strong>
                  ${text.contacts.address[localStorage.getItem('lang') || 'bg']}
                  :</strong
                >
                ул. "Бял люляк" 2, 1231 ж.к. Надежда 4, София
              </li>
            </ul>
            <h3 class="card-title">
              ${text.contacts.sendEmail[localStorage.getItem('lang') || 'bg']}
            </h3>
            <form id="contact-form" @submit="${sendEmail}">
              <div class="form-group">
                <label for="name">
                  ${text.contacts.yourName[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder=${text.contacts.yourNamePlaceholder[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                />
              </div>
              <div class="form-group">
                <label for="email">
                  ${text.contacts.yourEmail[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder=${text.contacts.yourEmailPlaceholder[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                />
              </div>
              <div class="form-group">
                <label for="message">
                  ${text.contacts.yourMessage[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder=${text.contacts.yourMessagePlaceholder[
                    localStorage.getItem('lang') || 'bg'
                  ]}
                ></textarea>
              </div>
              <button id="send-email" type="submit" class="btn btn-primary">
                ${text.contacts.sendButton[
                  localStorage.getItem('lang') || 'bg'
                ]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
