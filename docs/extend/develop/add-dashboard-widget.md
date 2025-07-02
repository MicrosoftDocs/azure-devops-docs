---
title: Add a Dashboard Widget
titleSuffix: Azure DevOps
description: Learn how to create a widget that you can then add to a dashboard in Azure DevOps.
ms.subservice: azure-devops-ecosystem
ms.assetid: 1D393A4A-2D25-479D-972B-304F99B5B1F8
ai-usage: ai-assisted
ms.topic: concept-article
ms.author: chcomley
author: chcomley
ms.date: 07/02/2025
monikerRange: "<=azure-devops"
---

# Add a dashboard widget

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Widgets on a dashboard are implemented as [contributions](./contributions-overview.md) in the [extension framework](../overview.md). A single extension can have multiple contributions. Learn how to create an extension with multiple widgets as contributions.

This article is divided into three parts, each building on the previous. You begin with a simple widget and end with a comprehensive widget.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Prerequisites

| Requirement | Description |
|-------------|-------------|
| **Programming knowledge** | JavaScript, HTML, and CSS knowledge for widget development |
| **Azure DevOps organization** | [Create an organization](../../organizations/accounts/create-organization.md) |
| **Text editor** | We use [Visual Studio Code](https://code.visualstudio.com/) for tutorials |
| **Node.js** | [Latest version of Node.js](https://nodejs.org) |
| **Cross-platform CLI** | [tfx-cli](https://github.com/microsoft/tfs-cli) to package extensions<br>Install using: `npm i -g tfx-cli` |
| **Project directory** | Home directory with this structure after completing the tutorial:<br><br>`|--- README.md`<br>`|--- sdk`<br>`    |--- node_modules`<br>`    |--- scripts`<br>`        |--- VSS.SDK.min.js`<br>`|--- img`<br>`    |--- logo.png`<br>`|--- scripts`<br>`|--- hello-world.html               // html page for your widget`<br>`|--- vss-extension.json             // extension manifest` |

## Tutorial overview

This tutorial teaches widget development through three progressive examples:

| Part | Focus | What you learn |
|------|-------|-------------------|
| [Part 1: Hello World](#part-1) | Basic widget creation | Create a widget that displays text |
| [Part 2: REST API integration](#part-2) | Azure DevOps API calls | Add REST API functionality to fetch and display data |
| [Part 3: Widget configuration](#part-3) | User customization | Implement configuration options for your widget |

> [!TIP]
> **Skip the tutorial:** Download the complete [sample extension](https://github.com/Microsoft/azure-devops-extension-sample), go to the `widgets` folder, and jump to [Step 6](#package-publish-share) to publish three ready-to-use example widgets.

Before you begin, review the [basic widget styles](./styles-from-widget-sdk.md) and structural guidance we provide.

<a id="part-1"></a>

## Part 1: Hello World

Create a basic widget that displays "Hello World" using JavaScript. This foundation demonstrates the core widget development concepts.

:::image type="content" source="../media/add-dashboard-widget/sample.png" alt-text="Screenshot of Overview dashboard with a sample widget.":::

### Step 1: Install the client SDK

The VSS SDK enables your widget to communicate with Azure DevOps. Install it using npm:

```cmd
npm install vss-web-extension-sdk
```

Copy the `VSS.SDK.min.js` file from `vss-web-extension-sdk/lib` to your `home/sdk/scripts` folder.

For more SDK documentation, see the [Client SDK GitHub page](https://github.com/Microsoft/vss-sdk).

### Step 2: Create the HTML structure

Create `hello-world.html` in your project directory. This file provides the widget's layout and references to required scripts.

```html
<!DOCTYPE html>
<html>
    <head>          
        <script src="sdk/scripts/VSS.SDK.min.js"></script>              
    </head>
    <body>
        <div class="widget">
            <h2 class="title"></h2>
        </div>
    </body>
</html>
```

Widgets run in iframes, so most HTML head elements except `<script>` and `<link>` get ignored by the framework.

<a id="widget-javascript"></a>

### Step 3: Add widget JavaScript

To implement the widget functionality, add this script to the `<head>` section of your HTML file:

```html
<script type="text/javascript">
    VSS.init({                        
        explicitNotifyLoaded: true,
        usePlatformStyles: true
    });

    VSS.require(["AzureDevOps/Dashboards/WidgetHelpers"], function (WidgetHelpers) {
        WidgetHelpers.IncludeWidgetStyles();
        VSS.register("HelloWorldWidget", function () {                
            return {
                load: function (widgetSettings) {
                    var $title = $('h2.title');
                    $title.text('Hello World');

                    return WidgetHelpers.WidgetStatusHelper.Success();
                }
            };
        });
        VSS.notifyLoadSucceeded();
    });
</script>
```

<a id="vss-methods"></a>

#### Key JavaScript components

| Function | Purpose |
|----------|---------|
| `VSS.init()` | Initializes communication between widget and Azure DevOps |
| `VSS.require()` | Loads required SDK libraries and widget helpers |
| `VSS.register()` | Registers your widget with a unique identifier |
| `WidgetHelpers.IncludeWidgetStyles()` | Applies default Azure DevOps styling |
| `VSS.notifyLoadSucceeded()` | Notifies the framework that loading completed successfully |

> [!IMPORTANT]
> The widget name in `VSS.register()` must match the `id` in your extension manifest (Step 5).

### Step 4: Add extension images

Create the required images for your extension:

- **Extension logo**: 98x98 pixel image named `logo.png` in the `img` folder
- **Widget catalog icon**: 98x98 pixel image named `CatalogIcon.png` in the `img` folder  
- **Widget preview**: 330x160 pixel image named `preview.png` in the `img` folder

These images display in the Marketplace and widget catalog when users browse available extensions.

### Step 5: Create the extension manifest

Create `vss-extension.json` in your project's root directory. This file defines your extension's metadata and contributions:

```json
{
    "manifestVersion": 1,
    "id": "azure-devops-extensions-myExtensions",
    "version": "1.0.0",
    "name": "My First Set of Widgets",
    "description": "Samples containing different widgets extending dashboards",
    "publisher": "fabrikam",
    "categories": ["Azure Boards"],
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "icons": {
        "default": "img/logo.png"
    },
    "contributions": [
        {
            "id": "HelloWorldWidget",
            "type": "ms.vss-dashboards-web.widget",
            "targets": [
                "ms.vss-dashboards-web.widget-catalog"
            ],
            "properties": {
                "name": "Hello World Widget",
                "description": "My first widget",
                "catalogIconUrl": "img/CatalogIcon.png",
                "previewImageUrl": "img/preview.png",
                "uri": "hello-world.html",
                "supportedSizes": [
                    {
                        "rowSpan": 1,
                        "columnSpan": 2
                    }
                ],
                "supportedScopes": ["project_team"]
            }
        }
    ],
    "files": [
        {
            "path": "hello-world.html",
            "addressable": true
        },
        {
            "path": "sdk/scripts",
            "addressable": true
        },
        {
            "path": "img",
            "addressable": true
        }
    ]
}
```

> [!IMPORTANT]
> Replace `"publisher": "fabrikam"` with your actual publisher name. Learn how to [create a publisher](../publish/overview.md).

#### Essential manifest properties

| Section | Purpose |
|---------|---------|
| **Basic info** | Extension name, version, description, and publisher |
| **Icons** | Paths to your extension's visual assets |
| **Contributions** | Widget definitions including ID, type, and properties |
| **Files** | All files to include in the extension package |

For complete manifest documentation, see [Extension manifest reference](manifest.md).

<a id="package-publish-share"></a>

### Step 6: Package and publish your extension

Package your extension and publish it to the Visual Studio Marketplace.

#### Install the packaging tool

```cmd
npm i -g tfx-cli
```

<a id="package-the-extension"></a>

#### Create your extension package

From your project directory, run:

```cmd
tfx extension create --manifest-globs vss-extension.json
```

This action creates a `.vsix` file that contains your packaged extension.

#### Set up a publisher

1. Go to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher).
2. Sign in and create a publisher if you don't have one.
3. Choose a unique publisher identifier (used in your manifest file).
4. Update your `vss-extension.json` to use your publisher name instead of "fabrikam."

#### Upload your extension

1. In the Publishing Portal, select **Upload new extension**.
2. Choose your `.vsix` file and upload it.
3. Share the extension with your Azure DevOps organization.

Alternatively, use the command line:

```cmd
tfx extension publish --manifest-globs vss-extension.json --share-with yourOrganization
```

> [!TIP]
> Use `--rev-version` to automatically increment the version number when updating an existing extension.

<a id="add-from-catalog"></a>

### Step 7: Install and test your widget

To test, add your widget to a dashboard:

1. Go to your Azure DevOps project: `https://dev.azure.com/{Your_Organization}/{Your_Project}`.
2. Go to **Overview** > **Dashboards**.
3. Select **Add a widget**. 
4. Find your widget in the catalog and select **Add**.

Your "Hello World" widget appears on the dashboard, displaying the text you configured.

**Next step**: Continue to [Part 2](#part-2) to learn how to integrate Azure DevOps REST APIs into your widget.

<a id="part-2"></a>

## Part 2: Hello World with Azure DevOps REST API

Extend your widget to interact with Azure DevOps data using REST APIs. This example demonstrates how to fetch query information and display it dynamically in your widget.

In this part, use the [Work Item Tracking REST API](/rest/api/azure/devops/) to retrieve information about an existing query and display the query details below the "Hello World" text.

:::image type="content" source="../media/add-dashboard-widget/sample2.png" alt-text="Screenshot of Overview dashboard with a sample widget using the REST API for WorkItemTracking.":::

<a id="step-1-files"></a>

### Step 1: Create the enhanced HTML file

Create a new widget file that builds on the previous example. Copy `hello-world.html` and rename it to `hello-world2.html`. Your project structure now includes:

```
|--- README.md
|--- node_modules
|--- sdk/
    |--- scripts/
        |--- VSS.SDK.min.js
|--- img/
    |--- logo.png
|--- scripts/
|--- hello-world.html               // Part 1 widget
|--- hello-world2.html              // Part 2 widget (new)
|--- vss-extension.json             // Extension manifest
```

#### Update the widget HTML structure

Make these changes to `hello-world2.html`:

1. **Add a container for query data**: Include a new `<div>` element to display query information.
2. **Update the widget identifier**: Change the widget name from `HelloWorldWidget` to `HelloWorldWidget2` for unique identification.

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="sdk/scripts/VSS.SDK.min.js"></script>
        <script type="text/javascript">
            VSS.init({
                explicitNotifyLoaded: true,
                usePlatformStyles: true
            });

            VSS.require(["AzureDevOps/Dashboards/WidgetHelpers"], function (WidgetHelpers) {
                WidgetHelpers.IncludeWidgetStyles();
                VSS.register("HelloWorldWidget2", function () {
                    return {
                        load: function (widgetSettings) {
                            var $title = $('h2.title');
                            $title.text('Hello World');

                            return WidgetHelpers.WidgetStatusHelper.Success();
                        }
                    }
                });
                VSS.notifyLoadSucceeded();
            });
        </script>
    </head>
    <body>
        <div class="widget">
            <h2 class="title"></h2>
            <div id="query-info-container"></div>
        </div>
    </body>
</html>
```

### Step 2: Configure API access permissions

Before making REST API calls, configure the required permissions in your extension manifest.

#### Add the work scope

The `vso.work` scope grants read-only access to work items and queries. Add this scope to your `vss-extension.json`:

```json
{
    "scopes": [
        "vso.work"
    ]
}
```

#### Complete manifest example

For a complete manifest with other properties, structure it like this:

```json
{
    "name": "example-widget",
    "publisher": "example-publisher", 
    "version": "1.0.0",
    "scopes": [
        "vso.work"
    ]
}
```

> [!IMPORTANT]
> **Scope limitations**: Adding or changing scopes after publishing isn't supported. If you already published your extension, you must remove it from the Marketplace first. Go to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher), find your extension, and select **Remove**.

### Step 3: Implement REST API integration

Azure DevOps provides JavaScript REST client libraries through the SDK. These libraries wrap AJAX calls and map API responses to usable objects.

#### Update the widget JavaScript

Replace the `VSS.require` call in your `hello-world2.html` to include the Work Item Tracking REST client:

```js
VSS.require(["AzureDevOps/Dashboards/WidgetHelpers", "AzureDevOps/WorkItemTracking/RestClient"], 
    function (WidgetHelpers, WorkItemTrackingRestClient) {
        WidgetHelpers.IncludeWidgetStyles();
        VSS.register("HelloWorldWidget2", function () { 
            var projectId = VSS.getWebContext().project.id;

            var getQueryInfo = function (widgetSettings) {
                // Get a WIT client to make REST calls to Azure DevOps Services
                return WorkItemTrackingRestClient.getClient().getQuery(projectId, "Shared Queries/Feedback")
                    .then(function (query) {
                        // Process query data (implemented in Step 4)

                        return WidgetHelpers.WidgetStatusHelper.Success();
                    }, function (error) {                            
                        return WidgetHelpers.WidgetStatusHelper.Failure(error.message);
                    });
            }

            return {
                load: function (widgetSettings) {
                    // Set your title
                    var $title = $('h2.title');
                    $title.text('Hello World');

                    return getQueryInfo(widgetSettings);
                }
            }
        });
        VSS.notifyLoadSucceeded();
    });
```

#### Key implementation details

| Component | Purpose |
|-----------|---------|
| `WorkItemTrackingRestClient.getClient()` | Gets an instance of the Work Item Tracking REST client |
| `getQuery()` | Retrieves query information wrapped in a promise |
| `WidgetStatusHelper.Failure()` | Provides consistent error handling for widget failures |
| `projectId` | Current project context required for API calls |

> [!TIP]
> **Custom query paths**: If you don't have a "Feedback" query in "Shared Queries", replace `"Shared Queries/Feedback"` with the path to any query that exists in your project.

### Step 4: Display API response data

Render the query information in your widget by processing the REST API response.

#### Add query data rendering

Replace the `// Process query data` comment with this implementation:

```JavaScript
// Create a list with query details                                
var $list = $('<ul>');                                
$list.append($('<li>').text("Query ID: " + query.id));
$list.append($('<li>').text("Query Name: " + query.name));
$list.append($('<li>').text("Created By: " + (query.createdBy ? query.createdBy.displayName : "<unknown>")));

// Append the list to the query-info-container
var $container = $('#query-info-container');
$container.empty();
$container.append($list);
```

The `getQuery()` method returns a `Contracts.QueryHierarchyItem` object with properties for query metadata. This example displays three key pieces of information below the "Hello World" text.

#### Complete working example

Your final `hello-world2.html` file should look like this:

```html
<!DOCTYPE html>
<html>
<head>    
    <script src="sdk/scripts/VSS.SDK.min.js"></script>
    <script type="text/javascript">
        VSS.init({
            explicitNotifyLoaded: true,
            usePlatformStyles: true
        });

        VSS.require(["AzureDevOps/Dashboards/WidgetHelpers", "AzureDevOps/WorkItemTracking/RestClient"], 
            function (WidgetHelpers, WorkItemTrackingRestClient) {
                WidgetHelpers.IncludeWidgetStyles();
                VSS.register("HelloWorldWidget2", function () {                
                    var projectId = VSS.getWebContext().project.id;

                    var getQueryInfo = function (widgetSettings) {
                        // Get a WIT client to make REST calls to Azure DevOps Services
                        return WorkItemTrackingRestClient.getClient().getQuery(projectId, "Shared Queries/Feedback")
                            .then(function (query) {
                                // Create a list with query details                                
                                var $list = $('<ul>');
                                $list.append($('<li>').text("Query ID: " + query.id));
                                $list.append($('<li>').text("Query Name: " + query.name));
                                $list.append($('<li>').text("Created By: " + (query.createdBy ? query.createdBy.displayName : "<unknown>")));

                                // Append the list to the query-info-container
                                var $container = $('#query-info-container');
                                $container.empty();
                                $container.append($list);

                                // Use the widget helper and return success as Widget Status
                                return WidgetHelpers.WidgetStatusHelper.Success();
                            }, function (error) {
                                // Use the widget helper and return failure as Widget Status
                                return WidgetHelpers.WidgetStatusHelper.Failure(error.message);
                            });
                    }

                    return {
                        load: function (widgetSettings) {
                            // Set your title
                            var $title = $('h2.title');
                            $title.text('Hello World');

                            return getQueryInfo(widgetSettings);
                        }
                    }
                });
            VSS.notifyLoadSucceeded();
        });       
    </script>

</head>
<body>
    <div class="widget">
        <h2 class="title"></h2>
        <div id="query-info-container"></div>
    </div>
</body>
</html>
```

<a id="widget-extension-manifest"></a>

### Step 5: Update the extension manifest

To make it available in the widget catalog, add your new widget to the extension manifest.

#### Add the second widget contribution

Update `vss-extension.json` to include your REST API-enabled widget. Add this contribution to the `contributions` array:

```json
{
    "contributions": [
        // ...existing HelloWorldWidget contribution...,
        {
            "id": "HelloWorldWidget2",
            "type": "ms.vss-dashboards-web.widget",
            "targets": [
                "ms.vss-dashboards-web.widget-catalog"
            ],
            "properties": {
                "name": "Hello World Widget 2 (with API)",
                "description": "My second widget",
                "previewImageUrl": "img/preview2.png",
                "uri": "hello-world2.html",
                "supportedSizes": [
                    {
                        "rowSpan": 1,
                        "columnSpan": 2
                    }
                ],
                "supportedScopes": ["project_team"]
            }
        }
    ],
    "files": [
        {
            "path": "hello-world.html",
            "addressable": true
        },
        {
            "path": "hello-world2.html",
            "addressable": true
        },
        {
            "path": "sdk/scripts",
            "addressable": true
        },
        {
            "path": "img",
            "addressable": true
        }
    ],
    "scopes": [
        "vso.work"
    ]
}
```

> [!TIP]
> **Preview image**: Create a `preview2.png` image (330x160 pixels) and place it in the `img` folder to show users what your widget looks like in the catalog.

### Step 6: Package, publish, and share

[Package, publish, and share your extension](#package-publish-share). If you already published the extension, you can repackage and update it directly in the Marketplace.

### Step 7: Test your REST API widget

To view the REST API integration in action, add the new widget to your dashboard:

1. Go to your Azure DevOps project: `https://dev.azure.com/{Your_Organization}/{Your_Project}`.
2. Select **Overview** > **Dashboards**.
3. Select **Add a widget**. 
4. Find "Hello World Widget 2 (with API)" and select **Add**.

Your enhanced widget displays both the "Hello World" text and live query information from your Azure DevOps project.

**Next steps**: Continue to [Part 3](#part-3) to add configuration options that let users customize which query to display.

<a id="part-3"></a>

## Part 3: Configure Hello World

Build on [Part 2](#part-2) by adding user configuration capabilities to your widget. Instead of hard-coding the query path, create a configuration interface that lets users select which query to display, with live preview functionality.

This part demonstrates how to create configurable widgets that users can customize to their specific needs while providing real-time feedback during configuration.

:::image type="content" source="../media/add-dashboard-widget/sample-configuration.png" alt-text="Screenshot of Overview dashboard live preview of the widget based on changes.":::

### Step 1: Create configuration files

Widget configurations share many similarities with widgets themselves—both use the same SDK, HTML structure, and JavaScript patterns, but serve different purposes within the extension framework.

#### Set up the project structure

To support widget configuration, create two new files:

1. Copy `hello-world2.html` and rename it to `hello-world3.html`, your configurable widget.
2. Create a new file called `configuration.html`, which handles the configuration interface.

Your project structure now includes:

```
|--- README.md
|--- sdk/    
    |--- node_modules           
    |--- scripts/
        |--- VSS.SDK.min.js       
|--- img/                        
    |--- logo.png                           
|--- scripts/          
|--- configuration.html              // New: Configuration interface
|--- hello-world.html               // Part 1: Basic widget  
|--- hello-world2.html              // Part 2: REST API widget
|--- hello-world3.html              // Part 3: Configurable widget (new)
|--- vss-extension.json             // Extension manifest
```

#### Create the configuration interface

Add this HTML structure to `configuration.html`, which creates a dropdown selector for choosing queries:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>                          
        <script src="sdk/scripts/VSS.SDK.min.js"></script>              
    </head>
    <body>
        <div class="container">
            <fieldset>
                <label class="label">Query: </label>
                <select id="query-path-dropdown" style="margin-top:10px">
                    <option value="" selected disabled hidden>Please select a query</option>
                    <option value="Shared Queries/Feedback">Shared Queries/Feedback</option>
                    <option value="Shared Queries/My Bugs">Shared Queries/My Bugs</option>
                    <option value="Shared Queries/My Tasks">Shared Queries/My Tasks</option>                        
                </select>
            </fieldset>             
        </div>
    </body>
</html>
```

### Step 2: Implement configuration JavaScript

Configuration JavaScript follows the same initialization pattern as widgets, but implements the `IWidgetConfiguration` contract instead of the basic `IWidget` contract.

#### Add configuration logic

Insert this script into the `<head>` section of `configuration.html`:

```html
<script type="text/javascript">
    VSS.init({                        
        explicitNotifyLoaded: true,
        usePlatformStyles: true
    });

    VSS.require(["AzureDevOps/Dashboards/WidgetHelpers"], function (WidgetHelpers) {
        VSS.register("HelloWorldWidget.Configuration", function () {   
            var $queryDropdown = $("#query-path-dropdown"); 

            return {
                load: function (widgetSettings, widgetConfigurationContext) {
                    var settings = JSON.parse(widgetSettings.customSettings.data);
                    if (settings && settings.queryPath) {
                         $queryDropdown.val(settings.queryPath);
                     }

                    return WidgetHelpers.WidgetStatusHelper.Success();
                },
                onSave: function() {
                    var customSettings = {
                        data: JSON.stringify({
                                queryPath: $queryDropdown.val()
                            })
                    };
                    return WidgetHelpers.WidgetConfigurationSave.Valid(customSettings); 
                }
            }
        });
        VSS.notifyLoadSucceeded();
    });
</script>
```

#### Configuration contract details

The `IWidgetConfiguration` contract requires these key functions:

| Function | Purpose | When called |
|----------|---------|-------------|
| `load()` | Initialize configuration UI with existing settings | When configuration dialog opens |
| `onSave()` | Serialize user input and validate settings | When user selects **Save** |

> [!TIP]
> **Data serialization**: This example uses JSON to serialize settings. The widget accesses these settings via `widgetSettings.customSettings.data` and must deserialize them accordingly.

### Step 3: Enable live preview functionality

Live preview allows users to see widget changes immediately as they modify configuration settings, providing instant feedback before saving.

#### Implement change notifications

To enable live preview, add this event handler within the `load` function:

```js
$queryDropdown.on("change", function () {
    var customSettings = {
       data: JSON.stringify({
               queryPath: $queryDropdown.val()
           })
    };
    var eventName = WidgetHelpers.WidgetEvent.ConfigurationChange;
    var eventArgs = WidgetHelpers.WidgetEvent.Args(customSettings);
    widgetConfigurationContext.notify(eventName, eventArgs);
});
```

#### Complete configuration file

Your final `configuration.html` should look like this:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>                          
        <script src="sdk/scripts/VSS.SDK.min.js"></script>      
        <script type="text/javascript">
            VSS.init({                        
                explicitNotifyLoaded: true,
                usePlatformStyles: true
            });

            VSS.require(["AzureDevOps/Dashboards/WidgetHelpers"], function (WidgetHelpers) {
                VSS.register("HelloWorldWidget.Configuration", function () {   
                    var $queryDropdown = $("#query-path-dropdown");

                    return {
                        load: function (widgetSettings, widgetConfigurationContext) {
                            var settings = JSON.parse(widgetSettings.customSettings.data);
                            if (settings && settings.queryPath) {
                                 $queryDropdown.val(settings.queryPath);
                             }

                             $queryDropdown.on("change", function () {
                                 var customSettings = {data: JSON.stringify({queryPath: $queryDropdown.val()})};
                                 var eventName = WidgetHelpers.WidgetEvent.ConfigurationChange;
                                 var eventArgs = WidgetHelpers.WidgetEvent.Args(customSettings);
                                 widgetConfigurationContext.notify(eventName, eventArgs);
                             });

                            return WidgetHelpers.WidgetStatusHelper.Success();
                        },
                        onSave: function() {
                            var customSettings = {data: JSON.stringify({queryPath: $queryDropdown.val()})};
                            return WidgetHelpers.WidgetConfigurationSave.Valid(customSettings); 
                        }
                    }
                });
                VSS.notifyLoadSucceeded();
            });
        </script>       
    </head>
    <body>
        <div class="container">
            <fieldset>
                <label class="label">Query: </label>
                <select id="query-path-dropdown" style="margin-top:10px">
                    <option value="" selected disabled hidden>Please select a query</option>
                    <option value="Shared Queries/Feedback">Shared Queries/Feedback</option>
                    <option value="Shared Queries/My Bugs">Shared Queries/My Bugs</option>
                    <option value="Shared Queries/My Tasks">Shared Queries/My Tasks</option>                        
                </select>
            </fieldset>     
        </div>
    </body>
</html>
```

> [!IMPORTANT]
> **Enable Save button**: The framework requires at least one configuration change notification to enable the **Save** button. The change event handler ensures this action occurs when users select an option.

<a id="reload-widget"></a>

### Step 4: Make the widget configurable

Transform your widget from Part 2 to use configuration data instead of hard-coded values. This step requires implementing the `IConfigurableWidget` contract.

#### Update widget registration

In `hello-world3.html`, make these changes:

1. **Update widget ID**: Change from `HelloWorldWidget2` to `HelloWorldWidget3`.
2. **Add reload function**: Implement the `IConfigurableWidget` contract.

```JavaScript
return {
    load: function (widgetSettings) {
        // Set your title
        var $title = $('h2.title');
        $title.text('Hello World');

        return getQueryInfo(widgetSettings);
    },
    reload: function (widgetSettings) {
        return getQueryInfo(widgetSettings);
    }
}
```

#### Handle configuration data

Update the `getQueryInfo` function to use configuration settings instead of hard-coded query paths:

```JavaScript
var settings = JSON.parse(widgetSettings.customSettings.data);
if (!settings || !settings.queryPath) {
    var $container = $('#query-info-container');
    $container.empty();
    $container.text("Please configure a query path to display data.");

    return WidgetHelpers.WidgetStatusHelper.Success();
}
```

#### Widget lifecycle differences

| Function | Purpose | Usage guidelines |
|----------|---------|------------------|
| `load()` | Initial widget rendering and one-time setup | Heavy operations, resource initialization |
| `reload()` | Update widget with new configuration | Lightweight updates, data refresh |

> [!TIP]
> **Performance optimization**: Use `load()` for expensive operations that only need to run once, and `reload()` for quick updates when configuration changes.

### (Optional) Add a lightbox for detailed information

Dashboard widgets have limited space, making it challenging to display comprehensive information. A lightbox provides an elegant solution by showing detailed data in a modal overlay without navigating away from the dashboard.

#### Why use a lightbox in widgets?

| Benefit | Description |
|---------|-------------|
| **Space efficiency** | Keep widget compact while offering detailed views |
| **User experience** | Maintain dashboard context while showing more information |
| **Progressive disclosure** | Show summary data in widget, details on demand |
| **Responsive design** | Adapt to different screen sizes and widget configurations |

#### Implement clickable elements

Update your query data rendering to include clickable elements that trigger the lightbox:

```JavaScript
// Create a list with clickable query details
var $list = $('<ul class="query-summary">');                                
$list.append($('<li>').text("Query ID: " + query.id));
$list.append($('<li>').text("Query Name: " + query.name));
$list.append($('<li>').text("Created By: " + (query.createdBy ? query.createdBy.displayName : "<unknown>"));

// Add a clickable element to open detailed view
var $detailsLink = $('<button class="details-link">View Details</button>');
$detailsLink.on('click', function() {
    showQueryDetails(query);
});

// Append to the container
var $container = $('#query-info-container');
$container.empty();
$container.append($list);
$container.append($detailsLink);
```

#### Create the lightbox functionality

Add this lightbox implementation to your widget JavaScript:

```JavaScript
function showQueryDetails(query) {
    // Create lightbox overlay
    var $overlay = $('<div class="lightbox-overlay">');
    var $lightbox = $('<div class="lightbox-content">');
    
    // Add close button
    var $closeBtn = $('<button class="lightbox-close">&times;</button>');
    $closeBtn.on('click', function() {
        $overlay.remove();
    });
    
    // Create detailed content
    var $content = $('<div class="query-details">');
    $content.append($('<h3>').text(query.name || 'Query Details'));
    $content.append($('<p>').html('<strong>ID:</strong> ' + query.id));
    $content.append($('<p>').html('<strong>Path:</strong> ' + query.path));
    $content.append($('<p>').html('<strong>Created:</strong> ' + (query.createdDate ? new Date(query.createdDate).toLocaleDateString() : 'Unknown')));
    $content.append($('<p>').html('<strong>Modified:</strong> ' + (query.lastModifiedDate ? new Date(query.lastModifiedDate).toLocaleDateString() : 'Unknown')));
    $content.append($('<p>').html('<strong>Created By:</strong> ' + (query.createdBy ? query.createdBy.displayName : 'Unknown')));
    $content.append($('<p>').html('<strong>Modified By:</strong> ' + (query.lastModifiedBy ? query.lastModifiedBy.displayName : 'Unknown')));
    
    if (query.queryType) {
        $content.append($('<p>').html('<strong>Type:</strong> ' + query.queryType));
    }
    
    // Assemble lightbox
    $lightbox.append($closeBtn);
    $lightbox.append($content);
    $overlay.append($lightbox);
    
    // Add to document and show
    $('body').append($overlay);
    
    // Close on overlay click
    $overlay.on('click', function(e) {
        if (e.target === $overlay[0]) {
            $overlay.remove();
        }
    });
    
    // Close on Escape key
    $(document).on('keydown.lightbox', function(e) {
        if (e.keyCode === 27) { // Escape key
            $overlay.remove();
            $(document).off('keydown.lightbox');
        }
    });
}
```

#### Add lightbox styling

Include CSS styles for the lightbox in your widget HTML `<head>` section:

```html
<style>
.query-summary {
    list-style: none;
    padding: 0;
    margin: 10px 0;
}

.query-summary li {
    padding: 2px 0;
    font-size: 12px;
}

.details-link {
    background: #0078d4;
    color: white;
    border: none;
    padding: 4px 8px;
    font-size: 11px;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 8px;
}

.details-link:hover {
    background: #106ebe;
}

.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-content {
    background: white;
    border-radius: 4px;
    padding: 20px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.lightbox-close {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    line-height: 1;
}

.lightbox-close:hover {
    color: #000;
}

.query-details h3 {
    margin-top: 0;
    color: #323130;
}

.query-details p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 1.4;
}
</style>
```

#### Enhanced widget implementation

Your complete enhanced widget with lightbox functionality:

```html
<!DOCTYPE html>
<html>
<head>    
    <script src="sdk/scripts/VSS.SDK.min.js"></script>
    <style>
        /* Lightbox styles from above */
        .query-summary {
            list-style: none;
            padding: 0;
            margin: 10px 0;
        }
        
        .query-summary li {
            padding: 2px 0;
            font-size: 12px;
        }
        
        .details-link {
            background: #0078d4;
            color: white;
            border: none;
            padding: 4px 8px;
            font-size: 11px;
            cursor: pointer;
            border-radius: 2px;
            margin-top: 8px;
        }
        
        .details-link:hover {
            background: #106ebe;
        }
        
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .lightbox-content {
            background: white;
            border-radius: 4px;
            padding: 20px;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .lightbox-close {
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            line-height: 1;
        }
        
        .lightbox-close:hover {
            color: #000;
        }
        
        .query-details h3 {
            margin-top: 0;
            color: #323130;
        }
        
        .query-details p {
            margin: 8px 0;
            font-size: 14px;
            line-height: 1.4;
        }
    </style>
    <script type="text/javascript">
        VSS.init({
            explicitNotifyLoaded: true,
            usePlatformStyles: true
        });

        VSS.require(["AzureDevOps/Dashboards/WidgetHelpers", "AzureDevOps/WorkItemTracking/RestClient"], 
            function (WidgetHelpers, WorkItemTrackingRestClient) {
                WidgetHelpers.IncludeWidgetStyles();
                
                function showQueryDetails(query) {
                    // Lightbox implementation from above
                }
                
                VSS.register("HelloWorldWidget2", function () {                
                    var projectId = VSS.getWebContext().project.id;

                    var getQueryInfo = function (widgetSettings) {
                        return WorkItemTrackingRestClient.getClient().getQuery(projectId, "Shared Queries/Feedback")
                            .then(function (query) {
                                // Enhanced display with lightbox trigger
                                var $list = $('<ul class="query-summary">');                                
                                $list.append($('<li>').text("Query ID: " + query.id));
                                $list.append($('<li>').text("Query Name: " + query.name));
                                $list.append($('<li>').text("Created By: " + (query.createdBy ? query.createdBy.displayName : "<unknown>")));

                                var $detailsLink = $('<button class="details-link">View Details</button>');
                                $detailsLink.on('click', function() {
                                    showQueryDetails(query);
                                });

                                var $container = $('#query-info-container');
                                $container.empty();
                                $container.append($list);
                                $container.append($detailsLink);

                                return WidgetHelpers.WidgetStatusHelper.Success();
                            }, function (error) {
                                return WidgetHelpers.WidgetStatusHelper.Failure(error.message);
                            });
                    }

                    return {
                        load: function (widgetSettings) {
                            // Set your title
                            var $title = $('h2.title');
                            $title.text('Hello World');

                            return getQueryInfo(widgetSettings);
                        }
                    }
                });
            VSS.notifyLoadSucceeded();
        });       
    </script>
</head>
<body>
    <div class="widget">
        <h2 class="title"></h2>
        <div id="query-info-container"></div>
    </div>
</body>
</html>
```

**Accessibility considerations**: Ensure your lightbox is keyboard accessible and includes proper labels for screen readers. Test with Azure DevOps' built-in accessibility features.

> [!IMPORTANT]
> **Performance**: Lightboxes should load quickly. Consider lazy-loading detailed data only when the lightbox opens, rather than fetching everything upfront.

### Step 5: Configure the extension manifest

Register both the configurable widget and its configuration interface in your extension manifest.

#### Add widget and configuration contributions

Update `vss-extension.json` to include two new contributions:

```json
{
    "contributions": [
        // ...existing contributions..., 
        {
             "id": "HelloWorldWidget3",
             "type": "ms.vss-dashboards-web.widget",
             "targets": [
                 "ms.vss-dashboards-web.widget-catalog",
                 "fabrikam.azuredevops-extensions-myExtensions.HelloWorldWidget.Configuration"
             ],
             "properties": {
                 "name": "Hello World Widget 3 (with config)",
                 "description": "My third widget",
                 "previewImageUrl": "img/preview3.png",                       
                 "uri": "hello-world3.html",
                 "supportedSizes": [
                      {
                             "rowSpan": 1,
                             "columnSpan": 2
                         }
                     ],
                 "supportedScopes": ["project_team"]
             }
         },
         {
             "id": "HelloWorldWidget.Configuration",
             "type": "ms.vss-dashboards-web.widget-configuration",
             "targets": [ "ms.vss-dashboards-web.widget-configuration" ],
             "properties": {
                 "name": "HelloWorldWidget Configuration",
                 "description": "Configures HelloWorldWidget",
                 "uri": "configuration.html"
             }
         }
    ],
    "files": [
        {
            "path": "hello-world.html", "addressable": true
        },
        {
            "path": "hello-world2.html", "addressable": true
        },
        {
            "path": "hello-world3.html", "addressable": true
        },
        {
            "path": "configuration.html", "addressable": true
        },
        {
            "path": "sdk/scripts", "addressable": true
        },
        {
            "path": "img", "addressable": true
        }
    ]
}
```

#### Configuration contribution requirements

| Property | Purpose | Required value |
|----------|---------|----------------|
| `type` | Identifies contribution as widget configuration | `ms.vss-dashboards-web.widget-configuration` |
| `targets` | Where configuration appears | `ms.vss-dashboards-web.widget-configuration` |
| `uri` | Path to configuration HTML file | Your configuration file path |

#### Widget targeting pattern

For configurable widgets, the `targets` array must include a reference to the configuration:

```
<publisher>.<extension-id>.<configuration-id>
```

> [!WARNING]
> **Configuration button visibility**: If the widget doesn't properly target its configuration contribution, the **Configure** button doesn't appear. Verify the publisher and extension names match your manifest exactly.

### Step 6: Package, publish, and share

Deploy your enhanced extension with configuration capabilities.

If it's your first publication, follow [Step 6: Package, publish, and share](#package-publish-share). For existing extensions, repackage and update directly in the Marketplace.

### Step 7: Test the configurable widget

Experience the full configuration workflow by adding and configuring your widget.

#### Add the widget to your dashboard

1. Go to `https://dev.azure.com/{Your_Organization}/{Your_Project}`.
2. Go to **Overview** > **Dashboards**.
3. Select **Add a widget**.
4. Find "Hello World Widget 3 (with config)" and select **Add**.

A configuration prompt displays since the widget requires setup:

:::image type="content" source="../media/add-dashboard-widget/sample-widget-with-no-settings.png" alt-text="Screenshot of Overview dashboard with a sample widget from the catalog.":::

#### Configure the widget

Access configuration through either method:

- **Widget menu**: Hover over the widget, select the ellipsis (⋯), then **Configure**
- **Dashboard edit mode**: Select **Edit** on the dashboard, then the configure button on the widget

The configuration panel opens with a live preview in the center. Select a query from the dropdown to see immediate updates, then select **Save** to apply your changes.

### Step 8: Add advanced configuration options

Extend your widget with more built-in configuration features like custom names and sizes.

#### Enable name and size configuration

Azure DevOps provides two configurable features out-of-the-box:

| Feature | Manifest property | Purpose |
|---------|------------------|---------|
| **Custom names** | `isNameConfigurable: true` | Users can override the default widget name |
| **Multiple sizes** | Multiple `supportedSizes` entries | Users can resize widgets |

#### Enhanced manifest example

```json
{
    "contributions": [
        {
             "id": "HelloWorldWidget3",
             "type": "ms.vss-dashboards-web.widget",
             "targets": [
                 "ms.vss-dashboards-web.widget-catalog",  
                 "fabrikam.azuredevops-extensions-myExtensions.HelloWorldWidget.Configuration"
             ],
             "properties": {
                 "name": "Hello World Widget 3 (with config)",
                 "description": "My third widget",
                 "previewImageUrl": "img/preview3.png",                       
                 "uri": "hello-world3.html",
                 "isNameConfigurable": true,
                 "supportedSizes": [
                    {
                        "rowSpan": 1,
                        "columnSpan": 2
                    },
                    {
                        "rowSpan": 2,
                        "columnSpan": 2
                    }
                 ],
                 "supportedScopes": ["project_team"]
             }
         }
    ]
}
```

#### Display configured names

To show custom widget names, update your widget to use `widgetSettings.name`:

```JavaScript
return {
    load: function (widgetSettings) {
        // Display configured name instead of hard-coded text
        var $title = $('h2.title');
        $title.text(widgetSettings.name);

        return getQueryInfo(widgetSettings);
    },
    reload: function (widgetSettings) {
        // Update name during configuration changes
        var $title = $('h2.title');
        $title.text(widgetSettings.name);

        return getQueryInfo(widgetSettings);
    }
}
```

After you update your extension, you can configure both the widget name and size:

:::image type="content" source="../media/add-dashboard-widget/sample-configure-name-and-size.png" alt-text="Screenshot showing where the widget name and size can be configured.":::

[Repackage](#package-the-extension) and [update](../publish/overview.md) your extension to enable these advanced configuration options.

**Congratulations!** You created a complete, configurable Azure DevOps dashboard widget with live preview capabilities and user customization options.


