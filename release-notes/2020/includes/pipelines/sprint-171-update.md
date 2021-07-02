---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 06/18/2020
ms.topic: include
---

### Additional agent platform: ARM64

You can now run your self-hosted agents on Linux/ARM64. We added Linux/ARM64 to the list of supported platforms for the Azure Pipelines agent. Although the code changes were minimal, a lot of behind-the-scenes work had to be completed first, and we're excited to announce its release!

### Tag filter support for pipeline resources

We have now added 'tags' in YAML pipelines. You can use tags to set the CI pipeline to run or when to automatically trigger.

```yml
resources:
  pipelines:
  - pipeline: MyCIAlias
    project: Fabrikam
    source: Farbrikam-CI
    branch: master
    tags:              ### This filter is used for resolving default version
    - Production       ### Tags are AND'ed
    trigger:
      tags:            ### This filter is used for triggering the pipeline run
      - Production     ### Tags are AND'ed
      - Signed
```

The above snippet shows that tags can be used to determine the default version of the CI (continuous integration) pipeline to run when the CD (continuous deployment) pipeline run is not triggered by some other source/resource or a scheduled run trigger.

For instance, if you have a scheduled trigger set for your CD pipeline that you only want to run if your CI has the production tag, the tags in the triggers section ensures that the CD pipeline is only triggered if the tagging condition is met by the CI completion event.

### Control which tasks are allowed in pipelines

You can now disable Marketplace tasks. Some of you may allow Marketplace extensions, but not the Pipelines tasks they bring along. For even more control, we also allow you to independently disable all in-the-box tasks (except checkout, which is a special action). With both of these settings enabled, the only tasks allowed to run in a pipeline would be those uploaded using <a href="https://www.npmjs.com/package/tfx-cli">tfx</a>. Visit `https://dev.azure.com/<your_org>/_settings/pipelinessettings` and look for the section called "Task restrictions" to get started.
