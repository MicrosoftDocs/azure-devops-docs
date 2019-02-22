---
title: Design the work item form 
titleSuffix: TFS
description: Place and group fields on the form so that they can support the data entry and workflow processes that will be followed by team members - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 51acfaa1-3c2c-4371-b5da-e43d458bb1f7
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '<= tfs-2017'
ms.date: 11/19/2018
---

# Design the work item form

[!INCLUDE [temp](../../_shared/version-tfs-2013-2017.md)]

> [!IMPORTANT]  
> This articles applies to project customization for the On-premises XML process model and for the old webform. For the new web form and for the Hosted XML process model, see [WebLayout and Control elements](weblayout-xml-elements.md). For the Inheritance process model, see [Customize a process](../../organizations/settings/work/customize-process.md). For an overview of process models, see [Customize your work tracking experience](../customize-work.md).  

When you design a work item form, you want to position fields on the form so that they support the data entry and workflow processes that will be followed by team members. If you are adding just a few fields to an existing form, you must determine where you want to add them on the form. If you are adding several fields to support a new collection of data to track, you may want to add a new tab just for these fields. To minimize the need to scroll a form, you can group fields into several columns in the top of the form or in a tab.  
  
 If you are adding a new work item type, you may want to copy an existing type and modify it to display the fields and workflow process that support the new type.  
  
 When you design the layout, consider the following tips to get the best results:  
  
-   Place fields at the top of the form that team members must reference or update frequently.  
  
-   Place fields on a tab that only a few team members must reference or update infrequently. For example, controls that link work items or attach files are typically positioned on separate tabs.  
  
-   Group fields into columns to maximize the display of data fields. You can use columns in the top of the form or on a tab. You can also display tabs in a multicolumn format.  
  
-   Use one or more link controls on separate tabs or on the same tab to restrict the types of links that can be created between work item types fields.  
  
 For information about how to export, import, and verify work item form changes, see [Change the work item form layout](change-work-item-form-layout.md).    
 
 
[!INCLUDE [temp](../../_shared/update-xml-wit.md)] 


<a name="LayoutElements"></a> 
## Segment the form into areas  
 You use layout elements to segment your work item form into different areas, grouping related fields and allocating space on the form according to the data entry requirements. The following table describes the elements that are used to segment the form into different areas.  
  
|Element|Description|  
|-------------|-----------------|  
|`FORM`|Contains the `Layout` elements that specify the display of fields and controls for the work item type.|  
|`Layout`|Contains all elements that specify the display of fields and controls for a specific target. You can specify different layouts for different targets, such as Visual Studio or the web portal. Child elements that you can specify in a `Layout` element include `Control`, `Group`, `TabGroup`, and `Splitter` elements.|  
|`Group`|Clusters child elements on the form. A group is visually separated by a border and an optional label. Groups that are defined in an adjacent position in the XML stack are split vertically in the displayed form. You can specify the `Column` element as a child of a `Group` element.|  
|`Column`|Keeps all child elements in a  vertical column or splits a form vertically. Columns must appear in a `Group`. `Group` elements in `Column` elements can be used to create nested areas. By default, columns split a `Group` evenly. You can specify an optional percentage width attribute to allocate more space to one or more columns.<br /><br /> Child elements that you can specify in a `Column` element include `Control`, `Group`, `TabGroup`, and `Splitter` elements.|  
|`Splitter`|Allows users to resize the width that is allocated to two columns in a form.|  
|`Tab`|Adds different tabs to a form to support the display of additional fields and controls. Child elements that you can specify in a `Tab` element include `Control`, `Group`, `TabGroup`, and `Splitter` elements.|  
|`TabGroup`|Contains a group of `TAB` elements. In general, you add tabs to a single tab group. However, you could stack two or more tab groups vertically in a form.|  
  
 The following illustration shows a form whose upper area displays eight fields that are arranged roughly into two columns. The lower portion displays two sets of three tabs that are arranged in a two-column layout.  
  
 ![Custom work item form](_img/alm_wit_custom_form.png "ALM_WIT_Custom_Form")  
