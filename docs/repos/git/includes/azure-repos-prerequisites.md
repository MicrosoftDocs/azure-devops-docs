---
ms.service: azure-devops-repos
ms.topic: include
ms.date: 02/03/2022
ms.subservice: azure-devops-repos-git
---

::: moniker range="azure-devops"

- **Repos** must be enabled in your Azure DevOps project settings. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md) to reenable **Repos**.

- To view code in private projects, be a member of an Azure DevOps project with at least **Basic** access. For public projects, everyone can view the code.

  - If you don't have a project, create one or [sign up for free](../../../user-guide/sign-up-invite-teammates.md).
  
  - If you aren't a project member, [get added](../../../organizations/accounts/add-organization-users.md).

- To clone or contribute to code for a private project, be a member of the **Contributors** security group or have the corresponding permissions set. For public projects, anyone can clone and contribute code. For more information, see [What is a public project?](/azure/devops/organizations/projects/about-projects)

  > [!NOTE]
  > For public projects, users granted **Stakeholder** access have full access to **Azure Repos**.

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- **Repos** must be enabled in your Azure DevOps project settings. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md) to reenable **Repos**.

- To view code, be a member of the Azure DevOps project with at least **Basic** access. If you aren't a project member, [get added](../../../organizations/security/add-users-team-project.md).

- To clone or contribute to code, be a member of the **Contributors** security group, or have the corresponding permissions, in the project you want to change.

::: moniker-end


