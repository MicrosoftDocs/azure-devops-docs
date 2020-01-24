---
ms.topic: include
---

### Updates to hosted pipelines images

> [!NOTE]
> We are not deploying the [Sprint 152 Update](https://docs.microsoft.com/azure/devops/release-notes/2019/sprint-152-update#updates-to-hosted-pipelines-images) for the VS2017 and VS2019 images. The Sprint 153 Update will include the Sprint 152 changes.

With this update, we added Windows SDK 18362 to the VS2019 image. In addition, we downgraded several versions of Python to address a bug. The new versions in this update are the following:

| OS      | 2.7.x  | 3.5.x | 3.7.x |
| ------- |:------:| :----:| :----:|
| Linux   | 2.7.15 | 3.5.5 | 3.7.2 |
| Mac     | 2.7.15 | 3.5.5 | 3.7.2 |
| Windows | 2.7.1  | 3.5.4 | 3.7.2 |

You can find more details about the latest releases [here](https://github.com/microsoft/azure-pipelines-image-generation/releases).
For a full list of tools available on our images, visit our Image Generation repo on GitHub [here](https://github.com/Microsoft/azure-pipelines-image-generation).

### A simpler way to work with artifacts

> [!NOTE]
> The new YAML keywords and updated tasks are currently in preview.

We added two YAML keywords (**publish** and **download**) to make it easier to publish and consume artifact in YAML-based pipelines. These keywords can be used in place of traditional task steps for most scenarios. For example, you can publish (upload) the contents of the bin directory as an artifact named "binaries" use the following YAML code:

```yaml
steps:
- publish: bin
  artifact: binaries
```

To consume (download) the artifact in the same job or a later job in the same pipeline use the following:

```yaml
steps:
- download: current
  artifact: binaries
```

We have also updated the Download Pipeline Artifact to let you download artifacts that have been published with the traditional Publish Build Artifacts task. Now you don't need to know how an artifact was published when you are going to consume it in your pipeline.

To learn more about these changes, see the pipeline artifacts in Azure Pipeline documentation [here](https://docs.microsoft.com/azure/devops/pipelines/artifacts/pipeline-artifacts?view=azure-devops&tabs=yaml).

### Use cron syntax to specify schedules in a YAML file

Previously, you could use the UI editor to specify a scheduled trigger for YAML pipelines. With this update, you can schedule builds using cron syntax in your YAML file and take advantage of the following benefits:

1. Config as code: You can track the schedules along with your pipeline as part of code.
2. Expressive: You have more expressive power in defining schedules than what you were able to with the UI. For instance, it is easier to specify a single schedule that starts a run every hour.
3. Industry standard: Many developers and administrators are already familiar with the cron syntax.

```
schedules:
- cron: "0 0 * * *"
  displayName: Daily midnight build
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/ancient/*
  always: true
```

Going forward you won't be able to add or update schedules that have been created using the UI editor. We will continue to honor those schedules for some time, but we recommend that you remove them from the UI and add them to the YAML file.

### Updates to multi-stage pipelines public preview

We continue to add features to the multi-stage pipelines public preview. With this update we made improvements to the log viewing experience, added the ability to view all runs inside of folders, and supported build extensions in the new pages. 

In addition, we fixed a few bugs and added the ability to create new pipelines directly into a folder. In the previous sprint, we completed work around browsing and downloading Artifacts, which was a popular feature request.
