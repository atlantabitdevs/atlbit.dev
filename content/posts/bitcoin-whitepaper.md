---
title: 'The Bitcoin Whitepaper'
date: '2023-07-23'
author: 'BitDevs Organizers'
image: 'new-bitdevs-default-alt-2.jpg'
---

The Bitcoin Whitepaper is recommended reading if you want to understand how the bitcoin protocol works. This paper outlines the fundamental principles of how Bitcoin works.

<a href="https://spiral.xyz/bitcoin.pdf">Read the Whitepaper</a>

Here's some key points from the Whitepaper.

## 1. Introduction

- Internet shopping mainly relies on banks and other financial institutions to process payments, but this system has issues, including high costs for small transactions and an inability to fully prevent fraud.
- The current online payment system also requires a lot of trust between buyers and sellers, which can lead to hassles, like needing to provide a lot of personal information.
- The proposed solution is a new way to make online payments that doesn't need banks. It allows people to transact directly with each other and provides a secure way to prevent fraud by making transactions hard to reverse.
- This new system also proposes a method to avoid "double-spending" (where someone tries to spend the same money twice) by keeping a secure record of transactions' order. This system would be secure as long as the majority of participants act honestly.

## 2. Transactions

- An electronic coin is described as a chain of digital signatures. The coin is transferred from one owner to the next through a process involving digital signatures and special codes, creating a verifiable chain of ownership.
- A key problem is the potential for "double-spending," where an owner spends the same coin more than once. The usual solution is a trusted central authority (like a bank or mint) that checks every transaction, but this means every transaction must go through them.
- Relying on a central authority creates a risk, as the whole money system depends on that single entity. If anything goes wrong with it, the entire system is jeopardized.
- A proposed solution involves creating a way for all participants to know about all transactions and agree on the order they happened in. This means everyone involved can independently verify the first and valid transaction, eliminating the need for a central authority.

## 3. Timestamp Server

- The proposed solution involves a timestamp server, which creates a unique 'stamp' that shows when a group of transactions (or items) happened.
- This 'stamp' is created by transforming the transactions into a special code, called a hash, and then publicly sharing this hash.
- Each 'stamp' includes the 'stamp' from the previous group of transactions. This creates a chain, with each new 'stamp' strengthening the validity of the ones before it.
- This process proves that the transactions must have happened at the time they were 'stamped', as the hash can only be created from existing data.

## 4. Proof-of-Work

- A peer-to-peer timestamp server (which stamps when a group of transactions happened) would use a 'proof-of-work' system. This system requires a computer to find a special value that, when transformed into a code (hashed), meets certain criteria.
- The 'proof-of-work' system helps prevent changes to previous transactions. Once a block of transactions meets the criteria, it can't be altered without redoing the work, and altering a block would require redoing all subsequent blocks.
- The 'proof-of-work' system is also used to ensure fairness in decision-making on the network. Instead of one vote per IP address (which could be manipulated), it operates on the principle of 'one-CPU-one-vote', making it harder to cheat.
- The difficulty of the 'proof-of-work' adjusts over time to compensate for faster hardware and changes in the number of people participating in the network. If transactions are processed too quickly, the difficulty increases, keeping the system balanced.

## 5. Network

- The network operates in steps: new transactions are shared with all nodes (participants in the network), each node gathers these into a 'block', then each node tries to find a 'proof-of-work' for its block. Once a 'proof-of-work' is found, that block is shared with all nodes.
- Nodes accept a new block only if every transaction within it is valid and not previously spent. Nodes show they accept a block by starting to create the next one, using a code from the accepted block.
- Nodes always consider the longest chain of blocks to be the correct one and will keep working to extend it. If two different versions of the next block are shared at the same time, nodes will work on the one they received first, but they'll save the other in case it ends up being part of the longest chain.
- New transactions don't need to reach every node, just many of them, to ensure they will be included in a block. If a node misses a block, it will request it when it gets the next block and realizes it's missing one.

## 6. Incentive

- The first transaction in each block starts a new coin owned by the creator of the block. This incentivizes participants (nodes) to support the network and also allows for new coins to enter circulation without needing a central authority.
- The process of adding new coins is likened to gold miners adding gold to circulation, here it is computer processing power and electricity being used instead of physical labor.
- Transaction fees can also contribute to the incentive for supporting the network. If a transaction's output value is less than its input value, the difference becomes a transaction fee added to the block's incentive value. After a certain amount of coins have been distributed, the system can rely entirely on transaction fees, making it free of inflation.
- This incentive system helps keep participants honest. Even if a participant with more processing power could cheat the system, it would likely be more profitable for them to adhere to the rules and gain more coins, rather than risking the system's integrity and their own potential wealth.

