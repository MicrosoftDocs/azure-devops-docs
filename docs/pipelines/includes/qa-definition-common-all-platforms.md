---
ms.topic: include
---

### What other kinds of apps can I build?

[Build your app](../apps/index.md)

### What other kinds of build tasks are available?

[Specify your build tasks](../tasks/index.md)


### How do we protect our codebase from build breaks?

* Git: [Improve code quality with branch policies](../../repos/git/branch-policies.md) with an option to require that code builds before it can be merged to a branch.  For GitHub repositories, similar policies are available in GitHub's repository settings under _Branches_.

* TFVC: [Use gated check-in](../build/triggers.md#gated).


### How do I modify other parts of my build pipeline?

* [Specify your build tasks](../tasks/index.md) to run tests, scripts, and a wide range of other processes.

* [Specify build options](../build/options.md) such as specifying how completed builds are named, building multiple configurations, creating work items on failure.

* [Specify the repository](../repos/index.md) to pick the source of the build and modify options such as how the agent workspace is cleaned.

* [Set build triggers](../build/triggers.md) to modify how your CI builds run and to specify scheduled builds.

* [Specify build retention policies](../policies/retention.md) to automatically delete old builds.

### I selected parallel multi-configuration, but only one build is running at a time.

If you're using Azure Pipelines, you might need more parallel jobs. See [Parallel jobs in Azure Pipelines](../licensing/concurrent-jobs.md).

### How do I see what has changed in my build pipeline?

[View the change history of your build pipeline](../build/history.md)
