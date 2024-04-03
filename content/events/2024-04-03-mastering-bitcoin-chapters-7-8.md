---
date: '2024-04-03'
title: 'Mastering Bitcoin: Chapters 7 & 8'
type: Doc
---

![Mastering Bitcoin](/mastering-bitcoin-7-8.jpg)

Join our vibrant reading discussion group as we dive into <a href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1098150090?crid=3FFD1FN2H7TZF&keywords=mastering+bitcoin+3rd+edition&qid=1703963363&sprefix=mastering+bitcoin,aps,153&sr=8-1&ufe=app_do:amzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc" target="_blank">Mastering Bitcoin</a>, the ultimate technical guide to understanding Bitcoin. Perfect for those eager to deeply grasp the intricacies of Bitcoin, this group combines a fun and supportive environment for learning complex technical concepts.

Each week, we'll explore a different pair of chapters, enriching your self-reading experience. We'll provide thought-provoking questions ahead of each session to guide your reading and fuel engaging discussions. Our meetups are not just about discussing the book; they're about building a community of Bitcoin enthusiasts and builders.

Discover, discuss, and delve into the world of Bitcoin with us. Your journey towards mastering Bitcoin starts here!

<a href="https://www.meetup.com/atlantabitdevs/events/298230415/" target="_blank">RSVP for Meetup Here</a>

## How It Works

We recommend that you read up on the <a href="/page/mastering-bitcoin" target="_blank">event format</a> before you attend.

## This Session

In this session, <a href="https://twitter.com/nonni_io" target="_blank">Bryan Nonni</a> will lead us through a discussion of:

- Chapter 7: Authorization & Authentication
- Chapter 8: Digital Signatures

### Study Questions

These questions are provided to help guide your thinking as read the material. We'll try to answer these together when we meet to discuss the chapter.

#### Chapter 7: Authorization & Authentication

- Explain the difference between authorization and authentication in bitcoin
- What is Script? Describe its attributes.
- What is statelessness and why is it important?
- What is turing completeness? Why is this an important concept?
- Is Script turing complete? How does this impact bitcoin?
- What are the advantages and disadvantages of Script?
- Walk through an example of running the P2PKH script
- What is the "oddity" in OP_CHECKMULTISIG?
- Can it be "fixed"? Why or why not? Explain the "fix"
- Why is it described as an "oddity" and not a bug or future upgrade?
- Why does "bare multisig" suck? ;)
- How does P2SH improve base multisig?
- For P2SH, what is initially on-chain and what is on-chain later?
- What are the advantages and disadvantages of P2SH?
- What are "fake UTXOs" and how was it fixed?
- How can someone "burn" bitcoins (unspendable)?
- How does OP_RETURN work?
- What is the difference between a timelock on a tx vs. an output?
- Why is OP_DROP included in the script for CLTV and CSV?
- Explain the differences between tx time lock, CLTV and CSV?
- Why does conditional logic in Script look backwards?
- When to use OP_IF vs. VERIFY control flow in a script?
- What are P2WPKH and P2WSH? How do they work? How do they differ from P2PKH and P2SH? Why are they better?
- What is segwit v0 and segwit v1?
- What is the difference between native and wrapped/nested segwit?
- Why is wrapped/nested used?
- What are MASTs? Explain what that is and why its better than conditional logic (OP_IF)?
- Let's walk through a diagram of a MAST in the book.
- What was the original MAST and does it differ from the MAST we use today?
- What is taptweak/key tweaking? Why is it important / beneficial?
- What is a scriptless multisig? What is the process for achieving this?
- Difference between script and scriptless multisignatures?
- What are the downsides of scriptless multisigs?
- What is Taproot? What are its key attributes? Why is it beneficial? How does it work (at a highlevel)?
- Any significant downides of Taproot? Why is this the case?
- What is an internal key vs. a taproot output key?
- What is a keypath spend vs. a script path spend?
- What is tapscript and what are its major differences from script?

#### Chapter 8: Digital Signatures

- What are the 3 purposes of signatures in Bitcoin?
- Why are signatures unique and important?
- Where do signatures "live"?
- How is a signature produced?
- What is needed to verify a signature?
- What are the "messages" being signed in bitcoin?
- What is SIGHASH? List the types and describe their function.
- How can a bitcoin node distinguish between different SIGHASH types?
- What was the quadratic sighash problem? How did BIP143 fix this?
- What is the importance of ANYONECANPAY? How is it used to enable segwit?
- Explain the advantages of schnorr and corresponding disadvantages of ECDSA?

Supporting Links

1. <a href="https://docs.google.com/document/d/1mMIF0WxJXkEckZBq23UC_j1EiQqQoCOrZedgj7_2p0Q/edit#heading=h.repnjp7ccvzy" _target="blank">Chaincode Seminar Week 5: Script, Schnorr, Taproot</a>
2. <a href="https://docs.google.com/document/d/1uwHZ8zYnEVOAUaFv14_qngy9j3QK5WLctsTtivzqCGk/edit" _target="blank">Chaincode Seminar Week 2: Quadratic Sighash Problem, Segwit</a>
3. <a href="https://www.youtube.com/watch?v=Txfy2mFe16A" target="_blank">Segwit Video w/ Jimmy Song</a>
