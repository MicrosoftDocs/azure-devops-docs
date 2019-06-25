---
title: Manage security permissions using Azure DevOps CLI  
titleSuffix: Azure DevOps 
description: Use Azure DevOps CLI to manage security permissions 
ms.topic: reference 
ms.manager: jillfra
ms.prod: devops 
ms.technology: devops-ref
ms.manager: jillfra 
ms.author: geverghe
author: KathrynEE
ms.date: 06/18/2019
---

# Manage security permissions  

Security permissions for a User or Security group can be managed by running following group of commands:

`az devops security permission -h`

For more information on concepts related to Security permissions, kindly refer [REST API documentation](https://docs.microsoft.com/en-us/rest/api/azure/devops/security/?view=azure-devops-rest-5.0)

## Find a namespace

Typically, each family of resources (work items, Git repositories, etc.) is secured using a different namespace. Each security namespace contains zero or more access control lists. Each access control list contains a token, an inherit flag and a set of zero or more access control entries. Each access control entry contains an identity descriptor, an allowed permissions bitmask and an denied permissions bitmask.

### List all namespaces

To list all available namespace in an organization, run following command.
`az devops security permission namespace list`

### Get namespace details

To get the details of a namespace, and check what are the permission types secured with that namespace, use `show` command.
`az devops security permission namespace show --namespace-id <NAMESPACE_ID>`

## Understand security tokens

Tokens are arbitrary strings representing resources in Azure DevOps. Token format differs per resource type, however hierarchy and separator characters are common between all tokens.

### List tokens for a namespace

Once you have figured the required namespace, you can list all the tokens available in namespace for a specific user or security group.
`az devops security permission list --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR>`

You can also use token parameter in above command if you know the token already and want to list only root and/or child tokens of a resource. This way you will be able to filter results when some namespace has long list of ACLs for given user/group.
`az devops security permission list  --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR> --token <SECURITY_TOKEN> --recurse`

To get the required token for different namespaces, refer [Security tokens for Permissions management](security_tokens.md)

For given token, and group/user, if you need to list permissions or resolve the allow/deny bits to its corresponding permission types,use following command.
`az devops security permission show  --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR> --token <SECURITY_TOKEN>`

### Change permissions

Here, permissions could be a single permission type or combination of multiple permission types. 
You will get the permission details available for any namespace with `az devops security permission namespace show --id` command.
You will have to pass this permission bits while assigning allow/deny permissions and removing permissions.

#### Add permissions

`az  devops security permission add  --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR> --token <SECURITY_TOKEN> --allow-bit 4 deny-bit 1`

Here, --allow-bit/--deny-bit could be a single permission bit or addition of multiple permission bits.

#### Reset permissions

`az  devops security permission reset  --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR> --token <SECURITY_TOKEN> --permissions 5`

Here, --permissions could be a single permission bit or addition of multiple permission bits.

#### Reset all permissions

You can clear all explicit permissions for given token , given user or group with following command.

`az devops security permission reset-all --namespace-id <NAMESPACE_ID> --subject <USER_ID/GROUP_DESCRIPTOR> --token <SECURITY_TOKEN>`