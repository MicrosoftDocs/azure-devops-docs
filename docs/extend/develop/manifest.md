---
ms.prod: devops
ms.technology: devops-ecosystem
title: Extension Manifest Reference| Extensions for Azure DevOps Services
description: How to create a manifest for your extension to Azure DevOps Services.
ms.assetid: e3150221-3cdf-47e1-b7e9-24211498cc29
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/26/2016
---

# Extension manifest reference

Every extension has a JSON manifest file which defines basic info about the extension and how it wants to extend and enhance the experience.

Start by creating a file named `vss-extension.json` at the root of your extension folder. This file contains required attributes, like the extension's ID and its installation targets (where it can run). It also defines the contributions being made by your extension.

Here is an example of what a typical manifest will look like:

[!code-json[](../_data/extension-typical.json)]

## Required attributes

<a id="core-properties" />

[!INCLUDE [](../_shared/manifest-core.md)]

### Examples of required attributes

[!code-json[](../_data/extension-core.json)]

## Optional attributes

### Runtime attributes
[!INCLUDE [](../_shared/manifest-extension-runtime.md)]

[!code-json[](../_data/extension-runtime.json)]

<a name="discoveryprops"></a>

### Discovery attributes

[!INCLUDE [](../_shared/manifest-discovery.md)]

<a id="public-flag" />
#### Mark an extension public

By default, all extensions on the Visual Studio Marketplace are private (only visible to the publisher and accounts the publisher has shared the extension with). If your publisher has been verified, you can make your extension public by setting the `Public` flag in your extension manifest:

```json
{
    "galleryFlags": [
        "Public"
    ]
}            
```

Or simply:

```json
{
    "public": true
}            
```

See [Package/Publish/Install](../publish/overview.md) for additional details.

#### Mark an extension to be in preview

If your extension is ready for users on the Marketplace to try, but you are still working out a few bugs or adding function, you can mark it as `preview`:

```json
{
    "galleryFlags": [
        "Preview"
    ]
}            
```
#### Mark an extension as paid preview

If you intend to sell your extension on the Marketplace in the future, you should mark it as paid preview. An extension once marked free cannot be marked paid later.

```json
{
    "galleryFlags": [
        "Paid",
        "Preview"
    ]
}            
```

#### Mark an extension as paid

If you want to sell your extension on the Marketplace, you can mark it with the `Paid` flag and `__BYOL` tag (starts with two underscores) :

```json
{
    "galleryFlags": [
        "Paid"        
    ],
     "tags": [        
        "__BYOL"
    ]
}            
```

Both the `Paid` flag and `__BYOL` tag need to be present to mark an extension as paid in Marketplace. BYOL stands for Bring-Your-Own-License which means the publisher of the extension will provide the billing and licensing mechanism for the extension, as this is not provided by Microsoft for Azure DevOps extensions. All paid extensions are required to define privacy policy, support policy, and an end user license agreement. Additionally, publishers must provide content for the pricing tab in Marketplace as follows:

```json
{
    "content": {
        "details": {
            "path": "overview.md"
        }, 
        "pricing": {
            "path": "pricing.md"
        }
    }
}          
```

You will also need to add a new section in your extension manifest to override paid licensing. In the future, we will remove the paid licensing check and this override will no longer be required, but for now you will need it to ensure your extension is displayed as expected. Each override consists of an “id” and a “behavior.” The “id” must match the ID of the contributions defined in the manifest.
```json
"licensing": {

      "overrides": [

        { "id": "my-hub", "behavior": " AlwaysInclude" }
      ]
    }

```

If your paid BYOL extension offers a trial period (we recommend so), then you can specify the length of the trial in days: 

```json
{
    "galleryproperties": {
        "trialDays": "30"
    } 
}          
```

> **Note:** If you do want to target Team Foundation Server but do not wish to surface a Download option for your extension then add the `__DoNotDownload` tag (starts with two underscores) to the extension manifest.

### Example of additional properties

[!code-json[](../_data/extension-discovery.json)]

### Details page example

* 1 - description
* 2 - icon
* 3 - categories
* 4 - screenshots
* 5 - content (details)
* 6 - links
* 7 - branding

![card](./_img/extension-details-page.png)

<a name="CustomerQnASupport"></a>

### Marketplace Q&A - CustomerQnASupport property

All extensions on the Visual Studio Marketplace have a Q&A section to allow one-on-one public conversations between extension users and publishers. Publishers can choose between Marketplace Q&A, GitHub issues, or custom Q&A URL for the Q&A section or disable Q&A in Marketplace using the CustomerQnASupport property in the manifest. 

