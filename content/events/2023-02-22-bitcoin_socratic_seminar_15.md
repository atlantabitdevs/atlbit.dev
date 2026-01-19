---
date: "2023-02-22"
title: "Bitcoin Socratic Seminar #15"
type: Doc
---

![](/bitcoin-socratic-seminar-15.jpg)

It’s almost time for <a href="https://www.meetup.com/atlantabitdevs/events/290912849/">Bitcoin Socratic Seminar #15</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events
are formatted to foster debate, information sharing and lively discussion.

  1. Discussion topics are provided ahead of the event
  2. The event moderator(s) leads the audience through the topics
  3. Raise your hand to grab the mic and participate in the conversation
  4. We go to a bar afterwards

## Topics List

### 💎 Ordinals

The <a href="https://github.com/casey/ord">ord</a> project has launched on mainnet, which
allows users to create "inscriptions" on bitcoin. In other words, it enables
something akin to NFTs on bitcoin.

  * On February 1, <a href="https://mempool.space/block/0000000000000000000515e202c8ae73c8155fc472422d7593af87aa74f2cf3d">a block with a very large TX</a> was mined by Luxor mining pool.
  * The large TX, <a href="https://ordinals.com/inscription/0301e0480b374b32851a9462db29dc19fe830a7f7d7a88b81612b9d42099c0aei0">when viewed through the ord explorer</a>, reveals a nearly 4MB PNG file spoofing the magical internet money wizard.
  * This transaction is the second phase of creating an ordinal inscription, the "reveal" procedure <a href="https://docs.ordinals.com/inscriptions.html">as described in the Ord handbook</a>.
  * It appears that this must have been <a href="https://twitter.com/LuxorTechTeam/status/1620921129287430144">an intentional act by Luxor</a>, as it seems approximately 0.1 - 0.2 BTC worth of fees were forsaken to include this TX in a block.
  * The bitcoin mempool <a href="https://twitter.com/murchandamus/status/1625536375352074241">has been very active in February</a>.
  * Anythony Towns <a href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-February/021396.html">proposes an alternate method where data is stored off-chain</a>

#### Questions to consider

  * How do you think this will affect mempool activity in the future?
  * How do you think this affects bitcoin's security model?

### ⛏ FediPool

  * Matt Odell <a href="https://www.discreetlog.com/fedipool/">writes an article</a> about creating a mining pool using Fedimint as an alternative to custodial mining pools
  * <a href="https://github.com/fedimint/fedimint/discussions/1504">Discussion and debate</a> continues on the Fedimint github repo

### ⚡️ Lightning async payments work continues

Much has changed since we discussed async payments last year.

  * Richard Meyers <a href="https://gist.github.com/remyers/e0d2bedb7bc87371d1bdbbb6fff2edd1">posts this graphic</a> describing a further developed idea for async payments
  * Anthony Towns <a href="https://lists.linuxfoundation.org/pipermail/lightning-dev/2023-January/003831.html">proposes using signature adapters</a> to enable proof-of-payment for async payments

### 🙈 Serverless Payjoins

Dan Gould <a href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-January/021364.html">proposes a PayJoin technique</a> that does not require a server. PayJoins are a
bitcoin privacy technique where a sender and receiver each contribute an input
to the transaction in order <a href="https://bitcoinops.org/en/topics/payjoin/">to break certain tracking heuristics</a>.

### 🟣 NIP-57 "Zaps" merged

<a href="https://github.com/nostr-protocol/nips/commit/17ffd3ee4efa33c3f6abb4304d1c4dd998efc523">NIP-57 was merged</a> on the Nostr
NIPs repo, which describes "zaps". Basically, sending lightning payments to
other Nostr users. Nostr client projects have been busy implementing NIP57
over the past few weeks.