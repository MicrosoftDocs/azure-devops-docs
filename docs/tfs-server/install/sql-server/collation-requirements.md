---
title: SQL Server Collation Requirements for Team Foundation Server
description: SQL Server Collation Requirements for Team Foundation Server
ms.assetid: 193b1aa8-6682-490c-8a58-4b01cc657e4b
ms.manager: douge
ms.author: elbatk
ms.date: 09/01/2016
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
---

# SQL Server Collation Requirements for Team Foundation Server

**TFS 2017** | **TFS 2015** | **TFS 2013**

When you install SQL Server, you must consider two factors regarding collation settings that could affect your Team Foundation Server deployment:

-   Requirements for Team Foundation Server 

-   All instances of SQL Server in your Team Foundation Server deployment must use the same settings

You can set collation settings for the Database Engine and SQL Server Analysis Services. Collation settings include character set, sort order, and other locale-specific settings, that are fundamental to the structure and function of SQL Server databases. You cannot change these settings after installation.

## Requirements for Team Foundation Server

To work with Team Foundation Server, the collation settings for SQL Server must be case insensitive, accent sensitive, and not binary. If multiple SQL Server are running an instance of Database Engine or SQL Server Analysis Services for Team Foundation Server, the collation settings that you use must be the same across all these servers.

SQL Server bases your default collation settings on the locale of your operating system. The default setting for U.S. English and most other locales often meets the requirements for Team Foundation Server. However, those settings might not support all of the data that your organization must store in Team Foundation Server. In that case, you must find a setting that supports your data and is accent sensitive, not case sensitive, and not binary.

If you install Database Engine Services or Analysis Services, you can change collation settings on the **Server Configuration** page, by clicking the **Collation** tab and then clicking **Customize**. You may want to specify an option under **Windows collation designator and sort order**. For example, you can specify **Latin1\_General**, and select the **AS** checkbox, if you require support for additional characters.

For most other locales, the default setting is an option under **Windows collation designator and sort order**. Make sure that the settings match the requirements for Team Foundation Server. If you must change this setting, you should specify the option that is named for your locale with "\_100" after it, where possible. For example, you can use Japanese\_100 collation if you use Unicode CJK Extension A characters or Unicode surrogates in the following ways:

-   Names of objects, such as queries or projects, in Team Foundation Server.

-   Files or paths that are checked into the version control system.

-   Any work item field that is used for searches.

To avoid problems with double-width or hiragana/katakana-equivalent characters, you should select the check boxes to enable Kana and width sensitivity when you install SQL Server.

For more information, see the Microsoft website: [Collation Settings in Setup](https://msdn.microsoft.com/en-us/library/ms143508.aspx).

## Full-Text search queries and collation settings

To support full-text search queries, the collation settings of the SQL Server database should correspond to a language that has a word breaker registered with SQL Server. If you use an unsupported language, you could receive unexpected results when you run a work item query that specifies the **Contains** or **Contains Words** operators with text strings.

To learn more, see one of the following topics:

-   [Full-Text Search (SQL Server)](http://go.microsoft.com/fwlink/?LinkId=247533)

-   [sys.fulltext\_languages (Transact-SQL)](http://go.microsoft.com/fwlink/?LinkId=247534)

-   [ALTER FULLTEXT INDEX (Transact-SQL)](http://go.microsoft.com/fwlink/?LinkId=247535)

-   [SQL Server 2008 Full-Text Search: Internals and Enhancements](http://go.microsoft.com/fwlink/?LinkId=247533)

-   [Query Fields, Operators, Values, and Variables](http://go.microsoft.com/fwlink/?LinkId=248569)

## See Also

[Manually install SQL Server for Team Foundation Server](install-sql-server.md) 

[Install Team Foundation Server](../install-2013/install-tfs.md) 

[TFS upgrade requirements](../../upgrade/upgrade-2013/upgrade-2013-requirements.md) 
