### What other kinds of apps can I build?

[Build your app](../apps/index.md)

### What other kinds of build steps are available?

[Specify your build steps](../tasks/index.md)


### How do we protect our codebase from build breaks?

* Git: [Improve code quality with branch policies](../../git/branch-policies.md) with an option to require that code builds before it can be merged to a branch.  This option is not available for GitHub repos.

* TFVC: [Use gated check-in](../concepts/definitions/build/triggers.md#gated).


### How do I modify other parts of my build definition?

* [Specify your build steps](../tasks/index.md) to run tests, scripts, and a wide range of other processes.

* [Specify build options](../concepts/definitions/build/options.md) such as specifying how completed builds are named, building multiple configurations, creating work items on failure.

* [Specify the repository](../concepts/definitions/build/repository.md) to pick the source of the build and modify options such as how the agent workspace is cleaned.

* [Set build triggers](../concepts/definitions/build/triggers.md) to modify how your CI builds run and to specify scheduled builds.

* [Specify build retention policies](../concepts/policies/retention.md) to automatically delete old builds.


### I selected parallel multi-configuration, but only one build is running at a time.

If you're using VSTS, you might need more concurrent pipelines. See [Concurrent build and release pipelines in VSTS](../concepts/licensing/concurrent-pipelines-ts.md).


### How do I see what has changed in my build definition?

[View the change history of your build definition](../concepts/definitions/build/history.md)
