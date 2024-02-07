const MENU = [
  {
    title: "Lanche do dia",
    data: [
      {
        id: "1",
        title: "Gomu Gomu",
        price: 45.9,
        description:
          "O hambúrguer do queijo que estica! É a escola ideal para piratas que querem ser livres!",
        cover: require("../../assets/products/cover/1.png"),
        thumbnail: require("../../assets/products/thumbnail/1.png"),
        ingredients: [
          "Pão brioche;",
          "Burger blend de Wagyu 150g;",
          "Queijo mozarela empanado;",
          "Tiras de bacon;",
          "Maionese da casa;",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "Ruivo",
        price: 35.9,
        description:
          "Poder e sabor suficicentes para parar até uma guerra!",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
          "Pão brioche;",
          "Burger blend de Wagyu 150g;",
          "American cheese em fatia;",
          "Couve crispy;",
          "Farofa de bacon;",
          "Picles;",
          "Geleia de pimenta;",
          "Molho da casa;",
        ],
      },
      {
        id: "3",
        title: "Rei das Feras",
        price: 38.7,
        description:
          "No burguer contra burguer, aposte sempre no rei das Feras!",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "Pão brioche;",
          "Burger blend de Wagyu 150g",
          "Cream cheese;",
          "Shimeji na manteiga;",
          "Rúcula;",
          "Maionese da casa;",
        ],
      },
      {
        id: "4",
        title: "Newgate",
        price: 35.9,
        description:
          "Um terremoto de sabores!",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Pão brioche;",
          "Burger blend de Wagyu 150g",
          "American cheese em fatia;",
          "Alface;",
          "Molho de tomate rústico;",
          "Pepperoni;",
          "Cebola;",
          "Molho da casa;",
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Jolly Fruit",
        price: 23.9,
        description:
          "Gelato de vanilla e calda de chocolate com 2 brownies",
        cover: require("../../assets/products/cover/5.png"),
        thumbnail: require("../../assets/products/thumbnail/5.png"),
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "6",
        title: "Choux cream",
        price: 22.9,
        description:
          "A combinação perfeita entre as técnicas francesas e ingredientes ocidentais!",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/7.png"),
        cover: require("../../assets/products/cover/7.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche!",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
