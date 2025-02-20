// import { Fleur, fleurValidation } from "../modeles/fleur";

// export const ajouterAuPanier = async (req, res) => {
//     try
//     {
//         const { userId, flowerId, quantity } = req.body;

//         const flower = await Flower.findById(flowerId);
//         if(error){
//             return res.status(400).json({message: error.details[0].message})          
//         }

//         let cart = await Cart.findOne({ userId });

//         if (!cart) {
//             cart = new Cart({ userId, products: [], totalPrice: 0 });
//         }
//     }
// }