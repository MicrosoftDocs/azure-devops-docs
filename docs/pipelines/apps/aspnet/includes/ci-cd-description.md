---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

![A typical release pipeline for web applications](../media/ReleasePipeline.png)

Continuous integration means starting an automated build (and possibly running tests) whenever new code is committed to or checked into the project's source control repository. This gives you immediate feedback that the code builds and can potentially be deployed. Continuous delivery (or deployment) means starting an automated deployment pipeline whenever a new successful build is available. Together, CI and CD mean that any code changes you commit to your repository are quickly validated and deployed to a live web site without any manual intervention.