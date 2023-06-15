---
author: gloridelmorales
ms.author: glmorale
ms.date: 10/4/2022
ms.topic: include
---

### All Public REST APIs support granular PAT scopes

Previously, a number of publicly documented Azure DevOps REST APIs were not associated with scopes (e.g., work item read) that led to customers using full scopes to consume these APIs through non-interactive authentication mechanisms like personal access tokens (PAT). Using a full scope personal access token increases the risk when they can land in the hands of a malicious user. This is one of the main reasons that many of our customers did not take full advantage of the [control plane policies](/azure/devops/organizations/accounts/manage-pats-with-policies-for-administrators?view=azure-devops&preserve-view=true) to restrict the usage and behavior of the PAT. 

With this sprint release, all public Azure DevOps REST APIs are now associated with and support a granular PAT scope. If you are currently using a full-scoped PAT to authenticate to one of the public Azure DevOps REST APIs, consider migrating to a PAT with the specific scope accepted by the API to avoid unnecessary access. The supported granular PAT scope(s) for a given REST API can be found in the Security section of the [documentation pages](/rest/api/azure/devops/account/accounts/list?view=azure-devops-rest-7.1&tabs=HTTP#security&preserve-view=true). Additionally, there is a table of scopes [here](/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#scopes&preserve-view=true).