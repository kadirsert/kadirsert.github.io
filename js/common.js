function temp_alert(msg,duration) {
  var el = document.createElement("div");
  el.setAttribute("style","position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;");
  el.innerHTML = msg;
  setTimeout(function() {
    el.parentNode.removeChild(el);
  },duration);
  document.body.appendChild(el);
}

function copy_to_clip() {
  var copy_text = document.getElementById("cmd_text");

  copy_text.select();
  copy_text.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard
    .writeText(copy_text.value)
    .then(() => {
      temp_alert("successfully copied",1500);
    })
    .catch(() => {
      temp_alert("something went wrong",1500);
    });
}

function validate_ip_addr(ip_addr) {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip_addr)) {
    return true;
  } else {
    return false;
  }
}