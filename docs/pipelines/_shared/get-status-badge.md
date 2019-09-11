<a name="get-the-status-badge"></a>
## Add a status badge to your repository

Many developers like to show that they're keeping their code quality high by displaying a status badge in their repo.

> [!NOTE]
> Even in a private project, anonymous badge access is enabled by default. With anonymous badge access enabled, users outside your organization might be able to query information such as project names, branch names, job names, and build status through the badge status API. To turn off anonymous access, select the checkbox located in the  **Settings** tab of your project settings.

![Status badge shows Azure pipeline succeeded](_img/azure-pipelines-succeeded.png)

To copy the status badge to your clipboard:

1. In Azure Pipelines, go to the **Pipelines** page to view the list of pipelines. Select the pipeline you created in the previous section.

2. In the context menu for the pipeline, select **Status badge**.

3. Copy the sample Markdown from the status badge panel.

Now with the badge Markdown in your clipboard, take the following steps in GitHub:

1. Go to the list of files and select `Readme.md`. Select the pencil icon to edit.

2. Paste the status badge Markdown at the beginning of the file.

3. Commit the change to the `master` branch.

4. Notice that the status badge appears in the description of your repository.

Because you just changed the `Readme.md` file in this repository, Azure Pipelines automatically builds your code, according to the configuration in the `azure-pipelines.yml` file at the root of your repository. Back in Azure Pipelines, observe that a new run appears. Each time you make an edit, Azure Pipelines starts a new run.
