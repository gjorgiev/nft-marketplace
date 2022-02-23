const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Market = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await Market.deploy();
  await nftMarket.deployed();
  console.log("NFTMarket deployed to:", nftMarket.address);

  // NFT deploy
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
