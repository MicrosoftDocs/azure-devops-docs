---
title: Register an instance of PWA  to TFS 
titleSuffix: TFS 
description: Register the instance of Project Web Access or Project Web App (PWA) to support Team Foundation Server-Project Server integration 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 4093f721-e8ed-439b-9882-00fbb2ea430f
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Register an instance of PWA  to TFS
[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server 2013 and Microsoft Project Server, you must configure several points of integration between them. First, you must register the instance of Project Web Access or Project Web App (PWA) that supports an enterprise project plan with the application-tier server that hosts the project collection that contains a project. You can manage the registration of these instances of PWA by using the following options of the **TfsAdmin ProjectServer** command-line tool:  
  
-   **/RegisterPWA**: Registers an instance of PWA to Team Foundation Server.  
  
    > [!IMPORTANT]
    >  When connecting to Project Server 2010, the SharePoint web application for the instance of PWA must be set to **Classic Mode Authentication**. You will not be able to register the instance of PWA if it is set to **Claims Based Authentication**.  
  
-   **/GetRegisteredPWA**: Lists the registered instances of PWA and the names of servers that are running Team Foundation Server to which the instances are registered.  
  
-   **/UnregisterPWA**: Removes the registered association between an instance of PWA and Team Foundation Server. When you move a project collection or a deployment of Team Foundation Server, you can remove the registered instances of PWA and then re-register them after the move.  
  
 For more information about the configuration and integration of Project Server and Team Foundation Server, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 To use the **TfsAdmin** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%.**.  
  
 **Requirements**  
  
 To use these commands, you must belong to the **Team Foundation Administrators**  group. To register or unregister an instance of PWA, you must also belong to the Administrators group for the instance. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the context menu for **Command Prompt**, and then choose **Run as Administrator**. For more information, see the following page on the Microsoft website: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
 
  
## Syntax  
  
```  
TfsAdmin ProjectServer /GetRegisteredPWA /tfs:tfsUrl  
```  
  
```  
TfsAdmin ProjectServer /RegisterPWA /pwa:pwaUrl /tfs:tfsUrl [/previousPwa:pwaUrl] [/force]  
```  
  
```  
TfsAdmin ProjectServer /UnregisterPWA /pwa:pwaUrl /tfs:tfsUrl  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/tfs**:`tfsUrl`|Specifies the uniform resource locator (URL) of an application-tier server for Team Foundation. You specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName*<br /><br /> If you do not specify a virtual directory, specify the URL in the following format:<br /><br /> **http**://*ServerName:Port*|  
|**/pwa:** *pwaUrl*|Specifies the URL of an instance of PWA. You specify the URL in the following format:<br /><br /> **http**://*PWAServerName/PWAInstance*|  
|**/previousPwa:** *pwaUrl*|Specifies the URL that was most recently registered for an instance of PWA. When the URL changes for a registered PWA, you can use this switch to re-register the PWA. You specify the URL in the following format:<br /><br /> **http**://*PWAServerName/PWAInstance*|  
|**/force**|Registers an instance of PWA with a different server that is running Team Foundation Server, and unregisters the instance from the server to which it was most recently registered. For example, when you move a project collection to another application-tier server, you must re-register the PWA for the collection with the new server.|  
|**/?** or **help**|Displays information about the command.|  
  
## Remarks  
 When you run a **TFSAdmin ProjectServer** command, a message appears and confirms that the command is running. For example, the following message states that the instance of Project Web Access is being registered:  
  
```  
Registering PWA http:// PWAServerName/PWAInstance/   
```  
  
 Another message appears after the command finishes. For example, the following message states that the instance of Project Web Access has been registered with Team Foundation Server:  
  
```  
You have successfully registered PWA http://PWAServerName/PWAInstance/  
```  
  
 You can register an instance of PWA with only one application-tier server for Team Foundation. You must register an instance before you can associate it with a project collection. When you register an instance, the location service for Team Foundation Server is updated with that information. In addition, the instance of PWA is updated with the custom fields and lookup tables that integration requires.  
  
 When you run a registration command, the following operations occur:  
  
-   If you run `/RegisterPWA` more than once and a record of the registration already exists, the following message appears:  
  
     `The following PWA instance has already been registered: <PWAInstance>.`  
  
-   When you run `/GetRegisteredPWA`, the following information appears:  
  
    ```  
    The following PWA instances are registered:    
    PWA URL 1  
    PWA URL 2  
    ```  
  
-   When you run the `/UnRegisterPWA` option, the command removes not only the mapped association but also the custom fields and lookup tables from the instance of PWA.  
  
## Examples  
 The following values apply in each example:  
  
-   URL for the instance of PWA: http://*PWAServerName*/*PWAInstance*/  
  
-   URL for Team Foundation Server: http://AdventureWorksServer:8080/tfs/  
  
### List the registered instances of PWA  
 The following example lists the instances of PWA that are registered to AdventureWorksServer:  
  
```  
TfsAdmin ProjectServer /GetRegisteredPWA /tfs:http://AdventureWorksServer:8080/tfs/  
  
```  
  
### Register an instance of PWA  
 The following example registers *PWAInstance* to AdventureWorksServer:  
  
```  
TfsAdmin ProjectServer /RegisterPWA /pwa:http://PWAServerName/PWAInstance /tfs:http://AdventureWorksServer:8080/tfs/  
```  
  
### Remove registration of an instance of PWA  
 The following example removes the registration of *PWAInstance* from AdventureWorksServer:  
  
```  
TfsAdmin ProjectServer /UnregisterPWA /pwa:http://PWAServerName/PWAInstance/ /tfs:http://AdventureWorksServer:8080/tfs/  
```  
  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Map integration components](map-integration-components.md)