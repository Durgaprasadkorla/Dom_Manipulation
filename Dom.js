// adding element by using dynamically
// 1. create a div element
let elementDiv = document.createElement('div');
//adding css
elementDiv.classList.add('box');
elementDiv.style.backgroundColor = 'grey';
elementDiv.style.borderRadius = '20px';
elementDiv.style.marginTop = '10px';
elementDiv.style.paddingLeft = '20px';

//2. create h2 element 
let elementH2 = document.createElement('h2');
let textNode = document.createTextNode('JavaScript Course');
elementH2.appendChild(textNode);
elementDiv.appendChild(elementH2);

// 4. create h2 element
let elementnextH2 = document.createElement('h2');
elementnextH2.textContent = 'Selection Topics';
elementDiv.appendChild(elementnextH2);

// 3. create p element insret before h2 element
let elementP = document.createElement('p');
elementP.innerHTML = 'in this section, you will learn about DOM Manipulation<br> using JavaScript Language.';
elementDiv.insertBefore(elementP,elementnextH2);

// 5. adding ul element
let ul = `<ul>
    <li>Accessing DOM Element</li>
    <li>Modifying DOM Element</li>
    <li>Adding New DOM Element</li>
    <li>Removing Existing DOM Element</li>
  </ul>`
  elementDiv.insertAdjacentHTML('beforeend',ul);
// beforebegin <div> afterbegin <p></p> beforeend </div> afterend

// 5. add div element to the webpage
  let heading = document.querySelector('.heading');
  heading.appendChild(elementDiv);

//function for submit button stored the values by using localstorage
function Values() {
//create variables to storing input values
 let fname = document.getElementById('fname').value;
 let lname = document.getElementById('lname').value;
 let email = document.getElementById('email').value;
  //getting values from dropdown list
 let country = document.querySelector('#country').value;
  //getting values of checked radio button
 let gender = document.querySelector('input[name="gender"]:checked').value;
  //getting values of checked checkbox button
 let hobbies = [];
 let hobbiesSelect = document.getElementsByName('hobbies[]');

 for(i=0;i<hobbiesSelect.length;i++){
 	if (hobbiesSelect[i].checked) {
 		hobbies.push(hobbiesSelect[i].value);
 	}
 }

// seting keyword to values to store in localstorage
 localStorage.setItem("fname",fname);
 localStorage.setItem("lname",lname);
 localStorage.setItem("email",email);
 localStorage.setItem("country",country);
 localStorage.setItem("gender",gender);
 localStorage.setItem("hobbies",hobbies);
 return;

}


//addEventlistner method with annanomus function
 document.getElementById('email')
   .addEventListener('focus' , function(){
	this.style.background = 'yellow'
 })
 document.getElementById('email')
   .addEventListener('blur' , function(){
	this.style.background = 'white'
 })


// adding events using dom
 let fname1 = document.getElementById('fname');
 fname1.onfocus = function(){
	fname1.style.backgroundColor = 'yellow'
 }
 fname1.onblur = function(){
	fname1.style.backgroundColor = 'white'
 }
 let lname1 = document.getElementById('lname');
 lname1.onfocus = function(){
	lname1.style.backgroundColor = 'yellow'
 }
 lname1.onblur = function(){
	lname1.style.backgroundColor = 'white'
 }

 let country1 = document.getElementById('country');
 country1.onfocus = function(){
 country1.style.backgroundColor = 'yellow'
 }
 country1.onblur = function(){
 country1.style.backgroundColor = 'white'
 }


 let regiText = document.getElementById('regiText');
 regiText.onmouseover = function(){
 	regiText.style.color = 'red';
 }
 regiText.onmouseout = function(){
 	regiText.style.color = 'black';
 }

 //dom adding custom alert
 let alert = document.getElementById('Alert');
 let ok = document.getElementById('ok');
 let alertE1 = document.querySelector('.alert');
 let overlay = document.querySelector('.overlay');

 //creating function for adding hidden
 function showalert(){
    alertE1.classList.remove('hidden');
    overlay.classList.remove('hidden');
 }

 function hidealert(){
    alertE1.classList.add('hidden');
    overlay.classList.add('hidden');
 }

 alert.addEventListener('click',showalert);
 ok.addEventListener('click',hidealert);

//dom adding custom Prompt
let Prompt = document.getElementById('Prompt');
let ok1 = document.getElementById('ok1');
let PromptE1 = document.querySelector('.Prompt');
let overlay1 = document.querySelector('.overlay1');
let PromptCancel = document.getElementById('Cancel');
let Input = document.getElementById('value1');
//creating function for adding hidden
function showprompt(){
  PromptE1.classList.remove('hidden');
   overlay1.classList.remove('hidden');
}

function hideprompt(event){
  let Value;

if(event.target.textContent ==='OK'){
  Value = Input.value;
}
else { 
  Value = null; }

  PromptE1.classList.add('hidden');
   overlay1.classList.add('hidden');
   console.log(Value);
}

Prompt.addEventListener('click',showprompt);
PromptCancel.addEventListener('click',hideprompt); 
ok1.addEventListener('click',hideprompt); 