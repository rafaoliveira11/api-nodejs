import express from "express";
import FunctionModel from "../models/functionModel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const func = new FunctionModel(req.body);
    await func.save();
    res.status(201).json(func);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const functions = await FunctionModel.find();
    res.json(functions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ BY EMAIL
router.get("/email/:email", async (req, res) => {
  try {
    const func = await FunctionModel.findOne({ email: req.params.email });
    if (!func) return res.status(404).json({ error: "Function not found" });
    res.json(func);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ BY ID
router.get("/:id", async (req, res) => {
  try {
    const func = await FunctionModel.findById(req.params.id);
    if (!func) return res.status(404).json({ error: "Function not found" });
    res.json(func);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedFunc = await FunctionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFunc) return res.status(404).json({ error: "Function not found" });
    res.json(updatedFunc);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedFunc = await FunctionModel.findByIdAndDelete(req.params.id);
    if (!deletedFunc) return res.status(404).json({ error: "Function not found" });
    res.json({ message: "Function deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;