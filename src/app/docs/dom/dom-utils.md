To calculate height of viewport
```ts
export const viewportHeight = (): number => {
  const body = document.body;
  const html = document.documentElement;

  let height = Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

  return height;
}
```


Smooth scrolling to div section 
```js
// For smooth scrolling of div section
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();

      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  setTimeout(_ => {
    document.querySelector(`a[href="${window.location.hash}"]`).click();
  }, 10);
  ```
