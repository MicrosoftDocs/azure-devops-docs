---
title: Add a Custom Build or Release Task in an Extension 
description: Learn how to create, test, and publish custom build or release pipeline tasks as Azure DevOps extensions with TypeScript and Node.js.
ms.assetid: 98821825-da46-498e-9b01-64d3a8c78ea0
ms.subservice: azure-devops-ecosystem
ms.custom: freshness-fy22q3
ms.topic: how-to
ai-usage: ai-assisted
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 08/05/2025
customer-intent: As a developer, I want to create custom build and release tasks for Azure DevOps pipelines so that I can extend the platform with specialized functionality for my team's workflows.
---

# Add a custom pipelines task extension

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This guide walks you through creating, testing, and publishing custom build or release tasks as Azure DevOps extensions. Custom pipeline tasks let you extend Azure DevOps with specialized functionality tailored to your team's workflows, from simple utilities to complex integrations with external systems.

You learn how to:
- Set up the development environment and project structure
- Create task logic using TypeScript and the Azure Pipelines Task Library
- Implement comprehensive unit testing with mock frameworks
- Package your extension for distribution
- Publish to the Visual Studio Marketplace
- Set up automated CI/CD pipelines for extension maintenance

For more information about Azure Pipelines, see [What is Azure Pipelines?](../../pipelines/get-started/what-is-azure-pipelines.md)

> [!NOTE]
> This article covers agent tasks in agent-based extensions. For information about server tasks and server-based extensions, see [Server Task Authoring](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/servertaskauthoring.md).

## Prerequisites

Before you begin, ensure you have the following requirements in place:

