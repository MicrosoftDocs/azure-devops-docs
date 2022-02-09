---
ms.topic: include
ms.author: sandrica
author: silviuandrica
ms.date: 02/04/2022
---

An information pipeline run tells you Azure DevOps tried running a YAML pipeline, but failed to retrieve its source code. Such a run looks like the following screenshot. 

:::image type="content" source="../process/media/pipeline-information-run.png" alt-text="Information pipeline run.":::

You can recognize an information pipeline run by the following attributes:
- Status is `Canceled`
- Duration is `< 1s`
- Run name contains one of the following texts:
    - `Could not retrieve file content for {file_path} from repository {repo_name} hosted on {host} using commit {commit_sha}.`
    - `Could not retrieve content for object {commit_sha} from repository {repo_name} hosted on {host}.`
    - `Could not retrieve the tree object {tree_sha} from the repository {repo_name} hosted on {host}.`
    - `Could not find {file_path} from repository {repo_name} hosted on {host} using version {commit_sha}. One of the directories in the path contains too many files or subdirectories.`
- Run name generally contains the BitBucket / GitHub error that caused the YAML pipeline load to fail
- No stages / jobs / steps
