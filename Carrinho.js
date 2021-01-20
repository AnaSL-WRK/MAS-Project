let carts = document.querySelectorAll('.add-cart');


let products = [{
    name: "Bruschetta De Tomate",
    tag: "Bruschetta De Tomate",
    price: 6,
    inCart: 0
},
    {
        name: "Bruschetta de azeitona",
        tag: "Bruschetta de azeitona",
        price: 6,
        inCart: 0
    },
    {
        name: "Carpaccio",
        tag: "Carpaccio",
        price: 5,
        inCart: 0
    },
    {
        name: "Húmos de beterraba",
        tag: "Húmos de beterraba",
        price: 5,
        inCart: 0
    },
    {
        name: "Gazpacho",
        tag: "Gazpacho",
        price: 4,
        inCart: 0
    },
    {
        name: "Creme de lentilhas com abóbora",
        tag: "Creme de lentilhas com abóbora",
        price: 4,
        inCart: 0
    },

    {
        name: "Sopa mediterrânea",
        tag: "Sopa mediterrânea",
        price: 4,
        inCart: 0
    },
    {
        name: "Rolinhos de Salmão com Queijo Fresco",
        tag: "Rolinhos de Salmão com Queijo Fresco",
        price: 6,
        inCart: 0
    },
    {
        name: "Pasta de Rúcula com Presunto",
        tag: "Pasta de Rúcula com Presunto",
        price: 4,
        inCart: 0
    },
    {
        name: "Tâmaras com Bacon",
        tag: "Tâmaras com Bacon",
        price: 4,
        inCart: 0
    },
    {
        name: "Cogumelos frescos recheados",
        tag: "Cogumelos frescos recheados",
        price: 6,
        inCart: 0
    },
    {
        name: "Rissóis de Camarão",
        tag: "Rissóis de Camarão",
        price: 4,
        inCart: 0
    },
    {
        name: "Rissóis de Carne",
        tag: "Rissóis de Carne",
        price: 3,
        inCart: 0
    },
    {
        name: "Pastéis de Nata de Bacalhau",
        tag: "Pastéis de Nata de Bacalhau",
        price: 4,
        inCart: 0
    },
    {
        name: "Tomate Cherry com azeite e Orégãos",
        tag: "Tomate Cherry com azeite e Orégãos",
        price: 3,
        inCart: 0
    },
    {
        name: "Chouriço Transmontano na brasa",
        tag: "Chouriço Transmontano na brasa",
        price: 6,
        inCart: 0
    },
    {
        name: "Alheira Transmontana",
        tag: "Alheira Transmontana",
        price: 6,
        inCart: 0
    },
    {
        name: "Aglio olio",
        tag: "Aglio olio",
        price: 20,
        inCart: 0
    },
    {
        name: "Risotto de couve-portuguesa",
        tag: "Risotto de couve-portuguesa",
        price: 16,
        inCart: 0
    },
    {
        name: "Tagliatelle com frango e tomate",
        tag: "Tagliatelle com frango e tomate",
        price: 18,
        inCart: 0
    },
    {
        name: "Corvina assada com legumes",
        tag: "Corvina assada com legumes",
        price: 22,
        inCart: 0
    },
    {
        name: "Salmão com crumble de amêndoas",
        tag: "Salmão com crumble de amêndoas",
        price: 17,
        inCart: 0
    },
    {
        name: "Alheira Transmontana",
        tag: "Alheira Transmontana",
        price: 6,
        inCart: 0
    },
    {
        name: "Bacalhau assado na brasa",
        tag: "Bacalhau assado na brasa",
        price: 17,
        inCart: 0
    },
    {
        name: "Filetes de pescada",
        tag: "Filetes de pescada",
        price: 17,
        inCart: 0
    },
    {
        name: "Alheira assada",
        tag: "Alheira assada",
        price: 17,
        inCart: 0
    },
    {
        name: "Arroz de tamboril",
        tag: "Arroz de tamboril",
        price: 17,
        inCart: 0
    },
    {
        name: "Costeletão de Novilho na grelha",
        tag: "Costeletão de Novilho na grelha",
        price: 17,
        inCart: 0
    },
    {
        name: "Muffins de ovo e legumes",
        tag: "Muffins de ovo e legumes",
        price: 14,
        inCart: 0
    },
    {
        name: "Salada de grão de bico e bacalhau",
        tag: "Salada de grão de bico e bacalhau",
        price: 15,
        inCart: 0
    },
    {
        name: "Sorvete de nozes borges",
        tag: "Sorvete de nozes borges",
        price: 7,
        inCart: 0
    },
    {
        name: "Waffles com gelado de baunilha",
        tag: "Waffles com gelado de baunilha",
        price: 6,
        inCart: 0
    },
    {
        name: "Bolo de cenoura",
        tag: "Bolo de cenoura",
        price: 5,
        inCart: 0
    },
    {
        name: "Tiramisu de copo",
        tag: "Tiramisu de copo",
        price: 6,
        inCart: 0
    },
    {
        name: "Salada de fruta",
        tag: "Salada de fruta",
        price: 4,
        inCart: 0
    },
    {
        name: "Chouriço de Mel e Amêndoa",
        tag: "Chouriço de Mel e Amêndoa",
        price: 7,
        inCart: 0
    },
    {
        name: "Mousse de Chocolate",
        tag: "Mousse de Chocolate",
        price: 5,
        inCart: 0
    },
    {
        name: "Brownie de chocolate c/bola de gelado",
        tag: "Brownie de chocolate c/bola de gelado",
        price: 7,
        inCart: 0
    },
    {
        name: "Tarte de frutas tropicais com gelado",
        tag: "Tarte de frutas tropicais com gelado",
        price: 6,
        inCart: 0
    },
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("item added to cart");
        cartNumbers(products[i]);
        totalCost(products[i]);

    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(product);
    console.log(typeof productNumbers);

    productNumbers = parseInt(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem('cartNumbers', 1);


    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);

}

function setItems(product) {
    console.log("Inside of SetItems function");
    console.log("My product is", product);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("my cartItems are", cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {


    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    console.log("cartcost:", cartCost);
    console.log(typeof cartCost);

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);  
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");


    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                        <div class="product">
                            <ion-icon name="close-circle" ></ion-icon>
                            <span> ${item.name}</span>
                        </div>
                        <div class="price">€${item.price},00</div>
                        <div class="quantity">
                            <ion-icon class="decrease" name"arrow-dropleft-circle"></ion-icon>
                            <span>${item.inCart}</span>
                            <ion-icon class="increase" name"arrow-dropleft-circle"></ion-icon>
                        </div>
                        </div>
                        <div class="total">
                             €${item.inCart * item.price},00
                        </div>
                            `;
        });

        productContainer.innerHTML += `
            <div class= "basketTotalContainer">
                <h4 class="basketTotalTittle">
                    Total_
                </h4>
                <h4 class="basketTotal">
                    €${cartCost},00
              </h4> ` ;               

    } 
}



displayCart();