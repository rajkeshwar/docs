![Arrow](assets/docs/range-selector.png "Arrow")

CSS Code 
```css
body {
    background-color: #f8f8f8;
}
.slider {
    width: 300px;
}
.slider input {
    appearance: none;
    -webkit-appearance: none;
    width: 300px;
    height: 6px;
    border-radius: 2px;
    border: 1px solid #ddd;
    outline: none;
    box-shadow: 0 1px 1px #fff, 0 1px 1px #ddd;
}
.slider input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    box-shadow: 0 0 2px #999;
    position: relative;
}
.slider input::-webkit-slider-thumb:before {
    content: '';
    height: 5px;
    position: absolute;
    width: 300px;
    background-color: green;
    right: 20px;
    top: 6px;
}
.timeline {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 20px;
    padding-top: 10px;
    counter-reset: step -2;
}
.timeline li {
    width: 16.6%;
    float: left;
    height: 10px;
    position: relative;
    padding-left: 10px;
    box-sizing: border-box;
}
.timeline li:nth-child(2) {
    padding-left: 18px;
}
.timeline li:nth-child(3) {
    padding-left: 24px;
}
.timeline li:nth-child(4) {
    padding-left: 30px;
}
.timeline li:nth-child(5) {
    padding-left: 36px;
}
.timeline li:nth-child(6) {
    padding-left: 42px;
}
.timeline li:after {
    content: '';
    width: 1px;
    height: 10px;
    background-color: #999;
    position: absolute;
}
.timeline li:before {
    content: counter(step);
    counter-increment: step 2;
    font-size: 10px;
    position: absolute;
    margin-left: -2px;
    top: -10px;
}
```

HTML Snippets
```html
<div class="slider">
    <ul class="timeline">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <input type="range" min="0" max="10" step="2" value="0">
</div>
```