


Add to large numbers

```js
function add(str1, str2) {

  if (str2.length > str1.length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let sum = 0;
  let carry = 0;
  let digitSum;
  let i = 0;

  let len = str1.length - 1;

  while (len--) {

	let a = parseInt(str1.charAt(len)); 
    let b = parseInt(str2.charAt(len)) || 0;

    let temp = (carry + a + b).toString();
	
    let tLen = temp.length - 1;
    let digitSum = temp.charAt(tLen); 

    carry = parseInt(temp.substr(0, tLen)) || 0; 

    sum = i === len ? temp + sum : digitSum + sum; 
    i++;
  } 

  return sum; 
}
```

https://github.com/niinpatel/addVeryLargeNumbers/blob/master/scripts.js
