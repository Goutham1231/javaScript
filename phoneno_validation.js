function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {
      return true;
      document.write("response submitted");
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }