---
title: Capability Maturity Model Integration (CMMI), background notes
titleSuffix: Azure Boards
description: Background notes on the Capability Maturity Model Integration (CMMI) for Development 
ms.service: azure-devops-boards
ms.assetid: 77e18a8c-e101-4210-9755-33a7c99b2593
ms.topic: conceptual
ms.author: chcomley 
author: chcomley  
monikerRange: '<= azure-devops'
ms.date: 10/08/2025
ai-usage: ai-assisted
---

# Background to Capability Maturity Model Integration (CMMI)

[!INCLUDE [version-lt-eq-azure-devops](../../../../includes/version-lt-eq-azure-devops.md)]

The definitive guide to Capability Maturity Model Integration (CMMI) for Development is published by the Software Engineering Institute as "CMMI: Guidelines for Process Integration and Product Improvement." That book describes CMMI-DEV (version 1.3), one of the models in the CMMI product family. "CMMI Distilled: A Practical Introduction to Integrated Process Improvement" is a concise, accessible companion for many readers.

> [!NOTE]
> This article bases its guidance on CMMI version 1.3 and the CMMI process that Azure DevOps supports. We don't plan to update this content to later CMMI versions at this time.

## Historical notes

CMMI began in 1987 as the Capability Maturity Model (CMM), a Software Engineering Institute (SEI) project at Carnegie Mellon University. The original CMM for Software, first published in 1991, started as a checklist of critical success factors. The model also drew on research from IBM and quality pioneers such as Philip Crosby and W. Edwards Deming. Crosby's Manufacturing Maturity Model inspired the name Capability Maturity Model and the five-level Staged Representation.

Applied initially in defense programs, CMM grew, diversified, and underwent revisions. The proliferation of different models led to a two‑year, government-funded effort to create a single, extensible framework that integrated systems engineering, software engineering, and product development. More than 200 industry and academic experts contributed to that effort; the resulting framework is CMMI.

CMMI-DEV is a model rather than a prescriptive process. It defines organizational behaviors and goals that commonly lead to better software engineering and systems engineering outcomes. People often misunderstand three questions about the model: Why use a model? What is its purpose? How should you apply it? The guidance below addresses those questions.

<a name="Why"></a>

## Why use a model?

Improvement efforts need a model that describes how your organization works, which functions it requires, and how those functions interact. A model gives you a shared language and a structure for discussing what to improve.

A model provides several concrete benefits:

- A common framework and language that improves communication.
- Decades of experience captured as guidance.
- A way to keep the larger picture in mind while focusing improvement work.
- Trainer and consultant support in many markets.
- An external reference that helps resolve disagreements by using agreed standards.

<a name="What"></a>

## What is the purpose of the CMMI model?

CMMI helps you assess process maturity and guides process improvement to produce more predictable results and higher-quality products. It also provides a structured approach to risk management and to measuring how well an organization manages risk. The ability to manage risk contributes directly to an organization’s capacity to deliver high-quality results.

CMMI doesn't guarantee economic performance. Higher-maturity organizations might manage risk better and become more predictable, but they can also become risk-averse or bureaucratic, which can slow innovation and increase lead times. Lower-maturity organizations sometimes innovate more but operate in a more chaotic, less predictable way; successes there can depend on individual heroics rather than repeatable processes.

<a name="How"></a>

## How should you use the CMMI model?

Use CMMI as the foundation for a process-improvement program; treat appraisals as one way to measure progress rather than the primary goal. Avoid treating the model as a prescriptive process you must follow verbatim. CMMI's building blocks are process areas that define goals and common activities used to meet them (for example, Process and Product Quality Assurance or Configuration Management). Remember that a process area isn't the same as a process: a single process can span multiple process areas, and a process area can involve multiple processes.

CMMI-DEV provides two complementary representations:

- The Staged Representation groups the 22 process areas into five maturity levels and yields a single maturity level for an organization. Managers and executives commonly use this level as a simple indicator of organizational capability.
- The Continuous Representation assesses capability per process area, letting you focus improvement where it delivers the most business value. Continuous assessments yield capability profiles rather than a single number; you can map continuous results to the staged levels when needed.

