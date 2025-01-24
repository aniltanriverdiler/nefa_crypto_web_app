const optionMenus = document.querySelectorAll(".select-menu"); // Tüm menüleri seçiyoruz

optionMenus.forEach(optionMenu => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelector(".options");
  const sBtnText = optionMenu.querySelector(".sBtn-text");

  // Menü açma/kapama
  selectBtn.addEventListener("click", () => {
    options.classList.toggle("active");
  });

  // Seçim yapıldığında menü kapanır ve seçilen metin güncellenir
  const optionItems = options.querySelectorAll(".option");
  optionItems.forEach(option => {
    option.addEventListener("click", () => {
      const selectedOption = option.querySelector(".option-text").innerText;
      sBtnText.innerText = selectedOption;
      options.classList.remove("active");
    });
  });
});

