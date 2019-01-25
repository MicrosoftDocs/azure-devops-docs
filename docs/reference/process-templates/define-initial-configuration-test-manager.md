---
title: Define Test Manager initial configuration
titleSuffix: Azure DevOps & TFS
description: Use the plug-in for Microsoft Test Manager to define the project's initial test management setup 
ms.prod: devops
ms.technology: devops-agile
ms.assetid: a72625e1-afa2-4707-9a20-bb7927a0aeaf
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: reference
ms.date: 09/08/2017
---


# Define the initial configuration of Test Manager

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

By using the plug-in for Microsoft Test Manager, you can define a project's initial test management setup. You can define settings such as test variables and test configurations that combine test variables. For example, you can define the hardware platform, the operating system, the browser version, or another type of hardware or software to be used for testing, and then you can define test configurations that combine these variables. In addition, you can customize the default test settings and the list of valid test resolution states. After you create a project, you can modify each test configuration through Microsoft Test Manager except for test resolution states.  
  
 The test management plug-in file is provided with the default process templates. Microsoft Test Manager is available with Visual Studio Ultimate (2015), Visual Studio Enterprise, and Visual Studio Test Professional. For more information, see [Testing overview](../../test/index.md).  
  
> [!NOTE]  
>  You can customize the initial security configuration for test activities by assigning them in the GroupsandPermissions.xml plug-in file. For more information, see [Configure initial groups, teams, members, and permissions](configure-initial-groups-teams-members-permissions.md).  
  
The names of the file, the folder, and the plug-in for the default process templates are as follows:  
    
**File name**: testmanagement.xml   
**Folder name**: Test Management   
**Plug-in name**: Microsoft.ProjectCreationWizard.TestManagement   
 
  
> [!NOTE]  
>  You can change the name of the XML file and the folder name but not the name of the plug-in. The system doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy plug-ins, policies, or other modifications to Team Explorer, you must use your own distribution and installation program.    
  
<a name="Tasks"></a> 
##  Test Management tasks and dependencies  
 In the testmanagement.xml file, you specify one or more tasks and their dependencies. The plug-in file specifies four tasks, and each task uploads a test management file. The testconfiguration.xml file depends on the information that is specified in the testvariable.xml file. For more information about the **task**, **taskXml**, and **dependency** elements, see [Define the tasks to process a plug-in](define-tasks-to-process-a-plug-in.md) and [Define dependencies for task groups and tasks](define-dependencies-plug-ins-groups-tasks.md).  
  
 The following syntax represents the default testmanagement.xml file that is defined for the default process templates:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8"?>  
<tasks>  
  <task id="TestVariable" name="Default test variables" plugin="Microsoft.ProjectCreationWizard.TestManagement" completionMessage="Default test variables created">  
    <taskXml>  
      <TestVariables fileName="Test Management\TestVariable.xml" />  
    </taskXml>  
  </task>  
  <task id="TestConfiguration" name="Default test configurations" plugin="Microsoft.ProjectCreationWizard.TestManagement" completionMessage="Default test configurations created">  
    <dependencies>  
      <dependency taskId="TestVariable" />  
    </dependencies>  
    <taskXml>  
      <TestConfigurations fileName="Test Management\TestConfiguration.xml" />  
    </taskXml>  
  </task>  
  <task id="TestSettings" name="Default test settings" plugin="Microsoft.ProjectCreationWizard.TestManagement" completionMessage="Default test settings created">  
    <taskXml>  
      <TestSettings fileName="Test Management\TestSettings.xml" />  
    </taskXml>  
  </task>  
  <task id="TestResolutionState" name="Default test resolution states" plugin="Microsoft.ProjectCreationWizard.TestManagement" completionMessage="Default test resolution states created">  
    <taskXml>  
      <TestResolutionStates fileName="Test Management\TestResolutionState.xml" />  
    </taskXml>  
  </task>  
</tasks>  
```  
  
<a name="TestEnvironments"></a> 
##  Define test configuration variables  
 You use the **TestVariable** and **AllowedValue** elements to define test configuration variables. You can define any number of test configuration variables and their valid values. The following values are defined in the testvariable.xml file in the default process templates:  
  
-   Operating systems:   
    -   Windows Vista   
    -   Windows XP  
  
-   Default browsers:    
    -   Internet Explorer 7.0   
    -   Internet Explorer 8.0   
    -   Firefox 3.0  
  
 After the project is created, you can modify these variables and create other variables. For more information, see [Test configurations: specifying test platforms](../../test/test-different-configurations.md).  
  
 The **TestVariable** element must be encapsulated within its corresponding container element: **TestVariables**. You use the following syntax structure for these elements:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<TestVariables>  
   <TestVariable name="VariableName" name="Operating System" description="Description of VariableName">  
        <AllowedValue value ="Name of Allowed Value"/>  
    </TestVariable>  
</TestVariables>  
```  
  
 You use the following syntax for the test variables that are defined in the default process templates:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<?xml version="1.0" encoding="utf-8" ?>  
