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

#### Bitcoin Core

- [Consensus Cleanup: Demo of Slow Blocks on Signet](https://delvingbitcoin.org/t/consensus-cleanup-demo-of-slow-blocks-on-signet/2367) - Antoine Poinsot organizes a Signet demo of hard-to-validate blocks so users can observe the impact of slow block validation firsthand
- [BIP440/BIP441: Varops Budget and Script Restoration](https://github.com/bitcoin/bips/pull/2118) - Draft BIPs proposing a varops budget plus restoration of disabled script functionality via tapleaf `0xc2`
- [Policy: Report Debug Message Why Inputs Are Non-Standard](https://github.com/bitcoin/bitcoin/pull/29060) - Merged Bitcoin Core PR to surface clearer debug reasons when policy rejects non-standard inputs
- [Remove Taproot BIP 9 Deployment](https://github.com/bitcoin/bitcoin/pull/26201) - Cleanup PR removing Taproot's old BIP9 deployment scaffolding from Bitcoin Core

#### Cryptography & Quantum

- [Post-Quantum BIP-86 Recovery via zk-STARK Proof of BIP-32 Seed Knowledge](https://groups.google.com/g/bitcoindev/c/Q06piCEJhkI?pli=1) - Proposal for proving BIP-86 derivation knowledge with a zk-STARK so users can recover to a PQ-safe path without exposing their seed
- [Quantum-Safe Bitcoin w/o Softforks](https://github.com/avihu28/Quantum-Safe-Bitcoin-Transactions/blob/main/paper/QSB.pdf) - Paper exploring quantum-safe transaction constructions without requiring a soft fork. [Tweet](https://x.com/robin_linus/status/2042352249037623332)
- [PQC Precommitment Migration via Tapscript](https://github.com/csuwildcat/pqc-precommitment-migration) - Precommitment construction that uses existing tapscript behavior to reserve future PQ signature slots
- [SHRIMPS: 2.5 KB Post-Quantum Signatures Across Multiple Stateful Devices](https://delvingbitcoin.org/t/shrimps-2-5-kb-post-quantum-signatures-across-multiple-stateful-devices/2355) - Jonas Nick proposes a hash-based signature construction that keeps PQ signatures small even when a seed is restored across multiple devices
- [Quantum Fatigue](https://x.com/benthecarman/status/2043728515887980711) [List](https://groups.google.com/g/bitcoindev)
- [Brink Funding Fabian for CISA Research](https://x.com/bitschmidty/status/2041143804883788115?s=20) - Fabian's recent Brink-funded work includesV advancing cross-input signature aggregation research and implementation work in libsecp256k1

### Lightning and L2s

- [Lexe Wallet Public Release on App Store and Google Play](https://blog.lexe.app/public-launch/) - Public launch of Lexe's self-custodial mobile Lightning wallet, plus new SDKs and address support
- [Onion Message Jamming in the Lightning Network](https://delvingbitcoin.org/t/onion-message-jamming-in-the-lightning-network/2414) - Analysis of how spam onion messages can trigger rate limits between honest peers, plus proposed mitigations like fees and routing changes
- [A Decade of Workarounds](https://spiralbtc.substack.com/p/a-decade-of-workarounds) - Spiral retrospective on how mempool policy evolved over years to support Lightning and other time-sensitive Layer 2 protocols

#### AI, Privacy, Infosec

- [Wallet Fingerprinting and Payjoin Privacy](https://payjoin.org/blog/2026/03/25/wallet-fingerprints-payjoin-privacy) - Payjoin Foundation post on how wallet fingerprints can leak metadata and weaken payjoin privacy
- [Bitcoin Depot 8-K](https://www.sec.gov/Archives/edgar/data/1901799/000119312526147772/btm-20260406.htm) - Bitcoin Depot disclosed a theft of approximately 50.903 BTC from company-controlled wallets, a reminder that custody and operational security remain core business risks
  - [ZachXBT trace writeup](https://anonhaven.com/en/news/bitcoin-depot-8k-cybersecurity-incident-zachxbt-trace/) - Follow-up report tying the incident to onchain tracing work and public attribution efforts
- [Spiral AI Post](https://x.com/spiralbtc/status/2044432413959319606) - Spiral shares its latest thinking on AI and how it intersects with Bitcoin development and open-source tooling
- [Claude Mythos](https://red.anthropic.com/2026/mythos-preview/)
  - [Project Glasswing](https://www.anthropic.com/glasswing)

### Business

- [Bitcoin is Predictably Popular in Crisis-Ridden Iran](https://coinshares.com/insights/research-data/bitcoin-is-predictably-popular-in-crisis-ridden-iran/) - CoinShares examines how sanctions, currency instability, conflict, and blackouts are driving Bitcoin usage in Iran for savings, transfers, and sanctions evasion
- [Bitcoin Mining Report | Q1 2026](https://coinshares.com/insights/research-data/bitcoin-mining-report-q1-2026/) - CoinShares argues low hashprice and stronger AI economics are pushing many miners to reposition as AI and data center operators rather than pure Bitcoin miners
- [ProductionReady Launches](https://productionready.org/blog/productionready-launches) - New 501(c)(3) focused on funding Bitcoin open-source software, education, and research. Specifically interested in supporting alternative bitcoin implementations.
- [Strategy Acquires 4,871 BTC and Now Holds 766,970 BTC](https://www.strategy.com/press/strategy-acquires-4871-btc-and-now-holds-766970-btc_04-06-2026) - Another large treasury purchase from Strategy, keeping the corporate Bitcoin accumulation story front and center
  - [💩](https://x.com/bitcoin_bugle/status/2044152071511749035)
- [Morgan Stanley Bitcoin Trust](https://www.sec.gov/Archives/edgar/data/2103612/000110465926034379/tm2534140d11_8a12b.htm) - SEC filing for Morgan Stanley's Bitcoin trust adds another signal that large traditional finance firms continue building mainstream Bitcoin investment products
