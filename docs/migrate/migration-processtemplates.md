---
title: Validation of process templates for migration import
titleSuffix: Azure DevOps
description: Guidance for fixing common data migration tool process template issues.
ms.topic: troubleshooting
ms.technology: devops-migrate
ms.contentid: ee8c290d-0b48-4cbd-b7fd-7afb9591c169
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops' 
ms.date: 04/01/2021
---

# Validate and resolve errors related to process templates

[!INCLUDE [version-azure-devops](includes/version-azure-devops.md)]

As part of the migration import process, the data migration tool checks the process used by the projects in the collection. Fix any errors that get flagged.  

After resolving the errors, rerun the data migration tool's `validate` command to verify that all errors have been fixed.

> [!NOTE]
> It's recommended that you use the [Migration Guide](https://aka.ms/AzureDevOpsImport) to progress through your import. The guide links to the technical documentation as needed.
>
> With the release of Azure DevOps Server 2019 the TFS Database Import Service was rebranded to Migrate to Azure DevOps. This includes TfsMigrator becoming the data migration tool or migrator for short. This service still works exactly the same as the old Import Service. If you're on an older version of on-premises with TFS as the branding you can still use this feature to migrate to Azure DevOps as long as you upgrade to one of the supported versions. 

<a id="process-validation-types"></a>

## Process validation types

During validation, the data migration tool determines the target process model for each project. It automatically assigns one of the following two process models to each project in the collection: 
- **Inherited process model**: If the project was created with the Agile, Scrum, or CMMI process template, and was never customized. 
- **Hosted XML process model**: If the project process appears to have been customized. A customized process contains custom fields, work item types, or other types of customizations.  
 
When the Hosted XML process is the targeted process model, the data migration tool validates if the customizations can be migrated. The data migration tool generates two files during the validation: 

- **DataMigrationTool.log**: Contains the set of process validation errors found in the collection. Fix all process errors found to proceed with your migration.  
    
- **TryMatchOobProcesses.log**: Lists for each project the target process model - Inheritance or Hosted XML. For projects that are set to target the Hosted XML process model, it explains why they are considered to be customized. You don't have to fix these errors, but they give you guidance what to do in case you want to migrate to the Inheritance process model. Note that once a collection is imported, you can migrate a project to an Inheritance process model.  
    
Most customers have a mix of projects within a collection. Some projects use a default process template and others use custom process templates. The data migration tool checks and validates each project accordingly. It is very possible that you'll have a mix of projects, some mapped to an Inherited process and others to a Hosted XML process.  

We recommend that for any project that has not been customized, that you review the **TryMatchOobProcesses.log** to determine if there are any errors. If so, make the adjustments accordingly so that the project can be mapped to an Inherited process upon data import.

## Update to a system process

If you started with an older version of Azure DevOps Server, odds are your projects are still using an older process template. If those projects have not been updated using the [Configure Features Wizard](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade) then the data migration tool will find process errors. In some rare cases, if your process is very old, even the Configure Features Wizard won't be able to resolve the errors.

Here are some examples of error messages you may receive:

```no-highlight
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402571: Required element PortfolioBacklog is missing from Process Configuration.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402571: Required element BugWorkItems is missing from Process Configuration.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402571: Required element FeedbackRequestWorkItems is missing from Process Configuration.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402571: Required element FeedbackResponseWorkItems is missing from Process Configuration.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField Team.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField RemainingWork.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField Order.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField Effort.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField Activity.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField ApplicationStartInformation.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField ApplicationLaunchInstructions.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF402574: ProcessConfiguration doesn't specify required TypeField ApplicationType.
Invalid process template: WorkItem Tracking\Process\ProcessConfiguration.xml:: TF400572: The Project Process Settings must be configured for this feature to be used.
```

If you have never customized your project (added fields, work item types, etc.), then fixing these errors is actually pretty simple. If you have customized your process, then this approach won't work. You'll need to manually change the process templates so that your customizations don't get overwritten.

