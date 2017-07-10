<h2 id="cd">Define and test your CD release process</h2>

Continuous deployment (CD) means starting an automated release process whenever a new successful build is available.
Your CD release process picks up the artifacts published by your CI build and then deploys them to your Azure web site.

1. Do one of the following:

   * If you've just completed a CI build (see above), choose the link to the completed build (for example, _Build 1634_).
     In the build's **Summary** tab under **Deployments**, choose **Create release** followed by **Yes**.
     This starts a new release definition that's automatically linked to the build definition.

   * Open the **Releases** tab of the **Build &amp; Release** hub, open the **+** drop-down
     in the list of release definitions, and choose **Create release definition** 

1. Select the **Azure App Service Deployment** template and choose **Next**.

1. In the **Artifacts** section, make sure your CI build definition for the Web deploy package is selected as the artifact source.

1. Select the **Continuous deployment** check box, and then choose **Create**.

1. Select the **Deploy Azure App Service** task and configure it as follows:

   | Task step | Parameters |
   | --------- | ---------- |
   | ![Deploy: Azure App Service Deploy](../../steps/deploy/_img/azure-web-app-deployment-icon.png)<br/>[Deploy: Azure App Service Deploy](../../steps/deploy/azure-app-service-deploy.md)<br/>Deploy the app to Azure App Services | **Azure Subscription:** Select a connection from the list under **Available Azure Service Connections**. If no connections appear, choose **Manage**, select **New Service Endpoint** then **Azure Resource Manager**, and follow the prompts. Then return to your release definition, refresh the **AzureRM Subscription** list, and select the connection you just created. **Note**: If your Azure subscription is defined in an Azure Government Cloud, ensure your deployment process meets the relevant compliance requirements. For more details, see [Azure Government Cloud deployments](../../concepts/library/government-cloud.md).<br/>**App Service Name**: the name of the web app (the part of the URL *without* **.azurewebsites.net**).<br/>**Deploy to Slot**: make sure this is cleared (the default)<br/>**Virtual Application:** leave blank<br/>**Web Deploy Package:** `$(System.DefaultWorkingDirectory)\**\*.zip` (the default)<br/>**Advanced: Take App Offline:** If you run into locked .DLL problems when you test the release, as explained below, try selecting this check box. |

   > [!Note]
   >
   > If you are using TFS (rather than Team Services) you may find that the **Azure App Service Deploy** task is not available, depending on your version and update of TFS.
   > Instead, you can use the [Azure Web App Deployment](https://github.com/Microsoft/vsts-tasks/tree/master/Tasks/AzureRmWebAppDeployment) task to deploy your app.

1. Edit the name of the release definition, choose **Save**, and choose **OK**.
   Note that the default environment is named Environment1, which you can edit by clicking directly on the name.

You're now ready to create a release, which means to start the process of running the release definition with the artifacts produced by a specific build. This will result in deploying the build to Azure:

1. Choose **+ Release** and select **Create Release**.

1. Select the build you just completed in the highlighted drop-down list and choose **Create**.

1. Choose the release link in the popup message. For example: "Release **Release-1** has been created".

1. Open the **Logs** tab to watch the release console output.

1. After the release is complete, navigate to your site running in Azure using the Web App URL `http://{web_app_name}.azurewebsites.net`, and verify its contents.

> [!Note]
>
> If you encounter deployment failures with a message about locked .DLL files, then try selecting **Advanced: Take App Offline**, as mentioned above.
