
If you want to convert reverse of camelcase
eg: 

```ts
Input = 'FloatingActionButton' 
Output = Floating Action Button

The oneline way
stringValue.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")

For robust solution 
stringValue.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
```

eg

```ts

export { ButtonsModule } from '@ng-components/ng-buttons/main';
export { InputsModule } from '@ng-components/ng-inputs/main';
export { RadioboxModule } from '@ng-components/ng-radiobox';
export { RatingModule } from '@ng-components/ng-rating/index';

data.split(/\n/).filter(it => it)
    .map(it => it.replace(/^.*{|}.*$/g, ''))
    .map(it => it.replace(/^\s+|\s+$/g, ''))

```
