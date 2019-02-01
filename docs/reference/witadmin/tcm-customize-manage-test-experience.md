---
title: Customize and manage the test experience
titleSuffix: TFS  
description: Customize three of the features that are supported - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: a4820ed4-9213-4cfc-99e6-f974382036f8
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '<= azure-devops-2019'
ms.date: 03/20/2018
---


# Customize and manage the test experience

[!INCLUDE [temp](../../_shared/version-header-tfs-only.md)]


> [!IMPORTANT]  
>**Feature availability**: You can only exercise the tcm commands against an on-premises TFS.  

You can customize three of the features that are supported in Microsoft Test Manager using the `tcm fieldmapping` command. This command allows you to change the bug type used to automatically file bugs in Test Manager, and to customize the drop-down menu or pick lists for resolution states and failure types.  
  
The **tcm** command-line tool only works when run against an on-premises Team Foundation Server. 


Also, you can use `tcm` command options to [copy and clone test suites and test cases](../../test/mtm/copying-and-cloning-test-suites-and-test-cases.md).  
  
 **Requirements**  
  
 For the project where the work item types are defined, you must be a member of the **Team Foundation Administrators** security group or the **Project Administrators** security group. See [Add accounts to administer project collections](../../organizations/security/set-project-collection-level-permissions.md).  

To run the **tcm** command-line tool, open a Command Prompt window where Visual Studio is installed. To do this, enter **Developer Command Prompt** in the **Type here to search** box and choose the version that applies to you. The **tcm** command is located in the following folder: 


::: moniker range=">= tfs-2017 <= azure-devops-2019"
####TFS 2018 and TFS 2017, Visual Studio 2017 client:

`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`

::: moniker-end


::: moniker range="tfs-2015"
####TFS 2015, Visual Studio 2015 client 

`%programfiles(x86)%\Microsoft Visual Studio 14.0\Common7\IDE`

::: moniker-end


  
::: moniker range="tfs-2013"
####TFS 2013, Visual Studio 2013 client 

`%programfiles(x86)%\Microsoft Visual Studio 12.0\Common7\IDE`

::: moniker-end

## Syntax  
  
```  
tcm fieldmapping /export /collection:CollectionURL /teamproject:Project /type:resolutiontype|bug|failuretype /mappingfile:path [/login:username,[password]]  
  
tcm fieldmapping /import /collection:CollectionURL /teamproject:Project /type:resolutiontype|bug|failuretype /mappingfile:path [/login:username,[password]]  
```  
  
#### Parameters  
  
|**Parameter**|**Description**|  
|-------------------|---------------------|  
|**/export**|Specifies export of the field mapping file of the type specified. For the syntax of supported file types, see the Remarks section.|  
|**/import**|Specifies import of the field mapping file.|  
|**/mappingfile**:`Path`|The path and file name of the XML definition file that contains the field mappings.|  
|**/collection**:`CollectionURL`|Specifies the uniform resource identifier (URI) of the project collection. The format for the URI is as follows: **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, the format for the URI is as follows:<br /><br /> **http**://*ServerName:Port/CollectionName*|  
|**/teamproject:** *Project*|Specifies the name of the project for which the field mappings are to be applied. This project must be defined in the project collection that is specified by the **/collection** parameter.|  
|**/type:**resolutiontype &#124; bug &#124; failuretype|The type of file to import or export. For the syntax structure of each file type, see [bug](#bug), [resolution states](#resolution), and [failure types](#failure).|  
|**/login:** `UserName,Password`|Optional. Specifies the name and password of a user who is logged on to the application-tier server for Team Foundation and who has permissions to run the command.<br /><br /> You would use this option when your Windows credentials do not have the appropriate permissions, you are using basic authentication, or you are not on a domain.|  
|**/?** or **help**|Displays help about the command in the Command Prompt window.|  
  
## Remarks  
 Each time that you run the **tcm fieldmapping import** command, the contents of the existing field mapping file are replaced with the contents that you import.  
  
##  <a name="bug"></a> Mapping file for bug work item type  
 When Test Manager creates a bug, the mapping file defines the type of work item to create and fills in three data fields: reproducible steps, system information, and the build in which the defect was found. When a tester runs a test and finds a defect, they can create a bug in which these three fields are automatically filled in.  
  
 If your project was created with one of the default process templates provided with Team Foundation Server, the bug work item type is already enabled. However, if you're adding another type of work item to the bug category or you're working with a customized process template, you might have to use the **tcm** command.  
  
 You can define only one type of work item to be created when you run tests that use Test Manager.  
  
 The following XML syntax lists the default contents of the bug field mappings file. All three fields must be specified when you import a bug field mappings file.  
  
```xml
<?xml version="1.0" encoding="utf-16"?>  
<BugFilerMappings workitemtypetocreate="Bug">  
   <ReproSteps>Microsoft.VSTS.TCM.ReproSteps</ReproSteps>  
   <SystemInformation>Microsoft.VSTS.TCM.SystemInfo</SystemInformation>  
   <BuildFoundIn>Microsoft.VSTS.Build.FoundIn</BuildFoundIn>  
</BugFilerMappings>  
```  
  
 For more information about fields that are used to track information that Test Manager finds, see [Build and test integration fields](../../boards/queries/build-test-integration.md).  
  
##  <a name="resolution"></a> Mapping file for resolution states  
 The following XML syntax lists the default contents of the resolution states defined for the default process templates.  
  
```xml
<?xml version="1.0" encoding="utf-8"?>  
<TestResolutionStates>  
    <TestResolutionState name="Needs investigation" />  
    <TestResolutionState name="Test issue" />  
    <TestResolutionState name="Product issue" />  
    <TestResolutionState name="Configuration issue" />  
</TestResolutionStates>  
```  
  
 Before you create a project, you can [customize the resolution states defined in the process template](../process-templates/define-initial-configuration-test-manager.md).  
  
 [When you analyze failed tests](https://msdn.microsoft.com/library/dd286731), you assign the failure type and resolution state.  
  
 ![Analyse test run page in Microsoft Test Manager](_img/almt_wsa11analysetest.png "ALMT_wsa11analyseTest")  
  
##  <a name="failure"></a> Mapping file for failure types  
 The following XML syntax lists the default failure types defined for a project.  
  
```xml
<?xml version="1.0" encoding="utf-16"?>  
<TestFailureTypes>  
  <TestFailureType name="Regression" />  
  <TestFailureType name="New Issue" />  
  <TestFailureType name="Known Issue" />  
  <TestFailureType name="Unknown" />  
</TestFailureTypes>  
  
```  
  
## Examples  
 Unless otherwise specified, the following values apply in each example:  
  
-   URI for the project collection: http://AdventureWorksServer:8080/tfs/Collection1    
-   Project name: AdventureWorks   
-   Bug field mapping file name: bugfieldmappings.xml    
-   Folder location: "C:\Users\AdminUser\Documents\\"  
  
### Import the bug field mappings file  
 The following command imports the contents of the bugfieldmappings.xml file to the AdventureWorks project that is defined in Collection1 on the server that is named AdventureWorksServer.  
  
```  
tcm fieldmapping /import /type:bug /mappingfile:"C:\Users\AdminUser\Documents\bugfieldmappings.xml" /collection:http://AdventureWorksServer:8080/tfs/Collection1 /teamproject:AdventureWorks   
```  
  
## Related articles
- [Using TCM from the command line](https://msdn.microsoft.com/library/jj155799.aspx)   
