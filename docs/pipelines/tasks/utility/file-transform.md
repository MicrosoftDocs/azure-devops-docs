---
title: File Transform task
description: Apply configuration file transformations and variable substitution to a target package or folder
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7B6A6B5C-8AA1-410A-AE1F-08D59AF00E7B
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 21/02/2019
monikerRange: '> tfs-2018'
---

# File Transform task

Use this task to apply file transformations and variable substitutions on configuration and parameters files. 
For details of how translations are processed, see [File transforms and variable substitution reference](../transforms-variable-substitution.md).

**File transformations**

* At present file transformations are supported for only XML files.

* To apply XML transformation to configuration files (*.config) you must specify a newline-separated list of transformation file rules using the syntax:

  `-transform <path to the transform file> -xml <path to the source file> -result <path to the result file>` 

* File transformations are useful in many scenarios, particularly when you are deploying to an App service and want to add,
  remove or modify configurations for different environments (such as Dev, Test, or Prod) by following the standard
  [Web.config Transformation Syntax](https://docs.microsoft.com/aspnet/web-forms/overview/deployment/visual-studio-web-deployment/web-config-transformations).

* You can also use this functionality to transform other files, including Console or Windows service application configuration files
  (for example, FabrikamService.exe.config).

* Config file transformations are run before variable substitutions. 

**Variable substitution**

* At present only XML and JSON file formats are supported for variable substitution.

* Tokens defined in the target configuration files are updated and then replaced with variable values. 

* Variable substitutions are run after config file transformations.

* Variable substitution is applied for only the JSON keys predefined in the object hierarchy. It does not create new keys. 

**Examples**

If you need XML transformation to run on all the configuration files named with pattern **.Production.config**,
the transformation rule should be specified as:

`-transform **\*.Production.config  -xml **\*.config`

If you have a configuration file named based on the stage name in your pipeline, you can use:

`-transform **\*.$(Release.EnvironmentName).config -xml **\*.config`

To substitute JSON variables that are nested or hierarchical, specify them using JSONPath expressions. 
For example, to replace the value of **ConnectionString** in the sample below, you must define a variable
as `Data.DefaultConnection.ConnectionString` in the build or release pipeline (or in a stage within the release pipeline). 

```
{
  "Data": {
    "DefaultConnection": {
      "ConnectionString": "Server=(localdb)\SQLEXPRESS;Database=MyDB;Trusted_Connection=True"
    }
  }
}
```

> **Note**: Only custom variables defined in build and release pipelines are used in substitution. Default and system pipeline variables are excluded. 
If the same variables are defined in the release pipeline and in a stage, the stage-defined variables supersede the pipeline-defined variables.

See also: [File transforms and variable substitution reference](../transforms-variable-substitution.md).

## Demands

None

## YAML snippet

[!INCLUDE [FileTransformV1](../_shared/yaml/FileTransformV1.md)]

## Arguments

<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tr>
<td>Package or folder<br />folderPath</td>
<td>File path to the package or a folder. Variables ( Build  | Release ), wildcards are supported. For example, `$(System.DefaultWorkingDirectory)/**/*.zip`. 
For zipped folders, the contents are extracted to the TEMP location, transformations executed, and the results zipped in original artifact location.
</td>
</tr>
<tr>
<td>XML transformation<br />enableXmlTransform</td>
<td>Enable this option to apply XML transformations based on the rules specified below. Config transforms run prior to any variable substitution.
XML transformations are supported only for the Windows platform.
</td>
</tr>
<tr>
<td>Transformation rules<br />xmlTransformationRules</td>
<td>Provide a newline-separated list of transformation file rules using the syntax<br /> 
`-transform <path to="" the transform file> -xml <path to the source configuration file> -result <path to the result file>`<br />
The result file path is optional and, if not specified, the source configuration file will be replaced with the transformed result file.
</td>
</tr>
<tr>
<td>File format<br />fileType</td>
<td>Specify the file format on which substitution is to be performed. Variable substitution runs after any configuration transforms.
For XML, Variables defined in the build or release pipelines will be matched against the token ('key' or 'name') entries in the appSettings, applicationSettings, and connectionStrings sections of any config file and parameters.xml file. 
</td>
</tr>
<tr>
<td>Target files<br />targetFiles</td>
<td>Provide a newline-separated list of files for variable substitution. Files names must be specified relative to the root folder.
</td>
</tr>
</table>

## Open source

This task is open source on [GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

