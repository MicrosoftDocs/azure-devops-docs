---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### New Advanced Security API endpoint to retrieve all branches with successful Advanced Security analyses

To retrieve a list of all branches for a particular repository where Advanced Security analysis has been performed, you can use a new API endpoint: `https://advsec.dev.azure.com/{organization}/{project}/_apis/alert/repositories/{repository}/filters/branches?api-version=7.2-preview.1`. To use this endpoint, it requires the `vso.advsec` token scope, or "Advanced Security: read alerts" permissions. 

### Advanced Security List Alerts API return all alerts across all branches

Using the List Alerts API for Advanced Security, you can retrieve a list of all alerts across all branches with Advanced Security results present. Set the parameter `criteria.onlyDefaultBranch=false` to retrieve all alerts: `https://advsec.dev.azure.com/{organization}/{project}/_apis/alert/repositories/{repository}/alerts?api-version=7.2-preview.1&criteria.onlyDefaultBranch=false`. For more details on the List Alerts API, see [List Alerts - Advanced Security](https://learn.microsoft.com/en-us/rest/api/azure/devops/advancedsecurity/alerts/list?view=azure-devops-rest-7.2).