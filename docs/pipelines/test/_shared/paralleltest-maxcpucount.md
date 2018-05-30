---
ms.topic: include
---

When parallel test execution is enabled, the value of **MaxCpuCount** is set to 0 (zero) to use all the available free cores.
The value is persisted with the solution and is merged with any associated [.runsettings file](https://docs.microsoft.com/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file)
just before a run begins. The only way to adjust the value of **MaxCpuCount** is by [explicitly adding a **.runsettings** file](#runsettings).
