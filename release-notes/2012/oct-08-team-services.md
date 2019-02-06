---
title: Team Foundation Service updates - Oct 8
description: VSTS release notes for October 8 2012
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: e39e465e-4faa-4dfe-99ca-afbadf7d4ec2
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - Oct 8

##400 character paths on the server

One of the top votes on [UserVoice](http://visualstudio.uservoice.com/forums/330519-vso) is eliminating the 260 character path limit for developers. As Brian Harry mentioned on his [blog](http://blogs.msdn.com/b/bharry/archive/2012/09/12/visual-studio-update-this-fall.aspx), we have been working on eliminating the server side part of this problem. With this release, we have upped the path limit you can use in TFS version control to 400 characters. While this does not change the 260 path limit on the client, it is a step in the right direction.

You may be asking yourself, what good are longer paths on the server if I can’t use those paths on the client? One of the reasons folks hit the path limit problem is when they take a source tree that is already long & start to try to put a branch structure on top of it. Now you will be able to organize your source tree on the server however you want, up to 400 characters. If you choose to do this, you still have to be careful that whatever subset of that tree you are planning to sync down in your workspace is still less than 260 characters total. So for example, if you sync a particular branch (a common practice we see) then you will need to continue to make sure each individual branch is less than 260 characters deep. Also be sure to reserve some of those 260 characters for the local part of the path (ex. c:/src).

So how can you start using long server paths? It’s enabled right now on the service. However support for longer paths required some updates to the client. So to create longer paths, you need VS 2012 Update 1. You can [download the update here](/visualstudio/releasenotes/vs2012-update1-vs). We will be releasing the official quarterly update to TFS 2012 at the same time the corresponding VS 2012 update is available. Learn more about our new VS & TFS update cadence [in this blog post](http://blogs.msdn.com/b/bharry/archive/2012/09/12/visual-studio-update-this-fall.aspx). The good news is you can try this out today & the quarterly updates to TFS 2012 & VS 2012 with this support is not far away.

Since this change required an updated to the client, once the upcoming VS 2012 update is available, it’s recommended that you update all of your clients to this version if your team wants to use long paths. If an older client attempts to retrieve a source path that is longer than it can handle locally it will fail in the same manner it does today if your “local path + source path” exceeds the maximum allowed length. Of course older clients will work just fine against servers using long paths as long as they only map a portion of the tree that fits into the 1st 260 characters.

##Updated learn section

We have also updated the [learn](https://visualstudio.microsoft.com/get-started/) section of the site & added several new articles:

- [Use the Hosted Build Controller](/azure/devops/pipelines/agents/hosted?view=azure-devops)
- [Set up an Ant Build in the Cloud](/azure/devops/pipelines/tasks/build/ant?view=azure-devops)

On the topic of build, there is one warning we wanted to pass along. We gave you instructions in [Set up a Build](/azure/devops/pipelines/index?view=azure-devops) that worked, but had a really bad side-effect. With hosted build today, your build drops are put into your VC path. If you simply map the root of your team project for the build, your old build drops are included with the source that is copied to the build machine when a new build is queued. Yikes. We’ve fixed the instructions. If you’ve set up a build using our old instructions, cloak your drops folder. You can look at step 5 for details.

That’s it for sprint 37. See you again in 3 weeks.

Thanks,

Jamie Cool