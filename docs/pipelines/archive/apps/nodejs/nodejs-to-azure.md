---
title: CI build Node.js app | Azure Pipelines or Team Foundation Server
ms.custom: seodec18
description: Learn how you can set up a continuous integration (CI) build for your Node.js app in Azure Pipelines or Team Foundation Server (TFS)
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-cicd
ms.assetid:
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 08/04/2016
monikerRange: 'tfs-2017'
---


# Define a continuous integration build for your Node.js app

**TFS 2017**

Here we'll show you how to define a continuous integration (CI) build pipeline for your Node.js app. If you want to also continuously deploy (CD) your app to Azure, you'll be set up to make that happen after you're done creating this CI build pipeline.

## Upload your code

1. [Download our Node.js Hello World sample app](http://download.microsoft.com/download/5/C/4/5C4CB575-D022-4BB8-9E95-5A2958C83CD2/nodejs-express-hello-world-app.zip).

2. Do you have your own code?

   * No: Upload the sample app to Azure Pipelines or your on-premises Team Foundation Server. Either push your code to Git or check in your code to TFVC.

   * Yes:

     1. Copy the **gulpfile.js** and **web.config** files from the sample app to the root folder of your app.

     2. Upload your code to Azure Repos or your on-premises Team Foundation Server: either push your code to Git or check in your code to TFVC.

[What code is in the sample app?](#code)

## Define your CI build

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

### Add the build tasks

On the **Tasks** or **Build** tab, add these tasks.

<table>
   <tr>
      <td>

<img src="../../../tasks/package/_img/npm.png" alt="Package: npm install"/>

<br/><strong>Package: npm install</strong></td>
      <td>
<p>Install your npm package dependencies.</p>
<ul>
 <li> Command: <code>install</code></li>
</ul>
      </td>
</tr>
        <tr>
            <td>

<img src="../../../tasks/build/_img/gulp.png" alt="Build: gulp"/>

<br/><strong>Build: gulp</strong></td>
            <td>
<p>Pack your files into a .zip file.</p>
<ul>
<li><p>gulp File Path: <code>gulpfile.js</code></p>
</li>
<li>
<p>Advanced, Arguments: <code>--packageName=$(Build.BuildId).zip --packagePath=$(Build.ArtifactStagingDirectory)</code>
</p>
</li>
</ul>
<p>Make sure you&#39;ve got a copy of <strong>gulpfile.js</strong> from our <a href="#code" data-raw-source="[sample app](#code)">sample app</a> in the root folder of your app.</p>

</td>
        </tr>

<tr>
            <td>

<img src="../../../tasks/package/_img/npm.png" alt="Package: npm test"/>

<br/><strong>Package: npm test</strong></td>
            <td>
<p>(Optional) Test your application.</p>
<ul>
 <li> Command: <code>test</code></li>
 <li> Set the working folder to the folder where your application code is committed in the repository.</li>
</ul>
</td>
        </tr>
<tr>
            <td>

<img src="../../../tasks/build/_img/publish-build-artifacts.png" alt="Build: Publish Build Artifacts"/>

<br/><strong>Build: Publish Build Artifacts</strong></td>
            <td>
<p>(Optional) Drop some of the build outputs, such as the .zip file as we do in the example below.</p>
<ul>
 <li> Copy Root: <code>$(Build.ArtifactStagingDirectory)</code></li>
 <li> Contents: <code>$(Build.BuildId).zip</code></li>
 <li> Artifact name: <code>drop</code></li>
 <li> Artifact Type: <code>Server</code></li>
</ul>
</td>
        </tr></table>

### Enable continuous integration (CI)

On the **Triggers** tab, enable **Continuous integration** (CI). This tells the system to queue a build whenever someone on your team commits or checks in new code.

### Save, queue, and test the build

Save and queue the build. Once the build is done, click the link to the completed build (for example, _Build 1634_), click **Artifacts**, and then click **Explore** to see the .zip file produced by the build. This is the web deploy package that your release pipeline will consume to deploy your app.

## Continuously deploy (CD) your app

After you've run the CI build, you're ready to create a continuous deployment (CD) release pipeline so that you can deploy your app to:

* [![Azure Web App Deploy](../../../tasks/deploy/_img/azure-web-app-deployment-icon.png) An Azure web site](../../../apps/cd/deploy-webdeploy-webapps.md)

* [![IIS Web App Deploy](../../../tasks/deploy/_img/iis-web-application-deployment-icon.png) An IIS server](../../../apps/cd/deploy-webdeploy-iis-deploygroups.md)

* [![Build Machine Image](../../../tasks/deploy/_img/build-machine-image.png) An Azure Scale Set](../../../apps/cd/azure/deploy-azure-scaleset.md)

## Q&A
<!-- BEGINSECTION class="md-qanda" -->

<h3 id="code">What code is in the sample app?</h3>

[Our Node.js Hello World sample app](http://download.microsoft.com/download/5/C/4/5C4CB575-D022-4BB8-9E95-5A2958C83CD2/nodejs-express-hello-world-app.zip) contains:

```
|-- .gitignore
`-- helloworld
    |-- gulpfile.js
    |-- package.json
    |-- server.js
    |-- web.config
    `-- typings
```

The gulpfile.js script zips up the app so it can be deployed to Azure. The web.config file enables running the app on Azure. The .gitignore file keeps build artifacts on your dev machine from getting into your Git repo.

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
