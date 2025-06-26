const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;
const mongoose=require("mongoose");
const bookRoutes=require('./src/books/book_route');
const orderRoutes=require('./src/orders/order_route');
const userRoutes=require('./src/users/user_route');
const adminRoutes=require('./src/stats/admin_stats');
const cors=require("cors");

//middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

app.use("/api/books",bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin",adminRoutes);

async function main(){
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req,res) => {
    res.send('Hello World')
  });
}

main().then(() => console.log("mongodb connect successfully!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})