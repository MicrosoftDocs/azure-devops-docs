---
title: Capture a browser trace for troubleshooting
titleSuffix: Azure DevOps
description: Capture network information from a browser trace to help troubleshoot issues with Azure DevOps.
ms.assetid: 
ms.author: chcomley
author: chcomley
ms.topic: how-to
ms.date: 01/07/2025
monikerRange: '<= azure-devops'
---

# Capture a browser trace for troubleshooting

If you're troubleshooting an issue with Azure DevOps, and you need to contact Microsoft support, you might want to first capture some additional information. For example, it can be helpful to share a browser trace, a step recording, and console output. This information can provide important details about what exactly is happening in Azure DevOps when your issue occurs.

> [!WARNING]
> Browser traces often contain sensitive information and might include authentication tokens linked to your identity. Remove any sensitive information before sharing traces with others. Microsoft support uses these traces for troubleshooting purposes only.

You can capture this information from Microsoft Edge or Google Chrome. Steps for each browser are shown as follows.

## Use Microsoft Edge

The following steps show how to use the developer tools in Microsoft Edge. For more information, see [Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium).

> [!NOTE]
> The screenshots in this article show the DevTools in Focus Mode with a vertical **Activity Bar**. Depending on your settings, your configuration might look different. For more information, see [Simplify DevTools using Focus Mode](/microsoft-edge/devtools-guide-chromium/experimental-features/focus-mode).

1. In your browser, select **F12** > **Open DevTools**.
2. Select :::image type="icon" source="../media/icons/actions-icon.png" border="false"::: **more actions**.

   :::image type="content" source="media/capture-browser-trace/microsoft-edge-select-more-actions.png" alt-text="Screenshot shows three dots highlighted for selection, more actions.":::

3. Select **Settings**.

   :::image type="content" source="media/capture-browser-trace/microsoft-edge-settings.png" alt-text="Screenshot shows highlighted Settings selection.":::

4. Under **Preferences**, scroll to the **Network** section and enter a check in the box next to **Allow to generate HAR with sensitive data**.

   :::image type="content" source="media/capture-browser-trace/microsoft-edge-network-preferences.png" alt-text="Screenshot shows checkmark next to Microsoft Edge network preference, Allow to generate HAR with sensitive data.":::

5. Close the settings menu.
6. Ensure the **Network** tab is set to **Preserve log** and is capturing traffic.

   :::image type="content" source="media/capture-browser-trace/microsoft-edge-network-tab-check-preserve-log.png" alt-text="Screenshot shows check next to Preserve log in Network tab in Microsoft Edge.":::

7. Ensure you're signed in to Azure DevOps. It's important to sign in _before_ you start the trace so that the trace doesn't contain sensitive information related to your account.
8. Go to the step before where the issue occurs.
9. Start recording the steps you take in Azure DevOps, using [Steps Recorder](https://support.microsoft.com/windows/record-steps-to-reproduce-a-problem-46582a9b-620f-2e36-00c9-04e25d784e47).
10. When you're done recording, long press the export button so that it shows a menu. If you only do a short press, a sanitized version of the HAR gets exported, which is missing information needed for troubleshooting.
11. Select **Export HAR (with sensitive data)**.	 

   :::image type="content" source="media/capture-browser-trace/microsoft-edge-export-har-with-sensitive-data.png" alt-text="Screenshot shows highlighted selection Export HAR with sensitive data in Microsoft Edge.":::

12. (Optional) Uncheck the "Allow to generate HAR with sensitive data" box when you're done.

You have a complete HAR file with the necessary data for troubleshooting.

## Use Google Chrome

The following steps show how to use the developer tools in Google Chrome. For more information, see [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools).

1. In your browser, select **F12**.
2. Select :::image type="icon" source="../media/icons/gear-icon.png" border="false"::: **Settings**.

   :::image type="content" source="media/capture-browser-trace/google-chrome-gear.png" alt-text="Screenshot shows a gear highlighted for selection, more actions.":::

3. Under Preferences, scroll to the Network section, and enter a check in the box next to **Allow to generate HAR with sensitive data**.

   :::image type="content" source="media/capture-browser-trace/google-chrome-network-preferences.png" alt-text="Screenshot shows checkmark next to Google Chrome network preference, Allow to generate HAR with sensitive data.":::

4. Close the settings menu.
5. Ensure the **Network** tab is set to **Preserve log** and is capturing traffic.

   :::image type="content" source="media/capture-browser-trace/google-chrome-network-tab-check-preserve-log.png" alt-text="Screenshot shows check next to Preserve log in Network tab in Google Chrome.":::

6. Ensure you're signed in to Azure DevOps. It's important to sign in _before_ you start the trace so that the trace doesn't contain sensitive information related to your account.
7. Go to the step before where the issue occurs.
8. Start recording the steps you take in Azure DevOps, using [Steps Recorder](https://support.microsoft.com/windows/record-steps-to-reproduce-a-problem-46582a9b-620f-2e36-00c9-04e25d784e47).
9. When you're done recording, long press the export button so that it shows a menu. If you only do a short press, a sanitized version of the HAR gets exported, which is missing information needed for troubleshooting.
10. Select **Export HAR (with sensitive data)**.	 

   :::image type="content" source="media/capture-browser-trace/google-chrome-export-har-with-sensitive-data.png" alt-text="Screenshot shows highlighted selection, Export HAR (with sensitive data), in Google Chrome.":::

11. (Optional) Uncheck the "Allow to generate HAR with sensitive data" box when you're done.

You have a complete HAR file with the necessary data for troubleshooting.
