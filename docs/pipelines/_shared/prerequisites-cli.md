---
ms.topic: include
---

* Azure CLI version 2.0.49 or newer.

  * To install, see [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).

  * To check the version from the command prompt:

  ```
az -version
```

* The Azure DevOps extension.

  * To install from the command prompt:

  ```
az extension add --name azure-devops
```
  * To confirm installation from the command prompt:

  ```
az extension show --name azure-devops
```

* Make sure your Azure DevOps defaults include the organization and project from the command prompt:
 
  ```
az devops configure --defaults organization=https://dev.azure.com/your-organization project=your-project
```
