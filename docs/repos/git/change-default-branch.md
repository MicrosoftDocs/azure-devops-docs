---
title: Change the default branch
description: Learn how to change your default branch name
ms.assetid: cd71e039-6e11-44f9-80fd-66c3bc146b46
ms.topic: article
ms.technology: devops-code-git
ms.date: 08/14/2020
monikerRange: '>= tfs-2015'
---

# Change the default branch

The default branch is the first branch that Git will check out on a fresh clone.
Also, [pull requests](pull-requests.md) target this branch by default.

We'll walk through the process of changing the default branch.
We'll also cover additional things you must consider and update when making this change.
Finally, we'll look at a tool for easing the transition.

## Set a new default branch

[!INCLUDE [](includes/change-default-branch-instructions.md)]

## Choosing a name

[Git 2.28](https://github.blog/2020-07-27-highlights-from-git-2-28/) added the ability to choose an initial branch name.
At the same time, Azure Repos, GitHub, and other Git hosting providers added the ability to choose a different initial branch name.
Previously, the default branch was almost always named `master`.
The most popular alternative name is `main`.
Less common options include `trunk` and `development`.
Absent any restrictions from the tools you use or team you're on, any valid branch name will work.

## Updating other systems

When you change to a different default branch, other parts of your workflow may be affected.
You'll need to take these parts into account when you're planning a change.

### Pipelines
Update the [CI triggers](../../pipelines/build/triggers.md) for all pipelines.
Designer pipelines can be edited in the web.
YAML pipelines can be edited in their respective repositories.

### In-flight pull requests
[Retarget each open pull request](pull-requests.md#change-the-target-branch-of-a-pull-request) to the new default branch.

### Existing clones
New clones of the repository will get the new default branch.
After the switch, everyone with an existing clone should run `git remote set-head origin -a` (replacing `origin` with the name of their remote if it's something else) to update their view of the remote's default branch.
Future new branches should be based on the new default.

### Incoming links
Some bookmarks, documents, and other non-code files which point to files in Azure Repos will need to be updated.
The branch name for a file or directory can appear in the URL.

If a URL contains a querystring for `version` (e.g. `&version=GBmybranchname`), then that URL should be updated.
Fortunately, most links to the default branch will not have a `version` segment and can be left as-is.
Also, once you delete the old default branch, attempts to navigate to it will be taken to the new default anyways.

## Temporary mirroring
A Git repository can only have one default branch.
However, for a period of time, you can set up ad-hoc mirroring between your old default and your new default.
This way, if your end users continue pushing to the old default, they won't need to re-do the work on their end.
We'll use [Azure Pipelines](../../pipelines/get-started/what-is-azure-pipelines.md) to set up this temporary mirroring.

> [!NOTE]
> This section uses language which is at odds with [Microsoft's perspective](https://blogs.microsoft.com/blog/2020/06/23/addressing-racial-injustice/).
> Specifically, the word `master` appears in several places consistent with how it's been used in Git.
> The purpose of this topic is to explain how to switch to more inclusive language, such as `main`.
> Avoiding all mention of `master` would make the directions much harder to understand.

### The mirroring pipeline

> [!NOTE]
> These instructions are not fool-proof, and your repository setup may require additional changes such as loosening permissions and policies.

> [!WARNING]
> If the old and new default branches are both updated before this pipeline runs, then the pipeline won't be able to mirror the changes.
> Someone will have to manually [merge](pulling.md#update-branches-with-merge) the old default branch into the new default branch to get it running automatically again.

1. For all existing CI builds, update them to [trigger](../../pipelines/build/triggers.md) against your new default branch instead of the old one.
 
2. Grant the build identity **Contribute** permission to your repo. Navigate to **Project Settings** > **Repositories** > **(your repo)** > **Permissions**. There may be up to two identities, one for the project collection build service and the other for the project build service. Make sure the Contribute permission says *Allow*.

<!-- TODO: moniker this and put in non-YAML instructions for TFS -->
<!-- TFS didn't have separate bypass policy permissions -->

3. If the new default branch has branch policies, also grant the build identity the **Bypass policies when pushing** permission.
This is a security risk since a malicious user could craft a pipeline to sneak code into a repository in your project.
When mirroring isn't needed anymore, **be sure** to remove this permission.

4. Add a new file, `mirror.yml` to your repository in the new default branch.
In this example, we assume the old default branch was `master` and the new one is `main`.
Update the triggering branches and the `git push` line if your branch names are different.
```yaml
trigger:
  branches:
    include:
    - master
    - main
 
pool: { vmImage: ubuntu-latest }
steps:
- checkout: self
  persistCredentials: true
- script: |
    git checkout $(Build.SourceBranchName)
    git push origin HEAD:master HEAD:main
  displayName: Mirror old and new default branches
```

5. Create a new pipeline, choosing "Azure Repos Git" and "Existing Azure Pipelines YAML file" in the wizard.
Choose the `mirror.yml` file you added in the previous step.
Save and run the pipeline.

### Troubleshooting

This pipeline will run every time there's a push to `master` or to `main`.
It will keep them in sync as long as new commits don't arrive on both branches simultaneously.

If the pipeline begins failing with an error message like "Updates were rejected because a pushed branch tip is behind its remote", someone will have to merge the old branch into the new branch by hand.

1. Clone the repository and `cd` into its directory.
2. Checkout the new default branch with `git checkout main` (if `main` is your new default branch).
3. Create a new branch for integrating the two branches with `git checkout -b integrate`.
4. Merge the old default branch with `git merge master` (if `master` is your old default branch).
5. Push the new branch, then open and complete a pull request into the new default branch.
6. The mirroring pipeline should then take care of mirroring the merge commit back to the old default.