1. When prompted, select the Azure subscription in which you created your Web App.
2. Select the Web App.
3. Select **Validate and configure**.

    As Azure Pipelines creates an azure-pipelines.yml file, which defines your CI/CD pipeline, it:

    * Includes a Build stage, which builds your project, and a Deploy stage, which deploys it to Azure as a Linux web app.
    * As part of the Deploy stage, it also creates an [Environment](../process/environments.md) with default name same as the Web App. You can choose to modify the environment name. 

4. Take a look at the pipeline to see what it does. Make sure that all the default inputs are appropriate for your code.
5. After you've looked at what the pipeline does, select **Save and run**, after which you're prompted for a commit message because Azure Pipelines adds the *azure-pipelines.yml* file to your repository. After editing the message, select **Save and run** again to see your pipeline in action.
 