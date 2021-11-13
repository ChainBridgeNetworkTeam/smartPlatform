/*
 * @Author: dianluyuanli-wp
 * @LastEditors: dianluyuanli-wp
 * @Date: 2021-10-30 17:49:15
 * @LastEditTime: 2021-11-13 21:24:31
 */
import { ethers } from "ethers";
import { sec } from '../../otherBox/ss';

const WETHAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

const WETH_ABI = ['function withdraw(uint wad) public', 'function approve(address guy, uint wad) public returns (bool)'];

async function main() {
    //  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');

    //  network for goerli
    let provider = ethers.getDefaultProvider('goerli');

    let wallet = new ethers.Wallet(sec.georli, provider);
    
    //  charge
    let res = await wallet.sendTransaction({ to: WETHAddress, value: ethers.utils.parseEther('1.0')})
    console.log(res);


    //  withdraw
    // const Contract = new ethers.Contract(WETHAddress, WETH_ABI, provider);
    // Contract.connect(wallet);
    // let res2 = await Contract.withdraw(ethers.utils.parseEther('0.1'));
    // console.log(res2);
}

main();