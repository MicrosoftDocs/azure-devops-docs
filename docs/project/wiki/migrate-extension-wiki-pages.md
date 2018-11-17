---
title: Migrate wiki extension pages in Azure DevOps and TFS
titleSuffix: Azure DevOps & TFS  
description: Migrate wiki pages created using the Marketplace extension to the Azure DevOps wiki
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.assetid: 535245F2-6227-410C-B91D-559FA509D81B
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.reviewer: sancha
monikerRange: '>= tfs-2018'
ms.date: 11/15/2018  
---  

# Migrate pages from Wiki extension to a team project wiki

**Azure DevOps Services | TFS 2018**

With the release of the built-in wiki, any wiki pages that you created using the Wiki Marketplace extension have been saved to a Git repo in your team project. Use this topic to migrate pages made using the [Wiki Marketplace  extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.wiki) to your team project Wiki. The **Wiki** feature is available for TFS 2018 and later versions. To learn more, see [Create a wiki for your team project](wiki-create-repo.md).  

You can migrate the markdown pages and other artifacts that were added to that repo to your team project wiki with the following steps:

1.	Clone [vsts-wikiTools](https://github.com/Microsoft/vsts-wikiTools) repository and compile the **MigrateToVSTSWiki** tool
2.	Create and then clone your Azure DevOps wiki
3.	Move and commit all markdown pages to your Azure DevOps wiki
4.	Run the wiki migration tool, **MigrateToVSTSWiki.exe**
5.	Once you are done, push the changes to the default master branch, *wikiMaster*, of the Azure DevOps wiki repository.

To perform these changes, you must be a member of the Contributors group of your team project.  

## Detailed steps

The detailed steps for Wiki migration are as follows:

1.	Clone [vsts-wikiTools](https://github.com/Microsoft/vsts-wikiTools) repository and compile the **MigrateToVSTSWiki** tool

1.  Compile the project under the path **Tools/MigrateToVSTSWiki** to generate the migration tool EXE.
  
2.  From a web browser, open your Azure DevOps team project and [create your first wiki page](wiki-create-repo.md).
 
4.	Get the URL to clone your wiki. See [Clone your wiki and edit wiki pages offline](wiki-update-offline.md).  
	
	Let the clone location be identified as "LocationA" for the purposes of these procedures.
	
5.	Clone your Wiki repo using your IDE or **git clone** command.

	<img src="_img/wiki/migrate-wiki-manage-wikis.png" alt="Manage wikis menu option" style="border: 1px solid #C3C3C3;" />     

6.	Clone the Wiki extension repo. The Wiki will be mapped to a folder given to you during the wiki creation. You can check that by going to "manage wiki" option in the existing wiki as shown below.

	You'll find your existing wiki pages are saved under the folder labeles "Root".

	For example, say you have cloned the above mentioned "sampleWiki" in the location "C:\wiki\sampleWiki". The wiki pages are saved in the path "C:\wiki\sampleWiki\ _extensionWiki"

	Let this location be identified as "LocationB" for the purposes of these procedures.
 
7.	Create an empty folder in any path of your choosing in your local machine and let that be "LocationC" for the purposes of these procedures.  

	**In summary:** 
	- Location A = Azure DevOps Wiki repo
	- Location B = Wiki extension repo 
	- Location C = Empty folder where we will run our migration tool

8.	Open a command prompt as an administrator and run **MigrateToVSTSWiki.exe**.  This tool will copy the files from your existing wiki to the destination directory you provide. During copying, the tool converts the pages to be compliant with the Azure DevOps wiki.
 
	`MigrateToVSTSWiki.exe /source:LocationB /destination:LocationC`

	For example:
	- "E:\wiki\sampleWiki\_extensionWiki" is the folder in which the existing wiki files are present
	- "E:\Temp\Wiki\New" is the empty folder into which the migrated files are to be copied.

9. Next, remove all files from "LocationA" (if any) apart from the git related files such as .gitignore etc.

10. Copy all files from "LocationC" and paste them into "LocationA".
 
11.	Run **git add .** to stage all the newly added files in  "LocationA" for the commit.
  
12.	Run **git commit -m <commit message>** to commit the files that you have staged locally.

13.	Run **git push origin wikiMaster -f** . to push the changes to the default branch of the Azure DevOps Wiki.

>[!NOTE]  
>Once you have migrated your Wiki extension files to the Azure DevOps Wiki, you are ready to uninstall the Wiki extension.

## Related articles
  
- [Wiki page title naming conventions](add-edit-wiki.md#page-title-names)  
- [Clone and update wiki pages offline](wiki-update-offline.md)  
- [Source code for the wiki tools](https://github.com/Microsoft/vsts-wikiTools)  
- [Git quickstart](../../repos/git/gitquickstart.md)

### Contributions

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
