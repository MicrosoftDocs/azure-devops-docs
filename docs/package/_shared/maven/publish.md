Publish Maven packages to a feed in Package Management to share them with your team and your organization.

In order to publish a Maven package, you'll need to have a Maven package to publish on your local box. 
If you don't have one, you can generate one by running the following command:

```no-highlight
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="myFirstApp"
```
<br>
1. [Set up the Maven client with your feed](../../maven/pom-and-settings.md).
<br>
2. Navigate to the directory containing your Maven package's `pom.xml`.  If you've just created an artifact, the `pom.xml` will be in the *myFirstApp* folder.
<br>
3. From the **connect to feed** dialog in VSTS, copy the `<repository>` information. Paste it into your `pom.xml` twice: (See example above)
    * Between the `<repositories>` tags.
    * Between the `<distributionManagement>` tags. 
<br>
4. From the directory with your `pom.xml`, run the command <code>mvn deploy</code>. The Maven package should show up in your feed.

**Sample `pom.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
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
    <!-- Copy this section from the Maven section of the “Connect to Feed” dialog” -->
      <repository>
         <id>mseng-visualstudio.com-zcalvinmaven</id>
         <url>https://mseng.pkgs.visualstudio.com/_packaging/zCalvinMaven2/maven/v1</url>
         <releases>
            <enabled>true</enabled>
         </releases>
         <snapshots>
            <enabled>true</enabled>
         </snapshots>
      </repository>
   </repositories>
   <distributionManagement>
    <!-- Copy this section from the Maven section of the “Connect to Feed” dialog” -->
      <repository>
         <id>mseng-visualstudio.com-zcalvinmaven</id>
         <url>https://mseng.pkgs.visualstudio.com/_packaging/zCalvinMaven2/maven/v1</url>
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

<br>
See the [Maven CLI docs](http://maven.apache.org/plugins/maven-deploy-plugin/) for more publish options.