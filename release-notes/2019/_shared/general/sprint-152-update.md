---
ms.topic: include
---

### Manage extensions from the command line

You can now manage extensions from the command line using the `az devops extension` commands. By using the commands, you can create scripts that can be run for all your organizations to ensure the required extensions are available.

For more details on the commands and its syntax, see the documentation [here](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/extension?view=azure-cli-latest).

### Invoke REST APIs from the command line

We’ve added the `az devops invoke` command to let you call any Azure DevOps REST APIs form the command line. 

For example, you may have a command line script to handle automation of a particular task, but need to call an additional Azure DevOps REST API call as well. With the invoke command you can call the REST API from the command line and use the authorization available from the CLI to manage authorization and include the REST API as part of your script. 

For more details on the command and its syntax, see the documentation [here](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops?view=azure-cli-latest#ext-azure-devops-az-devops-invoke).

### Manage users from the command line

As an administrator, you may need to have a standard process to manage users. Currently, you have to repeat the same steps to add a new user and add the user to a license. This process can become tedious and error prone. Now you can use Azure DevOps CLI to create a standard script to enlist, add, and update a user and repeat the steps by just running this script. 

For more details on the commands and the syntax, see the documentation [here](https://docs.microsoft.com/en-us/cli/azure/ext/azure-devops/devops/user?view=azure-cli-latest).
