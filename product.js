function submitForm() {

    var messages = "";
    var supplier_username = document.getElementById('supplier_username').value;
    if(!supplier_username.match(/^[a-zA-Z]{6}/gi)) {
        messages += "\nPlease enter username starting with an alphabet and 6 characters long!";
    }
    var checked_count = 0; 
    var supplier_status = document.getElementsByClassName('supplier_status');
    for(var i=0; supplier_status[i]; ++i){
          if(supplier_status[i].checked){
               checked_count ++;
          }
    }
    if (!checked_count) {
        messages += "\nPlease check at least 1 supplier status!";
    }
    
    if (messages) {
        alert(messages);
    } else {
        alert("Form validation passed!")
    }
    return false;
  }




