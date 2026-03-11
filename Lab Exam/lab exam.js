
let registrants = [];

let form = document.getElementById("registrationForm");

let analyticsBtn = document.getElementById("analyticsBtn");
let panel = document.getElementById("analyticsPanel");

let total = document.getElementById("total");
let virtual = document.getElementById("virtual");
let inperson = document.getElementById("inperson");


// REAL TIME VALIDATION

document.getElementById("name").addEventListener("input", function(){

let name = this.value;

if(name.length < 6 || name.length > 100)
{
document.getElementById("nameError").innerHTML="Name must be between 6 and 100 characters.";
}
else
{
document.getElementById("nameError").innerHTML="";
}

});


document.getElementById("email").addEventListener("input", function(){

let email = this.value;

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email))
{
document.getElementById("emailError").innerHTML="Please enter a valid professional email address.";
}
else
{
document.getElementById("emailError").innerHTML="";
}

});


// FORM SUBMIT

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let company = document.getElementById("company").value;

let attendance = document.querySelector('input[name="attendance"]:checked');

let valid = true;


if(name.length < 6 || name.length > 100)
{
document.getElementById("nameError").innerHTML="Name must be between 6 and 100 characters.";
valid=false;
}

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email))
{
document.getElementById("emailError").innerHTML="Please enter a valid professional email address.";
valid=false;
}

if(attendance==null)
{
document.getElementById("attendanceError").innerHTML="Please select your attendance type.";
valid=false;
}
else
{
document.getElementById("attendanceError").innerHTML="";
}


if(valid)
{

let data={
name:name,
email:email,
company:company,
attendance:attendance.value
};

registrants.push(data);

updateAnalytics();

form.reset();

alert("Registration Successful!");

}

});


// ANALYTICS

function updateAnalytics()
{

let totalCount = registrants.length;

let virtualCount = 0;
let inpersonCount = 0;

for(let i=0;i<registrants.length;i++)
{

if(registrants[i].attendance=="Virtual")
virtualCount++;

else
inpersonCount++;

}

total.innerHTML = totalCount;
virtual.innerHTML = virtualCount;
inperson.innerHTML = inpersonCount;

}


// SHOW / HIDE PANEL

analyticsBtn.addEventListener("click",function(){

if(panel.style.display=="none" || panel.style.display=="")
{
panel.style.display="block";
analyticsBtn.innerHTML="Hide Event Analytics";
}
else
{
panel.style.display="none";
analyticsBtn.innerHTML="Show Event Analytics";
}

});