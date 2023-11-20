function createNav(clazz) {
  const nav = document.createElement('nav');
  nav.classList.add(clazz);
  return nav;
};

function createNavItem(text, parent, templateFunc) {
  const item = document.createElement('a');
  item.textContent = text;
  item.href = '#';
  item.addEventListener('click', () => parent.innerHTML = '');
  item.addEventListener('click', templateFunc.bind(parent));
  this.appendChild(item);
};

export { createNav, createNavItem };
