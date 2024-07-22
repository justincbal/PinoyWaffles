// MOBILE NAVIGATION OPEN / CLOSE
const mobileMenu = document.querySelector(".mobile");
const hamburger = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("open-menu");
});

close.addEventListener("click", () => {
  mobileMenu.classList.remove("open-menu");
});

// about navigation
const aboutButton = document.querySelector(".navAbout");
aboutButton.addEventListener("click", () => {
  const homepage = document.querySelector(".homepage");
  homepage.style.display = 'none';
  about();
});

function about() {
  // Create the main section element
  const aboutSection = document.createElement("section");
  aboutSection.className = "about";

  // Create the aboutHero div
  const aboutHeroDiv = document.createElement("div");
  aboutHeroDiv.className = "aboutHero";

  // Create and add the h1 element to aboutHeroDiv
  const h1 = document.createElement("h1");
  h1.innerHTML = "ABOUT<br>US";
  aboutHeroDiv.appendChild(h1);

  // Create the aboutInfo div
  const aboutInfoDiv = document.createElement("div");
  aboutInfoDiv.className = "aboutInfo";

  // Create and add the p element to aboutInfoDiv
  const p = document.createElement("p");
  p.className = "infoText";
  p.textContent = `Welcome to our family-run eatery! We serve freshly made waffles with
  unique fillings and a taste of traditional Filipino street food.
  Every dish is crafted with love and care, bringing you an authentic
  and memorable dining experience. Join our extended family and enjoy
  our culinary heritage with us.`;
  aboutInfoDiv.appendChild(p);

  // Create the button element and add it to aboutInfoDiv
  const button = document.createElement("button");
  button.className = "explore";

  // Create and add the p element to the button
  const buttonText = document.createElement("p");
  buttonText.textContent = "MENU";
  button.appendChild(buttonText);

  aboutInfoDiv.appendChild(button);

  // Append aboutHeroDiv and aboutInfoDiv to aboutSection
  aboutSection.appendChild(aboutHeroDiv);
  aboutSection.appendChild(aboutInfoDiv);

  // Append aboutSection to the main element
  const mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.appendChild(aboutSection);
  } else {
    console.error("Main element not found");
  }
}
