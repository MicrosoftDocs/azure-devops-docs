---
ms.topic: include
---

## Prerequisites

Check out [Configure and customize Azure Boards](../../../boards/configure-customize.md), which offers guidance on tailoring Azure Boards to align with your specific business requirements.

::: moniker range="azure-devops"

- **Organization requirement**: Ensure you have an [organization in Azure DevOps](../../accounts/create-organization.md).

- **Permissions**:
    - Be a member of the [**Project Collection Administrators** group](../../security/change-organization-collection-level-permissions.md).
    - Have collection-level permissions such as **Create process**, **Delete process**, **Edit process**, or **Delete a field from organization** set to **Allow**.
   - These permissions allow you to modify processes and fields within your organization.

::: moniker-end

::: moniker range=" < azure-devops"

- **Project process model requirement**:
   - Ensure that you have the [Inheritance process model](../../../reference/customize-work.md#choose-the-process-model-for-your-project-collection) for the project collection where the project is created.

- **Permissions**:
    - Be a member of the [**Project Collection Administrators** group](../../security/change-organization-collection-level-permissions.md).
    - Have collection-level permissions such as **Create process**, **Delete process**, **Edit process**, or **Delete a field from organization** set to **Allow**.
     - These permissions allow you to modify processes and fields within your organization.

::: moniker-end
