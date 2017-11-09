"use strict";



// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka lisää merkkijonoon (string) jokaisesta kuvasta alla olevan HTML:n
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Silmukan jälkeen tulosta HTML-koodi (output) <ul>-elementin sisälle innerHTML:n avulla



const showImages = () => {
//Haetaan kuvat.html tekstinä, tallennetaan text -nimellä
  fetch('kuvat.json')
  .then((response) => {
    return response.json();
  })
  .then((jason) => {
    console.log(jason);
    let html = '';

    jason.forEach((kuva) => {

      html += `<li>
                    <figure>
                        <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                        <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                        </figcaption>
                    </figure>
                </li>`;

    });

    //Valitsee 'ul' elementin, ja sitten lisää ladatun HTML-sisällön (text) <ul> elementin sisälle
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  })
};

showImages();