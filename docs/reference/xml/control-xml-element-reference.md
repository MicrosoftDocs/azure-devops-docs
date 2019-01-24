---
title: Control XML element reference
titleSuffix: TFS  
description: Use the control element to define a work item field, text, hyperlink, or other element to display in a work item form - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 5fe3a3ce-6dc5-4e58-9c20-2885f38c6f13
ms.author: kaelliauthor: KathrynEE
ms.manager: jillfra
ms.topic: reference
monikerRange: '>= tfs-2013 <= tfs-2015'
ms.date: 06/16/2017
---

# Control XML element reference

**TFS 2015 | TFS 2013**

> [!IMPORTANT]  
>This topic applies to project customization for the On-premises XML process model and the old work item form. For the Hosted XML process model and TFS 2017 and later versions that use the new work item form, see [WebLayout and Control elements](weblayout-xml-elements.md). For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md).
>
>For an overview of process models, see [Customize your work tracking experience](../customize-work.md). 

You use the `Control` element to define a work item field, text, hyperlink, or other control element to display in a work item form. For examples of how to use this element, see [Specify work item form controls](specify-work-item-form-controls.md) and [Design the work item form](design-work-item-form.md).  

  
## Syntax   
  
> [!div class="tabbedCodeSnippets"]
```XML  
<Control FieldName="FieldName" Type="AttachmentsControl | DateTimeControl | FieldControl |   
HtmlFieldControl | LabelControl | LinksControl | WebpageControl | WorkItemClassificationControl |   
WorkItemLogControl" ControlFontSize="FontSize" EmptyText="TextString"  
Label="LabelText" LabelPosition="Top | Bottom | Left | Right"   
Padding="(top, bottom, left, right)"   
Margin="(top, bottom, left, right)" ReadOnly="True | False" MinimumSize="(width,height)"   
Name="InstanceName" >  
<LabelText> . . . </LabelText>  
<Link> . . . </Link>  
<LinksControlOptions> . . . </LinksControlOptions>  
<WebpageControlOptions> . . . </WebpageControlOptions>  
</Control>  
```  
  
## Attributes and elements  
 The following sections describe attributes, child elements, and parent elements.  
  
### Attributes  
  
