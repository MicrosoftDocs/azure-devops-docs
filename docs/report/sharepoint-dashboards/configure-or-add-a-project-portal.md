---
title: Configure or add a project portal 
titleSuffix: TFS
description: How the SharePoint project portal provides access to shared documents, dashboards, and support files-Team Foundation Server  
ms.prod: devops
ms.technology: devops-analytics
ms.assetid: 63eae10a-b4d6-4ef5-93fd-270d20a8a2cf
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 03/09/2017
monikerRange: '>=tfs-2013'
ms.topic: tutorial
---

# Configure or add a project portal

[!INCLUDE [temp](../_shared/tfs-sharepoint-version.md)]

The project portal is a site associated with a team project for the purposes of sharing information. Project portals that are created when the team project is created are associated with a SharePoint site. These [portals](share-information-using-the-project-portal.md) provide access to shared documents, dashboards, and support files that contain redirect links to MSDN process guidance topics.  
  
 If your team project was created using the Basic configuration or is hosted on Azure DevOps, you won't have access to a project portal. If you want to configure a portal, you can. Also, you can configure the portal and [process guidance](share-information-using-the-project-portal.md) independently of each other.  
  
 Choose one of the following options based on your deployment configuration and team requirements:  
  
-   [Determine if your team project portal is enabled](#portal_enabled).  
  
     Choose this option if you're not sure if your team project is already configured.  
  
-   [Configure a Web site for your portal](#simple).  
  
     Choose this option if you want to use a website that doesn't require SharePoint integration or if your team project is hosted on Azure DevOps Services.  
  
-   [Configure a prepared SharePoint site for your portal](#validtfs).  
  
     Choose this option if you have already configured TFS to integrate with a SharePoint Web application.  
  
-   [Add a SharePoint server and upload portal contents from the process template](#addsp)  
  
     Choose this option to prepare a SharePoint Web application, and add all portal artifacts and process guidance for a team project that was created using the Basic configuration.  
  
##  <a name="portal_enabled"></a> Determine if your team project portal is enabled  
 If you cannot access Excel reports or dashboards, you might want to verify whether a portal has been enabled for your team project.  
  
1.  From Visual Studio or Team Explorer, [connect to your team project](../../organizations/projects/connect-to-projects.md).  
  
2.  Open Portal Settings.  
  
     ![Open Portal Settings page from Team Explorer](_img/alm_pg_portalsettings.png "ALM_PG_PortalSettings")  
  
     If the **Enable team project portal** check box is not selected, your team project portal is not enabled.  
  
     ![Project Portal Settings dialog box](_img/procguid_projectportalsettings.png "ProcGuid_ProjectPortalSettings")  
  
##  <a name="simple"></a> Configure a Web site for your portal  
 Configure this option when you aren't using SharePoint Products or when your team project is hosted on Azure DevOps Services.  
  
1.  If you aren't a member of the Team Project Administrators group, [get added now](/azure/devops/organizations/security/set-project-collection-level-permissions).  
  
2.  Open Portal Settings.  
  
3.  Select the **Enable team project portal** check box and then enter the URL for the Web site you've prepared for your team project portal.  
  
     ![Specify URL  for project portal Web site](_img/alm_pg_portalwebsite.png "ALM_PG_PortalWebSite")  
  
##  <a name="validtfs"></a> Configure a prepared SharePoint site for your portal  
 Choose this option when you have a SharePoint Web application that has been integrated to work with TFS. To learn how to do this, see [SharePoint Products requirements for Team Foundation Server](/azure/devops/server/requirements#sharepoint).  
  
1.  If you aren't a member of the Team Project Administrators group, [get added now](/azure/devops/organizations/security/set-project-collection-level-permissions).  
  
2.  Open Portal Settings from the Settings page in Team Explorer.  
  
3.  Select the **Enable team project portal** check box and then choose **Configure the URL**.  
  
4.  Enter the URL for the SharePoint site you've prepared for your team project portal.  
  
     ![Verify portal configuration](_img/alm_pg_portalenabled.png "ALM_PG_PortalEnabled")  
  
##  <a name="addsp"></a> Add SharePoint site integration and upload portal contents from a process template  
 Choose this option to gain access to Excel reports, dashboards, and process guidance support.  To add the portal to the team project, use the **tfpt** command line tool that TFS Power Tools provides.  

1.  [Add SharePoint products to your deployment](/azure/devops/server/admin/add-sharepoint-to-tfs).  
  
2.  Verify that you have the following tools, configurations, and permissions.  
  
    1.  If you haven't installed TFS power tools, install them now to your Visual Studio client:
    - **TFS 2015:** [Microsoft Visual Studio Team Foundation Server 2015 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2015Power) 
    - **TFS 2013:** [Microsoft Visual Studio Team Foundation Server 2013 Power Tools](https://marketplace.visualstudio.com/items?itemName=TFSPowerToolsTeam.MicrosoftVisualStudioTeamFoundationServer2013Power)   
  
    2.  If you haven't installed a version of Visual Studio, [install one of them now](https://visualstudio.microsoft.com/downloads/download-visual-studio-vs). You can download Team Explorer for free. Team Explorer must be installed on the same machine where you run the **tfpt** command line tool.  
  
    3.  If you aren't an administrator for the team project, [get added now](../../organizations/security/set-project-collection-level-permissions.md).  
  
    4.  If you haven't been granted Full Control for the SharePoint site, [get that permission now](../../organizations/security/set-sharepoint-permissions.md).  
  
3.  Open a Command Prompt in administrative mode and change to the directory where you installed the power tools.  
  
    ```  
    cd %programfiles%\TFS 2013 Power Tools  
    ```  
  
     On a 64-bit edition of Windows, replace `%programfiles%` with %`programfiles(x86)%`.  
  
4.  Add the portal. The process template you specify must be compatible with the template used to create the team project. And, it must have been uploaded to the team project collection that hosts your team project.  
  
    ```  
    tfpt addprojectportal /collection:"http://MyServer:8080/tfs/DefaultCollection" /teamproject:MyProject /processtemplate:"TemplateName"   
    ```  
  
     These are the names of the process templates available with TFS 2013:  
  
    -   Microsoft Visual Studio Scrum 2013    
    -   MSF for Agile Software Development 2013   
    -   MSF for CMMI Process Improvement 2013  
  
5.  Open Portal Settings and verify that the SharePoint site is configured as expected.  
  
6.  From the Home page, open the Documents page.  
  
    <table>
	<tbody valign="top">
	<tr>
	<td>**Git**</td>
	<td>**TFVC**</td>
	</tr>
	<tr>
	<td>![Team Explorer Home page with Git as source control](_img/alm_te_githome.png "ALM_TE_GitHome")</td>
	<td>![Team Explorer Home page w&#47; TFVC as source control](_img/tracking_teamproject.png "Tracking_TeamProject")</td>
	</tr>
	</tbody>
	</table>  
  
7.  Open the project portal.  
  
     ![Show Project Portal link on Documents page](_img/alm_pg_showprojectportal.png "ALM_PG_ShowProjectPortal")  
  
8.  From your project portal, [add team member accounts to the Contributors group](/azure/devops/organizations/security/set-sharepoint-permissions) for the SharePoint site.  
  
## Related notes 

The artifacts you'll have access to depend on the process template created with your team project. For an overview of the artifacts available with the default process templates, see [Choose a process](../..//boards/work-items/guidance/choose-process.md).  
  
- [SharePoint Online Tutorial](http://office.microsoft.com/sharepoint-server-help/sharepoint-pages-i-an-introduction-RZ101837217.aspx?CTT=1)


