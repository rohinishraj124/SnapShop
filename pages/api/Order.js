import Order from "@/models/Order";
import connectDB from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, orderId, address, amount, products } = req.body;
    console.log('Received Order Data:', req.body);

    // Validate if all required fields are present
    if (!email || !orderId || !address || !amount || !products) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Map the products into an array of objects, assuming each key represents a product
      const productArray = Object.entries(products).map(([productId, productDetails]) => ({
        productId,
        ...productDetails, // Spread the product details (qty, price, name, size, variant)
      }));

      // Create a new order instance with the received data
      const order = new Order({
        email,
        orderId,
        address,
        amount,
        products: productArray, // Save the products as an array of objects
      });

      // Log the order object before saving to DB
      console.log('Saving Order:', order);

      // Save the order to the database
      await order.save();

      res.status(200).json({ success: 'Order placed successfully' });
    } catch (error) {
      // Log the error if there is an issue during the save
      console.error('Error while saving order:', error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default connectDB(handler);
