---
ms.service: azure-devops-test-plans
ms.author: pliaros
author: raviLiftr
ms.topic: include
ms.date: 03/31/2026
---

<a id="work-tcm-cli"></a>

### Prerequisites for TCM command-line tool 

| Category | Requirements |
|--------------|-------------|
|**Tools** | Visual Studio 2017 (Professional or Enterprise) or earlier. The TCM executable (`tcm.exe`) is in the following directories:<br>- `%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`<br>- `%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE`<br>- `%programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE` |
|**Access levels** | At least **Basic** access and membership in the project you want to access. To clone or import test plans and test suites, you need [Basic + Test Plans](https://marketplace.visualstudio.com/items?itemName=ms.vss-testmanager-web) access. For more information, see [Manual test access and permissions](../manual-test-permissions.md). |

To run a TCM command, specify the `/collection` and `/teamproject` parameters, and `/login` as needed.

| Parameter | Description |  
|----------|------------|  
|**/collection**`:CollectionURL`| Required. Specifies the URI of the team project collection. The format for the URI is as follows:<br/>- For Azure DevOps Services: `https://dev.azure.com/OrganizationName` or `https://OrganizationName.visualstudio.com`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, the format is: `http://ServerName:Port/CollectionName`. |
|**/teamproject**:`project`| Required. The name of the project that contains the test objects you want to clone or import automated tests into. |
|**/login**:`username,[password]`| Optional. Specifies the name and password of a valid Azure DevOps user who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, you're using basic authentication, or you're not connected to a domain. |
