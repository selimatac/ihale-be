const router = require("express").Router();
const Firma = require("../models/firma");

router.post("/add", async (req, res) => {
  try {
    const entity = new Firma({ ...req.body });
    const data = await entity.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const entity = await Firma.find({});
    res.status(200).json(entity);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getById", async (req, res) => {
  try {
    const entity = await Firma.findOne({ _id: req.query.id });
    entity === null
      ? res.status(404).json({ error: "Firma bulunamadi" })
      : res.status(200).json(entity);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/deleteById", async (req, res) => {
  try {
    const entity = await Firma.deleteOne({ _id: req.query.id });
    if (entity.deletedCount === 1) {
      res.status(200).json({ message: "Firma başarıyla silindi." });
    } else {
      res.status(404).json({ error: "Belge bulunamadı." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/updateById", async (req, res) => {
  try {
    const entity = await Firma.updateOne(
      { _id: req.body.id },
      { $set: req.body.updatedData }
    );
    if (entity.modifiedCount === 1) {
      res
        .status(200)
        .json({ message: "Firma başarıyla güncellendi.", data: req.body.updatedData });
    } else {
      res.status(500).json({ error: "Güncelleme başarısız." });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
