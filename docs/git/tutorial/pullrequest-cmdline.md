---
title: Create a pull request (command line) | Team Services & TFS
description: Reviewing and Publishing Code using Git Pull Requests
ms.assetid: 2b74473f-254c-47e9-9c3b-14586550b87f
ms.prod: vs-devops-alm
ms.technology: vs-devops-git
ms.manager: douge
ms.author: sdanie
ms.date: 02/24/2017
ROBOTS: NOINDEX, NOFOLLOW
layout: HubPage
---

#  Create a pull request (command line)

###### Git command line

## What is a pull request?

[Git's workflow](gitworkflow-cmdline.md) uses [branches](branches-cmdline.md) to isolate work until you're ready to merge the changes into your default branch, such as `master`. 
The pull request is the collaborative process that lets the rest of the team discuss changes in a branch and agree to merge them once everyone approves.
Use pull requests to get early feedback from others on work in progress, even if you're not ready to merge the changes into another branch.

![Merging a Git branch into its parent via a pull request](_img/merge.png)

In this image, the purple branch is merged into the blue branch through a pull request. The changes are discussed by reviewers in the pull request before the code is merged.
When you complete the pull request, there is a merge commit (seen here as the filled blue commit) where the changes in the purple branch are now [merged](merging-cmdline.md) in the blue branch. 

<li><p><a data-toggle="collapse" href="#expando-git-cmdline-tutorial">This article is part of the command line Git tutorial. Expand to view more Git tutorial steps &#x25BC;</a></p>
<div class="collapse" id="expando-git-cmdline-tutorial">
<ul>
<li><a href="gitworkflow-cmdline.md">Learn about Git</a></li>
<li><a href="creatingrepo-cmdline.md">Create a new repo</a></li>
<li><a href="clone-cmdline.md">Clone an existing repo</a></li>
<li><a href="commits-cmdline.md">Save work with commits</a></li>
<li><a href="branches-cmdline.md">Create work in branches</a></li>
<li><a href="pushing-cmdline.md">Share code with push</a></li>
<li><a href="pulling-cmdline.md">Update code with fetch and pull</a></li>
<li><a href="pullrequest-cmdline.md">Review code with pull requests (this article)</a></li>
<li><a href="rebase-cmdline.md">Apply changes with rebase</a></li>
<li><a href="cherry-pick-cmdline.md">Copy changes with cherry-pick</a></li>
<li><a href="merging-cmdline.md">Resolve merge conflicts</a></li>
<li><a href="undo-cmdline.md">Undo changes</a></li>
<li><a href="ignore-files-cmdline.md">Ignore files</a></li>
<li><a href="history-cmdline.md">Review history</a></li>
<li><a href="howto-cmdline.md">Frequently asked questions</a></li>
</ul>
</div>
</li> 

## Creating Pull Requests

To create a pull request in Team Services:

0. [Push](pushing-cmdline.md) your local branch.
0. Create a pull request for the branch in Team Services.   
![Creating a pull request in Team Services](_img/createpullrequest.gif)   

0. You can also create a pull request from Visual Studio. Select the **Pull Requests** view when [connected to your Team Project](../../setup-admin/team-services/connect-to-visual-studio-team-services.md) and select **New Pull Request** to open a pull request for your
current branch:   
![Add a Pull Request from Visual Studio](_img/vs_pull_requests.png)   

0. Create the pull request. You should give a clear title for the pull request that describes the changes in the branch. In the description field give a clear explanation of 
how the changes are implemented along with any resources that might help reviewers understand the changes. 
You can include Team Services work items and hyperlinks to allow others to have as much context as possible when reviewing your changes.
0. Add any team member who you would like to review the changes. 

![Adding detail to a pull request](_img/pull-request-detail.png)

### Who reviews the pull request?

When you create the pull request, you can add others who need to review your changes. You can add users and groups to the pull request after it is created if the scope of the
review needs to expand. You can also associate the pull request with a task in Team Services to let others working with the task know changes are ready for review.

### How does the code review work?

Pull request reviewers will see the proposed updates to the branch in the form of file differences between the two branches. Reviewers can add comments on any of the changes and 
include notifications for other team members to answer a question or give other feedback. You can make changes and push commits to resolve issues brought up in the feedback and these 
changes are immediately reflected in the pull request.

![Adding comments to a Team Services Pull request](_img/pull_request_comment.png)

If the changes need much more development to complete, you can abandon the pull request. You can later open up a new pull request to
revisit the changes and link to the conversations that took place in the abandoned pull request. 

You can also open up a pull request on a very early version of your code to ask for feedback from others, even if the code isn't ready to merge yet. 
Once you get the team's feedback, you can keep the pull request open to continue the conversation or abandon the pull request until your code is ready to be shared again. 

## Completing a pull request

![Completing a pull request in Team Services](_img/completepull.gif)

Once all reviewers have approved the changes, you can now complete the pull request. You'll be prompted for a descriptive message about the changes proposed by the pull
request. You can choose to delete the pull request branch when the pull request is complete. Git retains the commit history in the `master` branch after the pull request is complete, 
so unless you plan on doing more work in the branch, it is safe to remove. 

### What happens when a pull request is merged?
You must resolve any [merge conflicts](merging-cmdline.md) between the pull request branch the target branch. Git adds
a new commit (the *merge commit*) to the end of the master branch. This merge commit links the earlier history of both the master branch and the commits for the branch
that was merged as part of the pull request.

## What's next

Check the other tutorial topics and learn more about Git.

- [Learn about Git](gitworkflow-cmdline.md)
- [Create a new repo](creatingrepo-cmdline.md)
- [Clone an existing repo](clone-cmdline.md)
- [Save work with commits](commits-cmdline.md)
- [Create work in branches](branches-cmdline.md)
- [Share code with push](pushing-cmdline.md)
- [Update code with fetch and pull](pulling-cmdline.md)
- [Review code with pull requests](pullrequest-cmdline.md)
- [Apply changes with rebase](rebase-cmdline.md)
- [Copy changes with cherry-pick](cherry-pick-cmdline.md)
- [Resolve merge conflicts](merging-cmdline.md)
- [Undo changes](undo-cmdline.md)
- [Ignore files](ignore-files-cmdline.md)
- [Review history](history-cmdline.md)
- [Frequently asked questions](howto-cmdline.md)