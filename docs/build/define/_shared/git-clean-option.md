**Clean:**  

* If you set it to true, this command is run: git clean -fdx, git reset -hard HEAD

 [How can I clean the repo a different way?](#build_clean_variable)

* Set this to false if you want to define an incremental build to improve performance.

 Tip: In this case, if you are building Visual Studio projects, on the Build tab, you can also uncheck the Clean check box of the Visual Studio Build or MSBuild step.

* This setting has no effect if you are using a [hosted agent](../../concepts/agents/hosted.md). 
