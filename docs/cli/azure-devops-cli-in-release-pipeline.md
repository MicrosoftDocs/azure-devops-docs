---
title: Azure DevOps CLI in a release pipeline
titleSuffix: Azure DevOps 
description: Learn how to to create a release pipeline using Azure DevOps CLI 
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---


# Azure DevOps CLI in a release pipeline

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

<!--- QUESTION: Are there any prerequisites or Features that need to be enabled for this flow to be valid? --> 

To use the Azure DevOps CLI in a hosted agent using a Release Pipeline, execute the following steps:

1. Create a release pipeline.

	> [!div class="mx-imgBorder"]  
	> ![new release pipeline](media/new-pipeline.png)

2. Choose **Empty job**.

	> [!div class="mx-imgBorder"]  
	> ![select template](media/select-template.png)

3. Choose Stage 1 to configure the stage.

	> [!div class="mx-imgBorder"]  
	> ![Stage 1](media/stage-1.png)

4. Choose the **Tasks** page, and configure the job to use Hosted macOS in Agent Pools.

	> [!div class="mx-imgBorder"]  
	> ![Agent Job Configuration](media/job-config.png)

5. Choose the :::image type="icon" source="../media/icons/blue-add.png" border="false"::: plus icon to add another task and configure it as a PowerShell task. Enter *Power* into the search box to filter the list.

	> [!div class="mx-imgBorder"]  
	> ![PowerShell](media/power-shell.png)

6. Add the script, either via file or inline. For the example, the script has been included inline.

	> [!div class="mx-imgBorder"]  
	> ![Add script](media/script-1.png)

For reference, here is the inline script:

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

