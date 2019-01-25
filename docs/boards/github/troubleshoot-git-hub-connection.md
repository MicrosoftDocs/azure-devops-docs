---
title: Troubleshoot GitHub repository connection to a project in Azure DevOps Services  
titleSuffix: Azure Boards
description: Learn how to resolve connection problems with a GitHub repository and Azure Boards project  
ms.assetid: 
ms.prod: devops
ms.technology: devops-agile
ms.topic: quickstart
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: 'azdevops'
ms.date: 12/04/2018
---

# Troubleshoot GitHub & Azure Boards integration 

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 

When you create a GitHub connection, you are granted access to GitHub as an OAuth app or by using a Personal Access Token (PAT).

The access by Azure Boards to the GitHub repo can be revoked in one or more ways. If the user who created the connection PAT is revoked or the permission scope changes, then the Azure Boards access is revoked. Or the OAuth app’s authorization can be revoked entirely for a given repo.

[!INCLUDE [temp](../_shared/github-platform-support.md)]  

## Resolve connection issues

When the Azure Boards connection to GitHub no longer has access, it shows an alert status in the user interface with a red-X that has a tooltip such as, *Unable to connect to GitHub*.
 
To resolve the problem, consider the following:  

- **If the connection is using OAuth**:
	- The Azure Boards application had it's access denied for one of the repositories.
	- GitHub might be unavailable/unreachable. This could be due to an outage in either service or an infrastructure/network issue on-prem. You can check service status from the following links:
		- [GitHub](https://status.github.com)  
		- [Azure Devops](https://status.dev.azure.com/)

	To resolve the first issue, delete and recreate the connection to the GitHub repository. This will cause GitHub to prompt to reauthorize Azure Boards.   

- **If the connection is using a PAT:**
	- The PAT may have been revoked or the required permission scopes changed and are insufficient.
	- The user may have lost admin permissions on the GitHub repo.  

	To resolve, recreate the PAT and ensure the scope for the token includes the required permissions: `repo, read:user, user:email, admin:repo_hook`. 

<a id="update-wits" />
## Update XML definitions for select work item types 

If your organization uses the Hosted XML process model to customize the work tracking experience and you want to link to and view the GitHub link types from the Development section in the work item forms, you'll need to update the XML definitions for the work item types. 

For example, if you want to link user stories and bugs to GitHub commits and pull requests from the Development section, then you need to update the XML definitions for user stories and bugs. 

Follow the sequence of tasks provided in [Hosted XML process model](../../organizations/settings/work/hosted-xml-process-model.md) to update the XML definitions. For each work item type, find the `Group Label="Development"` section, and add the following two lines in the following code syntax to support the external links types: **GitHub Commit** and **GitHub Pull Request**.  


> [!div class="tabbedCodeSnippets"]
```XML
             <ExternalLinkFilter Type="GitHub Pull Request" />  
             <ExternalLinkFilter Type="GitHub Commit" />  
```

When updated, the section should appear as shown. 


> [!div class="tabbedCodeSnippets"]
```XML
<Group Label="Development">  
   <Control Type="LinksControl" Name="Development">  
      <LinksControlOptions ViewMode="Dynamic" ZeroDataExperience="Development" ShowCallToAction="true">  
         <ListViewOptions GroupLinks="false">   
         </ListViewOptions>  
         <LinkFilters>  
             <ExternalLinkFilter Type="Build" />  
             <ExternalLinkFilter Type="Integrated in build" />  
             <ExternalLinkFilter Type="Pull Request" />  
             <ExternalLinkFilter Type="Branch" />  
             <ExternalLinkFilter Type="Fixed in Commit" />  
             <ExternalLinkFilter Type="Fixed in Changeset" />  
             <ExternalLinkFilter Type="Source Code File" />  
             <ExternalLinkFilter Type="Found in build" />  
             <ExternalLinkFilter Type="GitHub Pull Request" />  
             <ExternalLinkFilter Type="GitHub Commit" />  
         </LinkFilters>  
      </LinksControlOptions>  
   </Control>  
</Group>  
```



