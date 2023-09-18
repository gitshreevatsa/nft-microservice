const express = require("express");
const app = express();
const { contract, provider } = require("./utils/contracts");
const cors = require("cors");
const CryptoJS = require("crypto-js");
const jsonwebtoken = require("jsonwebtoken");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:address", async (req, res) => {
  console.log(req.params, req.query);
  const { address } = req.params;
  const cid = req.query.cid;

  //   let tokenDetails = {};
  const response = await contract.safeMint(address, cid);
  const tx = await response.wait();

  const { hash } = tx;
  // console.log(hash);
  const txn = await provider.getTransactionReceipt(hash);
  // console.log(txn);
  txn.logs.forEach((log) => {
    if (contract.interface.parseLog(log).name === "minted") {
      // console.log(contract.interface.parseLog(log).args);
      const tokenDetails = contract.interface.parseLog(log).args;
      const tokenId = jsonwebtoken.sign(tokenDetails[0].toString(), process.env.SECRET);
      const address = tokenDetails[1];

      res.send({ tokenId, address });
    }
  });
});

app.get("/token/:address", async (req, res) => {
  const { address } = req.params;
  const response = await contract.balanceOf(address);
  console.log(response);
  res.send(response.toString());
});

app.get("/tokenURI/:tokenId", async (req, res) => {
  const { tokenId } = req.params;
  try {
    const tokenIdDecrypted = jsonwebtoken.verify(tokenId, process.env.SECRET);
    const response = await contract.tokenURI(tokenIdDecrypted);
    console.log(response);
    res.send(response);
  } catch {
    res.send("Token not found");
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
