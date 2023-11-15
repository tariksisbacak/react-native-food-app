const popularData = [
  {
    id: 1,
    image: require("../images/pizza1.png"),
    title: "Primavera Pizza",
    weight: "540 gr",
    rating: "5.0",
    price: 3.99,
    sizeName: "Medium",
    sizeNumber: 14,
    crust: "This Crust",
    deliveryTime: 30,
    ingredients: [
      {
        id: "1",
        name: "ham",
        image: require("../images/ham.png"),
      },
      {
        id: "2",
        name: "tomato",
        image: require("../images/tomato.png"),
      },
      {
        id: "3",
        name: "cheese",
        image: require("../images/cheese.png"),
      },
      {
        id: "4",
        name: "garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },
  {
    id: 2,
    image: require("../images/pizza2.png"),
    title: "Vegetarian Pizza",
    weight: "450 gr",
    rating: "4.0",
    price: 3.99,
    sizeName: "Small",
    sizeNumber: 10,
    crust: "This Crust",
    deliveryTime: 40,
    ingredients: [
      {
        id: "3",
        name: "cheese",
        image: require("../images/cheese.png"),
      },
      {
        id: "4",
        name: "garlic",
        image: require("../images/garlic.png"),
      },
    ],
  },
  {
    id: 3,
    image: require("../images/pizza3.png"),
    title: "Peperoni Pizza",
    weight: "700 gr",
    rating: "5.0",
    price: 3.99,
    sizeName: "Large",
    sizeNumber:18,
    crust: "This Crust",
    deliveryTime: 20,
    ingredients: [
      {
        id: "2",
        name: "tomato",
        image: require("../images/tomato.png"),
      },
      {
        id: "3",
        name: "cheese",
        image: require("../images/cheese.png"),
      },

    ],
  },
];

export default popularData;
