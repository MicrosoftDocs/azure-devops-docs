---
ms.topic: include
---

Install Maven artifacts from your feed using the Maven client.

The most common way to install a Maven artifact is as a dependency of another artifact.

1. Create a Maven artifact using the following command: 

```Command
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="mySecondApp"
```

2. From the **Connect to feed** dialog in VSTS, copy the `<repository>` information. Paste it into your **pom.xml** file twice (see the sample file above):

   * Between the `<repositories>` tags.
   * Between the `<distributionManagement>` tags. 

3. In VSTS Package Management, browse to the artifact you want to install and copy the contents of the `<dependency>` element.

4. Paste the `<dependency>` element content inside the `<dependencies>` element of your **pom.xml** file.

5. Run `mvn install` from the directory containing your **pom.xml** file.

See the [Maven CLI docs](http://maven.apache.org/plugins/maven-install-plugin/usage.html) for more install options.
