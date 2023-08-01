---
date: "2022-06-01"
title: "Bitcoin Socratic Seminar #7"
type: Doc
---
# Bitcoin Socratic Seminar #7

![](content/uploads/2022/05/ATLBitDevs_2022-06-01_socratic-
seminar-1568x882.jpg)

It’s almost time for [Bitcoin Socratic Seminar
#7](https://www.meetup.com/atlantabitdevs/events/285545781/)!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events
are formatted to foster debate, information sharing and lively discussion.

  1. Discussion topics are provided ahead of the event
  2. The event moderator(s) leads the audience through the topics
  3. Raise your hand to grab the mic and participate in the conversation
  4. We go to a bar afterwards

## Opening Presentation

We'll start off with special announcement for the Atlanta community.

## Discussion Topics

![Harsha Goli](content/uploads/2022/05/ATLBitDevs_2022-06-01_socratic-
seminar_harsha_simplified-1024x576.jpg)

Then, we'll have an open discussion about the bitcoin lightning network with
[Harsha Goli](https://twitter.com/_arshbot), an engineer at [Lightning
Labs](https://lightning.engineering/). What does lightning do? Why does it
matter? What are the latest technological advancements in lightning? And what
new things should be looking out for?

### Intro to the Lightning Network

We'll do a brief catch-up on what the lightning network is and describe some
of the current issues that need to be working on in lightning.

If you're new to lightning network, consider looking at these resources:

[Simplified overview of liquidity on the lightning network for product
designers](https://bitcoin.design/guide/how-it-works/liquidity/)

Technical overview of lightning from Andreas Antonopoulos:

### CashApp supports zero amount invoices

A zero-amount invoice is literally a lightning invoice with no amount defined.
This means the sender can pay whatever value to the invoice they like.

Zero-amount invoices have been problematic in Lightning. Previously, there
were security vulnerabilities. Those have been fixed with most
implementations. However, not every lightning wallet. offers support for zero-
amount. While zero-amount invoices can still only be safely used once, they
arguably provide a better UX by allowing recipients to not have to define an
amount if they don't care about the amount.

CashApp recently announced support for zero-amount invoices here:

{'>'} [@CashApp](https://twitter.com/CashApp?ref_src=twsrc%5Etfw) now supports
{'>'} scanning zero-amount lightning invoices ⚡️
{'>'} [pic.twitter.com/RqV6PFtOAm](https://t.co/RqV6PFtOAm)
{'>'}
{'>'} -- hugo (@hugojmd) [May 16,
{'>'} 2022](https://twitter.com/hugojmd/status/1526337354570825728?ref_src=twsrc%5Etfw)

### Add the ability to hold HTLCs before forwarding

A lightning node needs to be online in order top receive a payment. This can
be problematic for lightning nodes running on mobile devices, because the node
will effectively go offline when the user puts their phone to sleep and places
in their pocket, purse, etc. This can become even trickier when both the
sender and recipient are lightning nodes on mobile devices.

[Matt Corallo](https://twitter.com/TheBlueMatt) proposed a solution for this.
The basic idea involves letting LSPs (Lightning Service Providers) temporarily
hold the HTLC (an in-flight lightning payment) while the recipient is offline.
The HTLC is released when the recipient's LSP passes a specific nonce back to
the sender's LSP.

  * Read [Matt's mailing list post](https://lists.linuxfoundation.org/pipermail/lightning-dev/2021-October/003307.html)
  * See his [pull request to update BOLT-02 and BOLT-09](https://github.com/lightning/bolts/pull/989)

### Pickhardt Payments

When sending a lightning payment, a node must calculate a path through the
lightning network that will both reach the intended recipient and has enough
liquidity to route the payment. Finding a path may become a more complicated
problem as the lightning network continues to grow, both in terms of
mathematical complexity and finding enough liquidity.

Pickhardt Payments are a potential solution to this. [Back in
March](index.html@p=101.html), we discussed how Rene Pickhardt computed a
multi-path payment flow over the Lightning network in 0.65 seconds
[[1](https://lists.linuxfoundation.org/pipermail/lightning-
dev/2022-March/003510.html),[2](https://twitter.com/renepickhardt/status/1501898812620685318?s=12)].

In the past month, there has been a lot of momentum for this new pathfinding
method.

  * [Invitation to test our research on probabilistic and optimal payment flows](https://lists.linuxfoundation.org/pipermail/lightning-dev/2022-May/003582.html)
  * [Pickhardt Payments implemented in lnd-manageJ](https://lists.linuxfoundation.org/pipermail/lightning-dev/2022-May/003583.html)

### TARO - Tokens on Lightning

TARO is Taproot Asset Representation Overlay. Lightning Labs proposed this
idea around the time of Bitcoin 2022. This idea utilizes taproot to represent
assets on bitcoin. These assets could then be shared over the lightning
network.

For technical details, see the [Lightning Dev Mailing List
post](https://lists.linuxfoundation.org/pipermail/lightning-
dev/2022-April/003539.html).

For a higher level overview, read [this Bitcoin Magazine
article](https://bitcoinmagazine.com/technical/how-bitcoin-taro-protocol-
works).

Watch this video if you'd like to hear
[Roasbeef](https://twitter.com/roasbeef) explain TARO.

### Miscellaneous

  * [MyCitadel - new bitcoin, lightning, RGB wallet](https://mycitadel.io/)
  * [Upcoming LND v0.15.0 will create and spend from Taproot addresses](https://github.com/lightningnetwork/lnd/blob/master/docs/release-notes/release-notes-0.15.0.md)
  * [Tauros adds lightning support](https://tauros.io/)
  * [Blocktank LSP launches](https://twitter.com/Synonym_to/status/1519282079007223808)

Published May 31, 2022By [Stephen DeLorme](author/stephen/index.html)

Categorized as [Socratic Seminars](category/socratic-seminars/index.html)
Tagged [bitcoin](tag/bitcoin/index.html),
[lightning](tag/lightning/index.html), [taproot](tag/taproot/index.html),
[taro](tag/taro/index.html)

#