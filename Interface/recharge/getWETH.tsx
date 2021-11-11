/*
 * @Author: dianluyuanli-wp
 * @LastEditors: dianluyuanli-wp
 * @Date: 2021-10-30 17:49:15
 * @LastEditTime: 2021-11-12 06:40:58
 */
import { ethers } from "ethers";

//19
const privateKey = '0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e';

const WETHAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

const WETH_ABI = ['function withdraw(uint wad) public'];

async function main() {
    const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');

    let wallet = new ethers.Wallet(privateKey, provider);
    
    //  charge
    let res = await wallet.sendTransaction({ to: WETHAddress, value: ethers.utils.parseEther('1.0')})
    console.log(res);


    //  withdraw
    const Contract = new ethers.Contract(WETHAddress, WETH_ABI, provider);
    Contract.connect(wallet);
    let res2 = await Contract.withdraw(ethers.utils.parseEther('0.1'));
    console.log(res2);
}

main();