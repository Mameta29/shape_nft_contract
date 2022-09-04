const { ethers } = require('hardhat');

async function main() {
  const RegisterNFT = await ethers.getContractFactory('RegisterNFT');

  const registerNFT = await RegisterNFT.deploy();
  await registerNFT.deployed();
  console.log('Contract deployed to address:', registerNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
