---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Automated monitoring
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: 8116182a-9364-4938-ace8-ee5ceda14348
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/25/2018
monikerRange: '>= tfs-2013'
---

# Monitor the app in the wild

The earlier [Why DevOps?](azure-devops-guide-for-managers-02-why-devops.md) article discussed the challenge of knowing what your customers really want, and delivering solutions to meet their needs (without breaking the bank!). We must also recognize that although you've done your best with each and every release to deliver apps and services that meet customer needs, and tried to prevent defects from reaching those customers, the truth is that some defects will still make it through and some customer needs will remain unfulfilled.

Once code has been deployed to production, monitoring, the last stage of the release pipeline, becomes the primary concern. The focus of monitoring shifts from delivery to *listening*, which means being aware of bugs and issues that affect customers, and to *learning*, which means discovering unfulfilled needs and validating all the assumptions that went into the creation of the release in the first place. What you hear and what you learn feeds back around to the beginning of the release pipeline to drive the next series of code changes. In short,

_**Monitoring closes the loop between releases, ensuring a continuous stream of value being delivered to customers, and that it's the right value.**_

As such, monitoring is an essential practice in the continuous validation of performance, which is again what DevOps is all about.

## The Monitoring Culture

In the previous article of this series, we spoke about [continuous deployment as a culture](#continuous-deployment-as-a-culture), because achieving that level of delivery optimization requires a deep commitment to code reviews and automated testing. It also means a commitment to monitoring:

- Because no suite of tests is perfect, some defects will get through to production, so your team must actively monitor crash reports, telemetry, load imbalances, ratings, reviews, and direct customer feedback. This includes monitoring the app's performance on each supported platform, and monitoring the health of your back-end services.
- Your team must be committed to triaging and prioritizing issues and feeding them into the dev backlog so that corrections quickly get into subsequent releases.

Furthermore, monitoring is as much a matter for your test and staging environments as it is for production. Code you write to monitor the app and collect telemetry is just as prone to bugs as any other code, and requires time to debug and troubleshoot before release. Monitoring in test and staging environments also gives your team the chance to test your processes for handling crashes and feedback.

For example, custom telemetry that you collect from apps and services is typically designed to answer questions about customer usage and whether you're meeting certain business goals.  Defects in your telemetry code, however, don't affect customers. Instead, telemetry defects can easily invalidate all the data you collect. High-quality data is everything, so it's essential to fully exercise telemetry collection in both test and staging environments, keeping that data separate from production data, of course, and to scrutinize it for any collection and tabulation errors.
Test and staging environments also help you test feedback mechanisms in the app. When distributing to pre-launch testers, encourage those testers to provide feedback through mechanisms in the app itself, because that's how your production customers will be doing it.

Most important, though, is that monitoring your test and staging environments is how you practice being responsive to crashes, customer feedback, and issues revealed by telemetry. Put simply, monitoring is both listening and responding, because responsiveness proves you really are listening. Responsiveness, too, means acknowledging feedback and then acting on it by setting up a regular process to get appropriately prioritized issues into your backlog so your developers can get working on them.

Establishing this process isn't just an afterthought—you should start well before your first release, right alongside setting up build servers and release pipelines. In doing so, you can practice and hone your process with your test and staging environments preparation for your first release, because once you start making releases, monitoring must be continual.

A strong monitoring process can even, to some extent, make up for initial weaknesses in other forms of testing. It takes time and expertise to create really good automated tests, which could be challenging within the constraints of your release schedule or the availability of qualified candidates. Monitoring, on the other hand, requires less-specialized skills, and setting your team up for monitoring activities is generally quicker and simpler than writing a full suite of tests. Oftentimes, too, your early adopters are likely to be more forgiving about defects if they trust that you're listening and working hard to address them. Good monitoring, then, gives you the opportunity to get your apps and services out to customers quickly, and to start collecting valuable telemetry and feedback, before necessarily having fleshed out your testing processes.

> [!div class="nextstepaction"]
> [Looping back to the backlog](azure-devops-guide-for-managers-10-backlog.md)
