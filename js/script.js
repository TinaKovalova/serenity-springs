const burgerBtn = document.querySelector(".burger");
const navigation = document.querySelector(".header__actions");

burgerBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    navigation.classList.toggle("opened");

})