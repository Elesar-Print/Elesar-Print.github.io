import { html } from '../lib/lit-html.js';

export function renderContact(ctx) {
  ctx.render(contactsTemplate(sendEmail));

  function sendEmail(event) {
    event.preventDefault();

    emailjs.init('6rh4IuhCdUoLBLrsj');

    const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    const serviceId = 'service_yx05bzk';
    const templateId = 'template_pvh9qqc';

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        Swal.fire('Success!', 'Your email has been sent!', 'success');
      })
      .catch((err) => {
        Swal.fire(
          'Error!',
          'Something went wrong with sending your email!',
          'error'
        );
        console.log(err);
      });
  }
}

const contactsTemplate = (sendEmail) =>
  html`<div class="container mt-4">
    <h1 class="text-center">Contacts</h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="embed-responsive embed-responsive-1by1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1465.2501805826084!2d23.29375523894639!3d42.73546489279008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa903e2394fb2b%3A0x96bd9851abd05e3f!2sElesar%20Print!5e0!3m2!1sbg!2sbg!4v1684941238692!5m2!1sbg!2sbg"
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
            <h3 class="card-title">Where to Find Us</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fas fa-phone mr-2"></i>
                <strong>Phone:</strong> +359 88 427 8954
              </li>
              <li class="mb-3">
                <i class="fas fa-envelope mr-2"></i>
                <strong>Email:</strong> elesar.print@gmail.com
              </li>
              <li>
                <i class="fas fa-map-marker-alt mr-2"></i>
                <strong>Address:</strong> ул. „Бял люляк“, 1231 ж.к. Надежда 4,
                София
              </li>
            </ul>
            <h3 class="card-title">Send us an email</h3>
            <form id="contact-form" @submit="${sendEmail}">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
