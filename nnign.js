function poll() {
  var n=document.getElementById('contentArea');
  if (n) { 
    n.parentNode.removeChild(n);
    setTimeout(poll, 1000);
  } else {
    setTimeout(poll, 100);
  }
}
setTimeout(poll, 100);
