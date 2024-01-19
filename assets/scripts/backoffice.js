const myKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDU2NjIxNTUsImV4cCI6MTcwNjg3MTc1NX0.Yci9zM7h-LCnJXN5P8DGhwVDlrfDU8Y8RlRjwhXPKs0";

const myURL = "https://striveschool-api.herokuapp.com/api/product/";

const nameInput = document.getElementById("nameInput");
const descriptionInput = document.getElementById("descriptionInput");
const brandInput = document.getElementById("brandInput");
const imageInput = document.getElementById("imageInput");
const priceInput = document.getElementById("priceInput");

const myForm = document.getElementsByTagName("form")[0];

// creating new obj using form values

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  class IceCream {
    constructor(_name, _description, _brand, _image, _price) {
      this.name = _name;
      this.description = _description;
      this.brand = _brand;
      this.imageUrl = _image;
      this.price = _price;
    }
  }

  const iceCreamReadyToGo = new IceCream(
    nameInput.value,
    descriptionInput.value,
    brandInput.value,
    imageInput.value,
    priceInput.value
  );
  console.log(iceCreamReadyToGo);

  fetch(myURL, {
    headers: {
      Authorization: myKey,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(iceCreamReadyToGo),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        alert("Gelato Creato");
        // nameInput.value = "";
        // descriptionInput.value = "";
        // brandInput.value = "";
        // imageInput.value = "";
        // priceInput.value = "";
      } else {
        alert(`Error: ${response.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//Adding a reset Button for form
const resetBtn = document.getElementsByTagName("button")[2];
console.log(resetBtn, "click1");
resetBtn.onclick = () => {
  nameInput.value = "";
  descriptionInput.value = "";
  brandInput.value = "";
  imageInput.value = "";
  priceInput.value = "";
};
