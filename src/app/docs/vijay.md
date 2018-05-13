

This is just to demonstrate to Vijay

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
