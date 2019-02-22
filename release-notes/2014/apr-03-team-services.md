---
title: Visual Studio Online General Availability
description: VSTS release notes for April 3 2014
ms.prod: devops
ms.technology: devops-release-notes
ms.manager: douge
ms.assetid: bfe41b66-a230-42f6-b0f0-07f2b164496c
ms.date: 06/01/2016
ms.author: douge
author: yukom
---

#Visual Studio Online General Availability

##General Availability of Visual Studio Online

Today we’re announcing the general availability (GA) of Visual Studio Online, an important milestone in our journey as a service. GA of a service is the moral equivalent of the final release of version 1 of a “boxed product”—it marks the transition from preview to full commercial service. Of course, it’s been a journey with many steps along the way and there will be many more milestones ahead as we add new services, new features, etc.

You’re probably wondering how this impacts your account and team projects living on the service. Let me provide a few details that I think will help…

###Early adopter

First, it’s important to note that the “early adopter” period of Visual Studio Online is nearing its end. If you’ve signed up for the service prior to December 13 th of 2013, some of your users are likely assigned “early adopter licenses” giving them access to the full set of features on Visual Studio Online, even features reserved for paid plans and MSDN subscribers. This is what we call an “early adopter”.

On May 7 th, 2014, the early adopter period will end. Don’t worry, this still means that you have 5 free Basic users licenses associated with your account, but for additional users you’ll need to purchase and assign a different user license. You can learn about the user licenses available to you [here](https://visualstudio.microsoft.com/products/visual-studio-online-overview-vs). If you’ve still got questions, don’t hesitate to jump over to the [FAQ](https://visualstudio.microsoft.com/support/early-adopter-faq-vs) for the early adopter program.

###SLA

Part of our GA announcement is the addition of a financially-backed SLA for our services. We’ve made major investments to Visual Studio Online over the last few months to ensure it’s the best platform for you to use in planning, tracking, building, testing and operating your next software project. We’ve announced our general availability and backed it with an SLA, because we stand behind the reliability of our service and can promise to refund customers if they experience outages.

-We guarantee at least 99.9% availability of Visual Studio Online for users under each **Visual Studio Online user plan** to access the associated Visual Studio Online account.
-We guarantee at least 99.9% availability to execute build operations using the paid **Visual Studio Online Build Service**.
-We guarantee at least 99.9% availability to execute load testing operations using the paid **Visual Studio Load Testing Service**.

All availability is calculated over a monthly billing cycle. For more details, please visit: [http://www.windowsazure.com/support/legal/sla/](http://www.windowsazure.com/support/legal/sla/).

###Data Export Window

Many of our users started out with VS Online before we’d painted much of a picture of what the future would look like. Some group of them may want to take this transition to GA as an opportunity to reconsider their devops configuration and move to an on-premises TFS server. Starting today, we’re enabling a data export window for any customer that has been on the service and wants to “opt out”. For the next 6 weeks, you have the option to export your data from Visual Studio Online in a format that can be imported to Team Foundation Server 2013 Update 2. In order to get access to the export capability, contact customer support ([vsoexportsupport@microsoft.com](mailto:vsoexportsupport@microsoft.com)) and we’ll be sure to get it switched on right away and provide you instructions on what to do.

##Application Insights Limited Preview

Application Insights, first [announced](https://visualstudio.microsoft.com/articles/news/2013/nov-13-team-services) back in November of 2013, is moving to “Limited Preview” and an invitation code is no longer required to try it out. With this change you can login to Visual Studio Online and start using Application Insights by selecting “Try Application Insights” tile.

![Visual Studio Online: Try Application Insights](_img/4_3_01.png)

##Shared Parameters for Test Cases

Finally, we’ve turned on a new feature today that gives you the ability to re-use Test Case parameters. If you’re like me, you often want to run a test case multiple times, each time with different sets of test data. You can do this by adding parameter names to test steps and specifying parameter values in the test case. But, if you use the same parameter values in multiple test cases, you have to manage all such test cases individually, one at a time. Argh. This can lead to a lot of overhead and turn into a maintenance nightmare. With today’s deployment, you can use “Shared Parameters” to consolidate similar parameter data in a single location and reference it across multiple Test Cases. Moreover, when you update shared parameters, it’s reflected in all referenced Test Cases automatically. To get started, convert your existing local parameters in test cases to shared parameters or create new ones by navigating to the Parameters tab in Test hub.

![convert your existing local parameters to shared parameters](_img/4_3_02.png)

![Creating new shared parameters](_img/4_3_03.png)

That’s all the news for today. Thank you to each and every one of you that has given us feedback on the service and helped us reach today’s important milestone!

Thanks,

Brian Harry


























