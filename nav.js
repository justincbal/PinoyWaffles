const menu = () => {
  // Create the main section element
  const menuSection = document.createElement("section");
  menuSection.className = "menu";

  // Create and add the main heading
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "MENU";
  menuSection.appendChild(mainHeading);

  // Create the street food menu list
  const streetFoodDiv = document.createElement("div");
  streetFoodDiv.className = "menuList streetFood";

  // Create and add the street food heading
  const streetFoodHeading = document.createElement("h1");
  streetFoodHeading.textContent = "STREET FOOD";
  streetFoodDiv.appendChild(streetFoodHeading);

  // Function to create item headings and paragraphs
  function createItemHeading(title, price) {
    const itemHeadingDiv = document.createElement("div");
    itemHeadingDiv.className = "itemHeading";

    const itemHeadingTitle = document.createElement("h2");
    itemHeadingTitle.textContent = title;

    const itemHeadingPrice = document.createElement("p");
    itemHeadingPrice.innerHTML = price;

    itemHeadingDiv.appendChild(itemHeadingTitle);
    itemHeadingDiv.appendChild(itemHeadingPrice);

    return itemHeadingDiv;
  }

  // Add waffles item
  streetFoodDiv.appendChild(
    createItemHeading("WAFFLES", "1 FOR $2.50<br />3 FOR $5.50")
  );

  // Create and add the waffles list
  const wafflesList = document.createElement("ul");
  const wafflesItems = [
    "HOT DOG",
    "HAM & CHEESE",
    "CHEESE",
    "CREAM CHEESE",
    "BLUEBERRY",
    "STRAWBERRY",
    "APPLE CINNAMON",
    "UBE",
    "LEMON",
    "CHOCOLATE",
    "CARAMEL",
    "CUSTARD",
  ];
  wafflesItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    wafflesList.appendChild(li);
  });
  streetFoodDiv.appendChild(wafflesList);

  // Add other street food items
  streetFoodDiv.appendChild(createItemHeading("SIOMAI", "7 FOR $5"));
  streetFoodDiv.appendChild(createItemHeading("FRIED SIOMAI", "6 FOR $5"));
  streetFoodDiv.appendChild(createItemHeading("SIOPAO", "$2.50 EACH"));

  // Create and add the siopao list
  const siopaoList = document.createElement("ul");
  const siopaoItems = ["PORK ASADO", "PULLED PORK"];
  siopaoItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    siopaoList.appendChild(li);
  });
  streetFoodDiv.appendChild(siopaoList);

  streetFoodDiv.appendChild(
    createItemHeading("KWEK KWEK", "1 STICK $3 <br />2 STICK $5.50")
  );

  // Create and add the lumpia heading and list
  const lumpiaHeading = document.createElement("h2");
  lumpiaHeading.textContent = "LUMPIA";
  streetFoodDiv.appendChild(lumpiaHeading);

  const lumpiaList = document.createElement("ul");
  const lumpiaItems = ["BEAN SPROUT $2.50 EACH", "SHANGHAI 5 FOR $2.50"];
  lumpiaItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lumpiaList.appendChild(li);
  });
  streetFoodDiv.appendChild(lumpiaList);

  streetFoodDiv.appendChild(createItemHeading("TURON", "$1.75 EACH"));

  // Append streetFoodDiv to menuSection
  menuSection.appendChild(streetFoodDiv);

  // Create the drink and dessert menu list
  const drinksDessertsDiv = document.createElement("div");
  drinksDessertsDiv.className = "menuList";

  // Create and add the drink and dessert heading
  const drinksDessertsHeading = document.createElement("h1");
  drinksDessertsHeading.textContent = "DRINK & DESSERT";
  drinksDessertsDiv.appendChild(drinksDessertsHeading);

  // Add drink and dessert items
  const drinksDessertsItems = [
    { title: "HALO HALO", price: "$6" },
    { title: "SAGO GULAMAN", price: "$3" },
    { title: "PINEAPPLE CALAMANSI", price: "$3.25" },
    { title: "ISKRAMBOL", price: "$3" },
    { title: "TAHO", price: "$3 <i>WEEKENDS ONLY</i>" },
    { title: "LECHE FLAN", price: "$4" },
    { title: "SOFT DRINKS", price: "$1.75" },
    { title: "WATER", price: "$1" },
  ];

  drinksDessertsItems.forEach((item) => {
    drinksDessertsDiv.appendChild(createItemHeading(item.title, item.price));
  });

  // Append drinksDessertsDiv to menuSection
  menuSection.appendChild(drinksDessertsDiv);

  // Create the buttons div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  // Create and add the gallery button
  const galleryButton = document.createElement("button");
  galleryButton.className = "explore gallery";
  const galleryButtonText = document.createElement("p");
  galleryButtonText.textContent = "GALLERY";
  galleryButton.appendChild(galleryButtonText);
  buttonsDiv.appendChild(galleryButton);

  // Create and add the contact button
  const contactButton = document.createElement("button");
  contactButton.className = "explore contact";
  const contactButtonText = document.createElement("p");
  contactButtonText.textContent = "CONTACT US";
  contactButton.appendChild(contactButtonText);
  buttonsDiv.appendChild(contactButton);

  // Append buttonsDiv to menuSection
  menuSection.appendChild(buttonsDiv);

  // Append menuSection to the main element
  const mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.appendChild(menuSection);
  } else {
    console.error("Main element not found");
  }
};
