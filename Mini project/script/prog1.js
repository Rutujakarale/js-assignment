console.log("Todo List");

const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3= document.querySelector('#btn3');
const list1= document.querySelector('#list1');
const list2= document.querySelector('#list2');
const list3= document.querySelector('#list3');

button1.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list1.appendChild(listItem);
    document.forms.myForm.reset();
}

button2.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let listItem = document.createElement('li');
    listItem.removeChild(text);
    list2.removeChild(listItem);
    document.forms.myForm.reset();
}
button3.onclick=function()
{
    localStorage.setItem(text);
    document.getElementById(list3).innerHTML=localStorage.getItem(listItem);
    document.forms.myForm.reset();
}
