---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Why DevOps?
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: 94110801-612e-4032-92b4-994b6f9c8f54
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/15/2018
monikerRange: '>= tfs-2013'
---

# Why DevOps?

Imagine a perfect world of development and delivery of apps and services:

- You instantly know exactly what your customers want the moment they think of a need or desire.
- Customers completely trust that you've understood their needs perfectly, and that you're giving their needs your full attention.
- You and every other developer involved have no issues with communication or collaboration.
- And finally, as soon as you've fulfilled a need or desire in code, the app is immediately delivered to customers on their devices and your services are immediately deployed to customer-accessible servers.

In short, this perfect scenario means there is an effectively instantaneous connection between customer needs and fulfillment of those needs.

Now if you have any experience whatsoever with writing production code for real customers, you've been laughing yourself silly for the last thirty seconds at the sheer absurdity of such idealism. You know that reality comes nowhere close to this scenario. And yet, it's a good bet that you, along with every other software developer in the world, actually have experienced such a seamless loop. Why? Because it's exactly what happens when you write software for yourself! That is, when the developer and the customer are the same person, there aren't any interpersonal relationships to get in the way. You deliver the app, you immediately know how the customer feels about it, and the developer starts working on changes right away. Indeed, from what we've heard from individual developers, this is literally how most of us got hooked on the magic of coding in the first place. You write some code, build it, put it on a device or a server if needed, start it up, and&mdash;voila! Something amazing happens, something you could control and shape and play with to your utmost heart's desire...often late into the night.

Of course, now you're really laughing because what distinguishes programming as a personal hobby from real-world software development is that the latter *always* involves other people. You always have at least one external customer, and hopefully many, many more. There are also the other people on your development team including software engineers, test engineers, product managers, marketing managers, designers, and so on, all of whom want to have a say at different stages of the pipeline.

For the sake of simplicity, let's just say that there is only one other person involved for the time being, a single customer. The implications of this single customer are far from simple. That one person introduces several risks that, well, obliterate the perfect connection between needs and fulfillment as well as the immediacy you enjoyed when writing apps for yourself:

- The ever-present potential for miscommunication means you risk, in every iteration, delivering something that the customer doesn't actually want.
- Because the customer is waiting for you to fulfill her needs, she has to trust that you're giving those needs your full attention and aren't getting distracted by something else, especially someone else's needs. Suddenly, you're working late into the night for an entirely different reason!
- There is a definite delay between when you write the code and when it gets delivered to the customer. Running code on your own computer is only the single first step among many that are necessary to transfer the proper build artifacts from your development computer to a place where the customer can acquire and/or access it. Because there are potentially many steps in this delivery pipeline, there are breakdown risks all along the way.

The risks increase greatly in magnitude as the number of customers increase, because all these matters of communication, understanding, trust, and delivery must be done at scale, which is of course much more complicated:

- You have to be able to listen to many customers, whose needs and desires compete with one another, and at some point it becomes impractical to have direct conversations with everyone.
- You have to continually earn customers' trust, convincing them that you are, in fact, paying attention to their needs even when certain needs go unfulfilled for several releases.
- The delay between implementation also gets longer, because every delivery target, from desktop operating systems to mobile app stores and even the diversity of web browsers, has its own specifications, requirements, and eccentricities.

At some point you also realize that you can't serve all those customers by yourself, making it necessary to join forces with other developers (which is likely the team whose activities you now manage). Collaboration introduces yet another set of complicating factors: the possibility of conflicts in the code, yes, but also in the processes you use to build, test, and otherwise move your apps and services through each stage of the pipeline. To avoid conflict there must be some degree of cooperation and coordination, the need for which increases exponentially as teams and organizations get larger.

In the end, real-world software development is beset by both the complexities of delivering great software to many diverse devices and platforms, and the perhaps greater complexities of interpersonal relationships. These all challenge your ability to achieve your overarching goal, which is delivering the highest value to your customers at the lowest cost to your business.

Clearly, then, you want to mitigate those risks and eliminate guesswork all along the delivery pipeline. And that mitigation is exactly why all the activities and practices of DevOps have come about.

Recognizing this fact, you have now the basis of a unified DevOps story that provides a simple framework on which we can hang every distinct piece of the DevOps whole, thus bringing clarity to what has heretofore been a fragmented and chaotic space.

> [!div class="nextstepaction"]
> [Redefining "performance"](azure-devops-guide-for-managers-03-redefining-performance.md)
