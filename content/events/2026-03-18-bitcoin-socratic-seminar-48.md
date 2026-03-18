---
date: '2026-03-18'
title: 'Bitcoin Socratic Seminar #48'
type: Doc
---

![Bitcoin Socratic Seminar #48](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlantabitdevs/">Bitcoin Socratic Seminar #48</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

## Logistics for Tonight

Tonight we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

### Address

684 John Wesley Dobbs Ave NE,
Suite A1
Atlanta, GA 30312

### Parking

Park anywhere in the gravel lot that has a "tenants only" sign (ATL BitLab is the tenant and you are their guests). You can also park right in front of ATL BitLab's fence. Avoid the areas marked for valet use.

Look for the **orange door** behind the **fence**.

## Topics

### Bitcoin

#### Cryptography

- [DahLIAS paper accepted to Eurocrypt](https://eprint.iacr.org/) - Cross-input signature aggregation paper accepted into a mainstream cryptography conference
- [Cross-input signature aggregation paper](https://eprint.iacr.org/) - Additional attention on cross-input signature aggregation as research continues to mature
- [Blockstream Announcement](https://x.com/blksresearch/status/2031667618298605930) - Cross-input signature aggregation paper accepted into a mainstream cryptography conference
- [Partial fraction techniques for cryptography](https://x.com/kostascrypto/status/2017507147043504261) - Achieves constant-time, constant-size key-value commitments using bilinear pairing

#### Bitcoin Core

- [Implementation of draft BIP for 24bit nonce space](https://github.com/bitcoin/bitcoin/pull/34779) - PR implementing the draft BIP to expand nVersion nonce space to 24 bits
- [BDK Version 3.0.0-rc1 released](https://github.com/bitcoindevkit/bdk_wallet/releases/tag/v3.0.0-rc.1) - First release candidate for BDK v3.0.0
- [Recent OP_RETURN Output Statistics](https://delvingbitcoin.org/t/recent-op-return-output-statistics/2248) - ajtowns analyzes OP_RETURN usage since Bitcoin Core v30.0 relaxed mempool limits; only 0.44% of OP_RETURN data used the new larger sizes
- [Hornet Node v0.1 Update](https://delvingbitcoin.org/t/hornet-node-v0-1-update/2300) - A new project creating a standalone specification of Bitcoin consensus rules, separate from the reference client implementation
- [Default dbcache Increased to 1 GiB](https://github.com/bitcoin/bitcoin/issues/34692) - Default dbcache doubled on 64-bit systems with ≥4 GiB RAM
- [Libsecp256k1: Runtime SHA256 Compression API](https://github.com/bitcoin-core/secp256k1/issues/1777) - New API lets applications supply a custom SHA256 compression function at runtime, enabling hardware-accelerated hashing without recompilation

#### Security & Testing

- [The Core Issue: Keeping Bitcoin Core Secure](https://bitcoinmagazine.com/print/the-core-issue-keeping-bitcoin-core-secure) - @dergoegge examines Bitcoin Core's security disclosure policy, fuzzing infrastructure, and testing toolkit
- [Writing Fuzz Targets for Wallets: Avoiding Known Issues](https://delvingbitcoin.org/t/writing-fuzz-targets-for-wallets-avoiding-known-issues/2316) - Bruno Garcia shares performance and determinism pitfalls when fuzzing Bitcoin wallets, based on Bitcoin Core experience and conversations with BDK maintainers
- [Fuzzing Dashboard](https://dergoegge.github.io/fuzzor-dashboard/) - Dashboard tracking fuzzing progress in Bitcoin Core
- [Bitcoin++ Exploits Hackathon](https://loot.fund/hackathons/bitcoin-exploits-edition/applications) - Exploits-themed hackathon and bug bounty
  - [Minesploit](https://loot.fund/hackathons/bitcoin-exploits-edition/applications/3) - 1st place, [post](https://x.com/jayrmotta/status/2028542312297669007)
  - [Local Probe](https://loot.fund/hackathons/bitcoin-exploits-edition/applications/13) - 2nd place, [post](https://x.com/0xB10C/status/2028442307494637962), [demo](https://www.youtube.com/live/_Cj9oLXdzn8?si=ODBWk4LezqtZJjaL&t=31268)
  - [C12d - Interactive AI assistant for node analytics](https://c12d.vercel.app/) - 3rd place
  - [Alpen Fuzzing](https://loot.fund/hackathons/bitcoin-exploits-edition/applications/16) - [Bug found](https://github.com/alpenlabs/alpen/issues/1409)
  - [Stealth](https://x.com/brenorb/status/2028897371749269890)

#### Post-Quantum

- [PQ Provers for P2PKH Outputs](https://delvingbitcoin.org/t/pq-provers-for-p2pkh-outputs/2287) - Proposal for post-quantum proof schemes to protect legacy P2PKH outputs
- [Hourglass V2 Update](https://groups.google.com/g/bitcoindev/c/0E1UyyQIUA0) - Rate-limiting P2PK UTXO spending (1 BTC/block) as quantum attack mitigation, with input from Jameson Lopp
- [The Limitations of Cryptographic Agility in Bitcoin](https://groups.google.com/g/bitcoindev/c/O6l3GUvyO7A) - Pieter Wuille examines the constraints and trade-offs of adding cryptographic agility to Bitcoin's consensus rules

#### BIPs & Protocol Proposals

- [[BIP Draft] 24 nVersion Bits for General Purpose Use](https://groups.google.com/g/bitcoindev/c/fCfbi8hy-AE) - Matt Corallo proposes expanding nVersion nonce space from 16 to 24 bits, replacing BIP 320
- [Draft BIP: Output Script Descriptor Annotations](https://bitcoinops.org/en/newsletters/2026/02/27/#draft-bip-for-output-script-descriptor-annotations) - Craig Raw proposes appending key/value metadata such as wallet birthday and gap limit to descriptors via URL-like query syntax, improving silent payment scanning efficiency
  - [bitcoin-dev discussion](https://groups.google.com/g/bitcoindev/c/ozjr1lF3Rkc)
- [BIP392: Silent Payment Descriptor Format](https://github.com/bitcoin/bips/issues/2047) - New sp() descriptor published for silent payment wallets, defining how to represent silent payment keys in output script descriptors
- [Rusty Russell requests BIP numbers for two Great Script Restoration BIPs](https://groups.google.com/g/bitcoindev/c/GisTcPb8Jco/m/8znWcWwKAQAJ) - First two BIPs of the "Bitcoin Scripting Proposal BIP Quartet" (varops budget + tapscript leaf 0xc2) submitted for BIP numbers
  - [BIPs PRs](https://github.com/bitcoin/bips/pull/2118)
  - [Two additional BIPs](https://groups.google.com/g/bitcoindev/c/GisTcPb8Jco) are WIP

#### Covenants & Script Innovation

- [Binohash: Transaction Introspection Without Softforks](https://x.com/robin_linus/status/2026700104774856827) - First mined transaction demonstrating limited covenants using only existing Bitcoin script, potentially eliminating the need for a light client in BitVM bridges
  - [Delving Bitcoin discussion](https://delvingbitcoin.org/t/binohash-transaction-introspection-without-softforks/2288)
- [Duty-Free Bits: Projectivizing Garbling Schemes](https://x.com/AlpenLabs/status/2031043052735971623) - 20-45x size reduction in offchain garbling for BitVM

### Lightning

- [Lightning Network Gossip](https://github.com/jharveyb/gossip_observer) - Jonathan Harvey-Buschel is fixing Lightning gossip using minisketch
  - Inspired by ["Magical Minisketch"](https://endothermic.dev/p/magical-minisketch)
- [LND adds Onion Message Forwarding](https://github.com/lightningnetwork/lnd/pull/10089) - Allows BOLT12 communication via onion messages to be transmitted through LND peers
  - Perhaps the last Lightning implementation to support onion messages?
- [LDK: Collaborative Multipath Payments](https://github.com/lightningdevkit/rust-lightning/issues/4373) - Multiple wallets or nodes can collaboratively pay a single invoice by each sending part of a multipath payment
- [Eclair: Auto Channel Type Selection](https://github.com/ACINQ/eclair/issues/3250) - OpenChannelInterceptor auto-selects `channel_type` for LSP-initiated channels; defaults to anchor channels, simple taproot channels expected next
- [LDK: Trampoline Routing Groundwork](https://github.com/lightningdevkit/rust-lightning/issues/4304) - Refactors HTLC forwarding to support multiple incoming/outgoing HTLCs per forward, enabling trampoline nodes to act as MPP endpoints on both sides
- [LDK: Dual Funding on Splices](https://github.com/lightningdevkit/rust-lightning/issues/4416) - Acceptor can now contribute funds when both peers attempt to initiate a splice simultaneously

### Other Layer 2s

- [V-PACK](https://www.vtxopack.org/) - Stateless VTXO verification standard for the Ark ecosystem, letting users independently verify and visualize VTXO exit paths
- [Second Releases hArk-based Ark Software](https://docs.second.tech/changelog/changelog/#010-beta6) - Ark v0.1.0-beta.6 uses hash-lock Ark (hArk) to eliminate synchronous interactivity during rounds
- [Ark Labs Raises $5.2M with Tether](https://bitcoinmagazine.com/news/ark-labs-raises-5-2m-with-tether) - Seed round led by Tether to build production Ark infrastructure
- [Crest - New Privacy Tool Announced built on Citrea](https://x.com/crest_btc) - Privacy-focused protocol building on the Citrea Bitcoin rollup
  - Closed beta [announcement](https://x.com/crest_btc/status/2032071660036128904)
  - [Repo](https://github.com/crest-bitcoin/protocol) is a fork of another protocol
- [Park - Privacy in Ark](https://uncensoredtech.substack.com/p/park) - Proposal for adding privacy features to the Ark protocol

#### Ecash

- [React Native Support Merged into Fedimint SDK](https://x.com/ALewin/status/2029333061058363643) - Fedimint's SDK now supports React Native, enabling mobile app developers to integrate Fedimint directly into cross-platform apps

### Business

- [Strike Announces Bitcoin Line of Credit (BLOC)](https://x.com/Strike/status/2028974333708644588) - Borrow against your Bitcoin without selling, powered by Strike
- [Strike Receives BitLicense to operate in New York](https://x.com/mattcrv/status/2029994842386813422) - Strike approved by NYDFS to serve New York customers
- [Square launches bounties to onboard merchants to accept bitcoin](https://x.com/BitcoinNewsCom/status/2029906172141093075) - Incentive program to drive merchant Bitcoin adoption through Square POS
- [COLDCARD Proof-of-Reserves Support](https://x.com/COLDCARDwallet/status/2029684130938531965) - "Perfect for audits, transparency reports, or just flexing your reserves."
- [Square auto-enables bitcoin payments starting March 30, 2026]((https://x.com/BitcoinNewsCom/status/2033967355483615732) - Lightning payments will now be accepted by all Square merchants by default
- [SEC and CFTC clarify application of securities law to crypto assets](https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets) - Commodities, collectibles, and mining and wrapping activity are now explicitly excluded from securities law

### AI

- [Using AI tooling for code review](https://delvingbitcoin.org/t/using-ai-tooling-for-code-review/2277) - Discussion on integrating AI tools into the Bitcoin Core code review process
- [Open Source Agents Need to Get Serious About Payments](https://x.com/TheBlueMatt/status/2026667191475777727) - Matt Corallo argues open source AI agents need native payment rails like Lightning
- [Unhuman Store](https://unhuman.store/) - Suite of AI agent services accepting Lightning payments via L402
- [Mail Mike](https://mailmike.lol/) - AI email agent that accepts Lightning payments to send emails on your behalf
