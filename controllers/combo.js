const Combo = require("../models/comboProduct")

const createComboFood = async (req, res) => {
    try {
         const newFood = new Combo(req.body);
         const saveFood = await newFood.save();
         res.status(200).json({
            message: "Food Successfully Add",
            success: true,
            data:{
                food: saveFood,
            }
         })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error",
            success: false,
        });
    }
};

const getComboFoodById = async (req, res) => {
    try {
        const {id} = req.params;
        const foodItems = await Combo.findById(id);

         res.status(200).json({
            message: "Food Details",
            success: true,
            data:{
                food: foodItems,
            }
         })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error",
            success: false,
        });
    }
};

const getComboAllFoods = async (req, res) => {
    try {
        const {catagory} = req.params;
        console.log(catagory);
        if(catagory === "All"){

            const foodItems = await Combo.find();
    
             res.status(200).json({
                message: "View Food Successfully",
                success: true,
                data:{
                    food: foodItems,
                }
             })
        } else{
            const foodItems = await Combo.find({ catagory: catagory});

            res.status(200).json({
                message: "View Food Successfully",
                success: true,
                data:{
                    food: foodItems,
                }
             });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error",
            success: false,
        });
    }
};


module.exports = {createComboFood, getComboFoodById, getComboAllFoods}
