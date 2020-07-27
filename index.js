
const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const mobNo= document.getElementById("mobileno");
const age = document.getElementById("age");
const errormsg = document.getElementById("error1");

form.addEventListener('submit',(e)=>{
    let msgs = [];
    if(fname.value === " " || fname.value == null){
        msgs.push("*Please enter your First Name*");
        
    }
    if(lname.value === " " || lname.value == null){
        msgs.push("*Please enter your Last Name*");
        
    }
    if(msgs.length > 0){
        e.preventDefault();
        errormsg.innerText = msgs.join(', ');
    }
})


function showdetails(){
   
    var firstName = document.getElementById("lname").value;
    var lastName = document.getElementById("fname").value;
    var Email = document.getElementById("email").value;
    var Mobno = document.getElementById("mobileno").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName('gender');
    var ischecked_method = false;
    for ( var i = 0; i < gender.length; i++) {
    if(gender[i].checked) {
        ischecked_method = true;
        var Sex = gender[i].value;
        break;
     }
    }
    if(!ischecked_method)   { //payment method button is not checked
    alert("Please choose Gender");
    }
    var pay = document.getElementsByName('payment');
    var ischecked_method = false;
    for ( var i = 0; i < pay.length; i++) {
    if(pay[i].checked) {
        ischecked_method = true;
        var paymentMethod = pay[i].value;
        break;
     }
    }
    if(!ischecked_method)   { //payment method button is not checked
    alert("Please choose the payment method");
    }
    var table = document.getElementById("table");
    var row = table.insertRow();
    var firstNamecell = row.insertCell(0);
    var lastNamecell = row.insertCell(1);
    var Emailcell = row.insertCell(2);
    var Mobnocell = row.insertCell(3);
    var agecell = row.insertCell(4);
   // var Seatscell = row.insertCell(5);
    var Sexcell = row.insertCell(5);
    var paymentcell = row.insertCell(6);
    firstNamecell.innerHTML = firstName;
    lastNamecell.innerHTML = lastName;
    Emailcell.innerHTML = Email;
    Mobnocell.innerHTML = Mobno;
    agecell.innerHTML = age;
 //   Seatscell.innerHTML = Seats;
    Sexcell.innerHTML = Sex;
    paymentcell.innerHTML = paymentMethod;
    
    
}