**Default experience** (No changes to manifest are required)
- For extension with GitHub repository, Marketplace will redirect users in the Q&A section to the associated GitHub issues. 
- For extension without GitHub repository, Marketplace Q&A is enabled. 

For a different experience than one of the default options use the **CustomerQnASupport** property in the manifest.  


```json
{
    "CustomerQnASupport": {
        "enableqna": true,
        "url": "http://uservoice.visualstudio.com"
    } 
}
```

### Properties

Properties for the CustomerQnASupport section:

- **enableqna** - boolean field, set to true for marketplace or custom Q&A; false for disabling Q&A
- **url** - string, URL for custom Q&A


### Examples showing usage of Q&A support

#### Example 10: Extension using custom Q&A

```json
{
     "CustomerQnASupport": {
        "enableqna":"true",
        "url": "http://uservoice.visualstudio.com"
    } 
}
```
#### Example 11: Extension with GitHub repository but using Marketplace Q&A instead of GitHub issues

```json
{
     "CustomerQnASupport": {
        "enableqna":"true"
    } 
}
```
#### Example 12: Extension disabling Q&A section

```json
{
     "CustomerQnASupport": {
        "enableqna":"false"
    } 
}
```

## Scopes

Your extension can specify one or more scopes. Scopes control what resources can be accessed by your extension and what operations your extension is allowed to perform on those resources. The scopes you specify in your extension manifest are the scopes set on access tokens issued to your extension (see [Auth and security](auth.md) for more information).

If no scopes are specified, extensions are only provided access to user profile and extension data.

### Supported scopes

[!INCLUDE [](../../integrate/_shared/scopes.md)] 

### Changing a published extension's scopes

The scopes of an extension can be changed after publishing. Customers that previously installed your extension (and authorized the previous set of scopes) will remain on the previous version of the extension and will need to authorize the new scopes before being upgraded to the newest version.

The **Action Required** section of the Extension settings hub shows a user which, if any, installed extensions require authorization:

![scope-change](./_img/auth-new-scopes.png)

An administrator can then review and authorize the new set of scopes:

![scope-change-dialog](./_img/auth-new-scopes-dialog.png)

## Installation targets

As the name implies, installation targets define the products and services your extension can be installed into. `Microsoft.VisualStudio.Services` is the most common installation target and indicates that the extension can be installed into Azure DevOps Services and Team Foundation Server 2015 Update 2 and later (the version when extension were introduced in Team Foundation Server).

The installation targets for an extension or integration are specified via the `targets` field in the manifest. 

Supported identifiers for **extensions**:

* `Microsoft.VisualStudio.Services.Cloud`: installs into Azure DevOps Services
* `Microsoft.TeamFoundation.Server`: installs into Team Foundation Server
* `Microsoft.VisualStudio.Services`: installs into both. Shortcut for `Microsoft.VisualStudio.Services.Cloud` and `Microsoft.TeamFoundation.Server` version `[14.2,)`

Supported identifiers for **integrations** (tools or services that integrate with Azure DevOps Services or Team Foundation Server):

* `Microsoft.VisualStudio.Services.Cloud.Integration`: integrates with Azure DevOps Services
* `Microsoft.TeamFoundation.Server.Integration`: integrates with Team Foundation Server
* `Microsoft.VisualStudio.Services.Integration`: integrates with both. Shortcut for `Microsoft.VisualStudio.Services.Cloud.Integration` and `Microsoft.TeamFoundation.Server.Integration`

### Examples

#### Example 1: Extension that works with Azure DevOps Services and Team Foundation Server

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ]
}
```

#### Example 2: Extension that works only with Azure DevOps Services

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services.Cloud"
        }
    ]
}
```

Installation targets can also be used in the manifest of integrations (i.e. products, apps, or tools that work with, but do not install into, Azure DevOps Services or Team Foundation Server. For example:

#### Example 3: Integration that works with Azure DevOps Services and Team Foundation Server

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services.Integration"
        }
    ]
}
```

#### Example 4: Integration that only works with Team Foundation Server

```json
{
    "targets": [
        {
            "id": "Microsoft.TeamFoundation.Server.Integration"
        }
    ]
}
```

### Installation target versions

Some installation target identifiers, like `Microsoft.TeamFoundation.Server` and `Microsoft.TeamFoundation.Server.Integration`, support an optional version range. This further clarifies the supported releases the extension or integration is supported on. 

The version or version range is specified via the `version` field on the installation target object. This value can be either:

* A specific version, for example: `15.0` (2017 RTM only)
* A range of supported versions, for example: `[14.0)` (2015 RTM and later), `[14.3,15.1]` (2015 Update 3 through 2017 Update 1). Range values are refined using the following:
  * `[`: minimum version inclusive
  * `]`: maximum version inclusive
  * `(`: minimum version exclusive
  * `)`: maximum version exclusive

Version numbers for Team Foundation Server:

| Release      | Releases        | Version                             |
|--------------|-----------------|-------------------------------------|
| 2010         | All releases    | 10.0                                |
| 2012         | All releases    | 11.0                                |
| 2013         | RTM and updates | 12.0, 12.1, 12.2, 12.3, 12.4        |
| 2015         | RTM and updates | 14.0, 14.1, 14.2, 14.3              |
| 2017         | RTM and updates | 15.0, 15.1                          |

### Examples showing versions

#### Example 5: Extension that works with Azure DevOps Services and Team Foundation Server 2017 and later

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services.Cloud"
        },
        {
            "id": "Microsoft.TeamFoundation.Server",
            "version": "[15.0,)"
        }
    ]
}
```

