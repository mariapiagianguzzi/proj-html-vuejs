/* ADESSO MI CREO LA MIA LISTA DI OGGETTI DA RICHIAMARE */

let app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    navbar: [
      {
        text: "HOME",
      },
      {
        text: "SHOP",
      },
      {
        text: "ABOUT",
      },
      {
        text: "GALLERY",
      },
      {
        text: "LOCATIONS",
      },
      {
        text: "JOURNAL",
      },
      {
        text: "CONTACT",
      },
      {
        text: "MY ACCOUNT",
      },
    ],
    images: [
      "./img/choco-chip-cookies-235x300.jpg",
      "./img/strawberry-jam-cookies-235x300.jpg",
      "./img/home-bread-235x300.jpg",
      "./img/blackberry-stuffed-bread-200x255.jpg",
    ],
    footerEnd: [
      {
        text: "Shop",
      },
      {
        text: "About",
      },
      {
        text: "Gallery",
      },
      {
        text: "Locations",
      },
      {
        text: "Journal",
      },
      {
        text: "Contact",
      },
      {
        text: "Orders",
      },
    ],
  },
  /*  methods: {
    next() {
      this.counter++;
      if (this.counter === this.images.length) {
        this.counter = 0;
      }
    },
    prev() {
      this.counter--;
      if (this.counter === -1) {
        this.counter = this.images.length - 1;
      }
    },
  }, */
});
