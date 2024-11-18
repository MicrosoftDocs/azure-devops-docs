---
ms.topic: include
ms.service: azure-devops-artifacts
ms.author: rabououn
author: ramiMSFT
ms.date: 05/06/2022
---

1. If you don't have a Maven package yet, you can create one by running the following command:

    ```Command
    mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
    ```
    
    If you get the following error: *You must specify a valid lifecycle phase or a goal (..)*, follow the steps below to add a goal to your configuration:
    
    Right click on your project, select **Run as** > **Maven Build**. Enter **package** in the **Goals** text box, and then select **Run**.

1. Navigate to the path of your *pom.xml* file and run the following commands to build and deploy your Maven artifact:

    ```command
    mvn build
    mvn deploy
    ```

If you get the following error: *Unknown lifecycle phase "build"(...)* when you run `mvn build`, you can use Eclipse IDE to build your maven project as follows:

1. Right click on your project.

1. Select **Run as**, and then select **Maven Build...**.

1. Write *package* in the **Goals** text box.

1. Select **Run**.

    :::image type="content" source="../../maven/media/build-eclipse.png" alt-text="A screenshot showing how to build a project using Eclipse.":::

If you want to publish a third-party artifact, you can use the [deploy:deploy-file](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) mojo. This can be used with or without a POM file to deploy your packages.

```Command
mvn deploy:deploy-file -Dpackaging="jar" -DrepositoryId="MyFeedName" -Durl="MyFeedURL" -DgroupId="MyGroup" -DartifactId="myFirstApp" -Dversion="jarFileVersion" -Dfile="jarFileLocalPath"
```
