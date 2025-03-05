---
title: Manage change, Agile methods
titleSuffix: Azure DevOps
description: Learn about the tools and features available to manage change when you use Agile methods in Azure DevOps.
ms.subservice: azure-devops-cross-service
ms.topic: conceptual
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 03/05/2025
---

# Manage change

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Azure DevOps provides various tools and features to help you manage change effectively and efficiently, which is a crucial part of any project. This article provides an overview for managing change and maps Agile change management tasks to the tools that Azure DevOps supports.

## Identify the need for change

Several sources can contribute to necessary changes in your software development projects:

- Changing business and customer needs
- New priorities
- Evolving feature requirements due to new information or discovered dependencies
- Changes in resources and organizations
- Delays in development or testing
- Issues arising after deployment and during ongoing operations

## Minimize unnecessary change

To minimize unnecessary change, ensure the following:

- Clear requirements and acceptance criteria
- Clear project scope and priorities
- Agreed-upon change management process
- Accurate estimates on planned work
- Negotiated requests for new work
- Effective communication within the team when changes occur
- Input from stakeholders and customers on change requests
- Team members feel comfortable raising issues as they occur

## Implement Agile best practices for change management

Agile is a project management approach that works by breaking projects into short, iterative cycles called “sprints”. At its core, Agile is based on the assumption that circumstances change as a project develops. That’s why, in an Agile project, the planning, design, development, and testing cycles are never done. They continue to change as the project takes form.

To mitigate problems that arise from change, Agile project managers adopt many best practices. These practices are divided into the following categories: Control your process, Manage change at the product plan level, Manage your sprints, and Consider change criteria.

| **Category** | **Best practices** |
|--------------|--------------------|
| **Control your process** | - Meet both team and business objectives <br> - Minimize the number of approvals required to address changes <br> - Assist your teams in their continual improvement processes <br> <br> > [!TIP] <br> > Continuous improvement is a method to make sure that your processes, methods, and practices are as efficient and effective as possible. |
| **Manage change at the product plan level** | - Refine and prioritize the product plan and product backlog continuously <br> - Ensure customer needs are understood and properly scoped and communicated <br> - Analyze the product backlog for dependencies and risks <br> - Develop contingency plans <br> - Analyze and triage change requests <br> - Determine the scope effect of change requests on current and planned work <br> - Assess the risks of accepting or rejecting the change <br> - Use a light change control form as needed |
| **Manage your sprints** | - Ensure the acceptance criteria and requirements are well understood at the start of a sprint <br> - Minimize accepting changes after the start of the sprint, while still adhering to Agile principles <br> - Keep all stakeholders and teams involved as changes occur <br> - Control scope changes and minimize scope creep <br> - Protect your team against making changes to a project that are outside of the original agreed-upon scope <br> <br> > [!TIP] <br> > *What is Scope creep? Scope creep occurs when the deliverables or features of a project expand from what was originally defined, without a commensurate change in additional time or budget.* |
| **Consider change criteria** | Ask the following questions when you consider making a change: <br> - Does it serve the sprint goal? <br> - Is there a clear business value for the change? <br> - Upon release, do you plan to use the result of the scope change? <br> - What is the urgency for the change request? <br> - If new scope is added to the sprint backlog, is there something that can be removed? |

## Track change

Choose from several methods to track change, ranging from lightweight to robust:

- Track changes to requirements within the requirement work item through discussions, changes to acceptance criteria, or attachments.
- Add a *change* tag to work items to support tracking changes to the scope of work.
- Set up notifications to automatically communicate change within your team or organization.
- Add a bug that tracks a change in scope or another work.
- Add a change request work item type to formally track and log change requests to the product backlog.

With any of these methods, you can generate a query to list work items involved in change, and then review and triage the change with the team. Choose a tracking method that aligns with how you and your team monitor and report the scope of change.

| **Method** | **Details** |
|-------------|-------------|
| **Use the change request form** | Define a change request work item type, like the one in the following image for the Capability Maturity Model Integration (CMMI) process. <br> <br> > [!div class="mx-imgBorder"] <br> > ![Screenshot of a change request work item form.](media/manage-change/change-request-form.png) <br> <br> You can adopt this form or customize your own. You can also have change requests appear on your backlog along with other user stories or requirements. |
| **Define acceptance criteria** | Clearly describe what "done" means with acceptance criteria to verify whether a requirement or bug fix is fully implemented. Capture these criteria within the work item. Clear acceptance criteria help teams estimate work and develop tests to ensure the criteria are met. <br> <br> Specify acceptance criteria for individual requirements and sprints to ensure all team members understand the scope of work. |

## Monitor and report on changes

Teams can monitor changes through work item queries, team velocity charts, and sprint burndown and release burndown charts.

| **Method** | **Details** |
|-------------|-------------|
| **Work item queries** | With [queries](../boards/queries/using-queries.md), you can find and triage a list of change management requests or work items tagged with a change management tag. |
| **Team velocity and unplanned work** | The team [velocity chart](../report/dashboards/team-velocity.md) provides several pieces of information. This chart shows how much work was planned and how much was completed. Visually, you can determine how often work was added to a sprint after the sprint began. |
| **Sprint burndown and scope creep** | Another chart to review for scope creep is the [sprint burndown chart](../report/dashboards/burndown-guidance.md). With Azure Boards, you can review the sprint burndown charts for each sprint and each team to determine the degree of scope creep introduced into each sprint. |

## Get notified of changes

Azure DevOps provides a robust alert system, where project members can [set alerts for themselves, a team, or a project](../organizations/notifications/about-notifications.md). As changes occur to work items, code reviews, source control files, and builds, you can receive email notifications.

## Related articles

- [What is Agile?](/devops/plan/what-is-agile)
