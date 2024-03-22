import { products } from "./constants/data.js"
import Product from "./models/product-schema.js";


const defaultData=async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data inserted Successfully");
    } catch (error) {
        console.log("error Occurred While inserting to DB",error.message);
    }

}

export default defaultData;