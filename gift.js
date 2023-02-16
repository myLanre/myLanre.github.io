const retrievedList = document.getElementById("retrieved-list");
const savedItems = JSON.parse(localStorage.getItem("items") || "[]");

if (savedItems.length === 0) {
  // If the list is empty, redirect to the "all.html" page
  window.location.href = "all.html";
} else {
  // Populate the table with the list of items
  retrievedList.innerHTML = savedItems.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.itemName}</td>
      <td>${item.itemQuantity}</td>
    </tr>
  `).join("");

  // Select a random item from the list
  const selectedIndex = Math.floor(Math.random() * savedItems.length);
  const selectedItem = savedItems[selectedIndex];

  // Decrement the quantity of the selected item by 1
  selectedItem.itemQuantity--;
  if (selectedItem.itemQuantity === 0) {
    // Remove the item from the list if its quantity is 0
    savedItems.splice(selectedIndex, 1);
  }
  localStorage.setItem("items", JSON.stringify(savedItems));

  // Update the table with the updated item list
  retrievedList.innerHTML = savedItems.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.itemName}</td>
      <td>${item.itemQuantity}</td>
    </tr>
  `).join("");

  // Update the prize and product image
  const prize = selectedItem.itemName;
  document.getElementById("prize").textContent = `Congratulations, you have won a Zenith Bank ${prize}`;
  document.getElementById("product-image").src = `../images/${prize}.jpg`;
}
