---
title: Create a pull request status server with Node.js
titleSuffix: Azure Repos
description: Create a web server to listen to pull request events and post status on pull request status API.
ms.assetid: 2653589c-d15e-4dab-b8b0-4f8236c4a67b
ms.service: azure-devops-repos
ms.topic: tutorial
ms.date: 02/24/2026
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
ms.custom: devx-track-js, sfi-image-nochange
ai-usage: ai-assisted
# customer-intent: As a developer, I want to create a Node.js server that integrates with Azure DevOps pull request events so I can implement custom status checks and automated validation workflows using Microsoft Entra ID authentication.
---


# Create a pull request status server with Node.js

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


The pull request (PR) workflow provides developers with an opportunity to get feedback on their code from peers and from automated tools.
Non-Microsoft tools and services can participate in the PR workflow by using the PR [Status API](/rest/api/azure/devops/git/pull%20request%20statuses).
This article guides you through the process of creating a status server to validate PRs in an Azure DevOps Services Git repository.
For more information about PR status, see [Customize and extend pull request workflows with pull request status](pull-request-status.md).

## Prerequisites

| Category | Requirements |
|-------------|-------------|
| **Organization** | An [organization in Azure DevOps](../../organizations/accounts/create-organization.md) with a Git repository. |
|**Tools**| - [Visual Studio Code](https://code.visualstudio.com/Docs/setup) or other code editor of your choice.<br>- [Node.js](https://nodejs.org/en/download/). The download contains an installer, which you can run to install the Node.js runtime on your local machine. When installing Node.js, be sure to keep the [npm package manager](https://www.npmjs.com/) portion of the install, which is selected by default.|
| **Authentication** | **Microsoft Entra ID token** with the **Code (status)** scope to have permission to change PR status. For more information, see [Microsoft Entra authentication](../../integrate/get-started/authentication/entra.md). |

## Create a basic web server using Express
The steps in this section use [Express](https://expressjs.com/), which is a lightweight web framework for Node.js that provides many HTTP utility methods that simplify creating a web server. This framework provides you with the basic functions needed to listen to PR events.

1. From the command line, create a new project folder for your web server.

    ```
    mkdir pr-server
    cd pr-server
    ```

2. Use the `npm init` command to create a new `package.json` file for the project.

    ```
    npm init
    ```

    Select **Enter** to accept the defaults for all of the options except the entry point. Change it to `app.js` 

    ```
    entry point: (index.js) app.js
    ```

3. Install Express in the `pr-server` directory using the following command. This installs Express and saves it to the dependencies list.

    ```
    npm install express
    ```

4. Create an Express app to build upon for the PR status server. The following steps are based on the Express [Hello world example](https://expressjs.com/en/starter/hello-world.html). 

    a. Open the project folder in Visual Studio Code by running the following command from the `pr-server` folder.

    ``` 
    code .
    ```

    b. Create a new file `(Ctrl + N)` and paste in the following sample code to create a basic Express server.

    ``` javascript
    const express = require('express')
    const app = express()

    app.get('/', function (req, res) {
    res.send('Hello World!')
    })

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
    })
    ```

    c. Save the file as `app.js`.

5. Run the basic web server using the following command:

    ```
    node app.js
    ```

   Verify the server is running by browsing to `http://localhost:3000/`.

## Listen for HTTP POST requests
The web server is going to receive `POST` requests from Azure DevOps Services, so you need to handle those requests in your server.

1. At the end of the `app.js` file, add the following code, and save the file.

    ``` javascript
    app.post('/', function (req, res) {
        res.send('Received the POST')
    })
    ```

2. Rerun your web server using the following command:

    ```
    node app.js
    ```

## Configure a service hook for PR events
Service hooks are an Azure DevOps Services feature that can alert external services when certain events occur. For this sample, set up two service hooks for PR events, so the status server can be notified. The first is for the **Pull request created** event and the second is for the **Pull request updated** event.

To receive the service hook notifications, expose a port to the public internet. The ngrok utility is useful for doing so in a development environment.

1. Download and unzip the appropriate ngrok release for your platform.

2. Use ngrok to start listening on the same port as your sample server - port 3000. Run the following command in a new command window.

    ```
    ngrok http 3000
    ```

    Ngrok creates a public URL that forwards to `localhost:3000`. Make a note of the URL, as you need it in the next step. It looks like the following example:

    ```
    http://c3c1bffa.ngrok.io
    ```

3. Browse to your project in Azure DevOps, for example, `https://dev.azure.com/<your account>/<your project name>`

4. From the navigation menu, hover over the **gear** and select **Service Hooks**.

    :::image type="content" source="media/create-pr-status-server/service-hooks-menu.png" alt-text="Screenshot showing Service Hooks option in the admin menu." border="true":::

5. If it's your first service hook, select **+ Create subscription**. 

    :::image type="content" source="media/create-pr-status-server/service-hooks-create-first-service-hook.png" alt-text="Screenshot showing Create a new subscription button on the toolbar." border="true":::

    If you already have other service hooks configured, select the plus `(+)` to create a new service hook subscription.

    :::image type="content" source="media/create-pr-status-server/service-hooks-create.png" alt-text="Screenshot showing the plus button to create a new service hook subscription." border="true":::

6. On the New Service Hooks Subscription dialog, select **Web Hooks** from the list of services, then select **Next**.

    :::image type="content" source="media/create-pr-status-server/service-hooks-web-hook.png" alt-text="Screenshot showing Web Hooks selected from the list of services." border="true":::

7. Select **Pull request created** from the list of event triggers, then select **Next**.

    :::image type="content" source="media/create-pr-status-server/service-hooks-trigger.png" alt-text="Screenshot showing Pull request created selected from the list of event triggers." border="true":::

8. In the Action page, enter the URL from ngrok in the **URL** box. Select **Test** to send a test event to your server.

    :::image type="content" source="media/create-pr-status-server/service-hooks-action.png" alt-text="Screenshot showing the URL field and Test button for the service hook." border="true":::

    In the ngrok console window, an incoming `POST` returns a `200 OK`, indicating your server received the service hook event.

    ```
    HTTP Requests
    -------------

    POST /                         200 OK
    ```

    In the Test Notification window, select the *Response* tab to see the details of the response from your server.
    You should see a status code of 200, and in this case a content length of 17 that matches the length of the string from your POST handler (for example, "Received the POST").
    You can examine the request body from the *Request* tab.

    :::image type="content" source="media/create-pr-status-server/test-notification.png" alt-text="Screenshot showing the Response tab in the Test Notification window." border="true":::

9. Close the Test Notification window, and select **Finish** to create the service hook.  

Go through steps 3-9 again but this time configure the **Pull request updated** event.

>[!IMPORTANT]
> Be sure to go through the preceding steps twice and create service hooks for both the **Pull request created** and **Pull request updated** events.

## Post status to PRs
Now that your server can receive service hook events when new PRs are created, update it to post back status to the PR.

1. Service hook requests include a JSON payload describing the event. To help parse the JSON returned by the service hook, install the [body-parser](https://www.npmjs.com/package/body-parser) package.

    ```
    npm install body-parser
    ```

2. Update `app.js` to use body-parser for parsing `application/json`.

    ```js
    var bodyParser = require('body-parser')

    app.use(bodyParser.json())
    ```

3. To simplify making REST API calls to Azure Repos, install the [azure-devops-node-api](https://www.npmjs.com/package/azure-devops-node-api) package.

    ```
    npm install azure-devops-node-api 
    ```

4. Update `app.js` to use the azure-devops-node-api package, set up the details for a connection to your account, and get an instance of the Git API.

    ``` javascript
    const vsts = require("azure-devops-node-api")

    const collectionURL = process.env.COLLECTIONURL    
    const token = process.env.TOKEN

    var authHandler = vsts.getBearerHandler(token)
    var connection = new vsts.WebApi(collectionURL, authHandler)
    var vstsGit = connection.getGitApi()
    ```

5. Create an environment variable for your collection URL, replacing `<your account>` with the name of your Azure DevOps organization.

    ```
    setx COLLECTIONURL "https://dev.azure.com/<your account>"
    ```

6. Get a Microsoft Entra ID token for your app to use. Microsoft Entra ID tokens are the recommended authentication method for Azure DevOps REST APIs. You can get these tokens through the following ways:
   - Option 1: Azure CLI (for development/testing)
     ```bash
     az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
     ```
   - Option 2: Service Principal (for production)
     1. Register an application in Microsoft Entra ID
     2. Create a client secret for the application  
     3. Grant the application appropriate permissions in Azure DevOps
     4. Use the service principal credentials to obtain tokens programmatically
   
   For more information, see [Microsoft Entra authentication](../../integrate/get-started/authentication/entra.md).

7. Create an environment variable for your Microsoft Entra ID token.

    ```
    setx TOKEN "your-entra-id-token-here"
    ```

---

### Obtaining Microsoft Entra ID tokens programmatically (Recommended for production)

For production applications, you should obtain Microsoft Entra ID tokens programmatically rather than using static tokens. Here's how to implement this using the Microsoft Authentication Library (MSAL) for Node.js:

1. Install the MSAL Node package:
    ```bash
    npm install @azure/msal-node
    ```

2. Create a token provider module (`tokenProvider.js`):
    ```javascript
    const { ConfidentialClientApplication } = require('@azure/msal-node');

    const clientConfig = {
        auth: {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`
        }
    };

    const cca = new ConfidentialClientApplication(clientConfig);

    async function getAccessToken() {
        const clientCredentialRequest = {
            scopes: ['499b84ac-1321-427f-aa17-267ca6975798/.default']
        };

        try {
            const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
            return response.accessToken;
        } catch (error) {
            console.error('Error acquiring token:', error);
            throw error;
        }
    }

    module.exports = { getAccessToken };
    ```

3. Update your `app.js` to use the token provider:
    ```javascript
    const { getAccessToken } = require('./tokenProvider');

    // Instead of using a static token, get a fresh token
    app.post("/", async function (req, res) {
        try {
            const token = await getAccessToken();
            var authHandler = vsts.getBearerHandler(token);
            var connection = new vsts.WebApi(collectionURL, authHandler);
            
            // ... rest of your POST handler code
        } catch (error) {
            console.error('Authentication error:', error);
            res.status(500).send('Authentication failed');
        }
    });
    ```
---

8. Update the `post()` function to read the PR details from the service hook payload. You need these values to post back status.

    ``` javascript
    var repoId = req.body.resource.repository.id
    var pullRequestId = req.body.resource.pullRequestId
    var title = req.body.resource.title
    ```

9. Build the status object to post on the PR. 

   `State` is an enum of type [GitStatusState](/rest/api/azure/devops/git/pull-request-statuses/get#gitstatusstate). Use `succeeded` to indicate that the PR passed the status check and is ready to merge. 

   The `description` is a string value that displays to the user in the Status section and activity feed in the PR details view.

   The `targetUrl` is a URL that's used to create a link for the description text in the Status section and activity feed, which is where users can go to get more information about the status, for example, a build report or test run. If no URL is specified, the description appears as text with no link.

   The context `name` and `genre` are used to categorize the status and distinguish it from other services posting status. 

    ``` javascript
        var prStatus = {
            "state": "succeeded",
            "description": "Ready for review",
            "targetUrl": "https://visualstudio.microsoft.com",
            "context": {
                "name": "wip-checker",
                "genre": "continuous-integration"
            }
        }
    ```

10. Instead of posting the `succeeded` status right away, inspect the PR title to see if the user  indicated if the PR is a work in progress by adding **WIP** to the title. If so, change the status posted back to the PR.

    ``` javascript
        if (title.includes("WIP")) {
            prStatus.state = "pending"
            prStatus.description = "Work in progress"
        }
    ```

11. Finally, post the status using the `createPullRequestStatus()` method. It requires the status object, the repo ID, and the pull request ID. Output the response to the node console so you can see the result of the post.

    ``` javascript
    vstsGit.createPullRequestStatus(prStatus, repoId, pullRequestId).then( result => {
        console.log(result)
    })
    ```

12. The resulting method should look something like this:

    ``` javascript
    app.post("/", async function (req, res) {
        try {
            // Get the details about the PR from the service hook payload
            var repoId = req.body.resource.repository.id
            var pullRequestId = req.body.resource.pullRequestId
            var title = req.body.resource.title

            // Build the status object that we want to post.
            // Assume that the PR is ready for review...
            var prStatus = {
                "state": "succeeded",
                "description": "Ready for review",
                "targetUrl": "https://visualstudio.microsoft.com",
                "context": {
                    "name": "wip-checker",
                    "genre": "continuous-integration"
                }
            }

            // Check the title to see if there is "WIP" in the title.
            if (title.includes("WIP")) {
                // If so, change the status to pending and change the description.
                prStatus.state = "pending"
                prStatus.description = "Work in progress"
            }

            // Get the Git API instance and post the status to the PR
            const gitApi = await vstsGit
            const result = await gitApi.createPullRequestStatus(prStatus, repoId, pullRequestId)
            console.log(result)

            res.send("Received the POST")
        } catch (error) {
            console.error('Error processing PR status:', error)
            res.status(500).send('Error processing request')
        }
    })
    ```

13. Save `app.js` and restart your node app.

    ```
    node app.js
    ```

## Create a new PR for testing the status server
Now that your server is running and listening for service hook notifications, create a pull request to test it out. 

1. Start in the files view. Edit the readme.md file in your repo (or any other file if you don't have a readme.md).

    :::image type="content" source="media/create-pr-status-server/edit-readme.png" alt-text="Screenshot showing the Edit button in the context menu." border="true":::

2. Make an edit and commit the changes to the repo.

    :::image type="content" source="media/create-pr-status-server/commit-changes.png" alt-text="Screenshot showing the file editor and Commit button on the toolbar." border="true":::

3. Be sure to commit the changes to a new branch so you can create a PR in the next step.

    :::image type="content" source="media/create-pr-status-server/commit-to-branch.png" alt-text="Screenshot showing new branch name field and Commit button." border="true":::

4. Select the **Create a pull request** link.

    :::image type="content" source="media/create-pr-status-server/create-pr.png" alt-text="Screenshot showing the Create a pull request link in the suggestion bar." border="true":::

5. Add **WIP** in the title to test the functionality of the app. Select **Create** to create the PR.

    :::image type="content" source="media/create-pr-status-server/new-pr-wip.png" alt-text="Screenshot showing WIP added to the default PR title." border="true":::

6. Once the PR is created, the status section shows with the **Work in progress** entry that links to the URL specified in the payload.

    :::image type="content" source="media/create-pr-status-server/pr-with-status.png" alt-text="Screenshot showing the status section with the Work in progress entry." border="true":::

7. Update the PR title and remove the **WIP** text and note that the status changes from **Work in progress** to **Ready for review**.

## Related content

- [REST API documentation](/rest/api/azure/devops/git/pull%20request%20statuses)
- [Configure a branch policy for an external service](./pr-status-policy.md)
