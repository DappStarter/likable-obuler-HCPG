require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note rural exchange hockey clog metal gauge'; 
let testAccounts = [
"0xb1c420bcdc09d96d404fad50d88b0d676bbd44ca9ee95261b2985ee6d61f65c4",
"0xd9b4bb8cc112d0a3008b49e5d78747b97938f1f39e5aa03cfd75c260ccf33cd3",
"0xa7e690e735fdf56fb6c5c764398494bad083aa58db19bb95a4f5b83a2c7f87fd",
"0xb3d74129a57f75068778fc71aafaf8824ebf12d445062047acb6da1b0c2d8988",
"0x4fbfa4ab7da7da01db9ca9c169fba0235b5e529d7d02db5a94f8c1012a2d8d8e",
"0xc8208051b04dd34433635ded259ebd3d79123bbea4563905d781b577debe703c",
"0x44b2ff3781938bf864be187c4599662f886131159828de3b7359b88c7f74a918",
"0x3b983fd6729f814a2fe38b4dbc5f00a8dc1cc3d4c0cdd6d219fe2c670feac6d4",
"0x3f00edb0bb1a0c702d602836b542b47b7fe398c2264eebf3de96c43ce20e18f8",
"0xad5af8e78d21b398e480d847935066a19e20cbac1fc9777f7686fe58c103976f"
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


