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

#### Testnet 5

- [Testnet 5 is live](https://groups.google.com/g/bitcoindev/c/DmFiHeo-xRw) - The replacement for testnet4 launched on November 14, as specified in [BIP 95](https://github.com/bitcoin/bips/blob/master/bip-0095.md) by Pol Espinasa and Fabian Jahr, now marked Deployed. It drops the 20-minute minimum-difficulty exception whose abuse caused testnet4's block storms, raises the minimum difficulty about six orders of magnitude so you need an ASIC to mine, and enforces BIP 54 Consensus Cleanup from block 1, so miners can check their software follows the new rules. For a fair launch, Anthony Towns [ran a public ckpool](https://gist.github.com/ajtowns/ebb148819c6028387271e6f0dce5e1da) to mine the genesis block, whose message commits to mainnet block 975744 to rule out a pre-mine. Network magic is `FIVE`, and the P2P port is 18353. You can watch it on [rbitcoin.space](https://rbitcoin.space/testnet5/). Will testnet5's coins stay worthless, now that every miner needs an ASIC?

#### Mining

- [Stratum V2 reaches the big pools](https://x.com/TheBlueMatt/status/2122321920192548963) - A big week for Sv2, as Matt Corallo laid out: Foundry announced it is [testing Sv2](https://www.tokenpost.com/news/technology/56991), MARA Pool [mined its first Sv2 block](https://x.com/MARAFoundation_/status/2120520367500308580) on November 11, and Luxor announced Sv2 support. All three are pool-work mode: the pool still picks the transactions, and miners do not yet send their own templates through Job Declaration, as [DMND and GoMining did in June](https://www.tftc.io/stratum-v2-job-declaration-first-block-dmnd-gomining). Even so, pool-work Sv2 is the step before Job Declaration, it shows the industry is finally moving, and its encrypted, authenticated connections are a big security upgrade for all of Bitcoin. What will get the big pools to accept miner-built templates?
- [P2Poolv2 beta on Testnet 5](https://rbitcoin.space/testnet5/mining/pool/p2poolv2) - The [P2Poolv2](https://github.com/p2poolv2/p2poolv2) beta is working well on Testnet 5 and has mined about 29% of the blocks rbitcoin.space has seen there so far, second only to unidentified miners. Of this week's mining news it is the only immediate decentralization win: no pool operator picks the transactions, and miners are paid straight from the coinbase. Share trading for small miners is still being written, and there is no mainnet date yet.

### AI

- [Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude/fable) - Anthropic released both on November 9. Fable 5.2 is generally available on paid plans, the API, and the major clouds. Anthropic reports 49.1% on FrontierCode 2.0, up from 32.4% for Fable 5.1 and ahead of Opus 5.5's 45.5%, with output up to 30% faster. Mythos 5.2 is limited to vetted organizations in Anthropic's Life Sciences and Cyber Verification Programs. [Announcement](https://x.com/claudeai/status/2119867114450268322), [CNBC](https://www.cnbc.com/2026/11/09/anthropic-claude-fable-5-2-mythos-5-2.html).
- [GPT-6.2 Astra and GPT-6.2 Sol](https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531) - OpenAI answered on November 17. Astra is the frontier model for hard projects, and Sol the cheaper everyday model, both in ChatGPT and Codex and in the API as `gpt-6.2-astra` and `gpt-6.2-sol`. OpenAI claims Astra beats Fable 5.2 on Agents' Last Exam at a fraction of the cost per task, and that it is the first model OpenAI has released at its "High" threshold for AI self-improvement, shipped with tighter cybersecurity safeguards. [Announcement](https://x.com/OpenAI/status/2122750126297161811), [SiliconANGLE](https://siliconangle.com/2026/11/17/openai-rolls-out-gpt-6-2-astra-for-professional-work-and-gpt-6-2-sol-for-everyday-work/). Two frontier releases in eight days: which are people here using for Bitcoin work, and which would you trust to write consensus code like rbitcoin?
