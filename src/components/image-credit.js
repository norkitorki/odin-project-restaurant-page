export function imageCredit(author, url) {
  const div = document.createElement('div'),
          a = document.createElement('a');

  [a.textContent, a.href, a.target] = [author, url, '_blank'];
  div.textContent = 'Image by ';
  div.classList.add('image-credit');
  div.appendChild(a);

  return div;
};
