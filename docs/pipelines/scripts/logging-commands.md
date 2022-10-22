---
title: Logging commands
description: How scripts can request work from the agent
ms.topic: reference
ms.assetid: 3ec13da9-e7cf-4895-b5b8-735c1883cc7b
ms.date: 10/13/2022
ms.custom: contperf-fy21q3
monikerRange: '<= azure-devops'
---

# Logging commands

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Logging commands are how [tasks](../process/tasks.md) and scripts communicate with the agent.
They cover actions like creating new [variables](../process/variables.md), marking a step as failed, and uploading [artifacts](../artifacts/pipeline-artifacts.md). Logging commands are useful when you're troubleshooting a pipeline. 



|Type  |Commands  |
|---------|---------|
|Task commands     |    [LogIssue](#logissue-log-an-error-or-warning), [SetProgress](#setprogress-show-percentage-completed),  [LogDetail](#logdetail-create-or-update-a-timeline-record-for-a-task), [SetVariable](#setvariable-initialize-or-modify-the-value-of-a-variable), [SetEndpoint](#setendpoint-modify-a-service-connection-field), [AddAttachment](#addattachment-attach-a-file-to-the-build), [UploadSummary](#uploadsummary-add-some-markdown-content-to-the-build-summary), [UploadFile](#uploadfile-upload-a-file-that-can-be-downloaded-with-task-logs), [PrependPath](#prependpath-prepend-a-path-to-the--path-environment-variable) |
|Artifact commands     |   [Associate](#associate-initialize-an-artifact), [Upload](#upload-upload-an-artifact)      |
|Build commands     |  [UploadLog](#uploadlog-upload-a-log), [UpdateBuildNumber](#updatebuildnumber-override-the-automatically-generated-build-number), [AddBuildTag](#addbuildtag-add-a-tag-to-the-build) |
|Release commands     |    [UpdateReleaseName](#updatereleasename-rename-current-release)     |


## Logging command format 

The general format for a logging command is:

```
##vso[area.action property1=value;property2=value;...]message
```

There are also a few formatting commands with a slightly different syntax:

```
##[command]message
```

To invoke a logging command, echo the command via standard output.

# [Bash](#tab/bash)

```bash
#!/bin/bash
echo "##vso[task.setvariable variable=testvar;]testvalue"
```

# [PowerShell](#tab/powershell)

```ps
Write-Host "##vso[task.setvariable variable=testvar;]testvalue"
```

---

File paths should be given as absolute paths: rooted to a drive on Windows, or beginning with `/` on Linux and macOS.

> [!NOTE]
> Please note that you can't use the `set -x` command before a logging command when you are using Linux or macOS. See [troubleshooting](../troubleshooting/troubleshooting.md#variables-having--single-quote-appended), to learn how to disable `set -x` temporarily for Bash.

## Formatting commands

> [!NOTE]
> Use UTF-8 encoding for logging commands. 

These commands are messages to the log formatter in Azure Pipelines.
They mark specific log lines as errors, warnings, collapsible sections, and so on.

The formatting commands are:

```
##[group]Beginning of a group
##[warning]Warning message
##[error]Error message
##[section]Start of a section
##[debug]Debug text
##[command]Command-line being run
##[endgroup]
```

You can use the formatting commands in a bash or PowerShell task. 

# [Bash](#tab/bash)

```yaml
steps:
- bash: |
    echo "##[group]Beginning of a group"
    echo "##[warning]Warning message"
    echo "##[error]Error message"
    echo "##[section]Start of a section"
    echo "##[debug]Debug text"
    echo "##[command]Command-line being run"
    echo "##[endgroup]"
```
# [PowerShell](#tab/powershell)

```yaml
steps:
- powershell: |
    Write-Host "##[group]Beginning of a group"
    Write-Host "##[warning]Warning message"
    Write-Host "##[error]Error message"
    Write-Host "##[section]Start of a section"
    Write-Host "##[debug]Debug text"
    Write-Host "##[command]Command-line being run"
    Write-Host "##[endgroup]"
```
---

Those commands will render in the logs like this:

![Screenshot of logs with custom formatting options](media/log-formatting.png)
 
That block of commands can also be collapsed, and looks like this:

![Screenshot of collapsed section of logs](media/log-formatting-collapsed.png)

## Task commands

### LogIssue: Log an error or warning

`##vso[task.logissue]error/warning message`

#### Usage

Log an error or warning message in the timeline record of the current task.

#### Properties

* `type` = `error` or `warning` (Required)
* `sourcepath` = source file location
* `linenumber` = line number
* `columnnumber` = column number
* `code` = error or warning code

#### Example: Log an error

# [Bash](#tab/bash)

```bash
#!/bin/bash
echo "##vso[task.logissue type=error]Something went very wrong."
exit 1
```

# [PowerShell](#tab/powershell)

```ps
Write-Host "##vso[task.logissue type=error]Something went very wrong."
exit 1
```

---

> [!TIP]
> 
> `exit 1` is optional, but is often a command you'll issue soon after an error is logged. If you select **Control Options: Continue on error**, then the `exit 1` will result in a partially successful build instead of a failed build.

#### Example: Log a warning about a specific place in a file

# [Bash](#tab/bash)

```bash
#!/bin/bash
echo "##vso[task.logissue type=warning;sourcepath=consoleapp/main.cs;linenumber=1;columnnumber=1;code=100;]Found something that could be a problem."
```

# [PowerShell](#tab/powershell)

```ps
Write-Host "##vso[task.logissue type=warning;sourcepath=consoleapp/main.cs;linenumber=1;columnnumber=1;code=100;]Found something that could be a problem."
```

---

### SetProgress: Show percentage completed

`##vso[task.setprogress]current operation`

#### Usage

Set progress and current operation for the current task.

#### Properties

* `value` = percentage of completion

#### Example

# [Bash](#tab/bash)

```bash
echo "Begin a lengthy process..."
for i in {0..100..10}
do
   sleep 1
   echo "##vso[task.setprogress value=$i;]Sample Progress Indicator"
done
echo "Lengthy process is complete."
```

# [PowerShell](#tab/powershell)

```ps
Write-Host "Begin a lengthy process..."
$i=0
While ($i -le 100)
{
   Start-Sleep 1
   Write-Host "##vso[task.setprogress value=$i;]Sample Progress Indicator"
   $i += 10
}
Write-Host "Lengthy process is complete."
```

---

To see how it looks, save and queue the build, and then watch the build run. Observe that a progress indicator changes when the task runs this script.

### Complete: Finish timeline

`##vso[task.complete]current operation`

#### Usage

Finish the timeline record for the current task, set task result and current operation. When result not provided, set result to succeeded.

#### Properties

* `result` = 
  - `Succeeded` The task succeeded.
  - `SucceededWithIssues` The task ran into problems. The build will be completed as partially succeeded at best.
  - `Failed` The build will be completed as failed. (If the **Control Options: Continue on error** option is selected, the build will be completed as partially succeeded at best.)
   
#### Example

```
##vso[task.complete result=Succeeded;]DONE
```

### LogDetail: Create or update a timeline record for a task

`##vso[task.logdetail]current operation`

#### Usage

Creates and updates timeline records.
This is primarily used internally by Azure Pipelines to report about steps, jobs, and stages.
While customers can add entries to the timeline, they won't typically be shown in the UI.

The first time we see `##vso[task.detail]` during a step, we create a "detail timeline" record for the step. We can create and update nested timeline records base on `id` and `parentid`.

Task authors must remember which GUID they used for each timeline record.
The logging system will keep track of the GUID for each timeline record, so any new GUID will result a new timeline record.

#### Properties

* `id` = Timeline record GUID (Required)
* `parentid` = Parent timeline record GUID 
* `type` = Record type (Required for first time, can't overwrite)
* `name` = Record name (Required for first time, can't overwrite)
* `order` = order of timeline record (Required for first time, can't overwrite)
* `starttime` = `Datetime`
* `finishtime` = `Datetime`
* `progress` = percentage of completion 
* `state` = `Unknown` | `Initialized` | `InProgress` | `Completed` 
* `result` = `Succeeded` | `SucceededWithIssues` | `Failed`

#### Examples

Create new root timeline record: 

```
##vso[task.logdetail id=new guid;name=project1;type=build;order=1]create new timeline record
```

Create new nested timeline record: 

```
##vso[task.logdetail id=new guid;parentid=exist timeline record guid;name=project1;type=build;order=1]create new nested timeline record
```

Update exist timeline record: 

```
##vso[task.logdetail id=existing timeline record guid;progress=15;state=InProgress;]update timeline record
```

### SetVariable: Initialize or modify the value of a variable

`##vso[task.setvariable]value`

#### Usage

Sets a variable in the variable service of taskcontext. The first task can set a variable, and following tasks are able to use the variable. The variable is exposed to the following tasks as an environment variable.

When `issecret` is set to `true`, the value of the variable will be saved as secret and masked out from log. Secret variables aren't passed into tasks as environment variables and must instead be passed as inputs.

When `isoutput` is set to `true` the syntax to reference the set variable varies based on whether you are accessing that variable in the same job, a future job, or a future stage. Additionally, if `isoutput` is set to `false` the syntax for using that variable within the same job is distinct. See [levels of output variables](../process/set-variables-scripts.md#levels-of-output-variables) to determine the appropriate syntax for each use case.

See [set variables in scripts](../process/set-variables-scripts.md) and [define variables](../process/variables.md#set-variables-in-scripts) for more details.

#### Properties

::: moniker range=">= azure-devops-2019"
* `variable` = variable name (Required)
* `issecret` = boolean (Optional, defaults to false)
* `isoutput` = boolean (Optional, defaults to false)
* `isreadonly` = boolean (Optional, defaults to false)
::: moniker-end
::: moniker range="< azure-devops-2019"
* `variable` = variable name (Required)
* `issecret` = boolean (Optional, defaults to false)
* `isreadonly` = boolean (Optional, defaults to false)
::: moniker-end   

#### Examples

# [Bash](#tab/bash)

Set the variables:

::: moniker range=">= azure-devops-2019"
```yaml
- bash: |
    echo "##vso[task.setvariable variable=sauce;]crushed tomatoes"
    echo "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
    echo "##vso[task.setvariable variable=outputSauce;isoutput=true]canned goods"
  name: SetVars
```
::: moniker-end
::: moniker range="< azure-devops-2019"
```yaml
- bash: |
    echo "##vso[task.setvariable variable=sauce;]crushed tomatoes"
    echo "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
  name: SetVars
```
::: moniker-end
Read the variables:

::: moniker range=">= azure-devops-2019"
```yaml
- bash: |
    echo "Non-secrets automatically mapped in, sauce is $SAUCE"
    echo "Secrets are not automatically mapped in, secretSauce is $SECRETSAUCE"
    echo "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
```
::: moniker-end
::: moniker range="< azure-devops-2019"
```yaml
- bash: |
    echo "Non-secrets automatically mapped in, sauce is $SAUCE"
    echo "Secrets are not automatically mapped in, secretSauce is $SECRETSAUCE"
    echo "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
```
::: moniker-end

# [PowerShell](#tab/powershell)

Set the variables:

::: moniker range=">= azure-devops-2019"
```yaml
- pwsh: |
    Write-Host "##vso[task.setvariable variable=sauce;]crushed tomatoes"
    Write-Host "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
    Write-Host "##vso[task.setvariable variable=outputSauce;isoutput=true]canned goods"
  name: SetVars
```
::: moniker-end
::: moniker range="< azure-devops-2019"
```yaml
- pwsh: |
    Write-Host "##vso[task.setvariable variable=sauce;]crushed tomatoes"
    Write-Host "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
  name: SetVars
```
::: moniker-end

Read the variables:

::: moniker range=">= azure-devops-2019"
```yaml
- pwsh: |
    Write-Host "Non-secrets automatically mapped in, sauce is $env:SAUCE"
    Write-Host "Secrets are not automatically mapped in, secretSauce is $env:SECRETSAUCE"
    Write-Host "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
    Write-Host "Future jobs can also see $env:SETVARS_OUTPUTSAUCE"
    write-Host "Future jobs can also see $(SetVars.outputSauce)"
```
::: moniker-end
::: moniker range="< azure-devops-2019"
```yaml
- pwsh: |
    Write-Host "Non-secrets automatically mapped in, sauce is $env:SAUCE"
    Write-Host "Secrets are not automatically mapped in, secretSauce is $env:SECRETSAUCE"
    Write-Host "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
```
::: moniker-end

---

Console output:

::: moniker range=">= azure-devops-2019"
```
Non-secrets automatically mapped in, sauce is crushed tomatoes
Secrets are not automatically mapped in, secretSauce is 
You can use macro replacement to get secrets, and they'll be masked in the log: ***
Future jobs can also see canned goods
Future jobs can also see canned goods
```
::: moniker-end
::: moniker range="< azure-devops-2019"
```
Non-secrets automatically mapped in, sauce is crushed tomatoes
Secrets are not automatically mapped in, secretSauce is 
You can use macro replacement to get secrets, and they'll be masked in the log: ***
```
::: moniker-end

### SetEndpoint: Modify a service connection field

`##vso[task.setendpoint]value`

#### Usage

Set a service connection field with given value.
Value updated will be retained in the endpoint for the subsequent tasks that execute within the same job.

#### Properties

* `id` = service connection ID (Required)
* `field` = field type, one of `authParameter`, `dataParameter`, or `url` (Required)
* `key` = key (Required, unless `field` = `url`)

#### Examples

```
##vso[task.setendpoint id=000-0000-0000;field=authParameter;key=AccessToken]testvalue
##vso[task.setendpoint id=000-0000-0000;field=dataParameter;key=userVariable]testvalue
##vso[task.setendpoint id=000-0000-0000;field=url]https://example.com/service
```

### AddAttachment: Attach a file to the build

`##vso[task.addattachment]value`

#### Usage

Upload and attach attachment to current timeline record. These files aren't available for download with logs. These can only be referred to by extensions using the type or name values.

#### Properties

* `type` = attachment type (Required)
* `name` = attachment name (Required)
  
#### Example

```
##vso[task.addattachment type=myattachmenttype;name=myattachmentname;]c:\myattachment.txt
```

### UploadSummary: Add some Markdown content to the build summary

`##vso[task.uploadsummary]local file path`

#### Usage

Upload and attach summary Markdown to current timeline record. This summary shall be added to the build/release summary and not available for download with logs. The summary should be in UTF-8 or ASCII format. The summary will appear on an Extensions tab.   

#### Examples

```
##vso[task.uploadsummary]c:\testsummary.md
```

It's a short hand form for the command

```
##vso[task.addattachment type=Distributedtask.Core.Summary;name=testsummaryname;]c:\testsummary.md
```

### UploadFile: Upload a file that can be downloaded with task logs

`##vso[task.uploadfile]local file path`

#### Usage

Upload user interested file as additional log information to the current timeline record. The file shall be available for download along with task logs.

#### Example

```
##vso[task.uploadfile]c:\additionalfile.log
```

### PrependPath: Prepend a path to the  PATH environment variable

`##vso[task.prependpath]local file path`

#### Usage

Update the PATH environment variable by prepending to the PATH.
The updated environment variable will be reflected in subsequent tasks.

#### Example

```
##vso[task.prependpath]c:\my\directory\path
```

## Artifact commands

### Associate: Initialize an artifact

`##vso[artifact.associate]artifact location`
                
#### Usage

Create a link to an existing Artifact. Artifact location must be a file container path, VC path or UNC share path.

#### Properties

* `artifactname` = artifact name (Required)
*  `type` = artifact type (Required) `container` | `filepath` | `versioncontrol` | `gitref` | `tfvclabel`

#### Examples

- **container**
    ```
    ##vso[artifact.associate type=container;artifactname=MyServerDrop]#/1/build
    ```

- **filepath**
    ```
    ##vso[artifact.associate type=filepath;artifactname=MyFileShareDrop]\\MyShare\MyDropLocation
    ```

- **versioncontrol**
    ```
    ##vso[artifact.associate type=versioncontrol;artifactname=MyTfvcPath]$/MyTeamProj/MyFolder
    ```

- **gitref**
    ```
    ##vso[artifact.associate type=gitref;artifactname=MyTag]refs/tags/MyGitTag
    ```

- **tfvclabel**
    ```
    ##vso[artifact.associate type=tfvclabel;artifactname=MyTag]MyTfvcLabel
    ```

- **Custom Artifact**
    ```
    ##vso[artifact.associate artifactname=myDrop;artifacttype=myartifacttype]https://downloads.visualstudio.com/foo/bar/package.zip
    ```

### Upload: Upload an artifact

`##vso[artifact.upload]local file path`

#### Usage

Upload a local file into a file container folder, and optionally publish an artifact as `artifactname`.

#### Properties

* `containerfolder` = folder that the file will upload to, folder will be created if needed.
* `artifactname` = artifact name. (Required)

#### Example

```
##vso[artifact.upload containerfolder=testresult;artifactname=uploadedresult]c:\testresult.trx
```

> [!NOTE]
> The difference between Artifact.associate and Artifact.upload is that the first can be used to create a link to an existing artifact, while the latter can be used to upload/publish a new Artifact.

## Build commands

### UploadLog: Upload a log

`##vso[build.uploadlog]local file path`

#### Usage

Upload user interested log to build's container "`logs\tool`" folder.

#### Example

```
##vso[build.uploadlog]c:\msbuild.log
```
        
### UpdateBuildNumber: Override the automatically generated build number

`##vso[build.updatebuildnumber]build number`

#### Usage

You can automatically generate a build number from tokens you specify in the [pipeline options](../build/options.md). However, if you want to use your own logic to set the build number, then you can use this logging command.

#### Example

```
##vso[build.updatebuildnumber]my-new-build-number
```

### AddBuildTag: Add a tag to the build

`##vso[build.addbuildtag]build tag`


#### Usage

Add a tag for current build.

#### Example

```
##vso[build.addbuildtag]Tag_UnitTestPassed
```


## Release commands

### UpdateReleaseName: Rename current release

`##vso[release.updatereleasename]release name`

#### Usage

Update the release name for the running release.

> [!NOTE]
> Supported in Azure DevOps and Azure DevOps Server beginning in version 2020.

#### Example

```
##vso[release.updatereleasename]my-new-release-name
```
