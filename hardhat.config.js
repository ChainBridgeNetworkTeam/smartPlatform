/*
 * @Author: dianluyuanli-wp
 * @LastEditors: dianluyuanli-wp
 * @Date: 2021-10-30 16:25:23
 * @LastEditTime: 2021-11-12 06:44:22
 */
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//  13561077
module.exports = {
  // solidity: "0.8.4",
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.7.5",
      },
    ],
    overrides: {
      "contracts/mintWETH.sol": {
        version: "0.8.0",
        settings: { }
      },
      "contracts/swap.sol": {
        version: "0.7.6",
        settings: { }
      },
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/UgF1_hb4hMA7tdMceAsy-sGCM9EzegeS",
        blockNumber: 13561077
      }
    }
  }
};
