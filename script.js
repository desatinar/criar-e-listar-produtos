let products = [];

const productsTable = document.getElementById("products-container");
const formContaier = document.getElementById("add-product-container");
const form = document.getElementById("form");

function updateTableBody() {
  const tableBody = document.getElementById("products");
  tableBody.innerHTML = "";

  products.forEach((prod) => {
    const newRow = document.createElement("tr");
    const newProductName = document.createElement("th");
    const newProductPrice = document.createElement("td");

    newProductName.textContent = prod.name;
    newProductPrice.textContent = prod.price;

    newRow.appendChild(newProductName);
    newRow.appendChild(newProductPrice);
    tableBody.appendChild(newRow);
  });
}

function addProduct(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  products.push({ name, price });
  products.sort((a, b) => a.price - b.price);

  updateTableBody();
  form.reset();

  formContaier.classList.add("hidden");
  productsTable.classList.remove("hidden");
}

function hideProducts(){
  productsTable.classList.add("hidden");
  formContaier.classList.remove("hidden");
}