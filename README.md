# nft-microservice
- Add .env file. Set PRIVATE_KEY to your private key.
- Contract is deplyed on sepolia network


## Endpoints:
- /:address?cid={cid} - get tokenID and address minted to : Used to create a new NFT
- /token/:address - Get balance of NFT tokens for that address : Used to fetch whether a particular address has a token or not
- /tokenURI/:tokenID - Get tokenURI for that tokenID : Used to fetch the tokenURI for a particular tokenID