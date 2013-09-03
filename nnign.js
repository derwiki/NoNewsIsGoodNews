function poll() {
  var n=document.getElementById('contentArea');
  if (n) { 
    n.parentNode.removeChild(n);
  } else {
    setTimeout(poll, 100);
  }
}
setTimeout(poll, 100);
