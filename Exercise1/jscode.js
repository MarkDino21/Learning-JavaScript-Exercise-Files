function checkValidation() {
  var password=document.getElementById('password').value;
  if (password != "12345") {
    alert("Caution!\nPassword incorrect");
  }else{
    var y=document.getElementById('sendItem');
    y.className += "leftTransition";
  }
}
