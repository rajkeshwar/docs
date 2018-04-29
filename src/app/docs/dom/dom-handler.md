
Add class to a DOM element
```ts
public addClass(element: any, className: string): void {
    if (element.classList)
        element.classList.add(className);
    else
        element.className += ' ' + className;
}
```

Add multiple classes to DOM element
```ts
public addMultipleClasses(element: any, className: string): void {
    if (element.classList) {
        let styles: string[] = className.split(' ');
        for (let i = 0; i < styles.length; i++) {
            element.classList.add(styles[i]);
        }

    }
    else {
        let styles: string[] = className.split(' ');
        for (let i = 0; i < styles.length; i++) {
            element.className += ' ' + styles[i];
        }
    }
}
```
Remove class to a DOM element
```ts
public removeClass(element: any, className: string): void {
    if (element.classList)
        element.classList.remove(className);
    else
        element.className = element.className.replace(new RegExp('(^|\\b)' + 
                            className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
```
Has class to a DOM element
```ts
public hasClass(element: any, className: string): boolean {
    if (element.classList)
        return element.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
}
```
Find shiblings elements to an element
```ts
public siblings(element: any): any {
    return Array.prototype.filter.call(element.parentNode.children, function (child) {
        return child !== element;
    });
}
```
Find all elements matching selector
```ts
public find(element: any, selector: string): any[] {
    return element.querySelectorAll(selector);
}
```
Find single element
```ts
public findSingle(element: any, selector: string): any {
    return element.querySelector(selector);
}
```
Find index of an element 
```ts
public index(element: any): number {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == element) return num;
        if (children[i].nodeType == 1) num++;
    }
    return -1;
}
```
Find index within a group 
```ts
public indexWithinGroup(element: any, attributeName: string): number {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
        if (children[i] == element) return num;
        if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
    }
    return -1;
}
```
Find relative position 
```ts
public relativePosition(element: any, target: any): void {
    let elementDimensions = element.offsetParent ? { 
        width: element.offsetWidth, 
        height: element.offsetHeight 
     } : this.getHiddenElementDimensions(element);
     
    let targetHeight = target.offsetHeight;
    let targetWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let windowScrollTop = this.getWindowScrollTop();
    let viewport = this.getViewport();
    let top, left;

    if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
        top = -1 * (elementDimensions.height);
        if(targetOffset.top + top < 0) {
            top = 0;
        }
    }
    else {
        top = targetHeight;
    }


    if ((targetOffset.left + elementDimensions.width) > viewport.width)
        left = targetWidth - elementDimensions.width;
    else
        left = 0;

    element.style.top = top + 'px';
    element.style.left = left + 'px';
}
```
Find absolute position
```ts
public absolutePosition(element: any, target: any): void {
    let elementDimensions = element.offsetParent ? { 
        width: element.offsetWidth, 
        height: element.offsetHeight 
     } : this.getHiddenElementDimensions(element);
     
    let elementOuterHeight = elementDimensions.height;
    let elementOuterWidth = elementDimensions.width;
    let targetOuterHeight = target.offsetHeight;
    let targetOuterWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let windowScrollTop = this.getWindowScrollTop();
    let windowScrollLeft = this.getWindowScrollLeft();
    let viewport = this.getViewport();
    let top, left;

    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        if(top < 0) {
            top = 0 + windowScrollTop;
        }
    } 
    else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
    }

    if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width)
        left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth;
    else
        left = targetOffset.left + windowScrollLeft;

    element.style.top = top + 'px';
    element.style.left = left + 'px';
}
```
Get outer height of a hidden element
```ts
public getHiddenElementOuterHeight(element: any): number {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementHeight = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementHeight;
}
```
Get outer width of a hidden element 
```ts
public getHiddenElementOuterWidth(element: any): number {
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    let elementWidth = element.offsetWidth;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return elementWidth;
}
```
Get dimension of hidden element 
```ts
public getHiddenElementDimensions(element: any): any {
    let dimensions: any = {};
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return dimensions;
}
```
Setting scroll in view
```ts
public scrollInView(container, item) {
    let borderTopValue: string = getComputedStyle(container).getPropertyValue('borderTopWidth');
    let borderTop: number = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue: string = getComputedStyle(container).getPropertyValue('paddingTop');
    let paddingTop: number = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = (itemRect.top + document.body.scrollTop) - 
                 (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
                 
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);

    if (offset < 0) {
        container.scrollTop = scroll + offset;
    }
    else if ((offset + itemHeight) > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
}
```
Applying native fadeIn
```ts
public fadeIn(element, duration: number): void {
    element.style.opacity = 0;

    let last = +new Date();
    let opacity = 0;
    let tick = function () {
        opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();

        if (+opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}
```
Applying native fadeOut
```ts
public fadeOut(element, ms) {
    var opacity = 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;

    let fading = setInterval(() => {
        opacity = opacity - gap;

        if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
        }

        element.style.opacity = opacity;
    }, interval);
}
```
Get window scroll top value
```ts
public getWindowScrollTop(): number {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
```
Get window scroll left value
```ts
public getWindowScrollLeft(): number {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
}
```
Test to match a selector
```ts
public matches(element, selector: string): boolean {
    var p = Element.prototype;
    var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p.msMatchesSelector || function (s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
}
```
Get outer width of an element 
```ts
public getOuterWidth(el, margin?) {
    let width = el.offsetWidth;

    if (margin) {
        let style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    }

    return width;
}
```
Get horizontal padding
```ts
public getHorizontalPadding(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
}
```
Get horizontal margin
```ts
public getHorizontalMargin(el) {
    let style = getComputedStyle(el);
    return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
}
```
Get inner width
```ts
public innerWidth(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}
```
Find element width without padding
```ts
public width(el) {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return width;
}
```
Get inner height ie `offsetHeight + padding`
```ts
public getInnerHeight(el) {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);

    height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    return height;
}
```
Get outer height ie `offsetHeight + margin`
```ts
public getOuterHeight(el, margin?) {
    let height = el.offsetHeight;

    if (margin) {
        let style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    return height;
}
```
Get height of element
```ts
public getHeight(el): number {
    let height = el.offsetHeight;
    let style = getComputedStyle(el);

    height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + 
              parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

    return height;
}
```
Get width of an element
```ts
public getWidth(el): number {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + 
             parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    return width;
}
```
Get height and width of viewport
```ts
public getViewport(): any {
    let win = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        w = win.innerWidth || e.clientWidth || g.clientWidth,
        h = win.innerHeight || e.clientHeight || g.clientHeight;

    return { width: w, height: h };
}
```
Get offset
```ts
public getOffset(el) {
    let rect = el.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
}
```
Is IE browser
```ts
isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return true;
    }

    // other browser
    return false;
}
```
Is HTML element 
```ts
isElement(obj: any) {
    return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
        obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string"
    );
}
```
Calculate scrollbar width
```ts
calculateScrollbarWidth(): number {
    if(this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;

    let scrollDiv = document.createElement("div");
    scrollDiv.className = "ui-scrollbar-measure";
    document.body.appendChild(scrollDiv);

    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    this.calculatedScrollbarWidth = scrollbarWidth;

    return scrollbarWidth;
}
```
Envoking native method for angular
```ts
invokeElementMethod(element: any, methodName: string, args?: any[]): void {
    (element as any)[methodName].apply(element, args);
}
```
Removing selection from DOM
```ts
clearSelection(): void {
    if(window.getSelection) {
        if(window.getSelection().empty) {
            window.getSelection().empty();
        } else if(window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 
            && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
            window.getSelection().removeAllRanges();
        }
    }
    else if(document['selection'] && document['selection'].empty) {
        try {
            document['selection'].empty();
        } catch(error) {
            //ignore IE bug
        }
    }
}
```
Get browser type
```ts
resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

    return {
       browser: match[1] || "",
       version: match[2] || "0"
    };
}
```
