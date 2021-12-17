(function ignielRemLinkPost(){
 if (document.querySelector('.post-body')){
  var a = document.querySelectorAll('.post-body a');
  for (var x = 0; x < a.length; x++){
   var b = a[x].text, c = a[x].parentNode, d = document.createElement('span'); d.innerHTML = b;
   a[x].remove();
   c.appendChild(d);
  }
 }
})();