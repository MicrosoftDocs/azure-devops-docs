---
title: Get your code reviewed with Visual Studio
titleSuffix: Azure Repos
description: Get a code review from your team using Visual Studio
ms.assetid: 115cc8ee-e3b3-4bb4-a50f-604a75d52a8e
toc: show
ms.technology: devops-code-tfvc
ms.topic: tutorial
ms.date: 12/17/2021
monikerRange: '<= azure-devops'
---


# Get your code reviewed with Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Before you check in your code, you can use Visual Studio to ask someone else from your team to review it. Your request will show up in his Team Explorer, in the my work page.

To ask for a code review, make sure you have [shared your code in TFVC](share-your-code-in-tfvc-vs.md).

(Are you using Git to share your code? If so, then use a [pull request](../../repos/git/pull-requests.md).)

## Request a code review

Jamal has changed the border color in the Hello World app, and he asks Johnnie to review the change.

1. Before he checks in the change, Jamal goes to the my work page.

   ![My Work from the Team Explorer home page](media/get-code-reviewed-vs/IC682169.png) 

2. He requests a review.

   ![Request code review link from the Team Explorer My Work page](media/get-code-reviewed-vs/IC682170.png)

3. He submits a request to Johnnie.

   ![Submit request button on the filled out new code review page in the teamexplorer](media/get-code-reviewed-vs/IC682171.png)

4. Jamal suspends his work on Hello World so that he can work on something else while he waits to hear back from Johnnie.

   ![Suspend link in the my work page of the Team Explorer](media/get-code-reviewed-vs/IC682757.png)

## Respond to the code review request

Johnnie will see the code review request in the Team Explorer, look at the changes, and give Jamal his feedback.

1. Johnnie opens the my work page.

   ![My work in the Team Explorer home page](media/get-code-reviewed-vs/IC682758.png)

2. He sees Jamal's code review request.

   ![The code review request in the my work page](media/get-code-reviewed-vs/IC683034.png)

   You can get email alerts for code reviews, too. 
   If you aren't getting them, you can sign up in the Team Explorer settings page.

   ![Project alerts link in the settings page of the Team Explorer](media/get-code-reviewed-vs/IC682760.png)

3. Johnnie opens the code review request.

   ![Open the review from the context menu on the review request](media/get-code-reviewed-vs/IC683035.png)

4. He accepts the review.

   ![Accept the code review request](media/get-code-reviewed-vs/IC683036.png)

5. He opens the file that Jamal changed.

   ![The file link (Site.css) in the code review page](media/get-code-reviewed-vs/IC683037.png)

6. Johnnie sees that Jamal changed the color to #ddd. He selects the code in the difference window and adds a comment (Keyboard: Ctrl + Shift + K).

   ![Comment added to Site.css using the difference window toolbar button](media/get-code-reviewed-vs/IC682763.png)

7. He suggests a different color instead and sends the comment to Jamal.

   ![Comment added and sent using the send comments button in the code review page in Team Explorer](media/get-code-reviewed-vs/IC682764.png)

8. Johnnie completes the review by selecting "Send & Finish".

## Update the code based on the review feedback

1. When Jamal gets a response from Johnnie, he resumes the work on Hello World.

   ![Resume link in the my work page of the Team Explorer](media/get-code-reviewed-vs/IC683038.png)

2. His changes are unshelved and the windows he had opened are restored, so he can incorporate the review feedback.

   ![Work environment restored after resuming work](media/get-code-reviewed-vs/IC683039.png)

3. Jamal closes the review by selecting "Close Review".

## Next steps

> [!div class="nextstepaction"]
> [Create your backlog](../../boards/backlogs/create-your-backlog.md)
