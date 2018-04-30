#### To get issues as string
```js
Array.from(document.querySelectorAll('.splitview-issue-link')).map(item => {
   return `${item.querySelector('.issue-link-key').innerHTML.match(/IR-.*/)} - ${item.querySelector('.issue-link-summary').innerHTML}`
})
```

In string format
```js
Array.from(document.querySelectorAll('.splitview-issue-link')).reduce((issueStr, ele) => {
   return `${issueStr} \n${ele.querySelector('.issue-link-key').innerHTML.match(/IR-.*/)} - ${ele.querySelector('.issue-link-summary').innerHTML}`
}, '')
```
In string object format
```ts
var issuesElements = document.querySelectorAll('.splitview-issue-link');
var issuesList = Array.from(issuesElements).reduce((newObj, ele) => {
   var issueNumber =  ele.querySelector('.issue-link-key').innerHTML.match(/IR-.*/)[0];
   var issueDesc = ele.querySelector('.issue-link-summary').innerHTML;
       newObj[issueNumber] = issueDesc;
   return newObj;
}, {})
