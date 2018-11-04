![Arrow](assets/docs/step-progress-bar.png "Arrow")

CSS Code 
```css
.container {
    width: 100%;
    font-size: 16px;
}
.progressbar {
    counter-reset: step;
}
.progressbar li {
    list-style-type: none;
    float: left;
    width: 33.33%;
    position: relative;
    text-align: center;
}
.progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    line-height: 30px;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
}
.progressbar li:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
}
.progressbar li:first-child:after {
    display: none;
}
.progressbar li.active {
    color: green;
}
.progressbar li.active:before {
    border-color: green;
}
.progressbar li.active + li:after {
    background-color: green;
}
```

HTML Snippets
```html
<div class="container">
    <ul class="progressbar">
        <li class="active">Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
    </ul>
</div>
```