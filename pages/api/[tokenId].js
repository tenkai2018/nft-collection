export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;

    const name = `Crypto Dev #${tokenId}`;
    const description = "CryptoDevs is an NFT collection for Web3 Developers";
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url = `https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/${tokenId}.svg`;
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    return res.json({
      name: name,
      description: description,
      image: image_url,
    });
  }