---
ms.topic: include
ms.prod: devops
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

Publish Maven artifacts to a feed in **Azure Artifacts** to share them with your team and organization.

To publish a Maven artifact, you'll need to have a Maven artifact to publish on your local machine. 
If you don't have one, you can generate one by running the following command:

```Command
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
```

1. [Set up the Maven client with your feed](../../maven/pom-and-settings.md).

2. Navigate to the directory containing your Maven artifact's **pom.xml** file.  If you've just created an artifact, the **pom.xml** file will be in the *myFirstApp* folder.

3. From the directory containing your **pom.xml** file, run the command, `mvn build` and `mvn deploy`. The Maven artifact should appear in your feed.

See the [Maven CLI docs](https://maven.apache.org/plugins/maven-deploy-plugin/) for more publish options.
