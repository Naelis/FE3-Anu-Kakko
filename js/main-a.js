"use strict";
// tee funktio 'showImages', joka
// lisää ladatun HTML-sisällön <ul> elementin sisälle



const showImages = () => {
//Haetaan kuvat.html tekstinä, tallennetaan text -nimellä
  fetch('kuvat.html').then((response) => {
     return response.text();
    }).then((text) => {
      console.log(text);
      //Valitsee 'ul' elementin, ja sitten lisää ladatun HTML-sisällön (text) <ul> elementin sisälle
      const ul = document.querySelector('ul');
      ul.innerHTML = text;
  })
};

showImages();