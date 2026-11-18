---
date: '2026-11-18'
title: 'Bitcoin Socratic Seminar #56'
type: Doc
---

![Bitcoin Socratic Seminar #56](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/317194305/">Bitcoin Socratic Seminar #56</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Wednesday, November 18, we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

#### rbitcoin

- [rbitcoin](https://github.com/rbitcoin-org/rbitcoin) - A Bitcoin full node in Rust for server-side use, AI-written (Grok) under Brandon Black's prompting. It keeps no UTXO set: blocks live in a relational archive, consensus and script are pure Rust with no `libbitcoinconsensus`, and the tx index, address index, Electrum and Esplora REST run in the same process, so no separate electrs or Fulcrum. Ships as static musl binaries and a container image. Would you run an AI-written consensus node, and what review would it take to trust one?
- [rbitcoin v0.9.0](https://github.com/rbitcoin-org/rbitcoin/releases/tag/v0.9.0) - The consensus rules were checked against Hornet's written rules and Rob Hamilton's btc-lean description, and Matt Corallo attempted to prove the compiled code matches Bitcoin. Mainnet now skips historical script checks up to block 966143, the same assumevalid block as Bitcoin Core 32.1 (`--milestone 0` checks everything). Also: Core-compatible `sendrawtransaction` errors so LND can publish again, batched Electrum and Esplora history lookups, and randomized v2 transport padding like Core.
- [rbitcoin v0.9.2](https://github.com/rbitcoin-org/rbitcoin/releases/tag/v0.9.2) - A consensus-relevant fix: IBD could connect a block that re-spent an output already spent lower in the same write, and a store that did needs a re-sync. Also fixes `submitblock` caching a valid block as invalid when a sibling connected mid-check, and decodes BIP-352 silent payment addresses on subscribe. What does a bug like this say about building an alternative implementation?

#### rbitcoin.space

- [rbitcoin.space](https://rbitcoin.space/) - A block explorer that runs beside a stock rbitcoin node: one Rust server, a Solid frontend, and an Esplora-compatible API for mainnet, signet, testnet4 and Testnet 5. Because the node already keeps the tx index, address index, cluster mempool and per-transaction fees, there is no second indexer, no second mempool and no database server, just SQLite for the little the node does not store. Lightning comes from a gossip-only LDK peer that holds no funds. Also on Tor. [Code](https://github.com/smolcars/rbitcoin-space).
- [rbitcoin.space v0.1.0 to v0.3.0](https://github.com/smolcars/rbitcoin-space/releases/tag/v0.3.0) - Three releases in a week: projected blocks built from the node's own mining chunks, block audits, mining pools including P2Poolv2, Lightning node and channel pages with fee history and a penalties page, silent payments address pages, Bark and Arkade VTXO pages checked against the chain, a broadcast page that decodes a transaction before sending it, and a read-only [MCP server](https://github.com/smolcars/rbitcoin-space/blob/master/docs/MCP.md) so agents can look things up. It also speaks mempool.space's WebSocket protocol, so mempool.space's own frontend can run on top of it. How much of an explorer stack can the node itself absorb?
