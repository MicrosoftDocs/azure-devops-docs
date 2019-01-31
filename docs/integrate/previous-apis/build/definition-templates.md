---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Build Definition Templates | REST API Reference for Team Foundation Server
description: Get build definition templates programmatically using the REST APIs for Team Foundation Server.
ms.assetid: E7D635DE-CDAB-449A-80C5-EC89610A5A5A
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Build definition templates

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of build definition templates

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/templates?api-version=2.0
```

#### Sample response

```json
{
  "count": 7,
  "value": [
    {
      "id": "vsBuild",
      "name": "Visual Studio",
      "canDelete": false,
      "category": "Build",
      "iconTaskId": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
      "description": "Build and run tests using Visual Studio. This template requires that Visual Studio be installed on the build agent.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
              "versionSpec": "*"
            },
            "inputs": {
              "solution": "**\\*.sln",
              "msbuildLocation": "",
              "vsLocation": "",
              "msbuildArgs": "",
              "platform": "$(BuildPlatform)",
              "configuration": "$(BuildConfiguration)",
              "clean": "false"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
              "versionSpec": "*"
            },
            "inputs": {
              "testAssembly": "**\\$(BuildConfiguration)\\*test*.dll;-:**\\obj\\**",
              "vsTestLocation": "",
              "platform": "$(BuildPlatform)",
              "configuration": "$(BuildConfiguration)"
            }
          },
          {
            "enabled": true,
            "continueOnError": true,
            "alwaysRun": false,
            "task": {
              "id": "0675668a-7bba-4ccb-901d-5ad6554ca653",
              "versionSpec": "*"
            },
            "inputs": {
              "SymbolsPath": "",
              "SearchPattern": "**\\bin\\**\\*.pdb",
              "SymbolsFolder": "",
              "SourceFolder": "",
              "SymbolsMaximumWaitTime": "",
              "SymbolsProduct": "",
              "SymbolsVersion": "",
              "SymbolsArtifactName": "Symbols_$(BuildConfiguration)"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": true,
            "task": {
              "id": "1d341bb0-2106-458c-8422-d00bcea6512a",
              "versionSpec": "*"
            },
            "inputs": {
              "CopyRoot": "",
              "Contents": "**\\bin",
              "ArtifactName": "drop",
              "ArtifactType": "Container",
              "TargetPath": "\\\\my\\share\\$(Build.DefinitionName)\\$(Build.BuildNumber)"
            }
          }
        ],
        "options": [],
        "triggers": [],
        "variables": {
          "BuildConfiguration": {
            "value": "debug",
            "allowOverride": true
          },
          "BuildPlatform": {
            "value": "any cpu",
            "allowOverride": true
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "AzureCloud",
      "name": "Azure Cloud Services",
      "canDelete": false,
      "category": "Deployment",
      "iconTaskId": "2ca8fe15-42ea-4b26-80f1-e0738ec17e89",
      "description": "Build, package, test and deploy your Azure Cloud Service.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
              "versionSpec": "*"
            },
            "inputs": {
              "solution": "**\\*.sln",
              "msbuildLocation": "",
              "vsLocation": "",
              "msbuildArgs": "",
              "platform": "$(BuildPlatform)",
              "configuration": "$(BuildConfiguration)",
              "clean": "false",
              "restoreNugetPackages": "true"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
              "versionSpec": "*"
            },
            "inputs": {
              "solution": "**\\*.ccproj",
              "msbuildLocation": "",
              "vsLocation": "",
              "msbuildArgs": "/t:Publish /p:TargetProfile=$(targetProfile) /p:DebugType=None /p:SkipInvalidConfigurations=true /p:OutputPath=bin\\ /p:PublishDir=\"$(build.stagingDirectory)\\\\\"",
              "platform": "",
              "configuration": "",
              "clean": "false",
              "restoreNugetPackages": "false"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
              "versionSpec": "*"
            },
            "inputs": {
              "testAssembly": "**\\$(BuildConfiguration)\\*test*.dll;-:**\\obj\\**",
              "vsTestLocation": ""
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "2ca8fe15-42ea-4b26-80f1-e0738ec17e89",
              "versionSpec": "*"
            },
            "inputs": {
              "DeploymentEnvironmentName": "",
              "ServiceName": "",
              "ServiceLocation": "South Central US",
              "StorageAccount": "",
              "CsPkg": "$(build.stagingDirectory)\\*.cspkg",
              "CsCfg": "$(build.stagingDirectory)\\*.cscfg",
              "Slot": "Production",
              "AllowUpgrade": "true"
            }
          },
          {
            "enabled": true,
            "continueOnError": true,
            "alwaysRun": false,
            "task": {
              "id": "0675668a-7bba-4ccb-901d-5ad6554ca653",
              "versionSpec": "*"
            },
            "inputs": {
              "SymbolsPath": "",
              "SearchPattern": "**\\bin\\**\\*.pdb",
              "SymbolsFolder": "",
              "SourceFolder": "",
              "SymbolsMaximumWaitTime": "",
              "SymbolsProduct": "",
              "SymbolsVersion": "",
              "SymbolsArtifactName": "Symbols_$(BuildConfiguration)"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": true,
            "task": {
              "id": "1d341bb0-2106-458c-8422-d00bcea6512a",
              "versionSpec": "*"
            },
            "inputs": {
              "CopyRoot": "",
              "Contents": "**\\bin",
              "ArtifactName": "drop",
              "ArtifactType": "Container",
              "TargetPath": ""
            }
          }
        ],
        "options": [],
        "triggers": [
          {
            "branchFilters": [],
            "batchChanges": false,
            "triggerType": "continuousIntegration"
          }
        ],
        "variables": {
          "BuildConfiguration": {
            "value": "release",
            "allowOverride": true
          },
          "BuildPlatform": {
            "value": "any cpu",
            "allowOverride": true
          },
          "targetProfile": {
            "value": "Cloud",
            "allowOverride": true
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "AzureWeb",
      "name": "Azure Website",
      "canDelete": false,
      "category": "Deployment",
      "iconTaskId": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
      "description": "Build, package, test and deploy your Azure Website.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
              "versionSpec": "*"
            },
            "inputs": {
              "solution": "**\\*.sln",
              "msbuildLocation": "",
              "vsLocation": "",
              "msbuildArgs": "/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:PackageLocation=\"$(build.stagingDirectory)\"",
              "platform": "$(BuildPlatform)",
              "configuration": "$(BuildConfiguration)",
              "clean": "false",
              "restoreNugetPackages": "true"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
              "versionSpec": "*"
            },
            "inputs": {
              "testAssembly": "**\\$(BuildConfiguration)\\*test*.dll;-:**\\obj\\**",
              "vsTestLocation": ""
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "dcbef2c9-e4f4-4929-82b2-ea7fc9166109",
              "versionSpec": "*"
            },
            "inputs": {
              "DeploymentEnvironmentName": "",
              "WebSiteName": "",
              "WebSiteLocation": "South Central US",
              "Package": "$(build.stagingDirectory)\\**\\*.zip"
            }
          },
          {
            "enabled": true,
            "continueOnError": true,
            "alwaysRun": false,
            "task": {
              "id": "0675668a-7bba-4ccb-901d-5ad6554ca653",
              "versionSpec": "*"
            },
            "inputs": {
              "SymbolsPath": "",
              "SearchPattern": "**\\bin\\**\\*.pdb",
              "SymbolsFolder": "",
              "SourceFolder": "",
              "SymbolsMaximumWaitTime": "",
              "SymbolsProduct": "",
              "SymbolsVersion": "",
              "SymbolsArtifactName": "Symbols_$(BuildConfiguration)"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": true,
            "task": {
              "id": "1d341bb0-2106-458c-8422-d00bcea6512a",
              "versionSpec": "*"
            },
            "inputs": {
              "CopyRoot": "",
              "Contents": "**\\*",
              "ArtifactName": "drop",
              "ArtifactType": "Container",
              "TargetPath": ""
            }
          }
        ],
        "options": [],
        "triggers": [
          {
            "branchFilters": [],
            "batchChanges": false,
            "triggerType": "continuousIntegration"
          }
        ],
        "variables": {
          "BuildConfiguration": {
            "value": "release",
            "allowOverride": true
          },
          "BuildPlatform": {
            "value": "any cpu",
            "allowOverride": true
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "Xcode",
      "name": "Xcode",
      "canDelete": false,
      "category": "Build",
      "iconTaskId": "1e78dc1b-9132-4b18-9c75-0e7ecc634b74",
      "description": "Build and test an Xcode workspace. This template requires a Mac OS build agent.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "1e78dc1b-9132-4b18-9c75-0e7ecc634b74",
              "versionSpec": "*"
            },
            "inputs": {
              "xcWorkspacePath": "",
              "projectPath": "",
              "targetName": "",
              "scheme": "",
              "actions": "build",
              "configuration": "$(Configuration)",
              "sdk": "$(SDK)",
              "outputPattern": "$(SDK)/$(Configuration)"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "1e78dc1b-9132-4b18-9c75-0e7ecc634b74",
              "versionSpec": "*"
            },
            "inputs": {
              "xcWorkspacePath": "",
              "projectPath": "",
              "targetName": "",
              "scheme": "",
              "actions": "test",
              "configuration": "$(Configuration)",
              "sdk": "$(SDK)",
              "outputPattern": "$(SDK)/$(Configuration)"
            }
          }
        ],
        "options": [
          {
            "enabled": true,
            "definition": {
              "id": "7c555368-ca64-4199-add6-9ebaf0b0137d"
            },
            "inputs": {
              "multipliers": "[\"Configuration\",\"SDK\"]",
              "parallel": "false"
            }
          },
          {
            "enabled": false,
            "definition": {
              "id": "82f9a3e8-3930-482e-ac62-ae3276f284d5"
            },
            "inputs": {
              "pattern": "",
              "stagingfolder": ""
            }
          },
          {
            "enabled": false,
            "definition": {
              "id": "e8b30f6f-039d-4d34-969c-449bbe9c3b9e"
            },
            "inputs": {
              "location": "filecontainer",
              "path": ""
            }
          }
        ],
        "triggers": [],
        "variables": {
          "Configuration": {
            "value": "Debug, Release",
            "allowOverride": true
          },
          "SDK": {
            "value": "iphonesimulator",
            "allowOverride": true
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "blank",
      "name": "Empty",
      "canDelete": false,
      "category": "Empty",
      "description": "Start with an empty definition",
      "template": {
        "build": [],
        "options": [],
        "triggers": [],
        "variables": {},
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "XamarinAndroid",
      "name": "Xamarin.Android",
      "canDelete": false,
      "category": "Build",
      "iconTaskId": "27edd013-36fd-43aa-96a3-7d73e1e35285",
      "description": "Build an Android app and Xamarin.UITest assembly. Test with Xamarin Test Cloud.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "6237827d-6244-4d52-b93e-47d8610fbd8a",
              "versionSpec": "*"
            },
            "inputs": {
              "action": "Activate",
              "email": "",
              "password": "",
              "timeout": "30"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "27edd013-36fd-43aa-96a3-7d73e1e35285",
              "versionSpec": "*"
            },
            "inputs": {
              "project": "",
              "target": "",
              "outputDir": "$(Agent.BuildDirectory)\\bin\\Release",
              "configuration": "$(BuildConfiguration)",
              "msbuildLocation": "",
              "msbuildArguments": ""
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "displayName": "Build Xamarin.UITest test assemblies",
            "task": {
              "id": "c6c4c611-aa2e-4a33-b606-5eaba2196824",
              "versionSpec": "*"
            },
            "inputs": {
              "solution": "**\\*test*.csproj",
              "platform": "",
              "configuration": "$(BuildConfiguration)",
              "msbuildArguments": "/p:OutputPath=$(Agent.BuildDirectory)\\bin\\test-assembly",
              "clean": "false",
              "restoreNugetPackages": "false"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "049918cb-1488-48eb-85e8-c318eccaaa74",
              "versionSpec": "*"
            },
            "inputs": {
              "app": "$(Agent.BuildDirectory)\\bin\\Release\\*.apk",
              "dsym": "",
              "teamApiKey": "",
              "user": "",
              "devices": "",
              "series": "master",
              "testDir": "$(Agent.BuildDirectory)\\bin\\test-assembly",
              "parallelization": "none",
              "locale": "en_US",
              "testCloudLocation": "$(Agent.BuildDirectory)\\**\\packages\\**\\tools\\test-cloud.exe",
              "optionalArgs": ""
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "80f3f6a0-82a6-4a22-ba7a-e5b8c541b9b9",
              "versionSpec": "*"
            },
            "inputs": {
              "files": "$(Agent.BuildDirectory)\\bin\\Release\\*.apk",
              "jarsign": "false",
              "keystoreFile": "",
              "keystorePass": "",
              "keystoreAlias": "",
              "keyPass": "",
              "jarsignerArguments": "-verbose -sigalg MD5withRSA -digestalg SHA1",
              "zipalign": "false",
              "zipalignLocation": ""
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": true,
            "task": {
              "id": "6237827d-6244-4d52-b93e-47d8610fbd8a",
              "versionSpec": "*"
            },
            "inputs": {
              "action": "Deactivate",
              "email": "",
              "password": "",
              "timeout": "30"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": true,
            "task": {
              "id": "1d341bb0-2106-458c-8422-d00bcea6512a",
              "versionSpec": "*"
            },
            "inputs": {
              "CopyRoot": "$(Agent.BuildDirectory)\\bin\\Release",
              "Contents": "**\\*",
              "ArtifactName": "drop",
              "ArtifactType": "Container",
              "TargetPath": ""
            }
          }
        ],
        "options": [
          {
            "enabled": true,
            "definition": {
              "id": "82f9a3e8-3930-482e-ac62-ae3276f284d5"
            },
            "inputs": {
              "pattern": "$(Agent.BuildDirectory)\\bin\\Release\\",
              "stagingfolder": ""
            }
          }
        ],
        "triggers": [],
        "variables": {
          "BuildConfiguration": {
            "value": "Release"
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    },
    {
      "id": "XamariniOS",
      "name": "Xamarin.iOS",
      "canDelete": false,
      "category": "Build",
      "iconTaskId": "0f077e3a-af59-496d-81bc-ad971b7464e0",
      "description": "Build a Xamarin.iOS app and Xamarin.UITest assembly. Test with Xamarin Test Cloud. This template requires a Mac OS build agent.",
      "template": {
        "build": [
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "0f077e3a-af59-496d-81bc-ad971b7464e0",
              "versionSpec": "*"
            },
            "inputs": {
              "configuration": "$(Configuration)",
              "mdtoolLocation": "",
              "forSimulator": "false"
            }
          },
          {
            "enabled": true,
            "continueOnError": false,
            "alwaysRun": false,
            "task": {
              "id": "049918cb-1488-48eb-85e8-c318eccaaa74",
              "versionSpec": "*"
            },
            "inputs": {
              "app": "**/*.ipa",
              "dsym": "*.dSYM",
              "teamApiKey": "",
              "user": "",
              "devices": "",
              "series": "master",
              "testDir": "",
              "parallelization": "none",
              "locale": "en_US",
              "testCloudLocation": "**/packages/**/tools/test-cloud.exe",
              "optionalArgs": ""
            }
          }
        ],
        "options": [],
        "triggers": [],
        "variables": {
          "Configuration": {
            "value": "Release",
            "allowOverride": true
          }
        },
        "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
        "jobAuthorizationScope": "projectCollection",
        "type": "build"
      }
    }
  ]
}
```


## Get a build definition template

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/build/definition/templates/{templateId}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| instance     | string | TFS server name ({server:port}).
| project      | string | [Project](../tfs/projects.md) ID or name.
| templateId   | int    | ID of the build definition template.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/templates/vsBuild?api-version=2.0
```

