---
date: '2026-08-19'
title: 'Bitcoin Socratic Seminar #53'
type: Doc
---

![Bitcoin Socratic Seminar #53](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044445/">Bitcoin Socratic Seminar #53</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Wednesday, August 19, we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

The strongest way to read this month's stack of links is not as a random list of Bitcoin news, but as two overlapping narratives. One is BIP 110 and the fight over rough consensus, legitimacy, and who gets to steer Bitcoin's standards process. The other is AI, not as a side topic, but as the broader systems story hanging over security, censorship, red teaming, infrastructure fragility, and even which kinds of builders get to keep operating. A lot of the links below stop looking separate once you read them through those two lenses.

### AI Takeover

#### Cool Stuff

- [Ten advances in mathematics](https://openai.com/index/ten-advances-in-mathematics/) - OpenAI surveys ten mathematical advances made with help from its models, offering concrete cases for discussing where frontier AI is beginning to contribute to research-level mathematics.
- [Meet Berd](https://x.com/camworboys/status/2089806307591365059?s=20) - Cam Worboys introduced Berd, which looks like another lightweight AI-native builder/project thread worth at least a quick room read.
- [Denny's jumps into Jensen's open-model thread](https://x.com/DennysDiner/status/2081069889931112816?s=20) - Denny's showed up in the replies to Jensen's post, which is less a technical point than a reminder that AI discourse has fully escaped the lab and entered brand-account territory.

#### Security & Offensive Security

- [Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) - Anthropic says Claude Mythos Preview found an improved attack on the post-quantum HAWK signature scheme and a faster attack on a reduced-round version of AES, showing frontier models starting to contribute to real cryptanalysis.

##### Censorship

- [Bitcoin Policy Institute urges trusted frontier-model access for open-source defenders](https://x.com/bitcoinpolicy/status/2086872430639771675?s=20) - Bitcoin Policy Institute says it is joining a broader coalition urging leading AI labs to give qualified open-source defenders trusted access to frontier models, raising questions about who gets advanced capabilities for security research and defense.
- [Jensen Huang shares NVIDIA's letter on why open models matter](https://x.com/JensenHuang/status/2080643682408321103?s=20) - Jensen Huang says NVIDIA signed a letter arguing for the importance of open AI models, which makes the frontier-access and open-models debate feel a lot more mainstream.

##### ColdCard Incident

- [Predictable RNG Fallback and 32-Bit Reseed in COLDCARD Firmware](https://engineering.block.xyz/blog/predictable-rng-fallback-and-32-bit-reseed-in-coldcard-firmware) - Block Engineering explains how a disabled hardware-RNG path and a 32-bit reseed can constrain entropy in affected COLDCARD firmware and weaken generated secrets.
- [When random.bytes() runs but doesn't work](https://insider.btcpp.dev/cp/209395473) - Dusty Daemon digs into what a commit message reveals about the recent COLDCARD bug and how code can appear to generate entropy while still failing as a secure randomness source.
- [HWI PSA](https://x.com/jonatack/status/2089820365677547876?s=20) - Jon Atack posted a hardware-wallet-interface PSA that fits the broader wallet-safety and signer-hygiene thread around recent hardware concerns.
- [Rob Hamilton's Bitcoin software ecosystem map](https://x.com/Rob1Ham/status/2086120260726317197?s=20) - Rob Hamilton shared his current view of the Bitcoin software ecosystem, which fits the broader "what depends on what" conversation around the recent COLDCARD fallout.

- [MARA makes Slipstream permissionless](https://x.com/MARAFoundation_/status/2084176346402730479?s=20) - MARA says Slipstream is now a permissionless public good with no client code requirement, which is worth discussing as an alternate transaction relay path and its tradeoffs for fee management and mempool policy.
- [Solving Bitcoin's Self-Custody Trilemma](https://lu.ke/self-custody-trilemma) - Luke Childs argues that current self-custody setups force tradeoffs between security, ease of use, and trustlessness, and presents Anzen as a vault design meant to improve that balance without a soft fork, company, or cosigner.

##### Lightning Infrastructure

- [BTCPay Server warns of actively exploited critical vulnerability](https://x.com/BtcpayServer/status/2085755643659522240?s=20) - BTCPay Server says an in-the-wild bug can lead to loss of funds and is telling operators to update to version 2.4.2 immediately or shut instances down until they can patch.
- [BTCPay Server funds researchers and recovery bounty after the exploit](https://x.com/BtcpayServer/status/2086875600103367109?s=20) - BTCPay Server says it is donating to the researchers behind the recent critical vulnerability disclosure and helping fund a bounty to recover stolen funds, offering a concrete example of how open-source projects respond after a major incident.
- [BTCPay Server ships v2.4.3-rc4 security update](https://x.com/BtcpayServer/status/2087959120515101035?s=20) - BTCPay Server says v2.4.3-rc4 addresses vulnerabilities reported by the Bitcoin Red Team, Project Loupe, MAGIC Grants, Prem, and independent researchers after several days of review and testing.
- [BTCPay Server releases v2.4.3-rc6](https://x.com/BtcpayServer/status/2089715941798252960?s=20) - BTCPay Server says rc6 should be the final release candidate before the fully open-source 2.4.3 release later this week, making it another useful follow-up in the security-response sequence.
- [Boltz stays disabled while keeping refund paths open](https://x.com/Boltzhq/status/2084311537502630319?s=20) - Boltz says the service will remain disabled until further notice, though cooperative and unilateral refunds should still work and support remains available.
- [ZEUS follows suit for its Boltz-backed instance](https://x.com/ZeusLN/status/2084316041673347138?s=20) - ZEUS says its instance is following Boltz offline, while noting other ZEUS services like channels, the LSP, Lightning addresses, and normal send/receive flows remain online.
- [Boltz posts an update on its future](https://x.com/Boltzhq/status/2087636521746674168?s=20) - Boltz shared a broader update on the project's future, which feels adjacent to but not duplicative of the earlier outage and refund-path discussion.
- [Palazzo on wallet strategy after Boltz-backed services went down](https://x.com/PalazzoVincenzo/status/2086551895997583442?s=20) - Vincenzo Palazzo says the recent Boltz outage is forcing some wallets back into a 2019-style "when Lightning?" moment, while users learn about Liquid, Ark, and other second layers under the hood.
- [Voltage deprecates self-serve to focus on enterprise Lightning infrastructure](https://x.com/voltage_cloud/status/2072721707194786042?s=20) - Voltage says it is sunsetting its self-serve product and going all-in on enterprise-grade Lightning infrastructure, which also gives the room a business-angle Lightning topic.
- [Agent wallet users should upgrade to 0.22](https://x.com/nickslaney/status/2086905450574843974?s=20) - Nick Slaney posted a heads-up for `@moneydevkit/agent-wallet` users to upgrade to version 0.22.

### BIP110 Saga

#### Governance, Process & Rough Consensus

- [Motion to remove Luke Dashjr from BIP Editors](https://groups.google.com/g/bitcoindev/c/knbv3MFwlvU/m/MCiJxxijCAAJ) - The bitcoindev thread argues Luke should be removed as a BIP editor after the BIP-110 fight, raising conflict-of-interest, process, and coordination questions inside Bitcoin's standards process.
- [Checkmate thread on why the proposed fork failed to reach rough consensus](https://x.com/_Checkmatey_/status/2087368296979157368) - Checkmate frames the failed fork push as a social-consensus loss rather than a rules or referee problem, which makes it a useful prompt on how rough consensus is actually enforced in Bitcoin.
- [Lopp reflects on the BIP-110 year and its scaling-war echoes](https://x.com/lopp/status/2089344628956844410?s=20) - Jameson Lopp draws parallels between the past year of BIP-110 campaigning and the 2017 scaling fights, with receipts and accountability framing for the people involved.

### Misc

#### Bitcoin Infra

- [Spiral spotlights BIP-445 FROST signing work](https://x.com/spiral_xyz/status/2087966401013088365?s=20) - Spiral says Sivaram is driving BIP-445 toward a polished v1.0, advancing configurable threshold signatures for bitcoin so keys can be split across multiple participants and only sign once enough parties coordinate.
- [nix-bitcoin is shutting down](https://x.com/nixbitcoinorg/status/2087880779892158679) - The nix-bitcoin project announced it is shutting down, raising questions about maintainer sustainability and the future of declarative Bitcoin node infrastructure.
- [rust-bitcoin maintainer spotlight: Nick Johnson](https://x.com/spiral_xyz/status/2089764413783912580?s=20) - Spiral says Nick Johnson is now helping maintain rust-bitcoin and stabilize crates that sit underneath a large share of Bitcoin's Rust ecosystem.
- [Bitcoin Core v32.0 is targeted for October](https://x.com/bitschmidty/status/2087179372247576800?s=20) - Mike Schmidt flags the current target window for Bitcoin Core 32.0, which is a useful checkpoint for upcoming release-cycle discussion.
- [Payjoin Dev Kit 1.0](https://x.com/payjoindevkit/status/2087589794155278626?s=20) - Payjoin Dev Kit says its 1.0 release is here, giving the room another concrete privacy-focused payments tool to look at.
- [PIR stack with DPF, HarmonyPIR, OnionPIRv2, and ORAM support](https://x.com/weikengchen/status/2087562427361849675?s=20) - Weikeng Chen says his ongoing work now spans multiple PIR approaches plus ORAM, with Lightning payments and Nostr-based server discovery planned next.

#### Lightning

- [Blockstream announces atomic swaps across Bitcoin, Liquid, and Lightning](https://x.com/Blockstream/status/2086906995450507315?s=20) - Blockstream says its new swaps product lets users hold BTC or LBTC and pay Lightning invoices without managing channels or inbound liquidity, adding a new entrant in the post-Boltz swap landscape.
- [Noah will forward Lightning payments to Ark addresses](https://x.com/nitesh_btc/status/2089556749078397210?s=20) - Nitesh says the next Noah release will forward Lightning payments to Ark addresses, removing the slow push-notification flow that used to fetch invoices from sleeping users.
- [Empirical test of payment channel network theory](https://x.com/renepickhardt/status/2087094211879321934?s=20) - Rene Pickhardt says he empirically tested the mathematical theory of payment channel networks, which could spark a good routing-theory versus production-reality discussion.
- [Spiral highlights Cashu Dev Kit roadmap](https://x.com/spiral_xyz/status/2087909385729110428?s=20) - Spiral says a new grantee is helping build CDK, a Rust SDK for Cashu wallets and mints, with onchain support via BDK, payjoin via PDK, and unified balances via LDK on the roadmap.

#### Business

- [Block introduces its Bitcoin Open Roadmap](https://x.com/BitcoinatBlock/status/2088349265991270569?s=20) - Block says it is publishing an open Bitcoin roadmap, which is a useful business-and-priorities signal from a major Bitcoin company.

#### Security

- [FBI agent accused of stealing nearly $1 million in cryptocurrency](https://www.cnn.com/2026/08/03/politics/fbi-agent-accused-stealing-cryptocurrency) - Court records say an FBI agent diverted more than $900,000 from monitored crypto accounts, a sharp reminder that custody, chain surveillance, and state handling of seized funds create their own trust failures.
- [Trezor discloses shipping-provider customer data breach](https://x.com/Trezor/status/2087885428313543059?s=20) - Trezor says a breached shipping vendor exposed recent customer order data in several countries, a reminder that self-custody privacy can fail through logistics and supply-chain partners even when the wallet itself is secure.

#### Fun

- [Noah adds printed receipts for no good reason](https://x.com/nitesh_btc/status/2089389265893347758?s=20) - Nitesh says the next Noah version prints a receipt "for no absolutely no reason," which is exactly the kind of unnecessary delight this section exists for.
- [Rob Hamilton says he and Calleb are entering a very Chinese phase of life](https://x.com/Rob1Ham/status/2086493931471032389?s=20) - A thoroughly unserious Rob Hamilton post that belongs here on vibe alone.
