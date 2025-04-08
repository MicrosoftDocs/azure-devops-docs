---
title: Import a Hosted XML process 
titleSuffix: Azure DevOps Services     
description: Import a Hosted XML process to support Azure Boards customization in Azure DevOps Services 
ms.service: azure-devops-boards
ms.assetid: AF7ABA0F-D3E8-48CA-9164-ABC966BAAA77
ai-usage: ai-assisted
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 04/08/2025
---

# Import and export a Hosted XML process  

[!INCLUDE [version-eq-azure-devops](../../../../includes/version-eq-azure-devops.md)]

> [!IMPORTANT]  
> The import process supports the Hosted XML process model, which allows you to manage customizations by updating the WIT (Work Item Type) definition of a process template. This feature is only available for organizations migrated to Azure DevOps Services using the [Database Import Service](../../../../migrate/migration-overview.md).  

If you use the Inheritance process model, you can customize your work tracking directly through the user interface by [creating an inherited process](../manage-process.md). For organizations using the on-premises XML process model, you can customize a process template. For more information, see the following articles:
- [Upload or download a process template](../../../../boards/work-items/guidance/manage-process-templates.md)
- [Customize a process template](../../../../reference/process-templates/customize-process.md)
- [Customize work tracking](../../../../reference/customize-work.md)

In Azure DevOps Services, you can customize work tracking objects using processes. Hosted XML processes allow you to import and export processes through a web-based administration interface, enabling flexibility and control over your organization's workflows.

When you import a new process, you can create new projects based on it. Importing an existing process updates all projects that use that process to reflect the changes automatically. For example, any updates made to the custom process automatically apply to the projects that use the process.

If you need to make other customizations, you can export the existing process, modify the process XML definition files, zip the updated files, and reimport the process. These changes are applied to all existing projects that use the updated process, ensuring consistency across your organization.