#### Sample response

```json
{
  "id": "vsBuild",
  "name": "Visual Studio",
  "canDelete": false,
  "category": "Build",
  "iconTaskId": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
  "description": "Build and run tests using Visual Studio. This template requires that Visual Studio be installed on the build agent.",
  "template": {
    "build": [
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "task": {
          "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
          "versionSpec": "*"
        },
        "inputs": {
          "solution": "**\\*.sln",
          "msbuildLocation": "",
          "vsLocation": "",
          "msbuildArgs": "",
          "platform": "$(BuildPlatform)",
          "configuration": "$(BuildConfiguration)",
          "clean": "false"
        }
      },
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "task": {
          "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
          "versionSpec": "*"
        },
        "inputs": {
          "testAssembly": "**\\$(BuildConfiguration)\\*test*.dll;-:**\\obj\\**",
          "vsTestLocation": "",
          "platform": "$(BuildPlatform)",
          "configuration": "$(BuildConfiguration)"
        }
      },
      {
        "enabled": true,
        "continueOnError": true,
        "alwaysRun": false,
        "task": {
          "id": "0675668a-7bba-4ccb-901d-5ad6554ca653",
          "versionSpec": "*"
        },
        "inputs": {
          "SymbolsPath": "",
          "SearchPattern": "**\\bin\\**\\*.pdb",
          "SymbolsFolder": "",
          "SourceFolder": "",
          "SymbolsMaximumWaitTime": "",
          "SymbolsProduct": "",
          "SymbolsVersion": "",
          "SymbolsArtifactName": "Symbols_$(BuildConfiguration)"
        }
      },
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": true,
        "task": {
          "id": "1d341bb0-2106-458c-8422-d00bcea6512a",
          "versionSpec": "*"
        },
        "inputs": {
          "CopyRoot": "",
          "Contents": "**\\bin",
          "ArtifactName": "drop",
          "ArtifactType": "Container",
          "TargetPath": "\\\\my\\share\\$(Build.DefinitionName)\\$(Build.BuildNumber)"
        }
      }
    ],
    "options": [],
    "triggers": [],
    "variables": {
      "BuildConfiguration": {
        "value": "debug",
        "allowOverride": true
      },
      "BuildPlatform": {
        "value": "any cpu",
        "allowOverride": true
      }
    },
    "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
    "jobAuthorizationScope": "projectCollection",
    "type": "build"
  }
}
```