<TestVariables>  
  <TestVariable  
                name="Operating System" description="Default operating systems">  
    <AllowedValue value ="Windows 8" />  
    <AllowedValue value ="Windows 7" />  
    <AllowedValue value ="Windows Vista" />  
    <AllowedValue value ="Windows XP" />  
  </TestVariable>  
  <TestVariable  
                name="Browser" description="Default browsers">  
    <AllowedValue value ="Internet Explorer 9.0" />  
    <AllowedValue value ="Internet Explorer 8.0" />  
    <AllowedValue value ="Internet Explorer 7.0" />  
    <AllowedValue value ="FireFox 3.0" />  
    <AllowedValue value ="Internet Explorer 10.0" />  
  </TestVariable>  
</TestVariables>  
```  
  
<a name="TestConfigurations"></a> 
##  Define test configurations  
 You use the **TestConfiguration** and **TestVariable** elements to define test configurations that combine one or more test configuration variables. One default configuration is defined in the testconfiguration.xml file: Windows Vista and Internet Explorer 7.0. After the project is created, you can delete these configurations and create other configurations. For more information, see [Test configurations: specifying test platforms](../../test/test-different-configurations.md).  
  
 You must encapsulate the **TestConfiguration** element within its corresponding container element: **TestConfigurations**. You use the following syntax structure for these elements:  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<TestConfigurations>  
    <TestConfiguration name="Test Configuration Name" description=" Test Configuration Description " state="active" isdefault="true | false">  
        <TestVariable name="VariableName" value="Variable Value" />  
        <TestVariable name="VariableName" value="Variable Value" />  
    </TestConfiguration>  
</TestConfigurations>  
```  
  
 The following table describes the attributes for the **TestConfiguration** element.  
  
|**Attribute**|**Description**|  
|-------------------|---------------------|  
|state|Identifies the test configuration as active or inactive.|  
|isdefault|Identifies the test configuration as a default configuration.|  
  
 You use the following syntax for the test configurations that are defined in the default process templates.  
  
> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8" ?>  
<TestConfigurations>  
    <TestConfiguration name="Windows 8"   
                        description="Default operating system for testing" state="active" isdefault="true">  
        <TestVariable   
                        name="Operating System" value="Windows 8" />  
    </TestConfiguration>  
</TestConfigurations>  
```  
  
<a name="ResolutionStates"></a> 
##  Define test resolution states 

You use the **TestResolutionState** element to specify the reasons why a test failed. The following states are defined in the testresolutionstate.xml: Needs investigation, Test issue, Product issue, and Configuration issue.  
  
> [!NOTE]  
>  For on-premises TFS, you can change the resolution states using the [tcm command line tool](../witadmin/tcm-customize-manage-test-experience.md).
  
You must encapsulate the **TestResolutionState** element within its corresponding container element: **TestResolutionStates**.  
  
You use the following syntax structure for these elements:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<TestResolutionStates>  
    <TestResolutionState name="ResolutionName" />  
</TestResolutionStates>  
```  
  
You use the following syntax for the resolution states that are defined in the default process templates.  

> [!div class="tabbedCodeSnippets"]
```XML 
<?xml version="1.0" encoding="utf-8" ?>  
<TestResolutionStates>  
    <TestResolutionState name="Needs investigation" />  
    <TestResolutionState name="Test issue" />  
    <TestResolutionState name="Product issue" />  
    <TestResolutionState name="Configuration issue" />  
</TestResolutionStates>  
```  
  
<a name="TestSettings"></a> 
## Define the default test settings for a local test run  

You use the **TestSetting** element to specify the name of the file to use when a test is run. The following file is defined in the testsettings.xml: localrun.testsettings. For more information, see [Setting Up Test Machines to Run Tests or Collect Data](https://msdn.microsoft.com/library/dd293551.aspx).  
  
You must encapsulate the **TestSetting** element within its corresponding container element: **TestSettings**. You use the following syntax structure for these elements:  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<TestSettings>  
    <TestSetting name="Name of Test Setting " filename="FileName" />  
</TestSettings>  
```  
  
 You use the following syntax for the testsettings.xml file that is defined in the default process templates.  
  
> [!div class="tabbedCodeSnippets"]
```XML  
<?xml version="1.0" encoding="utf-8" ?>  
<TestSettings>  
    <TestSetting name="Local Test Run" filename="localrun.testsettings" />  
</TestSettings>  
```  
  
## Related articles  
- [Testing overview](../../test/index.md)  
- [Customize and manage the test experience](../witadmin/tcm-customize-manage-test-experience.md)
