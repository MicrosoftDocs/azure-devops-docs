---
ms.topic: include
---

For guidance on tailoring Azure Boards to align with your specific business requirements, see [About configuring and customizing Azure Boards](../../../boards/configure-customize.md).

| Category | Requirements |
|--------------|-------------|
| **Permissions** | - To create, delete, or edit a process: Member of the [Project Collection Administrators](../../security/change-organization-collection-level-permissions.md) group or specific collection-level permissions **Create process**, **Delete process**, **Edit process**, or **Delete a field from organization** set to **Allow**. For more information, see [Set permissions and access for work tracking, Customize an inherited process](../../../security/set-permissions-access-work-tracking.md#customize-an-inherited-process).<br>- To update boards: [Team Administrator](../add-team-administrator.md) or a member of the [Project Administrators](../../security/change-project-level-permissions.md) group. |
| **Access** | - Even if you have **Basic** or lower access, you can still change a process if someone gives you permissions to do so.<br>- To update and change the type of your existing work items: Member of the project. |
| **Project process model** | - Have the [Inheritance process model](../../../reference/customize-work.md#choose-the-process-model-for-your-project-collection) for the project collection containing the project.<br>- If migrating data to Azure DevOps Services, use the [Team Foundation Server Database Import Service](../../../migrate/migration-overview.md). |
| **Knowledge** | Familiarity with the [customization and process models](../../../reference/customize-work.md). |
