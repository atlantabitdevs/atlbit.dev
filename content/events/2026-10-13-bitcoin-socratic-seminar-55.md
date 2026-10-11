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

### Lightning

#### Security

- [Blink's September 19 attack: post-mortem and 50% bounty](https://www.blink.sv/blog/sept-19-attack-postmortem-and-bounty) - Blink's OAuth consent page accepted permissions supplied by the browser, and its admin API accepted any live token without checking which client it was issued to. A free account could grant itself admin rights, a flaw open for about three years. The attacker changed contact details and withdrawal limits, then drained 6.61 BTC from 24 accounts on-chain and over Lightning. All nine targeted accounts with 2FA held. Shareholders restored every balance, and Blink offers 25% of anything recovered to finders plus 25% to circular economies.
- [Phase two: following the coins in public](https://www.blink.sv/blog/phase-two-following-the-coins-in-public) - Blink publishes a public tracker for the stolen coins and labels each link as proven, traced, probable, or third-party. It ties the same attacker to earlier Fedimint ecash redemptions, a Lightning node, and the October 5-6 exploit of Second's Ark server. A discussion prompt on custodial admin tooling and how much chain analysis can do once the coins have moved through a cross-chain swap.

### AI

- [Anthropic launches OSS Scanner](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source) - A free, opt-in service modeled on OSS-Fuzz that periodically scans enrolled open-source projects with Anthropic's frontier models. Reports include a proof of concept, an explanation, and a suggested fix where one exists. They are sent without human review, and Anthropic expects a true-positive rate above 90%. Should Bitcoin projects enroll, and who triages the reports?
- [Rewriting @OP_RETURN_Bot with an AI agent](https://x.com/benthecarman/status/2108651326641213554) - benthecarman had Claude Opus 5.5 rewrite the bot in Rust, add LDK and BOLT12 support, and redesign its site in about an hour of his own time, with the agent running in the background.
