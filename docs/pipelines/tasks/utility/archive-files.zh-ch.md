---
title: Archive Files task
titleSuffix: Azure Pipelines & TFS
description: Use an archive file to then create a source folder in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 9D2AE683-E116-4CEA-B673-CD7BEFB8F415
ms.manager: douge
ms.author: alewis
author: andyjlewis
ms.date: 08/30/2016
monikerRange: ">= tfs-2017"
---

#归档文件的任务

[!INCLUDE [temp](../../_shared/version-tfs-2017-rtm.md)]

在构建或发布管道中使用这个任务创建一个归档文件从源文件夹。
一系列标准档案格式支持包括. zip,. jar、war,. ear,. tar,解压,等等。

# #要求

没有一个

:::绰号范围= " > tfs - 2018”

# # YAML 片段

[!包括(临时)(. . /互联网/ yaml / ArchiveFilesV2.md))
:::moniker-end

# #参数

<表>
< thead >
< tr >
< th >参数< / th >
< th > < / th >描述
< / tr >
< / thead >
< tr >
< td >根文件夹(或文件)归档< / td >
< td >
< p >文件夹(或文件)你想存档。默认文件路径是相对的根文件夹一样回购(如果你有指定的‘‘$(Build.SourcesDirectory)' ' '。< / p >
< p >如果指定的路径是一个文件夹,递归,所有嵌套的文件和文件夹将包含在存档。< / p >
< p >如果指定的路径是一个文件,只有单一的文件将包含在存档。< / p >
< / td >
< / tr >
< tr >
< td >前缀根文件夹名称存档路径< / td >
< td >如果选中,根文件夹名称将前缀在存档文件路径。否则,所有文件路径将开始一个较低的水平。
< p >为例,假设选定的根文件夹是:< b > / home / user /产量/类/”< / b >,并包含:< b > 'com/acme/Main.class`< / b >。 < ul > <李>如果选择,由此产生的归档文件将包含:< b >类/com/acme/Main.class` < / b >。
李< / >
<李>否则,由此产生的归档文件将包含:< b > 'com/acme/Main.class`。< / b >。
李< / >
< / ul >
< / td >
< / tr >
< tr >
< td > < / td >的存档类型
< td >指定所使用的压缩方案。创建< b >“foo。jar < / b >为例,选择< b >的 zip 的压缩< / b >,并指定< b >“foo。jar 的< / b >创建的存档文件。对于所有 tar 文件(包括压缩的),选择< b > < / b >“焦油”。
< p >
< ul >
<李> < b >“zip”< / b >——默认情况下,压缩格式,所有 zip 兼容的类型,选择这种(。邮政,. jar、war . ear)< /李>
<李> < b >“7 z”< / b >——7 - zip 格式,< /李>解压到
<李> < b >“焦油”< / b >——tar 格式,选择了压缩玷污,(. tar。广州,. tar。李 bz2,获取.tar.xz)< / >
<李> < b >“wim”< / b >——wim 格式,(.wim)< /李>
< / ul >
< / td >
< / tr >
< tr >
< td > < / td > Tar 压缩
< td >只适用如果< b >“焦油”< / b >存档类型被选中。
< p >选择选择压缩方案,或选择< b >“没有”< / b >创建一个未压缩的 tar 文件。
< ul >
<李> < b >“广州”< / b >——默认情况下,gzip 压缩(. tar。广州,. tar。李 tgz .taz)< / >
<李> < b > ' bz2”获取< / b > - bzip2 压缩(. tar。李 bz2,获取.tz2 .tbz2)< / >
<李> < b > < / b >的 xz - xz 压缩(. tar。李 xz .txz)< / >
<李> < b >“没有”< / b >——没有压缩,选择创建一个未压缩的 tar 文件(. tar)< /李>
< / ul >
< / td >
< / tr >
< tr >
< td >存档文件创建< / td >
< td >指定创建归档文件的名称。文件扩展名应该匹配选择的档案类型。例如创建< b > foo。tgz”< / b >,选择< b >“焦油”< / b >存档类型,< b >“广州”< / b > tar 压缩。
< / td >
< / tr >
< tr >
< td >替换现有档案< / td >
< td >如果现有的档案存在,指定是否要覆盖它。否则,文件将被添加到它,只要它不是一个 comprssed 焦油。
< p >如果添加到现有的档案,这些类型支持:< / p >
< ul >
<李> < b >“zip”< / b > < /李>
<李> < b >“7 z”< / b > < /李>
<李> < b >“焦油”< / b >——未压缩的只有李< / >
<李> < b >“wim”< / b > < /李>
< / ul >
< / td >
< / tr >
< tr >
< / tr >
[!包括(临时)(. . /互联网/ control-options-arguments.md))
< /表>

# #开源

这个任务是开源的(在 GitHub)(https://github.com/Microsoft/vsts-tasks)。欢迎反馈和贡献。

# # Q & A

< !——BEGINSECTION 类= " md-qanda " - - >

[!包括(临时)(. . /互联网/ build-step-common-qa.md))

[!包括(临时)(. . / . . /互联网/ qa-agents.md)]

:::绰号范围= " < vsts "
[!包括(临时)(. . / . . /互联网/ qa-versions.md)]
:::moniker-end

< !——ENDSECTION >

标题:归档文件的任务

在构建或发布管道中使用这个任务创建一个归档文件从源文件夹。

推荐- - - - - -
标题:归档文件的任务
titleSuffix:Azure 管道&助教
描述:使用一个归档文件,然后创建一个源文件夹在 Azure 管道和 Team Foundation Server(TFS)
ms.topic:参考
ms.prod:devops
ms.technology:devops-cicd
ms.assetid:9 d2ae683-e116-4cea-b673-cd7befb8f415
ms.manager:douge
ms.author:alewis
作者:andyjlewis
ms.date:08/30/2016
monikerRange:“> = tfs - 2017”
推荐- - - - - -

#归档文件的任务

[!包括(临时)(. . / . . /互联网/版本- tfs 2017 - rtm.md))

在构建或发布管道中使用这个任务创建一个归档文件从源文件夹。
一系列标准档案格式支持包括. zip,. jar、war,. ear,. tar,解压,等等。

# #要求

没有一个

:::绰号范围= " > tfs - 2018”

# # YAML 片段

[!包括(临时)(. . /互联网/ yaml / ArchiveFilesV2.md))
:::moniker-end

# #参数

<表>
< thead >
< tr >
< th >参数< / th >
< th > < / th >描述
< / tr >
< / thead >
< tr >
< td >根文件夹(或文件)归档< / td >
< td >
< p >文件夹(或文件)你想存档。默认文件路径是相对的根文件夹一样回购(如果你有指定的‘‘$(Build.SourcesDirectory)' ' '。< / p >
< p >如果指定的路径是一个文件夹,递归,所有嵌套的文件和文件夹将包含在存档。< / p >
< p >如果指定的路径是一个文件,只有单一的文件将包含在存档。< / p >
< / td >
< / tr >
< tr >
< td >前缀根文件夹名称存档路径< / td >
< td >如果选中,根文件夹名称将前缀在存档文件路径。否则,所有文件路径将开始一个较低的水平。
< p >为例,假设选定的根文件夹是:< b > / home / user /产量/类/”< / b >,并包含:< b > 'com/acme/Main.class`< / b >。 < ul > <李>如果选择,由此产生的归档文件将包含:< b >类/com/acme/Main.class` < / b >。
李< / >
<李>否则,由此产生的归档文件将包含:< b > 'com/acme/Main.class`。< / b >。
李< / >
< / ul >
< / td >
< / tr >
< tr >
< td > < / td >的存档类型
< td >指定所使用的压缩方案。创建< b >“foo。jar < / b >为例,选择< b >的 zip 的压缩< / b >,并指定< b >“foo。jar 的< / b >创建的存档文件。对于所有 tar 文件(包括压缩的),选择< b > < / b >“焦油”。
< p >
< ul >
<李> < b >“zip”< / b >——默认情况下,压缩格式,所有 zip 兼容的类型,选择这种(。邮政,. jar、war . ear)< /李>
<李> < b >“7 z”< / b >——7 - zip 格式,< /李>解压到
<李> < b >“焦油”< / b >——tar 格式,选择了压缩玷污,(. tar。广州,. tar。李 bz2,获取.tar.xz)< / >
<李> < b >“wim”< / b >——wim 格式,(.wim)< /李>
< / ul >
< / td >
< / tr >
< tr >
< td > < / td > Tar 压缩
< td >只适用如果< b >“焦油”< / b >存档类型被选中。
< p >选择选择压缩方案,或选择< b >“没有”< / b >创建一个未压缩的 tar 文件。
< ul >
<李> < b >“广州”< / b >——默认情况下,gzip 压缩(. tar。广州,. tar。李 tgz .taz)< / >
<李> < b > ' bz2”获取< / b > - bzip2 压缩(. tar。李 bz2,获取.tz2 .tbz2)< / >
<李> < b > < / b >的 xz - xz 压缩(. tar。李 xz .txz)< / >
<李> < b >“没有”< / b >——没有压缩,选择创建一个未压缩的 tar 文件(. tar)< /李>
< / ul >
< / td >
< / tr >
< tr >
< td >存档文件创建< / td >
< td >指定创建归档文件的名称。文件扩展名应该匹配选择的档案类型。例如创建< b > foo。tgz”< / b >,选择< b >“焦油”< / b >存档类型,< b >“广州”< / b > tar 压缩。
< / td >
< / tr >
< tr >
< td >替换现有档案< / td >
< td >如果现有的档案存在,指定是否要覆盖它。否则,文件将被添加到它,只要它不是一个 comprssed 焦油。
< p >如果添加到现有的档案,这些类型支持:< / p >
< ul >
<李> < b >“zip”< / b > < /李>
<李> < b >“7 z”< / b > < /李>
<李> < b >“焦油”< / b >——未压缩的只有李< / >
<李> < b >“wim”< / b > < /李>
< / ul >
< / td >
< / tr >
< tr >
< / tr >
[!包括(临时)(. . /互联网/ control-options-arguments.md))
< /表>

# #开源

这个任务是开源的(在 GitHub)(https://github.com/Microsoft/vsts-tasks)。欢迎反馈和贡献。

# # Q & A

< !——BEGINSECTION 类= " md-qanda " - - >

[!包括(临时)(. . /互联网/ build-step-common-qa.md))

[!包括(临时)(. . / . . /互联网/ qa-agents.md)]

:::绰号范围= " < vsts "
[!包括(临时)(. . / . . /互联网/ qa-versions.md)]
:::moniker-end

< !——ENDSECTION >