First, make sure you know what process your project started as. Is it Scrum, Agile or CMMI? In this example, let us assume Agile. Next, go to the [Process Customization Scripts](https://github.com/Microsoft/process-customization-scripts) provided on GitHub and download the repo. In this instance, we are going to focus on contents in the 
**Import** folder.

Use the **ConformProject.ps1** script to conform a project of your choosing to the Agile system process. This will update the entire project to be Agile.

```
.\ConformProject.ps1 "<collection url>" "<project name>" "c:\process-customization-scripts\import\agile" 
```

Make sure you do this for each and every project. 

<a id="dealing-with-process-errors"></a>

## Resolve process errors

Are your process templates customized? Are you using an older outdated process template? If so, you'll most likely have process validation errors. The data migration tool does an exhaustive check against your process templates. It checks to make sure that it is valid for Azure DevOps Services. Odds are that you'll need to make some adjustments and apply them to your collection.

> [!NOTE]   
> If you are using an OOB Agile, Scrum, or CMMI process, you probably won't see any errors in the **DataMigrationTool.log**. Instead, check the **TryMatchOobProcesses.log** for errors. If you are error free, then your project will map to an OOB process.

There are several customizations that won't work in Azure DevOps Services. Make sure you review the [list of customizations](../organizations/settings/work/import-process/differences.md) that are supported. 

If you have projects that are using an older process template, the data migration tool will find several errors. This is because your process templates hasn't been updated to match the most recent process templates. To start, try running the [Configure Features Wizard](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade) for each project. This will attempt to update your process templates with the most recent features. Doing so should drastically reduce the error count. 

Finally, make sure you have [`witadmin`](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) on the machine that you intend to use to fix the process errors. This can be your local desktop. The `witadmin` command line tool is used in the automated scripts and is required whenever making changes to the process templates.

## Step 1 - Review errors

**DataMigrationTool.log** file will be generated and contains the list of errors that the validation process found. To view the logs, open DataMigrationTool.log file. Search for the string "Validation - Starting validation of project 1". Each project is validated. Scan through all the projects and search for any lines that contain a prefix of **[Error ...**.

![Process logging file generated by the data migration tool](media/migration-troubleshooting/witLogFile.png)

For a list of validation errors, see [Resolve validation errors for process import](../organizations/settings/work/import-process/resolve-errors.md). For each validation error, we have provided the error number, description, and the method to resolve. 

## Step 2 - Fix errors

Once you've determined which projects have errors and the error details, fix the errors. Fixing the errors requires that you change the XML syntax and apply the changes back to the project. 

> [!NOTE] 
> We recommend you don't use TFS Power Tools to do this work. Instead, we highly recommended that you modify the XML manually.

To get the process template from the project add the **/SaveProcesses** parameter when running the data migration tool command.

```cmdline
Migrator validate /collection:{collection URL} /SaveProcesses
```

This command will extract the XML from the project and place it into the same folder as the logs. Extract the zip files to your local machine so that you can edit the files.

Now, fix the XML. Use the logs from the ```DataMigrationTool.log``` file to determine the errors for each project.

![Process logging file generated by the data migration tool](media/migration-troubleshooting/witLogFile.png)

Some errors will require you to do use a [`witadmin changefield`](../reference/witadmin/manage-work-item-fields.md) command. Changing a field name is the most common example. To save yourself some time, we recommend you run the `witadmin changefield` command and then re-run the data migration tool. Doing this will re-export the XML with the corrected names. Otherwise, you'll need to manually fix the fields in the XML syntax as well.

Once you make a fix, apply the changes back to the Azure DevOps Server. To do this, depending on the changes you made, you'll need to run one or more [`witadmin`](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md) commands. To make this easier for you, we created a PowerShell script to automate the process. The script contains all of the `witadmin` commands needed to conform the entire process. 

You can get the scripts at [Process Customization Scripts](https://github.com/Microsoft/process-customization-scripts). Use the **import/ConformProject.ps1** script.

```cmdline
.\conformproject.ps1 "<collection url>" "<project name>" "<process template folder>"
```
![Conform project processes script running](media/migration-troubleshooting/conformProjectProcessesPowerShell.png)

When the script has completed, re-run the data migration tool to validate the collection. Follow steps 1 through 3 until the data migration tool generates no more validation errors.

> [!TIP]
> If you are new to XML and `witadmin`, we suggest you make one fix at a time and then conform. Continue this loop until all errors are resolved. 

## Common validation errors

#### VS402841: Field X in work item type Bug has syncnamechanges=false but has rules making it an identity field. Identity fields must have syncnamechanges=true. Please update your process template to include this change.

In Azure DevOps Services we added a rule so that every identity field must have the **syncnamechanges=true** attribute. In Azure DevOps Server that rule does not apply. Therefore, the data migration tool will identify this as an issue. Don't worry, making this change on Azure DevOps Server on-prem will not cause any harm.

Run the `witadmin changefield` command. Syntax for the command looks similar to the following:  

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:fieldname /syncnamechanges:true
```

For more information on the `witadmin changefield` command see [Manage work item fields](../reference//witadmin/manage-work-item-fields.md).

#### TF402556: For field System.IterationId to be well defined, you must name it Iteration ID and set its type to Integer.

This error is typical for old process templates. Try running the [Configure Features Wizard](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade) on each project. Alternatively you can run the follow `witadmin` command: 

```cmdline
witadmin changefield /collection:http://AdventureWorksServer:8080/tfs/DefaultCollection /n:fieldname /name:newname
```
#### TF402571: Required element BugWorkItems is missing from Process Configuration.

This error typically occurs when a process hasn't been updated in a while. Try running the [configure features wizard](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade) on each project to resolve. 

#### TF402564: You've defined XX global lists. Only 64 are allowed.

By default, Azure DevOps Services will support 64 global lists. You'll typically run across this error if you have a large amount of build pipelines. The global list named Builds - **TeamProjectName** gets created for each new build pipeline. You'll need to remove the outdated global lists.

## Related articles

- [Migration and process model FAQs](faqs.yml)
- [`witadmin`: Customize and manage objects for tracking work](../reference/witadmin/witadmin-customize-and-manage-objects-for-tracking-work.md)
- [Differences between Azure DevOps Services and Azure DevOps Server process template customizations](../organizations/settings/work/import-process/differences.md)
- [Configure features after Azure DevOps Server upgrade](/previous-versions/azure/devops/reference/upgrade/configure-features-after-upgrade)
- [Resolve validation errors](../organizations/settings/work/import-process/resolve-errors.md)
- [Define global lists in Azure DevOps Server](../reference/xml/define-global-lists.md)
- [Process customization PowerShell scripts](https://github.com/Microsoft/process-customization-scripts)
