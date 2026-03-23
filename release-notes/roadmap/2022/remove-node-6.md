---
title: Stop shipping Node 6 Node 10 and Node 16 runners with the agent 
author: gloridelmorales
ms.author: glmorale
ms.date: 10/12/2022
ms.topic: whats-new
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Stop shipping Node 6 Node 10 and Node 16 runners with the agent 
hide_comments: true
---

# Stop shipping Node 6 Node 10 and Node 16 runners with the agent 

We will remove the end-of-life versions of Node ( Node 6, Node 10 and Node 16) from Agent in November’2026. Once we make this change, tasks that target Node 6 Node 10 or Node 16 will be run on the latest available version of Node in the Agent. To reduce the impact this may have on you, we will: 

* Given ample notice in learn document and release notes. 
* Expose warnings in pipeline logs in the months before removal when tasks target Node 6,10 or 16. 
* Add setting to avoid running tasks on unsupported Node (6,10 and 16) long before the retiral. 