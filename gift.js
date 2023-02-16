const retrievedList = document.getElementById("retrieved-list");
const savedItems = JSON.parse(localStorage.getItem("items") || "[]");

if (savedItems.length === 0) {
  window.location.href = "all.html";
} else {
  const selectedIndex = Math.floor(Math.random() * savedItems.length);
  const selectedItem = savedItems[selectedIndex];

  selectedItem.itemQuantity--;

  if (selectedItem.itemQuantity === 0) {
    savedItems.splice(selectedIndex, 1);
  }

  localStorage.setItem("items", JSON.stringify(savedItems));

  const tableHTML = savedItems.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.itemName}</td>
      <td>${item.itemQuantity}</td>
    </tr>
  `).join("");

  retrievedList.innerHTML = tableHTML;

  const prize = selectedItem.itemName.toLowerCase();
document.getElementById("prize").textContent = `Congratulations, you have won a Zenith Bank ${prize}`;
document.getElementById("product-image").src = `images/${prize}.jpg`;
}
