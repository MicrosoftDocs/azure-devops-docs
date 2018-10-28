---
title: Command Line task
titleSuffix: Azure Pipelines & TFS
description: Execute tools from a command prompt when building code in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 72C7D4F4-E626-42FF-BCA8-24D58D9A960F
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/10/2016
monikerRange: ">= tfs-2015"
---

# 命令行任务

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

在生成或发布管道中使用此任务可以通过命令提示符运行程序。

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

## 要求

无
::: moniker range="> tfs-2018"

## YAML 片段

[!INCLUDE [temp](../_shared/yaml/CmdLineV2.md)]

命令行(CmdLine)任务在 YAML 中也是包含快捷方式语法的:

```yaml
- script: # 脚本路径或内联
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env: # 可以在此处添加环境变量的映射
```

::: moniker-end

# # 参数

<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tr>
<td>脚本</td>
<td>你想要运行的脚本的内容</td>
</tr>
<tr>
<th colspan="2">可选</th>
</tr>
<tr>
<td>工作目录</td>
<td>在指定工作目录中您想要运行的命令. 如果将其留空，则工作目录为 [$(Build.SourcesDirectory)](../../build/variables.md).</td>
</tr>
<tr>
<td>标准错误</td>
<td>如果返回值是 <code>true</code>, 如果将错误写入了<code>stderr</code>，那么此项任务将会失败。</td>
</tr>
<tr>
<td>环境变量</td>
<td>将一个额外的事项映射到对应进程的环境中。 例如, 私密变量是不会自动映射的. 如果您有一个名为 <code> Foo </code> 的私密变量, 你可以将其像以下这样映射 :<br/><br/>
```yaml
- script: echo %MYSECRET%
  env:
    MySecret: $(Foo)
```
</td>
</tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## 示例

# [yaml](#tab/yaml)

```yaml
steps:
  - script: date /t
    displayName: Get the date # 获取日期
  - script: dir
    workingDirectory: $(Agent.BuildDirectory)
    displayName: List contents of a folder # 列出文件夹中的内容
  - script: |
      set MYVAR=foo
      set
    displayName: Set a variable and then display all # 将设置的变量显示出来
```

# [设计师](#tab/设计师)

在 build pipeline 的 "在 build" 选项卡上, 添加以下任务:<table>

   <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**
      </td>
<td>
<p>获取日期</p>
<ul>
<li>Tool: ```date```</li>
 <li>Arguments: ```/t```</li>
</ul>
      </td>
</tr>

        <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>

<td>
<p>显示操作系统版本。</p>
<ul>
<li>Tool: ```ver```</li>
 </ul>
</td>
        </tr>

        <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>

<td>
<p>显示环境变量。</p>
<ul>
<li>Tool: ```set```</li>
</ul>
</td>
        </tr>

      <tr>
      <td>![](_img/command-line.png)<br/>**Utility: Command Line**</td>

<td>
<p>在生成管道过程中显示创建的所有文件的文件夹。</p>
<ul>
<li>Tool: ```dir```</li>
 <li>Arguments: ```/s```</li>
<li>Advanced, Working folder: ```$(Agent.BuildDirectory)```</li>
</ul>
</td>
        </tr>

</table>---

# # 开源

此任务是开源 [在 GitHub 上](https://github.com/Microsoft/vsts-tasks)。欢迎反馈和贡献。

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

###我在哪里可以学习 Windows 命令？

[Windows CMD 命令行的 a-z 索引](http://ss64.com/nt/)

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< vsts"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
