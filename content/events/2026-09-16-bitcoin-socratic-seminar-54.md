---
date: '2026-09-16'
title: 'Bitcoin Socratic Seminar #54'
type: Doc
---

![Bitcoin Socratic Seminar #54](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044444/">Bitcoin Socratic Seminar #54</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Wednesday, September 16, we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

### Bitcoin

- [Bitcoin Core mining templates enforce the Murch-Zawy rule (BIP54)](https://github.com/bitcoin/bitcoin/pull/35949) - A merged change makes mining templates respect BIP54's timestamp floor at the end of a difficulty period, addressing a clock-skew edge case that could otherwise prevent a node from building a valid template, especially on test networks with volatile hashrates.
- [Post-quantum output types: migration incentives and tradeoffs](https://delvingbitcoin.org/t/pqc-output-type-discussion/2749/6) - Starting with Pieter Wuille's August 17 post, the discussion weighs a simpler P2TRv2 migration path against bundling cross-input signature aggregation (CISA) for fee savings. Replies debate P2MR, wallet adoption and key management, when to disable elliptic-curve spending, and how larger post-quantum witnesses affect resource limits and decentralization.

### Lightning

- [LND adds BOLT12 Merkle trees and BIP-340 message signatures](https://github.com/lightningnetwork/lnd/pull/11061) - LND merged Merkle tree construction and Schnorr signing and verification for BOLT12 invoice requests and invoices, rejecting invalid signatures when reading messages and checking the implementation against upstream test vectors.
- [Disclosure: crashing CLN with a flood of pings](https://delvingbitcoin.org/t/disclosure-crashing-cln-with-a-flood-of-pings/2846) - Erick Cestari discloses a denial-of-service bug where a peer could exhaust Core Lightning's memory by triggering replies without reading them, even without a funded channel. Fixed in v25.09 in September 2025 and publicly disclosed in August 2026, it highlights a gap in outgoing-message backpressure.

### Privacy

- [Silent payments light clients: measurements and index commitments](https://groups.google.com/g/bitcoindev/c/qqDYHnnoM7k?pli=1) - Rob Segers shares mainnet measurements comparing filter-based scanning with BlindBit Oracle v2, quantifying bandwidth and storage tradeoffs. He also proposes per-block index commitments to help detect omitted tweaks, while noting that these do not eliminate the need to trust or cross-check servers.
- [Silent Payments coinbase](https://delvingbitcoin.org/t/silent-payments-coinbase/2833) - A proposal adapts silent payments for mining-pool payouts directly in coinbase transactions over Stratum v2. It would require wallet scanning changes and could reduce address reuse, while pool accounting records and payout amounts remain privacy concerns.
- [Babilonia: probabilistic coinjoin and covert betting](https://delvingbitcoin.org/t/babilonia-probabilistic-coinjoin-and-covert-betting/2704/2) - AdamISZ explores using private, fair bets inside payment-like transactions to improve privacy. This follow-up compares Babilonia with a more general betting construction and sketches how randomized transfers could weaken amount correlation in coinswaps.

### AI

- [Between Us: everyday stories about Bitcoin and AI](https://www.betweenusstories.com/) - Between Us collects firsthand accounts of how Bitcoin and AI affect people's lives. Maintainer Mo is looking for nontechnical people to share how they use these tools.
