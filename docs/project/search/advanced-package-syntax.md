---
title: advanced package search syntax
description: How To Use Package Search - Advanced options for using Package Search across all your feeds in a Azure DevOps organizaion
ms.assetid: 936AA33C-4AEF-461E-B49B-C98A59098282
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: jillfra
ms.author: sumallel
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 04/18/2019
---

# How To: Use Package Search

[!INCLUDE [version-header](../../_shared/version-vsts-only.md)]

Package Search is automatically available to users of Azure DevOps Services. By using Package Search you can:

* **Search package by title and description**: You can quickly and easily find relevant packages by using 
free text search on title and description. 
You can also narrow your search by using Boolean operators and combine search criteria. 

> [!div class="mx-imgBorder"]  
> [Web portal package search](_img/_shared/pkg-srch-u2.png)

* **Search across all of your organization feeds**:
  Search in your and your team's feeds across the organization. Narrow your search by using feed, view 
  and package type filters. Use wildcards to widen your search and 
  Boolean operators to fine-tune it. 

> [!div class="mx-imgBorder"]  
> [Web portal package search across organization feeds](_img/_shared/pkg-srch-u1.png)

<a name="syntaxdetails"></a>

## Syntax for simple and compound searches

Use simple search strings for words or phrases. The default is a whole word search; 
for example, a search for "config" will not find instances of the word 
"configuration". However, searches are _not_ case-sensitive.

Words separated by spaces, and not wrapped in double-quotes, are treated as 
separate search terms and the search will expect to find an occurrence of 
all the words (in other words, it assumes the `AND` operator between words).

Irrespective of which project you search from, the default is to search within all feeds of the organization. 

## Narrow your search by using Boolean operators
 
Narrow your search by using Boolean operators to combine search criteria.
Combine multiple search criteria using `AND`, `OR` or `NOT` (they must be 
uppercase). 

Use parentheses to specify the precedence of the operations when you use more than 
one Boolean operator. By default, a search combines all the words you enter using 
the `AND` operator so that it will return only files that contain all of the 
words you entered. 

For example:

* `xml AND parser` finds packages that contain both the words **xml** and 
  **parser**. Note that `AND` is the default operator, and so this is equivalent to 
  the search string `xml parser`.
* `xml OR parser` finds packages that contain either of the words **xml** or **parser**.
* `xml NOT parser` finds packages that contain the word **xml** but not the word **parser**.
* `(xml NOT parser)` OR `lib` finds packages that contain the word **xml**
  but not the word **parser** or packages that contain the word **lib**.

## Broaden your search by using  wildcards

Use the wildcard character `*` and `?` to broaden your search criteria. For 
example:

* `xmlparser*` finds packages containing words that start with **xmlparser**, 
  such as **xmlparsersdk** and **xmlparserlib**.

* `mypackage?` finds packages containing words that start with **mypackage** and have any one alphanumeric 
  character next, such as **mypackage1**, **mypackage2** and **mypackage3**

You can use more than one wildcard to match more than one character.

### Search for phrases

To find an exact match to a set of words, enclose your search terms in double-quotes 
to perform a _phrase search_. For example, `"package for markup files"`.

Within a phrase:

* Boolean operators are treated as literal text.

[!INCLUDE [shared-got-feedback](_shared/shared-got-feedback.md)]
