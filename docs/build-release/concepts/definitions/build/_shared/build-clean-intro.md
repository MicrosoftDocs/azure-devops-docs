You can perform different kinds of cleaning of the working directory of your private agent before the build is run.

> [!NOTE]
> Cleaning is not relevant if you are using a [hosted agent](../../../../concepts/agents/hosted.md) because you get a new agent every time in that case.

In general, for faster performance by your private agents, don't clean the repo. In this case to get the most performance advantage, make sure you are also building incrementally. For example, if you are building Visual Studio projects, make sure to clear the **Clean** check box of the Visual Studio Build or MSBuild task.

If you do need to clean the repo (for example to avoid problems caused by residual files from a previous build), below are the options you've got.
