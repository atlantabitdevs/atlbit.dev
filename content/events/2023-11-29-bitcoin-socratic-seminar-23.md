---
date: '2023-11-29'
title: 'Bitcoin Socratic Seminar #23'
type: Doc
---

![Bitcoin Socratic Seminar #23](/bitcoin-socratic-seminar-23.jpg)

It’s almost time for <a href="https://www.meetup.com/atlantabitdevs/events/296345934/">Bitcoin Socratic Seminar #23</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events
are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

## Logistics for Tonight

Tonight we'll be at our usual spot at NCR. Follow the parking instructions <a href="https://atlantabitdevs.org/parking-instructions-for-ncr/" target="_blank" rel="noreferrer">here</a>.

## Topics

### 🧡 Bitcoin

#### 💻 BitVM

- <a href="https://x.com/robin_linus/status/1721969594686926935?s=20" target="_blank" rel="noreferrer">Robin Linus broadcasts a transactions with a Blake3 Hash Lock implemented in Bitcoin Script</a>
- <a href="https://x.com/robin_linus/status/1723343871067804060?s=20" target="_blank" rel="noreferrer">Robin Linus releases BitStream paper: file hosting for bitcoin</a>
- <a href="https://twitter.com/super_testnet/status/1726772975544807913" target="_blank" rel="noreferrer">BitVM SHA256 prover</a>

#### ⛏️ Mining

<a href="https://bitcoinmagazine.com/business/demand-launches-worlds-first-stratum-v2-bitcoin-mining-pool" target="_blank" rel="noreferrer">DEMAND: First Stratum V2 Mining Pool</a>

##### 🌊 Ocean

The Ocean mining pool company was announced today at a conference they held at a Barefoot Mining location in South Carolina. Luke Dashjr is the founder of the company.

[Ocean Website](https://ocean.xyz/)

[Message from OCEAN founder Luke Dashjr](https://ocean.xyz/about)

### ⚡️ Lightning

[Solving subscriptions on Bitcoin, one zap at a time](https://blog.mutinywallet.com/solving-subscriptions-on-bitcoin-one-zap-at-a-time/)

[\[Lightning-dev\] Lightning Address in a Bolt 12 world](https://lists.linuxfoundation.org/pipermail/lightning-dev/2023-November/004204.html)

#### 🏺 Zeus &amp; Mutiny

Zeus wallet launched a new beta version that contains an embedded node, multi-LSP support, simple taproot channels, and a self-custodial lightning address.

[The ZEUS v0.8.0 open beta is here](https://blog.zeusln.com/zeus-v0-8-0-open-beta/)

The self-custodial lightning address is an implementation of an idea called Zaplocker.

[Zaplocker](https://github.com/supertestnet/zaplocker)

This <a href="https://twitter.com/TheBlueMatt/status/1716848494554595526" target="_blank" rel="noreferrer">received some criticism</a> for relying on HODL invoices, which can tie up liquidity along an entire route for a long time until the payment is finally settled.

As an example, there were issues where Mutiny Wallet users experienced channel force closures when trying to pay to the Zeus lightning addresses. This issue was further compounded when some users did not receive the funds back to their on-chain wallet after the force closure, due to a bug with the wallet broadcasting incorrect state and the LSP sewwping the funds. Keep in mind that this discussion involves a lot of different viewpoints and back-and-forth discussion.

[Mutiny Wallet forced closed, on-chain balance zero](https://stacker.news/items/315309)

As a result of the increase in force closes, Mutiny made this announcement:

> We have recently disabled the ability to zap ZEUS wallet users from Mutiny. You may still pay their invoices or LN addresses normally but a big problem we were seeing was force closed channels due to stuck payments to Zeus due to their work arounds with locked payments.

[Mutiny disables zaps to Zeus users](https://njump.me/nevent1qqsthlsymdheuj8tdcxwzxdz5y5y7aqhdedw7jzkw7rh6m3s5x05mtspp4mhxue69uhkummn9ekx7mqpzemhxue69uhhyetvv9ujumn0wd68ytnzv9hxgqghwaehxw309ahx7um5wghxvmt59emkj73wvf5h5qgkwaehxw309aex2mrp0yh8qunfd4skctnwv46qzrmhwden5te0dehhxarj9ekk7mgpzpmhxue69uhkummnw3ezuamfdejsz9rhwden5te0wfjkccte9ehx7um5wghxyecprpmhxue69uhhqatzd35kxtnjv4kxz7tfdenju6t0qyf8wumn8ghj7mmxve3ksctfdch8qatzqgsd79ejwuvz7v246danxqs3hgw7f2q4qrqz6x27je8er0nhfmykwzq4scury)

Supertestnet, the author of the Zaplocker spec that Zeus uses, offered this response:

> As the guy who made the spec that Zeus Pay is using to enable async payments, I support Mutiny's decision. I think disabling payments to destinations that are known to use hodl invoices is the right move for mobile nodes until some method for mobile nodes to safely pay them is discovered.

[Supertestnet responds to the Mutiny announcement](https://njump.me/nevent1qqs2d5q8f9c4tmzvrzg47d0gn7pdhhzjtc45d7dpp5x22v8zesf8pcgpp4mhxue69uhkummn9ekx7mqppamhxue69uhhxmmvda3k7tnwdsq3vamnwvaz7tmjv4kxz7fwdehhxarj9e3xzmnyqyf8wumn8ghj7mmxve3ksctfdch8qatzqythwumn8ghj7mn0wd68ytnxd46zuamf0ghxy6t6qyw8wumn8ghj7mn0wd68ytnzd96xxmmfdejhytnnda3kjctvqy28wumn8ghj7un9d3shjtnyv9kh2uewd9hszrmhwden5te0dehhxarj9ekk7mgprpmhxue69uhhqatzd35kxtnjv4kxz7tfdenju6t0qy28wumn8ghj7un9d3shjtnwdaehgu3wvfnsygpps055wkzgr583ynaaj0zkej4ytel9gh8whr2jsj8esfflf9aew5yw2p3e)

However, Mutiny's decision received some criticism on Nostr. Mutiny ended up adding in a special setting where users can opt-in to paying zaps to hodl invoices (the technology underlying how Zaplocker works).

> Freedom to get rekt. If you want to potentially pay outrageous on chain fees due to a stuck zap to ZEUS - you can go right ahead. It's in the admin section of the settings.

[Freedom to get rekt](https://njump.me/nevent1qqs2p0c5r6h597zvd5mka5k3avsnc93j5hehm6gp3s76t4sth6mrk0cpzemhxue69uhhyetvv9ujuurjd9kkzmpwdejhgqgdwaehxw309ahx7uewd3hkcqgswaehxw309ahx7um5wgh8w6twv5q3gamnwvaz7tmjv4kxz7fwdehhxarj9e3xwqgcwaehxw309ac82cnvd93juun9d3shj6twvuhxjmcpzfmhxue69uhk7enxvd5xz6tw9ec82cszyr03wvnhrqhnz4wn0vesyyd6rhj2s9gqcqk3jh5kf7gmua6we9nssvkva35)

### 🟣 Nostr

[Kind.io - proof-of-concept for NIP-41 to migrate from compromised Nostr keys](https://njump.me/nevent1qqsphpf7jgffzvf5a46lp5l7vhxsqf8snv409w3tttafmnhztpp4usgpp4mhxue69uhkummn9ekx7mqpz4mhxue69uhk2er9dchxummnw3ezumrpdejqzynhwden5te0wfjkccte9enrw73wd9hsz9nhwden5te0v96xcctn9ehx7um5wghxcctwvsq3gamnwvaz7tmjv4kxz7fwdehhxarj9e3xwqgswaehxw309ahx7um5wgh8w6twv5q3vamnwvaz7tmjv4kxz7fwwpexjmtpdshxuet5qyv8wumn8ghj7ur4vfkxjcewwfjkccted9hxwtnfduq3gamnwvaz7tmjv4kxz7fwv3sk6atn9e5k7qg0waehxw309ahx7um5wghx6mmdqgs04xzt6ldm9qhs0ctw0t58kf4z57umjzmjg6jywu0seadwtqqc75smspjvq)

[Nostrdb](http://git.jb55.com/nostrdb/file/README.md.html)
