[Skip to content](index.html@p=240.html#content)

[![Atlanta BitDevs logo](content/uploads/2021/10/ColorColor-
SizeCondensed.png)](index.html)

[Atlanta BitDevs](index.html)

Free & Open Bitcoin Education in Atlanta

Menu  Close

  * [Home](index.html)
  * [About](index.html@p=6.html)
  * [Meetup](https://www.meetup.com/atlantabitdevs/)
  * [Telegram](index.html@p=62.html)
  * [Contact](index.html@p=7.html)

# Bitcoin Lightning Privacy: Routing Analysis

![](content/uploads/2023/01/ATLBitDevs_2023-01-18_lightning-
privacy-1568x882.jpg)

We're [meeting
tonight](https://www.meetup.com/atlantabitdevs/events/290912698/) to discuss
the [Routing Analysis](https://lightningprivacy.com/en/routing-analysis)
chapter of [Lightning Privacy
Research](https://lightningprivacy.com/en/introduction). Here are some notes
to help prepare you for the discussion!

NOTE: This is just Stephen sharing his notes with you and not actually a well
thought-out or spellchecked instructional plan. 🙃

## Lightning Privacy Introduction

<https://lightningprivacy.com/en/introduction>

  * Bitcoin Layer 1 - all TXes visible on a public blockchain
  * Lightning (Layer 2) - No central ledger, peer-to-peer

### Problems

  * When a LN payment is associated with a BTC TX
  * P2P LN nodes know certain payment details
  * Highly connected LN nodes see a larger percent of network

### ❓ Questions

What is an anonymity set?

## Routing Analysis

<https://lightningprivacy.com/en/routing-analysis>

  * LN uses onion routing for a certain amount of source and destination privacy

### ❓ Questions

How is LN onion routing similar to TOR? How is it different?

  * Problem statement - there’s situations where the sender and receiver can be learned by routing nodes
    * Some scenarios allow routers to infer this info
    * A single actor controlling multiple nodes can correlate payment info

### ❓ Questions

What is an LSP? How might using an LSP affect privacy?

  * HTLCs - using the same payment hash each time can affect privacy
  * Wormhole attack - allows dishonest users to steal routing fees from honest users along a payment path - outlined in this paper: [](https://eprint.iacr.org/2018/472.pdf)<https://eprint.iacr.org/2018/472.pdf>
    * Basically, 2 malicious nodes (Mike and Mallory) are on the same payment route and collaborate
    * Normal behavior: nodes pass the preimage back to the prior node to unwind HTLCs
    * Evil behavior: Mike passes preimage back to Mallory, skipping all the nodes in between, and M & M take the routing fees of every node that was skipped
  * PTLCs might fix this
    * PTLCs explained on SuredBits - [](https://suredbits.com/payment-points-part-1/#references)<https://suredbits.com/payment-points-part-1/#references>
  * Timing delays - basically, estimating how far away source of destination of a payment is by how long it takes to settle
    * Top nodes can perform timing analysis on the majority of payments [](https://arxiv.org/pdf/2006.12143.pdf)<https://arxiv.org/pdf/2006.12143.pdf>
    * What if you run multiple nodes, and you route a payment for amount X, and then milliseconds later your other nodes routes a payment for slightly less than amount X.
    * What if average payment time between your node and neighbor is 100ms? If you route a payment to tyour neighbor and the HTLC or PTLC is fulfilled in about 100ms, you can assume your neighbor was the final hop.

### ❓ Questions

Should nodes add a random delay to fix timing analysis? It must be 2-3x delay
to be meaningful, but does this affect usability of the LN? (See Peter Todd’s
comment on [opting into slower payments for the sake of
privacy](https://lists.linuxfoundation.org/pipermail/lightning-
dev/2022-June/003621.html))

  * Random delay could be neat, but isn’t enforceable
  * MPP - Multipath payments
  * Randomize them to improve them
  * Multipath improves privacy
  * Randomizing the multipath and multiple shards to each node improves further
  * Splinter payments - MPP initiates midway through route
  * Splinter is theoretical atm
    * Protocol change needed?
    * Can splintering be enforced?
  * Longer paths?
    * 6 degress of sep
    * Go beyond 9 hops
  * Analyzing multipath payments
    * Less info can be gleaned (dont know full payment amount)
    * Anonymity set increases if more folks use MPP
      * Thought to self: reminds of CoinJoins in a way. Could people route MPPs with preset denominations to improve privacy?

### ❓ Questions

  * What are positives for implementing the author’s suggestions?
  * What are negatives for these suggestions?
  * Implementation notes
    * PTLCs - no progress has been made since taproot softfork
    * Timing delays - no active work being done to the knowledge of the authors
    * MPP is possible today. Splintering has not been discussed before.

[](https://www.meetup.com/atlantabitdevs/events/290912698/attendees/)

Published January 18, 2023By [Stephen DeLorme](author/stephen/index.html)

Categorized as [Reading Groups](category/reading-groups/index.html) Tagged
[bitcoin](tag/bitcoin/index.html), [lightning](tag/lightning/index.html),
[privacy](tag/privacy/index.html)

## Post navigation

[Previous post

Nostr: a protocol for a censorship-resistant social network

](index.html@p=236.html)

[Next post

Bitcoin Socratic Seminar #14

](index.html@p=246.html)

Search

Search

## Recent Posts

  * [Bitcoin Socratic Seminar #20](index.html@p=316.html)
  * [Are open source AI models the future?](index.html@p=308.html)
  * [Bitcoin Socratic Seminar #19](index.html@p=300.html)
  * [Bitcoin Socratic Seminar #18](index.html@p=293.html)
  * [Bitcoin Socratic Seminar #17](index.html@p=284.html)

## Recent Comments

No comments to show.

## Archives

  * [July 2023](2023/07/index.html)
  * [June 2023](2023/06/index.html)
  * [May 2023](2023/05/index.html)
  * [April 2023](2023/04/index.html)
  * [March 2023](2023/03/index.html)
  * [February 2023](2023/02/index.html)
  * [January 2023](2023/01/index.html)
  * [November 2022](2022/11/index.html)
  * [October 2022](2022/10/index.html)
  * [September 2022](2022/09/index.html)
  * [July 2022](2022/07/index.html)
  * [June 2022](2022/06/index.html)
  * [May 2022](2022/05/index.html)
  * [April 2022](2022/04/index.html)
  * [March 2022](2022/03/index.html)
  * [February 2022](2022/02/index.html)
  * [January 2022](2022/01/index.html)
  * [November 2021](2021/11/index.html)
  * [October 2021](2021/10/index.html)
  * [September 2021](2021/09/index.html)

## Categories

  * [Reading Groups](category/reading-groups/index.html)
  * [Socratic Seminars](category/socratic-seminars/index.html)

  * [Twitter](https://twitter.com/atlantabitdevs)

[![Atlanta BitDevs logo](content/uploads/2021/10/ColorColor-
SizeCondensed.png)](index.html)

Proudly powered by [WordPress](https://wordpress.org/).

