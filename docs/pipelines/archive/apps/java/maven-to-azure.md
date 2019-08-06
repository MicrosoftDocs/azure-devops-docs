---
title: Build and Deploy your Java application to an Azure Web App
ms.custom: seodec18
description: Build and Deploy your Java application to an Azure Web App
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E6A051F3-8B84-4724-9110-F84DB1F3DCD5
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.date: 08/04/2016
monikerRange: 'tfs-2017'
---


# Build and Deploy your Java app to an Azure Web App

**[Azure Pipelines](quick-to-azure.md) | TFS 2017 RTM**

In just a few steps you can build and deploy your Java app to Azure. This works from both the Azure Pipelines service and your on-premises Team Foundation Server.

## Upload your code

Upload your code to Azure Pipelines or your on-premises Team Foundation Server. Either push your code to Git or check in your code to TFVC.

[!INCLUDE [temp](_shared/java-web-app-sample-link.md)]

## Enable Java, Apache Tomcat, and FTP for your Azure Web App

0. Sign in to the [Azure portal](https://portal.azure.com/).

1. Edit or [create a Java web app](https://azure.microsoft.com/documentation/articles/web-sites-java-apps/get-started/) and enable Apache Tomcat.

2. Click the deployment credentials part (outlined in red below). Create a user name and password. Click Save. If you previously enabled publishing for a web app, you don't need to do this step.

   ![Create FTP deployment credentials](_shared/_img/deployment-credentials.png)

## Create the pipeline

<ol>


<li><p><a data-toggle="collapse" href="#expando-begin-create-build-definition-open-team-project">Open your project in your web browser &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-definition-open-team-project">
<img src="~/pipelines/_shared/_img/browse-to-team-project.png" alt="Browse to project">

<p>(If you don&#39;t see your project listed on the home page, select <strong>Browse</strong>.)</p>
<ul>
<li>On-premises TFS: <code>http://{your_server}:8080/tfs/DefaultCollection/{your_project}</code> </li>
<li>Azure Pipelines: <code>https://dev.azure.com/{your_organization}/{your_project}</code></li>
</ul>
<p><a href="/azure/devops/server/admin/websitesettings" data-raw-source="[The TFS URL doesn&#39;t work for me. How can I get the correct URL?](/azure/devops/server/admin/websitesettings)">The TFS URL doesn&#39;t work for me. How can I get the correct URL?</a></p>
</div>
</li>

<li><p><a data-toggle="collapse" href="#expando-begin-create-build-definition-create">Create a build pipeline (Pipelines tab &gt; Builds) &#x25BC;</a></p>
<div class="collapse" id="expando-begin-create-build-definition-create">
<img src="~/pipelines/_shared/_img/create-new-build-definition.png" alt="Build tab">
<p>
</div>
</li>

<li>Click Empty to start with an empty pipeline.</li>
</ol>

### Define variables to store Azure FTP authentication data

On the Variables tab, store the data needed to copy files to Azure via FTP. Copy this data from the [Azure portal](https://portal.azure.com/). There is nothing special about the variable names we suggest below, so you can make them whatever you prefer.

| Name | Notes |
|---|---|---|
| azure.ftp.userName | Take this value from your Azure Web App essentials. For example if the name of your Azure Web App is FabrikamJava, then the value would be : ```FabrikamJava\YourUserName``` |
| azure.ftp.password | Take this value from your Azure subscription deployment settings. In your build pipeline variables, make sure to click secret to avoid exposing this password value. [I don't want to use my Azure subscription FTP credentials. Can I use credentials scoped to my Azure Web App?](#azure_site_ftp) |

![Java deployment build variables](_img/maven-to-azure/azure-java-deployment-variables.png)

### Add build tasks

On the Build tab, add these tasks:

<table>
   <tr>

      <td><img src="../../../tasks/build/_img/maven.png" alt="Build: Maven"/> <strong>Build: Maven</strong></td>
      <td>
<p>Build the app.</p>
<ul>
          <li>Maven POM file: Browse and select your pom.xml file. For example, <code>helloworld/pom.xml</code>.</li>
</ul>
      </td>
</tr>

        <tr>
            <td><img src="../../../tasks/utility/_img/curl-upload-files.png" alt="Utility: cURL Upload Files"/> <strong>Utility: cURL Upload Files</strong></td>
            <td>
<p>Copy the .war file to Azure.</p>
<ul>
<li> Files: <code>helloworld/target/hello.war</code></li>
 <li> Username: <code>$(azure.ftp.userName)</code></li>
 <li> Password: <code>$(azure.ftp.password)</code></li>
 <li> URL: Take this value from your Azure Web App essentials page on the <a href="https://portal.azure.com/" data-raw-source="[Azure portal](https://portal.azure.com/)">Azure portal</a>. For example, <code>ftp://waws-prod-sn1-011.ftp.azurewebsites.windows.net</code></li>
 <li> Optional Arguments: <code>-Q &quot;+CWD site/wwwroot/webapps&quot;</code></li>
</ul>
</td>
        </tr>
        <tr>
            <td><img src="../../../tasks/utility/_img/publish-build-artifacts.png" alt="Utility: Copy and Publish Build Artifacts"/> <strong>Build: Publish Build Artifacts</strong></td>
            <td>
<p>(Optional) Drop some of the build outputs, such as the .war file as we do in the example below.</p>
<ul>
 <li> Copy Root: <code>helloworld/target</code></li>
 <li> Contents: <code>hello.war</code></li>
 <li> Artifact name: <code>drop</code></li>
 <li> Artifact Type: <code>Server</code></li>
</ul>
</td>
        </tr>
</table>

[!INCLUDE [temp](../_shared/definition-finish-and-test.md)]

After a successful build, check your site: ```http://{web_app_name}.azurewebsites.net/{war_file_name}```

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](_shared/java-web-app-sample-qa.md)]

<a name="azure_site_ftp"></a>
### I don't want to use my Azure subscription FTP credentials. Can I use credentials scoped to my Azure Web App?

A: Yes.

0. Sign in to the [Azure portal](https://portal.azure.com/).

1. Open your web app and download the publish profile.

2. Open your .PublishSettings file and copy some of the data from the ```publishMethod="FTP"``` section into your build variables.

| Name | Value from .PublishSettings file attribute| Notes |
|---|---|---|
| azure.ftp.userName | userName   |  For example, ```YourAppName\$YourAppName```  |
| azure.ftp.password | userPWD| In your build pipeline variables, make sure to click secret to avoid exposing this password value. |


### How do I continually deliver my app and manage my releases?

[Learn about Azure Pipelines](../../../release/index.md)


[!INCLUDE [temp](../../../_shared/qa-definition-common-all-platforms.md)]

[!INCLUDE [temp](../../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
