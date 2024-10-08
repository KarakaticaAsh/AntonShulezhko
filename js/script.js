fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const productContainer = document.querySelector(".carousel");
    data.products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;

      const infoButton = document.createElement("button");
      infoButton.textContent = "Інфо";

      const buyButton = document.createElement("button");
      buyButton.textContent = "Придбати";

      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(infoButton);
      productDiv.appendChild(buyButton);

      productContainer.appendChild(productDiv);
    });
  })
  .catch((error) => console.error("Помилка завантаження продуктів:", error));

const ring = document.getElementById("ring");

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const moveX = (x - windowWidth / 2) / 20;
  const moveY = (y - windowHeight / 2) / 20;

  ring.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
