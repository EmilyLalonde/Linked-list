var titleInput= document.querySelector('.title-input');
var urlInput= document.querySelector('.url-input');
var enterButton= document.querySelector('.enter-button');
var card= document.querySelector('.card');
var titleError= document.querySelector('.title-input-error');
var urlError= document.querySelector('.url-input-error');
var linkField = document.querySelector('.link-field')



window.addEventListener('keyup', enterButtonAbility);
enterButton.addEventListener('click', enterButtonAbility);
titleInput.addEventListener('keyup', enterButtonAbility);
urlInput.addEventListener('keyup', enterButtonAbility);
enterButton.addEventListener('click', errorMessage);
enterButton.addEventListener('click', createCard);
enterButton.addEventListener('click', cardCounter);
linkField.addEventListener('click', read);
linkField.addEventListener('click', function (e) {
  if (e.target.className === 'delete-btn') {
    e.target.parentElement.parentElement.remove();
  }
});

function createCard (e) {
  e.preventDefault(e);
  var newCard =
  `<article class= "card" id= "counter">
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
linkField.insertAdjacentHTML('afterbegin', newCard);
clearInputs();
}


 function clearInputs() {
  titleInput.value = "";
  urlInput.value = "";
 }

function errorMessage() {
  if(titleInput.value === ""){
    alert ('Please Enter a Valid Title');
  }
  if(urlInput.value === ""){
    alert ('Please Enter a Valid URL');
  }
}

function enterButtonAbility(e){
  e.preventDefault()
   if(titleInput.value === "" && urlInput.value === ""){
     enterButton.disabled = true;
     enterButton.classList.add('disabled')
   } else {
     enterButton.disabled = false;
     enterButton.classList.remove('disabled')
   }
 };

 function cardCounter() {
  var countCards = document.getElementById('link-cards').childElementCount;
  document.getElementById('card-count').innerHTML = countCards;
}


function read(e) {
  var markRead = document.querySelector('.read-btn')
  if (e.target.classList.contains('read') && e.target.classList.contains('read-btn')) {
    markRead.classList.remove('read');
  } else if (e.target.classList.contains('read-btn')) {
    markRead.classList.add('read');
    console.log('working', markRead);
  }
}

