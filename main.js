const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f8a016f6cc66194add2f8b779aa585f4416495d252de68b78411ab3a2d4d0795');

const myWalletAddress = myKey.getPublic('hex');

const k2 = new Blockchain();

k2.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
k2.addTransaction(tx1);

k2.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
k2.addTransaction(tx2);

k2.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${k2.getBalanceOfAddress(myWalletAddress)}`);

console.log();
console.log('Blockchain valid?', k2.isChainValid() ? 'Yes' : 'No');