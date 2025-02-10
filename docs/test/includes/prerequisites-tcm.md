---
ms.service: azure-devops-test-plans
ms.author: chcomley
ms.author: jeom
author: raviLiftr
ms.topic: include
ms.date: 01/13/2025
---

<a id="work-tcm-cli"></a>

### Prerequisites for TCM command-line tool 

| Category | Requirements |
|--------------|-------------|
|**Tools**    |Visual Studio 2017 Professional or earlier version. Access TCM from the command prompt and the following directories:<br>- `%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`  <br>- `%programfiles(x86)%\Microsoft Visual Studio\2017\Enterprise\Common7\IDE`<br>- `%programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`<br>- To run a TCM command, specify the `/collection` and `/teamproject` parameters, and `/login` as needed. Also see the following table of required and optional parameters.|
|**Access levels**|- Valid project membership to one or more projects that you want to access and the required permissions based on the commands you run. For more information, see [Manual test access and permissions](../manual-test-permissions.md).<br>- Same access levels for adding test plans and test suites to clone or import test objects.|

| Parameter | Description |  
|----------|------------|  
|**/collection**`:CollectionURL`|Required. Specifies the URI of the team project collection. The format for the URI is as follows:<br/>- For Azure DevOps Services: `http://dev.azure.com/OrganizationName`<br/>- For Azure DevOps Server: `http://ServerName:Port/VirtualDirectoryName/CollectionName`. If no virtual directory is used, then the format for the URI is as follows:`http://ServerName:Port/CollectionName`.|
|**/teamproject**:`project`|Required. The name of the project that contains the test objects you want to clone or import automated tests into.|
|**/login**:`username,[password]`|Optional. Specifies the name and password of a valid Azure DevOps user and who has permissions to run the command. Use this option if your Windows credentials don't have the appropriate permissions, or you're using basic authentication, or you're not connected to a domain.|
