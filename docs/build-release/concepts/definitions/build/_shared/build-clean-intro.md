---
ms.topic: include
---

You can perform different forms of cleaning the working directory of your private agent before a build runs.

In general, for faster performance of your private agents, don't clean the repo. In this case, to get the best performance, make sure you're also building incrementally. For example, if you're building Visual Studio projects, make sure to clear the **Clean** check box of the Visual Studio Build or MSBuild task.

If you do need to clean the repo (for example to avoid problems caused by residual files from a previous build), your options are below.
