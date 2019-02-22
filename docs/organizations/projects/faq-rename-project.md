---
title: Troubleshooting renaming a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: View frequently asked questions (FAQs) about renaming a project, including what else gets renamed.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: befe4a1c-90da-425d-a377-436fe73c21c6
toc: show
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 12/07/2018
monikerRange: '>= tfs-2015'
---

# Troubleshoot renaming a project

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)]

### Q: What permission do I need to rename a project?

If you're using Azure DevOps Services or Team Foundation Server 2017 or later version, project rename requires the **Rename project** permission for a project.
If you're using Team Foundation Server 2015, users require **Edit project-level information** permission on a project to rename it. To learn more, see [Add administrators, set permissions at the project-level or project collection-level](../security/set-project-collection-level-permissions.md#change-the-permission-level-for-a-project-level-group)

### Q: Can I use a project name again?

Yes, project names can be reused.

### Q: Why did my attempt to reuse a project name fail due to existing work spaces?

A project name can't be reused if there are still workspace mappings addressing it.
This is done to avoid the ambiguity case where a workspace could be mapped to two projects.
You need to reach out to the users that have these mappings, and either delete them or [update them](rename-project.md#tfvc-server) to use the new name. 
If the user's machine containing the workspace is no longer available then you can delete the workspace 
by running the following command from Visual Studio's developer command prompt:

```tf workspace /delete [/collection:TeamProjectCollectionUrl] workspacename[;workspaceowner]```


### Q: How does renaming a project impact my browser navigation experience?

After a project is renamed, any browsers with the project opened may encounter some errors. These errors are due to caches held by the browser which include the old project name. 
Refreshing makes these errors go away since the cache is repopulated with the new project name.

### Q: Do other artifacts in the project get renamed when it is renamed?

::: moniker range=">= tfs-2018"
Yes, all artifacts which share the same name get renamed along with the project. The only exceptions to this are for the default team and repo. The rename of these artifacts is performed as a best effort. 
For example, if a project *Foo* was renamed to *Bar*, the default team *Foo* would not be renamed if a team named *Bar* already existed in the project. 
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2017"

Yes, all artifacts which share the same name get renamed along with the project. The only exceptions to this are for the default team room, team, and repo. The rename of these artifacts is performed as a best effort. 
For example, if a project *Foo* was renamed to *Bar*, the default team *Foo* would not be renamed if a team named *Bar* already existed in the project. 

::: moniker-end

### Q: Why can't I open queries saved to a disk after a rename?

If you use Visual Studio 2010 and you have queries save to disk, you can't open them after a project is renamed. You can use Visual Studio 2012 or newer to open them.

::: moniker range=">= tfs-2015"

### Q: Why does the existing Lab Management BDT in Visual Studio fail with the error 'oldprojectName' cannot be found?

This issue is encountered when Build Controller 2013 is used with TFS 2015. To fix the issue, open the existing build pipeline, select the process tab under it, select the ellipses next to the Lab Process settings to
open the Lab Workflow Parameters wizard, and then select **Finish**. The issue is permanently resolved by using the TFS 2015 Build Controller that ships with TFS 2015.

![Process Tab](_img/rename-project/lab-build-process.png)

::: moniker-end