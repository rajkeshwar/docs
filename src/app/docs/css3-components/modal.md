![Arrow](assets/docs/pure-css3-modal.png "Arrow")

CSS Code

```css
p {
    margin-top: 0px;
}
.modal:before {
    content: '';
    position: fixed;
    display: none;
    background-color: rgba(0,0,0, 0.75);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.modal-container {
    position: fixed;
    background-color: #fff;
    width: 70%;
    max-width: 400px; 
    left: 50%;
    padding: 20px;
    border-radius: 5px;
    -webkit-transform: translate(-50%, -200%);
    -ms-transform: translate(-50%, -200%);
    transform: translate(-50%, -200%);
    -webkit-transition: -webkit-transform 200ms ease-out;
    -ms-transition: -ms-transform 200ms ease-out;
    transition: transform 200ms ease-out;
}
.modal:target:before {
    display: block;
}
.modal:target .modal-container {
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
}
#modal-close {}
```

HTML Snippets
```html
<a href="#cats">Cats</a>

<div class="modal" id="cats">
    <div class="modal-container">
        <p>I love cats</p>
        <a href="#modal-close">Close</a>
    </div>
</div>
```
