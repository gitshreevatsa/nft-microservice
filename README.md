# nft-microservice
- Add .env file. Set PRIVATE_KEY to your private key.
- Contract is deplyed on sepolia network


## Endpoints:
- /:address?cid={cid} - get tokenID and address minted to : Used to create a new NFT
    - Ex : http://localhost:3000/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8?cid=bjhwkjwjbwbdhwhvhywhvwfbjhw
- /token/:address - Get balance of NFT tokens for that address : Used to fetch whether a particular address has a token or not
    - Ex : http://localhost:3000/token/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8
- /tokenURI/:tokenID - Get tokenURI for that tokenID : Used to fetch the tokenURI for a particular tokenID
    - Ex : http://localhost:3000/tokenURI/1