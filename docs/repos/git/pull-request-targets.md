---
title: Configure custom target branches for pull requests
titleSuffix: Azure Repos
description: Learn how to specify a list of branches as potential pull request targets.
ms.assetid: 1D70C33E-FFBB-44B2-82A6-CE9BF8169BE7
ms.service: azure-devops-repos
ms.topic: conceptual
ms.author: dstolee
author: dstolee
ms.date: 08/19/2024
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
ms.custom: devx-track-azurecli
---

# Configure target branches for pull requests

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

By default, Azure DevOps suggests the creation of new pull requests against
the default branch. In a repository with multiple branches used for pull
requests, repository owners may configure the list of pull request target
branches so these suggestions select the proper target branch.

To enable this feature, create a file with name
`.azuredevops/pull_request_targets.yml` in the repository's default branch.
This YAML file should contain a single list, titled `pull_request_targets`,
containing the branch names or prefixes that match the candidate branches.

For example, consider these contents:

```
pull_request_targets:
  - main
  - release/*
  - feature/*
```

This list of potential targets specifies `main` as the target branch to
select first, but if a branch starting with `release/` or `feature/` is a
better choice, then that branch is chosen instead.

For more pull request guidelines and management considerations, see
[About pull requests](about-pull-requests.md).

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## When is this configuration used?

There are multiple entry points to using a dynamic target branch.

- **Pull Request Suggestions.** When a user pushes a branch to Azure
   DevOps, their next visit to the Repos page may suggest creating a pull
   request from that branch. This "Create New Pull Request" button chooses
   the target branch dynamically.

- **Pull Request URL.** When a user navigates directly to the pull
   request creation page using a `sourceRef` parameter but omitting the
   `targetRef` parameter, Azure DevOps selects a target branch based on
   this dynamic choice.

There's a capability for client tools to create pull requests using this
dynamic choice, but those clients need to add an optional signal that the
user didn't specify a target branch. Check your client tool of choice to
see if the option is enabled.

## What are good candidates for branch targets?

We recommend that the configured list of candidate branches includes only
branches that are protected by pull request policies. Such branches are
likely only changed by completing pull requests, which guarantees that the
previous branch position is in the first-parent history of the tip commit.
If a merge strategy is used, then the second parent represents the commits
being introduced to the target branch by completing a pull request and the
first parent is the previous tip.

## How does Azure DevOps pick a branch?

Git doesn't track metadata around the creation of a branch. There's no
exact way to determine what branch was used when creating a topic branch.
Instead, Azure DevOps uses a heuristic based on the first-parent history of the
branches.

Among the possible target branches, Azure DevOps selects the branch whose
first-parent history intersects with the source branch's first-parent history
the most.

### Example: No merge commits

Consider the following branch structure, which is simplified more than normal as
there are no merge commits. In this example, the entire history is represented by
the first-parent history.

```
  ,-E---F <-- release/2024-September
 /
A---B---C---D <--- main
     \
      `-G---H <--- feature/targets
         \
          `-I <--- topic
```

With this history and the sample `pull_request_targets` list used
previously, we have three candidate target branches, in order of priority:

* `main`
* `release/2024-September`
* `feature/targets`

The source branch, `topic`, is then compared to these branches.

* `main` intersects with `topic` at `B`, leaving `G,I` in `topic` and not in
  `main`.
* `release/2024-September` intersects with `topic` at `A` leaving `B,G,I` in
  `topic` and not in `release/2024-September`.
* `feature/targets` intersects with `topic` at `G`, leaving `I` in `topic` and
  not in `feature/targets`.

Therefore, in this example, the `feature/targets` branch is chosen as the target
branch for a pull request with `topic` as the source branch.

### Example: Merge commits

In a more complicated example, where the `feature/targets` branch was merged
into `main` and merged `main` into itself, the commit history has more cases to
consider:

```
  ,-E---F <-- release/2024-September
 /
A---B---C---D---J---K <--- main
     \    _/     \
      \  /        \
       `G---H---L--\--M <--- feature/targets
         \          \/
          \
           `I <--- topic
```

