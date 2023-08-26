const cafes = [
    "Capuccino",
    "Mocca",
    "Australiano",
    "Expresso",
    "Americano",
    "Caramel Macchiato",
    "Irish",
    "Cocoa"
  ];
  
  const searchInput = document.getElementById("search-input");
  const suggestionsList = document.getElementById("suggestions-list");
  
  searchInput.addEventListener("input", updateSuggestions);
  
  function updateSuggestions() {
    const inputValue = searchInput.value.toLowerCase();
    const filteredSuggestions = cafes.filter(cafe =>
      cafe.toLowerCase().includes(inputValue)
    );
  
    suggestionsList.innerHTML = "";
  
    filteredSuggestions.forEach(cafe => {
      const listItem = document.createElement("li");
      listItem.textContent = cafe;
      listItem.classList.add("suggestion-item");
      listItem.addEventListener("click", () => redirectToPage(cafe));
      suggestionsList.appendChild(listItem);
    });
  }
  
  function redirectToPage(cafe) {
    window.location.href = `cafe.html?nombre=${cafe}`;
  }