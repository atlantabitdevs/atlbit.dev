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

#### Bitcoin Core

- [Make Taproot annexes standard](https://github.com/bitcoin/bitcoin/pull/36466) - Robin Linus opened a Bitcoin Core PR that relays Taproot annexes, so protocols can post a little data with each payment. Policy only, consensus untouched: an input opts in with an annex starting `0x50` (data goes after `0x50 0x00`), and either every non-P2A input carries an annex or none does. Builds on #27926 and Libre Relay. Should Core relay the annex, and what does that do to the data-embedding debate?
- [Bitcoin Core 32.0rc3](https://bitcoincore.org/bin/bitcoin-core-32.0/test.rc3/) - Third release candidate is up for testing. From the [draft release notes](https://github.com/bitcoin-core/bitcoin-devwiki/wiki/32.0-Release-Notes-Draft): `estimatesmartfee` now combines the block policy estimator with a new mempool-based one, the default `-maxconnections` goes from 125 to 200 to make room for more block-relay-only peers, outgoing transaction relay is rate-limited through one global backlog instead of per peer, and private broadcast gets a queue cap, a send-attempt limit, and a fix for an IP leak on the v2-to-v1 retry.
- [Bounds on chain length with BIP-54 timewarp fixes](https://delvingbitcoin.org/t/bounds-on-chain-length-with-bip-54-timewarp-fixes/2899) - Pieter Wuille shows that BIP-54's two timewarp rules are enough to bound how many blocks any chain can have for a given time and amount of work, with the formula proven in Lean. For the real chain in September (height 966,270), the bound is 1,012,794 blocks; the longest chain he has actually constructed, found by Claude Fable 5.1, is 1,007,326.

#### Grants and Maintainers

- [OpenSats: supporting the foundations of Bitcoin development](https://opensats.org/blog/supporting-the-foundations-of-bitcoin-development) - Four first-time grants and one renewal: Guix release infrastructure (futurile), libbitcoinkernel and its JVM wrapper (Yuvicc), the Core wallet including sat/vB fee units and BIP-39 import (Pol Espinasa, who runs BitDevs Barcelona), wallet, GUI and IPC review (Pablo Martin), and a renewal for janb84.
- [Peter Todd to lead MARA's Slipstream](https://x.com/MARAFoundation_/status/2105659425054748922) - The MARA Foundation announced that Peter Todd will lead maintenance of Slipstream, MARA's private mempool service for submitting transactions directly to a miner.

#### Privacy and Scaling

- [Zark: ZK proofs for blinded statechains](https://hackmd.io/@januszgrze/HJlHensozl) - A Mercury Layer-inspired prototype lets recipients validate a coin's history and exit priority without receiving prior owners' backup transactions or payout addresses. Users still trust the co-signer to delete old keyshares and must monitor the chain for competing exits. Unaudited research prototype on Mutinynet, not mainnet. [Announcement](https://x.com/lxdev_/status/2110041930050494909), [code](https://github.com/zerosats/zark-public).
- [Shielded Bitcoin: private transfers on Bitcoin L1](https://x.com/allocinitxyz/status/2103124026214568209) - A paper from [alloc] init (Clara Shikhelman, Mikhail Komarov, Aleksei Moskvin) for Zcash-style shielded notes on Bitcoin with no consensus change: encrypted notes, public nullifiers, validity enforced through PIPEs v2, and shielded state rebuilt by replaying accepted transfers in Bitcoin order.
- [Glass coins vs shielded bitcoin](https://x.com/robin_linus/status/2104266654226198827) - Robin Linus's 48-minute whiteboard session: key architecture and metaprotocol tradeoffs, BitVM vs PIPEs bridges, and the case for Bitcoin upgrades.
- [Garbled Groth16 verification under 2 MB](https://eprint.iacr.org/2026/2100) - Alpen Labs cut the off-chain data needed for garbled Groth16 verification on Bitcoin by more than 99.99%, from 48 GB to under 2 MB.
- [Always complete all initial private broadcast connections](https://github.com/bitcoin/bitcoin/pull/36277) - Private broadcast (#29415) sends your own transactions to the network over short-lived Tor or I2P connections. Andrew Toth's merged follow-up always opens all three connections, even if the transaction has already come back to you, which closes a theoretical timing attack on who originated it.

#### Quantum

- [PRAWNS: threshold hash-based signatures](https://x.com/lclhostresearch/status/2104619822059585951) - lclhost research (with Dan Boneh and Benedikt Bünz) announces a thresholdization scheme for one-time hash-based signatures, a follow-up to SHRIMPS. Relevant to post-quantum multisig.
- [PQC output type discussion, continued](https://delvingbitcoin.org/t/pqc-output-type-discussion/2749/18) - Pieter Wuille's thread compares P2MR (BIP-360), P2TRv2, and P2TRH. His view: ship P2TRv2 first as the easy "emergency" option, with a hash-based signature opcode and ECC spends that can later be disabled inside that output type, with P2MR as a later, separate output type. Antoine Riard argues the self-contained disablement means only coins that opted in can ever be frozen, which sidesteps the broader freeze debate. Should CISA ride along, or would it delay adoption?
- [PQLN: post-quantum security for Lightning's off-chain surfaces](https://delvingbitcoin.org/t/pqln-post-quantum-security-for-the-bitcoin-lightning-networks-off-chain-surfaces/2893/4) - A hybrid post-quantum extension of Lightning, implemented in a rust-lightning fork, covering gossip, transport, onions, BOLT11 invoices, and BOLT12 offers. On-chain keys stay classical because they need a consensus change. Computation is cheap; bandwidth is not, with about 10x the gossip. A PQ-signed BOLT11 invoice is 4,286 characters, which fits in the largest QR code with 10 to spare, and the thread asks whether that will actually scan.

### Liquid

- [Liquid Network security incident assessment](https://blog.blockstream.com/liquid-network-security-incident-assessment/) - Blockstream's full report on the September 6 exploit. Since 2018, Elements' rangeproof cache key left out the asset commitment and scriptPubKey (Bug A). The August fix concatenated the fields without length prefixes, which opened a byte-boundary collision (Bug B) that no reviewer, human or AI, caught. The attacker minted about 4,000 unbacked LBTC and pegged out through SideSwap, which kept its peg-out key online and had no size or velocity limits. 3,400 BTC came back; about 602 BTC is still outstanding.

### Lightning

#### Security

- [Blink's September 19 attack: post-mortem and 50% bounty](https://www.blink.sv/blog/sept-19-attack-postmortem-and-bounty) - Blink's OAuth consent page accepted permissions supplied by the browser, and its admin API accepted any live token without checking which client it was issued to. A free account could grant itself admin rights, a flaw open for about three years. The attacker changed contact details and withdrawal limits, then drained 6.61 BTC from 24 accounts on-chain and over Lightning. All nine targeted accounts with 2FA held. Shareholders restored every balance, and Blink offers 25% of anything recovered to finders plus 25% to circular economies.
- [Phase two: following the coins in public](https://www.blink.sv/blog/phase-two-following-the-coins-in-public) - Blink publishes a public tracker for the stolen coins and labels each link as proven, traced, probable, or third-party. It ties the same attacker to earlier Fedimint ecash redemptions, a Lightning node, and the October 5-6 exploit of Second's Ark server. A discussion prompt on custodial admin tooling and how much chain analysis can do once the coins have moved through a cross-chain swap.
- [Core Lightning: urgent security update](https://x.com/Core_LN/status/2105835841847242976) - Attackers are targeting nodes on 26.06.7 or earlier. [v26.06.8](https://github.com/ElementsProject/lightning/releases/tag/v26.06.8) fixes responsibly reported vulnerabilities with no embargo, and some tests are held back to make the bugs harder to reverse-engineer. The October 7 [v26.06.9 follow-up](https://github.com/ElementsProject/lightning/releases/tag/v26.06.9) adds security fixes and corrects a gossip-throttling regression introduced in 26.06.8 that could delay channel traffic. Upgrade to 26.06.9.
- [LDK v0.2.7: theft and denial-of-service fixes](https://github.com/lightningdevkit/rust-lightning/releases/tag/v0.2.7) - Fixes a reconnect attack where a channel peer could deny an acknowledged state update and induce a conflicting commitment signature (#5057). Also checks LSPS2 just-in-time payment amounts so a client cannot make the node open a channel and forward more than the incoming HTLC supplies (#5042). The release also includes denial-of-service fixes.
- [BTCPay Server 2.4.5: security hardening](https://blog.btcpayserver.org/btcpay-server-2-4-5/) - Blocks private-network destinations by default for Lightning connections, LNURL requests, invoice notifications, and webhooks to prevent server-side request forgery (SSRF). Adds a permission for changing invoice status and requires permission to create approved pull payments before auto-approving overpayment refunds. Operators connecting to private services need explicit `ssrfexceptions`.

#### Payments

- [Lightning merged into the x402 spec](https://x.com/spiral_xyz/status/2102814894336672132) - benthecarman got Lightning into [x402](https://github.com/x402-foundation/x402/pull/2861), the open standard for agents paying for API calls.
- [Block joins the x402 Foundation](https://block.xyz/inside/block-joins-the-x402-foundation-to-advance-open-agentic-commerce) - Block joins the foundation and contributes Lightning payments for agentic commerce, next to goose and its other open agent work.
- [Landfall: it is time to think about Bitcoin UX](https://x.com/PalazzoVincenzo/status/2107915680465219605) - Vincenzo Palazzo releases Landfall, a showcase Lightning wallet built on Lexe, born from watching BOLT12 payouts on OCEAN cause avoidable problems.
- [MIT DCI vending machine takes bitcoin again](https://x.com/bitgould/status/2105863371463823425) - The dormant MIT DCI vending machine is back on Lightning via Lexe; the receive logic took about 90 minutes with Opus. A bull-market canary for payments tech?
- [Adding BOLT12 to @OP_RETURN_Bot with LDK](https://x.com/benthecarman/status/2108651326641213554) - benthecarman rebuilt the bot in Rust on Lightning Dev Kit, so it can now take BOLT12 offers. He had an AI agent (Claude Opus 5.5) do the rewrite in the background, about an hour of his own time.
- [lnd: BOLT12 string codec and fuzz harnesses](https://github.com/lightningnetwork/lnd/pull/11146) - Merged step toward BOLT12 in lnd: one-call encode and decode for offers, invoice requests, and invoices, a validator that checks a received invoice against the invoice request that was sent, and fuzz harnesses seeded from the spec test vectors.

### Ark

- [Second's Ark server exploited](https://x.com/secondhq/status/2108065406665805992) - On October 5 an attacker exploited a bug in the boarding flow of Second's Ark server and took 0.75 BTC of Second's own liquidity. No user funds were affected. Blink ties the same attacker to its own breach (above).
- [Bark MCP server for the Arké wallet](https://x.com/matthewvuk2/status/2106416882219655229) - Second place overall at the btc++ Berlin hackathon: an MCP server that connects to the Arké iPhone wallet, so agents can pay from your mobile wallet.

### Policy

- [FinCEN withdraws unhosted-wallet and mixing proposals](https://www.fincen.gov/news/news-releases/fincen-announces-withdrawals-proposed-digital-asset-related-rules) - Announced October 5 and effective October 6: FinCEN withdrew its 2020 unhosted-wallet proposal and 2023 international virtual-currency mixing proposal, which would have added verification, recordkeeping, or reporting duties for financial institutions. Existing anti-money-laundering obligations remain, and FinCEN says it will continue monitoring mixers for illicit activity.
- [SEC proposes new crypto custody options for advisers and funds](https://www.sec.gov/newsroom/press-releases/2026-100-sec-proposal-would-address-how-investment-advisers-funds-can-custody-crypto-assets-under-federal) - The October 1 proposal would let registered investment advisers and regulated funds use state trust companies as crypto custodians and hold crypto assets in self-custody under specified safeguards. Here, self-custody means institutions holding client or fund keys. This is still a proposal; [comments are due December 7](https://www.govinfo.gov/content/pkg/FR-2026-10-06/html/2026-20466.htm).

### AI

- [Anthropic launches OSS Scanner](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source) - A free, opt-in service modeled on OSS-Fuzz that periodically scans enrolled open-source projects with Anthropic's frontier models. Reports include a proof of concept, an explanation, and a suggested fix where one exists. They are sent without human review. In a check of 97 critical and high-severity findings, only one was a false positive. Should Bitcoin projects enroll, and who triages the reports?
- [REA: Reverse Engineer Anything](https://x.com/MatthewBerman/status/2108245653843509415) - A trending MCP server for reverse engineering binaries, applications, and runtime behavior.
- [PhotoCraft: a clean-room Photoshop in Rust](https://github.com/storytold/photocraft) - Eric S. Raymond guesses it was built by decompiling Photoshop into a spec and having an LLM write Rust, and calls closed source dead. niftynei, [responding](https://x.com/niftynei/status/2107027328719036556) to his earlier "end of software secrecy" post, says code was never much of a secret on a long enough timeline. What happens to software moats, and to closed-source Bitcoin tools, when any binary can be decompiled?

### Just for Fun

- [Bitcoin poker](https://poker.bitvm.org) - Robin Linus "finished the poker client Satoshi left unfinished in Bitcoin v0.1": heads-up fixed-limit hold'em with a jointly shuffled deck, on MutinyNet. [Announcement](https://x.com/robin_linus/status/2108255571149480071).
- [A .bitcoin top-level domain](https://x.com/wiz/status/2108002376372347249) - Wiz & Associates filed a community priority application with ICANN for .bitcoin on behalf of the people who run and build the network. Who should control a .bitcoin TLD, if anyone?
- [Block: Bitcoin Does](https://block.xyz/bitcoin/does) - Block's new campaign: the modern economy makes no sense, bitcoin does.
