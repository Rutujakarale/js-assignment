console.log("Higher order Function");
let arr=['1','2','3','4','5'];
let odd=arr.filter(el=>el%2==1);
let oddCubes=arr.filter(el=>el%2==1).map(el=>el**3);
console.log(odd);
console.log(oddCubes);