#### Example 6: Integration that works with Team Foundation Server 2015 and later

```json
{
    "targets": [
        {
            "id": "Microsoft.TeamFoundation.Server.Integration",
            "version": "[14.0,)"
        }
    ]
}
```

#### Example 7: Integration that works with Team Foundation Server 2013 and 2015

```json
{
    "targets": [
        {
            "id": "Microsoft.TeamFoundation.Server.Integration",
            "version": "[12.0,15.0)"
        }
    ]
}
```

### Shortcuts

`Microsoft.VisualStudio.Services` is a shortcut for Azure DevOps Services and Team Foundation Server 2015 Update 2 and later. So this:

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ]
}
```

is equivalent to:

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services.Cloud"
        },
        {
            "id": "Microsoft.TeamFoundation.Server",
            "version": "[14.2,)"
        }
    ]
}
```

### Using installation targets and demands

Installation targets and demands are used together to present users with an accurate view of the products/services your extension or integration is compatible with. For example, specifying an installation target of `Microsoft.VisualStudio.Services` with a demand of `api-version/3.0` means the extension works with Azure DevOps Services and Team Foundation Server 2017 RTM and later:

#### Example 8: Extension that uses version 3.0 APIs

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "demands": [
        "api-version/3.0"
    ]
}
```

Resolves to the following installation targets:

1. `Microsoft.VisualStudio.Services.Cloud` 
2. `Microsoft.TeamFoundation.Server`, version: `[15.0,)`

#### Example 9: Integration that uses version 2.0 APIs

```json
{
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services.Integration"
        }
    ],
    "demands": [
        "api-version/2.0"
    ]
}
```

Resolves to the following installation targets:

1. `Microsoft.VisualStudio.Services.Cloud.Integration` 
2. `Microsoft.TeamFoundation.Server.Integration`, version: `[14.0,)`

## Demands

Demands let you specify capabilities and other features required by your extension. These demands can then be used to limit where your extension can be published or installed.
   
In the future, demands will be used by the Visual Studio Marketplace to list the products and environments your extension is generally compatible with. This will help customers understand whether your extension will work with their version of Team Foundation Server (for example).

Demands are specified in the extension manifest. For example:

```json
{
    "demands": [
        "api-version/3.0",
        "contribution/ms.vss-dashboards-web.widget-catalog"
    ]
}
```

In this example, the extension demands version 3.0 of the APIs, which means it can only be installed to Azure DevOps Services or Team Foundation Server 2017 RTM and later. It also requires the `ms.vss-dashboards-web` extension (and its `widget-catalog` contribution) to be installed (and enabled) in the collection before your extension can be installed.    

### Supported demands

| Type                        | Description                                          | Checked at publish? | Checked at install? | 
|-----------------------------| ---------------------------------------------------- |:-------------------:|:-------------------:|
| `environment/cloud`         | Requires running in a cloud environment              | Yes                 | Yes                 |
| `environment/onprem`        | Requires running in an on-premises environment       | Yes                 | Yes                 |
| `api-version/{version}`     | Requires a specific API version (minimum)            | No                  | Yes                 |
| `extension/{id}`            | Requires a specific extension be installed/enabled   | No                  | Yes                 |
| `contribution/{id}`         | Requires a specific contribution be available        | No                  | Yes                 |
| `contributionType/{id}`     | Requires a specific contribution type be available   | No                  | Yes                 |

#### Notes

* `environment/cloud` and `environment/onprem` should only be used when your extension has topology-related requirements that require running in that particular environment.
* `extension`, `contribution`, and `contributionType` demands are evaluated at install time, and requires that the specified extension is already installed and enabled in the organization/collection. 

## Files

The `files` section is where you reference any files you wish to include in your extension. You can add both folders and individual files:

```json
{
	"files": [
		{
			"path": "hello-world.html", "addressable": true
		},
		{
			"path": "scripts", "addressable": true
		},
		{
			"path": "images/logo.png", "addressable": true, "packagePath": "/"
		}
	]
}
```

### Properties

Properties for the Files section:

- **path** - Path of resource, root directory is where your manifest file is located
- **addressable** - Set to **true** if you want your file to be URL-addressable
- **packagePath** - Places your resource from disk to the specified value when packaged

## Contributions

Each contribution entry has the following properties:

* **id** - A reference ID (string) for the contribution. Each contribution's ID must be unique within an extension. See [referencing contributions and types](#contributionIds) below. 
* **type** - The ID of the contributionType of this contribution. 
* **description** - (Optional) A string describing what the contribution is providing.
* **targets** - An array of contribution IDs that the contribution is targeting (contributing to). See [Targeting contributions](#contributionTargets).
* **properties** - (Optional) An object that includes properties for the contribution as defined in the contribution type.

See the [contribution model overview](contributions-overview.md) topic for an overview about contributions.

<a name="contributionTypes"></a>
### Contribution types

Each contribution entry has the following properties:

* **id** - A reference ID (string) for the contribution type. Each contribution type's ID must be unique within an extension. See [referencing contributions and types](#contributionIds) below. 
* **name** - The friendly name of the contribution type. 
* **description** - (Optional) A string describing in more detail what the contribution type is for.
* **properties** - (Optional) A dictionary that maps property names to property descriptions. These properties describe the required and optional properties that can be used by contributions of this type.

Property descriptions have the following properties:

* **description** - (Optional) A string describing what the property is used for. 
* **required** - (Optional) A boolean value which if true indicates that the property is required for all contributions of this type.
* **type** - The type of value that the property can have. This may be: string, uri, guid, boolean, integer, double, dateTime, array, or object.

See the [contribution model overview](contributions-overview.md) topic for an overview about contributions.

<a name="contributionIds"></a>
### Referencing contributions and types

Contributions and contribution types are referenced by their identifiers. Contributions reference types through the `type` property, and reference other
contributions through the `targets` property.

A *full* contribution reference includes the publisher identifier, extension identifier, and contribution/type identifier, separated by
a dot (.). For example: `ms.vss-web.hub` is the full identifier for the contribution with identifier of "hub" in the "vss-web" extension published
by the "ms" (Microsoft) publisher.

*Relative* contribution references may be used within an extension manifest for a contribution's reference to another contribution or contribution
type within that same extension. In this case, the publisher and extension identifiers are NOT included, and the identifier is simply a dot (.) followed
by the contribution identifier. For example, ".hub" may be used within the "vss-web" extension mentioned above as a shortcut for "ms.vss-web.hub".

<a name="contributionTargets"></a>
### Targeting contributions

Some contributions act as containers that can be targeted by other contributions. A Hub Group and a Menu are examples of this. Hub contributions
can target Hub Groups. When a page is rendered, the web UI will show all Hub contributions that target the selected hub group. Hub groups themselves target a hub group collection which defines a set of hub groups that show up in a given navigational area (e.g. project-level admin pages).

Menus can be targeted by contributions of different types: action, hyperlink-action, and action-provider. Actions and hyperlink-actions provide single menu
item entries. An action-provider can provide multiple dynamic menu items. For a given menu, items are aggregated across all contributions (of any of these
types) that target that specific menu contribution.  

### Adding a hub icon

For information on adding an icon to your hub, check out the [hub icon guidance](web-navigation.md#hub-icon).

<a name="approvedbadges"></a>

## Supported badge services

The Marketplace only supports badges from the following trusted services:

* api.travis-ci.org/
* badge.fury.io/
* badges.frapsoft.com/
* badges.gitter.im/
* badges.greenkeeper.io/
* cdn.travis-ci.org/
* ci.appveyor.com/
* codeclimate.com/
* codecov.io/  
* coveralls.io/
* david-dm.org/
* gemnasium.com/
* img.shields.io/ 
* isitmaintained.com/
* marketplace.visualstudio.com/
* snyk.io/
* travis-ci.com/
* travis-ci.org/
* vsmarketplacebadge.apphb.com/
* bithound.io/
* deepscan.io/
* githost.io/
* gitlab.com/
* opencollective.co/

If you want to show a badge from another service, please contact vsmarketplace@microsoft.com.

<a name="example"></a>
## Example manifest

This extension contributions an action to the completed builds context menu and a hub to the Build hub group:

[!code-json[](../_data/extension.json)]
