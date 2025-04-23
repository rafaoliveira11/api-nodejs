import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ BY ID
router.get("/:id", async (req, res) => {
  const user = await User.findOne({ id: req.params.id });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );
  if (!updatedUser) return res.status(404).json({ error: "User not found" });
  res.json(updatedUser);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const deletedUser = await User.findOneAndDelete({ id: req.params.id });
  if (!deletedUser) return res.status(404).json({ error: "User not found" });
  res.json({ message: "User deleted" });
});

export default router;
