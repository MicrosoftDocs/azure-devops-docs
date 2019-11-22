---
title: Add & manage security groups
titleSuffix: Azure DevOps Services
description: Add and manage security groups in an organization using the Azure DevOps CLI.  
ms.technology: devops-security
ms.prod: devops
ms.assetid: 
ms.topic: conceptual
ms.manager: geverghe
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 11/22/2019
---

# Add and manage security groups

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]  

Security groups assign a set of permissions to members of the group. For example, members of a Contributors group or Project Administrators group are assigned the permissions that are allowed for those groups.

Azure DevOps is pre-configured with default security groups. You can add and manage security groups for your organization with the [az devops security group](/cli/azure/ext/azure-devops/devops/security/group) commands. Use this command to:

- Create a new security group
- View security groups and security group details
- Update or delete a security group

> [!NOTE]
> For Azure DevOps Services, you can manage security groups using the `az devops security group` command documented in this article, or using the TFSSecurity command. To use the TFSSecurity command, you must install Azure DevOps Server 2019 to get access to the command line tool. To learn more, see [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd).

## Prerequisites 

- To add and manage security groups, you must be a member of the Project Collection Administrators security group.  
- You must have installed the Azure DevOps CLI extension as described in [Get started with Azure DevOps CLI](../../cli/index.md).  
- Sign into Azure DevOps using `az login`.  
- For the examples in this article, set the default organization using `az devops configure --defaults organization=YourOrganizationURL`.  

## Security group commands

> [!div class="mx-tdBreakAll"]  
> | Command | Description |
> |--------| -----------|
> | `az devops security group create` | Create an Azure DevOps security group. |
> | `az devops security group delete` | Delete an Azure DevOps security group. |
> | `az devops security group list` | List all the groups in a project or organization. |
> | `az devops security group show` | Show group details. |
> | `az devops security group update` | Update name and description for a security group. |
> | `az devops security group membership add` | Add a member to a security group. |
> | `az devops security group membership list` | List the memberships for a group or user. |
> | `az devops security group membership remove` | Remove a member from a security group. |

The following parameters are optional for all commands, and not listed in the examples provided in this article. 

- **detect**: Automatically detect organization. Accepted values: false, true. Default is true.
- **org**: Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: `--org https://dev.azure.com/MyOrganizationName/`.

## Create a security group

You can create a security group with the [az devops security group create](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-create) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group create [--description]
                                [--email-id]
                                [--groups]
                                [--name]
                                [--origin-id]
                                [--project]
                                [--scope {organization, project}]
```

### Parameters

- **description**: Optional. Description of the new security group.
- **email-id**: Optional. Create new group using the email address as a reference to an existing group from an external AD or AAD backed provider. Required if **name** or **origin-id** is missing.
- **groups**: Optional. A comma-separated list of descriptors referencing groups you want the newly created group to join.
- **name**: Optional. Name of the new security group. Required if **origin-id** or **email-id** is missing.
- **origin-id**: Optional. Create new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. Required if **name** or **email-id** is missing.
- **project**: Optional. Name or ID of the project in which the group should be created.
- **scope**: Optional. Create group at project or organization level. Accepted values are *organization* and *project* (default).

### Example

The following command creates the **Account Management** security group in the project **MyFirstProject** and shows the result in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group create --name "Account Management" --project MyFirstProject --description "Management team focused on creating and maintaining customer services" --output table

Name                                 Description
-----------------------------------  ---------------------------------------------------------------------
[MyFirstProject]\Account Management  Management team focused on creating and maintaining customer services
```

## Delete a security group

You can delete a security group with the [az devops security group delete](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-delete) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group delete --id
                                [--yes]
```

### Parameters

- **id**: Required. Security group descriptor. To obtain a descriptor, use the [az devops security group list](#list-security-groups) command.
- **yes**: Optional. Don't prompt for confirmation.

### Example

The following command deletes the security group with the specified descriptor and doesn't prompt for confirmation.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group delete --id vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMC0wLTAtMC0x --yes
```

