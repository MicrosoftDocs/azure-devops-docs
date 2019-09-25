---
title: MySQL Database Deployment On Machine Group task
description: The task is used to deploy for MySQL Database.
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.assetid: 6D557DD5-9373-47AD-AA2E-72B6DE264F66
ms.manager: jillfra
ms.author: ronai
author: RoopeshNair
ms.date: 05/2/2019
monikerRange: 'azure-devops'
---

# MySql Database Deployment on Machine Group task

Use this task in a build or release pipeline to run your scripts and make changes to your MySQL Database. There are two ways to deploy, either using a script file or writing the script in our inline editor. Note that this is an early preview version. Since this task is server based, it appears on Deployment group jobs.

## Prerequisites

- MySQL Client in agent box

The task expects MySQL client must be in agent box.

- **Windows Agent**: Use this [script file](https://aka.ms/window-mysqlcli-installer) to install MySQL client

- **Linux Agent**: Run command 'apt-get install mysql-client' to install MySQL client

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>TaskNameSelector</code><br/>Deploy MySql Using</td><td>Select one of the options between Script File & Inline Script. <br/>Default value: SqlTaskFile</td></tr>
<tr><td><code>SqlFile</code><br/>MySQL Script</td><td>(Required) Full path of the script file on the automation agent or on a UNC path accessible to the automation agent like,  BudgetIT\DeployBuilds\script.sql. Also, predefined system variables like, $(agent.releaseDirectory) can also be used here. A file containing SQL statements can be used here.</td></tr>
<tr><td><code>SqlInline</code><br/>Inline MySQL Script</td><td>(Required) MySQL script to execute on the Database</td></tr>
<tr><td><code>ServerName</code><br/>Host Name</td><td>(Required) Server name of Database for MySQL. <br/>Example: localhost. <br/> When you connect using MySQL Workbench, this is the same value that is used for 'Hostname' in 'Parameters'. <br/>Default value: localhost</td></tr>
<tr><td><code>DatabaseName</code><br/>Database Name</td><td>The name of database, if you already have one, on which the below script is needed to be run, else the script itself can be used to create the database.</td></tr>
<tr><td><code>SqlUsername</code><br/>Mysql User Name</td><td>(Required) When you connect using MySQL Workbench, this is the same value that is used for 'Username' in 'Parameters' </td></tr>
<tr><td><code>SqlPassword</code><br/>Password</td><td>(Required) Password for MySQL Database.<br>It can be variable defined in the pipeline. <br/>Example : $(password).<br>Mark the variable type as 'secret' to secure it. </td></tr>
<tr><td><code>SqlAdditionalArguments</code><br/>Additional Arguments</td><td>Additional options supported by MySQL simple SQL shell.  These options will be applied when executing the given file on the Database for MySQL.​<br/>Example: You can change to default tab separated output format to HTML or even XML format. Or if you have problems due to insufficient memory for large result sets, use the --quick option.​</td></tr>
</table>

## Example

This example creates a sample db in MySQL.

```YAML
steps:
- task: MysqlDeploymentOnMachineGroup@1
  displayName: 'Deploy Using : InlineSqlTask'
  inputs:
    TaskNameSelector: InlineSqlTask
    SqlInline: |
     CREATE DATABASE IF NOT EXISTS alm;
     use alm;
    ServerName: localhost
    SqlUsername: root
    SqlPassword: P2ssw0rd
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

