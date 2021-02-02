const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer,network, accounts) {
  deployer.deploy(ERC20,"Omnia", "OMNIA", 18).then(async (instance)=>{
    await instance.mint(accounts[0], 100);
      console.log("100 tokens minted to account zero");
  });
};
