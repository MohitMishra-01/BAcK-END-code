const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: false,
    },
    catagory: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: false,
    },
    // prices: {
    //   type: [Number],
    //   required: true,
    // },
    prices: {
      type: [
        {
          size: { type: String, required: false },
          price: { type: Number, required: false },
        },
      ],
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: false },
          price: { type: Number, required: false },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema); 








// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       maxlength: 60,
//     },
//     desc: {
//       type: String,
//       required: true,
//       maxlength: 200,
//     },
//     img: {
//       type: String,
//       required: false,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     productType: {
//       type: String,
//       required: false,
//     },
//     prices: {
//       type: [Number],
//       required: true,
//     },
//     extraOptions: {
//       type: [
//         {
//           text: { type: String, required: false },
//           price: { type: Number, required: false },
//         },
//       ],
//     },
//     pizza: {
//       type: Map,
//       of: new mongoose.Schema(
//         {
//           toppings: {
//             type: [String],
//             required: true,
//           },
//         },
//         { _id: false }
//       ),
//       required: false,
//     },
//     drinks: {
//       type: Map,
//       of: new mongoose.Schema(
//         {
//           drinkType: {
//             type: String,
//             required: true,
//           },
//         },
//         { _id: false }
//       ),
//       required: false,
//     },
//     iceCream: {
//       type: Map,
//       of: new mongoose.Schema(
//         {
//           iceCreamType: {
//             type: String,
//             required: true,
//           },
//         },
//         { _id: false }
//       ),
//       required: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", ProductSchema);



// {
//   "title": "Pizza, Drinks, and Ice Cream Combo",
//   "desc": "A variety of pizzas, drinks, and ice cream",
//   "img": "combo.jpg",
//   "category": "Combo",
//   "productType": "Meal",
//   "prices": [25, 35, 45],
//   "extraOptions": [
//     {
//       "text": "Extra Cheese",
//       "price": 2
//     },
//     {
//       "text": "Stuffed Crust",
//       "price": 3
//     }
//   ],
//   "pizza": {
//     "Margherita": {
//       "toppings": ["Tomato", "Mozzarella", "Basil"]
//     },
//     "Pepperoni": {
//       "toppings": ["Pepperoni", "Cheese"]
//     },
//     "Veggie": {
//       "toppings": ["Bell Peppers", "Onions", "Mushrooms"]
//     }
//   },
//   "drinks": {
//     "Cola": {
//       "drinkType": "Soda"
//     },
//     "Lemonade": {
//       "drinkType": "Juice"
//     },
//     "Water": {
//       "drinkType": "Still"
//     }
//   },
//   "iceCream": {
//     "Vanilla": {
//       "iceCreamType": "Classic"
//     },
//     "Chocolate": {
//       "iceCreamType": "Rich"
//     },
//     "Strawberry": {
//       "iceCreamType": "Fruity"
//     }
//   }
// }
