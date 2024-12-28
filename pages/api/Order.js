import connectDB from '../../middleware/mongoose';
import Order from '../../models/Order';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { user, products, address, amount, paymentMethod } = req.body;

            // Validate request data
            if (!user || !products || !address || !amount || !paymentMethod) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            // Create a new order
            const newOrder = new Order({
                user,
                products,
                address,
                amount,
                paymentMethod,
                status: 'Pending', // Default status
            });

            const savedOrder = await newOrder.save();

            res.status(201).json({
                message: 'Order placed successfully!',
                order: savedOrder,
            });
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Server error, please try again later.', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default connectDB(handler);