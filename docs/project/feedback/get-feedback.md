---
title: Request feedback 
titleSuffix: Azure DevOps Services & TFS 
description: Ask reviewers to provide videos, screenshots, type-written comments, and ratings on your application developed using Azure DevOps Services & Team Foundation Server  
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.assetid: b8fc1618-6501-41dd-86a6-78290bb84dcd  
ms.manager: jillfra
ms.author: kaelli
monikerRange: '>= tfs-2013'
ms.date: 01/15/2019
---

# Get feedback

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Once you have working software, you're ready to get feedback from your stakeholders. You can ask reviewers to provide videos, screenshots, type-written comments, and ratings. Their feedback is captured into work items that you can review and use to create a bug or suggest a new backlog item. 

Before requesting feedback, make sure that you [provide stakeholders who'll you request feedback from the necessary permissions](give-permissions-feedback.md).

::: moniker range=">= tfs-2017"

> [!NOTE]  
> You can also [request feedback from stakeholders for web apps using the Test &amp; Feedback extension](../../test/request-stakeholder-feedback.md). For desktop apps, you must use the feedback request form documented in this topic and stakeholders must reply using the Microsoft Feedback Client. 
> 
::: moniker-end

## Prerequisites

::: moniker range="azure-devops"

* You must connect to a team project. If you don't have a project yet, create one in [Azure DevOps Services](../../user-guide/sign-up-invite-teammates.md).  
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project).  
* To request feedback, you must be granted **Basic** access or higher. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To provide or review feedback, you must be granted **Stakeholder** access or higher. 
* To view or modify feedback responses, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking).  

> [!NOTE]  
> Users with **Stakeholder** access for a public project have full access to the Request feedback feature just like users with **Basic** access. For details, see [About access levels](/azure/devops/organizations/security/access-levels).


::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To request feedback, you must be granted **Basic** access or higher. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To provide or review feedback, you must be granted **Stakeholder** access or higher. 
* To view or modify feedback responses, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking).  
* To send feedback requests, the server administrator must [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end 

::: moniker range="tfs-2015"

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To request feedback, you must be granted **Basic** access or higher for TFS 2015.1 and later versions. For TFS 2015, you must be granted **Advanced** access. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To provide or review feedback, you must be granted **Stakeholder** access or higher. 
* To view or modify feedback responses, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking).  
* To send feedback requests, the server administrator must [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end 


::: moniker range="tfs-2013"

* You must connect to a project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project).
* You must be added to a project as a member of the **Contributors** or **Project Administrators** security group. To get added, [Add users to a project or team](/azure/devops/organizations/security/add-users-team-project). 
* To request feedback, you must be granted **Advanced** access. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To add or modify work items, you must be granted **Stakeholder** access or higher. For details, see [About access levels](/azure/devops/organizations/security/access-levels).
* To view or modify work items, you must have your **View work items in this node** and **Edit work items in this node** permissions set to **Allow**.  By default, the **Contributors** group has this permission set. To learn more, see [Set permissions and access for work tracking](/azure/devops/organizations/security/set-permissions-access-work-tracking).  
* To send feedback requests, the server administrator must [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

::: moniker-end 

::: moniker range=">= tfs-2015"  
## Add the Other links widget to your dashboard

Add the **Other links** widget to a web portal team dashboard. For details, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md)  

> [!div class="mx-imgBorder"]  
> ![Other links widget](_img/get-feedback/add-other-links-widget.png)   

::: moniker-end 

## Request feedback 

To request feedback, you fill out a form that generates an email request to your stakeholders.

::: moniker range="azure-devops"  

0. From the dashboard, choose the **Request feedback** link from the Other links widget.  

	![Request feedback link in Homepage](_img/get-feedback/other-links-widget.png)  

0. Add the feedback reviewers. If you don't see the names you want in the browse list, [grant them permissions to provide feedback](give-permissions-feedback.md).

	![Select stakeholders on Request Feedback form](_img/ALM_GF_FeedbackReviewers.png)  

3. Tell your reviewers how to run the app they'll be reviewing.

	![Launch application instructions rich-text area on Request Feedback form](_img/ALM_GF_TellStakeholders.png)  

4. For each area of interest, decide what type of feedback you want. Set the context for the reviewers by providing enough background information. Add up to four more areas of interest with the **add feedback item** link. 

	![Feedback focus textbox on Request Feedback form](_img/ALM_GF_FocusFeedback.png)  

5. Send the request. 

	![Send Button on Request Feedback form](_img/ALM_GF_SendRequest.png)  

::: moniker-end 


