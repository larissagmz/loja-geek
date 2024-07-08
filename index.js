let items = [
    {
        image: "./assets/starwarspersonagem.jpg",
        name: "Carrinho",
        price: "200,00R$",
        type: "Painting",
    },
    {
        image: "./assets/fada.jpg",
        name: "Fada",
        price: "299,00R$",
        type: "Action",
    },
    {
        image: "./assets/kurama.jpg",
        name: "Kurama naruto",
        price: "499,99R$",
        type: "Action",
    },
    {
        image: "./assets/naruto.jpg",
        name: "Naruto",
        price: "599,99R$",
        type: "Action",
    },
    {
        image: "./assets/alexa.jpg",
        name: "Alexa",
        price: "299,00R$",
        type: "Action",
    },
    {
        image: "./assets/bruno.jpg",
        name: "Bruno",
        price: "10,00R$",
        type: "Painting",
    },
    {
        image: "./assets/barcos.jpg",
        name: "Barcos",
        price: "100,00R$",
        type: "Painting",
    },
    {
        image: "./assets/lapis.jpg",
        name: "Lapis",
        price: "200,00R$",
        type: "Painting",
    },
];

let listFigures = [];
let listFrames = [];

function separateItens(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].type === "Painting") {
            listFigures.push(list[i]);
        } else {
            listFrames.push(list[i]);
        }
    }
}

function createElementFigures(list) {
    let ul;
    if (list[0].type === "Painting") {
        ul = document.getElementById("product-paintings");
    } else {
        ul = document.getElementById("product-frame");
    }
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.className = "product";
        let name = document.createElement("span");
        let image = document.createElement("img");
        let price = document.createElement("p");
        let figure = document.createElement("figure");
        let div = document.createElement("div");
        price.className = "subtitle";
        div.className = "product-info";
        figure.className = "image-product";
        name.innerText = `${list[i].name}`;
        price.innerText = `${list[i].price}`;
        image.src = `${list[i].image}`;
        li.appendChild(figure);
        li.appendChild(div);
        figure.appendChild(image);
        div.appendChild(name);
        div.appendChild(price);
        ul.appendChild(li);
    }
}

separateItens(items);

createElementFigures(listFigures);
createElementFigures(listFrames);
