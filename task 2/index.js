const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const router = express.Router();
const { postRegister, postLogin } = require("./controller/controller");
const { postTodos, getTodos, putTodos, deleteTodos } = require("./controller/todoController");
const authenticateToken = require("./middleware/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

const port = process.env.PORT || 5000 ;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));


//register
router.get("/register", (req, res) => {
  res.render("signup");
});

router.post("/register", postRegister);

//login
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", postLogin);

//todolist

router.get("/todos", getTodos);
router.post("/todos", postTodos);
router.put('/todos/:id', putTodos);
router.delete('/todos/:id', deleteTodos);

app.use("/api",router)











