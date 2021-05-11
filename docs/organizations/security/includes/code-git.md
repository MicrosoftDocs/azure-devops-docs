---
ms.technology: devops-code-git 
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 04/15/2021
---


::: moniker range=">= tfs-2017"

---
:::row:::
   :::column span="2":::
      **Permission** 
   :::column-end:::
   :::column span="1":::
     **Readers**
   :::column-end:::
   :::column span="1":::
     **Contributors**
   :::column-end:::
   :::column span="1":::
     **Build Admins**
   :::column-end:::
   :::column span="1":::
     **Project Admins**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Read** (clone, fetch, and explore the contents of a repository); also, can create, comment on, vote, and **Contribute to pull requests**
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Contribute** to a repository, **Create branches**, **Create tags**, and **Manage notes**
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="2":::
      **Bypass policies when pushing** to a repository 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="2":::
      **Create repository**, **Delete repository**, and **Rename repository**
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Edit policies**, **Force push (rewrite history, delete branches and tags)**, **Manage permissions**, **Remove others' locks**
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Bypass policies when completing pull requests** (not set for any security group)
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
:::row-end:::
---
::: moniker-end


::: moniker range="tfs-2015"

By default, the project-level Readers groups have read-only permissions.

---
:::row:::
   :::column span="2":::
      **Permission** 
   :::column-end:::
   :::column span="1":::
     **Contributors**
   :::column-end:::
   :::column span="1":::
     **Build Admins**
   :::column-end:::
   :::column span="1":::
     **Project Admins**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Branch Creation**: At the repository level, can push their changes to branches in the repository. Does not override restrictions in place from [branch policies](/azure/devops/repos/git/branch-policies). At the branch level, can push their changes to the branch and lock the branch.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Contribute**: At the repository level, can push their changes to branches in the repository. Does not override restrictions in place from [branch policies](/azure/devops/repos/git/branch-policies). At the branch level, can push their changes to the branch and lock the branch.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Note Management**: Can push and edit Git notes to the repository. They can also remove notes from items if they have the **Force** permission.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Tag Creation**: Can push tags to the repository, and can also edit or remove tags if they have the **Force** permission.
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Administer**: Delete and rename repositories: If assigned to the top-level **Git repositories** entry, can add additional repositories. At the branch level, users can set permissions for the branch and unlock the branch. The Administer permission set on an individual Git repository does not grant the ability to rename or delete the repository. These tasks require **Administer** permissions at the Git repositories top-level. 
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="2":::
      **Rewrite and destroy history (force push)**: Can force an update to a branch and delete a branch. A force update can overwrite commits added from any user. Users with this permission can modify the commit history of a branch.
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
       
   :::column-end:::
   :::column span="1":::
      ✔️
   :::column-end:::
:::row-end:::
---
 
::: moniker-end

<a name="pcbs-has-read-by-default"></a>

By default, the Project Collection Build Service can read from all repositories. Any pipeline which runs within the project collection scope can potentially read any repository in the organization or collection. To remove this permission for a repository, change the **Read** permission to **Deny** for the Project Collection Build Service. 