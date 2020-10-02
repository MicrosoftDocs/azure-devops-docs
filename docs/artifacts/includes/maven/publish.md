---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 07/22/2020
---

Publish Maven artifacts to a feed in **Azure Artifacts** to share them with your team and organization.

To publish a Maven artifact, you'll need to have a Maven artifact to publish on your local machine. 
If you don't have one, you can generate one by running the following command:

```Command
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
```

1. [Set up the Maven client with your feed](../../maven/pom-and-settings.md).

2. Navigate to the directory containing your Maven artifact's **pom.xml** file.  If you've just created an artifact, the **pom.xml** file will be in the _myFirstApp_ folder.

3. From the directory containing your **pom.xml** file, run the following commands to build and deploy your Maven artifact:

    - **Build your package**:
        ```Command
        mvn build
        ``` 
    - **Publish your package**:
    
        ```Command
        mvn deploy
        ``` 

Your Maven artifact should appear in your feed now. See the [Apache Maven Deploy Plugin](https://maven.apache.org/plugins/maven-deploy-plugin/) to learn more about Maven deployment.

> [!TIP]
> If you want to publish a 3rd party assembly to a Maven feed, you can use the [deploy:deploy-file Mojo](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html). This mojo is used primarily to publish artifacts that were not built by Maven and you can use it with or without a POM file.

```Command
mvn deploy:deploy-file -Dpackaging="jar" -DrepositoryId="MyFeedName" -Durl="MyFeedURL" -DgroupId="MyGroup" -DartifactId="myFirstApp" -Dversion="jarFileVersion" -Dfile="jarFileLocalPath"
```

> [!IMPORTANT]
> Maven snapshot artifacts are not currently supported in upstream sources.
