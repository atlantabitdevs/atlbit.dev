---
date: '2026-08-19'
title: 'Bitcoin Socratic Seminar #53'
type: Doc
---

![Bitcoin Socratic Seminar #53](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044445/">Bitcoin Socratic Seminar #53</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Wednesday, August 19, we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

### Address

684 John Wesley Dobbs Ave NE,
Suite A1
Atlanta, GA 30312

### Parking

Please follow the parking instructions here: <a href="https://atlbitlab.com/parking-at-atl-bitlab" target="_blank">Parking Information</a>

### Chatham House Rule

We follow the <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">Chatham House Rule</a> at this event. You're welcome to share what you learn, but not who said it.

To help everyone speak freely, please do not take videos, pictures, or audio recordings during the seminar.

## Topics

We'll add more topics as the event gets closer. For now, here's the first one:

### Bitcoin

#### COLDCARD Vulnerability

- [Predictable RNG Fallback and 32-Bit Reseed in COLDCARD Firmware](https://engineering.block.xyz/blog/predictable-rng-fallback-and-32-bit-reseed-in-coldcard-firmware) - Block Engineering explains how a disabled hardware-RNG path and a 32-bit reseed can constrain entropy in affected COLDCARD firmware and weaken generated secrets.
- [When random.bytes() runs but doesn't work](https://insider.btcpp.dev/cp/209395473) - Dusty Daemon digs into what a commit message reveals about the recent COLDCARD bug and how code can appear to generate entropy while still failing as a secure randomness source.
- [MARA makes Slipstream permissionless](https://x.com/MARAFoundation_/status/2084176346402730479?s=20) - MARA says Slipstream is now a permissionless public good with no client code requirement, which is worth discussing as an alternate transaction relay path and its tradeoffs for fee management and mempool policy.

#### Threshold Signatures & Wallet Coordination

- [Spiral spotlights BIP-445 FROST signing work](https://x.com/spiral_xyz/status/2087966401013088365?s=20) - Spiral says Sivaram is driving BIP-445 toward a polished v1.0, advancing configurable threshold signatures for bitcoin so keys can be split across multiple participants and only sign once enough parties coordinate.

#### Governance, Process & Rough Consensus

- [Motion to remove Luke Dashjr from BIP Editors](https://groups.google.com/g/bitcoindev/c/knbv3MFwlvU/m/MCiJxxijCAAJ) - The bitcoindev thread argues Luke should be removed as a BIP editor after the BIP-110 fight, raising conflict-of-interest, process, and coordination questions inside Bitcoin's standards process.
- [Checkmate thread on why the proposed fork failed to reach rough consensus](https://x.com/_Checkmatey_/status/2087368296979157368) - Checkmate frames the failed fork push as a social-consensus loss rather than a rules or referee problem, which makes it a useful prompt on how rough consensus is actually enforced in Bitcoin.

### Lightning

#### Lightning Swap Infrastructure

- [Boltz stays disabled while keeping refund paths open](https://x.com/Boltzhq/status/2084311537502630319?s=20) - Boltz says the service will remain disabled until further notice, though cooperative and unilateral refunds should still work and support remains available.
- [ZEUS follows suit for its Boltz-backed instance](https://x.com/ZeusLN/status/2084316041673347138?s=20) - ZEUS says its instance is following Boltz offline, while noting other ZEUS services like channels, the LSP, Lightning addresses, and normal send/receive flows remain online.
- [Blockstream announces atomic swaps across Bitcoin, Liquid, and Lightning](https://x.com/Blockstream/status/2086906995450507315?s=20) - Blockstream says its new swaps product lets users hold BTC or LBTC and pay Lightning invoices without managing channels or inbound liquidity, adding a new entrant in the post-Boltz swap landscape.

### AI

- [Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) - Anthropic says Claude Mythos Preview found an improved attack on the post-quantum HAWK signature scheme and a faster attack on a reduced-round version of AES, showing frontier models starting to contribute to real cryptanalysis.
- [Bitcoin Policy Institute urges trusted frontier-model access for open-source defenders](https://x.com/bitcoinpolicy/status/2086872430639771675?s=20) - Bitcoin Policy Institute says it is joining a broader coalition urging leading AI labs to give qualified open-source defenders trusted access to frontier models, raising questions about who gets advanced capabilities for security research and defense.

### Business

#### Trust, Custody & State Abuse

- [FBI agent accused of stealing nearly $1 million in cryptocurrency](https://www.cnn.com/2026/08/03/politics/fbi-agent-accused-stealing-cryptocurrency) - Court records say an FBI agent diverted more than $900,000 from monitored crypto accounts, a sharp reminder that custody, chain surveillance, and state handling of seized funds create their own trust failures.
- [Trezor discloses shipping-provider customer data breach](https://x.com/Trezor/status/2087885428313543059?s=20) - Trezor says a breached shipping vendor exposed recent customer order data in several countries, a reminder that self-custody privacy can fail through logistics and supply-chain partners even when the wallet itself is secure.

### Apps

#### Merchant Infrastructure & Self-Custody

- [BTCPay Server warns of actively exploited critical vulnerability](https://x.com/BtcpayServer/status/2085755643659522240?s=20) - BTCPay Server says an in-the-wild bug can lead to loss of funds and is telling operators to update to version 2.4.2 immediately or shut instances down until they can patch.
- [BTCPay Server funds researchers and recovery bounty after the exploit](https://x.com/BtcpayServer/status/2086875600103367109?s=20) - BTCPay Server says it is donating to the researchers behind the recent critical vulnerability disclosure and helping fund a bounty to recover stolen funds, offering a concrete example of how open-source projects respond after a major incident.
- [BTCPay Server ships v2.4.3-rc4 security update](https://x.com/BtcpayServer/status/2087959120515101035?s=20) - BTCPay Server says v2.4.3-rc4 addresses vulnerabilities reported by the Bitcoin Red Team, Project Loupe, MAGIC Grants, Prem, and independent researchers after several days of review and testing.

#### Ecash & Developer Tooling

- [Spiral highlights Cashu Dev Kit roadmap](https://x.com/spiral_xyz/status/2087909385729110428?s=20) - Spiral says a new grantee is helping build CDK, a Rust SDK for Cashu wallets and mints, with onchain support via BDK, payjoin via PDK, and unified balances via LDK on the roadmap.

### Fun

Still collecting a proper palate cleanser for this month.
