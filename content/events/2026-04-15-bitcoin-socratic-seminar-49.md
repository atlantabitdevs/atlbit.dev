---
date: '2026-04-15'
title: 'Bitcoin Socratic Seminar #49'
type: Doc
---

![Bitcoin Socratic Seminar #49](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlantabitdevs/">Bitcoin Socratic Seminar #49</a>!

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

- [Brink Funding Fabian for CISA Research](https://x.com/bitschmidty/status/2041143804883788115?s=20) - Fabian's recent Brink-funded work includes advancing cross-input signature aggregation research and implementation work in libsecp256k1

#### Bitcoin Core

- [Policy: Report Debug Message Why Inputs Are Non-Standard](https://github.com/bitcoin/bitcoin/pull/29060) - Merged Bitcoin Core PR to surface clearer debug reasons when policy rejects non-standard inputs
- [Remove Taproot BIP 9 Deployment](https://github.com/bitcoin/bitcoin/pull/26201) - Cleanup PR removing Taproot's old BIP9 deployment scaffolding from Bitcoin Core
- [Consensus Cleanup: Demo of Slow Blocks on Signet](https://delvingbitcoin.org/t/consensus-cleanup-demo-of-slow-blocks-on-signet/2367) - Antoine Poinsot organizes a Signet demo of hard-to-validate blocks so users can observe the impact of slow block validation firsthand

#### Privacy

- [Wallet Fingerprinting and Payjoin Privacy](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy) - Payjoin Foundation post on how wallet fingerprints can leak metadata and weaken payjoin privacy

#### Post-Quantum

- [Post-Quantum BIP-86 Recovery via zk-STARK Proof of BIP-32 Seed Knowledge](https://groups.google.com/g/bitcoindev/c/Q06piCEJhkI?pli=1) - Proposal for proving BIP-86 derivation knowledge with a zk-STARK so users can recover to a PQ-safe path without exposing their seed
- [Quantum-Safe Bitcoin w/o Softforks](https://github.com/avihu28/Quantum-Safe-Bitcoin-Transactions/blob/main/paper/QSB.pdf) - Paper exploring quantum-safe transaction constructions without requiring a soft fork. [Tweet](https://x.com/robin_linus/status/2042352249037623332)
- [PQC Precommitment Migration via Tapscript](https://github.com/csuwildcat/pqc-precommitment-migration) - Precommitment construction that uses existing tapscript behavior to reserve future PQ signature slots
- [SHRIMPS: 2.5 KB Post-Quantum Signatures Across Multiple Stateful Devices](https://delvingbitcoin.org/t/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/2355) - Jonas Nick proposes a hash-based signature construction that keeps PQ signatures small even when a seed is restored across multiple devices

#### BIPs & Protocol Proposals

- [BIP440/BIP441: Varops Budget and Script Restoration](https://github.com/bitcoin/bips/pull/2118) - Draft BIPs proposing a varops budget plus restoration of disabled script functionality via tapleaf `0xc2`

### Lightning

- [Lexe Wallet Public Release on App Store and Google Play](https://blog.lexe.app/public-launch/) - Public launch of Lexe's self-custodial mobile Lightning wallet, plus new SDKs and address support
- [Onion Message Jamming in the Lightning Network](https://delvingbitcoin.org/t/onion-message-jamming-in-the-lightning-network/2414) - Analysis of how spam onion messages can trigger rate limits between honest peers, plus proposed mitigations like fees and routing changes

### Other Layer 2s

- [A Decade of Workarounds](https://spiralbtc.substack.com/p/a-decade-of-workarounds) - Spiral retrospective on how mempool policy evolved over years to support Lightning and other time-sensitive Layer 2 protocols

### Business

- [ProductionReady Launches](https://productionready.org/blog/productionready-launches) - New 501(c)(3) focused on funding Bitcoin open-source software, education, and research. Specifically interested in supporting alternative bitcoin implementations.
