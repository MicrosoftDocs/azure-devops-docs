---
ms.topic: include
---

### Proxy support for Artifacts-related tasks

Until now, many Artifacts-related build tasks didn't provide full support for Azure Pipelines' proxy infrastructure, which led to challenges using the tasks from on-premises agents. With this update, we've added support for proxies to the following tasks:

- [npm](/azure/devops/pipelines/tasks/package/npm?view=azdevops)
- [NuGet](/azure/devops/pipelines/tasks/package/nuget?view=azdevops) - restore and push commands only
- [.NET Core CLI](/azure/devops/pipelines/tasks/build/dotnet-core-cli?view=azdevops) - restore and NuGet push commands only
- [Universal Packages](/azure/devops/pipelines/artifacts/universal-packages?tabs=yaml&view=azdevops)
- [npm Authenticate](/azure/devops/pipelines/tasks/package/npm-authenticate?view=azdevops), [Pip Authenticate](/azure/devops/pipelines/tasks/package/pip-authenticate?view=azdevops), [Twine Upload Authenticate](/azure/devops/pipelines/tasks/package/twine-authenticate?view=azdevops)
    > [!NOTE]
    > These tasks do not configure the proxy for the underlying tool (npm, pip, twine). They support proxies during the acquisition of auth tokens, but it is still necessary to configure any subsequent tasks/scripts/tools to also use the proxy.
- [.NET Core Tool Installer](/azure/devops/pipelines/tasks/tool/dotnet-core-tool-installer?view=azdevops), [NuGet Tool Installer](/azure/devops/pipelines/tasks/tool/nuget?view=azdevops), [Node.js Tool Installer](/azure/devops/pipelines/tasks/tool/node-js?view=azdevops)

### Delegate who can manage feeds

In Azure Artifacts, [Project Collection Administrators](/azure/devops/organizations/security/set-project-collection-level-permissions?tabs=new-nav&view=azdevops) (PCAs) have always been able to administer all feeds in an Azure DevOps organization. With this update, PCAs can also give this ability to other users and groups, thus delegating the ability to manage any feed.