## Create or update a build definition template

```no-highlight
PUT https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates/{templateId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| templateId    | int                  | ID of the build definition template.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/templates/myCustomTemplate?api-version=2.0
```
```json
{
  "name": "My Custom Template",
  "description": "A custom template for a custom process",
  "template": {
    "build": [
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "displayName": "Build solution **\\*.sln",
        "task": {
          "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
          "versionSpec": "*"
        },
        "inputs": {
          "solution": "**\\*.sln",
          "msbuildArgs": "",
          "platform": "$(platform)",
          "configuration": "$(config)",
          "clean": "false",
          "restoreNugetPackages": "true",
          "vsLocationMethod": "version",
          "vsVersion": "latest",
          "vsLocation": "",
          "msbuildLocationMethod": "version",
          "msbuildVersion": "latest",
          "msbuildArchitecture": "x86",
          "msbuildLocation": "",
          "logProjectEvents": "true"
        }
      },
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
        "task": {
          "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
          "versionSpec": "*"
        },
        "inputs": {
          "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
          "testFiltercriteria": "",
          "runSettingsFile": "",
          "codeCoverageEnabled": "true",
          "otherConsoleOptions": "",
          "vsTestVersion": "14.0",
          "pathtoCustomTestAdapters": ""
        }
      }
    ],
    "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
    "jobAuthorizationScope": "projectCollection",
    "triggers": [
      {
        "batchChanges": false,
        "branchFilters": "",
        "triggerType": "continuousIntegration"
      }
    ],
    "variables": {
      "forceClean": {
        "value": "false",
        "allowOverride": true
      },
      "config": {
        "value": "debug, release",
        "allowOverride": true
      },
      "platform": {
        "value": "any cpu",
        "allowOverride": true
      }
    }
  }
}
```

