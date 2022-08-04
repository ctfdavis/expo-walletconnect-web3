# A Modification of expo-walletconnect-demo

This is a modification of the [expo-walletconnect-demo](https://github.com/draftbit/expo-walletconnect-demo) project.

The original project was designed to demonstrate adding the [WalletConnect](https://docs.walletconnect.com/) protocol to an Expo app.

In addition to WalletConnect, this project demonstrates adding [Web3](https://web3js.readthedocs.io/en/1.0/web3-eth.html) support.

The additional changes include the following:

- Adding `node-libs-browser` within [metro.config.js](./metro.config.js)
- Adding `web3` as a dependency
- Adding `ignoreLogs` to [global.ts](./global.ts) to hide some warnings from using web3

# Expo WalletConnect Demo

Without ejecting, we're able to connect an Expo app to MetaMask via WalletConnect.

<img src="./Demo.gif" width="250" />

## What do these changes consist of?

- Polyfilling NodeJS libraries within [metro.config.js](./metro.config.js)
- Creating and updating [global.ts](./global.ts)

## Run this on your own
- clone repo
- yarn install
- expo start
- scan QR code
