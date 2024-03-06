---
date: '2024-03-06'
title: 'Mastering Bitcoin: Chapters 5 & 6'
type: Doc
---

![Mastering Bitcoin](/mastering-bitcoin-5-6.jpg)

Join our vibrant reading discussion group as we dive into <a href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1098150090?crid=3FFD1FN2H7TZF&keywords=mastering+bitcoin+3rd+edition&qid=1703963363&sprefix=mastering+bitcoin,aps,153&sr=8-1&ufe=app_do:amzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc" target="_blank">Mastering Bitcoin</a>, the ultimate technical guide to understanding Bitcoin. Perfect for those eager to deeply grasp the intricacies of Bitcoin, this group combines a fun and supportive environment for learning complex technical concepts.

Each week, we'll explore a different pair of chapters, enriching your self-reading experience. We'll provide thought-provoking questions ahead of each session to guide your reading and fuel engaging discussions. Our meetups are not just about discussing the book; they're about building a community of Bitcoin enthusiasts and builders.

Discover, discuss, and delve into the world of Bitcoin with us. Your journey towards mastering Bitcoin starts here!

<a href="https://www.meetup.com/atlantabitdevs/events/298230410/" target="_blank">RSVP for Meetup Here</a>

## How It Works

We recommend that you read up on the <a href="/page/mastering-bitcoin" target="_blank">event format</a> before you attend.

## This Session

In this session, <a href="https://twitter.com/nonni_io" target="_blank">Bryan Nonni</a> will lead us through a discussion of:

- Chapter 5: Wallet Recovery
- Chapter 6: Transactions

### Study Questions

These questions are provided to help guide your thinking as read the material. We'll try to answer these together when we meet to discuss the chapter.

#### Chapter 5

- What is a bitcoin wallet? Describe the miconceptions and the components.
- What is the difference between a "wallet database" and a "wallet application"?
- What is the trade off of onle using a single public key?
- Describe the difference between independent / nondeterministic and deterministic key generation.
- What are the different types of recovery codes in wide use today? List some advantages and disagvantages.
- Which recovery code schemes allow for an optional passphrase?
- What are the 4 components needed to recover funds froim data loss? Why is the fourth needed?
- Are version numbers important for recovery code schemes?
- Are 12 words (128 bits of entropy) enough? What are advantages and disadvantages of using 12 vs. 24 words?
- Advantages and disadvantages of using a passphrase.
- Any questions about generating HD wallet from seed and seed from recovery code?
- What is gap limit and how can it be handled?
- What is the difference between child and hardened child addresses? Why are hardened important?
- Is openly sharing your xpub bad?

#### Chapter 6

##### General

- Difference between v1 and v2 transactions?
- What is the purpose of the marker and flag fields?
- Each input in a transaction must contain what? What does each of them do?
- How do full nodes use the previous output data?
- How does Bitcoin Core track of all previous outputs?
- What was the originally intended purpose of the sequence field as explained by Satoshi?
- What are the problems associated with this use of the sequence field?
- What ended up replacing the inteded mechanism of the sequence field?
- What constraint did BIP68 add to the sequence field?
- What are the min/max values allowed in the amount field of an output? What are the practicality of these numbers?
- What are uneconomical outputs and what are the problems associated with them?
- What are these outputs called? What protects full nodes from these outputs? Explain. Any exceptions?
- What makes OP_RETURN transactions special?
- Is there a min/max for output scripts? How and when are these enforced?
- Can anyone recall examples of an output script size that takes up almost a whole tx? How about a tx that almost takes up a whole block?

##### Segwit

Links:

- [Chaincode Seminar Week 2: Segwit](https://chaincode.gitbook.io/seminars/bitcoin-protocol-development/segwit)
- [Chaincode Seminar Notes](https://docs.google.com/document/d/1uwHZ8zYnEVOAUaFv14_qngy9j3QK5WLctsTtivzqCGk/edit#heading=h.iwqqf2id6ggo)
- [Segwit Video w/ Jimmy Song](https://www.youtube.com/watch?v=Txfy2mFe16A)

- What is a "witness" in bitcoin?
- Why are they important?
- Why do they exist?
- What problems do they solve?
- How are they used in bitcoin?
- How do they allow users to spend UTXOs?
- What problems did Segwit solve?
- What is tx malleability, how did segwit solve this and why is it important?
- What is an anyone-can-spend output script and how does it allow us to soft-fork Segwit into Bitcoin?
- What defines a segwit output script template?
- What are the two types of templates? How do they work?
-
