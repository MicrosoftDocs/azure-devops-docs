<a name="code"></a>
### What code is in the sample app?

We used Eclipse to create our [Hello World Java sample web app](http://download.microsoft.com/download/9/F/D/9FDE173C-5213-4C6F-AED8-BD64A4658B08/java-maven-hello-world-app.zip). We adapted a project created from the [maven webapp archetype](http://maven.apache.org/archetypes/maven-archetype-webapp/).

```
|-- .gitignore
`-- helloworld
    |-- .classpath
    |-- .project
    |-- pom.xml
    `-- src
        `-- main
            `-- webapp
                |-- WEB-INF
                |   `-- web.xml
                `-- index.jsp

```

The pom.xml file enables you to build with Maven. The .gitignore file keeps build artifacts on your dev machine from getting into your Git repo.
