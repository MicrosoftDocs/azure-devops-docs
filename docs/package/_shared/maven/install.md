Install Maven packages from your feed using the Maven client.

The most common way to install a Maven package is as a dependency of another package.

1. Create a Maven package using the following command: 

```Command
mvn -B archetype:generate -DarchetypeGroupId="org.apache.maven.archetypes" -DgroupId="MyGroup" -DartifactId="mySecondApp"
```

2. From the **Connect to feed** dialog in VSTS, copy the `<repository>` information. Paste it into your **pom.xml** file twice: (See sample file above)

   * Between the `<repositories>` tags.
   * Between the `<distributionManagement>` tags. 

3. In VSTS, go to the package you want to install and copy the contewnts of the `<dependency>` element.

4. Paste the `<dependency>` element content inside the `<dependencies>` element of your **pom.xml** file.

5. Run `mvn install` from the directory containing your **pom.xml** file.

See the [Maven CLI docs](http://maven.apache.org/plugins/maven-install-plugin/usage.html) for more install options.
