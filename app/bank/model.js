const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama pemilik Harus di isi"],
    },
    bankName: {
      type: String,
      required: [true, "Nama bank Harus di isi"],
    },
    noRekening: {
      type: String,
      required: [true, "Nama rekeneing bank Harus di isi"],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
