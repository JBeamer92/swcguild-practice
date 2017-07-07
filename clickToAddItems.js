function clearErrors() {
    for (var i = 0; i < document.forms["numberFun"].elements.length; i++) {
        if (document.forms["numberFun"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["numberFun"].elements[i].parentElement.className = "form-group";
        }
    }
}


function resetForm() {
    // clear Errors on page
    clearErrors();

    // reset input values
    document.forms["numberFun"]["num1"].value = "";
    document.forms["numberFun"]["num2"].value = "";

    // un-display results
    document.getElementById("results").style.display = "none";

    // change submit button text to "Submit"
    document.getElementById("submitButton").innerText = "Submit";

    // key input to #num1
    f["numberFun"]["num1"].focus();
}



function validateItems() {
    clearErrors();

    //set variables for input values
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;

    // if no value or not a number, throw error
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }

   // display results
   document.getElementById("results").style.display = "block";

   // change submit button text
   document.getElementById("submitButton").innerText = "Recalculate";

   // display results for each math function
   document.getElementById("addResult").innerText = Number(num1) + Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;



   // "We are returning false so that the form doesn't submit"
   // "and so that we can see the results"
   return false;
}
