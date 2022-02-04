A pipeline information run tells you Azure DevOps tried running a YAML pipeline, but failed to retrieve its source code. Such a run looks like in the following screenshot. 

![Pipeline information run](../process/media/pipeline-information-run.png)

You can recognize a pipeline information run by the following attributes:
- Status is `canceled`
- Duration is `< 1s`
- Run name contains `Could not retrieve file content for {file_path} from repository {repo_name} hosted on {host} using commit {commit_sha}`