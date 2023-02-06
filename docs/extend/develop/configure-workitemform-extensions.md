---
title: Configure work item form extensions | Extensions for Azure DevOps
description: Describes how to add and configure work item form extensions in Azure DevOps.
ms.contentid: DEC28077-2F52-490D-B87C-48D4785CD597
ms.subservice: azure-devops-ecosystem
ms.custom: freshness-fy22q3
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 02/03/2022
---

# Add extensions in work item form via work item type definition xml

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can export a work item type as xml using the `witadmin` tool, which includes the layout of the work item form. As part of this example, we add the page, group, and control contributions to the layout.  We also add the control to the Agile "User Story" work item type. For more information, see [WebLayout xml reference](/previous-versions/azure/devops/reference/xml/weblayout-xml-elements). 

> [!NOTE]
> Work item form customization via xml is supported only on Azure DevOps Server, not Azure DevOps Services. 

## Add extension in work item form

1. Install work item form extensions in Azure DevOps Server.

2. Open the `Developer Command Prompt`.  Export the xml file to your desktop with the following command.

   ```
   witadmin exportwitd /collection:CollectionURL /p:Project /n:TypeName /f:FileName
   ```

   A file gets created in the directory that you specified. 

3. Inside this file, go to the **WebLayout** section. Inside the WebLayout section, a comment blob specifies which installed extensions target work item forms for your collection. For each extension, all its form contributions are listed with their IDs and inputs (if it's a Control contribution). In the following example, the comment shows the *color-control-dev* extension installed on the collection. The extension has one control contribution that takes two inputs.

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

4. Find your extension ID in the **Work Item Extensions** section: 

   ```xml
        <!--**********************************Work Item Extensions*************************** 

    Extension:
        Name: color-control-dev
        Id: example.color-control-dev
        ...
   ```

5. Add an extension tag below the **Work Item Extensions** section, shown as follows, to make your extension available to the work item form. To place a contribution inside the form, its extension must be specified in the `Extensions` section.

   ```xml
        <!--**********************************Work Item Extensions***************************
        ...

        Note: For more information on work item extensions use the following topic:
        https://go.microsoft.com/fwlink/?LinkId=816513
        -->

        <Extensions>
            <Extension Id="example.color-control-dev" />
        </Extensions>
    ```

6. Specifying the extensions in the xml automatically places both the **page** and **group** contributions defined in the extensions inside the form. You can move the contributions in the following examples. 

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

A page contribution and a group contribution can't take any other layout elements. 

#### Add control contribution

Unlike *page* and *group* contributions, specifying the extensions in the xml doesn't automatically place *control* contributions. 
To add these contributions in the form, add them with a contribution tag inside the form. The following example adds the *ControlContribution* to the *Planning* group.

If a control contribution has any required input defined, users must give a value for that input. For any non-required input, users can decide whether to set a value to the input. In the following example, the `FieldName` and `Colors` inputs get set.

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

7. Import this xml file, using `witadmin`.

   `witadmin importwitd /collection:CollectionURL /p:Project /f:FileName`

Your extension is configured via the work item form!
