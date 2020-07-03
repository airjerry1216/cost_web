//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//alert('hello!');
/*document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
/*
var myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat_1.jpg') {
      myImage.setAttribute ('src','images/cat_2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat_1.jpg');
    }
}*/
/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}*/

var n = 1;
function insert_item(){
    n = n+1;
    var cnt=document.createElement('p');
    cnt.style="display:inline";
    if(n<10)
        cnt.appendChild(document.createTextNode('開銷 '+n+' : '));
    else
        cnt.appendChild(document.createTextNode('開銷'+n+' : '));
    document.body.appendChild(cnt);

    var this_item = document.getElementById('item');
    var nodeFather = this_item.parentNode;
    var node_clone = this_item.cloneNode();
    node_clone.removeAttribute('id');
    node_clone.innerHTML = this_item.innerHTML;
    document.body.appendChild(node_clone);
}
var newButton = document.querySelector('#newButton');
newButton.onclick = function() {
  insert_item();
}
var cntButton=document.querySelector('#cntButton');
cntButton.onclick=function(){
    total();
}
function total(){
    var cost=document.querySelectorAll("#cost");
    var rate=document.querySelectorAll("#rate");
    var from=document.querySelectorAll("#from");
    var to=document.querySelectorAll("#to");
    var item_ans=document.querySelectorAll("#item_ans");
    var ans=0;
    var total=0;
        
    for(var i=0;i<n;i++){
        ans=calculate(cost[i].value,rate[i].value,from[i].value,to[i].value);
        item_ans[i].innerHTML=ans+" 萬";
        total+=ans;
    }
    
    document.querySelector("#total").innerHTML=total;

    //var total_para=document.createElement("p");
    //document.body.appendChild(total_para.appendChild(document.createTextNode(total)));
}
function calculate(cost,rate,from,to){    
    var f_cost=parseFloat(cost);
    var f_rate=parseFloat(rate);
    var f_from=parseFloat(from);
    var f_to=parseFloat(to);
    var ans=0;
    
    for(var i=f_from;i<f_to;i++){
        ans+=f_cost;
        f_cost*=f_rate;
    }
    return ans;
}
