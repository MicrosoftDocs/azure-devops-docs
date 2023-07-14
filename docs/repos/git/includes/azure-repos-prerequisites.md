---
ms.service: azure-devops-repos
ms.topic: include
ms.date: 02/03/2022
ms.subservice: azure-devops-repos-git
---

::: moniker range="azure-devops"

- **Repos** must be enabled in your Azure DevOps project settings. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md) to reenable **Repos**.

- To view code in private projects, you must be a member of an Azure DevOps project with **Basic** access level or higher. For public projects, everyone can view the code.

  - If you don't have a project, create one or [sign up for free](../../../user-guide/sign-up-invite-teammates.md).
  
  - If you aren't a project member, [get added](../../../organizations/accounts/add-organization-users.md).

- To clone or contribute to code for a private project, you must be a member of the **Contributors** security group or have the corresponding permissions set. For public projects, anyone can clone and contribute code. To learn more, see [What is a public project?](/azure/devops/organizations/projects/about-projects)

  > [!NOTE]
  > For public projects, users granted **Stakeholder** access have full access to **Azure Repos**.

::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- **Repos** must be enabled in your Azure DevOps project settings. If the **Repos** hub and associated pages don't display, see [Turn an Azure DevOps service on or off](../../../organizations/settings/set-services.md) to reenable **Repos**.

- To view code, you must be a member of the Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../../organizations/security/add-users-team-project.md).

- To clone or contribute to code, you must be a member of the **Contributors** security group, or have the corresponding permissions, in the project you want to change.

::: moniker-end

::: moniker range="< azure-devops-2019"

- To view code, you must be a member of an Azure DevOps project with **Basic** access or higher. If you aren't a project member, [get added](../../../organizations/security/add-users-team-project.md).

- To clone or contribute to code, you must be a member of the **Contributors** security group or have the corresponding permissions.

::: moniker-end
