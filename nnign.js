function poll() {
  var node = document.querySelector('body.home #contentArea');
  if (node) {
    node.parentNode.removeChild(node);
    // continue to check for the node, in case it AJAXes back in
    setTimeout(poll, 1000);
  } else {
    // check aggressively on initial load
    setTimeout(poll, 100);
  }
}
setTimeout(poll, 100);
