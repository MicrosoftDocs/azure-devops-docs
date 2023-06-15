---
title: TFVC code review in Visual Studio
titleSuffix: Azure Repos
description: Request code review, respond to review requests, and suspend and resume work for Team Foundation Version Control (TFVC) in Visual Studio.
ms.assetid: 115cc8ee-e3b3-4bb4-a50f-604a75d52a8e
toc: show
ms.service: azure-devops-repos
ms.topic: tutorial
ms.date: 11/08/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# TFVC code review in Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can use Visual Studio to request code reviews, respond to review requests, and suspend and resume work for Team Foundation Version Control (TFVC). 

If you're using Git source control instead of TFVC, use a [pull request](../../repos/git/pull-requests.md) for code reviews.

[!INCLUDE [temp](includes/note-my-work-code-review-support.md)]

## Prerequisites

Before you ask for a code review, make sure you've [shared your code in TFVC](share-your-code-in-tfvc-vs.md).

## Request a code review

Before you check in code, you can use Visual Studio to ask someone else from your team to review it. Your request appears in the recipient's **Team Explorer** window on the **My Work** page.

To request a code review, before you check in a change:

1. Go to the **My Work** page in **Team Explorer**.

   ![Screenshot of My Work from the Team Explorer home page.](media/get-code-reviewed-vs/team-explorer.png) 

1. On the **My Work** page, select **Request Review**.

   ![Screenshot of Request Review link from the Team Explorer My Work page.](media/get-code-reviewed-vs/my-work.png)

1. On the **New Code Review** page, enter the reviewer name or names and a subject for the code review, and then select **Submit Request**.

   ![Screenshot of the Submit Request button and filled out New Code Review page in Team Explorer.](media/get-code-reviewed-vs/new-code-review.png)

1. You can suspend your work so you can work on something else while you wait to hear back from the code review. On the **My Work** page of **Team Explorer**, select **Suspend** in the **In Progress Work** section, optionally enter a different name for the suspended work, and then select **Suspend**.

   ![Screenshot of the Suspend link on the My Work page of Team Explorer.](media/get-code-reviewed-vs/suspend.png)

## Respond to the code review request

Requested reviewers see the code review request in **Team Explorer**, look at the changes, and give their feedback. To respond to a review request:

1. On the **My Work** page of **Team Explorer**, locate the review request.

   ![Screenshot of a review request on the My Work page of Team Explorer.](media/get-code-reviewed-vs/review-request.png)

1. To open the code review, double-click the request, or right-click it and select **Open**.

1. From the **Code Review** page, you can select the changed files to review the differences.

   ![Screenshot of the file link on the Code Review page.](media/get-code-reviewed-vs/code-review.png)

1. To add comments, in the difference window, select the code to comment on, right-click, and select **Add comment**. You can also press Ctrl+Shift+K.

   ![Screenshot showing a comment added and the Send Comments button.](media/get-code-reviewed-vs/comment.png)

1. Select **Send Comments** to send the comments.

You can get email alerts for code reviews, too. To sign up, select **Project Alerts** under **Team Project** on the **Settings** page in **Team Explorer**.

![Screenshot showing the Project Alerts link on the Settings page of Team Explorer.](media/get-code-reviewed-vs/settings.png)

## Update the code based on the review feedback

When you get the code review results, you can resume work on the project.

1. On the **My Work** page in **Team Explorer**, select **Resume** under **Suspended Work**.

   ![Screenshot showing the Resume link on the My Work page of Team Explorer.](media/get-code-reviewed-vs/resume.png)

   Your changes are unshelved and the windows you had opened are restored, so you can incorporate the review feedback.

1. On the **Code Review** page, you can close the review by selecting **Close Review** and then selecting **Complete** if the review is finished, or **Abandon** if you don't plan to finish it.

## Next steps

- [Create your backlog](../../boards/backlogs/create-your-backlog.md)
