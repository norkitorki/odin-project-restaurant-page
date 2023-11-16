function homeTemplate() {
  const heading     = document.createElement('h1'),
        description = document.createElement('p');

  heading.classList.add('main-heading');
  heading.textContent = 'Odin Restaurant';

  description.classList.add('description');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit \
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                             laboris nisi ut aliquip ex ea commodo consequat.'

  this.appendChild(heading);
  this.appendChild(description);
};

export { homeTemplate };
