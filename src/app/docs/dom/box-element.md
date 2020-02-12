This is just for testing the positioning on any app

```js
function createBoxElement() {

  // CREATE BOX ELEMENT STARTS EHRE 
  function createElement(tagName, text, styles = {}) {
    var box = document.createElement(tagName);
  
    box.textContent = text;
    Object.keys(styles).forEach(k => {
      box.style[k] = styles[k];
    })
  
    return box;
  }
  
  var boxStyles = {
    position: 'relative',
    height: '60px',
    width: '150px',
    background: 'tomato',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid red',
    zIndex: '9999999',
  };
  
  var caretStyles = {
    position: 'absolute',
    display: 'inline-block',
    top: '-10px',
    left: 'calc(50% - 10px)',
    height: '20px',
    width: '20px',
    transform: 'rotate(45deg)',
    background: 'tomato',
  };
  
  var box = createElement('div', 'box content', boxStyles);
  var caret = createElement('div', '', caretStyles);
  
  box.appendChild(caret);
  document.body.appendChild(box);

  // CREATE BOX ELEMENT ENDS HERE
  return box;
}
```
