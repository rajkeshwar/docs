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
