---
title: PowerShell scripts for pipelines
description: Learn about using PowerShell scripts to customize your pipelines by adding business logic.
ms.topic: conceptual
ms.assetid: 7D184F55-18BC-40E5-8BE7-283A0DB8E823
ms.date: 08/15/2025
monikerRange: '<= azure-devops'
---

# PowerShell scripts for pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article explains how PowerShell scripts can add business logic to pipelines. The Azure Pipelines [PowerShell v2 task](/azure/devops/pipelines/tasks/reference/powershell-v2) can run PowerShell scripts that access the Azure DevOps REST API, work with Azure DevOps work items, manage tests, or call other services.

You can use [predefined variables](../build/variables.md) or [user-defined variables](../process/variables.md#user-defined-variables) in PowerShell scripts. You can also set [multi-job output variables](../process/variables.md#set-a-multi-job-output-variable) to make variables available to future jobs. For more information, see [Define variables](../process/variables.md).

You can use named parameters in your PowerShell scripts. Other kinds of parameters, such as [switch parameters](/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters#switch-parameters), aren't supported. For more information, see [How to declare cmdlet parameters](/powershell/scripting/developer/cmdlet/how-to-declare-cmdlet-parameters).

## PowerShell script task

To call a PowerShell script, you add the [PowerShell v2 task](/azure/devops/pipelines/tasks/reference/powershell-v2) to your pipeline. You can run Windows PowerShell on a [Windows build agent](../agents/windows-agent.md), or use `pwsh` to run PowerShell Core on any platform.

The build uses the active branch of your code. If your pipeline run uses the `main` branch of your code, your script also uses the `main` branch.

### [YAML](#tab/yaml)

Add the `pwsh` or `powershell` step to your YAML pipeline. The syntax for using PowerShell Core is different than for Windows PowerShell.

Example for PowerShell Core:

```yaml
steps:
- pwsh: ./my-script.ps1
```

Example for Windows PowerShell:

```yaml
steps:
- powershell: .\my-script.ps1
```

### [Classic](#tab/classic)

Add the [PowerShell Script task](/azure/devops/pipelines/tasks/reference/powershell-v2) to your pipeline. The same task works for both PowerShell Core and Windows PowerShell.

In the **PowerShell** pane, select either **File Path** or **Inline** under **Type**. For **File path**, add the location of your script file under **Script Path**. For **Inline**, enter your PowerShell commands in the **Script** field.

:::image type="content" source="media/powershell-update-script-path.png" alt-text="Screenshot of PowerShell task script path setting.":::

---

## Example script to apply version to assemblies

The following PowerShell example script applies a version based on build number to assemblies. For example, if your build number format definition `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)` produces the build number **Build HelloWorld_2024.07.19.1**, the script applies version **2024.07.19.1** to your assemblies.

For the script to run successfully, your build number format must have four segments. You can define the build number format in your pipeline. For more information, see [Run or build numbers](../process/run-number.md).

> [!NOTE]
> Build number is also called run number.

### [YAML](#tab/yaml)

Customize your build number in the YAML pipeline by using the `name` property at the root level of the pipeline.

```yaml
name: $(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)
```

#### [Classic](#tab/classic)

In a Classic pipeline, you can specify your build number format in the **Options** tab under **Build number format**. For example, enter `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)`.

:::image type="content" source="media\build-number-format.png" alt-text="Screenshot of build number format setting.":::

---

The following PowerShell example script applies a version to assemblies. For example, if your defined build number format `$(BuildDefinitionName)_$(Year:yyyy).$(Month).$(DayOfMonth)$(Rev:.r)` produces build number **Build HelloWorld_2024.07.19.1**, the script applies version **2024.07.19.1** to your assemblies.

```powershell
# Enable -Verbose option
[CmdletBinding()]

# Regular expression pattern to find the version in the build number
$VersionRegex = "\d+\.\d+\.\d+\.\d+"

# If not running on a build server, remind user to set environment variables for debugging
if(-not ($Env:BUILD_SOURCESDIRECTORY -and $Env:BUILD_BUILDNUMBER))
{
    Write-Error "You must set the following environment variables"
    Write-Error "to test this script interactively."
    Write-Host '$Env:BUILD_SOURCESDIRECTORY - For example, enter something like:'
    Write-Host '$Env:BUILD_SOURCESDIRECTORY = "C:\code\Fabrikam\HelloWorld"'
    Write-Host '$Env:BUILD_BUILDNUMBER - For example, enter something like:'
    Write-Host '$Env:BUILD_BUILDNUMBER = "Build HelloWorld_0000.00.00.0"'
    exit 1
}

# Make sure path to source code directory is available
if (-not $Env:BUILD_SOURCESDIRECTORY)
{
    Write-Error ("BUILD_SOURCESDIRECTORY environment variable is missing.")
    exit 1
}
elseif (-not (Test-Path $Env:BUILD_SOURCESDIRECTORY))
{
    Write-Error "BUILD_SOURCESDIRECTORY does not exist: $Env:BUILD_SOURCESDIRECTORY"
    exit 1
}
Write-Verbose "BUILD_SOURCESDIRECTORY: $Env:BUILD_SOURCESDIRECTORY"
    
# Make sure there's a build number
if (-not $Env:BUILD_BUILDNUMBER)
{
    Write-Error ("BUILD_BUILDNUMBER environment variable is missing.")
    exit 1
}
Write-Verbose "BUILD_BUILDNUMBER: $Env:BUILD_BUILDNUMBER"
    
# Get and validate the version data
$VersionData = [regex]::matches($Env:BUILD_BUILDNUMBER,$VersionRegex)
switch($VersionData.Count)
{
   0        
      { 
         Write-Error "Couldn't find version number data in BUILD_BUILDNUMBER."
         exit 1
      }
   1 {}
   default 
      { 
         Write-Warning "Found more than one instance of version data in BUILD_BUILDNUMBER." 
         Write-Warning "Assuming first instance is version."
      }
}
$NewVersion = $VersionData[0]
Write-Verbose "Version: $NewVersion"
    
# Apply the version to the assembly property files
$files = gci $Env:BUILD_SOURCESDIRECTORY -recurse -include "*Properties*","My Project" | 
    ?{ $_.PSIsContainer } | 
    foreach { gci -Path $_.FullName -Recurse -include AssemblyInfo.* }
if($files)
{
    Write-Verbose "Applying $NewVersion to $($files.count) files."
    
    foreach ($file in $files) {
        $filecontent = Get-Content($file)
        attrib $file -r
        $filecontent -replace $VersionRegex, $NewVersion | Out-File $file
        Write-Verbose "$file.FullName - version applied"
    }
}
else
{
    Write-Warning "Found no files."
}
```

<a name="oauth"></a>
<a name="example-powershell-script-access-rest-api"></a>
## Example script to access the REST API

The following example uses the `SYSTEM_ACCESSTOKEN` environment variable to access the [Azure Pipelines REST API](../../integrate/index.md).

#### [YAML](#tab/yaml)

You can use `$env:SYSTEM_ACCESSTOKEN` in an inline script in your YAML pipeline to access the OAuth token.

The following inline PowerShell script in a YAML pipeline **PowerShell@2** task uses the OAuth token to access the Azure Pipelines REST API that retrieves the pipeline definition.

```yaml
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: |
      $url = "$($env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI)$env:SYSTEM_TEAMPROJECTID/_apis/build/definitions/$($env:SYSTEM_DEFINITIONID)?api-version=5.0"
              Write-Host "URL: $url"
              $pipeline = Invoke-RestMethod -Uri $url -Headers @{
                  Authorization = "Bearer $env:SYSTEM_ACCESSTOKEN"
              }
              Write-Host "Pipeline = $($pipeline | ConvertTo-Json -Depth 100)"
  env:
     SYSTEM_ACCESSTOKEN: $(System.AccessToken)
```

#### [Classic](#tab/classic)

To enable your script to use the build process OAuth token, select the **Agent job** for your pipeline, and then select the check box for **Allow scripts to access the OAuth token** under **Additional options**.

:::image type="content" source="media\allow-script-to-access-oauth-token.png" alt-text="Screenshot of enabling OAuth token access for scripts.":::

Your script can now use the `SYSTEM_ACCESSTOKEN` environment variable to access the [Azure Pipelines REST API](../../integrate/index.md).

The following inline script in a **PowerShell Script** task uses the Azure Pipelines REST API to retrieve the pipeline definition.

```powershell
$url = "$($env:SYSTEM_TEAMFOUNDATIONCOLLECTIONURI)$env:SYSTEM_TEAMPROJECTID/_apis/build/definitions/$($env:SYSTEM_DEFINITIONID)?api-version=5.0"
Write-Host "URL: $url"
$pipeline = Invoke-RestMethod -Uri $url -Headers @{
    Authorization = "Bearer $env:SYSTEM_ACCESSTOKEN"
}
Write-Host "Pipeline = $($pipeline | ConvertTo-Json -Depth 100)"
```

---

## Related content

- [Configure run or build numbers](../process/run-number.md)
- [Azure Pipelines PowerShell task](/azure/devops/pipelines/tasks/reference/powershell-v2)
- [Azure Pipelines REST API](../../integrate/index.md)
