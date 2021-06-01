const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20,"Omnia", "OMNIA", 18).then(instance => {
    instance.mint(accounts[0], 100).then(() => {
      instance.balanceOf(accounts[0]).then(balance => {
        console.log(`The address ${accounts[0]} has ${balance} tokens`);
      }).catch(err => console.log(`*Address Error* ${err}`));
    }).catch(err => console.log(`*Balance Error* ${err}`)); 
      
  });
};
