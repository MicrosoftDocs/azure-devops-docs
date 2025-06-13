---
title: Azure DevOps CLI in a release pipeline
titleSuffix: Azure DevOps 
description: Learn how to create a release pipeline using Azure DevOps CLI. This article includes a sample script.
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/05/2025
#customer intent: As a developer, I want to create a release pipeline in Azure DevOps by using the Azure DevOps CLI.
---


# Azure DevOps CLI in a release pipeline

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)] 

<!--- QUESTION: Are there any prerequisites or Features that need to be enabled for this flow to be valid? --> 

To use the Azure DevOps CLI in a hosted agent using a Release Pipeline, do the following steps:

1. Create a release pipeline.

   :::image type="content" source="media/new-pipeline.png" alt-text="Screenshot shows the Pipeline page with the option to create a new release pipeline.":::

1. Select **Empty job**.

   :::image type="content" source="media/select-template.png" alt-text="Screenshot shows the Select a template page with the Empty job link highlighted.":::

1. Select Stage 1 to configure the stage.

   :::image type="content" source="media/stage-1.png" alt-text="Screenshot shows the New release pipeline page with Stage 1 highlighted." lightbox="media/stage-1.png":::

1. Select the **Tasks** page, and configure the job to use Hosted macOS in Agent Pools.

   :::image type="content" source="media/job-config.png" alt-text="Screenshot shows the Tasks tab for Stage 1, which displays Agent job configuration." lightbox="media/job-config.png":::

1. Select the :::image type="icon" source="../media/icons/blue-add.png" border="false"::: plus icon to add another task and configure it as a PowerShell task. To filter the list, enter *Power* into the search box.

   :::image type="content" source="media/power-shell.png" alt-text="Screenshot shows the Tasks tab for Agent job with the Add tasks option." lightbox="media/power-shell.png":::

1. Add the script, either by using file or inline. For this example, the script is included inline.

   :::image type="content" source="media/script-1.png" alt-text="Screenshot shows an Azure PowerShell script included for the task." lightbox="media/script-1.png":::

1. There might be more configuration steps for your pipeline. When you finish all steps, select **Save**.

Here's the inline script for this example:

```powershell
$extensions = az extension list -o json | ConvertFrom-Json

$devopsFound = $False
foreach($extension in $extensions)
{
    if($extension.name -eq 'azure-devops'){
        $devopsFound = $True
    }
}

if ($devopsFound -eq $False){
    az extension add -n azure-devops
}
```
