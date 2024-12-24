import Product from '../../models/Product';
import connectDB from '../../middleware/mongoose';

const handler = async (req, res) => {
    try {
        // Ensure the database connection is established
        await connectDB(req, res);  // Pass req and res to connectDB

        // Fetch products from the database
        let products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export default handler;
