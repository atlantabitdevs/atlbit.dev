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

#### Protocol

- [Testnet 5 is live](https://groups.google.com/g/bitcoindev/c/DmFiHeo-xRw) - The [BIP 95](https://github.com/bitcoin/bips/blob/master/bip-0095.md) replacement for testnet4 launched November 14, dropping the minimum-difficulty exception behind testnet4's block storms, requiring an ASIC to mine, and enforcing BIP 54 Consensus Cleanup from block 1.
- [A STARK proof of Bitcoin's UTXO set](https://delvingbitcoin.org/t/a-stark-proof-of-bitcoins-utxo-set-at-block-972-500-with-circuits-proven-in-lean/3070) - l-henri's 1.6 MB proof covers the header chain and the UTXO set at block 972,500 and verifies in half a second in a browser, though it doesn't yet check scripts or signatures. [Demo](https://starknet-innovation.github.io/starked-bitcoin), [code](https://github.com/starknet-innovation/starked-bitcoin).
- [Softfork before GTA VI?](https://delvingbitcoin.org/t/softfork-before-gta-vi/2913) - With GTA VI out tomorrow, cmp_ancp asks whether Bitcoin can ship a soft fork first, while Adam Gibson's [Responses to Stagnation](https://insider.btcpp.dev/p/responses-to-stagnation-the-reactionary) argues the energy has moved to cryptography that needs no new opcodes.

#### rbitcoin

- [rbitcoin](https://github.com/rbitcoin-org/rbitcoin) - A Bitcoin full node in Rust, AI-written (Grok) under Brandon Black's prompting, that keeps no UTXO set and runs the tx index, address index, Electrum, and Esplora APIs in the same process.
- [rbitcoin.space](https://rbitcoin.space/) - A block explorer that runs beside a stock rbitcoin node with no second indexer or database server, covering the mempool, mining pools, the Lightning graph, Ark VTXOs, and silent payments on mainnet, signet, testnet4, and Testnet 5. [Code](https://github.com/smolcars/rbitcoin-space).

#### Quantum

- [Quantum landmines and vulnerable coin auctions](https://groups.google.com/g/bitcoindev/c/ARMwWdWcz9A) - Cory Fields's thought experiments try to make quantum theft a losing bet instead of freezing old coins, alongside James Tagg's [QSAVE](https://groups.google.com/g/bitcoindev/c/5G38b3JL9fA) and a [proof-of-decay](https://delvingbitcoin.org/t/a-novel-post-quantum-approach-proof-of-decay-cryptographic-half-life-for-unmigrated-dormant-utxos/2970) proposal.
- [How much BTC already sits behind public keys](https://delvingbitcoin.org/t/how-much-btc-sits-behind-keys-or-scripts-already-on-chain-block-975-019/3088) - duncan0k's census finds 7.16 million BTC, 35.6% of the UTXO set at block 975,019, behind a public key or script already visible on chain, much of it through address reuse. [Code](https://github.com/duncan0k/btc-exposure-index).
- [A post-quantum address format: bc1z with ML-DSA-65](https://delvingbitcoin.org/t/bip-draft-post-quantum-address-format-bc1z-using-ml-dsa-65/3067) - Zaenus's draft BIP proposes a witness v3 output committing to an ML-DSA-65 key, at about 1,358 vbytes per input.

#### Mining

- [Stratum V2 reaches the big pools](https://x.com/TheBlueMatt/status/2122321920192548963) - Foundry is [testing Sv2](https://www.tokenpost.com/news/technology/56991), MARA Pool [mined its first Sv2 block](https://x.com/MARAFoundation_/status/2120520367500308580), and Luxor announced support, though all three pools still pick the transactions.
- [Decentralized Coinbase Payout Protocols](https://delvingbitcoin.org/t/decentralized-coinbase-payout-protocols-dcpp-a-framework-for-discussion/3060) - 7d5x9's framework lays out why coinbase-native payouts don't scale, and windpath, who ran p2pool.org from 2012 to 2015, replies with real payout data.

#### Grants

- [OpenSats: 21 grants for Bitcoin software, hardware, and education](https://opensats.org/blog/21-grants-supporting-bitcoin-software-hardware-and-education) - Eight new grants and 13 renewals, including the Stratum V2 Reference Implementation, Braidpool, Libbitcoin, Floresta, Dana, Cashu, bdk-cli, and rust-bitcoin.

### Lightning

- [LDK 0.3-rc4](https://github.com/lightningdevkit/rust-lightning/tree/v0.3-rc4) - LDK's next major version adds RBF for splices and anchor channels by default, but upgrading invalidates already-issued BOLT11 invoices that carry payment metadata.

### Ark

- [Noah: an Ark wallet rewritten native](https://github.com/smolcars/noah) - Claude Opus 5.5 rewrote the Bark-based wallet from React Native into native Swift and Kotlin in five days, cutting cold start on a Pixel 6 from 4.3s to 1.4s.
- [Bark 0.8.1: presigned emergency exits](https://x.com/secondhq/status/2120890608374120543) - Wallets can now [presign their whole emergency exit](https://gitlab.com/ark-bitcoin/bark/-/releases/bark-0.8.1), including CPFP children, so cold storage or a third party can broadcast it later while the wallet is offline.
- [A watchtower for Ark](https://x.com/notgrubles/status/2121743384461164676) - Grubles's keyless tower broadcasts an offline wallet's presigned exit before its VTXOs expire, and in a signet test got the coins on chain 142 blocks early.
- [Wavelength is live on mainnet](https://lightning.engineering/posts/2026-10-23-wavelength-mainnet-launch/) - Lightning Labs' self-custodial payments toolkit for apps and agents, built on an "Ark-like settlement layer," launched as an alpha capped at 300,000 sats per account.

### Security

- [Bitcoin Core fast-tracks easy-to-find bugs](https://groups.google.com/g/bitcoindev/c/70VSp_ARD5Q) - Because LLMs make some bugs cheap to find, Core now skips the long embargo for those, backporting fixes to every maintained release and publishing advisories right away; the first three went out October 28.
- [Bitcoin Core 32.1](https://bitcoincore.org/en/releases/32.1/) - 32.0 was never released, so 32.1 ships the mempool-based fee estimator, 200 default connections, and v2 PSBTs by default, and with 29.x now end of life, Poinsot [disclosed three older bugs](https://groups.google.com/g/bitcoindev/c/tOLTRSOz87k) fixed in 29.2 and 30.0.
- [BIP300 bundle censorship](https://groups.google.com/g/bitcoindev/c/7P0_BHRAYQI) - Ori Newman shows a miner with 26% of hashrate could block drivechain withdrawals indefinitely by sending ALARM in every block, and suggests forbidding downvotes.
- [lnd v0.21.8-beta](https://github.com/lightningnetwork/lnd/releases/tag/v0.21.8-beta) - Names no vulnerability, but fixes a long list of bugs where funds are at stake, including HTLC recovery across reconnects and a restart that could drop acknowledged channel updates.
- [Core Lightning #9610](https://github.com/ElementsProject/lightning/issues/9610) - An HTLC of about 92 million BTC read as negative in a balance check and crashed `channeld`, so CLN now rejects amounts above 21 million BTC.
- [BTCPay hot wallets swept](https://decrypt.co/382324/btcpay-tells-merchants-to-switch-off-servers-amid-hot-wallet-attack-reports) - An attacker logging in as admin swept about $1.63 million from BTCPay hot wallets, apparently on servers running releases older than August's [2.4.2 fix](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/).
- [LNbits: "shut down immediately"](https://news.lnbits.com/news/lnbits-1-7-0-security-update) - After attacks drained funds, [v1.7.0](https://github.com/lnbits/lnbits/releases/tag/v1.7.0) fixes every earlier version, but operators must also reset wallet keys and rotate every credential stored in LNbits.
- [Binance's $6.3 billion hack](https://cointelegraph.com/news/recap-binances-record-63b-hack-unfolded) - Attackers that TRM Labs ties to North Korea's TraderTraitor group drained about $6.3 billion from Binance hot wallets on October 29, the largest crypto theft on record.

### Markets and Policy

- [Bitcoin's six-week slide](https://cryptobriefing.com/bitcoin-falls-23-november-2026-bear-market/) - Bitcoin fell from $81,004 the day after the midterms to about $62,000 by mid-November, six straight weekly losses and roughly half its all-time high.
- [Democrats sweep the midterms](https://cointelegraph.com/magazine/clarity-act-faces-new-test-under-democratic-congress) - Democrats take both chambers in January, so the stalled CLARITY Act dies on January 3 unless the lame-duck Senate passes it.
- [The SEC proposes a crypto custody framework that allows self-custody](https://www.sec.gov/newsroom/press-releases/2026-100-sec-proposal-would-address-how-investment-advisers-funds-can-custody-crypto-assets-under-federal) - The October 1 proposal would let registered advisers and funds self-custody crypto under certain circumstances and use state trust companies as qualified custodians.

### AI

- [Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude/fable) - Anthropic released Fable 5.2, scoring 49.1% on FrontierCode 2.0, alongside Mythos 5.2 for vetted organizations in its Life Sciences and Cyber Verification Programs.
- [GPT-6.2 Astra and GPT-6.2 Sol](https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531) - OpenAI's new frontier Astra and cheaper everyday Sol models, with Astra the first it has released at its "High" threshold for AI self-improvement. [Theo's essay on Astra](https://x.com/theo/status/2122760447103484410).
- [Claude Code: Code Mode](https://code.claude.com/docs/en/code-mode) - An experimental mode where Claude writes a short JavaScript program to run tool calls in parallel instead of calling them one at a time.
- [Bend 2: a language that blocks AI mistakes with proofs](https://bend-lang.com) - Victor Taelin's language for agent-written code, where a proof checker rejects any change that breaks the rules declared in `LAWS.bend`.
- [Numes: end-to-end encrypted inference, payable in sats](https://x.com/callebtc/status/2121244678351687944) - The [Numes](https://numes.ai) inference marketplace added [encrypted models](https://numes.ai/docs/inference/encrypted), with guarantees that vary by provider, and accepts payment in sats.

### Just for Fun

- [Voyager 1 is one light-day from Earth](https://www.cnn.com/2026/11/18/science/voyager-1-light-day) - This morning Voyager 1 became the first human-made object to reach one light-day from Earth, 49 years after its 1977 launch.
- [We made the bitcoin-dev mailing list readable](https://delvingbitcoin.org/t/we-made-the-bitcoin-dev-mailing-list-readable-15-years-24-699-messages/2985) - A searchable archive of all 24,699 messages from 15 years of the bitcoin-dev mailing list.
- [Multiplication in Tapscript today: 371 bytes, no soft fork](https://delvingbitcoin.org/t/multiplication-in-tapscript-today-371-bytes-no-soft-fork/3010) - With `OP_MUL` disabled since 2010, Laz1m0v built multiplication from `OP_ADD` and shifts in 371 bytes of script, backed by a 793-line Rocq proof.
