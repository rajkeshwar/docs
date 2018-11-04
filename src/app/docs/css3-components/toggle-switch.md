![Arrow](assets/docs/toggle-switch.png "Arrow")

CSS Code
```css
.switch {
    position: relative;
}
.switch label {
    width: 55px;
    height: 23px;
    position: absolute;
    background-color: #999;
    top:0;
    left: 0;
    border-radius: 50px;
}
.switch input[type="checkbox"] {
    visibility: hidden;
}
.switch label:after {
    content: '';
    width: 21px;
    height: 21px;
    border-radius: 50px;
    position: absolute;
    transition: all 0.3s;
    top: 1px;
    left: 1px;
    background-color: white;
}
.switch input[type="checkbox"]:checked + label:after {
    left: 33px;
}
.switch input[type="checkbox"]:checked + label {
    background-color: green;
}
```

HTML Snippets
```html
<div class="switch">
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1"></label>
</div>
```