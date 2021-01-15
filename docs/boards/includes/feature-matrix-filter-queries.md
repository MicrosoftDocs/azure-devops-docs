---
ms.technology: devops-agile
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 01/14/2021
---


### Query filter supported features
 

Search across projects 
Text string search (single text, multi-line text, rich text) 
Is Empty/Is Not Empty 
In and Not In Group searches 
Boolean searches
Wildcard searches
Special character searches
Field comparison searches 
Query on tags 
Query Discussion (via History field) 
Query on Kanban fields
Query using macros or variables
Filter query 


---
:::row:::
   :::column span="1":::
      **Feature** 
   :::column-end:::
   :::column span="1":::
      **Query support**
   :::column-end:::
   :::column span="1":::
     **Supported versions**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Text string searches
   :::column-end:::
   :::column span="4":::
      Searches are not case sensitive (single text, multi-line text, rich text) 
   :::column-end:::
   :::column span="1":::
      TFS 2013-2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Wildcard searches
   :::column-end:::
   :::column span="4":::
      Wild card = *  (see also advanced search box options)
   :::column-end:::
   :::column span="1":::
      TFS 2013-2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
        Historical field query
   :::column-end:::
   :::column span="1":::
       Supported operator: `Was Ever`
   :::column-end:::
   :::column span="1":::
      TFS 2013-2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
        Query using macros or variables
   :::column-end:::
   :::column span="1":::
       . 
   :::column-end:::
   :::column span="1":::
      TFS 2013-2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Search across projects 
   :::column-end:::
   :::column span="1":::
      Text string search (single text, multi-line text, rich text)
   :::column-end:::
   :::column span="1":::
      TFS 2015-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Field comparison searches  
   :::column-end:::
   :::column span="1":::
       Find work items based on how two fields compare with one another.  
       **Supported operators**: `=[Field], <>[Field], >[Field], <[Field], >=[Field], <=[Field]`
   :::column-end:::
   :::column span="1":::
      TFS 2013-2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Query on tags
   :::column-end:::
   :::column span="1":::
       Find work items based on whether they contain or don't contain a tag. 
       **Supported operators**: `Contains, Does Not Contain`
   :::column-end:::
   :::column span="1":::
      TFS 2013-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Is Empty/Is Not Empty 
   :::column-end:::
   :::column span="1":::
      Find work items based on a keyword, wildcard string, of HTML/rich text fields.  
       **Supported operators**: `Is Empty, Is Not Empty`
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      In and Not In Group searches 
   :::column-end:::
   :::column span="1":::
      Find work whose field value matches any value in a delimited set, such as a set of work item types, workflow states, or picklist values.  Separate values with the list separator that corresponds to the regional settings that are defined for your client computer. For example, you might use a comma(,).
   :::column-end:::
   :::column span="1":::
      TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Boolean searches
   :::column-end:::
   :::column span="1":::
      Find work items based on boolean field value. 
   :::column-end:::
   :::column span="1":::
      TFS 2017-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Query Discussion (via History field) 
   :::column-end:::
   :::column span="1":::
       Find work items based on key words or phrases added through the Discussion. 
   :::column-end:::
   :::column span="1":::
      TFS 2017.2-TFS 2018, Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
        Query on Kanban fields
   :::column-end:::
   :::column span="1":::
       Find work items based on their Kanban column, swimlane, or Doing/Done status.
   :::column-end:::
   :::column span="1":::
      Azure DevOps 2019-2020, Azure DevOps Services  
   :::column-end:::
:::row-end:::
---

> [!NOTE] 
> Proximity and special character searches aren't supported in the query editor, but are in the Search box. See xxx.