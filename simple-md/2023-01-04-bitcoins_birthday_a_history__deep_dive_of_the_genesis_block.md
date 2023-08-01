---
date: "2023-01-04"
title: "Bitcoin’s Birthday: a History & Deep Dive of the Genesis Block"
type: Doc
---
# Bitcoin’s Birthday: a History & Deep Dive of the Genesis Block

![](content/uploads/2023/01/ATLBitDevs_2023-01-04_birthday-1-1568x882.jpg)

We[ met up on January
4](https://www.meetup.com/atlantabitdevs/events/290298846/) to talk about the
bitcoin genesis block. Here are Stephen's notes he prepared for the discussion
group.

* * *

Yesterday marked the 14th anniversary of the bitcoin genesis block, which is
timestamped January 3, 2009.

## What is a genesis block?

A genesis block is the first block in a blockchain. It's unique because it
does not reference a previous block and because it is typically hardcoded into
node software. Bitcoin's genesis block has several more unique qualities.

### Questions

Why
[hardcode](https://sourceforge.net/p/bitcoin/code/133/tree/trunk/main.cpp#l1613)
it into the software?

## Let's look at the bitcoin genesis block

You can find the genesis block in a block explorer by searching for "0". Here
it is on
[mempool.space](https://mempool.space/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f).

### Questions

What are some unique qualities to this block? _Hint: you don 't have to be too
technical to notice, just look at the [mempool.space](http://mempool.space)
page._

### Fun Fact

Bitcoin signet and Bitcoin testnet both share the same unique feature in their
genesis blocks, however, the block hashes are different.

## How do we know when the genesis block was mined?

The timestamp would be sufficient in a trusted scenario, but this is bitcoin.
The message in the coinbase transaction helps us to know that it would be
impossible to mine the block _before_ January 3, 2009. However, we don't have
precise evidence that it was mined on this date exactly.

  * October 31, 2008 - Satoshi [released the Bitcoin whitepaper](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html) to the [Cryptography mailing list](https://www.metzdowd.com/pipermail/cryptography/2008-October/thread.html).
  * January 8, 2009 - Satoshi [releases Bitcoin v0.1](https://www.metzdowd.com/pipermail/cryptography/2009-January/014994.html) to the [Cryptography mailing list](https://www.metzdowd.com/pipermail/cryptography/2009-January/thread.html).
  * January 9, 2009 - Satoshi [mines more blocks](https://mempool.space/block/000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd)
  * January 10, 2009 - [Hal Finney responds on the mailing list](https://www.metzdowd.com/pipermail/cryptography/2009-January/015004.html) and makes [the now famous tweet](https://twitter.com/halfin/status/1110302988)

### Question

Why is it that there is a 6 day gap between block 0 and block 1?

Nobody knows for certain, but there are theories:

  * Satoshi was inspired by the Times headline, and mined the first block with a timestamp in the past to match the headline.
  * Satoshi had difficulty mining the first block and so he had to mine the first block for 6 days, but kept the timestamp and message persistent through all the attempts.
  * Satoshi mined it on Jan 3, then spent the next 6 days testing the bitcoin software and network. He then trashed the test blocks and started fresh, re-using the January 3 genesis block (this is called the _prenet hypothesis_ ).

### Mysteries

[In this bitcointalk.org
post](https://bitcointalk.org/index.php?topic=172009.0), Sergio Demian Lerner
(future creator of the RSK sidechain) comments on some of this. He reasons
that Satoshi likely used a single CPU. He also points out that the genesis
block has a higher difficulty (43 zero bits instead of the 32 difficulty at
the time) and he calculates that if Satoshi mined for 6 days, he would have a
17% chance of mining this block. Why did Satoshi opt for this higher
difficulty? Did he get lucky? Did he use some massive computing
infrastructure? If so, why only use it on the first block? (This user,
however, [disputes that the extra leading zeroes are
significant](https://bitcointalk.org/index.php?topic=172009.msg59136085#msg59136085)).

Sergio also points out that there is no routine in Satoshi's source code for
generating a genesis block. Therefore, Satoshi was using some other software
to mine the block, though we don't know how different it was. Perhaps it was a
custom script written entirely for the purpose of mining the genesis block, or
perhaps he simply modified the main client's source code temporarily to mine
the first block.

### Prior work

Interestingly, Satoshi had actually been fiddling with the genesis back as far
back as 2008. This [man on bitcointalk.org shares some early bitcoin source
code](https://bitcointalk.org/index.php?topic=382374.0;all) which Satoshi
shared with him on November 16, 2008, a mere 2 weeks after the release of the
whitepaper. You can go back to the mailing list to find [Satoshi discussing
how he had been working on the source code for the past year and a
half](https://www.metzdowd.com/pipermail/cryptography/2008-November/014863.html),
and he mentions how he will share the "main files" with you by request.

## Satoshi's bitcoin

The genesis block coinbase tx spent to this address:
`_1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa_`

You can see the [address balance
here](https://www.blockchain.com/explorer/addresses/btc/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa).

Interestingly enough, the output is unspendable. This is because of how the
bitcoin client is coded. Bitcoin Core maintains a block database and a
transaction database, distinct from the raw block data stored on disk. If it
starts up and finds the block database empty, it insert the hardcoded genesis
block data. However, it skips adding the genesis coinbase to the transactions
database.

  * [Charles Hoskinson explains on Bitcoin StackExchange](https://bitcoin.stackexchange.com/questions/10009/why-can-t-the-genesis-block-coinbase-be-spent)
  * [Theymos explains on Reddit](https://www.reddit.com/r/Bitcoin/comments/1nc13r/the_first_50btc_block_reward_cant_be_spend_why/)
  * [Code that skips the genesis TX](https://github.com/bitcoin/bitcoin/blob/9546a977d354b2ec6cd8455538e68fe4ba343a44/src/main.cpp#L1668)

Was this an accidental oversight? Or did Satoshi feel it wasn't fair to claim
these coins since he mined them as the only network participant?

Nobody knows, as Satoshi disappeared before anyone noticed this quirk of the
genesis coinbase.

It is believed that other outputs belonging to this address are spendable,
assuming that Satoshi has the private key to this address. Even that is not
known.

### Wait, other outputs?

To this day, people are [still sending
outputs](https://mempool.space/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa) to
the genesis address to this day as tribute. Maybe [bitcoin is a
religion](https://bitcointalk.org/index.php?topic=172009.msg1790293#msg1790293)?

## So who was Satoshi?

It's interesting that in a comment [on this Stack
post,](https://bitcoin.stackexchange.com/questions/9773/how-do-you-make-a-
genesis-block) Bitcoin Core dev Pieter Wiulle remarks:

_{'>'} Even though the Genesis block (almost) satisfies all rules that other
blocks have to satisfy (and even more, see
[_bitcointalk.org/index.php?topic=172009.0_](https://bitcointalk.org/index.php?topic=172009.0)),
it is not actually validated by full nodes. It's just a hardcoded starting
point, and it would actually have worked just as well if it did not carry any
proof of work._

Did Satoshi know this and decide to mine the block anyway to send a message or
set some kind of precedent? Or was this an oversight, making him only human?

A scientist named Jens Ducrée wrote[ this scholarly
article](https://arxiv.org/pdf/2206.10257.pdf) diving into a lot of
circumstantial evidence about the identity of Satoshi. Did the Satoshi live in
the UK, giving him early access to the Times print edition? Or did Satoshi
have a close friend in the UK? Was he an individual genius or a team of
people? Where did he go after disappearing on December 12, 2010?

But most importantly: does Jens know how to use the spellchecker or work with
a proofreader?

### Question

Why disappear?

Published January 13, 2023By [Stephen DeLorme](author/stephen/index.html)

Categorized as [Reading Groups](category/reading-groups/index.html) Tagged
[bitcoin](tag/bitcoin/index.html), [reading group](tag/reading-
group/index.html)

#