---
title: Configure work item form extensions in TFS | Extensions for Azure DevOps Services
description: Describes how to add and configure work item form extensions in TFS.
ms.prod: devops
ms.contentid: DEC28077-2F52-490D-B87C-48D4785CD597
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 10/10/2017
---

<blockquote style="font-size: 13px"><b>Note:</b> work item form customization via xml is supported only on TFS, not Azure DevOps Services</blockquote>  

# Add extensions in work item form via work item type definition xml

A work item type can be exported as XML using witadmin tool, that includes the layout of the work item form. As part of the walk through, you add the page, group, and control contributions to the layout.  [Read more information on WebLayout XML](/azure/devops/reference/xml/weblayout-xml-elements). In this example, we add the control to the Agile "User Story" work item type.

**Step 1:**  Install work item form extensions in TFS.

**Step 2:**   Open the `Developer Command Prompt`.  Export the XML file to your desktop with command shown below.

```
    witadmin exportwitd /collection:CollectionURL /p:Project /n:TypeName /f:FileName
```

<br>
<strong>Step 3:</strong>  This creates a file in the directory that you specified. Inside this file, navigate to the section called &quot;WebLayout&quot;. Inside the Weblayout Section a comment blob is present that specifies what extensions targeting work item form are installed in your collection. For each extension, all its form contributions are listed with their ids and inputs (if it&#39;s a Control contribution). In the example below, the comment shows that the &quot;color-control-dev&quot; extension has been installed on the collection which has one control contribution that takes 2 inputs -

```xml
        <!--**********************************Work Item Extensions***************************

    Extension:
        Name: color-control-dev
        Id: example.color-control-dev

        Control contribution:
            Id: example.color-control-dev.color-control-contribution
            Description:
            Inputs:
                Id: FieldName
                Description: The field associated with the control.
                Type: Field
                IsRequired: true

                Id: Colors
                Descriptions: The colors that match the values in the control.
                Type: String
                IsRequired: false
```

<br>
<strong>Step 4:</strong>  Find your extension ID in the &quot;Work Item Extensions&quot; section: 

```xml
        <!--**********************************Work Item Extensions*************************** 

    Extension:
        Name: color-control-dev
        Id: example.color-control-dev
        ...
```

<br>
<strong>Step 5:</strong>  Add an extension tag below the &quot;Work Item Extensions&quot; section as shown below to make your extension available to the work item form. To place a contribution inside the form, its extension must be specified in the Extensions section.

```xml
        <!--**********************************Work Item Extensions***************************
        ...

        Note: For more information on work item extensions use the following topic:
        http://go.microsoft.com/fwlink/?LinkId=816513
        -->

        <Extensions>
            <Extension Id="example.color-control-dev" />
        </Extensions>
 ```

<br>
<strong>Step 6:</strong>  Specifying the extensions in the xml automatically places both the <strong>page</strong> and <strong>group</strong> contributions defined in the extensions inside the form. You can move the contributions following the examples below: 

#### Add page contribution
```xml
    <Page Id="Details">
    <PageContribution Id="<page contribution id>" />
    ...       
```

 #### Add group contribution
```xml
    <Page Id="Details">
    ...
        <Section>
        ...
            <GroupContribution Id="<group contribution id>" />
            ...
```

> Note that a page contribution and a group contribution can not take any other layout elements inside them. 

#### Add control contribution
Unlike **page** and **group** contributions, specifying the extensions in the xml doesn't automatically place **control** contributions. 
To add these contributions in the form, you have to add them with a contribution tag inside the form. The example below adds the "ControlContribution" to the "Planning" group.

Note that if a control contribution has any required input defined, users must give a value for that input. For any non-required input, users can opt to either set or not set a value to the input. In the example below, the values of "FieldName" and "Colors" inputs are set:

```xml
    <Page Id="Details">
    ...
        <Section>
        ...
            <Group Id="Planning">
            ...
                <ControlContribution Label="Priority" Id="example.color-control-dev.color-control-contribution">
                    <Inputs>
                        <Input Id="FieldName" Value="Microsoft.Azure DevOps Services.Common.Priority" />
                        <Input Id="Colors" Value="red;green" />
                    </Inputs>
                </ControlContribution>

                <Control Label="Risk" Type="FieldControl" FieldName="Microsoft.Azure DevOps Services.Common.Risk" />
```



<br>
<strong>Step 7:</strong>  Finally, import this <em>.xml</em> file, using witadmin.
<code>witadmin importwitd /collection:CollectionURL /p:Project /f:FileName</code> 