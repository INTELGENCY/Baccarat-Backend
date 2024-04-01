const express = require("express");
const walletRoutes = require("./routes/walletRoutes");
const WalletBalance = require("./routes/walletBalanceRoute");
const TransactionRoutes = require("./routes/transectionRoutes");
const TransactionHistoryRoutes = require("./routes/TransectionHistory/index");
const GamePoint = require("./routes/CoinsConversionRoutes/index");
const WithDraw = require("./routes/withdrawRequest/index");
const GameTable = require("./routes/gameTableRoutes/index");
const Gamer = require("./routes/gamerRoutes/index");
const Invstor = require("./routes/InvestorRoutes");
const PNL = require("./routes/pnlRoutes");
const Referal = require("./routes/referalRoutes");

const swaggerMiddleware = require("./middlewares/swaggerMiddleware");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const db = require("./db/connection");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Use Swagger middleware
app.use(function (req, res, next) {
  console.log(`${req.method}: ${req.originalUrl}`);
  next();
});

swaggerMiddleware(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/wallet", walletRoutes);
app.use("/balance", WalletBalance);
app.use("/transactions", TransactionRoutes);
app.use("/transactionsHistory", TransactionHistoryRoutes);
app.use("/GameCoin", GamePoint);
app.use("/withdraw", WithDraw);
app.use("/game-table", GameTable);
app.use("/gamer", Gamer);
app.use("/investor", Invstor);
app.use("/PNL", PNL);
app.use("/referal", Referal);



// game build
app.use("/", express.static(path.join(__dirname, "public")));
// render game build

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


// admin panel
app.use("/adminpanel", express.static(path.join(__dirname, "AdminPortal/out")));

// render admin panel
app.use("/adminpanel", (req, res) => {
  res.sendFile(path.join(__dirname, "AdminPortal/out/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
