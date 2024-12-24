const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    desc: { type: String, default: 'SnapShop: Where Every Click Leads to Style!' },
    genre: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    size: { type: String, default: 'M' },
    color: { type: String},
    rating: { type: Number, default: 0 },
    availableQty: { type: Number, required: true },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// You can remove the `mongoose.models = {};` line if you're not facing redefinition issues
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

module.exports = Product;
