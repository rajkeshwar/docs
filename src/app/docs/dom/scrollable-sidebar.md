Adjustable width sidebar
```html

<div id="sidebar"> 
    <div id="split-bar"></div>
    sidebar
</div>
<div id="main">main</div> 
```

Here is the JavaScript code
```js
var min = 300;
var max = 3600;
var mainmin = 200;
var hasMousemoveEvent = false;

document.querySelector('#split-bar')
  .addEventListener('mousedown', evt => {
  evt.preventDefault();
  if(!hasMousemoveEvent) {
      document.addEventListener('mousemove', mousemoveFn);
      hasMousemoveEvent = true;
  }
});
  
document.addEventListener('mouseup', e => {
  document.removeEventListener('mousemove', mousemoveFn);
  hasMousemoveEvent = false;
})

function mousemoveFn(e) {
    e.preventDefault();
    let sidebar = document.querySelector('#sidebar');
    let main = document.querySelector('#main');
    let x = e.pageX - sidebar.getBoundingClientRect().left;
    
    if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
      sidebar.style.width = `${x}px`;
      main.style.marginLeft = x;
    }
}
```
