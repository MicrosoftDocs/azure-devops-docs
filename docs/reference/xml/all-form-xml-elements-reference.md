---
title: All FORM XML elements reference
titleSuffix: Azure DevOps & TFS
description: Index to XML syntax elements and main attributes for the work item form for Team Foundation Server  
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 07E12386-621F-4749-BF75-F753B710393B
ms.author: kaelli
author: KathrynEE
ms.manager: jillfra
ms.topic: reference
ms.date: 03/02/2017
---

# All FORM XML elements reference (TFS 2015)

<p><b>TFS 2017 | TFS 2015 | TFS 2013</b></p>

> [!IMPORTANT]  
>This topic applies to project customization for the On-premises XML process model. For the Hosted XML process model, see [WebLayout and Control elements](weblayout-xml-elements.md). For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md).
>
>For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  

You can use the information in this topic as a quick reference to all the elements and main attributes that control the form for a type of work item. You specify these elements in the `FORM` element container, the third and final major section of the definition of a type of work item. Many elements are nested within others to form groups, sections, or tabs in a work item form. For more information about how to group these elements, see [Design the work item form](design-work-item-form.md).  
  
  
<a name="FORM"></a> 
##FORM example  
The following example shows the overall structure of the **FORM** element. You specify the layout of a form by using the **Layout** element. You can specify different layouts that target different clients. For example, you can specify one layout for Windows clients and a different layout for the web portal. A layout typically consists of the top of the form and then a group of tabs. The sequence in which you define the elements within the layout determines the sequence in which the elements appear on the form.  
  
You group elements to appear within columns by using the **Group** and **Column** elements. You use a **Control** element to define each field that you want to appear on the form. You use the **Tab** element to support different functional areas of field groups.  
  
> [!div class="tabbedCodeSnippets"]
```XML
<FORM>  
      <Layout>  
        <Group>  
          <Column PercentWidth="70">  
            <Group>  
              <Column PercentWidth="100">  
                <Control FieldName="System.Title" Type="FieldControl" Label="Title" LabelPosition="Left" />  
                <Control FieldName="System.AreaPath" Type="WorkItemClassificationControl" Label="Area Path" LabelPosition="Left" />  
                <Control FieldName="System.IterationPath" Type="WorkItemClassificationControl" Label="&Iteration Path:" LabelPosition="Left" />  
                <Group>  
                  <Column PercentWidth="50">  
                    <Control FieldName="Microsoft.VSTS.Common.ProductUnit" Type="FieldControl" Label="PU (Use Area Path)" LabelPosition="Left" />  
                  </Column>  
                  <Column PercentWidth="50">  
                    <Control FieldName="Microsoft.VSTS.Common.Priority" Type="FieldControl" Label="Priority" LabelPosition="Left" />  
                  </Column>  
                </Group>  
              </Column>  
            </Group>  
          </Column>  
          <Column PercentWidth="30">  
            <Group Label="Status">  
              <Column PercentWidth="100">  
                <Control FieldName="System.Id" Type="FieldControl" Label="Id" LabelPosition="Left" />  
                <Control FieldName="System.State" Type="FieldControl" Label="State" LabelPosition="Left" />  
                <Control FieldName="System.AssignedTo" Type="FieldControl" Label="Assigned To" LabelPosition="Left" />  
              </Column>  
            </Group>  
          </Column>  
        </Group>  
. . .  
</Layout>  
</FORM>  
```  
  
<a name="FormElements"></a> 
##Form elements  
You can specify how information and work item fields are grouped and appear in a work item form using the elements that are described in the following table.  
  
> [!NOTE]  
>  For best results, you should nest `Control` elements in a `Group`, and you should nest `Group` elements in a `Column`, even if the column spans the full width of the form. Also, you should nest every `Column` section in a `Group`, even if the group has no visible label or boundary.  
 

<table Responsive="true" summary="table">
<tr Responsive="true"><th scope="col"><p>Element</p></th><th scope="col"><p>Description</p></th><th scope="col"><p>Required?</p></th>
</tr>
<tr><td data-th="Element"><p><strong>Column</strong></p></td><td data-th="Description"><p>Divides a form's regions into columns.</p>
<code>
&lt;Column PercentWidth="WidthPercentOfContainingElement" FixedWidth="WidthInPixels"&gt;  
&#160;&#160;&#160;&lt;Group&gt; . . . &lt;/Group&gt;  
&#160;&#160;&#160;&lt;Control&gt; . . . &lt;/Control&gt;  
&#160;&#160;&#160;&lt;TabGroup&gt; . . . &lt;/TabGroup&gt;  
&#160;&#160;&#160;&lt;Splitter&gt; . . . &lt;/Splitter&gt;  
&lt;/Column &gt;  
</code>
</td><td data-th="Required?"><p>Recommended</p></td>
</tr>

