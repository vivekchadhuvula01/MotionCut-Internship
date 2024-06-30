// alert('connet is not available')\
let time = new Date().toDateString();
let Today = document.getElementById("date").innerHTML = time

//create a close button for each list item
let nodeList = document.getElementsByTagName('LI');
let j;
for (j = 0; j < nodeList.length; j++){
    let span = document.createElement('span');
    var close = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(close);
    nodeList.appendChild(span)

}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function CreateElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('task').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ' ') {
        alert("You must write Something");
    } else {
        document.getElementById('list').appendChild(li)
    }
    document.getElementById('task').value = ' ';
     var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
