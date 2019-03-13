---
title: Add a Build or Release Task | Extensions for Azure DevOps Services
description: Add a custom build or release task in an extension for Azure DevOps Services
ms.assetid: 98821825-da46-498e-9b01-64d3a8c78ea0
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 10/18/2018
---

# Add a build or release task

Custom build or release tasks can be contributed by extensions that can be discovered and installed by users into an organization in Azure DevOps Services. 
These tasks will appear next to Microsoft-provided tasks in the Add Step wizard:

![Build task catalog for extensions in Azure DevOps Services](_img/build-task-ext-choose-task.png)

To learn more about the new cross-platform build/release system, see [Team Foundation Build & Release](../..//pipelines/overview.md). 

> **Note:** This article covers agent tasks in agent-based extensions. For information on server tasks/server-based extensions, checkout the [Server Task GitHub Documentation](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/servertaskauthoring.md).

## Preparation and required setup for this tutorial
In order to create extensions for Azure DevOps Services, there are some prerequisite software and tools you'll need:

- An **organization** in Azure DevOps Services, more information can be found [here](https://visualstudio.microsoft.com/products/visual-studio-team-services-vs.aspx)
- **A text editor**. For many of the tutorials we used `Visual Studio Code`, which can be downloaded [here](https://code.visualstudio.com/)
- The latest version of **node**, which can be downloaded [here](https://nodejs.org/en/download/)
- **Typescript Compiler** 2.2.0 or greater, which can be downloaded [here](https://www.npmjs.com/package/typescript)
- **Visual Studio Code** for intellisense and debugging support, which can be downloaded [here](https://code.visualstudio.com/)
    <a name="cli" />
- **TFS Cross Platform Command Line Interface (tfx-cli)** to package your extensions.
    - **tfx-cli** can be installed using `npm`, a component of Node.js by running `npm i -g tfx-cli`
- A `home` directory for your project.
    - The `home` directory of a build or release task extension should look like the following:

```
|--- README.md    
|--- images                        
	|--- extension-icon.png  
|--- buildAndReleaseTask            // where your task scripts will be placed
|--- vss-extension.json				// extension's manifest
```

### Developing in Unix versus Windows

This walkthrough was done on Windows with PowerShell. We attempted to make it generic for all platforms, but the syntax for getting environment variables is different.

If using a Mac or Linux, replace any instances of ```$env:<var>=<val>``` with ```export <var>=<val>```

## Steps
Below are the steps to create a build or release task extension and put it on the Marketplace:
* [Step 1: Create a custom task](#createtask)
* [Step 2: Unit test the task scripts](#testscripts)
* [Step 3: Create the extension manifest file](#extensionmanifest)
* [Step 4: Package your extension](#packageext)
* [Step 5: Publish your extension](#publishext)
* [Optional: Install and test your extension](#installandtest)

<a name="createtask" />
## Step 1: Create the custom task

Step 1 is all about setting up your task. Every part of Step 1 should be done within the `buildAndReleaseTask` folder.

### Create task scaffolding

The first step is to create the folder structure for the task and install the required libraries and dependencies.

#### Create a directory and package.json file

First, from within your `buildAndReleaseTask` folder, run:

```
npm init
```

```npm init``` will create the ```package.json``` file. You can accept all of the default ```npm init``` options.

#### Add azure-pipelines-task-lib

We provide a library, _azure-pipelines-task-lib_, that should be used to create tasks. Add it to your library:

```
npm install azure-pipelines-task-lib --save
```

#### Add typings for external dependencies

Ensure that TypeScript typings are installed for external dependencies.

```
npm install @types/node --save-dev
npm install @types/q --save-dev
```

Create a ```.gitignore``` file and add node_modules to it. Your build process should do an ```npm install``` and ```typings install```
so node_modules will be built each time and don't need to be checked in.

```
echo node_modules > .gitignore
```

#### Create tsconfig.json compiler options

This file will make sure that our TypeScript files get compiled to JavaScript files.

```
tsc --init
```

In addition, for this example we want to compile to the ES6 standard instead of ES5.
To ensure this happens, open the newly generated ```tsconfig.ts``` and update the ```target``` field to "es6".

>[!NOTE]
>To have the command run successfully, make sure that TypeScript is installed globally with npm on your local machine.

### Task implementation

Now that the scaffolding is complete, we can start to create our custom task.

#### task.json

Next, we will create a ```task.json``` file in the ``buildAndReleaseTask`` folder. The ```task.json``` file describes the build or release task and is what the build/release system uses to render configuration options to the user and to know which scripts to execute at build/release time.

Copy the code below and replace the ```{{placeholders}}``` with your tasks information. The most important placeholder is the ```taskguid```, which must be unique and can be generated [here](https://www.guidgen.com/).

```json
{
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
        "Node": {
            "target": "index.js"
        }
    }
}
```

**task.json components**<br>
Here is a description of some of the components of the `task.json` file:

| Property              | Description            |
|-----------------------|------------------------|
| `id`                  | A unique guid for your task | 
| `name`                | Name with no spaces |
| `friendlyName`        | Descriptive name (spaces allowed) |
| `description`         | Detailed description of what your task does |
| `author`              | Short string describing the entity developing the build or release task, e.g. "Microsoft Corporation" | 
| `instanceNameFormat`  | This is how the task will be displayed within the build or release step list - you can use variable values by using **$(variablename)** |
| `groups`              | Describes groups that task properties may be logically grouped by in the UI. |
| `inputs`              | Inputs to be used when your build or release task runs. This task expects an input with the name "samplestring" |
| `execution`           | Execution options for this task, including scripts |

>[!NOTE]
>For a more in-depth look into the task.json file, or to learn how to bundle multiple versions in your extension, check out the **[build/release task reference](./integrate-build-task.md)**.

#### index.ts

Create an ```index.ts``` file using the following code as a reference. This is the code that will be run when the task is called.

```typescript
import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputString: string = tl.getInput('samplestring', true);
        if (inputString == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Hello', inputString);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
```

### Compile

Type "tsc" from the buildAndReleaseTask folder to compile an ```index.js``` file from ```index.ts```.

### Run the task

The task can be run by simply running ```node index.js``` from PowerShell — that is exactly what an agent will do.

```
node index.js
##vso[task.debug]agent.workFolder=undefined
##vso[task.debug]loading inputs and endpoints
##vso[task.debug]loaded 0
##vso[task.debug]task result: Failed
##vso[task.issue type=error;]Input required: samplestring
##vso[task.complete result=Failed;]Input required: samplestring
```

**The task failed!** That's exactly what would happen if the task ran and inputs were not supplied (```samplestring``` is a required input).

To fix this, we can set the ```samplestring``` input and run again:

```
$env:INPUT_SAMPLESTRING="Human"
node index.js
##vso[task.debug]agent.workFolder=undefined
##vso[task.debug]loading inputs and endpoints
##vso[task.debug]loading INPUT_SAMPLESTRING
##vso[task.debug]loaded 1
##vso[task.debug]Agent.ProxyUrl=undefined
##vso[task.debug]Agent.CAInfo=undefined
##vso[task.debug]Agent.ClientCert=undefined
##vso[task.debug]Agent.SkipCertValidation=undefined
##vso[task.debug]samplestring=Human
Hello Human
```

This time the task succeeded since ```samplestring``` was supplied, and it correctly outputted "Hello Human"!

<a name="testscripts" />
## Step 2: Unit testing your task scripts

The goal of unit testing is to quickly test the task script, not the external tools it's calling. We want to be able to test all aspects
of both success and failure paths.

### Install test tools

We will use [Mocha](https://mochajs.org/) as the test driver in this walkthrough.

```
npm install mocha --save-dev -g
npm install @types/mocha --save-dev
```

### Create test suite

Create a ```tests``` folder containing a ```_suite.ts``` file with the following contents:

```typescript
import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'azure-pipelines-task-lib/mock-test';

describe('Sample task tests', function () {

    before( function() {

    });

    after(() => {

    });

    it('should succeed with simple inputs', function(done: MochaDone) {
        // Add success test here
    });

    it('it should fail if tool returns 1', function(done: MochaDone) {
        // Add failure test here
    });    
});
```

### Create success test

The success test will validate that when the appropriate inputs are given to the tool, it succeeds with no errors
or warnings and returns the correct output.

First, we will create a file containing our task mock runner. This will simulate running the task and mock all calls to outside methods.

To do this, create a ```success.ts``` file in your test directory with the following contents:

```typescript
import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('samplestring', 'human');

tmr.run();
```

Next, add the following example success test to your ```_suite.ts``` file to run the task mock runner:

```typescript
it('should succeed with simple inputs', function(done: MochaDone) {
    this.timeout(1000);

    let tp = path.join(__dirname, 'success.js');
    let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    tr.run();
    console.log(tr.succeeded);
    assert.equal(tr.succeeded, true, 'should have succeeded');
    assert.equal(tr.warningIssues.length, 0, "should have no warnings");
    assert.equal(tr.errorIssues.length, 0, "should have no errors");
    console.log(tr.stdout);
    assert.equal(tr.stdout.indexOf('Hello human') >= 0, true, "should display Hello human");
    done();
});
```

### Create failure test

The failure test will validate that when bad or incomplete input is given to the tool, it fails in the expected way with helpful output.

First, we will create our task mock runner. To do so, create a ```failure.ts``` file in your test directory with the following contents:

```typescript
import ma = require('azure-pipelines-task-lib/mock-answer');
import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('samplestring', 'bad');

tmr.run();
```

Next, add the following to your ```_suite.ts``` file to run the task mock runner:

```typescript
it('it should fail if tool returns 1', function(done: MochaDone) {
    this.timeout(1000);

    let tp = path.join(__dirname, 'failure.js');
    let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

    tr.run();
    console.log(tr.succeeded);
    assert.equal(tr.succeeded, false, 'should have failed');
    assert.equal(tr.warningIssues, 0, "should have no warnings");
    assert.equal(tr.errorIssues.length, 1, "should have 1 error issue");
    assert.equal(tr.errorIssues[0], 'Bad input was given', 'error issue output');
    assert.equal(tr.stdout.indexOf('Hello bad'), -1, "Should not display Hello bad");

    done();
});
```

### Running the tests

To run the tests, run the following commands:

```
tsc
mocha tests/_suite.js
```

Both tests should pass. If you want to run the tests with more verbose output (what you would see in the build console), set the environment variable: ```TASK_TEST_TRACE=1```:

```
$env:TASK_TEST_TRACE=1
```

<a name="extensionmanifest" />
## Step 3: Create the extension manifest file
The extension manifest contains all of the information about your extension. It includes links to your files, including your task folders and images. This example is an extension manifest which contains the build or release task.

Copy the .json code below and save it as your `vss-extension.json` file:

[!code-javascript[JSON](../_data/extension-build-tasks.json)]


>[!NOTE]
>The **publisher** here will need to be changed to your publisher name. If you would like to create a publisher now, you can jump down to
[create your publisher](#createpublisher) for instructions on how to do so.  

### Contributions
| Property     | Description            |
|--------------|------------------------|
| `id`          | Identifier of the contribution. Must be unique within the extension. Does not need to match the name of the build or release task, but typically the build or release task name is included in the ID of the contribution. | 
| `type`         | Type of the contribution. Should be **ms.vss-distributed-task.task**.
| `targets`      | Contributions "targeted" by this contribution. Should be **ms.vss-distributed-task.tasks**.
| `properties.name` | Name of the task. This must match the folder name of the corresponding self-contained build or release task pipeline. |

### Files
| Property     | Description            |
|--------------|------------------------|
| `path`          | Path of the file or folder relative to the `home` directory | 

>[!NOTE]
>For more information about the **extension manifest file**, such as its properties and what they do, check out the [extension manifest reference](./manifest.md).

<a name="packageext" />
## Step 4: Package your extension

Once you've written your extension, the next step towards getting it into the Marketplace is to package all of your files together. All extensions are packaged
as VSIX 2.0 compatible .vsix files - Microsoft provides a cross-platform command line interface (CLI) to package your extension. 

Packaging your extension into a .vsix file is effortless once you have the [tfx-cli](#cli), simply navigate to your extension's home directory and run the following command.

```no-highlight
tfx extension create --manifest-globs vss-extension.json
```
>[!NOTE]
>An extension/integration's version must be incremented on every update. <br>
>When updating an existing extension, either update the version in the manifest or pass the `--rev-version` command line switch. This will increment the *patch* version number of your extension and save the new version to your manifest.


After you have your packaged extension in a .vsix file, you're ready to publish your extension to the marketplace.

<a name="publishext" />
## Step 5: Publish your extension
<a name="createpublisher" />
### Create your publisher

All extensions, including those from Microsoft, are identified as being provided by a publisher.
If you aren't already a member of an existing publisher, you'll create one.

1. Sign in to the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher)
2. If you are not already a member of an existing publisher, you'll be prompted to create a publisher. If you're not prompted to create a publisher, scroll down to the bottom of the page and select <i>Publish Extensions</i> underneath <b>Related Sites</b>.
 * Specify an identifier for your publisher, for example: `mycompany-myteam`
    * This will be used as the value for the `publisher` attribute in your extensions' manifest file.
 * Specify a display name for your publisher, for example: `My Team`
3. Review the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement) and click **Create**

Now your publisher is defined. In a future release, you'll be able to grant permissions to view and manage your publisher's extensions.
This will make it easy (and more secure) for teams and organizations to publish extensions under a common publisher,
but without the need to share a set of credentials across a set of users.

### Upload your extension

After creating a publisher, you can now upload your extension to the marketplace.

1. Find the <b>Upload new extension</b> button, navigate to your packaged .vsix file, and select <i>upload</i>.

You can also upload your extension via the command line by using the ```tfx extension publish``` command instead of ```tfx extension create```
to package and publish your extension in one step.
You can optionally use ```--share-with``` to share your extension with one or more accounts after publishing.
You'll need a personal access token, too.

```no-highlight
tfx extension publish --manifest-globs your-manifest.json --share-with yourOrganization
```

### Share your extension

Now that you've uploaded your extension, it's in the Marketplace, but no one can see it. 
Share it with your organization so that you can install and test it.

1. Right click your extension and select <b>Share...</b>, and enter your organization information. You can share it with other accounts that you want to have access to your extension, too.

>[!IMPORTANT]
>Publishers must be verified in order to share extensions publicly, to learn more visit [Package/Publish/Install](../publish/overview.md)

Now that your extension is in the marketplace and shared, anyone who wants to use it will have to install it.

<a name="installandtest" />
## Optional: Install and test your extension
Installing an extension that is shared with you is simple and can be done in a few steps:

1. From your organization control panel (`https://dev.azure.com/{organization}/_admin`), go to the project collection administration page.
2. In the Extensions tab, find your extension in the "Extensions Shared With Me" group, click on the extension link.
3. Install the extension!

If you can't see the Extensions tab, make sure you're in the control panel (the project collection level administration page - `https://dev.azure.com/{organization}/_admin`) and not the administration page for a project.

If you're on the control panel, and you don't see the <b>Extensions</b> tab, extensions may not be enabled for your organization. You can get early access to the extensions feature by joining the Visual Studio Partner Program.

## Helpful links
* [Extension Manifest Reference](./manifest.md)
* [Build/Release Task JSON Schema](./integrate-build-task.md)
* [Build/Release Task Examples](https://github.com/Microsoft/vso-agent-tasks/tree/master/Tasks)

>[!NOTE]
>Check out our **[Node task sample in GitHub](https://github.com/Microsoft/vsts-task-lib/blob/master/node/docs/stepbystep.md)** for a tutorial that
>shows how to create, debug, and test a cross platform task in Node using the TypeScript API.

