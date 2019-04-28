class Read {
  constructor(title, url, id) {
  this.title = title;
  this.url = url;
  this.id = id;
  }

  saveToStorage(newCard) {
    var stringifiedNewCard = JSON.stringify(newCard);
    localStorage.setItem('storageArray', stringifiedNewCard);
  };
}

