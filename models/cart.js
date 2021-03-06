const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const cartSchema = new Schema({
    owner:{ type:Schema.Types.ObjectId, ref:'User' },
    total:{ type:Number, default:0 },
    items:{
        item:{ type: Schema.Types.ObjectId, ref:'Product'},
        quantity:{ type:Number, default:1 },
        price:{ type:Number, default:0 }
    }
})

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;