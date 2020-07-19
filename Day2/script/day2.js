//String methods
//1)index method
var str ="Rutu";
document.write(str.charAt(2));
//2)concat method
 var a1="Rutu";
 var a2="Karale";
 var a3=a1.concat(a2);
 document.write(a3);
 //3)indexof method
 var n=a1.indexOf("from");
 document.write(n);
 //4)toLowercase method
 var s1=a1.toLowerCase();
 document.write(s1);
 //5)trim method
 var s2=a1.trim();
 document.write(s2);
 //6)split method
 var str1="POOJA renuse";
 document.write(str1.split(""));

 //Array Method
 //1)concat
 var arr1=["c","c++","python"];
 var arr2=["java","javascript","Android"];
 var result=arr1.concat(arr2);
 document.write(result);
//2)slice
var r1=arr1.slice(1,2);
document.write(r1);
//3)toString
var t1=['a','d','i','t','y','a'];
var str3=t1.toString();
document.write("\n\nafter converting into string:"+str3);
//4)sort
var t2=[6,8,9,4];
var r3=t2.sort();
document.write(r3);
//5)unshift
var t3=["angular","nodejs","psql"];
var r4=t3.unshift("jquery");
document.writeln("unshift:"+r4);
//6)values
var r5=t3.shift();document.write("shift:"+r5);

