//https://docs.moralis.io/moralis-server/getting-started/connect-the-sdk 
//Click on the link above to learn how to connect the SDK to your application.

/* Moralis init code */
const Moralis  = require('moralis/node');
const serverUrl = "https://rhvtflpneiup.usemoralis.com:2053/server";
const appId = "7yZXEQuclbciYIRb4LM4wTucPKo494aw7UjxXPBg";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("btn-login").onclick = login;
  document.getElementById("btn-logout").onclick = logOut;

//   To get all nfts from an address : put address in the address field.
//   function getAllNFTs() {
//     const options = { chain: 'Eth', address: '0x...' };
//     const EthNFTs = await Moralis.Web3API.account.getNFTs(options);
//    console.log(EthNFTs);