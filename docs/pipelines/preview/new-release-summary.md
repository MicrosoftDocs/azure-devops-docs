---
title: New release progress views
description: A preview of a new user experience for release progress on VSTS
ms.assetid: 35CC58CC-0FB2-4C02-87C8-9C78459A84F4
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 04/09/2018
monikerRange: 'vsts'
---

# New release progress views

A new and fully redesigned user experience is available for release progress in VSTS.
To use this page, you simply need to switch it on using one of the on-screen prompts,
or from the [user profile **Previews** panel](../../collaborate/preview-features.md#enable-features-for-your-use).

Open the new progress view using the **Release (pipeline view)** link in the toolbar.

![Opening the Pipeline view](_img/new-release-summary/pipeline-link.png)

The view shows information about the release and the deployment results. 
Use the links in the pipeline view to see more details. 

![Opening the Pipeline view](_img/new-release-summary/pipeline-view.png)

To go back to the old view, open the drop-down list from the ellipses (**...**) icon.

![Opening the old view](_img/new-release-summary/old-view.png)

## Pipeline, artifacts, and environments

| Feature | Details |
| --- | --- | 
| ![Release object](_img/new-release-summary/artifacts.png) | See your triggers, artifacts, tags, and who requested the release. |
| ![Environments](_img/new-release-summary/environment.png) | See your environments with details of deployment progress, outcome, test status, and more. |
| ![Deployment conditions](_img/new-release-summary/pre-post-deployment.png) | See details of the pre- and post-deployment conditions you defined. |
| ![Deployment status](_img/new-release-summary/in-progress.png) | See the status and details of the deployment to each environment. |

## Pre- and post-deployment gates and approvals

The deployment conditions links open the information panels for pre- and post-deployment conditions.

![Pre- and post-deployment conditions panels](_img/new-release-summary/pre-post-panel.png)

## Commits and workitems

Choose the environment in the pipeline to see a summary of commits and workitems related to this release.

![Commits and workitems panel](_img/new-release-summary/commits.png)

## In-progress deployments and logs

Choose the progress indicator for an environment to see the live deployment logs.

![Logs panel](_img/new-release-summary/logs.png)

## Test results

Choose the test results indicator for an environment to see a summary of test results.

![Test results link](_img/new-release-summary/tests-link.png)

![Test results](_img/new-release-summary/tests.png)

## Contribution points and extensions

The new progress view supports existing and new extensions through a set of contribution points.

Extensions that previously appeared in the **Summary** tab menu for a release:

![Previous Summary tab menu for a release](_img/new-release-summary/old-rel-summary.png) 

... now appear in the menu bar for the new release progress view pane:

![New Summary tab menu for a release](_img/new-release-summary/new-rel-summary.png) 

Extensions that previously appeared in the **Summary** tab editor toolbar for a release:

![Previous Summary tab toolbar for a release](_img/new-release-summary/old-rel-summary-2.png) 

... now appear in the drop-down list in the new release editor:

![New progress view tab toolbar for a release](_img/new-release-summary/new-rel-summary-2.png) 

Extensions that previously appeared in the release summary section for a release:

![Previous release summary section for a release](_img/new-release-summary/old-rel-summary-3.png) 

... now appear as a section in the new release progress view pane:

![New release progress view section for a release](_img/new-release-summary/new-rel-summary-3.png) 

The contribution point in the columns for environments in the **Summary** tab of a release
is no longer supported. A richer test results summary appears in the environment in pipeline
view when you choose the test results icon. For example, extensions that appeared here:

![Previous release summary section for a release](_img/new-release-summary/old-rel-summary-4.png) 

... will not be displayed in the new progress view pages. Please let us know by using the 
**Feedback** section of this topic if you are currently using this contribution point. 

### New contribution points in the release progress view

The new release progress view clearly segregates the entire data into release views and environment views to
provide a much better reporting experience for each environment: 

* The **release-level** view contains the release level information such as the pipeline, release description, release tags, and artifact details.  

  ![The new release-level view for a release](_img/new-release-summary/contrib-point-1.png) 

* The **environment-level** view displays environment data such as the work items, commits, tasks, logs and tests. 

  ![The new release-level view for a release](_img/new-release-summary/contrib-point-2.png) 

Many extensions need to show information on a per-environment basis because the information varies for each environment.
In the old release summary, many extensions used filters to do this. However, the new views provide a much better experience.
For example, a new contribution point is available for environment-level information (in the release environment editor tab).
You can use this to expose information for each environment:   
 
![The new release-level view for a release](_img/new-release-summary/contrib-point-3.png) 

### Migrate an extension for the new release progress view
 
To migrate your code from the release level contribution point (the release details summary tab) to the new environment-level
contribution point (the release environment editor tab): 

1. Change the target and properties of the extension code in **vss-extension.json**. For example,   
   previous code for contributing to the old contribution point could be:
 
   ```
   { 
      "id": "rm-details-view-sample", 
      "type": "ms.vss-releaseManagement-web.release-summary-section", 
      "targets": [ "ms.vss-releaseManagement-web.release-details-summary-tab" ], 
      "properties": { 
         "name": "Tab name", 
         "uri": "index.html" 
      } 
   } 
   ```

   The updated code for the new contribution point would be: 

   ```
   { 
      "id": "rm-environments-tab", 
      "type": "ms.vss-web.tab", 
      "description": "Adds a 'Hello World' tab to the release environment.", 
      "targets": [ "ms.vss-releaseManagement-web.release-environment-editor-tab" ], 
      "properties": { 
         "name": "ReleaseEnvironment", 
         "order": "99", 
         "uri": "index.html", 
         "registeredObjectId": "registeredEnvironmentObject", 
         "dynamic": true 
      } 
   } 
   ```
 
1. Understand the functional changes to the extension model:

   * The `onReleaseChanged` function for the release progress view tab contribution supplies the release object.
     This is called to initially render the extension, or to update it when a change to the release occurs.
     This function is no longer required in the new contribution point. 
 
   * For the new environment-level contribution point, the `registeredObjectId` must be passed in **vss-extension.json**.
     This identifier is used to listen for updates occurring to the environment object. Instead of just initializing the extension,
     you must also register the extension for updates by using `registeredObjectId`. You will receive the `releaseEnvironment` object
     instead of the entire release object. If any update occurs to this object, an event is raised that will be received by the
     `updateContext` function. 
 
1. Make the following changes to the extension code in **main.js**:

   ```
   // This code helps in the initial load of the extension 
   VSS.ready(()=>{ 
        // Initial config from host i.e. selected release environment object. 
       console.log(JSON.stringify(VSS.getConfiguration()));     
   }); 
 
   // This code is required for listening to updates on the release environment object 
   VSS.register("registeredEnvironmentObject", { 
       updateContext: function(tabContext) {  
          /* tabContext will follow the contract for the extension, this function will be called on any update in context.*/ 
           console.log(JSON.stringify(tabContext)); 
       } 
  }); 
```

[Download the sample extension code](https://github.com/ankitk94/vsts-environment-tab-extension).

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
