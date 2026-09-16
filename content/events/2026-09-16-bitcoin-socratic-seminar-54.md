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

- [Liquid's reserve exploit and recovery](https://t.me/liquid/97) - On September 6, an Elements range-proof verification-cache vulnerability allowed roughly 4,000 unbacked L-BTC to be created and redeemed through SideSwap for BTC without compromising private keys. About 3,400 BTC was returned; a [September 11 recovery update](https://www.theblock.co/news/ecosystems/2026-09-11-return-the-bitcoin-blockstream-refuses-ransom-demand-for-remaining-600-btc-from-liquid-exploit-414247) reported 598.5 BTC still outstanding and peg-outs disabled. [Blockstream's statement](https://x.com/Blockstream/status/2098281867908690394) rejects ransom payments and pledges to pursue recovery, raising questions about shared validation failures, developer responsibility, and the boundaries of responsible disclosure.
- [BIP-110 fallout: BLAKE2b fork and OCEAN leadership change](https://github.com/decentralizedb/bip110-observer/blob/main/README.md) - Following the August 8 chain split, the minority branch switched its proof of work to BLAKE2b on August 30. An [August 29 joint statement](https://www.prnewswire.com/news-releases/joint-statement-of-ocean-and-luke-dashjr-302864347.html) announced Luke Dashjr's departure from OCEAN and the repurchase of his equity, citing different visions for Bitcoin mining. The developments offer a case study in miner signaling, economic consensus, and control of pool templates.
- [The future of HWI](https://github.com/bitcoin-core/HWI/issues/850) - Andrew Chow plans to finish MuSig2 support, make what will likely be HWI's final release, and enter minimal maintenance until a suitable replacement is ready. New device integrations and unrelated features are no longer accepted; [BHWI](https://github.com/wizardsardine/bhwi/) is identified as a promising successor.
- [Bitcoin Core mining templates enforce the Murch-Zawy rule (BIP54)](https://github.com/bitcoin/bitcoin/pull/35949) - A merged change makes mining templates respect BIP54's timestamp floor at the end of a difficulty period, addressing a clock-skew edge case that could otherwise prevent a node from building a valid template, especially on test networks with volatile hashrates.
- [Post-quantum output types: migration incentives and tradeoffs](https://delvingbitcoin.org/t/pqc-output-type-discussion/2749/6) - Starting with Pieter Wuille's August 17 post, the discussion weighs a simpler P2TRv2 migration path against bundling cross-input signature aggregation (CISA) for fee savings. Replies debate P2MR, wallet adoption and key management, when to disable elliptic-curve spending, and how larger post-quantum witnesses affect resource limits and decentralization.

- [BIP448 implementations and demos](https://github.com/bip448) - A central hub collects implementations and tooling for the proposed TEMPLATEHASH, CSFS, and INTERNALKEY bundle, including Miniscript/PSBT integration and LN-Symmetry work. The [Ark signet demo](https://templatehash.com/) provides a concrete way to experiment with covenant-enabled Ark using Bark.
- [covenants.diy: a visual editor for covenant scripts](https://covenants.diy/) - A browser-based editor builds Taproot outputs and steps through script execution under selectable opcode proposals, with shareable examples for vaults, congestion control, delegation, and BIP448 rebindable state.
- [The Covenants Use-Case Atlas](https://getcofund.com/research/covenants-use-case-atlas) - Jesus Najera's interactive atlas maps covenant constructions such as vaults, payment pools, Ark issuance, and LN-Symmetry, distinguishing working implementations from design sketches.

### Lightning

- [bolt12-cli: decoding and verifying BOLT12 payment data](https://github.com/vincenzopalazzo/bolt12-cli) - Vincenzo Palazzo's Rust/LDK tool decodes offers, invoices, and payer proofs into JSON, with reusable logic in a common library. It verifies payer proofs and offer/invoice/preimage triples. The README highlights an important distinction: a payer proof can establish payment to an offer's recipient without proving payment for that exact offer.
- [Lightning payments between AI systems](https://x.com/Jestopher_BTC/status/2100017648264515657) - Jesse Shrader makes a tongue-in-cheek call to regulate Lightning, arguing that its speed, privacy, and low cost could let AI systems displace card networks with machine-to-machine payments. A discussion prompt on adoption, payment authorization, and the practical liquidity and scaling constraints behind that vision.
- [Disclosure: LND forgets closed channels too early](https://delvingbitcoin.org/t/disclosure-lnd-doesnt-wait-for-enough-confirmations-when-closing-channels/2800) - Before v20.0, LND stopped monitoring collaboratively closed channels after one confirmation. A one-block reorg could let a peer publish a revoked commitment without triggering a penalty transaction, risking the entire channel balance. Fixed in February 2026 and disclosed in August, the bug highlights confirmation-depth assumptions; the reporter knows of no affected users.
- [BTCPay Server security incidents and LND integration hardening](https://blog.btcpayserver.org/btcpay-server-2-4-4/) - The September 8 security update describes bots targeting manually re-exposed LND APIs through a shared default wallet password and a restart window. Deployment changes introduce unique passwords, block unauthenticated wallet-management routes, and restrict access to the Docker host. Separately, BTCPay detected a compromise of its Plugin Builder server on September 2, with likely exposure of registered email addresses but no evidence of attempts to replace published plugins.
- [Core Lightning's embargoed security release and Docker image correction](https://github.com/ElementsProject/lightning/releases/tag/v26.06.7) - CLN released v26.06.7 security binaries on August 28, withholding source for two weeks before publishing it on September 11. Docker tags served images that reported the new version but lacked its fixes between August 28 and September 1; the release notes identify the corrected image digests. Separate from the older ping-flood disclosure below, this release highlights the tradeoff between urgent patching and independent build verification. [Blockstream's guidance](https://blog.blockstream.com/core-lightning-26-06-7/) recommended temporary `--offline` operation to preserve chain monitoring until upgrading; the release notes also describe growing AI-assisted security reports.
- [LND adds BOLT12 Merkle trees and BIP-340 message signatures](https://github.com/lightningnetwork/lnd/pull/11061) - LND merged Merkle tree construction and Schnorr signing and verification for BOLT12 invoice requests and invoices, rejecting invalid signatures when reading messages and checking the implementation against upstream test vectors.
- [Disclosure: crashing CLN with a flood of pings](https://delvingbitcoin.org/t/disclosure-crashing-cln-with-a-flood-of-pings/2846) - Erick Cestari discloses a denial-of-service bug where a peer could exhaust Core Lightning's memory by triggering replies without reading them, even without a funded channel. Fixed in v25.09 in September 2025 and publicly disclosed in August 2026, it highlights a gap in outgoing-message backpressure.

- [Equivocation bonds for Ark-backed Lightning channels](https://delvingbitcoin.org/t/improving-the-security-of-lark-oor-channels-with-equivocation-bonds/2816) - Ademan proposes slashable bonds to deter an Ark server from assigning the same preallocated VTXO to multiple just-in-time Lightning channels. The construction uses CSFS with CTV or TEMPLATEHASH; bond sizing and reliable detection remain open questions.

### Privacy

- [Payjoin as settlement infrastructure for Bark and Cashu](https://x.com/bitgould/status/2098065920224866490) - Dan Gould highlights Payjoin's role in transaction cut-through: combining dependent payments to save fees and time. [Second's announcement](https://x.com/secondhq/status/2098054721210843167) describes funding and boarding Ark from an external wallet in one transaction, with the same approach enabling deposits into Cashu mints running Bark. A discussion of Payjoin's uses beyond payment privacy.
- [Silent payments light clients: measurements and index commitments](https://groups.google.com/g/bitcoindev/c/qqDYHnnoM7k?pli=1) - Rob Segers shares mainnet measurements comparing filter-based scanning with BlindBit Oracle v2, quantifying bandwidth and storage tradeoffs. He also proposes per-block index commitments to help detect omitted tweaks, while noting that these do not eliminate the need to trust or cross-check servers.
- [Silent Payments coinbase](https://delvingbitcoin.org/t/silent-payments-coinbase/2833) - A proposal adapts silent payments for mining-pool payouts directly in coinbase transactions over Stratum v2. It would require wallet scanning changes and could reduce address reuse, while pool accounting records and payout amounts remain privacy concerns.
- [Babilonia: probabilistic coinjoin and covert betting](https://delvingbitcoin.org/t/babilonia-probabilistic-coinjoin-and-covert-betting/2704/2) - AdamISZ explores using private, fair bets inside payment-like transactions to improve privacy. This follow-up compares Babilonia with a more general betting construction and sketches how randomized transfers could weaken amount correlation in coinswaps.

### Policy and Adoption

- [CLARITY Act fails to advance in the Senate](https://apnews.com/article/e3caf262dc138147941787299e5f0a66) - The September 15 procedural vote received 49 votes in favor and 50 against, falling short of the 60 needed to advance the crypto market-structure legislation. Ethics restrictions around President Trump's crypto interests were a central sticking point. The vote stalled consideration without permanently killing the bill, leaving questions about which proposed rules matter most for Bitcoin users, developers, and businesses.
- [El Salvador's Bitcoin accumulation and Chivo privatization](https://www.imf.org/en/news/articles/2026/09/03/pr26285-el-salvador-imf-reaches-sla-on-combined-2nd-and-3rd-rev-under-eff-arrangement) - In its September 3 staff-level agreement announcement, the IMF says Bitcoin accumulation since the first review came from documented private donations without public funds. Majority ownership and operational control of Chivo transferred to a private operator, while the government retained a minority stake and customer-asset custodial responsibilities. The update raises questions about transparency and how to evaluate sovereign Bitcoin adoption beyond visible wallet balances.

### AI

- [From fly connectome to Doom and bitcoin trading](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/) - Researchers released a wiring map of the male fruit fly's central nervous system, covering over 166,000 neurons and 125 million synapses. Hobby projects add approximate dynamics and engineered interfaces: [DOOMFLY](https://github.com/nftechie/doomfly) controls a Doom arena, while [Stonkfly](https://github.com/nftechie/stonkfly) proposes BTC-USDC trades with paper trading by default and optional Coinbase execution. Their authors report no demonstrated learned survival or profitable learning. What evidence would bridge the gap between a wiring diagram and a functioning brain model?
- [Jack Dorsey: open the frontier](https://x.com/jack/status/2099649359017046048) - Dorsey argues for open models, reproducible evaluations, independent safety research, and the freedom to run and modify one's own AI tools. He opposes broad development limits negotiated by incumbent labs, while allowing narrowly justified restrictions for catastrophic risks. The essay raises questions about openness, accountability, and whether safety rules entrench existing providers.
- [Jev: structured AI decisions with RLCD](https://x.com/CompleteSkeptic/status/2099925682726002904) - Diogo Almeida introduces TypeSafe AI's Jev, trained with Reinforcement Learning for Calibrated Decisions to return typed decisions and confidence estimates. The [technical announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev) presents parallel outputs, workflow evaluations, and Doom and Wikiracing demos. Discussion points include the company's speed and cost claims, calibration, and the distinction between guaranteed output structure and correct decisions.
- [Between Us: everyday stories about Bitcoin and AI](https://www.betweenusstories.com/) - Between Us collects firsthand accounts of how Bitcoin and AI affect people's lives. Maintainer Mo is looking for nontechnical people to share how they use these tools.
