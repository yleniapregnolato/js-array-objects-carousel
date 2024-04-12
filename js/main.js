const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// MILESTONE 1
// stampo tutte le immagini in pagina

const carouselContainer = document.querySelector(".my-carousel-images");

const carouselPreview = document.querySelector(".my-thumbnails");

images.forEach((curImages, index) => {
  console.log(curImages);

  let isActive = index === 0 ? "active" : "";

  const slideElem = `
  <div class="my-carousel-item ${isActive}" carousel-item="${index}">
    <img
      class="img-fluid"
      src="${curImages.image}"
      alt="Marvel's Spiderman Miles Morale picture"
    />
    <div class="item-description px-3">
     <h2>${curImages.title}</h2>
      <p>
        ${curImages.text}
      </p>
    </div>
  </div>`;

  carouselContainer.innerHTML += slideElem;

  // stampo nel DOM le immagini della preview

  const previewElem = `
  <img
    class="img-fluid my-thumbnail active"
    src="${curImages.image}"
    alt="Thumbnail of Marvel's Spiderman Miles Morale picture"
  />
  `;

  carouselPreview.innerHTML += previewElem;
});

// prelevo i bottoni e aggiungo event listener 

const prevBtn = document.querySelector(".my-prev-hook");
const nextBtn = document.querySelector(".my-next-hook");

let curSlide = 0;

nextBtn.addEventListener("click", () => {

// definisco una condizione per mandare avanti le immagini al click del bottone

  console.log("next");
  document.querySelector(`[carousel-item="${curSlide}"]`).classList.remove("active");

  if (curSlide < document.querySelectorAll(".my-carousel-item").length - 1) {
    curSlide++;
  } else {
    curSlide = 0;
  }
  document.querySelector(`[carousel-item="${curSlide}"]`).classList.add("active");
});
