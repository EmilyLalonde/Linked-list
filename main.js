var titleInput= document.querySelector('.title-input');
var urlInput= document.querySelector('.url-input');
var enterButton= document.querySelector('.enter-button');
var card= document.querySelector('.card');
var titleError= document.querySelector('.title-input-error');
var urlError= document.querySelector('.url-input-error');
var linkField = document.querySelector('.link-field')
var counter = 0;
var readCounter = 0;

window.addEventListener('keyup', enterButtonAbility);
enterButton.addEventListener('click', enterButtonAbility);
titleInput.addEventListener('keyup', enterButtonAbility);
urlInput.addEventListener('keyup', enterButtonAbility);
enterButton.addEventListener('click', errorMessage);
enterButton.addEventListener('click', createCard);
enterButton.addEventListener('click', increment);

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
var deleteButton = document.querySelector('.delete-btn');
deleteButton.addEventListener('click', decrement);
var readButton = document.querySelector('.read-btn');
readButton.addEventListener('click', read);
readButton.addEventListener('click', addReadCount);
readButton.addEventListener('click', subtractReadCount);
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

function read(event) {
  var markRead = event.target;
  if (markRead.classList.contains('read')) {
    markRead.classList.remove('read');
    subtractReadCount();
  } else {
    markRead.classList.add('read');
    addReadCount();
  }
}

function increment() {
  counter++;
  document.getElementById('card-count').innerHTML = counter;
}

function decrement() {
  counter--;
  document.getElementById('card-count').innerHTML = counter;
}

function addReadCount () {
  readCounter++;
  document.getElementById('read-count').innerHTML = readCounter;
}

function subtractReadCount () {
  readCounter--;
  document.getElementById('read-count').innerHTML = readCounter;
}

