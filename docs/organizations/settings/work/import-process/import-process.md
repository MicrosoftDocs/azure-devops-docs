---
title: Import a process
titleSuffix: Azure DevOps Services     
description: Add or update a process by importing a process to support customization of tracking work in Azure DevOps Services.
ms.technology: devops-agile
ms.prod: devops
ms.assetid: AF7ABA0F-D3E8-48CA-9164-ABC966BAAA77
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 03/20/2018
---

# Process and projects    

**Azure DevOps Services (Hosted XML)**

> [!IMPORTANT]  
> Import process supports the Hosted XML process model which allows you to manage customizations through updating the WIT definition of a process template. This feature is only available for organizations that have been migrated to Azure DevOps Services using the [TFS Database Import Service](https://aka.ms/TFSDataImport).  
>
> If you use the Inheritance process model, you can customize your work tracking through the user interface by [creating an inherited process](../manage-process.md). If you use the On-premises XML process model, you can customize a process template, see [Upload or download a process template](../../../../boards/work-items/guidance/manage-process-templates.md) and [Customize a process template](../../../../reference/process-templates/customize-process.md).
>
> To learn more about process models, see [Customize work tracking](../../../../reference/customize-work.md). 

In Azure DevOps Services, you manage customization of work tracking objects through a process.
Processes are imported and exported through a web based administration experience. 

When you import a new process, you're able to create new projects using it.  
When you import an existing process, all projects that use that process are updated to reflect the changes. 

For example, updates made to any of the custom processes listed below automatically update the two projects that use the process.
 
![Custom processes mapped to projects](_img/ALM_IP_ProcessUse.png)

As you discover additional customizations that you need to make, you can export the existing process, update the process XML definition files, 
zip the result and re-import the newly updated process. Your changes are applied to all your existing projects that use that process.    

Import process supports the following scenarios:   
*   [Import an existing process from an on-premises Team Foundation Server (TFS)](#import-from-TFS)  
*   [Import a new process created from an existing exported process](#import-process)  
*   [Import an update to an existing process, and have all projects using that process be updated](#update-process)  

<a id="import-from-TFS">  </a>
## Import a process from an on-premises TFS 

These steps can be followed if you want to test your process in TFS to see if it works in Azure DevOps Services.

In Team Foundation Server, each project has its own copy of process so careful consideration needs to be made as to which processes should exist for your organization.
Migration to Azure DevOps Services is a great time to think about process alignment across your organization and reducing the number of variants of that centralized process.  
 
1.  Run the [process export script](customize-process.md#open-process-wit) to generate a process for a given project.   

2.  (Optional) Edit the ProcessTemplate.xml file name and description. Ensure it conforms to the rules and constraints outlined in [Customize a process](customize-process.md).

3.  Create a zip file of the process folder and files.  

4.  [Import the zip file of your custom process by following the steps in the next section](#import-process).  

5.  Repeat the above process for each process you want to import to Azure DevOps Services.

6.  Using the imported process(es), create projects on Azure DevOps Services for each you want to migrate. 

<a id="open-process-wit">  </a>
### Open Process in the admin context

[!INCLUDE [temp](../../_shared/open-process-admin-context-ts-only.md)]

<a id="import-process">  </a>
## Import a process

Prior to importing a process, you'll want to [customize it to support your work tracking needs](customize-process.md). 
Name your process something other than Scrum, Agile, or CMMI. These system processes are locked and you're prevented from overwriting them.   

1. Only administrators can import process so if you aren't the organization owner or a member of the Project Collection Administrator's group, [get added](../../../security/set-project-collection-level-permissions.md). 

2.  From the Process tab, choose import and then browse to the zip file of the process you've customized.  
  
    > [!NOTE]    
    > If you don't see the **Import process** link, then your organization isn't set up to support the Hosted XML process model. You should work with the [Inheritance process model](../manage-process.md) for your customization needs. The Hosted XML process model is only supported if your account was created through the [Data Import Service](https://aka.ms/TFSDataImport).

    <img src="_img/import-process-import.png" alt="Import Process, choose process file to import" style="border: 2px solid #C3C3C3;" />

3.  Choose the file to upload. Your [custom process must meet specific constraints](customize-process.md) in order to pass validation checks during import.  

	<img src="_img/import-process-dialog.png" alt="Import Process, choose process file to import" style="border: 2px solid #C3C3C3;" />	 

	> [!IMPORTANT]  
	>You can't update one of the locked processes: Agile, CMMI, and Scrum.  

3.  Upon successful import, you'll see the following message.  

    <img src="_img/ALM_IP_AddNewProcessSuccess.png" alt="Import process dialog, Process file successfully imported" style="border: 2px solid #C3C3C3;" />

    If the process doesn't pass the validation checks performed on import, you'll receive a list of error messages.  
    [Correct each error](resolve-errors.md) and then retry the import. 

4.  You can immediately create a project using the newly imported process. 

	<img src="_img/import-process-new-team-project.png" alt="Create project from imported process" style="border: 2px solid #C3C3C3;" />

<a id="update-process">  </a>
## Update an existing process

Once you've added a process, you can update it by importing a zip file where you've modified one or more files within the process template.

> [!NOTE]    
>It's a best practice to [Export a process](#export-process) before making changes so that you don't accidentally overwrite changes made by other users.

1.  Import the process according to steps 2 and 3 from the previous procedure.     

2.  Confirm that you want to update the existing process.  

    <img src="_img/ALM_IP_UpdateProcessConfirm.png" alt="Import process confirmation dialog" style="border: 2px solid #C3C3C3;" />

3.  You'll see the following dialog while the system updates all projects that were created using the updated process.  

    <img src="_img/ALM_IP_ApplyProcessChanges.png" alt="Apply process changes dialog" style="border: 2px solid #C3C3C3;" />

4.  Upon successful import, you'll see the following message. All projects that were created with the process are updated with the modifications. 

    <img src="_img/ALM_IP_ImportAndUpdateSuccess.png" alt="Process page, Process template file successfully imported and projects updated" style="border: 2px solid #C3C3C3;" />

5.  If you renamed or deleted fields or work item types, you receive a confirmation message.
    Go ahead and check the box and proceed with the import. To learn more about each message, click the forward link provided. 
    [Information messages](resolve-errors.md#info-only) don't require any action on your part.  

    <img src="_img/ALM_IP_InfoMessage.png" alt="Deleted field confirmation dialog" style="border: 2px solid #C3C3C3;" />

     

<a id="default-process">  </a>
## Set the default process

Set a process as the default to have it preselected for all new projects you plan to create. 

<img src="_img/import-process-set-default.png" alt="Process page, Set default process" style="border: 2px solid #C3C3C3;" />

<a id="export-process">  </a>
## Export a process
Export a process when you want to update it or use it as the basis for creating another process. 

The system exports a zip file containing an XML representation of the process.  This can be modified and later imported.  


