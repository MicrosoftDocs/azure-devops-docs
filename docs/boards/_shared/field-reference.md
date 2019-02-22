---
ms.topic: include
---


<a id="field-reference">  </a>  

### What is a field? How are field names used?  

Each [work item type](/azure/devops/boards/backlogs/add-work-items) is associated with 31 system fields and several more type-specific fields. You use work items to plan and track your project.  

Each field supports tracking a piece of information about the work to perform. Values you assign to a field are stored in the work tracking data store which you can create queries to determine status and trends.    

For descriptions and usage of each field defined for the core system processes&mdash;[Scrum, Agile, and CMMI system processes](/azure/devops/boards/work-items/guidance/choose-process)&mdash;see [Work item field index](/azure/devops/boards/work-items/guidance/work-item-field).  

#### Field names  
A work item field name uniquely identifies each work item field. Make sure your field names fall within these guidelines:  

- Field names must be unique within the account/project collection  
- Field names must be 128 or fewer Unicode characters  
- Field names can't contain any leading or trailing spaces, nor two or more consecutive spaces  
- Field names must contain at least one alphabetic character  
- Field names can't contain the following characters: ```.,;'`:~\/\*|?"&%$!+=()[]{}<>```.   

Because custom fields are defined for the account collection, you can't add a custom field to a process with the same field name that you add to another inherited process.  


<!-- 
16 person-name fields    
1024 rules per field   
128 picklist values per field     
-->