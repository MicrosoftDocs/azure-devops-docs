---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/23/2021
---

To publish a Maven artifact to your feed, follow these steps: 

1. If you don't have a Maven package, you can create one by running the following command:

    ```Command
    mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
    ```
    
    If you get the following error *You must specify a valid lifecycle phase or a goal (..)* after executing the previous command, follow these steps to add a goal in your run configuration:
    
    Right click on your project, select *Run as* then *Maven Build*. Enter **package** in the *Goals* text box, then select *Run*.


1. [Set up the Maven client with your feed](../../maven/pom-and-settings.md).

1. Navigate to the directory of your *pom.xml* file. By default, the *pom.xml* file is at root path of the project.

1. Run the following commands to build and deploy your Maven artifact:
    - **Build your package**: `mvn build`
    - **Deploy your package**: `mvn deploy` 

If you want to publish a third-party artifact, you can use the [deploy:deploy-file](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) mojo. This can be used with or without a POM file to deploy your packages.

```Command
mvn deploy:deploy-file -Dpackaging="jar" -DrepositoryId="MyFeedName" -Durl="MyFeedURL" -DgroupId="MyGroup" -DartifactId="myFirstApp" -Dversion="jarFileVersion" -Dfile="jarFileLocalPath"
```

> [!NOTE]
> Maven snapshots are not supported in upstream sources.
