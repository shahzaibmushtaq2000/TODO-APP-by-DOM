//GLOBLE.......................................................

//structure
var div1 =document.getElementById('div1');
var h1 = document.createElement('h1');
var inpt = document.createElement('input');
var btn = document.createElement('button');
//create text node
var txt0 = document.createTextNode('To Do App');
var txt1 = document.createTextNode('submit');
//set attribute
inpt.setAttribute('id','todotxt');
btn.setAttribute('onclick','show()');
inpt.setAttribute('id','todotxt');
inpt.setAttribute('placeHolder','Enter The Value');
div1.setAttribute('class','maindiv');
//link txt0 to h1; txt1 o btn;h1 to div1;inpt to div1;btn to div1;
h1.appendChild(txt0);
btn.appendChild(txt1);
div1.appendChild(h1);
div1.appendChild(inpt);
div1.appendChild(btn);
//FUNCTION......................................................

function show() {
//structure call below button
var ul= document.createElement('ul');
var li= document.createElement('li');
var btn1= document.createElement('button');
//get value frm typed txt
var txt3 = document.getElementById('todotxt').value;
//see whaT is value
console.log(txt3);
// jo value gain hoe variable mai save kardo
var txtNd = document.createTextNode(txt3);
// NODE BANAO DELETE TXT KI
var txtN1 = document.createTextNode('delete');
//link li to ul to div1 after btn
li.appendChild(txtNd);
ul.appendChild(li);
btn1.appendChild(txtN1);
div1.appendChild(ul);
//important makin btn1 the child of li to del it later
li.appendChild(btn1);
//input clear kardo
document.getElementById('todotxt').value = '';
//del karo
btn1.addEventListener('click',function(){
    btn1.parentNode.remove()
})
}