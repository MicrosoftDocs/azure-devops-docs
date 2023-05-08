---
author: ckanyika
ms.author: ckanyika
ms.date: 5/8/2023
ms.topic: include
---

### Pipeline agents can be registered using a Service Principal

As Azure DevOps Service Principals support in preview, we have added the capability to use a Service Principal to register a Pipelines agent with Azure DevOps Service:
```
 --auth 'SP' --client-id 12345678-1234-1234-abcd-1234567890ab --client-secret  --tenant-id 12345678-1234-1234-abcd-1234567890ab
```
This removes the need to use a Personal Access Token (PAT)

### Pipeline settings audit improvements

To further increase the security of Azure Pipelines, we've added support for auditing changes to Pipelines settings at the organization-level. We've added a new type of audit log event with `"ActionId": "Pipelines.OrganizationSettings"`. For example, toggling off *Limit variables that can be set at queue time* will generate an audit event with `"ActionId": "Pipelines.OrganizationSettings"` and `"Details": "Pipelines setting "EnforcesettableVar" changed from "True" to "False" at organization level."`

To improve clarity and consistency between organization-level and project-level events, we've separated the audit events for changing project-level Pipelines retention settings from non-retention settings. The latter will now have `"ActionId": "Pipelines.ProjectSettings"`. For example, turning off *Disable anonymous access to badges* will generate an audit event with `"ActionId": "Pipelines.ProjectSettings"` and `"Details": "Pipelines setting "statusBadgesArePublic" changed from "False" to "True" in "test" project."`

