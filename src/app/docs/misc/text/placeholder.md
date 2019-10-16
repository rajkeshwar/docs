Dynamic text-placeholder with javascript and css

```css
@keyframes placeHolderShimmer{
  0%{
    background-position: -468px 0
  }
  100%{
    background-position: 468px 0
  }
}
.text-placeholder {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  border: 1px solid transparent !important;
  color: transparent !important;
  position: relative;
  overflow: hidden;

  &::before, 
  &::after {
    color: transparent !important;
    background-color: transparent !important;
  }
}
````

Javascript code 

```js
Array.from(this.querySelectorAll('*')).forEach(el => {
  el.style.color = 'transparent';
  el.style.fill = '#f6f7f8';
  if(el.offsetHeight < 50) {
    el.classList.add('text-placeholder');
  }
})
```
