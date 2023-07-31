const { ethers } = require('hardhat');

async function main() {
  await ethers.getContractFactory('Election');
  const [deployer] = await ethers.getSigners();
  console.log('Deploying the Election:', deployer.address);
  const candidateNames = ['can1', 'can2', 'can3'];

  const Election = await ethers.getContractFactory('Election');
  const election = await Election.deploy(candidateNames);
  await election.deployed();
  console.log('deployed to:', election.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
