const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const orderSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        stock: { type: Number, required: true },
        salePrice: { type: Number, required: true },
      },
    ],
    orderTotal: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    billing: {
      type: String,
      enum: ["cod", "paypal", "vnpay"],
      default: "cod",
    },
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "shipping",
        "shipped successfully",
        "final",
        "rejected",
        "finalcomplaint",
        "pendingcomplaint",
        "acceptcomplaint",
        "refundcomplaint",
        "cancelcomplaint",
      ],
      default: "pending",
    },

    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
  { collection: "order" }
);

orderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Order", orderSchema);
