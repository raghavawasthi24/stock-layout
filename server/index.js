const express = require("express");
const PORT = 5000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let data = [
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
  {
    orderId: "#281209 ",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
];

//app.use(`/${process.env.VERSION}`, require("./routes/index"));

app.get("/", (req, res) => {
  res.status(200).json({
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is live at PORT: ${PORT}`);
});
