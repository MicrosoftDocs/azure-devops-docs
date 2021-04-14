---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/13/2020
---

<li><p>Open your project in your web browser</p>
<img src="/azure/devops/pipelines/media/browse-to-team-project.png" alt="Browse to project"/>

<p>(If you don&#39;t see your project listed on the home page, select <strong>Browse</strong>.)</p>
<ul>
<li>On-premises TFS: <code>http://{your_server}:8080/tfs/DefaultCollection/{your_project}</code> </li>
<li>Azure Pipelines: <code>https://dev.azure.com/{your_organization}/{your_project}</code></li>
</ul>
<p><a href="/azure/devops/server/admin/websitesettings" data-raw-source="[The TFS URL doesn&#39;t work for me. How can I get the correct URL?](/azure/devops/server/admin/websitesettings)">The TFS URL doesn&#39;t work for me. How can I get the correct URL?</a></p>
</li>

<li><p>Create a build pipeline (Pipelines tab &gt; Builds)</p>
<img src="/azure/devops/pipelines/media/create-new-build-definition.png" alt="Build tab"/>
<p></p>
</li>
