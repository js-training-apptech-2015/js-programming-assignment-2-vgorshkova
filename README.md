# JS Programming assignment 2
---
## Task 1

Write a function 
```javascript
function solution1(A);
```
that given an array **A** returns a minimal positive **integer** not present in the array.

### Assumptions
- an array **A** contains valid JavaScript numbers (both positive and negative)

### Examples
|input|output|
|---|---|
|`[1,5,4,2]`|`3`|

---

## Task 2
Write a function 
```javascript
function solution2(S);
```
that given a string **S** returns a boolean indicating if the string is bracket balanced

### Assumptions
- bracket kinds are [ ], { }, ( )

### Examples
|input|output|
|---|---|
|`""`|`true`|
|`[]`|`true`|
|`[()]`|`true`|
|`[](){}`|`true`|
|`][`|`false`|
|`[(])`|`false`|
---
## Task 3
Write a function 
```javascript
function solution3(A, F);
```
that calls a function **F** on the elements of an array **A** and returns an array of results. So, it acts similar to the native JS Array [map method](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map). But unlike the native method, your solution should accept a string as an **F** argument in the following simplified [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) format:

```javascript
(param1, param2, paramN) => expression
singleParam => expression
() => expression
```
### Assumptions
- expression is a valid JavaScript expression :)

### Examples
|input|output|
|---|---|
|`solution3([1,2,3], '(a)=>a*2')`|`[2,4,6]`|
|`solution3([1,2,3], '(a)=>a+2')`|`[3,4,5]`|
|`solution3([1,2,3], '()=>1')`|`[1,1,1]`|
---
## Reference
[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
