
![Arrow](assets/docs/css3-box-shadow.png "Arrow")

Box Shadow

```css
.box {
    width: 100px;
    height: 100px;
    margin: 15px 0;
    background: #ccc;
}
.bottom-right {
    box-shadow: 5px 5px 5px #666;
    -moz-box-shadow: 5px 5px 5px #666;
    -webkit-box-shadow: 5px 5px 5px #666;
}
.shadow {
    -webkit-box-shadow: 3px 3px 3px 1px #666;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:    3px 3px 3px 1px #666;  /* Firefox 3.5 - 3.6 */
    box-shadow:         3px 3px 3px 1px #666;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
.shadow-inset {
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
}
.one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;
}
```

```html
<div class="box shadow"></div>
<div class="box bottom-right"></div>
<div class="box shadow-inset"></div>
<div class="box one-edge-shadow"></div>
```

| Properties | Description    | 
| ------------- |-------------| 
| The horizontal offset | (required) of the shadow, positive means the shadow will be on the right of the box, a negative offset will put the shadow on the left of the box.| $1600 |
| The vertical offset | (required) of the shadow, a negative one means the box-shadow will be above the box, a positive one means the shadow will be below the box. |
| The blur radius | (required), if set to 0 the shadow will be sharp, the higher the number, the more blurred it will be, and the further out the shadow will extend. For instance a shadow with 5px of horizontal offset that also has a 5px blur radius will be 10px of total shadow. |
| The spread radius | (optional), positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).
| Color | (required) - takes any color value, like hex, named, rgba or hsla. If the color value is omitted, box shadows are drawn in the foreground color (text color). But be aware, older WebKit browsers (pre Chrome 20 and Safari 6) ignore the rule when color is omitted.