<tr><td data-th="Element"><p><strong>Control</strong></p></td>
<td data-th="Description"><p>Defines a field, text, hyperlink, or other control element to appear on the work item form.</p>
<code>
&lt;Control FieldName="FieldName" Type="AttachmentsControl | DateTimeControl | FieldControl |   
&#160;HtmlFieldControl | LabelControl | LinksControl | WebpageControl | WorkItemClassificationControl |  
&#160;WorkItemLogControl" Label="LabelText" LabelPosition="Top | Bottom | Left | Right"  
&#160;Padding="(top, bottom, left, right)" 
&#160;Margin="( top, bottom, left, right)"   
&#160;ReadOnly="True | False" MinimumSize="(Width,Height)"   
&#160;Name="InstanceName" /&gt;
</code>
<p>For more information, see [Control XML element reference](control-xml-element-reference.md).</p></td><td data-th="Required?"><p>Required</p></td>
</tr>
<tr><td data-th="Element"><p><strong>FORM</strong></p></td><td data-th="Description"><p>Defines the top-level form element.</p>
<code>
&lt;FORM&gt;  
&#160;&#160;&#160;&lt;Layout&gt; . . . &lt;/Layout&gt;   
&lt;/FORM&gt;
</code>
</td><td data-th="Required?"><p>Required</p></td>
</tr>
<tr><td data-th="Element"><p><strong>Group</strong></p></td><td data-th="Description"><p>Provides a visual grouping of elements, similar to the Windows GroupBox.</p>
<code>
&lt;Group Label="LabelText" Padding="(top, bottom, left, right)" Margin="(top, bottom, left, right)"&gt;  
   &lt;Column&gt; . . . &lt;/Column&gt;  
&lt;/Group &gt;  
</code>
</td><td data-th="Required?"><p>Recommended</p></td>
</tr>
<tr><td data-th="Element"><p><strong>Layout</strong></p></td><td data-th="Description"><p>Defines the layout of the work item form.</p>
<code>
&lt;Layout Target="ClientName" MinimumSize="(width,height)" Padding="(top, bottom, left, right)"   
Margin="(left, top, right, bottom)" ControlSpacing="Distance" LabelSpacing="Distance"&gt;  
&#160;&#160;&#160;&lt;Group&gt; . . . &lt;/Group&gt;  
&#160;&#160;&#160;&lt;Control&gt; . . . &lt;/Control&gt;  
&#160;&#160;&#160;&lt;TabGroup&gt; . . . &lt;/TabGroup&gt;  
&#160;&#160;&#160;&lt;Splitter&gt; . . . &lt;/Splitter&gt;  
&lt;/Layout&gt;
</code>
</td><td data-th="Required?"><p>Required</p></td>
</tr>
<tr><td data-th="Element"><p><strong>Splitter</strong></p></td><td data-th="Description"><p>Divides a form into two areas to support the layout of two sibling form elements.</p>
<code>
&lt;Splitter /&gt;  
</code>
</td><td data-th="Required?"><p>Optional</p></td>
</tr>
<tr><td data-th="Element"><p><strong>Tab</strong></p></td><td data-th="Description"><p>Defines the layout of a single tab in a tab group.</p>
<code>
&lt;Tab Label="LabelText" Padding="(top, bottom, left, right)" Margin="(top, bottom, left, right)"&gt;  
&#160;&#160;&#160;&lt;Group&gt; . . . &lt;/Group&gt;  
&#160;&#160;&#160;&lt;Control&gt; . . . &lt;/Control&gt;  
&#160;&#160;&#160;&lt;TabGroup&gt; . . . &lt;/TabGroup&gt;  
&#160;&#160;&#160;&lt;Splitter&gt; . . . &lt;/Splitter&gt;  
&lt;/Tab&gt;  
</code>
</td><td data-th="Required?"><p>Optional</p></td>
</tr>
<tr>
<td data-th="Element"><p><strong>TabGroup</strong></p></td><td data-th="Description"><p>Defines one or more tabs for the form.</p>
<code>
&lt;TabGroup Padding="( top, bottom, left, right)" Margin="(top, bottom, left, right)"&gt;  
&#160;&#160;&#160;&lt;Tab&gt; . . . &lt;/Tab&gt;  
&lt;/TabGroup&gt;  
</code>
</td><td data-th="Required?"><p>Optional</p></td>
</tr>
</table>

  
<a name="FormAttributes"></a> 
##Attributes that are used to format FORM elements  
You can control the spacing and size of many elements on a work item form by specifying the attributes that the following table describes. For more information, see [Design the work item form](design-work-item-form.md).  
 
