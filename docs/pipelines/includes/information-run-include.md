---
ms.topic: include
ms.author: sandrica
author: silviuandrica
ms.date: 05/31/2022
---

An informational run tells you Azure DevOps failed to retrieve a YAML pipeline's source code. Source code retrieval happens in response to external events, for example, a pushed commit. It also happens in response to internal triggers, for example, to check if there are code changes and start a scheduled run or not. Source code retrieval can fail for multiple reasons, with a frequent one being request throttling by the git repository provider. The existence of an informational run doesn't necessarily mean Azure DevOps was going to run the pipeline. 

An informational run looks like in the following screenshot. 

:::image type="content" source="../process/media/pipeline-information-run.png" alt-text="Screenshot of an informational pipeline run.":::

You can recognize an informational run by the following attributes:
- Status is `Canceled`
- Duration is `< 1s`
- Run name contains one of the following texts:
    - `Could not retrieve file content for {file_path} from repository {repo_name} hosted on {host} using commit {commit_sha}.`
    - `Could not retrieve content for object {commit_sha} from repository {repo_name} hosted on {host}.`
    - `Could not retrieve the tree object {tree_sha} from the repository {repo_name} hosted on {host}.`
    - `Could not find {file_path} from repository {repo_name} hosted on {host} using version {commit_sha}. One of the directories in the path contains too many files or subdirectories.`
- Run name generally contains the BitBucket / GitHub error that caused the YAML pipeline load to fail
- No stages / jobs / steps
