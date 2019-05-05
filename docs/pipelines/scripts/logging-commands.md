---
title: Logging commands
description: How scripts can request work from the agent
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 3ec13da9-e7cf-4895-b5b8-735c1883cc7b
ms.manager: jillfra
ms.author: alewis
ms.date: 04/10/2019
---

# Logging commands

## Overview

Logging commands are how [tasks](../process/tasks.md) and scripts communicate with the agent.
They cover actions like creating new [variables](../process/variables.md), marking a step as failed, and uploading [artifacts](../artifacts/pipeline-artifacts.md).

The general format for a logging command is:

    ##vso[area.action property1=value;property2=value;...]message

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
do
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

To see how it looks, save and queue the build, and then watch the build run. Observer that a progress indicator changes when the task runs this script.

### Complete: Finish timeline

`##vso[task.complete]current operation`

#### Usage

Finish the timeline record for the current task, set task result and current operation. When result not provided, set result to succeeded.

#### Properties

* `result` = 
 - `Succeeded` The task succeeded.
 - `SucceededWithIssues` The task ran into problems. The build will be completed as partially succeeded at best.
 - `Failed` The build will be completed as failed. (If the **Control Options: Continue on error** option is selected, the build will be completed as partially succeeded at best.)
 - `Cancelled` Cancels the build.
 - `Skipped` Logs the task outcome as skipped.
   
#### Example

```
##vso[task.complete result=Succeeded;]DONE
```

### LogDetail: Create and update a timeline record for a task

`##vso[task.logdetail]current operation`

#### Usage

Create and update detail timeline records.

The first time we saw `##vso[task.detail]` for each task, we will create a detail timeline for the task. We will create and update nested timeline record base on id and `parentid`.

Task author need to remember which GUID they used for each timeline record.
The logging system will keep tracking the GUID for each timeline records that been created, so any new GUID will result a new timeline record.

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
* `result` = `Succeeded` | `SucceededWithIssues` | `Failed` | `Cancelled` | `Skipped`

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
##vso[task.logdetail id=exist timeline record guid;progress=15;state=InProgress;]update timeline record
```

### SetVariable: Initialize or modify the value of a variable

`##vso[task.setvariable]value`

#### Usage

Sets a variable in the variable service of taskcontext. The first task can set a variable, and following tasks are able to use the variable. The variable is exposed to the following tasks as an environment variable.

When `issecret` is set to `true`, the value of the variable will be saved as secret and masked out from log. Secret variables are not passed into tasks as environment variables and must instead be passed as inputs.

#### Properties

* `variable` = variable name (Required)
* `issecret` = `true` (Optional)
   
#### Examples

# [Bash](#tab/bash)

Set the variables:

```bash
echo "##vso[task.setvariable variable=sauce;]crushed tomatoes"
echo "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
```

Read the variables:

```bash
echo "Non-secrets automatically mapped in, sauce is $SAUCE"
echo "Secrets are not automatically mapped in, secretSauce is $SECRETSAUCE"
echo "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
```

# [PowerShell](#tab/powershell)

Set the variables:

```ps
Write-Host "##vso[task.setvariable variable=sauce;]crushed tomatoes"
Write-Host "##vso[task.setvariable variable=secretSauce;issecret=true]crushed tomatoes with garlic"
```

Read the variables:

```ps
Write-Host "Non-secrets automatically mapped in, sauce is $env:SAUCE"
Write-Host "Secrets are not automatically mapped in, secretSauce is $env:SECRETSAUCE"
Write-Host "You can use macro replacement to get secrets, and they'll be masked in the log: $(secretSauce)"
```

---

Console output:

```
Non-secrets automatically mapped in, sauce is crushed tomatoes
Secrets are not automatically mapped in, secretSauce is
You can use macro replacement to get secrets, and they'll be masked in the log: ***
```

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

Upload and attach attachment to current timeline record. These files are not available for download with logs. These can only be referred to by extensions using the type or name values.

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

Upload and attach summary markdown to current timeline record. This summary shall be added to the build/release summary and not available for download with logs.

#### Examples

```
##vso[task.uploadsummary]c:\testsummary.md
```

It is a short hand form for the command

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

### PrependPath: Upload a file that can be downloaded with task logs

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

Create an artifact link. Artifact location must be a file container path, VC path or UNC share path.

#### Properties

* `artifactname` = artifact name (Required)
*  `type` = `container` | `filepath` | `versioncontrol` | `gitref` | `tfvclabel`, artifact type (Required)

#### Examples

```
##vso[artifact.associate type=container;artifactname=MyServerDrop]#/1/build
```

```
##vso[artifact.associate type=filepath;artifactname=MyFileShareDrop]\\MyShare\MyDropLocation
```

```
##vso[artifact.associate type=versioncontrol;artifactname=MyTfvcPath]$/MyTeamProj/MyFolder
```

```
##vso[artifact.associate type=gitref;artifactname=MyTag]refs/tags/MyGitTag
```

```
##vso[artifact.associate type=tfvclabel;artifactname=MyTag]MyTfvcLabel
```

### Upload: Upload an artifact

`##vso[artifact.upload]local file path`

#### Usage

Upload a local file into a file container folder, and optionally publish an artifact as `artifactname`.

#### Properties

* `containerfolder` = folder that the file will upload to, folder will be created if needed. (Required)
* `artifactname` = artifact name

#### Example

```
##vso[artifact.upload containerfolder=testresult;artifactname=uploadedresult;]c:\testresult.trx
```

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
Note: this is not supported in Azure DevOps Server or TFS.

#### Example

```
##vso[release.updatereleasename]my-new-release-name
```
