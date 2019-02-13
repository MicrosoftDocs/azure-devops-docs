---
ms.topic: include
---

Notice that variables are also made available to scripts through environment variables. The syntax for using these environment variables depends on the scripting language.
Name is upper-cased, `.` replaced with `_`, and automatically inserted into the process environment. Here are some examples:

- **Batch script:** `%VARIABLE_NAME%`
- **PowerShell script:** `$env:VARIABLE_NAME`
- **Bash script:** `$VARIABLE_NAME`