|Attribute|Description|  
|---------------|-----------------|  
|`FieldName`|Optional `Control` attribute.<br /><br /> Specifies the work item field with which the control is associated. The attribute type is `typelib:ReferenceFieldName`. Minimum length: 1; maximum length: 70.<br /><br /> Pattern value: ^[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z0-9_]+)+$<br /><br /> Pattern value example: Company.Division.IssueType|  
|`Type`|Required `Control` attribute.<br /><br /> Specifies the data type of the control. The attribute type is `ValidControlsType` Simple Type. Specify a string from one of the following built-in types:<br /><br /> -   `AttachmentControl`: Use to display work item attachments. This control does not have an associated field or field type.<br />-   `DateTimeControl`: Use to display formatted date fields with a field type of `DateTime`.<br />-   `FieldControl`: Use to display plain text, numeric, boolean, or pick list fields with a field type of `Boolean`, `String`, `Identity`, `Integer`, `Double`, and `PlainText`. **Note**: For on-premises TFS, the Boolean data type requires that you upgrade to TFS 2017.2 or later version.<br />-   `HtmlFieldControl`: Use to display multi-line, rich-text format of fields with a field type of `HTML`.<br />-   `LabelControl`: Use to display text that is not associated with a field. The text can be plain or hyperlinked. You can specify additional controls using the `LabelText`, `Link` and `Text` elements. See [LabelText and Text](labeltext-and-text-xml-elements-reference.md) and [Link and Param](link-param-xml-elements-reference.md).<br />-   `LinksControl`: Use to display the links control toolbar and manage link relationships between work items and storyboards. This control does not have an associated field or field type. You specify the types of links to filter and other control options using the `LinksControlOptions` element. See [LinksControlOptions](linkscontroloptions-xml-elements.md).<br />-   `WebpageControl`: Use to display HTML-based content defined by a URI or embedded within a CDATA tag. This control does not have an associated field or field type. . You specify the content and links to display using the `WebpageControlOptions` element. See [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md).<br />-   `WorkItemClassificationControl` Use to display the hierarchical path fields with a field type of `TreePath`. **Note:**      The `System.AreaPath` and `System.IterationPath` fields are the only fields that use this data type. You cannot define a custom field using this data type.<br />-   `WorkItemLogControl`: Use to display work item history information and fields with a field type of `History`. **Note:**      The `System.History` field is the only field that uses this data type. You cannot define a custom field using this data type.<br /><br /> For more information, see [Specify work item form controls](specify-work-item-form-controls.md). **Note:**  You can use a custom control by setting the `Type` attribute to a custom value. Any control whose `Type` value does not match the name of a built-in type is considered a custom control. For more information, see the Microsoft Web site: [Work Item Tracking Custom Controls](http://go.microsoft.com/fwlink/?LinkId=150556).|  
|`ControlFontSize`|Optional `Control` attribute.<br /><br /> Specifies the font size of the field name or label on the form. Valid values of `FontSize`: `small`, `normal`, `large`, `xlarge`, and `xxlarge`.|  
|`EmptyText`|Optional `Control` attribute.<br /><br /> Specifies a text string between 1 and 255 characters in length that appears when a field is empty.|  
|`Label`|Optional `Control` attribute.<br /><br /> Specifies the visible text on the form that identifies the control. Specify a string of no more than 80 characters.|  
|`LabelFontSize`|Specifies the font size of the label on the form. Valid values for `FontSize`: `small`, `normal`, `large`, `xlarge`, and `xxlarge`.|  
|`LabelPosition`|Optional `Control` attribute.<br /><br /> Specifies the position of the label relative to the control data. Specify a string from one of the following values:<br /><br /> -   `Top`: Places the label above the control data.<br />-   `Bottom`: Places the label below the control data.<br />-   `Left`: Places the label to the left of the control data.<br />-   `Right`: Places the label to the right of the control data.|  
|`Padding`|Optional `Control` attribute.<br /><br /> Specifies the amount of space in pixels around the inside border of the control which corresponds to the top, bottom, left, and right spaces. The attribute type is `SizeType`.<br /><br /> Pattern value: ^\\(\d+\\,\d+\\,\d+\\,\d+\\)$<br /><br /> Pattern value example: (2,0,2,0)|  
|`Margin`|Optional `Control` attribute.<br /><br /> Specifies the amount of space in pixels around the outside border of the control which corresponds to the top, bottom, left, and right spaces. The attribute type is `SizeType`.<br /><br /> Pattern value: ^\\(\d+\\,\d+\\,\d+\\,\d+\\)$<br /><br /> Pattern value example: (2,0,2,0)|  
|`ReadOnly`|Optional `Control` attribute.<br /><br /> Specifies that the field is read-only. The attribute type is `ReadOnlyType`. Specify a string from one of the following values:<br /><br /> -   `True`: Specifies that the control data is read-only.<br />-   `False`: Specifies that the control data is not read-only.|  
|`MinimumSize`|Optional `Control` attribute.<br /><br /> Specifies the minimum size in pixels that the control should occupy in the form. The syntax is specified in (`width,height`). The attribute type is `SizeType`.<br /><br /> Pattern value: ^\\(\d+\\,\d+\\)$<br /><br /> Pattern value example: (100,100) **Note:**  If you do not have sufficient vertical space, then a scrollbar appears to keep its minimum size. Without this attribute, the controls are drawn with their default sizes, unless controls in other tabs take more space. The overall size of any one form control depends on the size of the largest form area or tab.|  
|`Name`|Optional `Control` attribute.<br /><br /> Identifies a control uniquely. The `Name` is important if more than one control on the form is associated with the same work item field. The attribute type is `xs:string`. **Note:**  You use the `Name` attribute when you want to have the same field displayed in more than one location on the form. You specify a unique value for the `Name` attribute for both control entries so that the system identifies each control uniquely. It is useful to show the same control in various locations based on the context of tabs.|  
|`NumberFormat`|Optional `Control` attribute that is valid only when it is used with `FieldControl`.<br /><br /> Specifies the characters that you can enter in the field control. Valid values that you can use are as follows:<br /><br /> -   `WholeNumbers`: Specifies that whole numbers are allowed.<br />-   `SignedWholeNumbers`: Specifies that signed whole numbers are allowed.<br />-   `DecimalNumbers`: Specifies that decimal numbers are allowed.<br />-   `SignedDecimalNumbers`: Specifies that signed decimal numbers are allowed.|  
|`MaxLength`|Optional `Control` attribute that is valid only when it is used with `FieldControl`.<br /><br /> Specifies the maximum length of allowed characters for a field control. The attribute type is `xs:integer`.|  
|`Format`|Optional `Control` attribute that is valid only when it is used with `DateTimeControl`.<br /><br /> Specifies the format for the date-time field corresponding to one of the values of the DateTimePickerFormat enum. Valid values that you can use are as follows:<br /><br /> -   `Custom`: Displays the date/time value in a custom format. The Custom format can be set by specifying 'Custom' as the value for the Format attribute, and setting another attribute named CustomFormat with a custom format string. For example:<br />     Format="Custom"<br />     CustomFormat = "MMM dd, 'of the year' yyyy "<br />     For more information, see the Microsoft Web site: [DateTimePicker.CustomFormat Property](http://go.microsoft.com/fwlink/?LinkId=148757).<br />-   `Long`: Displays the date/time value in the long date format set by the user's operating system.<br />-   `Short`: Displays the date/time value in the short date format set by the user's operating system.<br />-   `Time`: Displays the date/time value in the time format set by the user's operating system.<br /><br /> For more information, see the Microsoft Web site: [DateTimePickerFormat Enumeration](http://go.microsoft.com/fwlink/?LinkId=148760).|  
|`CustomFormat`|Optional `Control` attribute that is valid only when it is used with `DateTimeControl` and the `Format` attribute.<br /><br /> Specifies the custom format for the date-time field corresponding to the syntax defined for the DateTimePicker.CustomFormat property. For more information, see the Microsoft Web site: [DateTimePicker.CustomFormat Property](http://go.microsoft.com/fwlink/?LinkId=148757).|  
  
### Child elements  
  
|Element|Description|  
|-------------|-----------------|  
|[LabelText](labeltext-and-text-xml-elements-reference.md)|Optional element. You can specify this element when the `Type` attribute is specified as `FieldControl` or `LabelControl`.<br /><br /> Container element for specifying the text, hyperlink, and position of a field or label whose text is partly associated with a hyperlink.<br /><br /> For more information, see [LabelText and Text](labeltext-and-text-xml-elements-reference.md) and [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md).|  
|[Link](link-param-xml-elements-reference.md)|Optional element. You can specify this element when the `Type` attribute is specified as `FieldControl` or `LabelControl`.<br /><br /> Defines the hyperlink for a field or label.<br /><br /> For more information, see [Link and Param](link-param-xml-elements-reference.md) and [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md).|  
|[LinksControlOptions](linkscontroloptions-xml-elements.md)|Optional element. You can specify this element when the `Type` attribute is specified as `LinksControl`.<br /><br /> Defines the link filters and layout of column fields to display the list of links.<br /><br /> For more information, see [Define link controls to restrict link relationships](define-link-controls.md).|  
|[WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)|Optional element. You can specify this element when the `Type` attribute is `WebpageControl`.<br /><br /> Specifies the controls that govern loading the Web page target in the work item form.<br /><br /> For more information, see [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md) and [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md).|  
|`anyAttribute`|Optional element.<br /><br /> Optional. `Control` is extensible through use of the `anyAttribute` element.|  
  
### Parent elements  
  
|Element|Description|  
|-------------|-----------------|  
|[Layout](layout-xml-element-reference.md)|Required. Defines how to display the elements on the work item form.|  
|[Column](all-form-xml-elements-reference.md) |Required. Defines columns for the form.|  
|[Tab](all-form-xml-elements-reference.md) |Required. Defines a tab for the form.|  
  
## Remarks  
`Control` is an optional child element of `Layout`, `Column`, and `Tab`.  
  
To implement a custom control, you must specify the name of the control for the `Type` attribute. For more information, see the Microsoft Web site: [Work item tracking custom controls](http://go.microsoft.com/fwlink/?LinkId=150556).  
  
For an example of each control type, see [Specify work item form controls](specify-work-item-form-controls.md).  
  
## Example  
  
> [!div class="tabbedCodeSnippets"]
```XML
<Control Type=" WorkItemClassificationControl " FieldName="System.AreaPath"  
  Label="Area" LabelPosition="Left" Padding="(2,0,2,0)" Margin="(2,2,2,2)" />  
```  

## Related articles
  
- [All FORM elements](all-form-xml-elements-reference.md)   
- [Specify work item form controls](specify-work-item-form-controls.md)  
- [Naming restrictions, Work item tracking objects](../../organizations/settings/naming-restrictions.md)