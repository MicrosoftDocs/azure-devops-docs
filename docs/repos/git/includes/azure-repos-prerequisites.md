---
ms.service: azure-devops-repos
ms.topic: include
ms.date: 07/06/2026
ms.subservice: azure-devops-repos-git
---

::: moniker range="azure-devops"

| Category | Requirements |
|--------------|-------------|
| Project access | Member of a [project](../../../organizations/projects/create-project.md). |
| Permissions | - View code in private projects: At least **Basic** access.<br>- Clone or contribute to code in private projects: Member of the **Contributors** security group or corresponding permissions in the project.<br>- Set branch or repository permissions: **Manage permissions** for the branch or repository.<br>- Set branch policies, status checks, or change the default branch: **Edit policies** permission for the repository or branch, or membership in the **Project Administrators** security group.<br>- Import a repository: Member of the **Project Administrators** security group or Git project-level **Create repository** permission set to **Allow**. For more information, see [Set Git repository permissions](../set-git-repository-permissions.md). |
| Services | [Repos enabled](../../../organizations/settings/set-services.md). |
| Tools | Optional. Use `az repos` commands: [Azure DevOps CLI](../../../cli/index.md).|

::: moniker-end

::: moniker range=" < azure-devops"

| Category | Requirements |
|--------------|-------------|
| Project access | Member of a [project](../../../organizations/projects/create-project.md). |
| Permissions | - View code: At least **Basic** access.<br>- Clone or contribute to code: Member of the **Contributors** security group or corresponding permissions in the project. |
| Services | [Repos enabled](../../../organizations/settings/set-services.md). |

::: moniker-end


