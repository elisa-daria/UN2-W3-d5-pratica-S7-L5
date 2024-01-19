const myKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTZjYjE4N2U1YzAwMTgxNGM2YjciLCJpYXQiOjE3MDU2NjIxNTUsImV4cCI6MTcwNjg3MTc1NX0.Yci9zM7h-LCnJXN5P8DGhwVDlrfDU8Y8RlRjwhXPKs0";

const myURL = "https://striveschool-api.herokuapp.com/api/product/";

const appendingRow = document.getElementsByClassName("row")[0];
console.log(appendingRow);

const hidingBtns = document.getElementsByTagName("button");

const gettingIceCream = (arr) => {
  arr.forEach((ice) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4");
    newCol.innerHTML = `<div class="card h-100">
  <img src="${ice.imageUrl}" class="card-img-top d-flex flex-column" />
  <div class="card-body flex-grow-1">
  <h5 class="card-title">${ice.name}</h5>
  <h6 class="card-subtitle mb-2 text-body-secondary">${ice.price}<i class="bi bi-currency-euro"></i></h6>
    <p class="card-text">
      ${ice.description}
    </p>
  </div>
  <div
    class="btn-group"
    role="group"
    aria-label="Basic outlined example"
  >
    <button
      type="button"
      class="btn btn-outline-tomato"
      id="edit-btn"
    >
      Edit
    </button>
    <button
      type="button"
      class="btn btn-outline-tomato rounded-end-2"
      id="delete-btn"
    >
      Delete
    </button>
  </div>
</div>`;
    appendingRow.appendChild(newCol);
  });
};

fetch(myURL, {
  headers: {
    Authorization: myKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("qualcosa non va");
    }
  })
  .then((data) => {
    console.log(data);
    gettingIceCream(data);
  })
  .catch((err) => {
    console.log(err);
  });