|**Attribute**|**Description**|**Applicable Elements**|  
|-------------------|---------------------|-----------------------------|  
|`ControlSpacing`|Optional. Specifies the vertical offset of controls. Integer.|`Layout`|  
|`FixedWidth`|Optional. The column width in pixels. `PercentWidth` and `FixedWidth` are mutually exclusive.|`Column`|  
|`Label`|Optional. Text to appear for a control or group. If a label is specified, it overrides any label that is associated with the field in the metadata for the control.<br /> Required for the **Tab** element. Text to appear for a tab.<br /> *LabelText* is a text string that contains between 1 and 80 characters.|`Control`<br /> `Group`<br /> `Tab`|  
|`LabelPosition`|Optional. The label position relative to the field data. Possible values are Top, Bottom, Left, and Right.|`Control`|  
|`LabelSpacing`|Optional. Specifies the number of pixels between the label and the edit region of the control.|`Layout`|  
|`Margin`|Optional. String of the form (left, top, right, bottom) that specifies, in pixels, the amount of space around the control and between the control and its neighbors. You can vary the amount of space on each side.<br /> Pattern value: ^\\(\d+\\,\d+\\,\d+\\,\d+\\)$<br /> Pattern value example: (2,0,2,0)|`Control`<br /> `Group`<br /> `Layout`<br /> `Tab`<br /> `TabGroup`|  
|`MinimumSize`|Optional. String of the form (*width*, *height)*. This value specifies the minimum size for the form itself. When the container control smaller than this size, horizontal and vertical scrollbars appear.|`Control`<br /> `Layout`|  
|`Name`|Optional. Name for the control. If unspecified, the name is the same as the `FieldName`.|`Control`|  
|`Padding`|Optional. String of the form (top, bottom, left, right) that specifies, in pixels, the amount of room around the outside border of the control and around the inside border. You can vary the amount of space on each side.|`Control`<br /> `Group`<br /> `Layout`<br /> `Tab`<br /> `TabGroup`|  
|`PercentWidth`|Optional. The column width as a percentage of the containing element's width. `PercentWidth` and `FixedWidth` are mutually exclusive.|`Column`|  
|`ReadOnly`|Optional. You can display a read-only field in a control. Different controls respond to this attribute in slightly different ways.|`Control`|  
|`Target`|Optional. String that specifies to which client this layout applies. Visual Studio displays this work item type in this layout if the `Target` attribute is omitted or set to Windows Forms. External clients can specify additional layouts by using custom `Target` attributes that Visual Studio ignores.<br /> The following values are valid:<br /> `WinForms`: Applies the form to Team Explorer and Team Explorer Everywhere.<br /> `Web`: Applies the form to the web portal.|`Layout`|  
|`Type`|Required. The type of the control. For more information, see [Control](control-xml-element-reference.md).|`Control`|  
 
<a name="LabelElements"></a> 
##Elements that specify stand-alone Labels, Hyperlinks, Web Pages, or HTML Content  
 The `WebpageControlOptions` element and its child elements have the following syntax structure:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<WebpageControlOptions AllowScript="true | false" ReloadOnParamChange="true | false" >  
      <Link UrlRoot="UrlRoot" UrlPath ="UrlPathWithParameters">  
      <Param index="IndexValue" value="ParamValue" type ="Original | Current"/>  
      </Link>  
      <Content>  
      <![CDATA[Contents of HTML]]>  
      </Content>  
