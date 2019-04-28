var titleInput= document.querySelector('.title-input');
var urlInput= document.querySelector('.url-input');
var enterButton= document.querySelector('.enter-button');
var card= document.querySelector('.card');
var titleError= document.querySelector('.title-input-error');
var urlError= document.querySelector('.url-input-error');
var linkField = document.querySelector('.link-field')

// window.addEventListener('load', buttonAbility);

// function buttonAbility () {
//   if (titleInput.value.length === 0 && urlInput.value.length === 0) {
//     enterButton.disabled = true;
// }else{
//   enterButton.disabled = false;
//   }
// }



// window.addEventListener('load', buttonEnable);

// function buttonAbility () {
//   if (titleInput.value === "" && urlInput.value === "") {
//     enterButton.disabled = true;
//     enterButton.classList.add('disabled');
//   }else if (titleInput.value !== "" && urlInput.value !== ""){
//     enterButton.disabled = false;
//     enterButton.classList.remove('disabled');
//   }
// }

// function buttonDisable () {
//   if (titleInput.value === "" && urlInput.value === "") {
//     enterButton.disabled = true;
//     enterButton.classList.add('disabled');
//   }
// }

// function buttonEnable () {
//   if (titleInput.value !== "" && urlInput.value !== "") {
//   enterButton.disabled = false;
//   enterButton.classList.remove('disabled');
//   }
// }
// card.addEventListener('click', function (){
//   if(event.target.className === 'delete-btn') {
//     event.target.parentNode.parentNode.remove();
//   }
//  });


 enterButton.addEventListener('click', createCard);

function createCard (e) {
  e.preventDefault(e);
  linkField.innerHTML +=
  `<article class= "card">
  <header class= "title-field">
    <h2> ${titleInput.value}</h2>
  </header>
  <main class= "url-field">
    <h3> ${urlInput.value}</h3>
  </main>
  <h6></h6>
  <footer class= "read-delete-field">
    <button class= "read-btn">Read</button>
    <button class= "delete-btn">Delete</button>
  </footer>
</article>`
clearInputs();
}
 function clearInputs() {
  titleInput.value = "";
  urlInput.value = "";
 }

 linkField.addEventListener('click', function (e) {
  if (e.target.className === 'delete-btn') {
    e.target.parentElement.parentElement.remove();
  }
});




  
// function errorMessage () {
//   if (titleInput.value === '' || urlInput.value === '') {
//   titleError.innerText = 'Please Enter a Website Title';
//   urlError.innerText = 'Please Enter a Website URL';
//   }else{
//     titleError.innerText = '';
//     urlError.innerText = '';
//   }
// }