Custom Form with Three Tabs in a Two Column Layout  
  
 **Top of the Form**  
  
 The following code defines the top of the form. You can introduce columns as needed. As shown in this example, the first column, which is sized at 70 percent of the width of the form, contains two groups of fields. The second group of fields, which contains the **PU (Use Area Path)** and **Priority** fields, is defined in a two-column layout. The second column spans the remaining 30-percent width of the form. As the form is resized, the areas that are allocated to the columns vary proportionally.  
  
```xml
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
        <Group Label="">  
          <Column PercentWidth="60">  
. . .  
</Layout>  
</FORM>  
```  
  
##  <a name="WorkingTabs"></a> Work with tabs  
 You use tabs to cluster a group of fields or to support one or more special controls, such as the controls that link work items, link work item history, or attach files. Several definitions of work item types for the Microsoft Solutions Framework (MSF) process templates use several tabs to control the types of links that can be created, based on the link type. For more information, see [Work Items and Workflow (Agile)](http://msdn.microsoft.com/d16d04fd-c073-45c0-b1b9-3724f0a7519b) or [Work Items and Workflow (CMMI)](http://msdn.microsoft.com/b5b7b488-3248-485c-b896-a2c6f824a219).  
  
 For more information about how to use special controls, see the following topics:  
  
-   [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md)  
  
-   [Add the Attachments control](add-the-attachments-control.md)  
  
-   [Define link controls to restrict link relationships](define-link-controls.md)  
  
 By using the attributes that are described in the following table, you can label the tab and specify padding and margins that control the number of pixels inside and outside the border of the tab control.  
  
|Attribute|Description|  
|---------------|-----------------|  
|`Label`|Required. Text that specifies the name of the tab page.|  
|`Margin`|Optional. Specifies, in pixels, the amount of space around the tab.|  
|`Padding`|Optional. Specifies, in pixels, the amount of space around the outside and inside border of the tab.|  
  
 ![Custom form showing two groups of 6 tabs](_img/alm_wit_custom_tabs.png "ALM_WIT_Custom_Tabs")  
Six Tabs Arranged in a Side by Side by Layout  
  
 The following code lists the syntax that is used to create the layout that is shown in the previous illustration.  
  
```xml
<FORM>  
      <Layout>  
        . . .   
            <TabGroup>  
              <Tab Label="Planning">  
                <Group Label="Status" Padding="(0,0,0,3)">  
                  <Column PercentWidth="50">  
                    <Control FieldName="Microsoft.DevDiv.Importance" Type="FieldControl" Label="Importance" LabelPosition="Left" />  
                    <Control FieldName="Microsoft.DevDiv.Commitment" Type="FieldControl" Label="Commitment / Confidence" LabelPosition="Left" />  
                    . . .  
                  </Column>  
                  <Column PercentWidth="50" />  
                </Group>  
                <Group>  
                  <Column PercentWidth="100">  
                    <Control FieldName="Microsoft.DevDiv.Story" Type="HtmlFieldControl" Label="Story Board" LabelPosition="Top" />  
                  </Column>  
                </Group>  
                <Group>  
                  <Column PercentWidth="100">  
                    <Control FieldName="System.Description" Type="HtmlFieldControl" Label="Value Proposition Description" LabelPosition="Top" />  
                  </Column>  
                </Group>  
              </Tab>  
              <Tab Label="Marketing">  
                <Group>  
                  <Column PercentWidth="100">  
                    <Control FieldName="Microsoft.DevDiv.MarketingOwner" Type="FieldControl" Label="Marketing Owner" LabelPosition="Top" />  
                    <Control FieldName="Microsoft.DevDiv.MarketingDescription" Type="HtmlFieldControl" Label="Marketing Description" LabelPosition="Top" />  
                  </Column>  
                </Group>  
              </Tab>  
              <Tab Label="Relationships">  
                <Control Type="LinksControl" Label="Pillars" LabelPosition="Top" Name="Pillars">  
                  . . .   
                </Control>  
                <Control Type="LinksControl" Label="Experiences - Feature Groups" LabelPosition="Top" Name="Experiences">  
                  . . .   
                </Control>  
                <Control Type="LinksControl" Label="Flags / Associations" LabelPosition="Top" Name="Flags">  
                  . . .   
                </Control>  
              </Tab>  
            </TabGroup>  
          </Column>  
          <Column PercentWidth="40">  
            <TabGroup>  
              <Tab Label="History">  
                <Control FieldName="System.History" Type="WorkItemLogControl" Label="Detailed Description and History" LabelPosition="Top" />  
              </Tab>  
              <Tab Label="Links">  
                <Control Type="LinksControl" LabelPosition="Top" >  
                  . . .   
                </Control>  
              </Tab>  
              <Tab Label="File Attachments">  
                <Control Type="AttachmentsControl" LabelPosition="Top" />  
              </Tab>  
            </TabGroup>  
          </Column>  
        </Group>  
      </Layout>  
</FORM>  
  
```  
  
##  <a name="GroupingFields"></a> Group fields  
 You use the `Group` element to visually group elements, similar to the Windows GroupBox. By using the attributes that are described in the following table, you can label each group and specify padding and margins that control the number of pixels inside and outside the border of the group area. The `Group` element should always be followed by a `Column` element, even if the group has only one column.  
  
 You should use the `Group` element as a container for fields in a column and as a container for columns in a segmented area on the form. You can specify the `Column` element only as a child element in a `Group` element.  
  
 You can control the spacing and size of the overall form layout by specifying the attributes that are described in the following table.  
  
|Attribute|Description|  
|---------------|-----------------|  
|`Label`|Optional. Text that specifies the name of the group.|  
|`Margin`|Optional. Specifies, in pixels, the amount of space around the group and between the control and its neighbors. You can vary the amount of space on each side.|  
|`Padding`|Optional. Specifies, in pixels, the amount of space around the outside border of the group. You can vary the amount of space on each side.|  
  
 ![Group of several fields](_img/alm_wit_custom_group.png "ALM_WIT_Custom_Group")  
 Group of Fields Arranged on a Tab  
  
 The following code lists the syntax that is used to create the group of fields that is shown in the previous illustration. For more information about how to specify the fields by using the `Control` element, see [Specify work item form controls](specify-work-item-form-controls.md).  
  
```xml
<TabGroup>  
<Tab Label="Planning">  
<Group Label="Status" Padding="(0,0,0,3)">  
      <Column PercentWidth="5100">  
      <Control FieldName="Microsoft.DevDiv.Importance" Type="FieldControl" Label="Importance" LabelPosition="Left" />  
      <Control FieldName="Microsoft.DevDiv.Commitment" Type="FieldControl" Label="Commitment / Confidence" LabelPosition="Left" />  
      <Control FieldName="Microsoft.DevDiv.VisionDoc" Type="FieldControl" Label="Vision Doc" LabelPosition="Left" />  
      <Control FieldName="Microsoft.DeveloperDivision.Features.EstimatedCost" Type="FieldControl" Label="Estimated Cost" LabelPosition="Left" />  
      <Control FieldName="Microsoft.DevDiv.BusinessUnit" Type="FieldControl" Label="BU (Use Area Path)" LabelPosition="Left" />  
      <Control FieldName="Microsoft.DevDiv.Website" Type="FieldControl" Label="Website" LabelPosition="Left" />  
      </Column>  
</Group>  
      . . .  
</Tab>  
</TabGroup>  
  
```  
  
##  <a name="WorkingColumns"></a> Size columns  
 You can design an area in a form that has two or more columns. You can specify the column width as fixed or as a percentage of the width of the containing element by using the `FixedWidth` or `PercentWidth` attributes, respectively. These two `Column` attributes are mutually exclusive. To allow a user to resize the column, you can specify a `Splitter` control, as [Use a splitter to support variable column sizing](#UsingSplitter) describes.  
  
 ![3&#45;Column Display](_img/alm_wit_custom_3columns.png "ALM_WIT_Custom_3Columns")  
Three-Column Layout  
  
 The following code produced the previous three-column layout of fields. When you organize groups of fields into columns, use the **Group** element to contain each column of fields. Optionally, you can label the groups of fields.  
  
```xml
<FORM>  
      <Layout>  
      <Group>  
          <Column PercentWidth="36">  
               <Group>  
            <Control FieldName="System.Title" Type="FieldControl" Label="Title" LabelPosition="Left" />  
            <Control FieldName="System.AreaPath" Type="WorkItemClassificationControl" Label="Area" LabelPosition="Left" />  
            <Control FieldName="Microsoft.VSTS.Common.ProductUnit" Type="FieldControl" Label="Product Unit" LabelPosition="Left" />  
            <Control FieldName="Microsoft.DevDiv.BusinessUnit" Type="FieldControl" Label="Business Unit" LabelPosition="Left" />  
               </Group>  
          </Column>  
          <Column PercentWidth="33">  
               <Group>  
            <Control FieldName="Microsoft.DevDiv.SubTitle" Type="FieldControl" Label="Sub Title" LabelPosition="Left" />  
            <Control FieldName="System.IterationPath" Type="WorkItemClassificationControl" Label="Iteration" LabelPosition="Left" />  
            <Control FieldName="Microsoft.DevDiv.Other" Type="FieldControl" Label="Other" LabelPosition="Left" />  
               </Group>  
          </Column>  
          <Column PercentWidth="31">  
               <Group>  
            <Control FieldName="Microsoft.DevDiv.Type" Type="FieldControl" Label="Type" LabelPosition="Left" />  
            <Control FieldName="System.AssignedTo" Type="FieldControl" Label="Assigned To" LabelPosition="Left" />  
            <Control FieldName="System.State" Type="FieldControl" Label="State" LabelPosition="Left" />  
               </Group>  
          </Column>  
      </Group>  
. . .  
      </Layout>  
</FORM>  
```  
  
##  <a name="UsingSplitter"></a> Use a splitter to support variable column sizing  
 You use the **Splitter** element when you want to allow the viewer of the form to dynamically resize the columns. The splitter appears as a dotted line on the form, as shown in the following illustration. You cannot specify any child elements in the **Splitter** element.  
  
 ![2 Column Layout with Splitter](_img/alm_wit_custom_splitter.png "ALM_WIT_Custom_Splitter")  
2-Column Layout with Splitter  
  
 A **Group** element that contains **Splitter** and **Column** elements must specify exactly three **Column** elements in the following sequence:  
  
1.  a **Column** to the left of the splitter  
  
2.  a **Column** that contains only the `Splitter` element  
  
3.  a **Column** to the right of the splitter  
  
 See the following example for more information.  
  
```xml
<Group>  
      <Column PercentWidth="50">  
      <Group Label="First Group Left ">  
         <Column PercentWidth="50">  
               <Control FieldName="Microsoft.VSTS.Common.Priority" Type="FieldControl" Name="Pri2" Label="Priority:" />  
               <Control FieldName="Microsoft.VSTS.Common.Rank" Type="FieldControl" Label="Stack Rank:" />  
               <Control FieldName="Microsoft.VSTS.Scheduling.BaselineWork" Type="FieldControl" Label="Original Estimate:" />  
               <Control FieldName="Microsoft.VSTS.Scheduling.RemainingWork" Type="FieldControl" Label="Remaining:" />  
      </Column>  
      <Column>  
      <Splitter>  
      </Column>  
      <Column PercentWidth="50">  
      <Group Label="Second Group Right">  
               <Control Type="DateTimeControl" FieldName="ABC_Company.Project.Manual.ChangeDate" Label="Change Date" Format="Short" LabelPosition="Right" />  
               <Control Type="DateTimeControl" FieldName="ABC_Company.Project.Manual.EstimateStartDate" Label="Estimated Start Date" Format="Short" LabelPosition="Right" />  
               <Control Type="DateTimeControl" FieldName="ABC_Company.Project.Manual.ActualStartDate" Label="Actual Start Date" Format="Short" LabelPosition="Right" />  
               <Control Type="DateTimeControl" FieldName="ABC_Company.Project.Manual.FinishDate" Label="Finish Date" Format="Short" LabelPosition="Right" />  
      </Group>  
      </Column>  
</Group>  
```  
  
##  <a name="ControllingFormSize"></a> Control the size of the form and form elements  
 You can specify the minimum horizontal and vertical size of each form layout by using the `MinimumSize` attribute for the layout. However, the form is resized according to the combined dimensions when the combined horizontal and vertical sizes of the field controls and layouts that are defined for each form are larger than the specified minimum dimensions. In addition, the vertical size of all tabs conforms to the dimension that is required to size the tab with the maximum vertical layout. The last field control on each tab may be resized accordingly to fill in the vertical dimension.  
  
 Scrollbars appear when the container that is displaying the form layout is smaller than the minimum horizontal or vertical size of the form. If this occurs, double-scroll problem might occur. With double-scroll, users may have to scroll both the form itself and the field control to find the information that they want. To avoid the double-scroll problem, you may want to place field controls that are subject to scrolling, such as HTML and History fields, on their own tab.  
  
### Control the size of the layout  
 You can control the spacing and size of the overall form layout by specifying the attributes that are described in the following table.  
  
|Attribute|Description|Pattern value example|  
|---------------|-----------------|---------------------------|  
|`MinimumSize`|Optional. String of the form (*Width*, *Height)*. This value specifies the minimum size for the form itself. When the container that displays the form layout is smaller than this size, horizontal and vertical scrollbars appear. When the combined size of the field controls on the layout form is larger than that set by the `MinimumSize` attribute, the attribute is ignored.|(100,100)|  
|`Margin`|Optional. String of the form *(Left, Top, Right, Bottom)* that specifies, in pixels, the amount of space around the layout. You can vary the amount of space on each side.|(2,0,2,0)|  
|`Padding`|Optional. String of the form (*(Left, Top, Right, Bottom)* that specifies, in pixels, the amount of space between the outside border of the layout and the inside border. You can vary the amount of space on each side.|(2,0,2,0)|  
|`ControlSpacing`|Optional. Specifies the vertical spacing between controls on the form. Integer.|N/A|  
  
### Control the size of form elements  
 You use the `Control` element `MinimumSize` attribute to specify the minimum width and height that each form element should occupy.  If you do not have sufficient vertical space, a scrollbar appears to keep its minimum size. Without this attribute, the controls are drawn by using their default sizes, unless controls in other tabs take more space that increases the size of the tab. You can use other attributes, such as `Margin` and `Padding`, to align or stretch the control and define the size of the border around the control. For more information, see the following topics:  
  
-   [Specify work item form controls](specify-work-item-form-controls.md)     
-   [Provide help text, hyperlinks, or web content](provide-help-text-hyperlinks-web-content-form.md)    
-   [Add the Attachments control](add-the-attachments-control.md)   
-   [Define link controls to restrict link relationships](define-link-controls.md)  
  
<a name="SpecifyingLayouts">
##  </a> Specify different layouts for different targets  
 You can specify different layouts for different targets by using the `Layout` element `Target` attribute. To target Visual Studio or Team Explorer Everywhere, you specify `WinForms`, and to target the web portal, you specify `Web`.  
  
```xml
<FORM>  
      <Layout Target="WinForms" >  
      . . .   
      </Layout>  
      <Layout Target="Web" >  
      . . .   
      </Layout >  
</FORM>  
  
```  
  
## Related articles  
- [Change the work item form layout](change-work-item-form-layout.md)  
-  [Customize your work tracking experience](../customize-work.md)   
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)   
-  [Link and Param](link-param-xml-elements-reference.md)   
-  [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md)
