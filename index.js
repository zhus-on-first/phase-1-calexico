const menuItems = document.querySelector("#menu-items");

//Challenge 1 (make/render 1 item, make list of items, get items)
const renderItem = (item) => {
  const span = document.createElement("span");
  span.textContent = item.name;
  menuItems.append(span);
};

const makeList = (items) => {
  items.forEach((item) => {
    renderItem(item);
  });
};
fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((items) => makeList(items));

// Challenge 2 render menu details

// Challenge 3 add event listener to menu items
