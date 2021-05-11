---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 08/03/2020
ms.topic: include
---

### Pipelines images announcements

> [!NOTE]
> We’re constantly working to improve your experience using Azure Pipelines. To learn more about upcoming updates on our Windows/Linux/macOS images updates please check here:
>
> Azure Pipelines images are continuously updated in an effort to provide users with the best experience possible. These routine updates are predominantly aimed at addressing bugs or out of date software. They will often have no impact on your pipelines, however this is not always the case. Your pipeline may be impacted if it takes a dependency on a piece of software that has either been removed or updated on the image.
>
> To learn more about upcoming updates on our Windows and Linux images, please read the following announcements:
>
> - [Window 2016](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/win/Windows2016-Readme.md)
> - [Windows 2019](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/win/Windows2019-Readme.md)
> - [Ubuntu 16.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu1604-README.md)
> - [Ubuntu 18.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu1804-README.md)
> - [Ubuntu 20.04](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/linux/Ubuntu2004-README.md)
> - [Mac OS 10.15](https://github.com/actions/virtual-environments/blob/d6d20c9d84ca1e4f4d1c9767bc00ce26d226c7f9/images/macos/macos-10.15-Readme.md)
>
> To view release notes for upcoming (pre-release) and deployed changes, please subscribe to the following release notes:
>
> - [Release notes](https://github.com/actions/virtual-environments/releases)

### Multi-repo triggers

You can specify multiple repositories in one YAML file and cause a pipeline to trigger by updates to any of the repositories. This feature is useful, for instance, in the following scenarios:

- You consume a tool or a library from a different repository. You want to run tests for your application whenever the tool or library is updated.
- You keep your YAML file in a separate repository from the application code. You want to trigger the pipeline every time an update is pushed to the application repository.

With this update, multi-repo triggers will only work for Git repositories in Azure Repos. They don't work for GitHub or BitBucket repository resources.

Here is an example that shows how to define multiple repository resources in a pipeline and how to configure triggers on all of them.

```yaml
trigger:
  - main

resources:
  repositories:
    - repository: tools
      type: git
      name: MyProject/tools
      ref: main
      trigger:
        branches:
          include:
            - main
            - release
```

The pipeline in this example will be triggered if there are any updates to:

- `main` branch in the `self` repo containing the YAML file
- `main` or `release` branches in `tools` repo

For more information, see [Multiple repositories in your pipeline](/azure/devops/pipelines/repos/multi-repo-checkout?view=azure-devops&preserve-view=true).

### Updates to macOS 10.14 (Mojave) image

In the next few weeks, we'll update the Node.js version on the macOS 10.14 (Mojave) image from 6 to 8. If you still need to use node.js version 6, consider using the node.js tool installer task - [here](/azure/devops/pipelines/tasks/tool/node-js?view=azure-devops&preserve-view=true).

In addition to these changes, the macOS 10.14 image will be added to [the virtual environment](https://github.com/actions/virtual-environments/tree/main/images) repo and begin receiving tooling updates monthly instead of weekly.

### GitHub draft pull requests do not trigger pipelines

When you create a draft pull request in Azure Repos, we wouldn't trigger a PR validation pipeline configured in your branch policy. We consider a draft pull request to be just that - a draft for which we shouldn't automatically run validations. While this use case worked for Azure Repos, the same behavior didn't hold for GitHub repos.

With this change, we're making the experience consistent for GitHub repos as well. When you create a [draft pull request](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) in GitHub, we won't start a pipeline automatically even if you configure a pull request trigger for the target branch. In order to validate your changes in a draft pull request, you can manually start a pipeline pointing to the `ref` of the pull request.