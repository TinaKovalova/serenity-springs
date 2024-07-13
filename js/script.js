const burgerBtn = document.querySelector(".burger");
const navigation = document.querySelector(".header__actions");

burgerBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    navigation.classList.toggle("opened");

})
navigation.addEventListener("click", (e) => {
    if (e.target.closest('.navigation__link')){
         navigation.classList.toggle("opened");
    }
})