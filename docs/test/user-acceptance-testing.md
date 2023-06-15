---
title: Assign tests for user acceptance testing
description: Create and run user acceptance tests in Azure Test Plans. Test to verify that each of the deliverables meets your users' needs.
ms.assetid: C52CDC6D-1B01-4A63-A265-B68C4E3DDE7D
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: conceptual
ms.author: sdanie
author: steved0x
ms.date: 12/06/2021
monikerRange: '<= azure-devops'
---

# Assign tests for user acceptance testing

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)] 

Today's faster development pace requires tools that 
enable test teams to more easily verify value based
on business requirements, and the high quality 
software demanded by customers.
This type of testing is often referred to as 
_user acceptance testing_.

Typically you create a Test Suite using a formal 
requirement work item type. However, today's 
agile teams often prefer to work from User Stories 
or Product Backlog items as their requirements.

[!INCLUDE [prerequisites-define](includes/prerequisites-stakeholder.md)] 

In addition, you must have already created work items and 
a test plan. If not, follow the steps provided in the following articles: 

- [Create your backlog](../boards/backlogs/create-your-backlog.md)
- [Create a test plan](create-a-test-plan.md)

<a name="search-assign"></a>

## Assign and invite testers

For user acceptance testing, you can assign multiple testers to a set of tests. You can even assign the stakeholders who created the business requirements as testers.

1. Select **Test plans** to see your test suites. You can select **Mine** to see your favorites or **All** to see all test plans. Select a test plan to open it.

1. Select a test suite and then select **More options** or right-click to view the context menu. Select **Assign testers to run all tests**.

1. In **Search users**, enter a name or partial name to find the testers you want. You can select multiple testers.

   ![Screenshot shows the option to search for users with two users already selected.](media/user-acceptance-testing/search-select-testers.png)

   > [!TIP]
   > You can select individual users who are a members of the Project Valid Users group.
   > You can't select user groups.

1. To notify testers, select **Send email**.

   ![Screenshot shows the option to send email selected and text boxes for subject and notes.](media/user-acceptance-testing/send-messages-testers.png)

1. Enter a message subject and note, as needed, and select **Ok**.
::: moniker range="<azure-devops"

   > [!NOTE]
   > For on-premises Azure DevOps, you must have an SMTP server configured for your deployment.
   > For more information, see [Configure an SMTP server](/azure/devops/server/admin/setup-customize-alerts)
::: moniker-end

If you have a large pool of potential testers, you might need to search for testers, as described above.

If you're assigning a tester to an individual test case, the search option appears in the context menu.
Select the **Execute** tab, then select a test case, and select **More options** or right-click to open the context menu.

![Screenshot shows a test case selected with the Assign tester menu option selected and Search users highlighted.](media/user-acceptance-testing/test-case-search-testers.png)

When you select **Assign tester**, use the search option to find a tester.

## Easily track results

A key principle of good user acceptance testing practice
is to minimize the effort required to determine whether a
requirement has been achieved. 
There are two ways you can do this: you can focus on
individual test runs and tests to see which failed, or
you can use the chart views that make it much easier to
track your test results. These views are accessible by all
members of your team.   

![Exploring test results](media/user-acceptance-testing/uat8.png)

> Note: The dashboard display shown here is also used
for other types of testing such as continuous testing.

If you don't see the data or information you expect in
the dashboard charts, verify that the columns in your
data have been added to the Tests view.
For details see [this blog post](https://devblogs.microsoft.com/devops/visual-studio-team-services-manual-testing-tips-charts-iterations-and-runs/).

## Related articles

- [Test objects and terms](test-objects-overview.md)
- [Collect diagnostic data while testing](collect-diagnostic-data.md)
- [Copy or clone test plans, test suites, and test cases](copy-clone-test-items.md)
- [FAQs for manual testing](reference-qa.yml)
