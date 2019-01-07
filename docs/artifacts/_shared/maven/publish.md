---
ms.topic: include
---

Publish Maven artifacts to a feed in **Azure Artifacts** to share them with your team and organization.

To publish a Maven artifact, you'll need to have a Maven artifact to publish on your local machine. 
If you don't have one, you can generate one by running the following command:

```Command
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
```

1. [Set up the Maven client with your feed](../../maven/pom-and-settings.md).

2. Navigate to the directory containing your Maven artifact's **pom.xml** file.  If you've just created an artifact, the **pom.xml** file will be in the *myFirstApp* folder.

3. From the **Connect to feed** dialog in Azure DevOps Services, copy the `<repository>` information. Paste it into your **pom.xml** file twice (see the sample file above):

   * Between the `<repositories>` tags.
   * Between the `<distributionManagement>` tags. 

4. From the directory containing your **pom.xml** file, run the command `mvn deploy`. The Maven artifact should appear in your feed.

**Sample pom.xml file:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>MyGroup</groupId>
   <artifactId>myFirstApp</artifactId>
   <packaging>jar</packaging>
   <version>1.0-SNAPSHOT</version>
   <name>myFirstApp</name>
   <url>http://maven.apache.org</url>
   <dependencies>
      <dependency>
         <groupId>junit</groupId>
         <artifactId>junit</artifactId>
         <version>3.8.1</version>
         <scope>test</scope>
      </dependency>
   </dependencies>
   <repositories>
    <!-- Copy this section from the Maven section of the "Connect to Feed" dialog -->
      <repository>
         <id>dev.azure.com-mseng-zcalvinmaven</id>
         <url>https://pkgs.dev.azure.com/mseng/_packaging/zCalvinMaven2/maven/v1</url>
         <releases>
            <enabled>true</enabled>
         </releases>
         <snapshots>
            <enabled>true</enabled>
         </snapshots>
      </repository>
   </repositories>
   <distributionManagement>
    <!-- Copy this section from the Maven section of the "Connect to Feed" dialog -->
      <repository>
         <id>dev.azure.com-mseng-zcalvinmaven</id>
         <url>https://pkgs.dev.azure.com/mseng/_packaging/zCalvinMaven2/maven/v1</url>
         <releases>
            <enabled>true</enabled>
         </releases>
         <snapshots>
            <enabled>true</enabled>
         </snapshots>
      </repository>
   </distributionManagement>
</project>
```

> [!IMPORTANT]
> The `<id>` tags in the _settings.xml_ and the _pom.xml_ **must** match.

See the [Maven CLI docs](http://maven.apache.org/plugins/maven-deploy-plugin/) for more publish options.