</WebpageControlOptions>  
```  
  
 You use the elements that are described in the following table to define plain text or hyperlinked labels, add hyperlinks to a field, or display Web page content in a work item form. For more information, see [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md).  
  
|Element|Required?|Description|  
|-------------|---------------|-----------------|  
|`Content`|Optional `WebpageControlOptions` element.|Specifies the CDATA HTML-based content to appear in a work item form.<br /><br /> `<Content>    <![CDATA[Contents of HTML]]> </Content>`<br /><br /> For more information, see [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md).|  
|`LabelText`|Optional `Control` element when `type="LabelControl"`.|Defines either a plain or hyperlinked label.<br /><br /> For more information, see [LabelText and Text](labeltext-and-text-xml-elements-reference.md).|  
|`Link`|Optional `Control` element when `type="FieldControl"`.<br /><br /> Optional `Text` element.<br /><br /> Optional `WebpageControl` element.<br /><br /> Optional `WebpageControlOptions` element.|Defines the hyperlink for a field, label, or Web browser content to appear in a work item form.<br /><br /> `<Link URLRoot="URLRoot" URLPath ="URLPathWithParameters">    <Param /> </Link>`<br /><br /> For more information, see [Link and Param](link-param-xml-elements-reference.md).|  
|`Param`|Optional `Link` element.|Specifies a value to determine the URL of the hyperlink when `URLPath` is specified for the `Link` element.<br /><br /> `<Param index="IndexValue " value="ParamValue " type ="Original &#124; Current"/>`<br /><br /> For more information, see [Link and Param](link-param-xml-elements-reference.md).|  
|`Text`|Optional `LabelText` element.|Container element for the information or label to appear on the work item form.<br /><br /> `<Text>    <Link >       <Param />    </Link>LabelText </Text>`<br /><br /> For more information, see [LabelText and Text](labeltext-and-text-xml-elements-reference.md).|  
|`WebpageControlOptions`|Optional `Control` element when `type="WebpageControl"`|Container element that specifies the options for the Web page control.<br /><br /> For more information, see [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md).|  
  
##  <a name="LinkElements"></a> Elements that filter and display link relationships  
 You use the `LinksControlOptions` element to define the options for controlling what links can be added to a work item and the default columns that you want to appear for the list of links in a work item. When you add link control to a work item form, you can specify filters that restrict the types of links that users can create and the types of work items between which users can create links. The `LinksControlOptions` element and its child elements have the following structure:  
  
> [!div class="tabbedCodeSnippets"]
```XML
<LinksControlOptions>  
   <WorkItemLinkFilters FilterType="include | exclude | includeAll | excludeAll">  
       <Filter LinkType="linkTypeRefName" FilterOn="reverseName | forwardName" />  
   </WorkItemLinkFilters>  
   <ExternalLinkFilters FilterType ="include | exclude | includeAll | excludeAll">  
       <Filter LinkType="externalLinkName"/>  
   </ExternalLinkFilters>  
   <WorkItemTypeFilters Scope=" project | all" FilterType=" include | exclude | includeAll" />  
       <Filter WorkItemType="workItemTypeReferenceName"/>  
   </WorkItemTypeFilters>  
   <LinkColumns>  
      <LinkColumn RefName="referenceName" | LinkAttribute="linkAttributeName"/>  
   </LinkColumns>  
</LinksControlOptions>  
```  
  
 Specifically, you use the elements that are summarized in the following table. For more information about how to use these elements, see [Define link controls to restrict link relationships](define-link-controls.md) and [LinksControlOptions](linkscontroloptions-xml-elements.md).  
  
|Element|Required?|Description|  
|-------------|---------------|-----------------|  
|`LinksControlOptions`|Optional `Control` element when `type="LinksControl"`|Provides a container for elements that define the options for controlling what links can be added to a work item and the default columns that you want to appear for the list of links in a work item.|  
|`WorkItemLinkFilters`|Optional `LinksControlOptions` element|Provides a container for one or more `Filter` elements that specify the link filter criteria to use for link types that are defined for the project collection.|  
|`ExternalLinkFilters`|Optional `LinksControlOptions` element|Provides a container for one or more `Filter` elements that specify the filter criteria to use for link types that are defined in other projects.|  
|`WorkItemTypeFilters`|Optional `LinksControlOptions` element|Provides a container for one or more `Filter` elements that specify the filter criteria to apply to work item types.|  
|`Filter` (link types)|Required `WorkItemLinkFilters` element when the `FilterType` attribute is `exclude` or `include`.<br /><br /> Required `ExternalLinkFilters` element when the `FilterType` attribute is `exclude` or `include`.|Specifies the types of links to include or exclude from the set of links that can be created for the work item.|  
|`Filter` (work item types)|Optional `WorkItemTypeFilters` element when the `FilterType` attribute is `exclude` or `include`.|Specifies the types of work items to include or exclude from the set of work item types between which users can link.|  
|`LinkColumns`|Optional `LinksControlOptions` element|Provides a container for one or more `LinkColumn` tags.|  
|`LinkColumn`|Required `LinkColumns` element|Specifies the work item fields and link type attributes to appear on the work item form for the list of links.|  
  
## Related articles
-  [Customize the work tracking experience](../customize-work.md)  
-  [Design the work item form](design-work-item-form.md)     
 