The import process supports the following scenarios:
- [Import an existing process from an on-premises Azure DevOps Server](#import-from-TFS)
- [Import a new process created from an existing exported process](#import-process)
- [Import an update to an existing process, and update all projects using that process](#update-process)

## Prerequisites

[!INCLUDE [process-prerequisites](../../includes/process-prerequisites.md)]

<a id="import-from-TFS">  </a>

## Import a process from an on-premises Azure DevOps 

In an on-premises Azure DevOps Server, each project maintains its own copy of a process. Therefore, it's important to carefully evaluate which processes should exist for your organization. Migration to Azure DevOps Services provides an excellent opportunity to align processes across your organization and reduce the number of process variants. Streamlining your processes ensures consistency and simplifies management in the cloud environment.

To test your process in an on-premises Azure DevOps Server to ensure it works in Azure DevOps Services, follow these steps:

1. Run the [process export script](customize-process.md#open-process-wit) to generate a process for a specific project.  
2. (Optional) Edit the `ProcessTemplate.xml` file to update the name and description. Ensure it adheres to the rules and constraints outlined in [Customize a process](customize-process.md).  
3. Compress the process folder and files into a zip file.  
4. [Import the zip file of your custom process by following the steps in the next section](#import-process).  
5. Repeat these steps for each process you want to import into Azure DevOps Services.  
6. Once the process is imported, use it to create projects in Azure DevOps Services for each project you want to migrate.

<a id="open-process-wit">  </a>

[!INCLUDE [temp](../../includes/open-process-admin-context-ts-only.md)]

<a id="import-process">  </a>

## Import a process

Before you import a process, ensure you [customize it to meet your work tracking needs](customize-process.md). Name your process something other than Scrum, Agile, or CMMI, as these system processes are locked and you can't overwrite them.

1. From the **Processes** tab, select **Import process**, and either drag-and-drop or browse to the zip file of the customized process.

   > [!NOTE]  
   > If the **Import process** link isn't visible, your organization isn't configured to support the Hosted XML process model. In this case, use the [Inheritance process model](../manage-process.md) for your customization needs. The Hosted XML process model is only available for accounts created through the [Data Import Service](../../../../migrate/migration-overview.md).

    > [!div class="mx-imgBorder"]  
    > ![Screenshot shows Import Process link.](media/import-process-import-link.png)

   Ensure that your [custom process meets specific constraints](customize-process.md) to pass validation checks during the import.

    > [!div class="mx-imgBorder"]  
    > ![Screenshot shows Import Process dialog, choose process file to import.](media/import-process-dialog.png)

    If you're updating an existing template, check the **Replace existing template** box. This action overwrites any template with the same name as the one you're importing and requires confirmation.

    > [!IMPORTANT]  
    > You can't update locked processes, such as Agile, CMMI, and Scrum.

   Upon successful import, the following confirmation message displays.

    > [!div class="mx-imgBorder"]  
    > ![Screenshot shows Import Process success dialog.](media/import-process-success-dialog.png)

    If the process fails validation, you receive a list of error messages. [Resolve each error](resolve-errors.md) and retry the import.

2. Once the process successfully imports, you can immediately create a project using the new process.

    > [!div class="mx-imgBorder"]  
    > ![Screenshot shows Import process actions menu, Create new team project from imported process.](media/import-process-new-team-project.png)

3. Complete the form that appears to create the project. For more information about the available options, see [Create a project](../../../projects/create-project.md).

    > [!div class="mx-imgBorder"]  
    > ![Screenshot shows Create new project dialog.](media/create-project-from-hosted.png)

<a id="update-process">  </a>

## Update an existing process

Once you add a process, you can update it by importing a zip file where you modified one or more files within the process template.

> [!NOTE]    
> It's a best practice to [Export a process](#export-process) before making changes so that you don't accidentally overwrite changes made by other users.

1. Import the process according to steps 2 and 3 from the previous procedure.     

2. Check the **Replace existing template** to indicate you want to overwrite the existing process.   

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows Import Process dialog, replace existing process.](media/import-replace-process.png)

   The Import Process dialog indicates that the system is updating projects that reference the Hosted XML process.    

3. Upon successful import, the following message displays. All projects created with the process get updated with the modifications. 

   > [!div class="mx-imgBorder"]  
   > ![Screenshot shows Process page, Import Process success dialog, successfully imported and updated projects.](media/import-process-successful-dialog.png)

4. If you renamed or deleted fields or work item types, you receive a confirmation message. Check the box and proceed with the import. For more information about each message, select the forward link provided. [Information messages](resolve-errors.md#info-only) don't require any action on your part.  

   > [!div class="mx-imgBorder"] 
   > ![Screenshot shows Deleted field confirmation dialog.](media/ALM_IP_InfoMessage.png)  

<a id="default-process">  </a>

## Set the default process

Set a process as the default to preselect it for all new projects you plan to create.  

> [!div class="mx-imgBorder"]  
> ![Process page, hosted XML process, set as default process menu option](media/set-default-process.png) 

<a id="export-process">  </a>

## Export a process

Exporting a process allows you to update an existing process or use it as a template for creating a new one. This action is useful when you need to make customizations or standardize processes across multiple projects in your organization.

When you export a process, the system generates a zip file containing an XML representation of the process. This file includes all the process definitions, such as work item types, fields, and workflows. You can modify these XML files to meet your specific requirements and then reimport the updated process to apply the changes.

For example, you might export a process to:
- Add custom fields or work item types.
- Adjust workflows to better align with your team's practices.
- Create a new process based on an existing one to support a different project or team.

After making the necessary modifications, you can reimport the process to update existing projects or create new ones using the customized process. This action ensures consistency and flexibility in managing work tracking across your Azure DevOps organization.

## Related articles

- [Customize a Hosted XML process](customize-process.md)
- [Clone a Hosted XML process to an Inheritance process](../upgrade-hosted-to-inherited.md)
