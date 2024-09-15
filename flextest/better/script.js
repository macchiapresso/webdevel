const select = document.querySelector("select");
const html = document.querySelector("html");
select.value = "dark";

function update(bgColor, textColor, borderColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.body.style.borderColor = borderColor;
}

select.addEventListener("change", () => 
    select.value === "light"
    ? update("white", "black", "black")
    : update("black", "whitesmoke", "whitesmoke"),
);