---
ms.topic: include
---

[//]: # (TODO: Restore use of includes when we get support for using them in a list.)

1. Create a new build pipeline.

   # [Azure Repos or TFS repo](#tab/vsts)

   Navigate to the **Files** tab of the **Code** hub, and then click **Set up build**.

   ![Screenshot showing button to set up build for a repository](../_shared/_img/set-up-first-build-from-code-hub.png)

   You are taken to **Azure Pipelines** and asked to **Select a template** for the new build pipeline.

   # [GitHub repo](#tab/github)

   Navigate to the **Builds** tab in Azure Pipelines or TFS, and then click **+ New**. You are asked to **Select a template** for the new build pipeline.

   ---

2. In the right panel, click **Start with an empty pipeline**.

3. For the **Agent pool**, select _Hosted Ubuntu 1604_. This is how you can use our pool of agents that have the software you need to build your app.

4. Click **Get sources** and then:

   # [Azure Repos or TFS repo](#tab/vsts)

   Observe that the new build pipeline is automatically linked to your repository.

   # [GitHub repo](#tab/github)

   Select your version control repository. You'll need to authorize access to your repo.

   ---

5. Select **+ Add Task** to add another task to the build pipeline. From the displayed task catalog, select **Docker** task. Change the parameters for this task as follows:

   * **Azure subscription:** Select a connection from the list under **Available Azure Service Connections** or create a more restricted permissions connection to your Azure subscription. If you are using Azure Pipelines and if you see an **Authorize** button next to the input, click on it to authorize Azure Pipelines to connect to your Azure subscription. If you are using TFS or if you do not see
     the desired Azure subscription in the list of subscriptions, see [Azure Resource Manager service connection](../../library/connect-to-azure.md) to manually set up the connection.

   * **Azure Container Registry:** Select the Azure container registry that you created above.

   * **Action:** Build an image.

6. Select **+ Add Task** to add another **Docker** task to the build pipeline.
   Make sure that the task is inserted _after_ the previous **Docker** task. Change the parameters for this task as follows:

   * **Azure subscription:** Same as in previous task.

   * **Azure Container Registry:** Same as in previous task.

   * **Action:** Push an image.

7. Click the **Triggers** tab in the build pipeline. Enable the **Continuous Integration** trigger. This will ensure that the build pipeline is automatically triggered every time you commit a change to your repository.

8. Click **Save & queue** to kick off your first build. On the **Save build pipeline and queue** dialog box, click **Save & queue**.

9. A new build is started. You'll see a link to the new build on the top of the page. Click the link to watch the new build as it happens.

[//]: # (TODO:> [!TIP])
[//]: # (TODO:> To learn more about GitHub CI builds, see [Define CI build pipeline for your Git repo](#)
