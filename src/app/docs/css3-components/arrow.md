

![Arrow](assets/docs/css3-arrow.png "Arrow")

CSS Code

```css
.arrow-left, 
.arrow-right,
.arrow-top,
.arrow-bottom {
    width: 200px;
    height: 30px;
    background-color: #ffc728;
    position: relative;
    top: 3px;
    left: 230px;
    padding: 10px;
    line-height: 22px;
    color: #313333;
    text-align: center;
}
.arrow-left:after, 
.arrow-right:after,
.arrow-top:after,
.arrow-bottom:after {
    content: '';
    width: 0;
    height: 0;
    border: 10px solid transparent;
    position: absolute;
}
.arrow-left:after {
    border-right: 10px solid #ffc728;			
    margin-top: -10px;
    right: 100%;
    top: 50%;
} 
.arrow-right:after {
    border-left: 10px solid #ffc728;		
    margin-top: -10px;
    left: 100%;
    top: 50%;
}
.arrow-top:after {
    border-bottom: 10px solid #ffc728;
    margin-left: -10px;
    left: 50%;
    bottom: 100%;
}
.arrow-bottom:after {
    border-top: 10px solid #ffc728;
    margin-right: -10px;
    right: 50%;
    top: 100%;
}
```

HTML Snippets
```html
<div class="arrow-left"></div><br/>
<div class="arrow-right"></div><br/>
<div class="arrow-top"></div><br/>
<div class="arrow-bottom"></div><br/>
```

