---
ms.technology: devops-agile
ms.prod: devops
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/21/2020
---



---
:::row:::
   :::column span="":::
      **Field**
   :::column-end:::
   :::column span="3":::
      **Definition**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Impact Assessment](/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi)
   :::column-end:::
   :::column span="3":::
      The customer impact of not implementing this requirement. You might include details from the Kano model about whether this requirement is in the surprise, required, or obvious categories. You capture this information in the rich-text HTML field which corresponds to Impact Assessment.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Requirement Type](/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi)(Required)  
   :::column-end:::
   :::column span="3":::
      The kind of requirement to implement. You can specify one of the following values:  
      - **Business Objective**  
      - **Feature**  
      - **Functional**  
      - **Interface**  
      - **Operational**  
      - **Quality of Service**  
      - **Safety**  
      - **Scenario**  
      - **Security**  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Start Date/Finish Date](/azure/devops/boards/queries/query-by-date-or-current-iteration)  
   :::column-end:::
   :::column span="3":::
      The target dates for when the work will start or finish. These fields are filled in by [Microsoft Project](/azure/devops/boards/backlogs/office/create-your-backlog-tasks-using-project) when you use it for scheduling.  
      You can specify work in hours or in days. There are no inherent time units associated with this field.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Triage](/azure/devops/boards/queries/planning-ranking-priorities) (Required) </p>
   :::column-end:::
   :::column span="3":::
      Indicates the type of triage decision that is pending for the work item. Use this field when the work item is in the *Proposed* state and specify one of the following values: **Pending** (default), **More Info**, **Info Received**, or **Triaged**.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Blocked](/azure/devops/boards/queries/planning-ranking-priorities)  
   :::column-end:::
   :::column span="3":::
      Indicates whether a team member is prevented from making progress toward implementing a requirement or task or resolving a bug, change request, or risk. If an issue has been opened to track a blocking problem, you can create a link to the issue. You can specify **Yes** or **No** (default).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Committed](/azure/devops/boards/queries/planning-ranking-priorities) (Required)  
   :::column-end:::
   :::column span="3":::
      Indicates whether the requirement is committed in the project or not. You can specify **Yes** or **No** (default).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Integrated In](/azure/devops/boards/queries/build-test-integration)
   :::column-end:::
   :::column span="3":::
      Product build number that incorporates the requirement, change request, or fixes a bug.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [User Acceptance Test](/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi) (Required)  
   :::column-end:::
   :::column span="3":::
      The status of the user acceptance test for a requirement. You can specify one of the following values:
      - **Pass**  
      - **Fail**  
      - **Not Ready**  
      - **Ready**  
      - **Skipped**  
      - **Info Received**  
      Specify **Not Ready** when the requirement is in the Active state, and you specify **Ready** when the requirement is in the Resolved state.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      [Subject Matter Experts](/azure/devops/boards/work-items/guidance/cmmi/guidance-requirements-field-reference-cmmi)
   :::column-end:::
   :::column span="3":::
      The names of team members who are familiar with the customer area that this requirement represents.
   :::column-end:::
:::row-end:::
---