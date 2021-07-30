const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let token1Address, token2Address;
  if(network === 'mainnet'){
    token1Addres = ' ';
    token2Addres = ' ';
  } else {
    
  }
  await factory.createPair();
};
