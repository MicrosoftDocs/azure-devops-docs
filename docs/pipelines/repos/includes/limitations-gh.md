* For best performance, we recommend a maximum of 50 pipelines in a single repository. For acceptable performance, we recommend a maximum of 100 pipelines in a single repository. The time required to process a push to a repository increases with the number of pipelines in that repository. Whenever there's push to a repository, Azure Pipelines needs to load all YAML pipelines in that repository to figure out if any of them need to run, and loading each pipeline incurs a performance penalty. In addition to performance issues, having too many pipelines in a single repository can lead to throttling on GitHub's side, as Azure Pipelines may make too many requests in a short amount of time.
* The use of _extends_ and _include_ templates in a pipeline impacts the rate at which Azure Pipelines makes GitHub API requests and can lead to throttling on GitHub's side. Before running a pipeline, Azure Pipelines needs to generate the complete YAML code, so it needs to fetch all template files.
* Azure Pipelines loads a maximum of 2000 branches from a repository into dropdown lists in the Azure DevOps Portal, for example in the **Select a branch** dialogue for the **Default branch for manual and scheduled builds** setting, or when choosing a branch when running a pipeline manually.
   
  If you don't see your desired branch in the list, type the desired branch name manually in the **Default branch for manual and scheduled builds** field.
 
  If you click the ellipsis and open the **Select a branch** dialogue and close it without choosing a valid branch from the drop-down list, you may see a **Some settings need attention** 
  message and a **This setting is required** message below **Default Branch for manual and scheduled builds**. To work around this message, reopen the pipeline and enter the name 
  directly in the **Default branch for manual and scheduled builds** field.

