Event delay with debounce in Angular

```ts
@Component({
  selector: 'my-app',
  template: `
    <div>
      <input type="text" (keyup)='keyUp.next($event)'>
    </div>
  `,
})
export class App {
  name:string;

  public keyUp = new Subject<string>();

  constructor() {
    const subscription = this.keyUp
      .map(event => event.target.value)
      .debounceTime(1000)
      .distinctUntilChanged()
      .flatMap(search => Observable.of(search).delay(500))
      .subscribe(console.log);
  }
}
```
