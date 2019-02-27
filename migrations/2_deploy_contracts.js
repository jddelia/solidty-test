const TodoLit = artifacts.require("TodoLit");

module.exports = function(deployer) {
  deployer.deploy(TodoLit);
};
