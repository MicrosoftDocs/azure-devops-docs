---
title: Add reports via a process template 
titleSuffix: Azure DevOps Server
description: You can specify the folder structure and set of reports that will appear by using the Reporting plugin for Azure DevOps Server 
ms.service: azure-devops-boards
ms.assetid: f7efa9a7-5de0-4bf2-9a9d-c53234b0513b
ms.author: kaelli
author: KathrynEE
ms.topic: reference
monikerRange: '< azure-devops' 
ms.date: 04/10/2018
---



# Add reports to the process template

[!INCLUDE [version-lt-azure-devops](../../includes/version-lt-azure-devops.md)]

When you create a project, the Reporting plug-in creates a Report site and specifies the folder structure and set of reports that will appear under the ![Report](media/icon_reportte.png "Icon_reportTE")**Reports** node in Team Explorer. This plug-in requires that you have configured your on-premises TFS instance and project collection where you will create a project with SQL Server Analysis Services and SQL Server Reporting Services.  

> [!IMPORTANT]  
> When you create a project from the web portal, the ReportsTasks.xml  
> plug-in file is ignored. To add reports after you create your project, 
> see [Add reports to a project](/previous-versions/azure/devops/report/admin/add-reports-to-a-team-project).  
> Clients that support project creation vary depending on the TFS version. 
> For details, see [Process template and plug-in files, Client support for project creation](overview-process-template-files.md#client-support).  

You specify two main tasks by using the Reporting plug-in. First, you create the reporting site by using the **site** element. Second, you specify the folder structure and the reports to be uploaded to the site by using the **folder** and **report** elements. The reports that you upload have an .rdl extension and are designed for use with Reporting Services. For an overview of the reports that the TFS process templates provide, see [Reporting Services Reports](/previous-versions/azure/devops/report/sql-reports/reporting-services-reports).  

After a project is created from the process template, you can add, remove, rename, and change the folder structure for reports. For more information, see [View, upload, and organize reports](/previous-versions/azure/devops/report/admin/view-upload-organize-reporting-services-reports).  

<a name="name"></a> 
##  Reporting plug-in name and location  
The following table summarizes the names of the file, the folder, and the plug-in for the Agile and CMMI process templates.  


**File name**: ReportsTasks.xml   
**Folder name**: Reports    
**Plug-in name**: Microsoft.ProjectCreationWizard.Reporting 

> [!NOTE]  
>  You can change the names of the XML file and the folder but not the plug-in. TFS doesn't include a mechanism for the deployment of client-side plug-ins, policies, or other modifications. If you want to deploy this kind of functionality, you must use your own distribution and installation program.   

In the XML file, you specify one or more tasks and their dependencies. For an example of a task that specifies a set of reports, see the ReportsTasks.xml file in the Agile process template.  

<a name="syntax"></a> 

##  Reporting plug-in syntax structure  

 The Reporting plug-in file must conform to the schema definition for ReportingServices, which is defined in the Rosetta.xsd file, and be specified in its own file.  

 The following syntax shows the structure of the Reporting plug-in. For a description of each element, see [ReportingServices child elements](#child_elements) later in this topic.  

> [!div class="tabbedCodeSnippets"]
> ```XML
> <?xml version="1.0" encoding="utf-8"? 
> <tasks 
>   <task id="Site" plugin="Microsoft.ProjectCreationWizard.Reporting" completionMessage="Project Reporting site created." 
>     <dependencies / 
>     <taskXml 
>       <ReportingServices 
>         <site</site 
>       </ReportingServices 
>     </taskXml 
>   </task 
>   <task id="Populate Reports" plugin="Microsoft.ProjectCreationWizard.Reporting" completionMessage="Project reports uploaded." 
>     <dependencies 
>       <dependency taskId="Site" / 
>     </dependencies 
>     <taskXml 
>       <ReportingServices 
>         <folders. . . </folders 
>         <reports. . . </reports 
>       </ReportingServices 
>     </taskXml 
>   </task 
> </tasks 
> ```  

<a name="site"></a> 

##  Create the Reports site  

The first task is to create the reporting site. The reporting site will have a link to it on the project portal home page, and the link will be labeled ![Report](media/icon_reportte.png "Icon_reportTE")**Reports**. Use the **site** element to create the site, as the following example shows:  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <taskXml>  
>       <ReportingServices>  
>         <site></site>  
>       </ReportingServices>  
> </taskXml>   
> ```  

<a name="Folders"></a> 

##  Define the reporting folders  

You use the **folder** element to create folders on the reporting site. Use the path attribute to specify the relative path name of the new folder. The folder appears on the project site and under the **Reports** folder in Team Explorer.  

The following example creates four top-level folders and two sub-folders on the reporting site. The top-level folders are labeled Bugs, Builds, Project Management, and Tests. The two sub-folders are located under Project Management and are labeled Visual Studio and Visual Studio ALM.  

> [!div class="tabbedCodeSnippets"]
> ```XML 
> <taskXml 
>       <ReportingServices 
>       <folders 
>          <folder path="Bugs" / 
>           <folder path="Builds" / 
>           <folder path="Project Management" / 
>           <folder path="Project Management/Visual Studio" / 
>           <folder path="Project Management/Visual Studio ALM" / 
>           <folder path="Tests" / 
>       </folders 
>       </ReportingServices 
> </taskXml 
> ```  

<a name="reports"></a> 

##  Specify the reports to upload  

To add the .rdl reports to the reporting site, copy each .rdl files into a folder under the Reports folder in the process template. Then use the report element to describe the necessary properties and data sources for the report.  

The following example specifies that the Remaining Work.rdl file will be uploaded to the Project Management folder. You must specify the **ExplicitProject** parameter and the data sources for each report. The data sources in the following example correspond to the names that are automatically assigned to the Analysis Services cube and data warehouse relational database.  

> [!NOTE]
>  The names of the reporting services data sources are `Tfs2010ReportsDS` and `Tfs2010OlapReportsDS`. Even though you might have installed or upgraded to a later version of TFS, these names, which were assigned to the data sources for a TFS 2010 installation, continue to be used.  
> 
> 
> [!div class="tabbedCodeSnippets"]
> ```XML 
> <taskXml 
>       <ReportingServices 
>      <reports 
>        <report name="Remaining Work" filename="Reports\Remaining Work.rdl" folder="Project Management" cacheExpiration="30" 
>        <parameters 
>           <parameter name="ExplicitProject" value="" / 
>        </parameters 
>        <datasources 
>           <reference name="/Tfs2010OlapReportDS" dsname="TfsOlapReportDS" / 
>           <reference name="/Tfs2010ReportDS" dsname="TfsReportDS" / 
>        </datasources 
>        </report 
>  . . .   
>      </reports 
>       </ReportingServices 
> </taskXml 
> ```  

<a name="child_elements"></a> 

## ReportingServices elements

The following syntax shows the structure of the **ReportingServices** element and its child elements. You specify these elements within the **taskXml** container element and only for the Reporting plug-in.  


> [!div class="tabbedCodeSnippets"]
> ```XML
> <ReportingServices 
>       <folders 
>       <folder / 
>  . . .   
>       </folders 
>       <reports 
>       <report 
>          <parameters 
>                <parameter / 
>          </parameters 
>          <datasources 
>                <reference / 
>          </datasources 
>       </report 
>  . . .   
>       </reports 
> </ReportingServices  
> ```  

The following table describes the elements that you use to specify a report to upload to a project and that can be accessed through SQL Server Reporting Services.

:::row:::
   :::column span="1":::
   **Element**
   :::column-end:::
   :::column span="3":::
   **Description and syntax**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **datasources**
   :::column-end:::
   :::column span="3":::
   Required child element of **report**. Contains a collection of **reference** elements that each specify a data source that the report uses.   
   ```
   <datasources>
         <reference />
   </datasources>
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **folder**
   :::column-end:::
   :::column span="3":::
   Required child element of **folders**. Defines the name of a folder to create under the Reports node for a project.   
   ```
   <folder path="FolderName" />
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **folders**
   :::column-end:::
   :::column span="3":::
   Optional child element of **ReportingServices**. Contains a collection of **folder** elements that each specify the name of a folder to create.   
   ```
   <folders>
         <folder path="FolderName" />
   </folders>
   ```
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **parameter**
   :::column-end:::
   :::column span="3":::
   Required child element of **parameters**. Specifies the name of a report parameter and the value to assign to it.    
   ```
   <parameter name="ParameterName" value="ParameterValue" />
   ```   
   Where each attribute has the following definition:  
   
   - **name**: The name of a parameter that you want to specify.
   - **value**: The value to assign to the parameter. At a minimum, you must define the following parameter to make your report automatically use the project that contains your report:  
   `<parameter name="ExplicitProject" value="" />`.
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **parameters**
   :::column-end:::
   :::column span="3":::
   Required child element of **report**. Defines a collection of **parameter** elements for a report.      
   ```
   <parameters>
         <parameter />
   </parameters>
   ```   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **properties**
   :::column-end:::
   :::column span="3":::
   Optional child element of **report**. Provides the container element for **property**.     
   ```
   <properties>
         <property />
   </properties>
   ```   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **property**
   :::column-end:::
   :::column span="3":::
   Required child element of **properties**.     
   ```
   <property name="PropertyName" value="PropertyValue" />
   ```   
   Where each attribute has the following definition:

   - **name**: The name of a property that you want to specify. For more information, see [View, organize, and configure reports using Report Manager](/previous-versions/azure/devops/report/admin/view-upload-organize-reporting-services-reports).  
   - **value**: The value to assign to the property..
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **reference**
   :::column-end:::
   :::column span="3":::
   Required child element of **datasources**. Specifies the names that are assigned in Team Foundation Server for the data warehouse relational database and the Analysis Services cube.       
   ```
   <reference name="RelationalDBName" dsname="OLAPDBName"  />
   ```   
   Where each attribute has the following definition:  

   - **name**: The name of the TFS data source. For Team Foundation Server 2010 and later versions, this value is Tfs2010OlapReportDS for the Analysis Services cube or Tfs2010ReportsDS for the relational data warehouse.  
   - **dsname**: The name of the database resource. Specify TfsOlapReportDS for the Analysis Services cube, and TfsReportsDS for the relational data warehouse.  
   
   For more information about the names of reporting data sources, see [Locate reports after the upgrade to TFS 2010](/previous-versions/azure/devops/report/admin/locate-reports-after-upgrade).  
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **report**
   :::column-end:::
   :::column span="3":::
   Required child element of **reports**. Specifies the name of the report, the file that contains the .rdl definition, and folder to which the report is uploaded.       
   ```
   <report name="ReportName" filename="ReportFilePathName"  folder="FolderName" 
   cacheExpiration="CacheDuration">
         <parameters> . . . </parameters>
         <datasources> . . . </datasources>
         <properties> . . . </properties>
   </report>
   ```   
   Where each attribute has the following definition:  

   - **name**: The name of the report to display on the reporting site and in Team Explorer.  
   - **filename**: A relative path under the local Reports folder from where to get the .rdl report file.  
   - **cacheExpiration**: The default number of minutes for which the report is cached.     
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **reports**
   :::column-end:::
   :::column span="3":::
   Required child element of **ReportingServices**. Contains a collection of **report** elements that each specify the name of a report file to upload.       
   ```
   <reports>
         <report />
   </reports>
   ```   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **ReportingServices**
   :::column-end:::
   :::column span="3":::
   Required child element of the **taskXml** element for the Reporting plug-in. Describes the tasks that are required to define the reports and folders for SQL Server Reporting Services.     
   ```
   <ReportingServices>
         <folders> . . . </folders>
         <reports> . . . </reports>
         <properties> . . . </properties>
   </ReportingServices>
   ```   
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **site**
   :::column-end:::
   :::column span="3":::
   Required element for the Reporting plug-in. Specifies that a reporting site for the project will be created.      
   ```
   <site>
        . . . 
   </site>
   ```   
   :::column-end:::
:::row-end:::

## Related articles
- [Customize a process template](customize-process.md)   
- [Process template and plug-in files](overview-process-template-files.md)