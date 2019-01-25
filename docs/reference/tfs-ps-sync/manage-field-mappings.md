---
title: Manage field mappings for TFS-Project Server integration
titleSuffix: TFS 
description: Modify how fields are mapped and synchronized to support Team Foundation Server-Project Server integration 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 67b6ad0e-923f-4a31-baf3-64beff2d4080
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: reference
ms.date: 01/12/2017
---

# Manage field mappings for TFS-Project Server integration

[!INCLUDE [temp](../../_shared/tfs-ps-sync-header.md)]

<a name="BackToTop"></a> You can customize how you synchronize data between Visual Studio Team Foundation Server (TFS) and Microsoft Project Server by modifying the field mapping file. This file defines the data fields that are synchronized and how they are synchronized to support the integration of TFS and Project Server. You can manage this file by using the following options of the **TfsAdmin ProjectServer** command-line tool:  
  
-   **/DownloadFieldMappings**: Downloads the field mapping file that is defined for a project collection.  
  
-   **/UploadFieldMappings**: Validates the XML syntax of the field mapping file, and uploads it to a collection. To validate the syntax but not upload the file, you can use the `/validateonly` option.  
  
> [!NOTE]
>  The field mapping file for the integration of Team Foundation Server and Project Server is distinct from the field mapping file for Microsoft Project. For information about how to download or upload the second file, see [TFSFieldMapping](https://msdn.microsoft.com/library/ms252493.aspx).  
  
 For more information about the contents of the field mapping file and how to customize it, see [Field mapping reference](field-mapping-xml-element-reference.md) and [Customize the field mapping](customize-field-mapping-tfs-project-server.md).  
  
 To use the **TfsAdmin ProjectServer** command-line tool, open a Command Prompt window where either Visual Studio or Team Explorer is installed and enter:  
  
```  
cd %programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE  
```  
  
 On a 32-bit edition of Windows, replace **%programfiles(x86)%** with **%programfiles%**.  
  
 **Requirements**  
  
 To use these commands, your **Administer Project Server integration** permission must be set to **Allow** for the project collection. Also, the service account for Team Foundation Server must be granted the necessary permissions to interact with the instance of Project Web Access or Project Web App (PWA) that will participate in data synchronization. For more information, see [Assign permissions](assign-permissions-support-tfs-project-server-integration.md).  
  
 
  
## Syntax  
  
```  
TfsAdmin ProjectServer /DownloadFieldMappings /collection:tpcUrl /filepath:mappingFile [/encoding:encoding]  
```  
  
```  
TfsAdmin ProjectServer /UploadFieldMappings /collection:tpcUrl /filePath:mappingFile [/encoding:encoding] [/validateOnly] [/useDefaultFieldMappings] [/force]  
```  
  
#### Parameters  
  
|Parameter|Description|  
|---------------|-----------------|  
|**/collection**:`tpcURL`|Specifies the uniform resource locator (URL) of a project collection. You specify the URL in the following format:<br /><br /> **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If you do not specify a virtual directory, you specify the URI in the following format:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/filePath**:`mappingFile`|Specifies the path and file name of the XML definition file that contains the field mappings. **Note:**  If you are using Windows Vista, you might not have permissions to access certain folders. If you try to export the work item type to a location where you do not have permissions, the registry virtualization technology automatically redirects the exported file and saves it to the virtual store. To avoid this redirection, you can export the file to a location where you have permissions. For more information, see the following pages on the Microsoft website: [Registry Virtualization](http://go.microsoft.com/fwlink/?LinkId=92325) and [Common file and registry virtualization issues in Windows Vista](http://go.microsoft.com/fwlink/?LinkId=92323).|  
|**/encoding**:`encoding`|Specifies the name of an encoding format for the .NET Framework 2.0. The command exports or imports the XML data in the encoding format that you specify. For example, /e:utf-7 specifies Unicode (UTF-7) encoding. If you do not specify this parameter, the command tries to detect the encoding and uses UTF-8 if detection fails.|  
|**/validateOnly**|Validates the mapping file but does not upload it.|  
|**/useDefaultFieldMappings**|Uploads the default field mappings instead of a custom mapping file. For more information, see [Field mapping reference](field-mapping-xml-element-reference.md).|  
|**/force**|Overwrites the existing mapping file. You must specify this option if you specify the **/useDefaultFieldMappings** switch when you replace the existing mappings with different mappings.|  
  
## Remarks  
 You can map only enterprise custom fields or fields that are built in to Project Server. You must specify the name of a valid field in Project. To determine the name of a built-in field, remove any spaces from the friendly name, and prefix the result with "pj". For example, the field name for Status Manager is pjStatusManager, and the field name for Custom 01 is pjCustom01. Restrictions exist on how you can map built-in and custom fields, and you must match the data types of fields. For more information, see [Restrictions on mapping fields](restrictions-mapping-ps-fields.md).  
  
 When you run a **TFSAdmin ProjectServer** command, a message indicates the action that is being performed and the affected object. For example, the following message shows that the field mapping file is being downloaded:  
  
```  
Download field mappings from DefaultCollection  
```  
  
 Another message appears after the command actions are completed. For example, the following message appears when the field mapping file has been downloaded:  
  
```  
You have downloaded field mappings to C:MappingFile. . . Done.  
```  
  
### Notes about uploading field mappings  
 If a field mapping file is uploaded successfully, the following changes are made:  
  
-   Each mirror field in Team Foundation is configured to comply with the mapped fields.  
  
-   For work item types that have been mapped for a collection or a project, the new mappings appear on the **Project Server** tab of the work item form.  
  
> [!IMPORTANT]
>  When you map a field from Team Foundation Server to Project Server, make sure that you match the data types of those fields. Otherwise, the following error might appear when you try to upload the field mappings:  
>   
>  **Index (zero based) must be greater than or equal to zero and less than the size of the argument list**.  
>   
>  For more information, see [Data Types and Field Mapping Criteria](restrictions-mapping-ps-fields.md#datatypes).  
  
## Examples  
  
### Download the field mapping file that is defined for a project collection  
 The following example downloads the field mappings that are defined for AdventureWorksCollection to AWMappingFile.xml.  
  
```  
TfsAdmin ProjectServer /DownloadFieldMappings /collection:http://AdventureWorksServer:8080/AdventureWorksCollection /filePath:"C:AWMappingFile.xml"  
  
```  
  
### Upload the field mapping file for a project collection  
 The following example uploads AWMappingFile.xml to AdventureWorksCollection.  
  
```  
TfsAdmin ProjectServer /UploadFieldMappings /collection:http://AdventureWorksServer:8080/AdventureWorksCollection /filePath:"C:AWMappingFile.xml"  
  
```  
  
## Related articles  
 [Configure TFS-Project Server integration](configure-tfs-project-server-integration.md)   
 [Customize the field mapping](customize-field-mapping-tfs-project-server.md)   
 [Field mapping reference](field-mapping-xml-element-reference.md)   
 [Restrictions on mapping fields](restrictions-mapping-ps-fields.md)   
 [Map integration components](map-integration-components.md)