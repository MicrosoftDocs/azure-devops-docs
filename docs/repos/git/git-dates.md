---
title: Dates in Git
titleSuffix: Azure Repos
description: Learn how dates work in Git.
ms.assetid: c5e233e2-cc84-4ca6-8ca3-8eb6d686533a
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# How dates work in Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Git tracks two dates in commits: author date and commit date.
In addition, Azure DevOps Services and Azure DevOps Server track when a commit was first pushed to the server.

* **Author date**: When a commit was originally authored. Typically, this date is when someone first ran `git commit`.
* **Commit date**: When a commit was applied to the branch. In many cases, it's the same as the author date. It can differ if a commit was amended, rebased, or applied by someone other than the author as part of a patch. In those cases, the date is when the rebase happened or the patch was applied.
* **Push date**: When a commit was pushed to the remote repository in question. This date is specific to the remote version control system that you're using and isn't available in your local repository.

When you run `git log`, the author date appears by default. 
If you want the commit date to appear, you can use one of the many command-line options, such as `--pretty=fuller`.

Let's look at a brief example to see these concepts in practice. First, create a normal commit:

```
git init
echo test > file.txt
git add *
git commit -m "A normal commit message"
```

Now, amend that commit with a different message:

```
echo again > file.txt
git add *
git commit --amend -m "An amended commit"
```

If you check the regular log history, information like the following example appears:

```
git log

commit 17232459f0ae25adeff21c9e21742ba22b7f3499
Date:   Thu Feb 25 19:38:54 2016 -0500

    An amended commit
```

Now, view the same commit with the author date:

```
git log --pretty=fuller

commit 17232459f0ae25adeff21c9e21742ba22b7f3499
AuthorDate: Thu Feb 25 19:38:54 2016 -0500
Commit:     Ross Brodbeck <robrodbe@microsoft.com>
CommitDate: Thu Feb 25 19:39:36 2016 -0500

    An amended commit
```

Note the slight difference between the author date and commit date in the examples.
The author date is the original, unedited commit time. The commit date is the time at which you ran the `--amend` command.

Many `git log` options can help you understand dates better.
For example, if you pass the `--date` flag, you can determine how dates are displayed.
This flag can be useful for normalizing time zones, because Git displays dates in their original time zone by default. It can also be useful for changing the date display string.

For more information about the formatting options, see the [git-log man page](https://git-scm.com/docs/git-log).

## Change Git dates

When you're getting ready to commit your code, you have the ability to set both the author and commit dates. This ability isn't something you should use often.

You can change the author date of a commit by passing the `--date` flag to `git commit`.
Various articles discuss the formatting of this flag, but it isn't well documented. [This Stack Overflow question](https://stackoverflow.com/questions/19742345/what-is-the-format-for-date-parameter-of-git-commit) does a great job of explaining the acceptable date formats.

You can also use the environment variables `GIT_COMMITTER_DATE` and `GIT_AUTHOR_DATE` to set the corresponding dates, as documented on the [git-commit man page](https://git-scm.com/docs/git-commit).
If you need to take this approach, use [this Stack Overflow question](https://stackoverflow.com/questions/454734/how-can-one-change-the-timestamp-of-an-old-commit-in-git) as a starting point.
