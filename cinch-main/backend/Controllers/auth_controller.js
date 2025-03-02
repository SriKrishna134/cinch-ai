const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config({ path: "./.env" });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

const JWT_SECRET = process.env.JWT_SECRET;

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Helper to fetch user by email
const fetchUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return { data, error };
};

const register = async (req, res) => {
  try {
    console.log("Register request received");
    const { name, email, password, phoneNum, profilePic } = req.body;

    if (!name || !email || !password || !phoneNum) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const { data: existingUser } = await fetchUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Use profilePic or default image if not provided
    const imageUrl = profilePic || `https://via.placeholder.com/150`;

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          phone_num: phoneNum,
          profile_pic: imageUrl, // Store null or a default URL here
        },
      ])
      .select('*');

    if (error) throw error;

    const userId = data[0].id;
    const token = jwt.sign({ id: userId }, JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    console.log("Login request received");

    const { email, password, otp } = req.body;

    // Now you can log the variables after they have been destructured
    if (!email || (!password && !otp)) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const { data: user, error } = await fetchUserByEmail(email);
    if (error || !user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    if (otp) {
      if (user.otp !== otp) {
        return res.status(400).json({ error: "Invalid OTP" });
      }
      await supabase
        .from("users")
        .update({ otp: null })
        .eq("id", user.id);
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNum: user.phone_num,
        profilePic: user.profile_pic,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};


const sendOtp = async (req, res) => {
  try {
    console.log("Send OTP request received");
    const { email } = req.body;

    const { data: user, error } = await fetchUserByEmail(email);
    if (error || !user) {
      return res.status(400).json({ error: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    const { error: updateError } = await supabase
      .from("users")
      .update({ otp })
      .eq("id", user.id);

    if (updateError) throw updateError;

    setTimeout(async () => {
      await supabase.from("users").update({ otp: null }).eq("id", user.id);
    }, 300000); // Clear OTP after 5 minutes

    const mailDetails = {
      from: process.env.EMAIL,
      to: email,
      subject: "Login with your OTP",
      html: `
        <h1>Conversa - Online Chatting App</h1>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>Use this OTP to login.</p>
      `,
    };

    mailTransporter.sendMail(mailDetails, (err) => {
      if (err) {
        console.error("Email error:", err.message);
        return res.status(500).json({ message: "Error sending OTP" });
      }
      res.status(200).json({ message: "OTP sent successfully" });
    });
  } catch (error) {
    console.error("Send OTP error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { register, login, sendOtp };
