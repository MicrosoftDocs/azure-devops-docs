---
title: Optimize your workspace
titleSuffix: Azure Repos
description: Optimize your workspace
ms.assetid: 0ad2897c-5a99-455e-a5ee-16e4413d0b6b
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Optimize your workspace

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Does your team have a large and complex codebase? Do you want your workspace to contain only the files you need to improve performance, reduce network traffic, and reduce the disk space required on your dev machine?

-   [Optimize your folder names](optimize-your-workspace.md#folder_name)

-   [Optimize your workspace using explicit, implicit, cloaked, and non-recursive folder mappings](optimize-your-workspace.md#mappings)

-   [Use workspaces to isolate and manage work among different branches](optimize-your-workspace.md#isolate)

<a name="folder_name"></a>

## Optimize your folder names

If you don't yet use branches, on your server, you should put all your code in a subfolder called Main (for example: `$/TFVCTeamProject/Main/`). If you do, then you'll be ready when your team grows big enough to require branches to manage your codebase. On your dev machine, you should use a short, understandable folder path that matches your project structure such as `C:\Users\\YourName\Source\Workspaces\TFVCTeamProject\Main\SolutionName\`.

Some more tips on effective folder names:

-   Keep all folder, sub-folder, and file names short to simplify your work and avoid potential long-path issues that can occur with some types of code projects.

-   Avoid whitespace if you want to make command-line operations a little easier to perform.

<a name="mappings"></a>

## Optimize your workspace using explicit, implicit, cloaked, and non-recursive folder mappings

If your codebase is large, you can avoid wasting time, network bandwidth, and local disk space by optimizing your workspace folder mappings.

When you map a folder, make sure that you choose a folder high enough in the code tree that you get all the files you need to create a local build, but low enough that you are not getting more files than you need. You can also use some tools to more simply and quickly create a usable workspace: **explicit**, **implicit**, **cloaked**, and **non-recursive** folder mappings.

When you look at the workspace of fictitious developer, Raisa, below, you might wonder to yourself: why didn't she simply map `$/SiteApp/` to `c:\\code\\SiteApp\\` and be done with it? A simple workspace like this would **implicitly** map all the folders she needs in `$/SiteApp/Main/`.

The main problem with this approach is that it would also provide her with a lot of files she does not need, and thus waste time and resources. So Raisa creates some tailored folder mappings.

![Folder mappings](_img/optimize-your-workspace/IC720115.png)

![Folder mappings](_img/optimize-your-workspace/IC720116.png)

<table><tbody>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC756627.png" title="Step 1" alt="Step 1" /></p></td>
	<td><p>Raisa doesn't develop customized build processes so she doesn't need `$/SiteApp/BuildProcessTemplates`. Over time she expects the codebase to grow, and she also does not want to automatically download every new bit of code added to `$/SiteApp/Main/`. As teams working in those other folders change those files, when Raisa gets the latest files from the server, she could incur long delays waiting for updates to files she doesn't need.</p><p>To develop her code, Raisa needs all the code projects that comprise the FabrikamFiber solution. Rather than <strong>explicitly</strong> including each code project (for example, `$/SiteApp/Main/FabrikamFiber/FabrikamFiber.DAL`) she instead maps `$/SiteApp/Main/FabrikamFiber/`, and thus she <strong>implicitly</strong> maps all the sub-folders that contain the code projects she needs.</p></td></tr>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC646325.png" title="Step 2" alt="Step 2" /></p></td>
	<td><p>Raisa does not need the files in `$/SiteApp/Main/FabrikamFiber/3DModels` or `$/SiteApp/Main/FabrikamFiber/Docs`, and because they are implicitly mapped by<img src="_img/optimize-your-workspace/IC756627.png" title="Step 1" alt="Step 1" />, she uses two <strong>cloaked</strong> mappings to exclude these folders from her workspace.</p></td></tr>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC646326.png" title="Step 3" alt="Step 3" /></p></td>
	<td><p>Raisa and others on her team maintain and sometimes augment a set of some fundamental libraries. She needs almost all current libraries in this folder and expects to need libraries her team adds there in the future, so she maps `$/SiteApp/Main/libraries/Common`.</p></td></tr>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC646327.png" title="Step 4" alt="Step 4" /></p></td>
	<td><p>Raisa needs only a small segment of a large folder, `$/SiteApp/Main/libraries/Common/LibraryC`, so she maps it as <strong>cloaked</strong> and then explicitly maps just the sub-folder she needs: `$/SiteApp/Main/libraries/Common/LibraryC/Sub-Library1`.</p></td></tr>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC646328.png" title="Step 5" alt="Step 5" /></p></td>
	<td><p>Raisa needs some of the files immediately within `LibraryD`, but she does not need the large contents of its sub-folders, so she applies a <strong>non-recursive</strong> mapping to this folder: `$/SiteApp/Main/libraries/Specialized/LibraryD/*`.</p></td></tr></tbody>
</table>

<a name="isolate"></a>

## Use workspaces to isolate and manage work among different branches

If your company uses [branches to isolate risk](use-branches-isolate-risk-team-foundation-version-control.md) in your codebase, then you should create a separate workspace for each branch you work in.

For example, at Fabrikam Fiber, the codebase and the staff have grown. To isolate the risk among their many teams, they've branched their codebase. Raisa continues her work within her small team, but now she uses a few workspaces to manage the work that she now does in multiple branches.

![Branches](_img/optimize-your-workspace/IC578257.png)

<table><tbody>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC756627.png"/></p></td>
	<td><p><strong>Develop features</strong> She modifies her default workspace to do work in the Extranet branch, where she participates in the development of the customer-facing website in this branch.</p></td></tr>
<tr>
	<td><p><img src="_img/optimize-your-workspace/IC646325.png"/></p></td>
	<td><p><strong>Integrate and stabilize</strong> She creates two new workspaces to do work in the Test and Dev branches, where she collaborates with other developers and testers to stabilize the code during integration.</p></td></tr></tbody>
</table>

Raisa manages her work in three workspaces, each of which maps folders in a branch on the server with the folders on her dev machine.

![Branches](_img/optimize-your-workspace/IC720117.png)

> **Note:**  
> [Branching](use-branches-isolate-risk-team-foundation-version-control.md) or [suspending (or shelving)](suspend-your-work-manage-your-shelvesets.md) are the preferred ways to isolate different work efforts against the same codebase. However, if neither of these approaches meets your needs, you can map the same server folder in more than one workspace. In most cases you should not need to do this. If you do map the same server folder in more than one workspace, remember that you could have separate and different pending changes to the same file stored in each workspace.
