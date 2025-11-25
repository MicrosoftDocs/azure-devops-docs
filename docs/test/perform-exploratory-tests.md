---
title: Install The Test And Feedback Extension
description: Install and set up the Test & Feedback browser extension to run exploratory tests on web apps, capture screenshots and recordings, and submit feedback to Azure DevOps.
ms.assetid: 1426e139-c7d4-4270-8db7-af7d6da80574
ai-usage: ai-assisted
ms.service: azure-devops-test-plans
ms.custom: UpdateFrequency3
ms.topic: how-to
ms.author: jeom
author: rohit-batra
monikerRange: '<= azure-devops'
ms.date: 11/24/2025
ms.update-cycle: 1095-days
---

# Install the Test & Feedback extension

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

The Test & Feedback extension helps teams run exploratory tests and collect feedback. Team members use it to submit bugs, capture screenshots and recordings, and contribute to product quality.

## Prerequisites

[!INCLUDE [prerequisites-run](includes/prerequisites-run.md)] 

<a name="browser-support"></a>

## Supported web browsers for the extension

You can install the Test & Feedback extension in Google Chrome, Microsoft Edge (Chromium), or Mozilla Firefox (version 50.0 and later).

[!INCLUDE [retirement-firefox-test-feedback-extension](includes/retirement-firefox-test-feedback-extension.md)]

Some features vary by browser version.

| Feature | Chrome | Microsoft Edge | Firefox |
| --- | ---: | ---: | ---: |
| Capture screenshots with inline annotations | ✔️ | ✔️ | ✔️ |
| Capture notes | ✔️ | ✔️ | ✔️ |
| Capture screen recordings | ✔️ | ✔️ | ❌ |
| Capture page load data | ✔️ | ✔️ | ❌ |
| Capture user actions log | ✔️ | ✔️ | ✔️ |
| Capture system information | ✔️ | ✔️ | ❌ |
| Create bugs | ✔️ | ✔️ | ✔️ |
| Create tasks and test cases | ✔️ | ✔️ | ✔️ |
| Create feedback requests | ✔️ | ✔️ | ✔️ |
| Export session report for sharing | ✔️ | ✔️ | ✔️ |
| End-to-end traceability for work items | ✔️ | ✔️ | ✔️ |
| Simplified bug and task tracking and triage | ✔️ | ✔️ | ✔️ |
| View and get insights from sessions | ✔️ | ✔️ | ✔️ |
| View similar existing bugs | ✔️ | ✔️ | ✔️ |
| Test app on devices using cloud providers such as Perfecto | ✔️ | ✔️ | ❌ |
| Manage feedback requests | ✔️ | ✔️ | ✔️ |


For for information, see the extension listing on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web).

<a name="installext"></a>

## Install the extension

1. Review the [supported browsers](#browser-support) and pick one.
2. Install the browser if you don't already have it, then open the browser.
3. Go to [Visual Studio Marketplace > Test & Feedback](https://marketplace.visualstudio.com/items?itemName=ms.vss-exploratorytesting-web) and select **Install**.

   ![Screenshot showing Visual Studio Marketplace, Test & Feedback extension, Install.](media/perform-exploratory-tests/get-started-01.png)

4. Follow the marketplace instructions to add the extension to your browser. You only need to install it once; the browser updates the extension automatically.

<a name="selectmode"></a>

## Choose an exploratory testing mode

1. Open the extension by selecting the Test & Feedback icon (![Test & Feedback](media/shared/exp-test-icon.png)) in your browser toolbar.

   ![Screenshot showing opening the extension.](media/perform-exploratory-tests/open-extension.png)

2. Choose Connected or Standalone mode.

   ![Screenshot showing choosing connected mode.](media/perform-exploratory-tests/getstarted-06.png)

   **Connected mode** (use when you want integrated tracking and traceability)
   - Sign in to Azure DevOps and connect to the project or team that needs feedback.
   - Users with **Basic** access get full capture and create capabilities to submit bugs, tasks, and test cases.
   - Users with **Stakeholder** access can capture feedback and create most work items (test cases are restricted).
   - Connected mode provides end-to-end traceability, session insights, and streamlined triage.

   **Standalone mode** (use when you don't need Azure DevOps integration)
   - Capture screenshots, notes, and recordings locally.
   - Create bugs and export a session report for sharing without signing in.

If you have trouble connecting, see [Troubleshoot connection](../user-guide/troubleshoot-connection.md).

## Next steps

> [!div class="nextstepaction"]
> [Use the Test & Feedback extension in Connected mode](connected-mode-exploratory-testing.md)

## Related content

* [FAQs for manual testing](reference-qa.yml#tandfext)
