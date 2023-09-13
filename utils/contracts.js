const {ethers} = require("ethers");
const abi = require("../abi/abi.json");
require("dotenv").config();


const address = "0x0B621Ea5C38b2cf0F6B5C9c15b81713734428681";

const provider = new ethers.JsonRpcProvider(
  "https://rpc.ankr.com/eth_sepolia"
);

const signer = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    provider
)

const contract = new ethers.Contract(address, abi, signer);

module.exports = { contract, provider };