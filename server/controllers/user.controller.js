import { User } from "../models/user.model.js";
import { CustomError } from "../utils/customError.js";
import { generateHash } from "../utils/passwordUtils.js";
import { comparePasswords } from "../utils/passwordUtils.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already register !" });
    }
    const hashedPassword = await generateHash(password);

    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      address,
    });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({ message: "Please register to login  !" });
    }
    const validPassword = await comparePasswords(
      password,
      existingUser.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect username/password !" });
    }
    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const { password: pass, ...rest } = existingUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Login successfully !", token, rest });
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {}
  res.status(500).json({ message: "Internal server error !" });
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
    throw CustomError("Internal server error !", 500);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const id = req.id;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address } = req.body;
    const updateduser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          email,
          address,
        },
      },
      { new: true }
    );
    if (!updateduser) {
      return res.status(404).json({ message: "User not found !" });
    }
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(500).json({ message: "Internal server error !" });
  }
};
