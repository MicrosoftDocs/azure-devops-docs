---
ms.topic: include
---

<a id="field-reference"></a>
### Fields and field references

You use [work items](../../../boards/backlogs/add-work-items.md) to plan and track your project. Each work item type is associated with 31 system fields and several more type-specific fields that provide tracking information about the work items. Values you assign to a field are stored in the work tracking data store, which you can query to determine status and trends.

For descriptions and usage of each field defined for the core system processes [Scrum, Agile, and Capability Maturity Model Integration (CMMI)](../../../boards/work-items/guidance/choose-process.md), see [Work item field index](../../../boards/work-items/guidance/work-item-field.md).

### Field names

A work item field name uniquely identifies each work item field. Make sure your field names meet these requirements:

- Must be unique within the organization or project collection
- Must be 128 or fewer Unicode characters
- Must contain at least one alphabetic character
- Can't contain any leading or trailing spaces, or two or more consecutive spaces
- Can't contain any of the following characters: `.` `,` `;` `'` `:` `~` `\` `/` `*` `|` `?` `"` `&` `%` `$` `!` `+` `=` `(` `)` `[` `]` `{` `}` `<` `>`

Field names and definitions apply to the entire organization. You can't add a field with a field name that already exists in the organization or that another inherited process added to a WIT.

<!-- 
16 person-name fields    
1024 rules per field   
128 picklist values per field     
-->