---
title: Request feedback 
titleSuffix: Azure DevOps Services & TFS 
description: Ask reviewers to provide videos, screenshots, type-written comments, and ratings on your application developed using Azure DevOps Services & Team Foundation Server  
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.assetid: b8fc1618-6501-41dd-86a6-78290bb84dcd  
ms.manager: douge
ms.author: kaelli
monikerRange: '>= tfs-2013'
ms.date: 08/15/2017
---

# Get feedback

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

> [!NOTE]  
> **Feature availability**: For Azure DevOps Services and TFS 2015.1 or later versions, you can request feedback with a [Basic license](https://visualstudio.microsoft.com/pricing/visual-studio-online-feature-matrix-vs). For Team Foundation Server (TFS) 2015 or earlier versions, you need to belong to the [Advanced access level](../../organizations/security/change-access-levels.md) to request feedback. 
>
>In addition, you can now [request feedback from stakeholders for web apps using the Test &amp; Feedback extension](../../test/request-stakeholder-feedback.md). For desktop apps, you must use the feedback request form documented in this topic and stakeholders must reply using the Microsoft Feedback Client. 
 
Once you have working software, you're ready to get feedback from your stakeholders. You can ask reviewers to provide videos, screenshots, type-written comments, and ratings. Their feedback is captured into work items that you can review and use to create a bug or suggest a new backlog item. 

Before requesting feedback, make sure that you [provide stakeholders who'll you request feedback from the necessary permissions](give-permissions-feedback.md).

## Request feedback
To request feedback, you fill out a form that generates an email request to your stakeholders.

1. From the web portal home page, start a feedback request. 

	![Request feedback link in Homepage](_img/request-feedback-link.png)  

	> [!NOTE]  
	> If your on-premises TFS team project was upgraded from TFS 2010 or earlier version, you may have to update your team project using the [Configure Features wizard](../../reference/configure-features-after-upgrade.md). 

	If the following message appears, you need to [configure an SMTP server](/tfs/server/admin/setup-customize-alerts).

	![Error message about email notifications not configured](_img/ALM_GF_SMTPServer.png)  

2. Add the feedback reviewers. If you don't see the names you want in the browse list, [grant them permissions to provide feedback](give-permissions-feedback.md).

	![Select stakeholders on Request Feedback form](_img/ALM_GF_FeedbackReviewers.png)  

3. Tell your reviewers how to run the app they'll be reviewing.

	![Launch application instructions rich-text area on Request Feedback form](_img/ALM_GF_TellStakeholders.png)  

4. For each area of interest, decide what type of feedback you want. Set the context for the reviewers by providing enough background information. Add up to four more areas of interest with the **add feedback item** link. 

	![Feedback focus textbox on Request Feedback form](_img/ALM_GF_FocusFeedback.png)  

5. Send the request. 

	![Send Button on Request Feedback form](_img/ALM_GF_SendRequest.png)  

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
- You can only request feedback from a team project hosted on Azure DevOps Services or an on-premises TFS. If you don't have a team project yet, create one in [Azure DevOps Services](../../organizations/accounts/set-up-vs.md) or set one up in an [on-premises TFS](../../organizations/projects/create-project.md).  
- You can [change the audio device or annotation tool](change-audio-device-annotation-tool.md) using the Settings icon change settings icon on the Microsoft Feedback Client.  
- If you access the Microsoft Feedback Client from a remote machine, you can [enable remote audio](enable-remote-audio-capture.md).  
- You can download the Feedback client from here: [Visual Studio download site](https://www.microsoft.com/download/details.aspx?id=48142).  