#### Sample response

```json
{
  "id": "myCustomTemplate",
  "name": "My Custom Template",
  "canDelete": true,
  "category": "Custom",
  "description": "A custom template for a custom process",
  "template": {
    "build": [
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "displayName": "Build solution **\\*.sln",
        "task": {
          "id": "71a9a2d3-a98a-4caa-96ab-affca411ecda",
          "versionSpec": "*"
        },
        "inputs": {
          "solution": "**\\*.sln",
          "msbuildArgs": "",
          "platform": "$(platform)",
          "configuration": "$(config)",
          "clean": "false",
          "restoreNugetPackages": "true",
          "vsLocationMethod": "version",
          "vsVersion": "latest",
          "vsLocation": "",
          "msbuildLocationMethod": "version",
          "msbuildVersion": "latest",
          "msbuildArchitecture": "x86",
          "msbuildLocation": "",
          "logProjectEvents": "true"
        }
      },
      {
        "enabled": true,
        "continueOnError": false,
        "alwaysRun": false,
        "displayName": "Test Assemblies **\\*test*.dll;-:**\\obj\\**",
        "task": {
          "id": "ef087383-ee5e-42c7-9a53-ab56c98420f9",
          "versionSpec": "*"
        },
        "inputs": {
          "testAssembly": "**\\*test*.dll;-:**\\obj\\**",
          "testFiltercriteria": "",
          "runSettingsFile": "",
          "codeCoverageEnabled": "true",
          "otherConsoleOptions": "",
          "vsTestVersion": "14.0",
          "pathtoCustomTestAdapters": ""
        }
      }
    ],
    "triggers": [
      {
        "branchFilters": [],
        "batchChanges": false,
        "triggerType": "continuousIntegration"
      }
    ],
    "variables": {
      "forceClean": {
        "value": "false",
        "allowOverride": true
      },
      "config": {
        "value": "debug, release",
        "allowOverride": true
      },
      "platform": {
        "value": "any cpu",
        "allowOverride": true
      }
    },
    "properties": {},
    "_links": {},
    "buildNumberFormat": "$(date:yyyyMMdd)$(rev:.r)",
    "jobAuthorizationScope": "projectCollection",
    "type": "build"
  }
}
```



## Delete a build definition template

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/build/definitions/templates/{templateId}?api-version={version}
```

| Parameter     | Type                 | Notes
|:--------------|:---------------------|:------------
| URL
| instance      | string               | TFS server name ({server:port}).
| project       | string               | [Project](../tfs/projects.md) ID or name.
| templateId    | int                  | ID of the build definition template.
| Query
| api-version   | string               | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/build/definitions/templates/myCustomTemplate?api-version=2.0
```

