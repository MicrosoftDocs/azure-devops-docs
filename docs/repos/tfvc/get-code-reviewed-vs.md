---
title: Get your code reviewed with Visual Studio
titleSuffix: Azure Repos
description: Get a code review from your team using Visual Studio
ms.assetid: 115cc8ee-e3b3-4bb4-a50f-604a75d52a8e
toc: show
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: tutorial
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Get your code reviewed with Visual Studio

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Before you check in your code, you can use Visual Studio to ask someone else from your team to review it. Your request will show up in his team explorer, in the my work page.

To ask for a code review, make sure you have [shared your code in TFVC](share-your-code-in-tfvc-vs.md).

(Are you using Git to share your code? If so, then use a [pull request](../../repos/git/pull-requests.md).)

## Request a code review

Jamal has changed the border color in the Hello World app, and he asks Johnnie to review the change.

0. Before he checks in the change, Jamal goes to the my work page.

 ![My Work from the team explorer home page](_img/get-code-reviewed-vs/IC682169.png) 

0. He requests a review.

 ![Request code review link from the team explorer My Work page](_img/get-code-reviewed-vs/IC682170.png)

0. He submits a request to Johnnie.

 ![Submit request button on the filled out new code review page in the teamexplorer](_img/get-code-reviewed-vs/IC682171.png)

0. Jamal suspends his work on Hello World so that he can work on something else while he waits to hear back from Johnnie.

 ![Suspend link in the my work page of the team explorer](_img/get-code-reviewed-vs/IC682757.png)

## Respond to the code review request

Johnnie will see the code review request in the team explorer, look at the changes, and give Jamal his feedback.

0. Johnnie opens the my work page.

 ![My work in the team explorer home page](_img/get-code-reviewed-vs/IC682758.png)

0. He sees Jamal's code review request.

 ![The code review request in the my work page](_img/get-code-reviewed-vs/IC683034.png)

 You can get email alerts for code reviews, too. 
If you aren't getting them, you can sign up in the team explorer settings page.

 ![Project alerts link in the settings page of the team explorer](_img/get-code-reviewed-vs/IC682760.png)

0. Johnnie opens the code review request.

 ![Open the review from the context menu on the review request](_img/get-code-reviewed-vs/IC683035.png)

0. He accepts the review.

 ![Accept the code review request](_img/get-code-reviewed-vs/IC683036.png)

0. He opens the file that Jamal changed.

 ![The file link (Site.css) in the code review page](_img/get-code-reviewed-vs/IC683037.png)

0. Johnnie sees that Jamal changed the color to #ddd. He selects the code in the difference window and adds a comment (Keyboard: Ctrl + Shift + K).

 ![Comment added to Site.css using the difference window toolbar button](_img/get-code-reviewed-vs/IC682763.png)

0. He suggests a different color instead and sends the comment to Jamal.

 ![Comment added and sent using the send comments button in the code review page in team explorer](_img/get-code-reviewed-vs/IC682764.png)

## Update the code based on the review feedback

0. When Jamal gets a response from Johnnie, he resumes the work on Hello World.

 ![Resume link in the my work page of the team explorer](_img/get-code-reviewed-vs/IC683038.png)

0. His changes are unshelved and the windows he had opened are restored, so he can incorporate the review feedback.

 ![Work environment restored after resuming work](_img/get-code-reviewed-vs/IC683039.png)

## Next steps

> [!div class="nextstepaction"]
> [Create your backlog](../../boards/backlogs/create-your-backlog.md)
