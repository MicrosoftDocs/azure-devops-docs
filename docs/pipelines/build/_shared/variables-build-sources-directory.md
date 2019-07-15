---
ms.topic: include
---

The local path on the agent where your source code files are downloaded. For example: `c:\agent\_work\1\s`<br /><br />By default, new build pipelines update only the changed files. You can modify how files are downloaded on the [Repository tab](/azure/devops/pipelines/repos/index).
<br/><br/>
This variable is agent-scoped. It can be used as an environment variable in a script and as a parameter in a build task, but not as part of the build number or as a version control tag.
