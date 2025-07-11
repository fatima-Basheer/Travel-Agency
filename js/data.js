const cardData = [
  {
    id: "001",
    head: "America Package",
    image: "img/img12.png",
    price: 2700000,
    visa: "Included",
    AirTicket: "Included",
    Insurance: "Included",
  },
  {
    id: "002",
    head: "Nipal Tour Package",
    image: "img/img13.png",
    price: 95000,
    visa: "Included",
    AirTicket: "Included",
    Insurance: "Included",
  },
  {
    id: "003",
    head: "Span Your Package",
    image: "img/img14.png",
    price: 100000,
    visa: "Included",
    AirTicket: "Included",
    Insurance: "Included",
  },
];

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) return;

  let innerHtml = "";
  cardData.forEach((item) => {
    innerHtml += `
      <div class="col">
        <div class="card shadow-sm h-100">
          <img src="${item.image}" class="card-img-top" alt="Package Image">
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="card-text">
              <h5>${item.head}</h5>
              <div><strong>Price:</strong> Rs ${item.price.toLocaleString()}/-</div>
              <div><strong>Visa:</strong> ${item.visa}</div>
              <div><strong>Air Ticket:</strong> ${item.AirTicket}</div>
              <div><strong>Insurance:</strong> ${item.Insurance}</div>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <a href="https://wa.me/923300000000?text=I'm%20interested%20in%20Package%20ID%20${
                item.id
              }" target="_blank" class="btn btn-primary">
                More Details (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  itemsContainerElement.innerHTML = innerHtml;
}

document.addEventListener("DOMContentLoaded", displayItemsOnHomePage);
