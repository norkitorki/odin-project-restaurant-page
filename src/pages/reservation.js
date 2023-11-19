const createLabel = (text, input = null) => {
  const label = document.createElement('label');
  label.textContent = text;
  if (input) label.appendChild(input);
  return label;
};

const createInput = (attr = {}) => {
  const input = document.createElement('input');
  Object.entries(attr).forEach(a => input[a[0]] = a[1]);
  return input;
}

export function reservationTemplate() {
  const heading     = document.createElement('h1'),
        description = document.createElement('p'),
        form        = document.createElement('form'),
        nameInput   = createInput({ type: 'text', required: true }),
        nameLabel   = createLabel('Name', nameInput),
        telInput    = createInput({ type: 'tel', required: true }),
        telLabel    = createLabel('Phone Number', telInput),
        emailInput  = createInput({type: 'email', required: true }),
        emailLabel  = createLabel('Email', emailInput),
        dateInput   = createInput({ type: 'date', required: true }),
        dateLabel   = createLabel('Date', dateInput),
        personInput = createInput({ type: 'number', value: 1, min: 0, max: 8, required: true }),
        personLabel = createLabel('Number of Persons', personInput),
        submitBtn   = createInput({type: 'submit', value: 'Send Request' });

  heading.classList.add('heading');
  heading.textContent = 'Reservation';

  description.textContent = 'We would love to have you dine with us. Reserve a table today!';

  [nameLabel, telLabel, emailLabel, dateLabel, personLabel, submitBtn].forEach(el => form.appendChild(el));
  [heading, description, form].forEach(el => this.appendChild(el));
};
