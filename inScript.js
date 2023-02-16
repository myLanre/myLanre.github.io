const container = document.getElementById("container");
const itemTable = document.getElementById("item-table");
const itemList = document.getElementById("item-list");
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const addButtonWrapper = document.createElement("div");
const addItemButton = document.getElementById("add-item-button");
const refreshButton = document.createElement("button");
const divider = document.createElement("div");

refreshButton.innerHTML = "Refresh Gift List";
refreshButton.classList.add("refresh-button");
addButtonWrapper.appendChild(addItemButton);
addButtonWrapper.appendChild(refreshButton);
container.appendChild(addButtonWrapper);

divider.style.height = "20px";
divider.style.color = "gray";
divider.style.borderTop = "1px solid";
divider.style.marginTop = "30px";
container.appendChild(divider);

let itemCounter = 0;

addItemButton.addEventListener("click", function() {
  const itemName = itemNameInput.value;
  const itemQuantity = itemQuantityInput.value;
  if (!itemName || !itemQuantity) return;

  itemCounter++;
  const capitalizedItemName = itemName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const row = document.createElement("tr");
  row.innerHTML = `<td>${itemCounter}</td><td>${capitalizedItemName}</td><td>${itemQuantity}</td>`;
  itemList.appendChild(row);

  itemNameInput.value = "";
  itemQuantityInput.value = "";

  const items = [];
  for (let i = 0; i < itemList.children.length; i++) {
    const row = itemList.children[i];
    const itemName = row.children[1].innerHTML;
    const itemQuantity = row.children[2].innerHTML;
    items.push({ itemName, itemQuantity });
  }
  localStorage.setItem("items", JSON.stringify(items));
});

refreshButton.addEventListener("click", function() {
  itemCounter = 0;
  itemList.innerHTML = "";
});

const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
for (const item of savedItems) {
  itemCounter++;
  const row = document.createElement("tr");
  row.innerHTML = `<td>${itemCounter}</td><td>${item.itemName}</td><td>${item.itemQuantity}</td>`;
  itemList.appendChild(row);
}

const handleEnterKey = (event) => {
  if (event.key === "Enter") addItemButton.click();
}

itemNameInput.addEventListener("keydown", handleEnterKey);
itemQuantityInput.addEventListener("keydown", handleEnterKey);
