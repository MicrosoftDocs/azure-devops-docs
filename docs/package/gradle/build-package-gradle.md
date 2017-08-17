---
title: Push and build with a Gradle package in VSTS
description: Push and build with a Gradle package in VSTS
ms.prod: vs-devops-alm
ms.technology: vs-devops-package
ms.topic: get-started-article
ms.manager: douge
ms.author: douge
ms.date: 8/9/2017
---

# Push a Maven package with Gradle and build with it using VSTS

Gradle is a popular package manager for Android Java developers. Learn how to build and share a Gradle package for your team project with Visual Studio Team Services (VSTS).

## Prerequisites

Before you start, [install the Gradle package management software](https://gradle.org/install/). Note that Gradle itself requires a prior installation of the Java JDK or JRE (version 7+). You
can [get the Java JDK here](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

Verify that you have the Java SDK or JRE version 7 from a CLI:

```cli
java -version
```

And then install Gradle. Once it completes, confirm the installation from a CLI:

```cli
gradle -v
```

You're ready to start! This tutorial will guide you through the process of pushing or pulling a Gradle package and then building your code project with it.


[DOUGE NOTE: ASSUME THEY ARE WORKING FROM CLONED REPO. ALL COMMANDS SHOULD BE RUN UNDER LOCAL REPO.]

## Set up authentication

First, you need a **gradle.properties** file that contains a VSTS credential token.

[DOUGE NOTE: Need an explanation about when Connect to Feed is available and when it isn't.]

Navigate to `https://{yourAccount}.visualstudio.com/_details/security/tokens`, where `{yourAccount}` is the name of your VSTS account or project.

[SCREENSHOT HERE]
Click **Add**.

Give your new token a name and a duration. 

[SCREENSHOT HERE]
Select the **Packaging (read and write)** scope.

The token will be a long alpha numeric string, like "lzitaoxppojf6smpl2cxdoxybepfxfetjvtkmcpw3o6u2smgebfa". Copy this string and store it securely. [DOUGE NOTE: Example of a best practice here?]

Now, go to the `.gradle` folder under the gradle installation root directory. Typically, this is `%INSTALLPATH%\gradle\user\home\.gradle\`. In that folder, create a file titled
**gradle.properties**. 

Open the **gradle.properties** file with a UTF-8 text editor and add the following:
```
vstsMavenAccessToken=YOUR_TOKEN_HERE
```

Where *YOUR_TOKEN_HERE* is the token string you created and saved previously. Save the file when you're done.

[SCREENSHOT HERE]

> ![TIP]
> Alternatively, if you have [CRITERIA FOR CONNECT TO FEED BE AVAILABLE W/ GRADLE CREDENTIAL SUPPORT]...
> 
> Select **Build & Release > Packages** from the VSTS portal for your project. Then, select **Connect to feed**.
> Go to XXXX and select  **Generate Gradle Credentials**. Copy the text and paste it into the **gradle.properties** file
> specified above.

## Configure build.gradle and push your package

Create a file called **build.gradle**. [DOUGE NOTE: Where do they create this file? Under \gradle\user\home?] Open it with a UTF-8 text editor and add the following code:


[DOUGE NOTES: We need an example gradle config with less, ah, specific values. If a user directly cuts and pastes this without being Calvin Jones, will it work? We should use
Fabrikam Fiber Inc. users.]

```text
apply plugin: 'java' 
apply plugin: 'maven-publish' 
 
 
publishing { 
    publications { 
        myPublication(MavenPublication) { 
            groupId 'org' 
            artifactId 'project1' 
            version '1.10-SNAPSHOT' 
            artifact './SomeFile.jar' 
        } 
    } 
 
    //Repositories to which Gradle can publish artifacts 
    repositories { 
        maven { 
            url 'https://mseng.pkgs.visualstudio.com/_packaging/zCalvinMaven/maven/v1' 
            credentials { 
                username "VSTS" 
                //The VSTS build system will use the "VSTS_ENV_ACCCESS_TOKEN" to authenticate to VSTS feeds 
                password System.getenv("VSTS_ENV_ACCESS_TOKEN") != null ? System.getenv("VSTS_ENV_ACCESS_TOKEN") : vstsMavenAccessToken 
            } 
        } 
    } 
} 
 
//Repositories from which Gradle can fetch dependencies 
repositories { 
    maven { 
        url 'https://mseng.pkgs.visualstudio.com/_packaging/zCalvinMaven/maven/v1' 
        credentials { 
            username "VSTS" 
            //The VSTS build system will use the "VSTS_ENV_ACCCESS_TOKEN" to authenticate to VSTS feeds 
            password System.getenv("VSTS_ENV_ACCESS_TOKEN") != null ? System.getenv("VSTS_ENV_ACCESS_TOKEN") : vstsMavenAccessToken 
        } 
    } 
} 
```
In the above example, [DOUGE NOTES: Get explainer from Calvin here. We need to polish this example up. We can't have MSEng in here.]

Replace the following fields with your own values:

- `groupId`:
- `artifactId`:
- `version`:
- `artifact`: 

Now, from a CLI, run:

```cli
gradle publish
```
 If the package is pushed successfully, you should see output similar to this:

```output
[NEED OUTPUT HERE AFTER WE HAVE FINAL PEDAGOGICAL EXAMPLE]
```

Your new package name is `orgId:artifactId`.

## Pull a Gradle package into your project


Open your **build.gradle** file and confirm that the following text is present at the top of it:
```
apply plugin: 'java'
```

Now, add this code to the end of your **build.gradle** file:

```
dependencies { 
    compile(group: 'MyGroup', name: 'myFirstApp', version: '1.0-SNAPSHOT')  
} 
```   

This tells `gradle build` to include the package you created prior, which is effectively named orgId:artifactId, and it should be applied to the app named in the dependencies. [DOUGE: CLEAN UP PROSE]

To test this, create a simple Java code file and build it with Gradle. You can use this code to test:

[DOUGE NOTE: How does this use the package we created prior? Gussing in code example below, since we didn't have a package declaration in it]
```java
package [DOUGE NOTE: Need package name here?]

public class HelloWorld { 
    public static void main(String[] args) { 
        System.out.println("Hello, world!"); 
    } 
} 
```

Build the code by running Gradle from a CLI:

```cli
gradle build
```

If the build is successful, you will see `BUILD SUCCESSFUL` returned when it completes.


## Set up Team Build to use Gradle packages

Open a CLI and run the following command:

```cli
gradle wrapper
```

The gradle wrapper is created in the directory where you ran the above command. The wrapper's file name is **gradlew**. Do not rename this file.

Push an update that contains the wrapper (gradlew) from your project repo to origin. Team Build requires this file on the remote repo for your project.

[DOUGE NOTES: EXPAND THIS]
Create a new build and select the "Gradle" template.  You can configure various gradle tasks to run on the agent.  Queue the build and it should work! 


