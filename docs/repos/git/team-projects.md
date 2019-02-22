---
title: Use TFVC and Git repos in the same project
titleSuffix: Azure Repos
description: Using Version Control for your project in Azure DevOps
ms.assetid: F1DE1F34-50BD-49A6-BF67-D27F884944F4
toc: show
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 09/10/2018 
monikerRange: '>= tfs-2015'
---


#  Use Git and TFVC repos in the same project
#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 Update 1

In Team Foundation Server 2015 Update 1, a project administrator can add a Git repo to a project created with Team Foundation Version Control (TFVC). You can also add a TFVC repo to a project created with Git. This allows you to adopt a new version control system while preserving all the data in your project. 

## Enable access to the new repo type

Because permissions are applied at project creation time by a process template, there will be a small amount of work to correct permissions for a new repo type.

### Add Git repos to a Team Foundation Version Control project

If your TFVC project was created prior to TFS 2015 Update 1, a project administrator will need to apply some project-level permissions once the first Git repo is created. Go to the Version Control administration page and select the "Git repositories" node in the tree. To set up the same group permissions as any of our default process templates (Agile, Scrum, CMMI), add the following TFS groups and permissions:

1. [_ProjectName_]\Readers
	- Allow: Read
	- Not set: All others
2. [_ProjectName_]\Contributors
	- Allow: Branch creation, Contribute, Note management, Read, Tag creation
	- Not set: All others
3. [_ProjectName_]\Build Administrators
	- Allow: Branch creation, Contribute, Note management, Read, Tag creation
	- Not set: All others

If your TFVC project was created **after** TFS 2015 Update 1, these permissions have already been applied for you, and no action is necessary except creating the repository.

### Add a Team Foundation Version Control repo to a Git project

The project administrator will need to apply some project folder-level permissions when the project folder is created. Go to the Version Control administration page and select the "$/_ProjectName_" node in the tree. To set up the same groups as any of our default process templates (Agile, Scrum, CMMI), add the following TFS groups and permissions:

1. [_ProjectName_]\Readers
	- Allow: Read
	- Not set: All others
2. [_ProjectName_]\Contributors
	- Allow: Check in, Check out, Label, Lock, Merge, Read
	- Not set: All others
3. [_ProjectName_]\Build Administrators
	- Allow: Check in, Check out, Label, Lock, Merge, Read
	- Not set: All others

## Projects with multiple repo types in Visual Studio

To see both types of repos in Visual Studio, you need Visual Studio 2015 Update 1. Older versions of Visual Studio, including 2015 RTM, will only see the type of repo created with the project. For example, if the project was created with Git you will only see Git repos when you connect from Visual Studio 2015 RTM or earlier.

## Projects with multiple repo types in Team Explorer Everywhere

To see both types of repos in Eclipse, you need the Team Explorer Everywhere Plugin for Eclipse 14.0.2. Older versions of the plugin will only see the type of repo created with the project. For example, if the project was created with Git you will only see Git repos when you connect with Team Explorer Everywhere 14.0.1 or earlier.
