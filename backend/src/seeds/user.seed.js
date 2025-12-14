import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "lguang@example.com",
    fullName: "Lu guang",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "nobuonobu@example.com",
    fullName: "Nobu",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/nobu_hpmjmv.jpg"
  },
  {
    email: "yanwushi@example.com",
    fullName: "Yan Wushi",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/yw_bjofcu.jpg",
  },
  {
    email: "meatbun@example.com",
    fullName: "Meatbun",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/mb_c7r3tk.jpg",
  },
  {
    email: "xielian@example.com",
    fullName: "Xie Lian",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871936/xl_jf2rrm.jpg",
  },
  {
    email: "kafka@example.com",
    fullName: "Kafka",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871936/kafka_axpceh.jpg",
  },
  {
    email: "brahmand@example.com",
    fullName: "Brahmand",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/universe_d1rnmk.jpg",
  },
  {
    email: "maiasaura@example.com",
    fullName: "Maiasaura",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/maiasaura_gjyvqd.jpg",
  },
  {
    email: "shark@example.com",
    fullName: "Shark",
    password: "123456",
    profilePic: "https://res.cloudinary.com/dnpwoxc4e/image/upload/v1764871926/shakr_o8c6em.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();