## List security groups

You can list all the security groups in a project or organization with the [az devops security group list](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group list [--continuation-token]
                              [--project]
                              [--scope {organization, project}]
                              [--subject-types]
```

### Parameters

- **continuation-token**: Optional. If there are more results that can't be returned in a single page, the result set will contain a continuation token for retrieval of the next set of results.
- **project**: Optional. List groups for a particular project.
- **scope**: Optional. List the groups at project or organization level. Accepted values are *organization* and *project* (default).
- **subject-types**: Optional. A comma-separated list of user subject subtypes to reduce the retrieved results. You can give initial part of descriptor (before the dot) as a filter, for example, vssgp,aadgp.

### Example

The following command lists the name and descriptor for all security groups in **MyFirstProject**, and shows the results in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group list --project MyFirstProject --output table

Name                                     Descriptor
---------------------------------------  --------------------------------------------------------------------------------------------------------------------------------------------------
[MyFirstProject]\Contributors            vssgp.Uy0xLTktMTU1MTM3NDI0NS0zMjgyMTE0Mzg4LTcyMDc3NjM2LTI5MzA1OTM5MTEtMTI2ODYyOTM0My0xLTE0MzUxMDc1MzctMzkwMDAzNTkwNS0zMTk5MDU1NDY1LTM4MDE2ODQ3MzM
[MyFirstProject]\Project Valid Users     vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMC0wLTAtMC0z
[MyFirstProject]\Account Management      vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMS0zNDU1MDI4NTE4LTI5Nzg5OTAxNTYtMjI4OTU2NzYyOS0xOTM2NDU3NTYw
[MyFirstProject]\Project Team            vssgp.Uy0xLTktMTU1MTM3NDI0NS0zMjgyMTE0Mzg4LTcyMDc3NjM2LTI5MzA1OTM5MTEtMTI2ODYyOTM0My0xLTM0OTQwNjM0ODktMjg4NDE3MTA4Mi0yMjkxMTIwNTYwLTM3NDc2NDkyNA
[MyFirstProject]\Readers                 vssgp.Uy0xLTktMTU1MTM3NDI0NS0zMjgyMTE0Mzg4LTcyMDc3NjM2LTI5MzA1OTM5MTEtMTI2ODYyOTM0My0xLTQ0MzQzMTA1My0yMTcyODUzNTc2LTI1MjY0NzgwNjMtMzY1NjU0NjczNQ
[MyFirstProject]\Account Administrators  vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMS02NTAxNzIxNjctMzk4MTU5MTEwNC0zMjE1MTIzNjI0LTEyMTMyOTQwNQ
[MyFirstProject]\Project Administrators  vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMC0wLTAtMC0x
[MyFirstProject]\Build Administrators    vssgp.Uy0xLTktMTU1MTM3NDI0NS0zMjgyMTE0Mzg4LTcyMDc3NjM2LTI5MzA1OTM5MTEtMTI2ODYyOTM0My0xLTI0MDEzNTE5NjItMzM2NTg2MzA5LTI2Mzg2ODkzMDktMzk5NTQ3OTU3MQ
```

## Show security group details

You can show the details of a security group with the [az devops security group show](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-show) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group show --id
```

### Parameters

- **id**: Required. Security group descriptor.

### Example

The following command shows details for the **Project Valid Users** security group in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group show --id vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMC0wLTAtMC0z --output table

Name                                  Description
------------------------------------  ------------------------------------------------------
[MyFirstProject]\Project Valid Users  Members of this group have access to the team project.
```

## Update a security group

You can update the name and description of a security group with the [az devops security group update](/cli/azure/ext/azure-devops/devops/security/group#ext-azure-devops-az-devops-security-group-update) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group update --id
                                [--description]
                                [--name]
```

### Parameters

- **id**: Required. Security group descriptor.
- **description**: Optional. New description for the security group. Required if **name** is missing.
- **name**: Optional. New name for the security group. Required if **description** is missing.

### Example

The following command changes the name of the security group with the specified descriptor and shows the result in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group update --id vssgp.Uy0xLTktMTU1MTM3NDI0NS0xODI5NDgwMzA1LTEzNjM2MTczNTEtMjI0NzE1OTUyMC03ODEzNDk2MjItMS0zNDU1MDI4NTE4LTI5Nzg5OTAxNTYtMjI4OTU2NzYyOS0xOTM2NDU3NTYw --name "Management Team" --output table

Name                              Description
--------------------------------  ---------------------------------------------------------------------
[MyFirstProject]\Management Team  Management team focused on creating and maintaining customer services
```

## Add a member to a group

You can add a member to a security group with the [az devops security group membership add](/cli/azure/ext/azure-devops/devops/security/group/membership#ext-azure-devops-az-devops-security-group-membership-add) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership add --group-id
                                        --member-id
```

### Parameters

- **group-id**: Required. Descriptor of the group to which member is to be added.
- **member-id**: Required. Descriptor of the group or email address of the user to be added.

### Example

The following command adds the user contoso@contoso.com to the specified security group and shows the results in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership add --group-id vssgp.Uy0xLTktMTU1MTM3NDI0NS0yMjc3MTY5NTAtOTkzNjA1MTg2LTI1ODQxNTkyOTktMjYzMDUyNzA2OC0xLTQxNDY0Mzc4MzktMzgxMDM2MDM5MS0yNjE0MjU5MzI3LTI5MjI2MTc3OTA --member-id contoso@contoso.com --output table

Name                                 Type    Email
-----------------------------------  ------  -------------------
[MyFirstProject]\Account Management  group
contoso@contoso.com                  user    contoso@contoso.com
```

## List memberships for a group or user

You can list memberships for a group or user with the [az devops security group membership list](/cli/azure/ext/azure-devops/devops/security/group/membership#ext-azure-devops-az-devops-security-group-membership-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership list --id
                                         [--relationship {memberof, members}]
```

### Parameters

- **id**: Required. Security group descriptor or user email address whose membership details are required.
- **relationship**: Optional. Get **member of** or **members** information for the group. The accepted values are *memberof* and *members*.

### Example

The following command lists the members of the specified security group and shows the results in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership list --id vssgp.Uy0xLTktMTU1MTM3NDI0NS0yMjc3MTY5NTAtOTkzNjA1MTg2LTI1ODQxNTkyOTktMjYzMDUyNzA2OC0xLTQxNDY0Mzc4MzktMzgxMDM2MDM5MS0yNjE0MjU5MzI3LTI5MjI2MTc3OTA --output table

Name                 Type    Email                Descriptor
-------------------  ------  -------------------  ----------------------------------------------------
contoso@contoso.com  user    contoso@contoso.com  msa.NDMzMmNjOWYtYzY4Zi03YTNlLTk2ZTktYmYwM2U4NjgxOTRh
```

## Remove a member from a group

You can remove a member from a security group with the [az devops security group membership remove](/cli/azure/ext/azure-devops/devops/security/group/membership#ext-azure-devops-az-devops-security-group-membership-remove) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership remove --group-id
                                           --member-id
                                           [--yes]
```

### Parameters

- **group-id**: Required. Descriptor of the group from which member needs to be removed.
- **member-id**: Required. Descriptor of the group or email address of the user to be removed.
- **yes**: Optional. Don't prompt for confirmation.

### Example

The following command removes the user contoso@contoso.com from the specified security group without prompting for confirmation.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security group membership remove --group-id vssgp.Uy0xLTktMTU1MTM3NDI0NS0yMjc3MTY5NTAtOTkzNjA1MTg2LTI1ODQxNTkyOTktMjYzMDUyNzA2OC0xLTQxNDY0Mzc4MzktMzgxMDM2MDM5MS0yNjE0MjU5MzI3LTI5MjI2MTc3OTA --member-id contoso@contoso.com --yes
```

## Related articles

- [Security REST API](/rest/api/azure/devops/security/)
- [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd) 
- [Security glossary](security-glossary.md)
