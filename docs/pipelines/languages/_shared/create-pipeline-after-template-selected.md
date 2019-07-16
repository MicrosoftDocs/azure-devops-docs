1. Take a look at the pipeline to see what it does. Make sure that the JDK version (`jdkVersionOption`) and other inputs are correct for your code.

   >[!Important]
   > 
   > If you're using our sample code (mentioned at the beginning of this topic), then you must compile using the Java 8 JDK. We're working on making this the default. Until that happens, you might see `jdkVersionOption: '1.11'`. If so, change it to `jdkVersionOption: '1.8'`.

2. After you've looked at what the pipeline does, select **Save and run**, after which you're prompted for a commit message because Azure Pipelines adds the *azure-pipelines.yml* file to your repository. After editing the message, select **Save and run** again to see your pipeline in action.