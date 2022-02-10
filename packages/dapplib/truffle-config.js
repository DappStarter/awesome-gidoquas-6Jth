require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note oval clutch hunt merry flame trap'; 
let testAccounts = [
"0x137bf4f340c3e6fc279fb08ae1ddaa7b30298ad52f586512b17534b808cca534",
"0x546fc7481538bf489e5666a48e5363e3b5dffd1b8bad9e3321f67fe957375f23",
"0x1eae2c31e5429da32c386d5e1e2fa5eef3beb555f0a051377c7d49d3f7f72726",
"0x31553e7babc9d1f29189afbc2d67be5004035e3a90ca9ea30b1a6fa0df08540d",
"0xe5aaa32e14c05172cc5cf023841f3a2c0a0c7b611ae7bda7b5a6345bd9f2ccb3",
"0x258908ce06d5102be11027f5766bc7959b69ca4a77c6156f4dfdd722bfe6edfb",
"0x40d21782e910e51bd13d84c6d1414302bcb080f6966a5483cefb93fc1ad25083",
"0xa7d5ba9d6f0959918ca12eaccf893354439fd34da99cecd5a632dd8ba82b8dd3",
"0x947eb4d289d1c841a453f8630662285bd7019299e4bed47ccbf4860b80676403",
"0xb3415a31282ebc86d8d97f7b0687fbbe7f0be5f83544e29cb96fa1bf34ad0bfa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


