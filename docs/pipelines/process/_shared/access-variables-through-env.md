---
ms.topic: include
---

Notice that variables are also made available to scripts through environment variables. The syntax for using these environment variables depends on the scripting language.
Name is upper-cased, `.` replaced with `_`, and automatically inserted into the process environment. Here are some examples:

- **Batch script:** `%VARIABLE_NAME%`
- **PowerShell script:** `$env:VARIABLE_NAME`
- **Bash script:** `$VARIABLE_NAME`

**Important:** Predefined variables that contain file paths are translated to the appropriate styling (Windows style C:\foo\ vs Unix style /foo/) based on agent host type and shell type. If you are running bash script tasks on Windows, you should use the environment variable method for accessing these variables rather than the pipeline variable method to ensure you have the correct file path styling. 
