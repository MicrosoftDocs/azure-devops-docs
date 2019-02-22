---
title: Team Foundation Service updates - July 29
description: VSTS release notes for July 29 2013
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: 0847839d-1513-46fa-a8e6-41c5cf5ec0f5
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Team Foundation Service updates - July 29

##Improved permission management for Git repos

In a continuation of our goal to offer a great [enterprise grade Git](http://blogs.msdn.com/b/bharry/archive/2013/06/19/enterprise-grade-git.aspx) solution, we have added a number of enhancements to permission management for Git repos. The most notable is the introduction of branch level permissions. You can now control who has the ability to push certain branches to the server. This lets you have Git repos the whole team can work on, but with branches that only specific people are allowed to push to.

We also added a few more permissions at the repo level. You can now control who can push new branches or tags to a repository. This lets you manage branch proliferation on the team’s golden repo. Finally, you can now configure the default permissions for all repos in a team project at once. For teams that have lots of repositories, this makes it much easier to manage permission changes.

You can access all of this from the repository management page in project administration.



##Additional version control improvements

We now use [Gravatar](http://en.gravatar.com/) in the web, just like our VS client tooling for Git. When viewing Git repositories that contain commits from outside your organization, we now attempt to request a profile image from Gravatar. This option can be disabled in the Version Control admin settings for Git based projects. In this new options area, you will also find an option to disable the automatic linking of commits to work items when they contain #1234 syntax. This is useful when importing Git repositories whose work items do not reside in your TFS server. We also improved the image diffing capabilities, including adding a pixel diff.

In addition, we made some improvements to the [lightweight code commenting](jun-03-team-services.md) feature we introduced back in June. There is now a handy Send Email icon for Changesets, Shelvesets and Commits which allows you to send a permalink to that source control artifact. This includes data about the files in it and any comments left against those files. It comes in handy if you've left some ad-hoc comments on someone's code and you want to make sure they know about them.

Finally, based on user feedback, the shortcut keys when entering code comments have now changed to be "Enter" for save, "Esc" for cancel and "Shift+Enter" for new line. Previously to save you had to press "Ctrl+Enter" but we found less than 7% of comments had one or more newline characters in them. So we optimized for the common case.

##Team room Git push events

Before today’s update, we only supported showing Team Foundation Version Control changeset events. Going forward you can now see Git push events as well. The **Manage events** dialog has been updated to show a list of repositories for all Git projects. Simply choose a Git based Team Project, choose the repository you want push events from, and check the checkbox to enable the event.



##Team room emoticons

We’ve had support for emoticons in the team room since it launched on the service back on June 3rd. However, they weren’t easy to discover because we didn’t have a UI to create them. I’m happy to report that we’ve now got an emoticon picker right on the chat window. You can still type the emoticon character set as before, or you can use the picker to find the emoticon you’re after :).



##Deleting team rooms

And finally, we received a lot of customer feedback indicating users want to delete rooms, especially the ones “automagically” created for you when you create new team projects. Room admins will now see "Delete" as an option on the context menu next to each room. Deleting a room deletes all messages in the room history so be sure you've copied any content you need.

That’s a wrap on sprint 51. See you again in 3 weeks. As always let us know how we're doing on [User Voice](https://visualstudio.uservoice.com/forums/330519-vso), the [MSDN Forums](http://social.msdn.microsoft.com/Forums/TFService/threads), and [Twitter](http://twitter.com/search?q=%23tfservice).

Thanks,

Jamie Cool