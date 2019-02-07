---
title: Change the work item form layout 
titleSuffix: TFS 
description: Change the work item form layout by exporting the XML file and modifying its contents for Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 73869d51-eaa2-4aad-90f4-3081b8d26963
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: conceptual
monikerRange: '>= tfs-2013 <= tfs-2017'
ms.date: 03/31/2017
---

# Change the work item form layout

[!INCLUDE [temp](../../_shared/version-tfs-2013-2017.md)] 

You can change the work item form layout by exporting the XML file and modifying the contents of the `FORM` section. After you modify and import the XML file, you can verify the changes you made in the updated work item type. Types of layout changes you can make include but are not limited to the following:  
  
-   Change the label or placement of a field on the form    
-   Move groups of fields from one tab to another    
-   Add new tabs or columns  


> [!IMPORTANT]  
> This topic applies to project customization for On-premises XML (TFS 2017 and earlier versions) process models using the old form layout. For TFS 2017 and later versions, see [WebLayout and Control elements](weblayout-xml-elements.md). 
>
> For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md). For an overview of process models, see [Customize your work tracking experience](../customize-work.md).
  
For an overview of the controls you can place in a work item form, see [Specify work item form controls](specify-work-item-form-controls.md). For an overview of the top-level structural elements for the `FORM` section, see. [Design the work item form](design-work-item-form.md).  
  
[!INCLUDE [temp](../../_shared/update-xml-wit.md)] 
  
<a name="Export"></a> 
## Export and open the WIT definition file  
  
Perform one of the following steps based on the scope of the customization you are making:  
  
**If you are modifying a work item type for a single project**:  
  
