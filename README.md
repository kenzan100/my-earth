## What is this?

- I love games that have impacts on player's perspective. I once created such a game that changed hundreds of thousands of children's perspective on how Earth is interconnected: https://www.japanfs.org/en/news/archives/news_id029442.html
- Now, I'm onto the same adventure, but this time, with something that can live on the web. So that people can change parameters dynamically, forever.
- This is a Proof of Concept to demonstrate what kind of game system can achieve this goal - the game dynamics with simplicity, extensibility, and of course FUN to play.

### Build 1 - Money, job, and skills in one's life

- First iteration focuses on one of the important attributes in one's life: money.
- This build expresses on one's journey, to earn arbitrary amount of money in limited timeframe.

![game play](https://user-images.githubusercontent.com/570263/120946151-7f576880-c709-11eb-98b6-210fc69427f7.png)

Game play consists of two parts:
- CLI to emit commands to the game world.
- Game viewer in the browser.

It is a playable state. Contact me if you want a live demo on how to play.

## Roadmap

This repo's [project board](https://github.com/kenzan100/my-earth-my-job-second/projects/1) explains each tasks in my mind. Feel free to contribute to issues if you have any questions.

For the bigger picture, my ambition is to make this a "living organism" on the web. In order to get there, I'm imagining following steps:

1. Make sure **solo game play** is genuinely fun, addictive, and rewarding. It should give you a deep satisfaction the more you play.
2. There should be a **real-world reference** that means something to the players. Not everything in the game need to be related to the real world. But enough to make sure game doesn't end when you beat the level; it should continue in IRL.
3. Finally, add dynamic elements to the game so that it "evolves" over time. It can start out with NPC(Non Player Characters), some global events tied with the dates. Then replace them with real people, with means to communicate within the game.

Lack of graphical components right now, is half intentional, half lack of my skill.
I'd like to invest to the design of game dynamics as much as possible first.
Also, proving a **stable, and scalable API endpoints** should open up the opportunities of meta-verse.
Then, anybody with graphic design skills can render their take on how to express this game.

### How to build

To build the browser viewer, I rely on `esbuild` (https://esbuild.github.io/) to bundle stuff.
run following so that main.html can rely on output js.

```
esbuild clients/main.js --bundle --outfile=clients/src/out.js
```
