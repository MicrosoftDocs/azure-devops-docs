---
title: Edit a WIT definition to add web content to a work item form
titleSuffix: TFS
description: Adds a Web content or HTML content to a work item form by exporting the type definition XML file and adding a WebpageControl in the FORM section - Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-agile
ms.assetid: 212ce627-db5c-4d19-a6c5-68f10cb6ca1c
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.date: 02/14/2017
---

# Edit a WIT definition to add web content to a work item form

[!INCLUDE [temp](../../_shared/customization-phase-0-and-1-plus-version-header.md)]

You can add web content or HTML content to a work item form by exporting the type definition XML file and adding a `WebpageControl` in the `FORM` section. After you modify and import the XML file, you can verify the display of the Web content in the updated work item type.  
  
The Web content that you display can be specified in one of the following ways:  
  
-   URL of a Web page  
  
-   A URL path that is dynamically determined at run time based on one or more field values defined for the work item  
  
-   HTML content  
  
For information about the syntax structure of the elements used to add Web content to a work item type (WIT), see [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md) and [Link and Param](link-param-xml-elements-reference.md).  
  

[!INCLUDE [temp](../../_shared/update-xml-wit.md)] 
  
  
<a name="Export"></a> 
##Export and open the WIT definition file  
  
1.  Perform one of the following steps based on the scope of the customization that you want to perform:  
  
     **If you are modifying a work item type for a single project**:  
  
    1.  Run **witadmin exportwitd** to export the XML file for the work item type that you want to modify. For more information, see [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md).  
  
    2.  In Visual Studio, choose **File**, **Open**, **File**.  
  
    3.  Under **Look in**, move to the location where you exported the file.  
  
	**If you are modifying a work item type to customize a process template**:  
  
    1.  Find the location where you downloaded the process template.  
  
    2.  Select the work item type XML file that you want to update, and then choose **Open**. When you are prompted about line endings, click **No**.  
  
<a name="AddWebContent"></a> 
## Add Web content to the FORM section of the definition file  
  
1.  Find the `<TabGroup>` section of the XML file. Notice that there are `<Tab>` elements for items such as Links and File Attachments in which each `<Tab>` element contains a `<Control>` element that renders the respective control.  
  
    ```xml
    <Tab Label="Links">  
          <Control Type="LinksControl" />  
    </Tab>  
    <Tab Label="File Attachments">  
          <Control Type="AttachmentsControl" />  
    </Tab>  
    ```  
  
2.  Add a new `<Tab>` element that will contain the Web or HTML content that you want to display in the work item form. Copy the following code into the `<TabGroup>` section of the file based on how you are defining the Web content.  
  
    -   **To specify the URL of a Web page**:  
  
        ```xml
        <Tab Label="Tab Label">  
              <Group>  
              <Column PercentWidth="100">  
                 <Control Type="WebpageControl" Name="Webpage" Label=" Name of Web Page" LabelPosition="Top" >  
                       <WebpageControlOptions AllowScript="false">  
                       <Link UrlRoot="URL of Web Page" />  
                       </WebpageControlOptions>  
                 </Control>  
              </Column>  
              </Group>  
        </Tab>  
        ```  
  
         Replace *Tab Label* and *URL of Web Page* with the information that you want to appear on the work item form.  
  
    -   **To specify a dynamic URL to be determined at run time**:  
  
        ```xml
        <Tab Label="Tab Label">  
              <Group>  
              <Column PercentWidth="100">  
                 <Control Type="WebpageControl" Name="Webpage" Label=" Name of Web Page" LabelPosition="Top" >  
                       <WebpageControlOptions AllowScript="false">  
                       <Link UrlRoot="URL of Web Page" URLPath="URL path with parameters >  
              <Param Index="0" Value="Param Value 0"/>  
              <Param Index="1" Value="Param Value 1"/>  
              <Param Index="2" Value="Param Value 2"/>  
                       </Link>  
                       </WebpageControlOptions>  
                 </Control>  
              </Column>  
              </Group>  
        </Tab>  
        ```  
  
         Replace *Tab Label*, *URL of Web Page, URL path with parameters*, and *Param Value 1, 2, and 3* with the information that you want to appear on the work item form.  
  
    -   **To specify HTML content**:  
  
        ```xml
        <Tab Label="Tab Label">  
              <Group>  
              <Column PercentWidth="100">  
                 <Control Type="WebpageControl">  
                       <Content>  
                       <![CDATA[HTML Content]]>  
                       </Content>  
                 </Control>  
              </Column>  
              </Group>  
        </Tab>  
        ```  
  
         Replace *Tab Label* and *HTML Content* with the information that you want to appear on the work item form.  
  
        > [!NOTE]  
        > For best results, every control or group should display in a column even if the column spans the full width of the form. In turn, every column should display in a group even if the group has no visible label or boundary.  
  
3.  Save your changes to the XML file.  
  
4.  Use `witadmin importwitd` to import the new work item type to a single project. To add the work item type to your process template, see [Add type definitions for work items](../process-templates/add-wit-definitions-process-template.md).  
  
<a name="Verify"></a> 
## Verify the Web page or HTML content appears in the form  
  
1.  In Team Explorer, open Work Items for the project that contains the WIT definition that you modified, and choose ![Refresh](_img/icon_refreshnode.png "Icon_refreshNode") **Refresh**.  
  
     The latest updates are downloaded from the server, including the changes that you just imported. Wait several seconds until the **Work Items** node is refreshed. Nodes that are still loading display the word **working**.  
  
2.  Create a work item using the WIT that you modified.  
  
     Verify that the Web page or HTML content appears on the form as expected.  
  
3.  Choose **Close** to close the new work item.  
  
## Related articles   
-  [Customize your work tracking experience](../customize-work.md)   
-  [Specify work item form controls](specify-work-item-form-controls.md)   
-  [WebpageControlOptions](webpagecontroloptions-xml-elements-reference.md)   
-  [Link and Param](link-param-xml-elements-reference.md)   
-  [Import, export, and manage work item types](../witadmin/witadmin-import-export-manage-wits.md)