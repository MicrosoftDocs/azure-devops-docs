---
ms.prod: vs-devops-alm
ms.technology: vsts-sub-extend
ms.service: vsts-extend
title: An index for building extensions for Visual Studio Team Services and Team Foundation Server
description: Index of building extensions for Visual Studio Team Services and Team Foundation Server
ms.assetid: 153aa519-6233-4292-8eac-44de15f2d3dd
ms.manager: douge
ms.author: elbatk
ms.date: 08/23/2016
---

# Building Visual Studio Team Services  and Team Foundation Server Extensions

You can build custom applications or services that integrate with your Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) accounts by using the [REST APIs](#rest-apis) to make direct HTTP calls, or utilize our [.NET Client Libraries](#.net-client-libraries).

Along with interacting with VSTS or TFS in your application, you can also integrate with popular third-party services such as Slack or Jenkins.

<a name ="customApps"/>

## 5-minute Quickstarts 
Check out the quick starts to get you started:
* [Write your first extension](get-started/node.md)

## Concepts
* [Extension points](reference/targets/overview.md)
* [Contribution model](develop/contributions-overview.md)

## Samples
* [Sample extensions](develop/samples-overview.md)

## How-to
* Develop
    * [Add a build task](develop/add-build-task.md)
    * [Add a dashboard widget](develop/add-dashboard-widget.md)
    * [Add a new service endpoint](develop/service-endpoints.md)
    * [Add a hub](develop/add-hub.md)
    * [Add a menu action](develop/add-action.md)
    * [Add backlog tabs](develop/add-backlog-tabs.md)
    * [Add backlog panels](develop/add-backlog-panel.md)
    * [Add a service hook](develop/add-service-hook.md)
    * [Add a chart](develop/add-chart.md)
    * [Store data and settings](develop/data-storage.md)
    * [Extend the work item form](develop/add-workitem-extension.md)
    * [Add a custom control to the work item form](develop/custom-control.md)
    * [Configure work item form extensions in TFS](develop/configure-workitemform-extensions.md)
    * [Call a REST API](develop/call-rest-api.md)
    * Use a platform UI control
        * [Configure](develop/ui-controls/configure.md)
        * [Use grid](develop/ui-controls/grido.md)
        * [Use menubar](develop/ui-controls/menubaro.md)
        * [Use treeview](develop/ui-controls/treeviewo.md)
        * [Use combo](develop/ui-controls/comboo.md)
        * [Use modal dialog](develop/ui-controls/modaldialogo.md)
        * [Use splitter](develop/ui-controls/splittero.md)
        * [Use wait control](develop/ui-controls/waitcontrolo.md)
        * [Use pivot filter](develop/ui-controls/pivotfiltero.md)
* Package and publish
    * [Package and publish extensions](publish/overview.md)
    * [Package and publish integrations](publish/integration.md)
    * [Make your listing public](publish/publicize.md)
    * [Publish via command line](publish/command-line.md)
* Test and debug
    * [Debug a web extension](test/debug-in-browser.md)
    * [Menu group IDs](test/discover-menu-group-ids.md)
* Reporting
    * [Extension reporting](extension-report.md)
    * [Extension statistics PowerBI content pack](extension-statistics-powerbi-contentpack.md)

## Reference
* Development
    * [Manifest reference](develop/manifest.md)
    * [Build task reference](develop/build-task-schema.md)
    * [Endpoint authentication schemes](develop/auth-schemes.md)
    * [Content hosting](develop/static-content.md)
    * [Modal dialog](develop/using-host-dialog.md)
    * [Host page navigation](develop/host-navigation.md)
    * [Basic styles for widgets](develop/styles-from-widget-sdk.md)
    * [Auth and security](develop/auth.md)
    * [Deploy web content to Azure](publish/publish-azure.md)
    * UI controls
        * [Combo](reference/client/controls/combo.md)
        * [Grid](reference/client/controls/grid.md)
        * [TreeView](reference/client/controls/tree.md)
        * [MenuBar](reference/client/controls/menubar.md)
        * [Modal Dialog](reference/client/controls/modaldialog.md)
        * [Splitter](reference/client/controls/splitter.md)
        * [WaitControl](reference/client/controls/waitcontrol.md)
* TypeScript APIs
    * [Core client SDK](./reference/client/core-sdk.md)
    * [Client services](./reference/client/client-services.md)
    * [REST clients](./reference/client/rest-clients.md)



