

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka tekee jokaisesta kuvasta alla olevan HTML:n DOM-metodien avulla. Kun alla oleva rakenne on valmis, ne lisätään ul-elementin sisälle
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
// Tee HTML-elementit createElement-metodilla ja
// lisää attribuutit setAttribute-metodilla tai elementti.attribuutti -syntaksilla.
// Lisää elementit toistensa sisälle appendChild-metodilla.
// Lisää ne lopuksi ul elementin sisälle, jolloinka ne tulostuvat HTML-sivulle.

const showImages = () => {

  const ul = document.querySelector('ul');


  fetch('kuvat.json')
    .then((response) => {
    return response.json();
    })
      .then((jason) => {
      console.log(jason);



      jason.forEach((kuva) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        let img = document.createElement('img');
        const figure = document.createElement('figure');
        let figcap = document.createElement('figcaption');
        let h3 = document.createElement('h3');

          h3.innerText = "Blah";
          figcap.appendChild(h3);

          img.setAttribute('src', `img/thumbs/${kuva.mediaThumb}`);

          a.setAttribute('href', `img/original/${kuva.mediaUrl}`);
          //a.innerText = 'Linkki';
          a.appendChild(img);

          figure.appendChild(a);
          figure.appendChild(figcap);

          li.appendChild(figure);

          ul.appendChild(li);

        });

/*          const ul = document.querySelector('ul');
          ul.appendChild(li);*/




  });
};

showImages();