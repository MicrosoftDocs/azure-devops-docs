---
title: Process parameters
ms.custom: seodec18
description: You can link all important fields for tasks used across the build definition as process parameters
ms.topic: conceptual
ms.assetid: 27AD0094-FDF1-4B36-A82E-B845980984AF
ms.date: 01/04/2021
monikerRange: '>= tfs-2017'
---

# Process parameters

[!INCLUDE [version-tfs-2017-rtm](../includes/version-tfs-2017-rtm.md)]

> [!NOTE]
> This guidances does not apply to YAML pipelines. For parameters in YAML pipelines, see [runtime parameters](runtime-parameters.md).
> 

You can link all important arguments for tasks used across the build definition as process parameters, which are then shown at one place - the Pipeline view.
This means you can quickly edit these arguments without needing to click through all the tasks.

Templates come with a set of predefined process parameters.

Process parameters differ from variables in the kind of input supported by them. Variables only take in string inputs while process parameters in addition to string inputs support more data types like check boxes and drop-down list boxes.


> [!NOTE]
> 
> The **Link** and **Unlink** functionality applies to build pipelines only. It does not apply to release pipelines.

::: moniker range="> tfs-2018"
To link more arguments across all tasks to new or existing process parameters, select **Link** from the task argument.
::: moniker-end

::: moniker range="<=tfs-2018"

## Set a process parameter from a template in a build pipeline

You can create a process parameter from a task input in a build pipeline. Process parameters are useful if you will have the same input values in multiple tasks. 
You can link more arguments across all tasks to new or existing process parameters.

![Schematic showing tasks](media/2017-user-experience/tasks-linking.png)

To link a process parameter:

1. Select the **i** icon that is part of a task input field.

1. In the window that opens, select **Link**.

    :::image type="content" source="media/select-link.png" alt-text="Select the link option in the pop-up.":::

1. Configure the **Link settings**. You can set a new **Display name** so that you can identify the process parameter later on. 

    :::image type="content" source="media/configure-display-name.png" alt-text="Update the display name so that you can reference the parameter later. ":::

1. You'll now have the option to link your process parameter when you reuse the same task. To link a process parameter, select the **i** icon and click **Link**. 

1. Set the **Process parameter to link to this setting** to reference your existing process parameter and select **Link**.

    :::image type="content" source="media/reference-process-param.png" alt-text="Reference an existing process parameter. ":::

::: moniker-end

::: moniker range="< tfs-2018"

![Link additional arguments.](media/2017-user-experience/process-parameters-view-2.png)
::: moniker-end

::: moniker range="> tfs-2018"
Select **Unlink** if you need to disconnect an argument from a process parameter.
::: moniker-end

::: moniker range="<= tfs-2018"
You can also unlink arguments from process parameters.

1. Select the link icon. 

1. Choose the **Unlink** option. In this example, the `Parameter.solution` process parameter is unlinked. 
 
![Unlink arguments.](media/2017-user-experience/tasks-unlinking.png)

## Define a new process parameter

You can define a new process parameter using the `json` definition for your pipeline. 

1. Export the existing template from the **Build Definitions** page. 

    :::image type="content" source="media/export-build-template.png" alt-text="Export the build template.":::

1. Open the JSON in a text editor. Add a new input in the process parameter section of your file. If you have existing process parameters, you can duplicate one of them. For example, this is a new parameter definition based on the msBuildArgs parameter. 

    ```json
        {
                "aliases":[
                
                ],
                "options":{
                
                },
                "properties":{
                
                },
                "name":"myNewParam",
                "label":"MyProcessParam",
                "defaultValue":"/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:PackageLocation=\"$(build.artifactstagingdirectory)\\\\\"",
                "type":"string",
                "helpMarkDown":"Additional arguments for process parameters.",
                "visibleRule":"",
                "groupName":""
            }
    ```

1. Add the new parameter as an input value for any tasks where you want to use it. For example, here the new value of `msbuildArgs` is `myNewParam`.

    ```json
        "inputs":{
                        "solution":"$(Parameters.solution)",
                        "vsVersion":"latest",
                        "msbuildArgs":"$(Parameters.myNewParam)",
                        "platform":"$(BuildPlatform)",
                        "configuration":"$(BuildConfiguration)",
                        "clean":"false",
                        "maximumCpuCount":"false",
                        "restoreNugetPackages":"false",
                        "msbuildArchitecture":"x86",
                        "logProjectEvents":"true",
                        "createLogFile":"false"
                    }
    ```


1. Return to the **Build Definitions** page and select **Import**. 

    :::image type="content" source="media/select-import-option.png" alt-text="Select the import option to add your json file.":::

1. Add your `json` file and import the pipeline. 

1. Within your imported pipeline, you now have the option to link to your new process parameter. You may need to unlink and then link again for the process parameter to appear. 

::: moniker-end



