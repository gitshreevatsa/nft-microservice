const express = require("express");
const app = express();
const { contract, provider } = require("./utils/contracts");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:address", async (req, res) => {
  const { address } = req.params;
  const cid = req.query.cid;

  //   let tokenDetails = {};
  const response = await contract.safeMint(address, cid);
  const tx = await response.wait();

  const { hash } = tx;
  console.log(hash);
  const txn = await provider.getTransactionReceipt(hash);
  console.log(txn);
  txn.logs.forEach((log) => {
    if (contract.interface.parseLog(log).name === "minted") {
      console.log(contract.interface.parseLog(log).args);
      const tokenDetails = contract.interface.parseLog(log).args;
      const tokenId = tokenDetails[0].toString();
      const address = tokenDetails[1];
      res.send({ tokenId, address });
    }
  });
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