## 7. Reclaiming Disk Space

- Old transactions that are sufficiently "buried" under newer ones can be discarded to save disk space without affecting the hash of the block they were in, thanks to the use of a structure called a Merkle Tree.
- Only the root of this tree is included in the block's hash, so old blocks can be compressed by trimming off parts of the tree, and there's no need to store the interior hashes.
- A block header without any transactions would be about 80 bytes in size. If blocks are made every 10 minutes, this would add up to about 4.2MB of data per year.
- Given the typical RAM size of computer systems and the expected growth rate (as of 2008), storing these block headers should not be a significant problem, even if they need to be kept in memory.

## 8. Simplified Payment Verification

- Users can verify payments without running a full network node by only keeping a copy of the block headers of the longest proof-of-work chain, obtained by querying network nodes and receiving the associated Merkle branch.
- This verification process is dependent on honest nodes controlling the network. If an attacker overpowers the network, the simplified method of verification could be fooled by fabricated transactions.
- One way to mitigate this risk is by setting up alerts from network nodes when they detect an invalid block, prompting the user to download the full block and transactions to confirm the inconsistency.
- Businesses receiving frequent payments may want to run their own nodes for added security and faster verification.

## 9. Combining and Splitting Value

- To enable efficient transfers, transactions can have multiple inputs and outputs, allowing the value to be split and combined, rather than handling each coin individually.
- Typically, a transaction will have a single input from a larger previous transaction or multiple inputs combining smaller amounts, and at most two outputs, one for the payment and one for returning the change to the sender.
- Complex situations where a transaction depends on several others, which in turn depend on many more (fan-out), do not pose a problem because there's no need to extract a complete standalone copy of a transaction's history.

## 10. Privacy

- The model described in the text maintains privacy by keeping public keys anonymous, even though all transactions are publicly announced. This means that while the public can see that a transaction occurred and the amount involved, they cannot link this transaction to any specific individuals. This is similar to how stock exchanges operate, where individual trades are public, but the identities of the parties involved are not.
- To further enhance privacy, it is recommended to use a new key pair for each transaction to prevent them from being linked to a common owner.
- Some level of linkage is unavoidable in multi-input transactions, which necessarily show that their inputs were owned by the same owner. If the owner of a key is ever revealed, there's a risk that this could lead to the revelation of other transactions owned by the same person.

## 11. Calculations

- The text discusses the scenario where an attacker attempts to generate a faster alternative chain of transactions than the original chain. However, the system doesn't allow arbitrary changes, such as creating value from nothing or stealing money. The attacker can only alter his own recent transactions.
- The competition between the honest chain and the attacker chain can be viewed as a Binomial Random Walk. The chance of the attacker catching up from a given deficit is similar to a Gambler's Ruin problem, where the odds of catching up drop exponentially as the number of blocks the attacker must catch up with increases.
- The text considers the amount of time a receiver of a new transaction should wait to be sure that the sender cannot change the transaction. The receiver should wait until the transaction has been added to a block and several more blocks have been linked after it.
- A mathematical formula and code are provided to calculate the likelihood that an attacker could catch up with the honest chain, showing the probability decreases exponentially with the increase of linked blocks (z). Examples are given with various probabilities (q) and number of blocks (z) to demonstrate the exponential decrease.

## 12. Conclusion

- The text presents a system for electronic transactions that doesn't rely on trust, using digital signatures to establish strong ownership control over the coins and a peer-to-peer network to prevent double-spending.
- The system uses a method called proof-of-work to create a public record of transactions that becomes increasingly hard for an attacker to alter, as long as the majority of the system's computational power is controlled by honest nodes.
- The network's structure is robust and simple, with nodes operating simultaneously with minimal coordination. They don't require identification, as messages aren't directed to a specific location and only need to be delivered as efficiently as possible.
- Nodes can freely leave and rejoin the network, accepting the proof-of-work chain as evidence of transactions that occurred during their absence. Nodes "vote" using their computational power, extending valid blocks and refusing to work on invalid ones. This mechanism allows for the enforcement of any necessary rules and incentives.