1.  Run **witadmin exportwitd** to export the XML file for the work item type you want to modify. For more information, see [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  
  
2.  Open the file in Visual Studio.  
  
**If you are modifying a WIT to customize a process template**:  
  
1.  Move to the location where you downloaded the process template.  
  
2.  Open the WIT XML file.  
  
<a name="ChangeForm"></a> 
## Change the layout of the FORM section  
  
1.  Find the `<TabGroup>` section of the XML file. Notice that there are `<Tab>` elements for items such as Links and File Attachments in which each `<Tab>` element contains a `<Control>` element that renders the respective control.  
  
    ```xml
    <Tab Label="Links">  
          <Control Type="LinksControl" />  
    </Tab>  
    <Tab Label="File Attachments">  
          <Control Type="AttachmentsControl" />  
    </Tab>  
    ```  
  
2.  Merge the two `<Tab>` elements into a single Links and Attachments `<Tab>` element that contains both controls by replacing the XML shown in the previous step with the new XML shown in the following example:  
  
    ```xml
    <Tab Label="Links and Attachments">  
          <Control Type="LinksControl" Label="Links" LabelPosition="Top" />  
          <Control Type="AttachmentsControl" Label="Attachments" LabelPosition="Top" />  
    </Tab>  
    ```  
  
3.  Find the section of the `<FORM>`, `<Layout>` definition that describes the group you want to modify, such as the Classification group.  
  
    ```xml
    <Group Label="Classification">  
          <Column PercentWidth="100">  
           <Control Type="WorkItemClassificationControl" FieldName="System.AreaPath" Label="Area" LabelPosition="Left" />  
           <Control Type="WorkItemClassificationControl" FieldName="System.IterationPath" Label="Iteration" LabelPosition="Left" />  
          </Column>  
    </Group>  
    ```  
  
    > [!NOTE]  
    >  For best results, every control or group should display in a column even if the column spans the full width of the form. In turn, every column should display in a group even if the group has no visible label or boundary.  
  
4.  Select and copy the following lines to the clipboard for later use.  
  
    ```xml
  
    <Control Type="WorkItemClassificationControl" FieldName="System.AreaPath" Label="Area" LabelPosition="Left" /> <Control Type="WorkItemClassificationControl" FieldName="System.IterationPath" Label="Iteration" LabelPosition="Left" />  
  
    ```  
  
5.  Delete the lines starting with `<Group Label="Classification">` and ending with `<Group>` in the following XML, to remove the Classification group from its current position on the form.  
  
    ```xml
    <Layout>  
          <Group>  
           <Column PercentWidth="70">  
          <Control Type="FieldControl" FieldName="System.Title" Label="&Title:" LabelPosition="Left" />  
           </Column>  
           <Column PercentWidth="30">  
          <Control Type="FieldControl" FieldName="Microsoft.VSTS.Common.Discipline" Label="&Discipline:" LabelPosition="Left" />  
           </Column>  
          </Group>  
          <Group Label="Classification">       <Column PercentWidth="100">      <Control Type="WorkItemClassificationControl" FieldName="System.AreaPath" Label="&Area:" LabelPosition="Left" />      <Control Type="WorkItemClassificationControl" FieldName="System.IterationPath" Label="&Iteration:" LabelPosition="Left" />       </Column>      </Group>  
    ```  
  
6.  In the `<TabGroup>` section, find the following lines that define the **Details** tab:  
  
    ```xml
    <Tab Label="Details">  
          <Group>  
           <Column PercentWidth="50">  
          <Group Label="General">  
           <Column PercentWidth="100">  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Common.Issue" Label="Iss&ue:" LabelPosition="Left" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Common.ExitCriteria" Label="E&xit criteria:" LabelPosition="Left" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Build.IntegrationBuild" Label="Integration &build:" LabelPosition="Left" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.TaskHierarchy" Label="Task C&ontext:" LabelPosition="Left" ReadOnly="True" />  
           </Column>  
          </Group>  
           </Column>  
           <Column PercentWidth="50">  
          <Group Label="Schedule">  
           <Column PercentWidth="100">  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.RemainingWork" Label="Remaining &work (hours):" LabelPosition="Left" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.CompletedWork" Label="Com&pleted work (hours):" LabelPosition="Left" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.StartDate" Label="Start Dat&e:" LabelPosition="Left" ReadOnly="True" />  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Scheduling.FinishDate" Label="&Finish Date:" LabelPosition="Left" ReadOnly="True" />  
           </Column>  
          </Group>  
           </Column>  
          </Group>  
    </Tab>  
    ```  
  
7.  To move these controls to the **Details** tab, paste the contents of your clipboard below the `<Tab Label="Details">` element.  
  
    ```xml
    <Tab Label="Details">  
          <Control Type="WorkItemClassificationControl" FieldName="System.AreaPath" Label="Area" LabelPosition="Left" />      <Control Type="WorkItemClassificationControl" FieldName="System.IterationPath" Label="Iteration" LabelPosition="Left" />  
          <Group>  
           <Column PercentWidth="50">  
          <Group Label="General">  
           <Column PercentWidth="100">  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Common.Issue" Label="Iss&ue:" LabelPosition="Left" />  
    ...  
    ```  
  
8.  Make the following changes to create a grouping around the moved fields and to divide the fields into two columns:  
  
    ```xml
    <Tab Label="Details">  
       <Group Label="Classification">
          <Column PercentWidth="50">
             <Group>
         <Column PercentWidth="100">
                   <Control Type="WorkItemClassificationControl" FieldName="System.AreaPath" Label="Area" LabelPosition="Left" />  
                   <Control Type="WorkItemClassificationControl" FieldName="System.IterationPath" Label="Iteration" LabelPosition="Left" />  
                </Column>
             </Group>
          </Column>
          <Column PercentWidth="50">
             <Group>
                <Column PercentWidth="100">
                   <Control Type="FieldControl" FieldName="MyCompany.MyProcess.Category" Label="Category" LabelPosition="Left" />  
                </Column>
             </Group>
          </Column>
       </Group>  
       <Group>  
           <Column PercentWidth="50">  
       <Group Label="General">  
            <Column PercentWidth="100">  
              <Control Type="FieldControl" FieldName="Microsoft.VSTS.Common.Issue" Label="Iss&ue:" LabelPosition="Left" />  
    ...  
    ```  
  
9. Save your changes.  
  
10. To import the new work item type to a single project, see [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md). To add the work item type to your process template, see [Add type definitions for work items](../process-templates/add-wit-definitions-process-template.md).  
  
<a name="Verify"></a> 
##  Verify the Web page or HTML content appears in the work item form  
  
1.  In Team Explorer, choose **Refresh** to download the latest updates from the server.  
  
     These updates include the changes that you just imported. Wait several seconds until the Work Items node is loaded. Nodes that are still loading display the word **working**.  
  
2.  Create a new work item by using the work item type you modified.  
  
     Notice that the Classification group is no longer on the main form. On the **Links and Attachments** tab choose the **Details** tab to see the results of the changes that you made.  
  
## Related articles 
-  [Design the work item form](design-work-item-form.md)   
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md)