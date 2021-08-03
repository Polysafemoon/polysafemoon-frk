const PancakeMigrator = artifacts.require("PancakeMigrator.sol");

module.exports = async function (pancake, network, addresses) {
  await deployer.deploy(PancakeMigrator, addresses[0]);
  const migrator = await pancake.deployed();

  if(network === 'mainnet'){
    token1Address = '';
    token2Address = '';
  } else {
      await deployer.deploy(Token1);
      await deployer.deploy(Token2);
      const token1 = await Token1.deployed();
      const token2 = await Token2.deployed();
      token1Address = token1.deployed();
      token2Address = token2.address();
  }
  await migrator.createPair(token1Address, token2Address);
};