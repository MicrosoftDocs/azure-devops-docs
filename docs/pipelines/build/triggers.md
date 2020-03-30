---
title: Triggers in Azure Pipelines
description: Learn about how you can specify CI, scheduled, gated, and other triggers in Azure Pipelines
ms.topic: reference
ms.custom: seodec18
ms.date: 03/20/2020
monikerRange: '>= tfs-2015'
---

# Specify events that trigger pipelines

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

Use triggers to run a pipeline automatically. Azure Pipelines supports many types of triggers. Select the appropriate one from the list below based on the type of your pipeline.

## Classic build pipelines and YAML pipelines

Continuous integration (CI) triggers vary based on the type of respository you build in your pipeline.

- [CI triggers in Azure Repos Git](../repos/azure-repos-git.md#ci-triggers)
- [CI triggers in GitHub](../repos/github.md#ci-triggers)

Pull request validation (PR) triggers also vary based on the type of repository.
- [PR triggers in Azure Repos Git](../repos/azure-repos-git.md#pr-triggers)
- [PR triggers in GitHub](../repos/github.md#pr-triggers)

[Comment triggers](../repos/github.md#comment-triggers) are supported only for GitHub repositories.

[Scheduled triggers](../process/scheduled-triggers.md) are independent of the repository and allow you to run a pipeline according to a schedule.

[Pipeline triggers](../process/pipeline-triggers.md) in YAML pipelines and [build completion triggers](../process/pipeline-triggers.md) in classic build pipelines allow you to trigger one pipeline upon the completion of another.

## Classic release pipelines

[Continuous deployment triggers](../release/triggers/md#release-triggers) help you start classic releases after a classic build or YAML pipeline completes.

[Scheduled release triggers](../release/triggers/md#scheduled-triggers) allow you to run a release pipeline according to a schedule.

[Pull request release triggers](../release/triggers/md#prsettrigger) are used to deploy a pull request directly using classic releases.

[Stage triggers in classic release](../release/triggers/md#env-triggers) are used to configure how each stage in a classic release is triggered.



## Q & A

<!-- BEGINSECTION class="md-qanda" -->


### How do I protect my Git codebase from build breaks?

If your code is in a Git repo on Azure Repos or Team Foundation Server, you can create a branch policy that runs your build. See [Improve code quality with branch policies](../../repos/git/branch-policies.md). This option is also available for GitHub repos. See [About protected branches](https://help.github.com/en/articles/about-protected-branches).

::: moniker range="azure-devops"

### I defined a schedule in the YAML file. But it didn't run. What happened?

* Check the next few runs that Azure Pipelines has scheduled for your pipeline. You can find these by selecting the **Scheduled runs** action in your pipeline. You need to have the **Multi-stage pipelines** preview feature enabled to see this action. The list is filtered down to only show you the upcoming few runs over the next few days. If this does not meet your expectation, it is probably the case that you have mistyped your cron schedule, or you do not have the schedule defined in the correct branch. Read the topic above to understand how to configure schedules. Reevaluate your cron syntax. All the times for cron schedules are in UTC.

* If you have any schedules defined in the UI, then your YAML schedules are not honored. Ensure that you do not have any UI schedules.

* There is a limit on the number of runs you can schedule for a pipeline. Read more about [limits](#limits).

* If there are no changes to your code, they Azure Pipelines may not start new runs. Learn how to [override](#always) this behavior.

### Schedules work for one branch but not the other.

Schedules are defined in YAML files, and these files are associated with branches. If you want a pipeline to be scheduled for a particular branch, say features/X, then make sure that the YAML file in that branch has the cron schedule defined in it, and that it has the correct branch inclusions for the schedule. The YAML file in features/X branch should have the following in this example: 
 
```yaml
schedules: 
- cron: "0 12 * * 0"   # replace with your schedule 
  branches: 
    include: 
    - features/X  
```

### My build pipeline is using yaml file from branch2 even though I set it to use from branch1. 

Pipelines are not associated with a branch. They are associated with the repositories they build, and with the location of the YAML file relative to the root of that repository. However, every time a pipeline runs, it uses the YAML file and the content from a specific branch. That branch is determined based on where the change is pushed to (in the case of CI builds), where the PR is targeted to (in the case of PR builds), or what you manually specify (in the case of manual runs). Each branch's YAML file independently determines whether the pipeline should be scheduled for that branch.  

::: moniker-end

::: moniker range=">= azure-devops-2019"

### The YAML file in my branch is different than the YAML file in my master branch, which one is used?

* For [CI triggers](#ci-triggers), the YAML file that is in the branch you are pushing is evaluated to see if a CI build should be run.
* For [PR triggers](#pr-triggers), the YAML file that is in the source branch of the PR is evaluated to see if a PR build should be run.
* For [Scheduled triggers](#scheduled-triggers), the YAML file that is in the branch is used to set the scheduled triggers for that branch.

### My CI or PR trigger doesn't seem to fire

Ensure that your CI or PR trigger isn't being overridden by the pipeline settings.

::: moniker-end

[!INCLUDE [temp](../includes/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../includes/qa-versions.md)]
::: moniker-end


<!-- ENDSECTION -->
