---
title: Map a project collection to an instance of PWA
titleSuffix: TFS 
description: Map a project collection to an instance of Project Web Access or Project Web App to support Team Foundation Server-Project Server integration 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: d873f68e-3e88-4daa-9c28-a192dab86765
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---


# Map a project collection to an instance of PWA

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="Top"></a> Before you can synchronize data between Visual Studio Team Foundation Server and Microsoft Project Server, you must perform several tasks that include mapping a project collection to an instance of Project Web Access or Project Web App (PWA). You can manage this mapping by using the following options of the **TFSAdmin** command-line tool:  
  
-   **/MapPWAToCollection**: Maps a project collection to an instance of PWA. You can map multiple collections to an instance, but you can map each collection to only one instance. Before you can map a collection to an instance, you must register the instance.  
  
-   **/GetMappedCollections**: Returns the list of project collections that have been mapped to an instance of PWA.  
  
-   **/UnmapPWAFromCollection**: Removes the mapping of a project collection from an instance of PWA.  
  
 For an end-to-end overview of how to integrate these products, see [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md).  
  
 To use the **TFSAdmin** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
 **Requirements**  
  
 To use these commands, your **Administer Project Server integration** permission for the project collection must be set to **Allow**. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of PWA that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
> [!NOTE]
>  Even if you sign in with administrative permissions, you must open an elevated Command Prompt window to perform this function on a server that is running Windows Server 2008. To open an elevated Command Prompt window, choose **Start**, open the context menu for the **Command Prompt**, and then choose **Run as Administrator**. For more information, see the following page on the Microsoft website: [User Access Control](http://go.microsoft.com/fwlink/?LinkId=111235).  
  
 
  
## Syntax  
  
```  
TfsAdmin ProjectServer /GetMappedCollections /tfs:tfsUrl   
```  
  
```  
TfsAdmin ProjectServer /MapPWAToCollection /pwa:pwaUrl /collection:tpcUrl  
```  
  
```  
TfsAdmin ProjectServer /UnmapPWAFromCollection /pwa:pwaUrl /collection:tpcUrl [/force]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/tfs**:`tfsUrl`|Specifies the uniform resource locator (URL) of an application-tier server for Team Foundation. You specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName*<br /><br /> If you do not specify a virtual directory, you specify the URI in the following format:<br /><br /> **http**://*ServerName:Port*|  
|**/pwa:** *pwaUrl*|Specifies the URL of an instance of PWA. You specify the URL in the following format:<br /><br /> **http**://*PWAServerName/PWA*|  
|**/collection**:`tpcUrl`|Specifies the URL of a project collection. You specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory, you specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/force**|Optional. Available for the **/UnmapPWAFromCollection** option only. Removes all mappings for all projects in the collection. You should specify this option only if you are sure that you no longer want any projects in the collection to continue to participate in data synchronization.|  
|**/?** or **help**|Displays information about the command.|  
  
## Remarks  
 When you run a command, a message appears and confirms the action that is being performed and the object of the action. For example, the following message states that the specified instance of PWA is being mapped:  
  
```  
Mapping Project Web Access:http://MyPWAServer/MyPWAInstance/ . . . Done.  
```  
  
 Another message appears after the command finishes. For example, the following message indicates that the instance of PWA has been registered with Team Foundation Server:  
  
```  
Mapping project collection http://MyTFSServer:8080/tfs/Collection0 to PWA http://MyPWAServer/MyPWAInstance/.   
```  
  
 The following operations are performed when you map a project collection:  
  
-   The location service for the collection is updated with the mapping.  
  
-   Global rules and fields on the collection are created.  
  
-   The synchronization engine is registered with the job service.  
  
 Before you can unmap a collection from an instance of PWA, you must first unmap all projects and enterprise project plans that are mapped for the project collection. If projects are mapped when you run the **/UnmapPWAFromCollection** option, a message notifies you that you must first use the `/UnmapPlanFromProject` option. As an alternative, you can use the `/force` flag to remove all mappings for all projects in the collection.  
  
 You can display a list of mapped projects by running the **/GetMappedProjects** option. For more information, see [Manage mappings](manage-mappings-enterprise-project-team-project.md).  
  
 If you run **/UnmapPWAFromCollection** on a collection to which no projects are mapped, the command removes not only the mapping but also the global rules.  
  
## Examples  
 The following values apply in each example:  
  
-   URL for the instance of PWA: http:// *PWAServerName*/*PWAInstance*/  
  
-   URL for Team Foundation Server: http://AdventureWorksServer:8080/tfs/  
  
-   URL for the project collection: http://AdventureWorksServer:8080/tfs/DefulatCollection  
  
### List Project Collections That Are Mapped  
 The following example lists the project collections that are defined on AdventureWorksServer and that are mapped to an instance of PWA.  
  
```  
TfsAdmin ProjectServer /GetMappedCollections /tfs:http://AdventureWorksServer:8080/tfs/  
  
```  
  
### Map a Team Project Collection to an Instance of PWA  
 The following example maps DefaultCollection to PWAInstance, which is defined on AdventureWorksServer.  
  
```  
TfsAdmin ProjectServer /MapPWAToCollection /pwa:http://PWAServerName/PWAInstance /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  
  
### Remove the Mapping of a Collection  
 The following example removes the mapping of DefaultCollection from PWAInstance.  
  
```  
TfsAdmin ProjectServer /UnmapPWAFromCollection /pwa:http://PWAServerName/PWAInstance /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection  
```  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Remove a component](remove-component-from-synchronization.md)   
 [Map integration components](map-integration-components.md)