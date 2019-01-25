---
title: File matching patterns reference for Azure Pipelines and TFS
ms.custom: seodec18
description: A reference guide that can help you to understand the file matching patterns for Azure Pipelines and Team Foundation Server (TFS).
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8A92C09C-3EE2-48EF-A2C0-3B2005AACFD7
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 01/14/2019
monikerRange: '>= tfs-2015'
---

# File matching patterns reference

[!INCLUDE [version-tfs-2015-rtm](../_shared/version-tfs-2015-rtm.md)]

## Pattern syntax

A pattern is a string or list of newline-delimited strings.
File and directory names are compared to patterns to include (or sometimes exclude) them in a task.
You can build up complex behavior by stacking multiple patterns.

### Match characters

Most characters are used as exact matches.
What counts as an "exact" match is platform-dependent:
the Windows filesystem is case-insensitive, so the pattern "ABC" would match a file called "abc".
On case-sensitive filesystems, that pattern and name would not match.

The following characters have special behavior.

* `*` matches zero or more characters within a file or directory name. See <a href="#asterisk_examples">examples</a>.
* `?` matches any single character within a file or directory name. See <a href="#question_mark_examples">examples</a>.
* `[]` matches a set or range of characters within a file or directory name. See <a href="#character_set_examples">examples</a>.
* `**` recursive wildcard. For example, `/hello/**/*` matches all descendants of `/hello`.

### Extended globbing
* `?(hello|world)` - matches `hello` or `world` zero or one times
* `*(hello|world)` - zero or more occurrences
* `+(hello|world)` - one or more occurrences
* `@(hello|world)` - exactly once
* `!(hello|world)` - not `hello` or `world`

Note, extended globs cannot span directory separators. For example, `+(hello/world|other)` is not valid.

### Comments
Patterns that begin with `#` are treated as comments.

### Exclude patterns
Leading `!` changes the meaning of an include pattern to exclude. Interleaved exclude patterns are supported.

Multiple `!` flips the meaning. See <a href="#doubleexcl_examples">examples</a>.

### Escaping
Wrapping special characters in `[]` can be used to escape literal glob characters in a file name. For example the literal file name `hello[a-z]` can be escaped as `hello[[]a-z]`.

### Slash
`/` is used as the path separator.
Even on Windows, use `/` to ensure that the pattern works on any agent.

## Examples

### Basic pattern examples

<h4 id="asterisk_examples">Asterisk examples</h4>

**Example 1:** Given the pattern `*Website.sln` and files:
```
ConsoleHost.sln
ContosoWebsite.sln
FabrikamWebsite.sln
Website.sln
```
The pattern would match:
```
ContosoWebsite.sln
FabrikamWebsite.sln
Website.sln
```

**Example 2:** Given the pattern `*Website/*.proj` and paths:
```
ContosoWebsite/index.html
ContosoWebsite/ContosoWebsite.proj
FabrikamWebsite/index.html
FabrikamWebsite/FabrikamWebsite.proj
```
The pattern would match:
```
ContosoWebsite/ContosoWebsite.proj
FabrikamWebsite/FabrikamWebsite.proj
```

<h4 id="question_mark_examples">Question mark examples</h4>

**Example 1:** Given the pattern `log?.log` and files:
```
log1.log
log2.log
log3.log
script.sh
```
The pattern would match:
```
log1.log
log2.log
log3.log
```

**Example 2:** Given the pattern `image.???` and files:
```
image.tiff
image.png
image.ico
```
The pattern would match:
```
image.png
image.ico
```

<h4 id="character_set_examples">Character set examples</h4>

**Example 1:** Given the pattern `Sample[AC].dat` and files:
```
SampleA.dat
SampleB.dat
SampleC.dat
SampleD.dat
```
The pattern would match:
```
SampleA.dat
SampleC.dat
```

**Example 2:** Given the pattern `Sample[A-C].dat` and files:
```
SampleA.dat
SampleB.dat
SampleC.dat
SampleD.dat
```
The pattern would match:
```
SampleA.dat
SampleB.dat
SampleC.dat
```

**Example 3:** Given the pattern `Sample[A-CEG].dat` and files:
```
SampleA.dat
SampleB.dat
SampleC.dat
SampleD.dat
SampleE.dat
SampleF.dat
SampleG.dat
SampleH.dat
```
The pattern would match:
```
SampleA.dat
SampleB.dat
SampleC.dat
SampleE.dat
SampleG.dat
```

### Exclude pattern examples

Given the pattern:
```
*
!*.xml
```
and files:
```
ConsoleHost.exe
ConsoleHost.pdb
ConsoleHost.xml
Fabrikam.dll
Fabrikam.pdb
Fabrikam.xml
```
The pattern would match:
```
ConsoleHost.exe
ConsoleHost.pdb
Fabrikam.dll
Fabrikam.pdb
```

<h4 id="doubleexcl_examples">Double exclude</h4>

Given the pattern:
```
*
!*.xml
!!Fabrikam.xml
```
and files:
```
ConsoleHost.exe
ConsoleHost.pdb
ConsoleHost.xml
Fabrikam.dll
Fabrikam.pdb
Fabrikam.xml
```
The pattern would match:
```
ConsoleHost.exe
ConsoleHost.pdb
Fabrikam.dll
Fabrikam.pdb
Fabrikam.xml
```
