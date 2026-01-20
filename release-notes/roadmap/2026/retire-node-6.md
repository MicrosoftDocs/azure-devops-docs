---
title: Retire Node 6, 10 and 16 from the Agent
author: geekzter
ms.author: ericvan
ms.date: 01/20/2026
ms.topic: article
ms.service: azure-devops
ms.subservice: azure-devops-release-notes
description: Retire Node 6, 10 and 16 from the Agent
hide_comments: true
---

# Retire Node 6, 10 and 16 from the Agent 

We will remove the end-of-life versions of Node ( Node 6, Node 10 and Node 16) from Agent in November’2026. Once we make this change, tasks that target Node 6 Node 10 or Node 16 will be run on the latest available version of Node in the Agent. To reduce the impact this may have on you, we will: 

Given ample notice in learn document and release notes. 

Expose warnings in pipeline logs in the months before removal when tasks target Node 6,10 or 16. 

Conduct brownouts (where using tasks that target Node 6, 10 or 16 generates errors) to catch your attention and fix problematic pipelines before the final removal. 

Add setting to avoid running tasks on unsupported Node (6,10 and 16) long before the retiral.