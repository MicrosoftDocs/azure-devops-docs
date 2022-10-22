---
title: Customize and manage the test experience
titleSuffix: Azure DevOps 
description: Learn how to customize and manage the test experience
ms.service: azure-devops-boards
ms.custom: witadmin
ms.assetid: a4820ed4-9213-4cfc-99e6-f974382036f8
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '<= azure-devops'
ms.date: 04/04/2022
---

# Customize and manage the test experience

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Using the `tcm fieldmapping` command, you can customize the following three features that Azure Test Plans supports. 
- Change the bug type used to automatically file bugs in Test Manager
- Customize the resolution states pick list  
- Customize the failure types pick list. 

[!INCLUDE [temp](../../test/includes/mtm-deprecate-message.md)]

The **tcm** command-line tool works when run against Azure DevOps Services and on-premises Azure DevOps Server. 

> [!IMPORTANT]
> The **tcm** tool is available through Visual Studio 2017 and earlier versions. It isn't available in Visual Studio 2019 and later versions.

Also, you can use `tcm` command options to [copy and clone test plans and test suites](../../test/copy-clone-test-items.md).  

## Prerequisites 

 For the project where you define the work item types, you must be a member of the **Project Administrators** security group. See [Change project-level permissions](../../organizations/security/change-project-level-permissions.md).  

To run the **tcm** command-line tool, enter **Developer Command Prompt** in the **Type here to search** box and choose the version that applies to you. The **tcm** command is located in the following folder: 



#### Azure DevOps Services, Azure DevOps Server 2020 - 2019, TFS 2018 and TFS 2017, Visual Studio 2017 client:

`%programfiles(x86)%\Microsoft Visual Studio\2017\Professional\Common7\IDE`

## Syntax  

```  
tcm fieldmapping /export /collection:CollectionURL /teamproject:Project /type:resolutiontype|bug|failuretype /mappingfile:path [/login:username,[password]]  

tcm fieldmapping /import /collection:CollectionURL /teamproject:Project /type:resolutiontype|bug|failuretype /mappingfile:path [/login:username,[password]]  
```  

#### Parameters  

| **Parameter**  |   **Description**  |
|----------------|--------------------|
|**/export**     |Specifies export of the field mapping file of the type specified. For the syntax of supported file types, see the Remarks section.  |
|**/import**     |Specifies import of the field mapping file.   |
|**/mappingfile**:`Path`  |  The path and file name of the XML definition file that contains the field mappings.  |
|**/collection**:`CollectionURL` |Specifies the uniform resource identifier (URI) of the project collection. The format for the URI is as follows: **http**://*ServerName:Port/VirtualDirectoryName/CollectionName*<br /><br /> If no virtual directory is used, the format for the URI is as follows:<br /><br /> **http**://*ServerName:Port/CollectionName*  |
|**/teamproject:**`Project`| Specifies the name of the project for which the field mappings are to be applied. This project must be defined in the project collection that is specified by the **/collection** parameter.   
|**/type**:`resolutiontype|bug|failuretype`| The type of file to import or export. For the syntax structure of each file type, see [bug](#bug), [resolution states](#resolution), and [failure types](#failure). |
|**/login:** `UserName,Password` | Optional. Specifies the name and password of a user who is logged who has permissions to run the command.<br /><br /> You would use this option when your Windows credentials do not have the appropriate permissions, you are using basic authentication, or you are not on a domain. |
|  **/?** or **help**  | Displays help about the command in the Command Prompt window.  |

## Remarks  

Each time that you run the **tcm fieldmapping import** command, the contents of the existing field mapping file are replaced with the contents that you import.  

<a name="bug"></a> 

## Mapping file for bug work item type  
 
When the supported clients for Azure Test Plans creates a bug, the mapping file defines the work item type to create and fills in three data fields: reproducible steps, system information, and the build in which the defect was found. When a tester runs a test and finds a defect, they can create a bug in which these three fields are automatically filled in.  

If your project was created with one of the default process templates, the bug work item type is already enabled. However, if you're adding another type of work item to the bug category or you're working with a customized process template, you might have to use the **tcm** command.  

You can define only one work item type to be created when you run tests for Azure Test Plans.  

The following XML syntax lists the default contents of the bug field mappings file. All three fields must be specified when you import a bug field mappings file.  

```xml
<?xml version="1.0" encoding="utf-16"?>  
<BugFilerMappings workitemtypetocreate="Bug">  
   <ReproSteps>Microsoft.VSTS.TCM.ReproSteps</ReproSteps>  
   <SystemInformation>Microsoft.VSTS.TCM.SystemInfo</SystemInformation>  
   <BuildFoundIn>Microsoft.VSTS.Build.FoundIn</BuildFoundIn>  
</BugFilerMappings>  
```  

For more information about test fields, see [Build and test integration fields](../../boards/queries/build-test-integration.md).  

<a name="resolution"></a> 

## Mapping file for resolution states  

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
::: moniker range="< azure-devops"
For on-premises collection, you can [customize the resolution states defined in the process template](../process-templates/define-initial-configuration-test-manager.md). 
::: moniker-end

When you analyze failed tests, you assign the failure type and resolution state.  

 ![Analyse test run page in Microsoft Test Manager](media/almt_wsa11analysetest.png "ALMT_wsa11analyseTest")  

<a name="failure"></a> 

##  Mapping file for failure types  

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

- [Run manual tests](../../test/run-manual-tests.md)
- [What is Azure Test Plans?](../../test/overview.md)
- [Copy or clone test plans, test suites, and test cases](../../test/copy-clone-test-items.md)
- [Using TCM from the command line](/previous-versions/visualstudio/visual-studio-2012/jj155799(v=vs.110))   
