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

### Wallet Security & Entropy

- [Predictable RNG Fallback and 32-Bit Reseed in COLDCARD Firmware](https://engineering.block.xyz/blog/predictable-rng-fallback-and-32-bit-reseed-in-coldcard-firmware) - Block Engineering explains how a disabled hardware-RNG path and a 32-bit reseed can constrain entropy in affected COLDCARD firmware and weaken generated secrets.
- [When random.bytes() runs but doesn't work](https://insider.btcpp.dev/cp/209395473) - Dusty Daemon digs into what a commit message reveals about the recent COLDCARD bug and how code can appear to generate entropy while still failing as a secure randomness source.

### Cryptography & AI

- [Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) - Anthropic says Claude Mythos Preview found an improved attack on the post-quantum HAWK signature scheme and a faster attack on a reduced-round version of AES, showing frontier models starting to contribute to real cryptanalysis.

### Lightning Swap Infrastructure

- [Boltz stays disabled while keeping refund paths open](https://x.com/Boltzhq/status/2084311537502630319?s=20) - Boltz says the service will remain disabled until further notice, though cooperative and unilateral refunds should still work and support remains available.
- [ZEUS follows suit for its Boltz-backed instance](https://x.com/ZeusLN/status/2084316041673347138?s=20) - ZEUS says its instance is following Boltz offline, while noting other ZEUS services like channels, the LSP, Lightning addresses, and normal send/receive flows remain online.

### Merchant Infrastructure & Self-Custody

- [BTCPay Server warns of actively exploited critical vulnerability](https://x.com/BtcpayServer/status/2085755643659522240?s=20) - BTCPay Server says an in-the-wild bug can lead to loss of funds and is telling operators to update to version 2.4.2 immediately or shut instances down until they can patch.

### Trust, Custody & State Abuse

- [FBI agent accused of stealing nearly $1 million in cryptocurrency](https://www.cnn.com/2026/08/03/politics/fbi-agent-accused-stealing-cryptocurrency) - Court records say an FBI agent diverted more than $900,000 from monitored crypto accounts, a sharp reminder that custody, chain surveillance, and state handling of seized funds create their own trust failures.
