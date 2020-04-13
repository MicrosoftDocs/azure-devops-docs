---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 02/13/2020
---

Notice that variables are also made available to scripts through environment variables. The syntax for using these environment variables depends on the scripting language.

The name is upper-cased, and the `.` is replaced with the `_`. This is automatically inserted into the process environment. Here are some examples:

- Batch script: `%VARIABLE_NAME%`
- PowerShell script: `$env:VARIABLE_NAME`
- Bash script: `$VARIABLE_NAME`

> [!IMPORTANT]
> Predefined variables that contain file paths are translated to the appropriate styling (Windows style C:\foo\ versus Unix style /foo/) based on agent host type and shell type. If you are running bash script tasks on Windows, you should use the environment variable method for accessing these variables rather than the pipeline variable method to ensure you have the correct file path styling. 
