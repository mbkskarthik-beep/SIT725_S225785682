
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, 
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number },
  genre: { type: String },
  summary: { type: String },
  price: { type: mongoose.Schema.Types.Decimal128, required: true } 
});


BookSchema.set('toJSON', {
  transform: (doc, ret) => {
    if (ret.price && typeof ret.price === 'object' && ret.price.toString) {
      ret.price = parseFloat(ret.price.toString());
    }
    return ret;
  }
});

module.exports = mongoose.model('Book', BookSchema);