![Conceptual image that shows the CMMI Staged Representation](media/cmmi_stagedrep_1.png)

Levels 4 and 5 represent higher maturity. Higher-maturity organizations tend to apply quantitative management and optimization practices, show lower process variability, and use leading indicators as part of statistically defensible management. These behaviors can make such organizations more predictable and faster to respond to new information—provided bureaucracy doesn't stifle responsiveness. Conversely, low-maturity organizations often rely on heroic efforts when problems occur.

The Continuous Representation models capability within each of the 22 process areas, which lets organizations tailor improvement to the process areas that provide the greatest business benefit. Many practitioners prefer Continuous when they want focused, economically driven improvement instead of pursuing a single maturity-level target.

![Conceptual image that shows the CMMI Continuous Representation](media/cmmi_contrepresentation.png)

Using the Staged Representation as a program goal can backfire if implementers treat the maturity level as the objective and then design processes and infrastructure just to pass an appraisal. Measurable, sustained improvement—not a number—should remain the objective of any improvement initiative.

Some consulting firms focus primarily on the Continuous Representation. That approach avoids artificial maturity targets and tends to prioritize improvements that deliver measurable business value, increasing the chance of positive feedback and a virtuous cycle of sustained improvement.

<a name="Elements"></a>

## Elements of the CMMI model

The CMMI-DEV model defines 22 process areas in version 1.3. The table below lists those process areas:

|Acronym|Process Area|
|-------------|------------------|
|CAR|Causal Analysis & Resolution|
|CM|Configuration Management|
|DAR|Decision Analysis & Resolution|
|IPM|Integrated Project Management|
|MA|Measurement & Analysis|
|OID|Organizational Innovation & Deployment|
|OPD|Organizational Process Definition|
|OPF|Organizational Process Focus|
|OPP|Organizational Process Performance|
|OT|Organizational Training|
|PI|Product Integration|
|PMC|Project Monitoring & Control|
|PP|Project Planning|
|PPQA|Process & Product Quality Assurance|
|QPM|Quantitative Project Management|
|RD|Requirements Definition|
|REQM|Requirements Management|
|RSKM|Risk Management|
|SAM|Supplier Agreement Management|
|TS|Technical Solution|
|VER|Verification|
|VAL|Validation|

<a id="staged-representation"></a>

In the Staged Representation, process areas map to maturity levels; the illustration below highlights that mapping.

![Conceptual image that shows stage representation with process areas mapped](media/cmmi_detailstagedrep.png)

In the Continuous Representation, process areas map into functional groupings; the illustration below highlights that mapping.

![Conceptual image that shows continuous representation with process areas mapped](media/cmmi_detailcontrep.png)

Each process area includes required, expected, and informative components. Required components (specific and generic goals) determine what an appraisal requires. Expected components (specific and generic practices) guide implementers but can be replaced by equivalent practices if justified to an appraiser. Informative components (for example, typical work products and subpractices) provide more detail to help organizations get started with improvement.

Only the specific and generic goals are strictly required for appraisal; expected and informative components exist to guide implementation. CMMI's example practices and work products historically come from large space and defense projects; they might not reflect your organization's project types or newer industry trends such as Agile methods. Adapt the model to fit your context and objectives.

## Related content

- [CMMI process](../cmmi-process.md)
- [Software Engineering Institute Releases Version 1.3 of CMMI Product Suite](https://www.sei.cmu.edu/news-events/news/article.cfm?assetid=509086)
- [CMMI for Development: Guidelines for Process Integration and Product Improvement, Third Edition](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=31054)
- [CMMI for Development: Guidelines for Process Integration and Product Improvement (SEI Series in Software Engineering)](https://www.amazon.com/CMMI-Development-Integration-Improvement-Engineering/dp/0321711505)
- [What is Agile Development?](/devops/plan/what-is-agile-development)