::: moniker range=">= tfs-2015 <= azure-devops-2019" 
0. From the dashboard, choose the **Request feedback** link from the Other links widget.  

	![Request feedback link in Homepage](_img/get-feedback/other-links-widget.png)  

	If the following message appears, you need to [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

	![Error message about email notifications not configured](_img/ALM_GF_SMTPServer.png)  

0. Add the feedback reviewers. If you don't see the names you want in the browse list, [grant them permissions to provide feedback](give-permissions-feedback.md).

	![Select stakeholders on Request Feedback form](_img/ALM_GF_FeedbackReviewers.png)  

3. Tell your reviewers how to run the app they'll be reviewing.

	![Launch application instructions rich-text area on Request Feedback form](_img/ALM_GF_TellStakeholders.png)  

4. For each area of interest, decide what type of feedback you want. Set the context for the reviewers by providing enough background information. Add up to four more areas of interest with the **add feedback item** link. 

	![Feedback focus textbox on Request Feedback form](_img/ALM_GF_FocusFeedback.png)  

5. Send the request. 

	![Send Button on Request Feedback form](_img/ALM_GF_SendRequest.png)  

::: moniker-end 


::: moniker range="<= tfs-2013"  

1. From the web portal team home page, choose **Request feedback** to start a feedback request. 

	![Request feedback link in Homepage](_img/request-feedback-link.png)  

	> [!NOTE]  
	> If your on-premises TFS team project was upgraded from TFS 2010 or earlier version, you may have to update your team project using the [Configure Features wizard](../../reference/configure-features-after-upgrade.md). 

	If the following message appears, you need to [configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts).

	![Error message about email notifications not configured](_img/ALM_GF_SMTPServer.png)  

2. Add the feedback reviewers. If you don't see the names you want in the browse list, [grant them permissions to provide feedback](give-permissions-feedback.md).

	![Select stakeholders on Request Feedback form](_img/ALM_GF_FeedbackReviewers.png)  

3. Tell your reviewers how to run the app they'll be reviewing.

	![Launch application instructions rich-text area on Request Feedback form](_img/ALM_GF_TellStakeholders.png)  

4. For each area of interest, decide what type of feedback you want. Set the context for the reviewers by providing enough background information. Add up to four more areas of interest with the **add feedback item** link. 

	![Feedback focus textbox on Request Feedback form](_img/ALM_GF_FocusFeedback.png)  

5. Send the request. 

	![Send Button on Request Feedback form](_img/ALM_GF_SendRequest.png)  

::: moniker-end 


## Provide Feedback
Reviewers launch your application and provide feedback through the free Microsoft Feedback Client.

1. Reviewers who don't have a version of Visual Studio installed can download the feedback client directly from the feedback request they receive.

	![Install the feedback tool link on the Feedback Request email](_img/ALM_GF_InstallFeedbackClient.png)  

	Or, they can go to the [Visual Studio download site](https://www.microsoft.com/download/details.aspx?id=48142). 

2. Reviewers start the feedback session.

	![Start your feedback session link on the Feedback Request email](_img/ALM_GF_StartFeedbackSession.png)  

3. They launch the app to review from the feedback tool.

	![URL link on Feedback client start page](_img/ALM_GF_LaunchFeedbackTool.png)  

4. They begin providing feedback.

	![Provide page on Feedback client](_img/ALM_GF_ProvideFeedback.png)  

5. Reviewers can add screenshots, comments, and file attachments, and even record the feedback session. Results show up on the lower part of the screen. In this case, you can see the comment that the stakeholder wrote after attaching the screenshot. 

	![Screenshot icon and Comment text box on Provide page](_img/ALM_GF_AddScreenshot.png)  

	> [!NOTE]
	> **Security Note:** Unless you stop recording, everything is recorded&mdash;all steps that you take as well as anything you say. If you provide sensitive data such as user names and passwords, you will capture this information in the recording. However, you can always delete a recording by deleting the image for the recording session that appears in the feedback tool's text box.   

6. Reviewers can modify or even delete parts of their feedback, such as a recording, before they submit their feedback.

	![Submit page on Feedback Client](_img/ALM_GF_ModifyFeedback.png)  

## Review feedback
1. Open the Feedback query. 

	![Feedback link on Queries page in the web portal](_img/ALM_GF_FeedbackQuery.png)  

	Or, create a feedback query with the parameters, as shown.

	![Editor view for flat-list feedback query](_img/ALM_GF_FeedbackQueryEditor.png)  

	You should see a list of all active feedback responses for your team project. 

	![Results view of feedback responses](_img/ALM_GF_FeedbackQueryResults.png)  

2. Open a response item and play or save a recording.

	![Play session recording link on Feedback Response work item form](_img/ALM_GF_SessionRecording.png)   

3. Or, you can create a bug or backlog item linked to the feedback. 

	![All Links tab on Feedback Response work item form](_img/ALM_GF_LinksTab.png)  

	With the feedback experience, you can engage stakeholders frequently to provide continuous feedback. Interacting with your working apps, your stakeholders can record rich and actionable data that the system automatically stores in the form of video or audio recordings, comments, and annotated screenshots. You can then take action on each feedback response by assigning it to a team member or creating bugs or backlog items to the linked feedback. 

## Related notes  

- You can [change the audio device or annotation tool](change-audio-device-annotation-tool.md) using the Settings icon change settings icon on the Microsoft Feedback Client.  
- If you access the Microsoft Feedback Client from a remote machine, you can [enable remote audio](enable-remote-audio-capture.md).  
- You can download the Feedback client from here: [Visual Studio download site](https://www.microsoft.com/download/details.aspx?id=48142).  
