---
title: Publishing npm packages
ms.custom: seodec18
description: Publishing npm packages to Azure Artifacts or other npm registries
services: vsts
ms.assetid: F4C61B91-2C5B-4848-A4BF-B658F549673A
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: amullans
ms.date: 06/12/2018
monikerRange: '>= tfs-2017'
---

# Publish npm packages

**Azure Pipelines | TFS 2018 | TFS 2017**

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

You can publish npm packages produced by your build to:

* Azure Artifacts or the TFS Package Management service
* Other registries such as `https://registry.npmjs.org/`

Before you read this topic, you should understand the kind of build pipeline you're creating: [designer](../get-started-designer.md) or [YAML](../get-started-yaml.md).

# [YAML](#tab/yaml)

::: moniker range="vsts"
[!INCLUDE [package management permissions](_shared/package-management-permissions-for-yaml-build.md)]

To publish to a external npm registry, you must first create a service connection to point to that feed. You can do this by going to **Project settings**, then choosing **Services**, and then creating a **New service connection**. Select the **npm** option for the service connection. Fill in registry URL and the credentials to connect to the registry.

To publish a package to a npm registry, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: Npm@1
  inputs:
    command: publish
    publishEndpoint: '<copy and paste the name of the service connection here>'
```

For a list of other options, see the [npm task](../tasks/package/npm.md).

::: moniker-end

::: moniker range="< vsts"
YAML is not supported in TFS.
::: moniker-end

# [Designer](#tab/designer)

To publish an npm package to a Package Management feed, add the **npm** task. Then, configure these options:

- **working folder:** Select the folder that contains your `.npmrc` and `package.json`; leave blank if those files are at the root of the repo
- **npm command:** `publish`

![Azure Pipelines npm publish task configuration](_img/npm/team-build-npm-publish.png)

[!INCLUDE [package management permissions](_shared/package-management-permissions-for-web-build.md)]

To publish to a external npm registry, you must first create a service connection to point to that registry. You can do this by going to **Project settings**, then choosing **Service connections**, and then creating a **New service connection**. Select the **npm** option for the service connection. Fill in registry URL and the credentials to connect to the registry.

---

> [!NOTE]
> Build does not support using the `publishConfig` property to specify the `registry` to which you're publishing. Ensure your working folder has a `.npmrc` file with a `registry=` line, as detailed in the Connect to feed screen in your feed.

## Q&A

### Where can I learn about the Azure Pipelines and TFS Package management service?

[Package Management service](../../artifacts/index.md) 