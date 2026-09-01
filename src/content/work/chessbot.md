---
title: Chess Game
summary: A project in School, where the aim is to duplicate the AI behind a chess engine using alpha beta pruning.
role: Software Developer
date: 2020-12-23
tags: [Java, AI, Java GUI]
featured: true
draft: false
---

As a project for my class, me and my friend, developed a chess engine using alpha beta pruning. We used coding patterns such as contracts, factories, and abstract data classes. To ensure a good structured solution was provided. This repo is kept private so that, students from Brock university cannot copy code for their own project.

![Chess Game](./pictures/chess.png)


The biggest issue with this solution was that, it was memory hungry, and we couldn't really go beyond a certain level of depth for the decision tree, as we used a 2d array with all the piece information, and created a copy of that each time. It was slow and extremely heavy, and if next time I create this game again, I have learned a quite a few lessons from this adventure.
