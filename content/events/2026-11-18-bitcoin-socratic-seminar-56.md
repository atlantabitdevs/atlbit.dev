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

- [rbitcoin](https://github.com/rbitcoin-org/rbitcoin) - A Bitcoin full node in Rust for server-side use, AI-written (Grok) under Brandon Black's prompting. It keeps no UTXO set: blocks live in a relational archive, consensus and script are pure Rust with no `libbitcoinconsensus`, and the tx index, address index, Electrum and Esplora REST run in the same process, so there is no separate electrs or Fulcrum. Its consensus rules have been checked against Hornet's written rules and Rob Hamilton's btc-lean description. It ships as static musl binaries and a container image. Would you run an AI-written consensus node, and what review would it take to trust one?

#### rbitcoin.space

- [rbitcoin.space](https://rbitcoin.space/) - A block explorer that runs beside a stock rbitcoin node: one Rust server, a Solid frontend, and an Esplora-compatible API for mainnet, signet, testnet4 and Testnet 5. Because the node already keeps the tx index, address index, cluster mempool and per-transaction fees, there is no second indexer, no second mempool and no database server, just SQLite for the little the node does not store. It shows the live mempool and projected blocks, mining pools, the Lightning graph through a gossip-only LDK peer that holds no funds, Ark VTXOs, and silent payments addresses, and has a read-only MCP server for agents. It also speaks mempool.space's WebSocket protocol, so mempool.space's own frontend can run on top. Also on Tor. [Code](https://github.com/smolcars/rbitcoin-space). How much of an explorer stack can the node itself absorb?

#### Testnet 5

- [Testnet 5 is live](https://groups.google.com/g/bitcoindev/c/DmFiHeo-xRw) - The replacement for testnet4 launched on November 14, as specified in [BIP 95](https://github.com/bitcoin/bips/blob/master/bip-0095.md) by Pol Espinasa and Fabian Jahr, now marked Deployed. It drops the 20-minute minimum-difficulty exception whose abuse caused testnet4's block storms, raises the minimum difficulty about six orders of magnitude so you need an ASIC to mine, and enforces BIP 54 Consensus Cleanup from block 1, so miners can check their software follows the new rules. For a fair launch, Anthony Towns [ran a public ckpool](https://gist.github.com/ajtowns/ebb148819c6028387271e6f0dce5e1da) to mine the genesis block, whose message commits to mainnet block 975744 to rule out a pre-mine. Network magic is `FIVE`, and the P2P port is 18353. You can watch it on [rbitcoin.space](https://rbitcoin.space/testnet5/). Will testnet5's coins stay worthless, now that every miner needs an ASIC?

#### Signature Aggregation

- [BIPs 458, 459 and 460: cross-input signature aggregation](https://x.com/murchandamus/status/2118354588034347117) - Three drafts published together, announced by BIP editor Murch on November 5. [BIP 458](https://github.com/bitcoin/bips/blob/master/bip-0458.mediawiki) (Tim Ruffing, Jonas Nick, Fabian Jahr) specifies half-aggregation, which anyone can do without the signers' help and which shrinks n signatures from 64n bytes to 32n + 32. [BIP 459](https://github.com/bitcoin/bips/blob/master/bip-0459.mediawiki) (Jahr) specifies DahLIAS full aggregation, a two-round interactive protocol that produces one 64-byte signature however many signers take part. [BIP 460](https://github.com/bitcoin/bips/blob/master/bip-0460.mediawiki) (Jahr) is the soft fork that would use both, through a new witness v2 output type limited to Taproot-style key path spends. Inputs can opt out, which protects adaptor signature protocols that need a specific signature to appear on chain. BIP 459 estimates that full aggregation would have cut the average historical transaction's size by 20.5% and its weight by 7.3%, and a 150-input consolidation's weight by 27.4%. Activation parameters are undecided, the witness version may change, and the [Bitcoin Core implementation](https://github.com/fjahr/bitcoin/tree/bip460) is a work in progress. Coins would have to move to v2 outputs to benefit: are cheaper CoinJoins and consolidations enough to justify a soft fork?

#### Mining

- [Stratum V2 reaches the big pools](https://x.com/TheBlueMatt/status/2122321920192548963) - A big week for Sv2, as Matt Corallo laid out: Foundry announced it is [testing Sv2](https://www.tokenpost.com/news/technology/56991), MARA Pool [mined its first Sv2 block](https://x.com/MARAFoundation_/status/2120520367500308580) on November 11, and Luxor announced Sv2 support. All three are pool-work mode: the pool still picks the transactions, and miners do not yet send their own templates through Job Declaration, as [DMND and GoMining did in June](https://www.tftc.io/stratum-v2-job-declaration-first-block-dmnd-gomining). Even so, pool-work Sv2 is the step before Job Declaration, it shows the industry is finally moving, and its encrypted, authenticated connections are a big security upgrade for all of Bitcoin. What will get the big pools to accept miner-built templates?
- [P2Poolv2 beta on Testnet 5](https://rbitcoin.space/testnet5/mining/pool/p2poolv2) - The [P2Poolv2](https://github.com/p2poolv2/p2poolv2) beta is working well on Testnet 5 and has mined about 29% of the blocks rbitcoin.space has seen there so far, second only to unidentified miners. Of this week's mining news it is the only immediate decentralization win: no pool operator picks the transactions, and miners are paid straight from the coinbase. Share trading for small miners is still being written, and there is no mainnet date yet.

#### Grants

- [OpenSats: 21 grants for Bitcoin software, hardware, and education](https://opensats.org/blog/21-grants-supporting-bitcoin-software-hardware-and-education) - Eight new grants and 13 renewals from the General Fund, announced November 17. On mining: bit-aloo on the Stratum V2 Reference Implementation (cleaning up the protocol libraries and adding deterministic simulation testing as Sv2 reaches the big pools) and a renewal for Braidpool, a peer-to-peer mining pool. On other node implementations: Libbitcoin v4 gets a built-in block explorer and admin dashboard, and Floresta's grants are renewed. Also: a Tor Project team hunting malicious relays, the Code Orange Dev School privacy developer track, Dana's silent payments wallet, Cashu-TS and Cashu.me, bdk-cli, and renewals for rust-bitcoin, Krux, Fully Noded, and others. With Libbitcoin, Floresta and rbitcoin all in active development, how many full node implementations can Bitcoin support?

### Lightning

- [lnd v0.21.8-beta](https://github.com/lightningnetwork/lnd/releases/tag/v0.21.8-beta) - The November 11 release (with v0.20.8 for the older line) names no vulnerability, but its [release notes](https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.21.8.md) are a long list of correctness fixes in places where funds are at stake: forwarded HTLCs recovered correctly across reconnects, settled AMP HTLCs recovered during on-chain resolution, peer channel aliases already assigned to another channel now rejected, a restart that could silently drop acknowledged channel updates, a peer deadlock, and force-close transactions that hit replacement-fee rejections. v0.21.7 is the same build under a corrected tag.
- [lnd v0.21.6-beta: CVE-2026-98432](https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.21.6.md) - The named vulnerability is two releases back, and it is not in lnd. [CVE-2026-98432](https://nvd.nist.gov/vuln/detail/CVE-2026-98432) is a Linux kernel bug whose [demonstrated remote exploit](https://www.openwall.com/lists/oss-security/2026/10/30/1) needs a Multipath TCP listener. Go 1.24+ turns MPTCP on by default, so lnd 0.21.x exposed one on its peer, gRPC and REST ports. The October 30 release stops opening MPTCP listeners. Linux operators should upgrade, disable MPTCP on the host (`sysctl -w net.mptcp.enabled=0`), and install a patched kernel, since the kernel bug is not specific to MPTCP. What else on your node's host listens with defaults you never chose?

### Ark

- [Noah: an Ark wallet rewritten native](https://github.com/smolcars/noah) - Noah, a trust-minimized Ark wallet built on Bark, was rewritten from React Native into native Swift (SwiftUI) and Kotlin (Jetpack Compose) with a full redesign. Claude Opus 5.5 did the rewrite in five days: [one pull request](https://github.com/smolcars/noah/pull/374) of about 333,000 added lines across 1,562 files ([announcement](https://x.com/nitesh_btc/status/2114547704424743292)). On a Pixel 6, cold start went from 4.3s to 1.4s, memory from 262 MB to 128 MB, and the APK from 105 MB to 61 MB, though scroll jank rose from 0.13% to 1.2% and is being fixed. On an iPhone 17, cold start went from 1.42s to 0.85s and memory from 105 MB to 30 MB. Still in beta. If an agent can rewrite an app natively in a week, is there still a case for cross-platform frameworks in Bitcoin wallets?
- [Bark 0.8.1: presigned emergency exits](https://x.com/secondhq/status/2120890608374120543) - Second's November 5 [release](https://gitlab.com/ark-bitcoin/bark/-/releases/bark-0.8.1) lets a wallet [sign its whole emergency exit ahead of time](https://gitlab.com/ark-bitcoin/bark/-/merge_requests/2293), including a CPFP child for every exit transaction, for as long as its confirmed on-chain funds last. The result is a wave-by-wave broadcast plan that cold storage or a third party can execute later, with the wallet offline. Barkd can also list every unconfirmed exit transaction in broadcast order, so a service can broadcast them and pay the fees for a user who holds no on-chain bitcoin. Also new: a `bark-cli` thin client that drives Barkd over REST. [Changelog](https://second.tech/docs/changelog).
- [A watchtower for Ark](https://x.com/notgrubles/status/2121743384461164676) - Grubles of Second built the first use of those presigned exits: a tower for wallets that stay offline until their VTXOs are about to expire. If the wallet's own refresh never happens, the tower runs its own Bitcoin node, watches the expiry, and broadcasts the presigned exit early enough to confirm. It holds no keys and can only move the coins on-chain to their owner. In a signet test, an offline wallet's coins [reached the chain](https://mempool.space/signet/tx/c968d4c45f2ff05784984f2618fcaab9cc8d44357f7bd9b503ece123a5bedc7e) 142 blocks before expiry. The design is early, and a public signet tower is planned. The fee rate is fixed when you sign: what happens if fees spike just as many VTXOs near expiry?
- [Wavelength is live on mainnet](https://lightning.engineering/posts/2026-10-23-wavelength-mainnet-launch/) - Lightning Labs' payments toolkit for apps and agents launched on mainnet on October 23, built on what it calls an "Ark-like settlement layer." It is self-custodial, needs no node or channels, and agents can drive the wallet over MCP, pay L402 APIs, and hold receive-only credentials. It is still an alpha, capped at 300,000 sats per account and 50,000 sats per VTXO, with a 0.25% service fee on Lightning sends and receives. Funds need a free renewal about every two weeks, and a wallet that misses it recovers its funds by working with the server when it comes back online. How does that compare with Bark's approach of exiting on-chain before expiry, and which trade-off would you want an agent's wallet to make?

### AI

- [Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude/fable) - Anthropic released both on November 9. Fable 5.2 is generally available on paid plans, the API, and the major clouds. Anthropic reports 49.1% on FrontierCode 2.0, up from 32.4% for Fable 5.1 and ahead of Opus 5.5's 45.5%, with output up to 30% faster. Mythos 5.2 is limited to vetted organizations in Anthropic's Life Sciences and Cyber Verification Programs. [Announcement](https://x.com/claudeai/status/2119867114450268322), [CNBC](https://www.cnbc.com/2026/11/09/anthropic-claude-fable-5-2-mythos-5-2.html).
- [GPT-6.2 Astra and GPT-6.2 Sol](https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531) - OpenAI answered on November 17. Astra is the frontier model for hard projects, and Sol the cheaper everyday model, both in ChatGPT and Codex and in the API as `gpt-6.2-astra` and `gpt-6.2-sol`. OpenAI claims Astra beats Fable 5.2 on Agents' Last Exam at a fraction of the cost per task, and that it is the first model OpenAI has released at its "High" threshold for AI self-improvement, shipped with tighter cybersecurity safeguards. [Announcement](https://x.com/OpenAI/status/2122750126297161811), [SiliconANGLE](https://siliconangle.com/2026/11/17/openai-rolls-out-gpt-6-2-astra-for-professional-work-and-gpt-6-2-sol-for-everyday-work/). Two frontier releases in eight days: which are people here using for Bitcoin work, and which would you trust to write consensus code like rbitcoin?
- [Claude Code: Code Mode](https://code.claude.com/docs/en/code-mode) - An experimental Claude Code mode, off by default: instead of calling tools one at a time and reading every result, Claude writes a short JavaScript program that makes the tool calls, runs them in parallel, passes one result into the next, and hands back only what it needs. Every call inside the program still goes through the normal permission prompts and hooks, and a program stops after ten minutes (two hours in the background). The docs suggest it for the same change across many files, searches that need filtering, and independent commands that can run at once. Turn it on with `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` in the terminal (v2.1.323 or later). Is "the agent writes a script" safer or riskier than "the agent calls tools," when the permission check sees the calls but auto mode only reviews the script?
- [Bend 2: a language that blocks AI mistakes with proofs](https://bend-lang.com) - Victor Taelin's Bend 2, released in September, is built for code that agents write and humans never read. You write the rules that must always hold in `LAWS.bend`, the agent writes proofs in `PROOF.bend`, and the type checker, a proof checker in the style of Lean or Rocq, refuses a change that breaks a law. It is fast enough, a second at most, for an agent to run after every edit. It has Python-like syntax, compiles to native code near C speed on one core, and spreads recursive work across every CPU core or the GPU with no threads or locks. Setup is a few lines in `AGENTS.md`. Bend 1 programs do not load. [Code](https://github.com/bendlang/bend). Could Bitcoin's consensus rules be written as laws that an AI-built node like rbitcoin has to prove it follows?
- [Numes: end-to-end encrypted inference, payable in sats](https://x.com/callebtc/status/2121244678351687944) - [Numes](https://numes.ai) is an open marketplace for AI inference with an OpenAI-compatible API, and on November 13 it added [encrypted models](https://numes.ai/docs/inference/encrypted). Users can [pay in sats](https://numes.ai/docs/account/bitcoin) over Lightning or on-chain, and providers can [withdraw their earnings in bitcoin](https://numes.ai/docs/providers/earnings). The guarantee depends on the route. Tinfoil's attested enclaves encrypt the whole request and stop if verification fails, while Venice encrypts message text to a key Venice publishes, and Numes's docs call that weaker. Either way, Numes still sees the model, account, token counts, and timing, and its web chat encrypts using JavaScript that Numes serves. What would you need to verify before believing "not even we can read it"?

### Just for Fun

- [Voyager 1 is one light-day from Earth](https://www.cnn.com/2026/11/18/science/voyager-1-light-day) - At 5:16:07 a.m. Eastern this morning, Voyager 1 became the first human-made object to reach one light-day from Earth, 49 years after its 1977 launch. It is still in contact, but a radio signal now takes a full day each way, so a command and its reply are a two-day round trip. [NASA's page](https://science.nasa.gov/resource/voyager-one-light-day-downloads/), [NPR](https://www.npr.org/2026/11/17/nx-s1-6043115/nasas-voyager-1-spacecraft-reaches-a-distance-of-1-light-day-from-earth). A node on Voyager would hear about each block 144 blocks late: could it ever use Bitcoin?
