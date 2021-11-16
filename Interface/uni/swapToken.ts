/*
 * @Author: dianluyuanli-wp
 * @LastEditors: dianluyuanli-wp
 * @Date: 2021-11-14 06:49:26
 * @LastEditTime: 2021-11-14 06:51:16
 */

import { Router, Route } from "@uniswap/sdk";
import { ethers } from "ethers";
const output = require('../artifacts/contracts/swap.sol/SwapExamples.json');

//19
const privateKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';
// 19 address
const add19 = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';

//18 add
const add18 = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';

const WETHAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const WETH_ABI = ['function withdraw(uint wad) public', 'function approve(address guy, uint wad) public returns (bool)'];

const swapadd = '0xb2AA9bf762878462382A34eB4EC1f041E0071081';
async function main() {
    let provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
    let wallet = new ethers.Wallet(privateKey, provider);

    //  在调用合约前，必须approve这个toke,允许向合约庄户进行转账
    const wethContract = new ethers.Contract(WETHAddress, WETH_ABI, wallet);
    let res3 = await wethContract.approve(swapadd, ethers.utils.parseEther('0.1'));
    console.log(res3);

    const Contract = new ethers.Contract(swapadd, output.abi, wallet);
    console.log(ethers.utils.parseEther('0.1').toBigInt());
    let res2 = await Contract.swapExactInputSingle(10000000000);
    console.log(res2);
}

main();