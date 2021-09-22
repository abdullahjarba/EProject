const express = require("express");

const app = express();

const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");
const bodyParser = require("body-parser");

const db = require("./util/database");
console.log("test1");
const options = {
  host: "35.221.157.63",
  database: "mydb",
  user: "root",
  password: "Yasser29",
  port: "3306",
};

const sessionStore = new MySQLStore(options, db);

app.use(
  session({
    secret: "My Secret",
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const authRoutes = require("./Routes/auth");
const shopRoutes = require("./Routes/shop");
const adminRoutes = require("./Routes/admin");

app.use(authRoutes);

app.use(shopRoutes);

app.use(adminRoutes);

app.listen(8080, () => {
  console.log("server is running");
});

db.execute("SELECT * FROM users")
  .then((result) => {
    console.log(result[0]);
    console.log("done");
  })
  .catch((err) => {
    console.log("err");
  });
