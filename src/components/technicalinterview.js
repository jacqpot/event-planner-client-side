import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const state = { t1: { name: "John" } };
// const obj = { id: "t2", payload: { name: "Tom" } };
// { t1: { name: 'John' }, t2: { name: 'Tom' } }

// obj2 push state, and obj
// let object = {...state, [obj.id]:obj.payload };
// console.log(object)

// spread operator and bracket notation

// const t1 = { name: "Tim" };
// const t2 = { ...t1 };
// console.log(t2);
// spread operator

// const names = ['tim', 'helen', 'tom', 'tammy', 'jason']
// find t names
// capitalize first letter of names

// let tnames = names.filter(name => name.startsWith('t'))
// console.log(n)

// let arry = []
// for (let i = 0; i < tnames.length; i++) {
//   if (tnames[i][0] === 't') {
//     const cap = tnames[i][0].toUpperCase() + tnames[i].slice(1)
//     // arry.push(tnames[1][0].toUpperCase())
//     arry.push(cap)
//   }
// }
// console.log(arry.sort())

// let i =0; i < tnames.lengthOf; i++

// const nums = [100, 200, 500, 54]
// const filtered = nums.filter(num => num > 150)
// console.log()
// console.log(nums.sort((a, b) => a - b))

// for loop, filter, map, forEach
// sort function, toUpperCase(), toLowerCase(), slice function
// push

// edabit.com

// const obj1 = {
//   name: 'Tom'
// }
// let obj2 = obj1
// obj2.name = 'Jason'
// console.log(obj1.name)

// complex type (reference) vs primitive type (value)

// const num1 = 100
// let num2 = num1
// num2 = 200
// console.log(num1)

// primtive types - number, string, boolean
// complex types - object, array, Map, Set

// const m1 = new Map()
// m1.set('t1', 100)
// m1.get('t1') // 100
// m1.has('t1') // boolean
