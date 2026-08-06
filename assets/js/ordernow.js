
const orderNowButton = document.getElementById("orderNowButton");
//const orderNowButton2 = document.getElementById("orderNowButton2");

const cartPopup = document.getElementById("cartPopup");
const addNewItemButton = document.getElementById("addNewItem");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const placeOrderButton = document.getElementById("placeOrderButton");

// Show popup
orderNowButton.addEventListener("click", () => {
  cartPopup.style.display = "flex";
});

// orderNowButton2.addEventListener("click", () => {
//   cartPopup.style.display = "flex";
// });

// Add new cart item
addNewItemButton.addEventListener("click", () => {
  const newItem = document.createElement("div");
  newItem.className = "cart-item";
  newItem.innerHTML = `
    <div class="delete-item">&times;</div>
    <label for="menuItem">Item</label>
    <select>
      <option value=""  selected>Choose Item</option>
      <option value="" disabled selected>Choose Item</option>
            <option value="kadai-paneer">Kadai Paneer (F ₹150 | H ₹80)</option>
            <option value="Labaddar-Paneer">Labaddar Paneer (F ₹170 | H ₹90)</option>
            <option value="Bhurji-Paneer">Bhurji Paneer(F ₹199 | H ₹99)</option>
            <option value="Sahi-Paneer">Sahi Paneer(F ₹170 | H ₹90)</option>
            <option value="Butter-Masala-Paneer">Butter Masala Paneer(F ₹170 | H ₹90)</option>
            <option value="Matar-Paneer">Matar Paneer (F ₹160 | H ₹85)</option>
            <option value="Litti-Chokha">Litti Chokha (F ₹90 | H ₹50)</option>
            <option value="Sattu-Paratha">Sattu Paratha (₹80 - 2 pcs)</option>
            <option value="Rajama-Chawal">Rajama Chawal(₹90)</option>
            <option value="Kadhi-Chawal">Kadhi Chawal(₹90)</option>
            <option value="Dal-Chawal">Dal Chawal(₹90)</option>
            <option value="Dal-Delight-Platter">Dal Delight Platter(₹95)</option>
            <option value="Royal-Paneer-Platter">Royal Paneer Platter(₹110)</option>
            <option value="Dal-Delight-Platter">Dal Delight Platter(₹95)</option>
            <option value="Dal-Delight-Platter">Dal Delight Platter(₹95)</option>
            <option value="Dal-Tadka">Dal Tadka (F ₹120 | H ₹60)/option>
            <option value="Chhole">Chhole (F ₹120 | H ₹60)</option>
            <option value="Rajama">Rajama (F ₹120 | H ₹60)</option>
            <option value="Kadhi-Pakoda">Kadhi Pakoda (F ₹120 | H ₹60)</option>
            <option value="Dal-Makhani">Dal Makhani (F ₹150 | H ₹80)</option>
            <option value="Paneer-Fried-Rice">Paneer Fried Rice (F ₹120 | H ₹70)</option>
            <option value="Seasonal-Sabji">Seasonal Sabji (F ₹80 | H ₹45)</option>
            <option value="Roti">Roti (₹10 - 1 pcs)</option>
            <option value="Allo-Paratha(2 pcs)">Allo Paratha (₹75 - 2 pcs )</option>
            <option value="Sattu-Paratha(2 pcs)">Sattu Paratha (₹80 - 2 pcs)</option>
            <option value="Paneer-Paratha(2 pcs)">Paneer Paratha (₹90 - 2 pcs)</option>
    </select>

    <label for="portion">Portion</label>
    <select>
      <option value="full">Full</option>
      <option value="half">Half</option>
    </select>

    <label>Quantity</label>
    <div class="quantity-control">
      <button class="decrease">-</button>
      <input type="number" value="1" min="1">
      <button class="increase">+</button>
    </div>
  `;
  cartItemsContainer.appendChild(newItem);
  attachEventListeners(newItem);
});

// Attach event listeners to buttons
function attachEventListeners(item) {
  item.querySelector(".decrease").addEventListener("click", (e) => {
    const input = e.target.nextElementSibling;
    if (input.value > 1) input.value--;
  });

  item.querySelector(".increase").addEventListener("click", (e) => {
    const input = e.target.previousElementSibling;
    input.value++;
  });

  item.querySelector(".delete-item").addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
}

// Place order on WhatsApp
placeOrderButton.addEventListener("click", () => {
  const orderDetails = [];
  document.querySelectorAll(".cart-item").forEach((item) => {
    const menuItem = item.querySelector("select").value;
    const portion = item.querySelectorAll("select")[1].value;
    const quantity = item.querySelector("input").value;
    if (menuItem && portion) {
      orderDetails.push(`${menuItem} (${portion}) x${quantity}`);
    }
  });

  const orderText = `Hi, I would like to order:\n\n${orderDetails.join("\n")}`;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(orderText)}`;
  window.open(whatsappURL, "_blank");
});

// Attach listeners to default item
document.querySelectorAll(".cart-item").forEach((item) => attachEventListeners(item));


const closePopupButton = document.getElementById("closePopupButton");

// Close popup on button click
closePopupButton.addEventListener("click", () => {
  cartPopup.style.display = "none";
  document.body.classList.remove("no-scroll"); // Restore body scroll
});