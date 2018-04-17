---
title: Troubleshooting renaming a team project
description: Troubleshooting renaming a team project
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: befe4a1c-90da-425d-a377-436fe73c21c6
toc: show
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/6/2017
monikerRange: 'tfs-2015 || vsts'
---


# Troubleshoot renaming a team project

**VSTS** | **TFS 2015**

#### Q: What permission do I need to rename a team project?

If you're using VSTS or Team Foundation Server 2017 or later, team project rename requires the "rename team project" permission for a team project.
If you're using Team Foundation Server 2015, users require "edit project-level information" permission on a team project to rename it. 

#### Q: Can I use a team project name again?

Yes, team project names can be reused.

#### Q: Why did my attempt to reuse a team project name fail due to existing workspaces?

A team project name can't be reused if there are still workspace mappings addressing it. 
This is done to avoid the ambiguity case where a workspace could be mapped to two projects. 
You will need to reach out to the users that have these mappings, and either delete them or [update them](rename-team-project.md#tfvc-server) to use the new name. 
If the user's machine containing the workspace is no longer available then you can delete the workspace 
by running the following command from Visual Studio's developer command prompt:

```tf workspace /delete [/collection:TeamProjectCollectionUrl] workspacename[;workspaceowner]```


#### Q: How does renaming a team project impact my browser navigation experience?

After a team project is renamed, any browsers with the team project opened may encounter some errors. These errors are due to caches held by the browser which include the old team project name. 
Refreshing will make these errors go away since the cache will be repopulated with the new team project name.
	
#### Q: Do other artifacts in the team project get renamed when it is renamed?

Yes, all artifacts which share the same name get renamed along with the team project. The only exceptions to this are for the default team room, team, and repo. The rename of those artifcats is done as a best effort. 
For example, if a team project Foo was renamed to Bar, the default team Foo would not be renamed if a team named Bar already existed in the team project. 

#### Q: Why can't I open queries saved to disk after a rename?

If you use Visual Studio 2010 and you have queries save to disk, you will not be able to open them after a team project is renamed. You can use Visual Studio 2012 or newer to open them.

#### Q: Why does the existing Lab Management BDT in Visual Studio fail with the error 'oldprojectName' cannot be found?

The issue is encountered when Build Controller 2013 is used with TFS 2015. To fix the issue, open the existing Build Definition, select the process tab under it, select the ellipses next to the Lab Process settings to
open the Lab Workflow Parameters wizard, and then select **Finish**. The issue is permanently resolved by using the TFS 2015 Build Controller that ships with TFS 2015.

![Process Tab](_img/rename-team-project/lab-build-process.png)
