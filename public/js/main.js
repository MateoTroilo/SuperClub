const menuUser = document.querySelector(".menuUserContainer");
const main = document.querySelector("main");
const changeTheme = document.querySelector(".changeTheme");
const lightMode = document.querySelector(".toLightMode");
const darkMode = document.querySelector(".toDarkMode");
const links = document.querySelectorAll(".menuUserLinks div");
const logout = document.querySelector("#logout");
const modalBlack = document.querySelector(".modalBlack");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const productCard = document.querySelectorAll(".productCard");
const menuUserSettings = document.querySelectorAll(".menuUserSettings img");
const cart = document.querySelector(".cart");
const mainCartAnchors = document.querySelectorAll(".main-cart a");
const cartBtns = document.querySelectorAll(".button-cart");
const cantBars = document.querySelectorAll(".cant-bar");
const buttonProfile = document.querySelector(".btn-profile");
const productMobile = document.querySelector(".product-mobile");
const btnAddCart = document.querySelectorAll(".btn-agregar-cart");
const rutaArnchor = document.querySelectorAll(".ruta a");
const productDesktop = document.querySelector(".producto");
const body = document.querySelector("body");
const loginContainer = document.querySelector(".login-container");
const loginContainerInput = document.querySelectorAll(".login-container input");
const loginContainerButton = document.querySelector(".login-container button");
const anchorQuestion = document.querySelector(".question a");
const registerContainer = document.querySelector(".register");
const anchorRegisterQuestion = document.querySelector("main a");
const registerContainerInput = document.querySelectorAll(".register input");
const registerContainerButton = document.querySelector(".register button");
const buyButton = document.querySelector(".buy-button");
const dialog = document.querySelector(".dialog");
const dialogAccept = document.querySelector(".dialog-accept");

buttonProfile?.addEventListener("click", () => {
    menuUser.classList.toggle("show");
    if (window.innerWidth <= 414) {
        menuUser.focus();
        modalBlack.classList.add("showModalBlack");
        modalBlack.style.width = `${window.innerWidth}px`;
        modalBlack.style.height = `${window.innerHeight}px`;

        main.style.pointerEvents = "none";
    }
});

links?.forEach((link) => {
    link?.addEventListener("click", () => {
        if (link.id === "inicio") return (window.location.href = "/");
        if (link.id === "miscompras") return (window.location.href = "/cart");
        window.location.href = "#";
        console.log("me reclickeraon crak");
    });
});

logout?.addEventListener("click", () => {
    window.location.href = "/logout";
});

menuUser?.addEventListener("click", (e) => {
    e.stopPropagation();
});

menuUser?.addEventListener("blur", () => {
    console.log("mega blurbeadi");
    menuUser.classList.remove("show");
    modalBlack.classList.remove("showModalBlack");
    main.style.pointerEvents = "initial";
});

changeTheme?.addEventListener("click", () => {
    toggleTheme();
});

const toggleTheme = () => {
    if (main.classList.contains("dark")) {
        lightMode && (lightMode.style.display = "none");
        darkMode && (darkMode.style.display = "flex");
        localStorage.setItem("temaPreferido", "light");
    } else {
        lightMode && (lightMode.style.display = "flex");
        darkMode && (darkMode.style.display = "none");
        localStorage.setItem("temaPreferido", "dark");
    }
    console.log(localStorage.getItem("temaPreferido"));
    const isDark = main.classList.toggle("dark-main");
    menuUserSettings.forEach((img) => {
        img.style.filter = isDark
            ? `invert(100%) sepia(0%) saturate(4097%) hue-rotate(120deg)
    brightness(111%) contrast(101%)`
            : "";
    });
    cart?.classList.toggle("dark-cart");
    footer.classList.toggle("dark-footer");
    header.classList.toggle("dark-header");
    productCard?.forEach((product) => {
        product?.classList.toggle("dark-article");
    });
    mainCartAnchors?.forEach((anchor) => {
        anchor.style.color = isDark ? "white" : "black";
    });
    const children = cart ? [...cart.children] : [];
    children?.forEach((child) => {
        if (child.tagName !== "P" && child.tagName !== "DIV")
            child.classList.toggle("dark-article");

        if (child.tagName === "A") child.style.color = "white";
    });
    cantBars?.forEach((btn) => {
        btn.style.color = "black";
    });
    cartBtns?.forEach((button) => {
        button.style.backgroundColor = isDark
            ? "rgb(236,0,0)"
            : "rgb(73,79,81)";
    });
    productMobile?.classList.toggle("dark-article");
    btnAddCart?.forEach((btn) => {
        btn.style.backgroundColor = "#222";
    });

    rutaArnchor?.forEach((anchor) => {
        anchor.style.color = isDark ? "white" : "black";
    });
    body.style.backgroundColor = isDark ? "#222" : "#efefef";
    productDesktop?.classList.toggle("dark-article");
    loginContainer?.classList.toggle("dark-article");
    registerContainer?.classList.toggle("dark-article");
    anchorRegisterQuestion &&
        (anchorRegisterQuestion.style.color = isDark ? "white" : "black");
    anchorQuestion && (anchorQuestion.style.color = isDark ? "white" : "black");
    loginContainerButton &&
        (loginContainerButton.style.backgroundColor = isDark
            ? "#222"
            : "#494F51");
    registerContainerButton &&
        (registerContainerButton.style.backgroundColor = isDark
            ? "#222"
            : "#494F51");
    loginContainerInput?.forEach((input) => {
        input.style.backgroundColor = isDark ? "#494f51" : "white";
    });
    registerContainerInput?.forEach((input) => {
        input.style.backgroundColor = isDark ? "#494f51" : "white";
    });

    menuUser?.classList.toggle("dark-menu");
    dialog?.classList.toggle("dark-article");
    dialogAccept &&
        (dialogAccept.style.backgroundColor = isDark
            ? "rgb(236,0,0)"
            : "#494F51");
};

buyButton?.addEventListener("click", (e) => {
    console.log("asddd");
    if (!dialog.classList.contains("show-alert"))
        dialog.classList.toggle("show-alert");
});

dialogAccept?.addEventListener("click", () => {
    dialog.classList.toggle("show-alert");
});
