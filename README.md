# nft-microservice
- Add .env file. Set PRIVATE_KEY to your private key.
- Contract is deplyed on sepolia network


## Endpoints:
- /:address?cid={cid} - get tokenID and address minted to : Used to create a new NFT
    - Ex : http://localhost:3000/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8?cid=bjhwkjwjbwbdhwhvhywhvwfbjhw
- /token/:address - Get list of tokenIDs minted to that address : Used to fetch all the tokenIDs minted to a particular address
    - Ex : http://localhost:3000/token/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8
- /tokenURI/:tokenID - Get tokenURI for that tokenID : Used to fetch the tokenURI for a particular tokenID
    - Ex : http://localhost:3000/tokenURI/1
- /balance/:tokenID - Get balance of that tokenID : Used to fetch the balance of a particular tokenID
    - Ex : http://localhost:3000/balance/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8