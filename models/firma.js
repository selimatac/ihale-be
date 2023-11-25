const mongoose = require("mongoose");

const FirmaSchema = new mongoose.Schema(
  {
    firmaAdi: {
      type: String,
      default: "",
      required: [true, "firmaAdi Zorunlu alan."],
    },
    teklifi: {
      type: Number,
      required: [true, "teklifi Zorunlu alan."],
    },
    teminatTutari: {
      type: Number,
      required: [true, "teminatTutari Zorunlu alan."],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Firma", FirmaSchema);
