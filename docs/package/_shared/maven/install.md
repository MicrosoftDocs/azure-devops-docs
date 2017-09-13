Install Maven packages from your feed using the Maven client.

The most common way to install a Maven package is as a dependency of another package.

1. Create a Maven package using the following command:
```no-highlight
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="mySecondApp"
```

2. From the **connect to feed** dialog in VSTS, copy the `<repository>` information. Paste it into your `pom.xml` twice: (See example below)
    * Between the `<repositories>` tags.
    * Between the `<distributionManagement>` tags. 
<br>
3. In VSTS, go to the package you want to install, and copy the `<dependency>` XML.
4. Paste the `<dependency>` information inside the `<dependencies>` tag of your `POM.xml`.
5. Run `mvn install` from the directory containing your `POM.xml`.

See the [Maven CLI docs](http://maven.apache.org/plugins/maven-install-plugin/usage.html) for more install options.