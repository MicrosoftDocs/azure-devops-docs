---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 01/14/2021
ms.topic: include
---

### "uses" statement for pre-declaring resources

When a pipeline runs a job on an agent, that agent is given an access token to call back into Azure Pipelines REST APIs and to download resources like repositories. For YAML pipelines, we recently added a setting to restrict the token down to only the repositories actually consumed in a job. However, some customers were using repositories without explicitly using a `checkout` step, for instance, if they used a script step to call Git directly. These customers couldn't enable the token-restricting feature, because Azure Pipelines couldn't accurately determine what repositories were needed for the job.

With this update, we've added an alternative way to tell Azure Pipelines that a job wants to use a repository without using the `checkout` step. Instead, you can use the new `uses` keyword, like this:

```yml
resources:
  repositories:
  - repository: myrepo
    type: git
    name: MyProject/MyRepo

jobs:
- job: myjob
  uses:
    repositories:
    - myrepo
  steps:
  # without the preceding "uses" statement, if you have the
  # new limit-repositories feature turned on, then Azure Pipelines
  # won't include this repo in the access token and you'll
  # get an access error at runtime (also, in a real pipeline
  # you must include the auth token header as an argument to Git)
  - script: git clone https://dev.azure.com/MyOrg/MyProject/_git/MyRepo
```

This feature also solves a related (though less common) problem. If you use the `matrix` keyword to generate multiple jobs and these jobs use pools specified in the matrix step, you may have run into problems authorizing those pools for the pipeline. The root cause is the same: because matrixes are computed at runtime, the up-front resource authorization system can't accurately determine what pools are used. Using `uses`, you can declare what pools your jobs will use so they can be authorized up front.

```yml
jobs:
- job: mtrx
  strategy:
    matrix:
      windows:
        mypoolname: Private-Windows
      mac:
        mypoolname: Private-Mac
  pool: $(mypoolname)
  # without the following "uses" statement, "pool" won't see
  # the pool names until it's too late, and you'll get an error
  # at runtime
  uses:
    pools:
    - Private-Windows
    - Private-Mac
```
### Manual Validation for YAML pipelines

With the newly released **Manual Validation** task you can pause a YAML pipeline mid-stage. This allows you to perform manual or offline activities and then resume (or reject) the run. This is especially useful in scenarios where you want to pause a pipeline and let a peer to validate configuration settings, build package, etc. before moving on to a long-running, compute-intensive job. <a href="/azure/devops/pipelines/tasks/utility/manual-validation">Learn more</a>.  

<br><img src="../../media/181-pipelines-0-0.png" alt="manual validation" width="500">