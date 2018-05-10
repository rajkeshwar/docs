
Scrollable table header
```html
<table>
    <thead>
        <tr>
            <th>th 1</th>
            <th>th 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>td 1</td>
            <td>td 2</td>
        </tr>
    </tbody>
</table>
```

Here is the JavaScript code
```js
var thElm;
var startOffset;

Array.from(document.querySelectorAll("table th")).forEach(th => {
    th.style.position = 'relative';

    const grip = document.createElement('div');

    grip.innerHTML = "&nbsp;";
    grip.style.top = 0;
    grip.style.right = 0;
    grip.style.bottom = 0;
    grip.style.width = '5px';
    grip.style.position = 'absolute';
    grip.style.cursor = 'col-resize';

    grip.addEventListener('mousedown', e => {
        thElm = th;
        startOffset = th.offsetWidth - e.pageX;
    });

    th.appendChild(grip);
})

document.addEventListener('mousemove', e => {
  if (thElm) {
    thElm.style.width = startOffset + e.pageX + 'px';
  }
});

document.addEventListener('mouseup', function () {
    thElm = undefined;
});
````
