import Matic from "@maticnetwork/maticjs";

const maticPOSClient = new Matic.MaticPOSClient({
  parentProvider: new HDWalletProvider(
    PRIVATE_KEY,
    "https://goerli.infura.io/v3/75aa7935112647bc8cc49d20beafa189"
  ),
  maticProvider: new HDWalletProvider(
    PRIVATE_KEY,
    "https://rpc-mumbai.matic.today"
  ),
  posRootChainManager: "0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74",
});