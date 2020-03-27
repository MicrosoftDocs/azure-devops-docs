---
ms.topic: include
ms.technology: devops-cicd
ms.author: rabououn
author: ramiMSFT
ms.date: 02/19/2020
---

Install Maven artifacts from your feed by using the Maven client.

The most common way to install a Maven artifact is as a dependency of another artifact.

::: moniker range="azure-devops"

1. Create a Maven artifact by using the following command: 

   ```Command
   mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="mySecondApp"
   ```

2. In **Azure Artifacts**, browse to the artifact that you want to install and copy the contents of the `<dependency>` element.

3. Paste the `<dependency>` element content inside the `<dependencies>` element of your pom.xml file.

4. Run `mvn install` from the directory that contains your pom.xml file.

See the [Maven CLI docs](https://maven.apache.org/plugins/maven-install-plugin/usage.html) for more installation options.

::: moniker-end

::: moniker range="tfs-2018"

1. Create a Maven artifact by using the following command: 

   ```Command
   mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="mySecondApp"
   ```

2. From the **Connect to feed** dialog box in TFS, copy the `<repository>` information. Paste it into your pom.xml file twice (see the preceding sample file):

   * Between the `<repositories>` tags
   * Between the `<distributionManagement>` tags 

3. From the **Packages** page, browse to the artifact that you want to install and copy the contents of the `<dependency>` element.

4. Paste the `<dependency>` element content inside the `<dependencies>` element of your pom.xml file.

5. Run `mvn install` from the directory that contains your pom.xml file.

See the [Maven CLI docs](https://maven.apache.org/plugins/maven-install-plugin/usage.html) for more installation options.

::: moniker-end
