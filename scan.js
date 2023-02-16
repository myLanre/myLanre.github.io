const retrievedList = document.getElementById("retrieved-list");
      const savedItems = JSON.parse(localStorage.getItem("items") || "[]");

      let itemCounter = 0;
      for (const item of savedItems) {
        itemCounter++;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${itemCounter}</td>
          <td>${item.itemName}</td>
          <td>${item.itemQuantity}</td>
        `;
        retrievedList.appendChild(row);
      }