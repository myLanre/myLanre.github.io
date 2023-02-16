
if (savedItems.length === 0) {
    // If the list is empty, redirect to the "all.html" page
    window.location.href = "all.html";
  } else {
    // Populate the table with the list of items
    setInterval(function() {
        location.reload();
    }, 5000);
}