| Component | Requirement | Description |
|-----------|-------------|-------------|
| **Azure DevOps organization** | Required | [Create an organization](../../organizations/accounts/create-organization.md) if you don't have one |
| **Text editor** | Recommended | [Visual Studio Code](https://code.visualstudio.com) for IntelliSense and debugging support |
| **Node.js** | Required | Install the [latest version](https://nodejs.org/en/download/) (Node.js 20 or later recommended) |
| **TypeScript compiler** | Required | Install the [latest version](https://www.npmjs.com/package/typescript) (version 4.6.3 or later) |
| **Azure DevOps CLI (tfx-cli)** | Required | Install using `npm i -g tfx-cli` to package extensions |
| **Azure DevOps Extension SDK** | Required | Install the [azure-devops-extension-sdk](https://github.com/Microsoft/azure-devops-extension-sdk) package |
| **Testing framework** | Required | Mocha for unit testing (installed during setup) |

### Project structure

Create a `home` directory for your project. After you complete this tutorial, your extension should have the following structure:

```
|--- README.md    
|--- images                        
    |--- extension-icon.png  
|--- buildandreleasetask            // Task scripts location
    |--- task.json                  // Task definition
    |--- index.ts                   // Main task logic
    |--- package.json               // Node.js dependencies
    |--- tests/                     // Unit tests
        |--- _suite.ts
        |--- success.ts
        |--- failure.ts
|--- vss-extension.json             // Extension manifest
```

> [!IMPORTANT]
> Your development machine must run the [latest version of Node.js](https://nodejs.org/en/download/) to ensure compatibility with the production environment. Update your `task.json` file to use Node 20:
> ```json
> "execution": {
>     "Node20_1": {
>       "target": "index.js"
>     }
> }
> ```

<a name="createtask"></a>

## 1. Create a custom task

This section guides you through creating the basic structure and implementation of your custom task. All files in this step should be created within the `buildandreleasetask` folder inside your project's `home` directory.

> [!NOTE]
> This walkthrough uses Windows with PowerShell. The steps work on all platforms, but environment variable syntax differs. On Mac or Linux, replace `$env:<var>=<val>` with `export <var>=<val>`.

### Set up the task scaffolding

Create the basic project structure and install required dependencies:

1. To initialize the Node.js project, open PowerShell, go to your `buildandreleasetask` folder, and run:

   ```powershell
   npm init --yes
   ```

   The `package.json` file gets created with default settings. The `--yes` flag accepts all default options automatically.

  > [!TIP]
  > Azure Pipelines agents expect task folders to include node modules. Copy `node_modules` to your `buildandreleasetask` folder. To manage VSIX file size (50-MB limit), consider running `npm install --production` or `npm prune --production` before packaging.

2. Install the Azure Pipelines Task Library:

   ```powershell
   npm install azure-pipelines-task-lib --save
   ```

3. Install TypeScript type definitions:

   ```powershell
   npm install @types/node --save-dev
   npm install @types/q --save-dev
   ```

4. Set up version control exclusions

   ```powershell
   echo node_modules > .gitignore
   ```

   Your build process should run `npm install` to rebuild node_modules each time.

5. Install testing dependencies:

   ```powershell
   npm install mocha --save-dev -g
   npm install sync-request --save-dev
   npm install @types/mocha --save-dev
   ```

6. Install TypeScript compiler:

   ```powershell
   npm install typescript@4.6.3 -g --save-dev
   ```

   > [!NOTE]
   > Install TypeScript globally to ensure the `tsc` command is available. Without it, TypeScript 2.3.4 is used by default.

7. Configure TypeScript compilation:

   ```powershell
   tsc --init --target es2022
   ```

   The `tsconfig.json` file gets created with ES2022 target settings.

### Implement the task logic

With scaffolding complete, create the core task files that define functionality and metadata:

1. Create the task definition file: Create `task.json` in the `buildandreleasetask` folder. This file describes your task to the Azure Pipelines system, defining inputs, execution settings, and UI presentation.

   ```json
   {
    "$schema": "https://raw.githubusercontent.com/Microsoft/azure-pipelines-task-lib/master/tasks.schema.json",
    "id": "{{taskguid}}",
    "name": "{{taskname}}",
    "friendlyName": "{{taskfriendlyname}}",
    "description": "{{taskdescription}}",
    "helpMarkDown": "",
    "category": "Utility",
    "author": "{{taskauthor}}",
    "version": {
        "Major": 0,
        "Minor": 1,
        "Patch": 0
    },
    "instanceNameFormat": "Echo $(samplestring)",
    "inputs": [
        {
            "name": "samplestring",
            "type": "string",
            "label": "Sample String",
            "defaultValue": "",
            "required": true,
            "helpMarkDown": "A sample string"
        }
    ],
    "execution": {
        "Node20_1": {
            "target": "index.js"
        }
    }
    }
   ```

   > [!NOTE]
   > Replace `{{placeholders}}` with your task's actual information. The `taskguid` must be unique. Generate one using PowerShell: `(New-Guid).Guid`

2. To implement the task logic, create `index.ts` with your task's main functionality:

   ```typescript
   import tl = require('azure-pipelines-task-lib/task');

    async function run() {
        try {
            const inputString: string | undefined = tl.getInput('samplestring', true);
            if (inputString == 'bad') {
                tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
                return;
            }
            console.log('Hello', inputString);
        }
        catch (err: any) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    }

    run();
   ```

3. Compile TypeScript to JavaScript:

   ```powershell
   tsc
   ```

   The `index.js` file gets created from your TypeScript source.

### Understanding task.json components

The `task.json` file is the heart of your task definition. Here are the key properties:

| Property | Description | Example |
|----------|-------------|---------|
| `id` | Unique GUID identifier for your task | Generated using `(New-Guid).Guid` |
| `name` | Task name without spaces (used internally) | `MyCustomTask` |
| `friendlyName` | Display name shown in the UI | `My Custom Task` |
| `description` | Detailed description of task functionality | `Performs custom operations on files` |
| `author` | Publisher or author name | `My Company` |
| `instanceNameFormat` | How the task appears in pipeline steps | `Process $(inputFile)` |
| `inputs` | Array of input parameters | See the following input types |
| `execution` | Execution environment specification | `Node20_1`, `PowerShell3`, etc. |
| `restrictions` | Security restrictions for commands and variables | Recommended for new tasks |

#### Security restrictions

For production tasks, add security restrictions to limit command usage and variable access:

```json
"restrictions": {
  "commands": {
    "mode": "restricted"
  },
  "settableVariables": {
    "allowed": ["variable1", "test*"]
  }
}
```

**Restricted mode** allows only these commands:
- `logdetail`, `logissue`, `complete`, `setprogress`
- `setsecret`, `setvariable`, `debug`, `settaskvariable`
- `prependpath`, `publish`

**Variable allowlist** controls which variables can be set via `setvariable` or `prependpath`. Supports basic regex patterns.

> [!NOTE]
> This feature requires [agent version 2.182.1](https://github.com/microsoft/azure-pipelines-agent/releases/tag/v2.182.1) or later.

### Input types and examples

Common input types for task parameters:

```json
"inputs": [
    {
        "name": "stringInput",
        "type": "string",
        "label": "Text Input",
        "defaultValue": "",
        "required": true,
        "helpMarkDown": "Enter a text value"
    },
    {
        "name": "boolInput",
        "type": "boolean",
        "label": "Enable Feature",
        "defaultValue": "false",
        "required": false
    },
    {
        "name": "picklistInput",
        "type": "pickList",
        "label": "Select Option",
        "options": {
            "option1": "First Option",
            "option2": "Second Option"
        },
        "defaultValue": "option1"
    },
    {
        "name": "fileInput",
        "type": "filePath",
        "label": "Input File",
        "required": true,
        "helpMarkDown": "Path to the input file"
    }
]
```

### Test your task locally

Before packaging, test your task to ensure it works correctly:

1. Test with missing input (should fail):

   ```powershell
   node index.js
   ```

   Expected output:
   ```
   ##vso[task.debug]agent.workFolder=undefined
   ##vso[task.debug]loading inputs and endpoints
   ##vso[task.debug]loaded 0
   ##vso[task.debug]task result: Failed
   ##vso[task.issue type=error;]Input required: samplestring
   ##vso[task.complete result=Failed;]Input required: samplestring
   ```

2. Test with valid input (should succeed):

   ```powershell
   $env:INPUT_SAMPLESTRING="World"
   node index.js
   ```

   Expected output:
   ```
   ##vso[task.debug]agent.workFolder=undefined
   ##vso[task.debug]loading inputs and endpoints
   ##vso[task.debug]loading INPUT_SAMPLESTRING
   ##vso[task.debug]loaded 1
   ##vso[task.debug]samplestring=World
   Hello World
   ```

3. Test error handling:

   ```powershell
   $env:INPUT_SAMPLESTRING="bad"
   node index.js
   ```

   This action should trigger the error handling path in your code.

> [!TIP]
> For information about task runners and Node.js versions, see [Node runner update guidance](https://devblogs.microsoft.com/devops/node-runner-update-guidance-for-azure-pipelines-task-authors/#upcoming-changes).

For more information, see the [Build/release task reference](./integrate-build-task.md).

## Step 2: Implement comprehensive unit testing

Testing your task thoroughly ensures reliability and helps catch issues before deployment to production pipelines.

### Install testing dependencies

Install the required testing tools:

```powershell
npm install mocha --save-dev -g
npm install sync-request --save-dev
npm install @types/mocha --save-dev
```

### Create test

1. Create a `tests` folder in your task directory containing a `_suite.ts` file:

   ```typescript
    import * as path from 'path';
    import * as assert from 'assert';
    import * as ttm from 'azure-pipelines-task-lib/mock-test';
    
    describe('Sample task tests', function () {
    
        before( function() {
            // Setup before tests
        });
    
        after(() => {
            // Cleanup after tests
        });
    
        it('should succeed with simple inputs', function(done: Mocha.Done) {
            // Success test implementation
        });
    
        it('should fail if tool returns 1', function(done: Mocha.Done) {
            // Failure test implementation
        });    
      });
   ```

   > [!TIP]
   > Your test folder should be located in the task folder (for example, `buildandreleasetask`). If you encounter a sync-request error, install it in the task folder: `npm i --save-dev sync-request`.

2. Create `success.ts` in your test directory to simulate successful task execution:

   ```typescript
    import ma = require('azure-pipelines-task-lib/mock-answer');
    import tmrm = require('azure-pipelines-task-lib/mock-run');
    import path = require('path');
    
    let taskPath = path.join(__dirname, '..', 'index.js');
    let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
    
    // Set valid input for success scenario
    tmr.setInput('samplestring', 'human');
    
    tmr.run();
   ```

3. Add the success test to your `_suite.ts` file:

   ```typescript
    it('should succeed with simple inputs', function(done: Mocha.Done) {
        this.timeout(1000);

        let tp: string = path.join(__dirname, 'success.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.runAsync().then(() => {
            console.log(tr.succeeded);
            assert.equal(tr.succeeded, true, 'should have succeeded');
            assert.equal(tr.warningIssues.length, 0, "should have no warnings");
            assert.equal(tr.errorIssues.length, 0, "should have no errors");
            console.log(tr.stdout);
            assert.equal(tr.stdout.indexOf('Hello human') >= 0, true, "should display Hello human");
            done();
        }).catch((error) => {
            done(error); // Ensure the test case fails if there's an error
        });
    });
   ```

4. Create `failure.ts` in your test directory to test error handling:

    ```typescript
    import ma = require('azure-pipelines-task-lib/mock-answer');
    import tmrm = require('azure-pipelines-task-lib/mock-run');
    import path = require('path');
    
    let taskPath = path.join(__dirname, '..', 'index.js');
    let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
    
    // Set invalid input to trigger failure
    tmr.setInput('samplestring', 'bad');
    
    tmr.run();
    ```

5. Add the failure test to your `_suite.ts` file:

   ```typescript
    it('should fail if tool returns 1', function(done: Mocha.Done) {
        this.timeout(1000);
    
        const tp = path.join(__dirname, 'failure.js');
        const tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);
    
        tr.runAsync().then(() => {
            console.log(tr.succeeded);
            assert.equal(tr.succeeded, false, 'should have failed');
            assert.equal(tr.warningIssues.length, 0, 'should have no warnings');
            assert.equal(tr.errorIssues.length, 1, 'should have 1 error issue');
            assert.equal(tr.errorIssues[0], 'Bad input was given', 'error issue output');
            assert.equal(tr.stdout.indexOf('Hello bad'), -1, 'Should not display Hello bad');
            done();
        });
    });
   ```

### Run your tests

Execute the test suite:

```powershell
# Compile TypeScript
tsc

# Run tests
mocha tests/_suite.js
```

Both tests should pass. For verbose output (similar to build console output), set the trace environment variable:

```powershell
$env:TASK_TEST_TRACE=1
mocha tests/_suite.js
```

### Test coverage best practices

- **Test all input combinations**: Valid inputs, invalid inputs, missing required inputs
- **Test error scenarios**: Network failures, file system errors, permission issues
- **Mock external dependencies**: Don't rely on external services in unit tests
- **Validate outputs**: Check console output, task results, and generated artifacts
- **Performance testing**: Consider adding tests for tasks that process large files

### Security best practices

- **Input validation**: Always validate and sanitize inputs
- **Secrets handling**: Use `setSecret` for sensitive data
- **Command restrictions**: Implement command restrictions for production tasks
- **Minimal permissions**: Request only necessary permissions
- **Regular updates**: Keep dependencies and Node.js versions current

After testing your task locally and implementing comprehensive unit tests, package it into an extension for Azure DevOps.

### Install packaging tools

Install the Cross Platform Command Line Interface (tfx-cli):

```powershell
npm install -g tfx-cli
```

<a name="extensionmanifest"></a>

### Create the extension manifest

The extension manifest (`vss-extension.json`) contains all information about your extension, including references to your task folders and images.

1. Create an images folder with an `extension-icon.png` file
2. Create `vss-extension.json` in your extension's root directory (not in the task folder):

```json
{
    "manifestVersion": 1,
    "id": "my-custom-tasks",
    "name": "My Custom Tasks",
    "version": "1.0.0",
    "publisher": "your-publisher-id",
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "description": "Custom build and release tasks for Azure DevOps",
    "categories": [
        "Azure Pipelines"
    ],
    "icons": {
        "default": "images/extension-icon.png"
    },
    "files": [
        {
            "path": "MyCustomTask"
        }
    ],
    "contributions": [
        {
            "id": "my-custom-task",
            "type": "ms.vss-distributed-task.task",
            "targets": [
                "ms.vss-distributed-task.tasks"
            ],
            "properties": {
                "name": "MyCustomTask"
            }
        }
    ]
}
```

#### Key manifest properties

| Property | Description |
|----------|-------------|
| `publisher` | Your marketplace publisher identifier |
| `contributions.id` | Unique identifier within the extension |
| `contributions.properties.name` | Must match your task folder name |
| `files.path` | Path to your task folder relative to the manifest |

> [!NOTE]
> Change the **publisher** value to your publisher name. For information about creating a publisher, see [Create your publisher](#createpublisher).

<a name="packageext"></a>

### Package your extension

Package your extension into a .vsix file:

```powershell
tfx extension create --manifest-globs vss-extension.json
```

#### Version management

- **Extension version**: Increment the version in `vss-extension.json` for each update
- **Task version**: Increment the version in `task.json` for each task update
- **Auto-increment**: Use `--rev-version` to automatically increment the patch version

```powershell
tfx extension create --manifest-globs vss-extension.json --rev-version
```

> [!IMPORTANT]
> Both the task version and extension version must be updated for changes to take effect in Azure DevOps.

#### Versioning strategy

Follow semantic versioning principles for your task updates:

- **Major version**: Breaking changes to inputs/outputs
- **Minor version**: New features, backward compatible  
- **Patch version**: Bug fixes only

**Update process:**
1. Update `task.json` version
2. Update `vss-extension.json` version
3. Test thoroughly in a test organization
4. Publish and monitor for issues

<a name="publishext"></a>

### Publish to Visual Studio Marketplace

<a name="createpublisher"></a>

#### 1. Create your publisher

1. Sign in to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage)
2. Create a new publisher if prompted:
   - **Publisher identifier**: Used in your extension manifest (for example, `mycompany-myteam`)
   - **Display name**: Public name shown in the marketplace (for example, `My Team`)
3. Review and accept the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement)

#### 2. Upload your extension

**Web interface method:**
1. Select **Upload new extension**
2. Choose your packaged `.vsix` file
3. Select **Upload**

**Command-line method:**
```powershell
tfx extension publish --manifest-globs vss-extension.json --share-with yourOrganization
```

#### 3. Share your extension

1. Right-click your extension in the marketplace
2. Select **Share**
3. Enter your organization name
4. Add more organizations as needed

> [!IMPORTANT]
> Publishers must be verified to share extensions publicly. For more information, see [Package/Publish/Install](../publish/overview.md).

#### 4. Install to your organization

After sharing, install the extension to your Azure DevOps organization:

1. Navigate to **Organization Settings** > **Extensions**
2. Browse for your extension
3. Select **Get it free** and install

<a name="packagetask"></a>

## Step 3: Package and publish your extension

### Verify your extension

After installation, verify your task works correctly:

1. Create or edit a pipeline.
2. Add your custom task:
   - Select **Add task** in the pipeline editor
   - Search for your custom task by name
   - Add it to your pipeline
3. Configure task parameters:
   - Set required inputs
   - Configure optional settings
4. Run the pipeline to test functionality
5. Monitor execution:
   - Check task logs for proper execution
   - Verify expected outputs
   - Ensure no errors or warnings

<a name="createbuildrelease"></a>

## Step 4: Automate extension publishing with CI/CD

To maintain your custom task effectively, create automated build and release pipelines that handle testing, packaging, and publishing.

### Prerequisites for automation

- **Azure DevOps project**: [Create a project](../../organizations/projects/create-project.md?tabs=preview-page) if needed
- **Azure DevOps Extension Tasks**: [Install the extension](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vsts-developer-tools-build-tasks) for free
- **Variable group**: Create a [pipeline library variable group](../../pipelines/library/variable-groups.md?tabs=classic) with these variables:
  - `publisherId`: Your marketplace publisher ID
  - `extensionId`: Extension ID from vss-extension.json
  - `extensionName`: Extension name from vss-extension.json
  - `artifactName`: Name for the VSIX artifact
- **Service connection**: Create a Marketplace service connection with pipeline access permissions

### Complete CI/CD pipeline

Create a YAML pipeline with comprehensive stages for testing, packaging, and publishing:

```yaml
trigger: 
- main

pool:
  vmImage: "ubuntu-latest"

variables:
  - group: extension-variables # Your variable group name

stages:
  - stage: Test_and_validate
    displayName: 'Run Tests and Validate Code'
    jobs:
      - job: RunTests
        displayName: 'Execute unit tests'
        steps:
          - task: TfxInstaller@4
            displayName: 'Install TFX CLI'
            inputs:
              version: "v0.x"
          
          - task: Npm@1
            displayName: 'Install task dependencies'
            inputs:
              command: 'install'
              workingDir: '/MyCustomTask' # Update to your task directory
          
          - task: Bash@3
            displayName: 'Compile TypeScript'
            inputs:
              targetType: "inline"
              script: |
                cd MyCustomTask # Update to your task directory
                tsc
          
          - task: Npm@1
            displayName: 'Run unit tests'
            inputs:
              command: 'custom'
              workingDir: '/MyCustomTask' # Update to your task directory
              customCommand: 'test' # Ensure this script exists in package.json
          
          - task: PublishTestResults@2
            displayName: 'Publish test results'
            inputs:
              testResultsFormat: 'JUnit'
              testResultsFiles: '**/test-results.xml'
              searchFolder: '$(System.DefaultWorkingDirectory)'

  - stage: Package_extension
    displayName: 'Package Extension'
    dependsOn: Test_and_validate
    condition: succeeded()
    jobs:
      - job: PackageExtension
        displayName: 'Create VSIX package'
        steps:
          - task: TfxInstaller@4
            displayName: 'Install TFX CLI'
            inputs:
              version: "v0.x"
          
          - task: Npm@1
            displayName: 'Install dependencies'
            inputs:
              command: 'install'
              workingDir: '/MyCustomTask'
          
          - task: Bash@3
            displayName: 'Compile TypeScript'
            inputs:
              targetType: "inline"
              script: |
                cd MyCustomTask
                tsc
          
          - task: QueryAzureDevOpsExtensionVersion@4
            name: QueryVersion
            displayName: 'Query current extension version'
            inputs:
              connectTo: 'VsTeam'
              connectedServiceName: 'marketplace-connection'
              publisherId: '$(publisherId)'
              extensionId: '$(extensionId)'
              versionAction: 'Patch'
          
          - task: PackageAzureDevOpsExtension@4
            displayName: 'Package extension'
            inputs:
              rootFolder: '$(System.DefaultWorkingDirectory)'
              publisherId: '$(publisherId)'
              extensionId: '$(extensionId)'
              extensionName: '$(extensionName)'
              extensionVersion: '$(QueryVersion.Extension.Version)'
              updateTasksVersion: true
              updateTasksVersionType: 'patch'
              extensionVisibility: 'private'
              extensionPricing: 'free'
          
          - task: PublishBuildArtifacts@1
            displayName: 'Publish VSIX artifact'
            inputs:
              PathtoPublish: '$(System.DefaultWorkingDirectory)/*.vsix'
              ArtifactName: '$(artifactName)'
              publishLocation: 'Container'

  - stage: Publish_to_marketplace
    displayName: 'Publish to Marketplace'
    dependsOn: Package_extension
    condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
    jobs:
      - deployment: PublishExtension
        displayName: 'Deploy to marketplace'
        environment: 'marketplace-production'
        strategy:
          runOnce:
            deploy:
              steps:
                - task: TfxInstaller@4
                  displayName: 'Install TFX CLI'
                  inputs:
                    version: "v0.x"
                
                - task: PublishAzureDevOpsExtension@4
                  displayName: 'Publish to marketplace'
                  inputs:
                    connectTo: 'VsTeam'
                    connectedServiceName: 'marketplace-connection'
                    fileType: 'vsix'
                    vsixFile: '$(Pipeline.Workspace)/$(artifactName)/*.vsix'
                    publisherId: '$(publisherId)'
                    extensionId: '$(extensionId)'
                    extensionName: '$(extensionName)'
                    updateTasksVersion: false
                    extensionVisibility: 'private'
                    extensionPricing: 'free'
```


### Configure package.json for testing

Add test scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "mocha tests/_suite.js --reporter xunit --reporter-option output=test-results.xml",
    "test-verbose": "cross-env TASK_TEST_TRACE=1 npm test"
  }
}
```

### Pipeline stage breakdown

#### Stage 1: Test and validate
- **Purpose**: Ensure code quality and functionality
- **Actions**: Install dependencies, compile TypeScript, run unit tests, publish results
- **Validation**: All tests must pass to proceed

#### Stage 2: Package extension
- **Purpose**: Create deployable VSIX package
- **Actions**: Query current version, increment version, package extension, publish artifacts
- **Versioning**: Automatically handles version increments

#### Stage 3: Publish to marketplace
- **Purpose**: Deploy to Visual Studio Marketplace
- **Conditions**: Only runs on main branch after successful packaging
- **Environment**: Uses deployment environment for approval gates

### Best practices for CI/CD

- **Branch protection**: Only publish from main/release branches
- **Environment gates**: Use deployment environments for production releases
- **Version management**: Automate version increments to avoid conflicts
- **Test coverage**: Ensure comprehensive test coverage before packaging
- **Security**: Use service connections instead of hardcoded credentials
- **Monitoring**: Set up alerts for failed deployments

1. Add the `Bash` task to compile the TypeScript into JavaScript.
1. To query the existing version, add the **Query Extension Version** task using the following inputs:
    - Connect to: Visual Studio Marketplace
    - Visual Studio Marketplace (Service connection): Service Connection
    - Publisher ID: ID of your Visual Studio Marketplace publisher
    - Extension ID: ID of your extension in the `vss-extension.json` file
    - Increase version: Patch
    - Output Variable: `Task.Extension.Version`

1. To package the extensions based on manifest Json, add the **Package Extension** task using the following inputs:
    - Root manifests folder: Points to root directory that contains manifest file. For example, `$(System.DefaultWorkingDirectory)` is the root directory
    - Manifest file: `vss-extension.json`
    - Publisher ID: ID of your Visual Studio Marketplace publisher
    - Extension ID: ID of your extension in the `vss-extension.json` file
    - Extension Name: Name of your extension in the `vss-extension.json` file
    - Extension Version: `$(Task.Extension.Version)`
    - Override tasks version: checked (true)
    - Override Type: Replace Only Patch (1.0.r)
    - Extension Visibility: If the extension is still in development, set the value to *private*. To release the extension to the public, set the value to *public*.
1. To copy to published files, add the **Copy files** task using the following inputs:
    - Contents: All of the files to be copied for publishing them as an artifact
    - Target folder: The folder that the files get copied to
       - For example: `$(Build.ArtifactStagingDirectory)`
1. Add **Publish build artifacts** to publish the artifacts for use in other jobs or pipelines. Use the following inputs:
    - Path to publish: The path to the folder that contains the files that are being published
       - For example: `$(Build.ArtifactStagingDirectory)`
    - Artifact name: The name given to the artifact
    - Artifacts publish location: Choose **Azure Pipelines** to use the artifact in future jobs

#### Stage 3: Download build artifacts and publish the extension

1. To install the tfx-cli onto your build agent, add **Use Node CLI for Azure DevOps (tfx-cli)**.

1. To download the artifacts onto a new job, add the **Download build artifacts** task using the following inputs:
    - Download artifacts produced by: If you're downloading the artifact on a new job from the same pipeline, select **Current build**. If you're downloading on a new pipeline, select **Specific build**
    - Download type: Choose **Specific artifact** to download all files that were published.
    - Artifact name: The published artifact's name
    - Destination directory: The folder where the files should be downloaded

1. To get the **Publish Extension** task, use the following inputs:
    - Connect to: Visual Studio Marketplace
    - Visual Studio Marketplace connection: ServiceConnection
    - Input file type: VSIX file
    - VSIX file: `/Publisher.*.vsix`
    - Publisher ID: ID of your Visual Studio Marketplace publisher
    - Extension ID: ID of your extension in the `vss-extension.json` file
    - Extension Name: Name of your extension in the `vss-extension.json` file
    - Extension visibility: Either private or public

<a name="installandtest"></a>

## Optional: Install and test your extension

After you publish your extension, it needs to be installed in Azure DevOps organizations.

### Install extension to organization

Install your shared extension in a few steps:

1. Go to **Organization settings** and select **Extensions**.

2. Locate your extension in the **Extensions Shared With Me** section
   - Select the extension link
   - Select **Get it free** or **Install**

3. Check that the extension appears in your **Installed** extensions list
   - Confirm it's available in your pipeline task library

> [!NOTE]
> If you don't see the **Extensions** tab, ensure you're at the organization administration level (`https://dev.azure.com/{organization}/_admin`) and not at the project level.

### End-to-end testing

After installation, perform comprehensive testing:

1. Create a test pipeline:
   - Add your custom task to a new pipeline
   - Configure all input parameters
   - Test with various input combinations

2. Validate functionality:
   - Run the pipeline and monitor execution
   - Check task outputs and logs
   - Verify error handling with invalid inputs

3. Test performance:
   - Test with large input files (if applicable)
   - Monitor resource usage
   - Validate timeout behavior

## Frequently asked questions

### Q: How is task cancellation handled?

A: The pipeline agent sends `SIGINT` and `SIGTERM` signals to task processes. While the [task library](https://github.com/microsoft/azure-pipelines-task-lib) doesn't provide explicit cancellation handling, your task can implement signal handlers. For details, see [Agent jobs cancellation](https://github.com/microsoft/azure-pipelines-agent/blob/master/docs/design/jobcancellation.md).

### Q: How can I remove a task from my organization?

A: **Automatic deletion isn't supported** as it would break existing pipelines. Instead:

1. **Deprecate the task**: [Mark the task as deprecated](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/deprecatedtasks.md)
2. **Version management**: [Bump the task version](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/taskversionbumping.md)
3. **Communication**: Notify users about the deprecation timeline

### Q: How can I upgrade my task to the latest Node.js version?

A: Upgrade to [the latest Node version](https://nodejs.org/en/download/) for better performance and security. For migration guidance, see [Upgrading tasks to Node 20](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/migrateNode20.md).

**Support multiple Node versions** by including multiple execution sections in `task.json`:

```json
"execution": {
  "Node20_1": {
    "target": "index.js"
  },
  "Node10": {
    "target": "index.js"
  }
}
```

Agents with Node 20 use the preferred version, while older agents fall back to Node 10.

To upgrade your tasks:

* To ensure your code behaves as expected, test your tasks on the various Node runner versions.
* In your task's execution section, update from `Node` or `Node10` to `Node16` or `Node20`.
* To support older server versions, you should leave the `Node`/`Node10` target. Older Azure DevOps Server versions might not have the latest Node runner version included.
* You can choose to share the entry point defined in the target or have targets optimized to the Node version used.

   ```json
   "execution": {
     "Node10": {
       "target": "bash10.js",
       "argumentFormat": ""
     },
     "Node16": {
       "target": "bash16.js",
       "argumentFormat": ""
     },
     "Node20_1": {
       "target": "bash20.js",
       "argumentFormat": ""
     }
   }
   ```

> [!IMPORTANT]
> If you don't add support for the Node 20 runner to your custom tasks, they fail on agents installed from the `pipelines-agent-*` [release feed](../../pipelines/agents/agents.md#node-runner-versions).

## Related content

- [Extension manifest reference](./manifest.md)
- [Integrate custom build pipeline tasks with extensions](./integrate-build-task.md)
- [Build/Release task examples](https://github.com/microsoft/vso-agent-tasks/tree/master/Tasks)
