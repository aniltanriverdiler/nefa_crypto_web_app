const optionMenus = document.querySelectorAll(".select-menu"); // Selecting all menus 

optionMenus.forEach(optionMenu => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelector(".options");
  const sBtnText = optionMenu.querySelector(".sBtn-text");

  // Opening/closing the menu  
  selectBtn.addEventListener("click", () => {
    options.classList.toggle("active");
  });

  // When an option is selected, the menu closes and the selected text is updated
  const optionItems = options.querySelectorAll(".option");
  optionItems.forEach(option => {
    option.addEventListener("click", () => {
      const selectedOption = option.querySelector(".option-text").innerText;
      sBtnText.innerText = selectedOption;
      options.classList.remove("active");
    });
  });
});