Here, the commit `D` in `main` represents a time where `feature/targets` was
merged into `main`. Commit `M` represents a time where `main` was merged into
`feature/targets`. The link between commits `M` and `J` is drawn in a way to
emphasize that `J` is the second parent of `M` while `L` is the first parent.

In this case, when you consider the full commit history, `main` and
`feature/targets` both intersect the history of `topic` at `G`. However, the
first parent history still demonstrates a preference for `feature/targets`.

### Breaking Ties

If two branches have the same first-parent history intersection, then
Azure Devops selects the branch that appears earlier in the
`pull_request_targets` list. If multiple branches are still tied based on
the `pull_request_targets` list due to a prefix match, then the earliest
in alphabetical order wins.

These kinds of ties are most often present when new candidate branches are
created, such as the start of a new feature branch or the fork of a release
branch.

```
          ,-E---F <-- release/2024-October
         /
A---B---C---D <--- main
     \
      \
       `G <--- topic
```

In this example, the `release/2024-October` branch was created off of the
`main` branch after `topic` was branched off of `main`. While this is intuitive
to a human reader, the order of the `main` and `release/*` categories in the
`pull_request_targets` list indicates the preferred order to Azure DevOps.

## What if Azure DevOps chooses the wrong target branch?

The pull request creation page has a selector for adjusting the target
branch if the dynamic choice does not match expectations. The target
branch can also be adjusted after the pull request is created.

More importantly, it may be valuable to understand why the heuristic may be
selecting the "wrong" target branch.

This heuristic relies on some assumptions about how the target branches and the
source branch were created. Here are some potential reasons why the heuristic
does not work:

- The target branches are not protected by pull request policies. If the target
   branches can be pushed arbitrarily, then the first-parent history is not a
   reliable indicator of the previous location of that branch.

- The source branch was created from a previous tip of a candidate branch. If
   the source branch chose an arbitrary commit in the history, then there's no
   guarantee about the first parent history it depended upon.

- The source branch was advanced using `git commit` and `git merge` commands.
   Commands such as `git reset --hard` or `git rebase` may change the history of
   the branch in unpredictable ways.

If you disagree with the target branch chosen by this heuristic, then
consider updating the choice using
`git rebase --onto <new-target> <old-target> <source>`. The `git rebase` command
rewrites the first-parent history to make the heuristic choose the new
target.

One common mistake that users make when realizing that they're based on the
wrong branch is to use `git merge` to bring the right branch into their history.
Merging doesn't change the first-parent history, and thus doesn't change the
choice for target branch.

## How can I test this decision locally?

The heuristic used by Azure DevOps was contributed to the core Git client and is
available in Git versions 2.47.0 and later.

To test this logic in your own repository, first run `git fetch origin` to make
sure you have the latest version of the target branches. Then, run the following
`git for-each-ref` command, adjusted to match your list of candidate branches:

```
$ git for-each-ref --format="%(is-base:HEAD) %(refname)" \
           refs/remotes/origin/main \
           "refs/remotes/origin/release/*" \
           "refs/remotes/origin/feature/*"
 refs/remotes/origin/main
 refs/remotes/origin/release/2024-September
(HEAD) refs/remotes/origin/feature/targets
```

In this command, the `HEAD` commit is used as the source and compares the
first-parent history of the target branches in the same way. While each
candidate branch is listed in the output, the string `(HEAD)` indicates which of
the branches should be used as the target branch.

## Next steps

> [!div class="nextstepaction"]
> [Create a pull request](pull-requests.md)
> [Review pull requests](review-pull-requests.md)

## Related articles

- [Change the default branch](change-default-branch.md)
- [Create pull requests](pull-requests.md)
- [View pull requests](view-pull-requests.md)
- [Review pull requests](review-pull-requests.md)
- [Complete pull requests](complete-pull-requests.md)
- [Multiple merge bases](merging-with-squash.md#multiple-merge-bases)
