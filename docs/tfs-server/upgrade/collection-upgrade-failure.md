---
title: Collection upgrade failures when upgrading TFS
description: What to do when upgrading one or more Team Foundatino Server (TFS) collections fails 
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: 078f1738-ad00-40f6-8253-7e0cfce838c5
toc: show
ms.manager: douge
ms.author: aaronha
ms.date: 11/08/2017
---

# Handling team project collection upgrade failures

**TFS 2018** | **TFS 2017** | **TFS 2015**

When one or more of your team project collections has an upgrade failure,
you'll want to:

1. Resolve the issue.
2. Re-run the upgrade job for the team project collection.

## Resolve the issue

Some upgrade failures are easy to diagnose and resolve. For example, your
database might have run out of disk space. Other failures will be more 
difficult to diagnose and resolve. For these, start by searching on
[Developer Community](https://developercommunity.visualstudio.com/spaces/22/index.html).
Good search terms include "upgrade", the error message(s) reported in the
collection upgrade log file, and the names of any failed steps from that
log file.

If you kept the server configuration wizard open during collection upgrade, you can 
open up the collection logs right from there.

![Collection log files within wizard](./_img/view-logs-wizard.png)

If you closed the server configuration wizard while your collections were
upgrading, you'll need to open up the logs from the TFS Administration Console.

![Collection log files within console](./_img/view-logs-console.png)

If you find an existing problem report for your issue on Developer Community, add a vote to 
it. If the problem report does not have a solution that works for you, add a new comment
to the problem with your additional information. If you don't find an existing problem at 
all, create a new one. Make sure to use the same terms you were searching for so that
others will be able to benefit from any posted solutions.
 
If you are still stuck, the best way to help the product team diagnose and solve your 
issue is to upload your entire log file. If you are concerned about publicly sharing personally 
identifiable information, you can attach the log file to a comment viewable only by Developer 
Community moderators. 

## Re-run the upgrade job

Once you believe you have resolved the issue, you'll need to re-run the upgrade job
for the collection(s) that failed. This can be done by selecting the collection in the
TFS Administration Console, selecting the Status tab, selecting the failed job, and
clicking the Rerun Job link.

![Rerun upgrade job within console](./_img/rerun-job-console.png)