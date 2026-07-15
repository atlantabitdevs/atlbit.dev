---
date: '2026-07-15'
title: 'Bitcoin Socratic Seminar #52'
type: Doc
---

![Bitcoin Socratic Seminar #52](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044449/">Bitcoin Socratic Seminar #52</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics for Tomorrow Night

Tomorrow night we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

A lot of this month's conversation is about where control sits in Bitcoin systems. Miners are starting to reclaim transaction selection with Stratum V2. Wallets are pushing more payment logic and backup responsibility back to the edge. Lightning products keep getting easier to use without getting less weird. At the same time, the surrounding infrastructure still looks fragile: AI is changing how apps get built, GitHub remains a chokepoint for open source, and even quantum policy is drifting from abstract concern toward state-level agenda.

### Bitcoin

- [secp256k1 repo finds a new maintainer in @theStack](https://x.com/fanquake/status/2076766713404625291?s=20) - More stewardship depth for one of Bitcoin's most critical libraries, with a maintainer who helped push silent payments over the line.
- [BIP 448 tooling and proof-of-concept repos centralized](https://github.com/bip448) - Antoine Poinsot is gathering code artifacts and tooling experiments around BIP 448 into one place for review and contribution.
- [Fountain codes as a way to reduce blockchain storage costs](https://delvingbitcoin.org/t/fountain-codes-a-way-to-reduce-blockchain-storage-costs/2624/11) - An exploration of whether erasure-coding ideas could change the cost profile of storing and serving blockchain data.
- [First Stratum V2 block mined with miner-selected transactions](https://x.com/TheBlueMatt/status/2070133045773103376?s=20) - A milestone for open, standardized block template selection at the mining layer.
- [Sparrow Wallet 2.5.0 adds silent payment receives](https://github.com/sparrowwallet/sparrow/releases/tag/2.5.0) - Silent payments keep spreading from protocol discussion into real wallet UX.

#### Quantum

- [BIP360: depth-zero script trees should be anyone-can-spend](https://github.com/bitcoin/bips/pull/2198) - A BIP 360 change that belongs with the rest of the quantum and migration-design discussion.
- [Public-key recovery for EC leaves in P2MR / BIP 360](https://delvingbitcoin.org/t/public-key-recovery-for-ec-leaves-in-p2mr-bip-360/2603) - More concrete design work around how P2MR could handle elliptic-curve leaves and recovery paths.
- [Benchmarking SLH-DSA STARK aggregation](https://groups.google.com/g/bitcoindev/c/0IdqdnlC4Og) - Performance-oriented post-quantum research that pushes the discussion past hand-waving and into concrete costs.
- [Aligning privacy incentives in P2MR](https://groups.google.com/g/bitcoindev/c/p8AVEmAtWdA) - Focuses on whether the incentive structure around P2MR actually produces the privacy behavior people want.
- [Giving teeth to expected EC disabling: P2XX(-T)(-ML)](https://groups.google.com/g/bitcoindev/c/aWYtPLVPZ3U) - Another attempt to think through how Bitcoin might enforce a real migration path away from exposed EC assumptions.

#### BIP110

- [BIP-110 advances to Complete status](https://github.com/bitcoin/bips/pull/2201) - Standards-process housekeeping, but still useful context if the room wants to talk about how BIPs mature and close out.
- [Does a soft fork always succeed?](https://bitcoin.stackexchange.com/questions/130775/does-a-softfork-always-succeed) - Good prompt for a room-level conversation about activation, adoption, and what "success" even means for consensus changes.

### Lightning

#### ARK

- [Experimental mainnet payments coming for Bark's client-side payment pathfinding flow](https://x.com/notgrubles/status/2076689793455390909?s=20) - Second is moving toward real mainnet testing for a model where routes are computed on-device and handed to a gateway as a blinded onion.
- [Ark payment flow test: "Ark is real and you can get your money back"](https://x.com/nitesh_btc/status/2077191315444445470?s=20) - A small but useful real-world signal that Ark UX is crossing from demo energy into actual user testing.
- [Using LDK VSS to back up Bark wallet state to a remote machine](https://x.com/notgrubles/status/2071605007439245663?s=20) - Useful crossover between Lightning and Ark-style wallets, where offchain state needs continuous backup.

#### LDK

- [Async payments for mobile Lightning receives](https://x.com/lightningdevkit/status/2070513005465342300?s=20) - LDK is tackling the long-standing problem of mobile apps needing to be online at exactly the right moment to receive a payment.
- [Open-source Bitcoin project permanently banned from GitHub with no clear appeal path](https://x.com/TheBlueMatt/status/2068726534941364593?s=20) - Not obvious from the headline, but this one hit Lightning Dev Kit and shows how exposed key OSS infrastructure still is to GitHub failures.
- [LDK re-adds `Nonce` to `payer_metadata`](https://github.com/lightningdevkit/rust-lightning/pull/4685) - A small but important interoperability detail in the payment metadata flow.
- [LDK rejects RGS snapshots that leave the graph absurdly sized](https://github.com/lightningdevkit/rust-lightning/pull/4713) - Defensive graph-sync handling for route data that could otherwise bloat clients.
- [Payer proof merged in LDK and acknowledged on the BOLTs PR](https://x.com/PalazzoVincenzo/status/2074435981260845414?s=20) - Another piece of proof-carrying payment infrastructure lands after a long review cycle.

#### LND

- [LND zero-timestamp gossip DoS disclosure](https://delvingbitcoin.org/t/lnd-zero-timestamp-gossip-dos-disclosure/2621) - A fresh Lightning security disclosure focused on gossip handling edge cases in LND.
- [LND adds codec foundation for BOLT12 Offer messages](https://github.com/lightningnetwork/lnd/pull/10789) - Early plumbing for deeper BOLT12 support in LND.
- [LND adds `InvoiceRequest` codec and structural validators](https://github.com/lightningnetwork/lnd/issues/10832) - More BOLT12 building blocks landing in LND, this time around invoice request parsing and validation.

#### Other

- [Superscalar: an implementation report](https://delvingbitcoin.org/t/superscalar-an-implementation-report/2705) - Concrete implementation notes on a post-quantum direction, which is usually where the abstract design tradeoffs get real.
- [Tether Wallet 1.4 adds Lightning send/receive, BOLT11, and LNURL support](https://x.com/tetherwallet/status/2067543440112443815?s=20) - Another wallet shipping broader Lightning interoperability.

### AI

- [Bitcoin-native LLM dataset architecture and open questions](https://delvingbitcoin.org/t/a-bitcoin-native-llm-dataset-architecture-and-open-questions/2550/4) - A practical look at building Bitcoin-specific AI datasets without losing source traceability or domain context.
- [Spiral rebrands and expands around Goose](https://spiralxyz.substack.com/p/spiral-x-goose-the-best-is-yet-to) - The Spiral ecosystem is broadening its scope and product surface.
- [Software pays software: an MDK-powered autonomous merch store](https://x.com/moneydevkit/status/2074484566828425466?s=20) - A fun agentic payments demo where an AI-run storefront automatically pays for fulfillment after each sale.
- [Block App Kit: shipping AI-built apps safely](https://engineering.block.xyz/blog/from-localhost-to-launched-safely-shipping-apps-that-anyone-can-build) - Jed Edwards on the hard part after code generation: safely getting fast-built software into other people's hands.

### Business

- [Polymarket adds instant Bitcoin deposits over Lightning via Spark](https://x.com/spark/status/2074539080197775421?s=20) - A mainstream prediction market now has a faster and more private Bitcoin deposit rail.
- [Strike weekly feature rollup: Plaid, Washington lending, faster loan payoff](https://x.com/Strike/status/2069143813986058707?s=20) - A snapshot of how consumer Bitcoin finance products are evolving week by week.

### Apps

- [BTCPay Server v2.4.0](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.0) - Merchant tooling keeps shipping, with another substantial release from one of the biggest Bitcoin payments stacks.
- [gitpassport: get paid in bitcoin to run CI/CD jobs on your machine](https://gitpassport.xyz/npub1wg2m9ku823y5l5699dlj6294dc3cvwu4g34ldrtelxq20t27clxsd7dzaw) - Turns self-hosted runners into paid Bitcoin infrastructure.
- [Radar combines private messaging with self-custodial Lightning on Signal's network](https://x.com/RadarChat/status/2074523998596055061?s=20) - Messaging and Bitcoin keep converging, this time in a product that leans on Signal's network effects.
- [Sonar privacy social discovery](https://sonarprivacy.xyz/) - A lightweight privacy/social tool worth a look, after getting passed around on Bitcoin X.

### Fun

- [Bitcoiners getting distracted by AI](https://x.com/darosior/status/2074587659792535701?s=20) - Antoine Poinsot posted the meme version of a trend a lot of people in the room will recognize.
- [White House executive order to accelerate US quantum technology](https://x.com/mkratsios47/status/2069163462844961196?s=20) - US government joins quantum hype bandwagon.
