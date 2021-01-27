---
author: ninallam
ms.prod: devops
ms.technology: devops-cicd-tasks
ms.topic: include
ms.date: 12/10/2019
ms.manager: mijacobs
ms.author: ninallam
---

### Error: No package found with specified pattern

Check if the package mentioned in the task is published as an artifact in the build or a previous stage and downloaded in the current job.

### Error: Publish using zip deploy option is not supported for msBuild package type

Web packages created via the MSBuild task (with default arguments) have a nested folder structure that can be deployed correctly only by Web Deploy. The publish-to-zip deployment option can't be used to deploy those packages. To convert the packaging structure, take these steps: 

1. In the Build solution task, change the **MSBuild Arguments** to
`/p:DeployOnBuild=true /p:DeployDefaultTarget=WebPublish /p:WebPublishMethod=FileSystem /p:DeleteExistingFiles=True /p:publishUrl="$(System.DefaultWorkingDirectory)\\WebAppContent"`:

   :::image type="content" source="../media/azure-rm-web-app-deployment-03.png" alt-text="Screenshot that shows the Build solution values.":::

1. Add an Archive task and change the values as follows:
   1. Change **Root folder or file to archive** to
    `$(System.DefaultWorkingDirectory)\\WebAppContent`.
    
   1. Clear the **Prepend root folder name to archive paths** check box:
   
      :::image type="content" source="../media/azure-rm-web-app-deployment-04.png" alt-text="Screenshot that shows the Archive values.":::
       
