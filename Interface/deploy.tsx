/*
 * @Author: dianluyuanli-wp
 * @LastEditors: dianluyuanli-wp
 * @Date: 2021-10-30 17:49:15
 * @LastEditTime: 2021-11-12 08:46:08
 */
import { ethers } from "ethers";
const fs = require('fs');

//19
const privateKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';

//  hartTest goerli address
const hAddredd = '0x1251129cfe52B685A6038fD3C50EbaC75Ce44c20';

//  mainnet private key
const mainPriviteKey = '';

const geoliPrivateKey = '0xf97df4c7d3412bd607cb31e659bd30f557b85792bb128bde797341c8e3ecec7a';

async function main() {
    const data = fs.readFileSync(process.argv[2], 'utf-8');
    const jsonData = JSON.parse(data);

    console.log('argument1: artifacts path \narg2: net type');
    console.log(`arg1: ${process.argv[2]}, arg2:${process.argv[3]}`)
    let provider, wallet;

    const deployType = process.argv[3];
    if (deployType === '-p') {
        //  正式环境
        provider = ethers.getDefaultProvider();
        wallet = new ethers.Wallet(mainPriviteKey, provider);
    } else if (deployType == '-g') {
        //  goerli环境
        provider = ethers.getDefaultProvider('goerli');
        wallet = new ethers.Wallet(geoliPrivateKey, provider);
    } else {
        //  测试环境
        provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
        wallet = new ethers.Wallet(privateKey, provider);
    }

    //  合约部署
    let factory = new ethers.ContractFactory(jsonData.abi, jsonData.bytecode, wallet);
    console.log('begin deploy!')
    //  input swaprouter address
    let contract = await factory.deploy('0xE592427A0AEce92De3Edee1F18E0157C05861564');
    console.log(contract.address, 'address');
    console.log(contract.deployTransaction.hash);

    await contract.deployed();
    console.log('finish!');
}

main();