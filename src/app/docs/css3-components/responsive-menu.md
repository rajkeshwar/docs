![Arrow](assets/docs/responsive-menu.png "Arrow")

CSS Code
```css
body, * {
    margin: 0;
    padding: 0;
}
.header {
    height: 45px;
    position: absolute;
    width: 100%;
    padding: 10px;
    background-color: #aaa;
    box-sizing: border-box;
}
.top-navigation {
    float: right;
    display: none;
}
.mobile-nav {
    float: right;
    padding: 0 30px 0 0;
}
.mobile-nav span, .mobile-nav span:before, .mobile-nav span:after {
    width: 32px;
    height: 2px;
    position: absolute;
    background-color: black;
    top: 50%;
}
.mobile-nav span:before {
    content: '';
    top: -6px;
}
.mobile-nav span:after {
    content: '';
    top: 6px;
}
.mainWrapper {
    padding-top: 45px;
}
.side-navigation {
    width: 100%;
    background-color: #333;
    color: #fff;
    height: 100vh;
    visibility: hidden;
}
.side-navigation.visible {
    visibility: visible;
}
.side-navigation ul {
}
.side-navigation ul li {
    padding: 20px 20px;
    border-bottom: 1px solid #999;
}
.side-navigation ul li span {
    font-size: 16px;
}
.side-navigation ul li span:first-child {
    color: #666;
}
@media only screen and (min-width: 768px) {
    .mobile-nav {
        display: none;
    }
    .top-navigation {
        display: block;
    }
    .side-navigation {
        visibility: visible;
        width: 90px;
    }
    .side-navigation ul li span:last-child {
        visibility: hidden;
    }
    .side-navigation ul li span:first-child {
        font-size: 24px;
        padding: 0 10px;
        color: #fff;
    }	
}
@media only screen and (min-width: 1170px) {
    .side-navigation ul li span:last-child {
        visibility: visible;
    }
    .side-navigation {
        width: 170px;
    }
}
```

HTML Snippets
```html
<div class="header">
    <a href="javascript:void(0)" class="mobile-nav"><span></span></a>
    <nav class="top-navigation">
        ramsich
    </nav>
</div>
<div class="mainWrapper">
    <nav class="side-navigation">
        <ul>
            <li>
                <span><i class="ion-ios-pricetags"></i></span>
                <span>Tags</span>
            </li>
            <li class="active">
                <span><i class="ion-pie-graph"></i></span>
                <span>Analytics</span>
            </li>
            <li>
                <span><i class="ion-person-stalker"></i></span>
                <span>Users</span>
            </li>
            <li>
                <span><i class="ion-calendar"></i></span>
                <span>Calendar</span>
            </li>
        </ul>
    </nav>
    <div class="main-content">
        <h1>This is the main content</h1>
    </div>
</div>
```

jQuery
```js
$(function(){
    $('.mobile-nav').click(function(){
        $('.side-navigation').toggleClass('visible');
    });
});
```
