const hardwares = [
  {
    name: "Keyboard",
    totalProducts: 10,
    products: [
      {
        name: "Dell Keyboard",
        price: 900,
      },
      {
        name: "Logitech Keyboard",
        price: 1200,
      },
    ],
  },
  {
    name: "Mouse",
    totalProducts: 4,
    products: [
      {
        name: "Dell Optical Mouse",
        price: 400,
      },
      {
        name: "Logitech Optical Mouse",
        price: 450,
      },
      {
        name: "Intext wireless Mouse",
        price: 600,
      },
    ],
  },
  {
    name: "Screen",
    totalProducts: 4,
    products: [
      {
        name: "Dell Optical Mouse",
        price: 400,
      },
      {
        name: "Logitech Optical Mouse",
        price: 450,
      },
      {
        name: "Intext wireless Mouse",
        price: 600,
      },
    ],
  },
];

const productList = document.querySelector(".product-list");
let productListHtml = "";
for (const singleHardware of hardwares) {
  productListHtml =
    productListHtml +
    `<div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${singleHardware.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${singleHardware.totalProducts}  Products</h6>
            </div>
          </div>
        </div>`;
}
productList.innerHTML = productListHtml;
// console.log(productList);

const getFirstHardware = (a, b) => {


  
};
console.log(getFirstHardware(10, 10));
