---
date: '2026-09-16'
title: 'Bitcoin Socratic Seminar #54'
type: Doc
---

![Bitcoin Socratic Seminar #54](/bitdevs-socratic-seminar-2026.jpg)

It's almost time for <a href="https://www.meetup.com/atlbitlab/events/315044444/">Bitcoin Socratic Seminar #54</a>!

## What is a Socratic Seminar?

Inspired by other BitDevs meetups around the US, our Socratic Seminar events are formatted to foster debate, information sharing and lively discussion.

1. Discussion topics are provided ahead of the event
2. The event moderator(s) leads the audience through the topics
3. Raise your hand to grab the mic and participate in the conversation
4. We go to a bar afterwards

We follow <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">the Chatham House Rule</a> at this event: you are free to use the information you receive, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.

## Logistics

On Wednesday, September 16, we'll be meeting at ATL BitLab. Join our <a href="https://atlantabitdevs.org/telegram/" target="_blank">telegram channel</a> in case you need to ask for help finding us the night of the event.

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

- [Bitcoin Core mining templates enforce the Murch-Zawy rule (BIP54)](https://github.com/bitcoin/bitcoin/pull/35949) - A merged change makes mining templates respect BIP54's timestamp floor at the end of a difficulty period, addressing a clock-skew edge case that could otherwise prevent a node from building a valid template, especially on test networks with volatile hashrates.

### Lightning

- [LND adds BOLT12 Merkle trees and BIP-340 message signatures](https://github.com/lightningnetwork/lnd/pull/11061) - LND merged Merkle tree construction and Schnorr signing and verification for BOLT12 invoice requests and invoices, rejecting invalid signatures when reading messages and checking the implementation against upstream test vectors.

### AI

- [Between Us: everyday stories about Bitcoin and AI](https://www.betweenusstories.com/) - Between Us collects firsthand accounts of how Bitcoin and AI affect people's lives. Maintainer Mo is looking for nontechnical people to share how they use these tools.
