const Order = require("./order_model");

const createOrder = async (req,res) => {
  try{
    const newOrder= await Order(req.body);
    const savedOrder= await newOrder.save();
    res.status(200).json(savedOrder);
  }catch(error){
    console.log("Error creating the order", error);
    res.status(404).json({message : "Failed to place the order !!"});
  }
}

const getOrderByEmail= async (req,res) => {
  try{
    const {email}=req.params;
    const orders=await Order.find({email}).sort({createdAt: -1});
    if(!orders){
      return res.status(404).json({message: "No orders found!!"});
    }
    res.status(200).json(orders);
  }catch(error){
    console.log("Error fetching the orders", error);
    res.status(500).json({message: "Failed to fetch the orders"});
  }
}

module.exports={
  createOrder,
  getOrderByEmail
};