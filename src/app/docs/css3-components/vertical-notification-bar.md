![Arrow](assets/docs/vertical-notification-bar.png)

CSS Code 
```css
.container {
    padding: 20px;
}
.notification-bar {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: relative;
}
.notification-bar li {
    margin-top: 60px;
}
.notification-bar li div {
    margin-left: 50px;
    margin-top: -34px; 
    border: 1px solid #ddd;
    padding: 10px;
    background-color: white;
}
.notification-bar li i {
    width: 30px;
    height: 30px;
    display: block;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ddd;
    border-radius: 50%;
    background-color: white;
}
.notification-bar li i:after {
    content: '';
    width: 40px;
    height: 1px;
    position: absolute;
    background-color: #ddd;
    margin-top: 15px;
    z-index: -1;
}
.notification-bar:after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: #ddd;
    position: absolute;
    top: 4px;
    left: 15px;
    z-index: -1;
}
```

HTML Snippets
```html
<div class="container">
	<ul class="notification-bar">
		<li>
			<i class="ion-checkmark"></i>
			<div>Third notification</div>
		</li>
		<li>
			<i class="ion-paper-airplane"></i>
			<div>Second notification</div>
		</li>
		<li>
			<i class="ion-plus"></i>
			<div>First notification</div>
		</li>
	</ul>
</div>
```