# PIT Phase 1 repo project: Deposit and Bridge Token cross chain

This repository is created to enter the PIT phase 1 challenge # 5. [quest](https://github.com/polymerdevs/Quest-Into-The-Polyverse-Phase-1/issues/5)

## Team Members

- @anhhtvip - Lead Developer
- @leiz95 - Developer

## Description

Story: As a user, I require the capability to exchange ETH across various networks.

Solution: The user chooses both the source and destination chains, initiating a fund transfer to the destination chain. We employ Polymer IBC to notify the target chain. Consequently, the user receives ETH on the target chain.

Features:

- Uses Polymer x IBC as the cross-chain format
- Allow users to deposit funds and convert tokens across different chains.

## Resources used

Additional resources used:
- Hardhat
- Blockscout
- Tenderly

Technologies used:

- Nuxt 3
- Bootstrap 5
- Web3Modal v2
- Wagmi / use-wagmi
- Viem

## Steps to reproduce and deployment

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.\
## Deployment Smart Contract

This DAPP is using the contract here. [polymer-bridge-chain](https://github.com/anhhtvip/polymer-bridge-contract/tree/main). 

By following the step by step.

## Run All Task

```bash
just do-bridge
```
## Manually: 
### Steps

#### Set Bridge Contract

```bash
just set-contracts optimism Bridge false && just set-contracts base Bridge false
```

#### Deploy Contracts

```bash
just deploy optimism base
```

#### Sanity check to verify that configuration files match with your deployed contracts

```bash
just sanity-check
```

#### Create Channel

```bash
just create-channel
```

#### Send package

```bash
just deposit
just bridge
```


## Proof of testnet interaction

After following the steps above you should have interacted with the testnet. You can check this at the [IBC Explorer](https://sepolia.polymer.zone/packets).

Here's the data of our application:

- XBridge (Base Sepolia) : 0x88f2a340aE9D26E799b17bFA658c1B935be58433
- XBridge (OP Sepolia): 0x16b4583C34e7D5332c1FDAe4DCCF65Bb232dc691
- Channel (OP Sepolia): channel-40124
- Channel (Base Sepolia): channel-40125

- Proof of Deposit:

    - [SendTx](https://base-sepolia.blockscout.com/tx/0x19d5be71f66336d265e158d5dd6766b5bd5a7cfc557cc35bb41c30824ef8529c)
    - [RecvTx](https://optimism-sepolia.blockscout.com/tx/0x52d400a9fda6f97d9901ccfb5e5d9828730edf544d0569c52b99ad8b944aca7c)
    - [Ack](https://base-sepolia.blockscout.com/tx/0xf584bb8e07f0b62f4d1d7315b826f40784a2aea10951d46979a68fdfb337e9f5)

- Proof of Bridge:
    - [SendTx](https://optimism-sepolia.blockscout.com/tx/0x9a11c31ee3fd0ce7a659571fb447f53d19f9b82b333a27a47ee920642e76c496)
    - [RecvTx](https://base-sepolia.blockscout.com/tx/0x67716ea85626f05408912acd82ca97d5e6dc4779111f9a20bd9c71ecf1b80046)
    - [Ack](https://optimism-sepolia.blockscout.com/tx/0x9016774c41109290205763ef9473d3a410f503f128fcdfbaa43d2c6cf7c9e66d)



## Challenges Faced

This is a first app that we are trying to use the polymers and facing a lot issue during the deployment contract. But in the end, all the things are worknig smoothly.

## What we learned

How to make the first dApp using Polymer.

## Future improvements

Basic functionality was implemented, but the following things can be improved:

- More tests
- More input validation
- Add event listeners related to important IBC lifecycle steps
- More improvement for user view.
- Display the current balance in the vault on both OP and Base networks.
- Display the user's balance on both OP and Base networks (optional).
- Check if the funds in the vault are insufficient, then do not allow bridging.
- Check if the funds are insufficient, then do not allow depositing/bridging.
- Show transaction details after depositing/bridging.
- Disable button and add loading while processing the transaction.


## Licence

MIT
