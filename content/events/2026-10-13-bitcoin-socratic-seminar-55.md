---
date: '2026-10-13'
title: 'Bitcoin Socratic Seminar #55'
type: Doc
---

![Bitcoin Socratic Seminar #55](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044442/">Bitcoin Socratic Seminar #55</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Tuesday, October 13, we'll be meeting at ATL BitLab. It's also the ATL BitLab BBQ: the seminar is free and public, and a <a href="https://atlbitlab.com/store/bbq-2026" target="_blank">BBQ ticket</a> is only needed if you want to eat. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

#### Core and Policy

- [Make Taproot annexes standard](https://github.com/bitcoin/bitcoin/pull/36466) - Robin Linus opened a Bitcoin Core PR that relays Taproot annexes, so shielded protocols like Shielded CSV can post a little data with each payment. Policy only, consensus untouched: an input opts in with an annex starting `0x50 0x00`, and either every non-P2A input carries an annex or none does. Builds on #27926 and Libre Relay. Should Core relay the annex, and what does that do to the data-embedding debate?
- [OpenSats: supporting the foundations of Bitcoin development](https://opensats.org/blog/supporting-the-foundations-of-bitcoin-development) - Four first-time grants and one renewal: Guix release infrastructure (futurile), libbitcoinkernel and its JVM wrapper (Yuvicc), the Core wallet including sat/vB fee units and BIP-39 import (Pol Espinasa, who runs BitDevs Barcelona), wallet, GUI and IPC review (Pablo Martin), and a renewal for janb84.
- [Peter Todd joins MARA Foundation to lead Slipstream](https://x.com/MARAFoundation_/status/2105659425054748922) - Peter Todd becomes lead maintainer of Slipstream, MARA's private mempool service for submitting transactions directly to a miner. What does a Core veteran running a miner's direct-submission service mean for relay policy?

#### Privacy and Scaling

- [Shielded Bitcoin: private transfers on Bitcoin L1](https://x.com/allocinitxyz/status/2103124026214568209) - A paper from [alloc] init (Clara Shikhelman, Mikhail Komarov, Aleksei Moskvin) for Zcash-style shielded notes on Bitcoin with no consensus change: encrypted notes, public nullifiers, validity enforced through PIPEs v2, and shielded state rebuilt by replaying accepted transfers in Bitcoin order.
- [Glass coins vs shielded bitcoin](https://x.com/robin_linus/status/2104266654226198827) - Robin Linus's 48-minute whiteboard session: key architecture and metaprotocol tradeoffs, BitVM vs PIPEs bridges, and the case for Bitcoin upgrades.
- [Garbled Groth16 verification under 2 MB](https://eprint.iacr.org/2026/2100) - Alpen Labs cut the off-chain data needed for garbled Groth16 verification on Bitcoin by more than 99.99%, from 48 GB to under 2 MB.
- [PRAWNS: threshold hash-based signatures](https://x.com/lclhostresearch/status/2104619822059585951) - lclhost research (with Dan Boneh and Benedikt Bünz) announces a thresholdization scheme for one-time hash-based signatures, a follow-up to SHRIMPS. Relevant to post-quantum multisig.

### Liquid

- [Liquid Network security incident assessment](https://blog.blockstream.com/liquid-network-security-incident-assessment/) - Blockstream's full report on the September 6 exploit. Since 2018, Elements' rangeproof cache key left out the asset commitment and scriptPubKey (Bug A). The August fix concatenated the fields without length prefixes, which opened a byte-boundary collision (Bug B) that no reviewer, human or AI, caught. The attacker minted about 4,000 unbacked LBTC and pegged out through SideSwap, which kept its peg-out key online and had no size or velocity limits. 3,400 BTC came back; about 602 BTC is still outstanding.

### Lightning

#### Security

- [Blink's September 19 attack: post-mortem and 50% bounty](https://www.blink.sv/blog/sept-19-attack-postmortem-and-bounty) - Blink's OAuth consent page accepted permissions supplied by the browser, and its admin API accepted any live token without checking which client it was issued to. A free account could grant itself admin rights, a flaw open for about three years. The attacker changed contact details and withdrawal limits, then drained 6.61 BTC from 24 accounts on-chain and over Lightning. All nine targeted accounts with 2FA held. Shareholders restored every balance, and Blink offers 25% of anything recovered to finders plus 25% to circular economies.
- [Phase two: following the coins in public](https://www.blink.sv/blog/phase-two-following-the-coins-in-public) - Blink publishes a public tracker for the stolen coins and labels each link as proven, traced, probable, or third-party. It ties the same attacker to earlier Fedimint ecash redemptions, a Lightning node, and the October 5-6 exploit of Second's Ark server. A discussion prompt on custodial admin tooling and how much chain analysis can do once the coins have moved through a cross-chain swap.
- [Core Lightning: urgent security update](https://x.com/Core_LN/status/2105835841847242976) - Attackers are targeting nodes on 26.06.7 or earlier. [v26.06.8](https://github.com/ElementsProject/lightning/releases/tag/v26.06.8) fixes responsibly reported vulnerabilities with no embargo, and some tests are held back to make the bugs harder to reverse-engineer. Upgrade now.

#### Payments

- [Lightning merged into the x402 spec](https://x.com/spiral_xyz/status/2102814894336672132) - benthecarman got Lightning into [x402](https://github.com/x402-foundation/x402/pull/2861), the open standard for agents paying for API calls.
- [Block joins the x402 Foundation](https://block.xyz/inside/block-joins-the-x402-foundation-to-advance-open-agentic-commerce) - Block joins the foundation and contributes Lightning payments for agentic commerce, next to goose and its other open agent work.
- [Landfall: it is time to think about Bitcoin UX](https://x.com/PalazzoVincenzo/status/2107915680465219605) - Vincenzo Palazzo releases Landfall, a showcase Lightning wallet built on Lexe, born from watching BOLT12 payouts on OCEAN cause avoidable problems.
- [MIT DCI vending machine takes bitcoin again](https://x.com/bitgould/status/2105863371463823425) - The dormant MIT DCI vending machine is back on Lightning via Lexe; the receive logic took about 90 minutes with Opus. A bull-market canary for payments tech?

### Ark

- [Second's Ark server exploited](https://x.com/secondhq/status/2108065406665805992) - On October 5 an attacker exploited a bug in the boarding flow of Second's Ark server and took 0.75 BTC of Second's own liquidity. No user funds were affected. Blink ties the same attacker to its own breach (above).
- [Bark MCP server for the Arké wallet](https://x.com/matthewvuk2/status/2106416882219655229) - Second place overall at the btc++ Berlin hackathon: an MCP server that connects to the Arké iPhone wallet, so agents can pay from your mobile wallet.

### Policy and Adoption

- [A .bitcoin top-level domain](https://x.com/wiz/status/2108002376372347249) - Wiz & Associates filed a community priority application with ICANN for .bitcoin on behalf of the people who run and build the network. Who should control a .bitcoin TLD, if anyone?
- [Block: Bitcoin Does](https://block.xyz/bitcoin/does) - Block's new campaign: the modern economy makes no sense, bitcoin does.

### AI

- [Anthropic launches OSS Scanner](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source) - A free, opt-in service modeled on OSS-Fuzz that periodically scans enrolled open-source projects with Anthropic's frontier models. Reports include a proof of concept, an explanation, and a suggested fix where one exists. They are sent without human review, and Anthropic expects a true-positive rate above 90%. Should Bitcoin projects enroll, and who triages the reports?
- [Rewriting @OP_RETURN_Bot with an AI agent](https://x.com/benthecarman/status/2108651326641213554) - benthecarman had Claude Opus 5.5 rewrite the bot in Rust, add LDK and BOLT12 support, and redesign its site in about an hour of his own time, with the agent running in the background.
- [REA: Reverse Engineer Anything](https://x.com/MatthewBerman/status/2108245653843509415) - A trending MCP server for reverse engineering binaries, applications, and runtime behavior.
- [PhotoCraft: a clean-room Photoshop in Rust](https://github.com/storytold/photocraft) - Eric S. Raymond claims it was built by decompiling Photoshop into a spec and having an LLM write Rust, and calls closed source dead. niftynei [replies](https://x.com/niftynei/status/2107027328719036556) that code was never much of a secret on a long enough timeline. What happens to software moats, and to closed-source Bitcoin tools, when any binary can be decompiled?

### Just for Fun

- [Bitcoin poker](https://poker.bitvm.org) - Robin Linus "finished the poker client Satoshi left unfinished in Bitcoin v0.1": heads-up fixed-limit hold'em with a jointly shuffled deck, on MutinyNet. [Announcement](https://x.com/robin_linus/status/2108255571149480071).
