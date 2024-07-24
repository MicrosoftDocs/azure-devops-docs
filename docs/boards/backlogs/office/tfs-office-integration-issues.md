---
title: Resolve common Azure DevOps Office integration issues
titleSuffix: Azure Boards
description: Learn how to resolve common integration issues that occur with Azure DevOps Office integrations. 
ms.service: azure-devops-boards
ms.assetid: 819EA180-2BAC-46DB-A17E-A5179E6BEADC
ms.author: chcomley
author: chcomley
ms.topic: troubleshooting
ms.date: 11/13/2023
---

# Resolve Azure DevOps Office integration issues

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

> [!NOTE]
> The Azure DevOps Office integration is now considered feature complete. There are no plans to deprecate the functionality, however there will no longer be updates or improvements to this add in. Future investment will be made to the native tooling [Bulk import or update work items using CSV files](https://github.com/SamGrantham/azure-devops-docs-pr/blob/docs-editor/tfs-office-integration-issues-1719507337/docs/boards/queries/import-work-items-from-csv.md). If you are experiencing issues with the Azure DevOps Office integration that this article cannot solve, we encourage you to see if this alternative will meet your needs. All Office integration tasks require an installed version of Visual Studio or the free [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads). The software installs the Azure DevOps Office Integration Add-in or Team Foundation Office Integration Add-in. For a list of prerequisites, see [Azure Boards and Office integration](https://github.com/SamGrantham/azure-devops-docs-pr/blob/docs-editor/tfs-office-integration-issues-1719507337/docs/boards/backlogs/office/track-work.md).
All Office integration tasks require an installed version of Visual Studio or the free [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads). The software installs the Azure DevOps Office Integration Add-in or Team Foundation Office Integration Add-in.  For a list of prerequisites, see [Azure Boards and Office integration](track-work.md). 

If you don't see the **Team** ribbon in Microsoft Excel, as shown in the following image, you might want to resolve the issue with the procedures provided in this article. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Excel TFS-Office integration Team ribbon.](media/excel-team-ribbon.png)

[!INCLUDE [temp](../../includes/deprecate-project.md)]
 
## Enable the Azure DevOps add-in 

1.	From the Excel **File** menu, choose **Options**.  
1. Choose Add-ins and from the **Manage** picklist, choose **COM Add-ins**, and then choose **Go**.

> [!div class="mx-imgBorder"]
1. Make sure that a check is placed in the **Team Foundation Add-in** checkbox. 

> [!div class="mx-imgBorder"]
> ![Screenshot of COM Add-ins dialog, Team Foundation Add-in checked.](media/tfs-office-issues-excel-tfs-add-in-checkbox.png) 
   
4.	Restart Excel. You should now see the **Team** ribbon. 

If the **Team** ribbon doesn't appear at next launch, the load behavior of the add-in might be changed, so complete the following steps: 

### Update the registry 

1. Launch the Registry Editor from your Windows Start Menu by entering `regedit` in the Search or Run box.

> [!div class="mx-imgBorder"]
> ![Screenshot of Run regedit command.](media/tfs-office-issues-run-regedit.png) 
   
1. Go to one of the following paths containing the **TFCOfficeShim.Connect.[version]** folder:

> [!NOTE]
> If there are multiple folders with the same name, select the one with the highest version number. 

- `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\Excel\Addins` (if this key doesn't exist, try one of the following options)

- `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\Excel\Addins`

- `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Office\Excel\Addins`

> [!div class="mx-imgBorder"]
> ![Screenshot of LoadBehavior entry.](media/tfs-office-issues-regedit-loadbehavior-key.png) 

3.	Double-click to open **LoadBehavior** and set the value data field to **3** (if the value is **0**, the **Team** ribbon doesn't load).
 
4.	Select **OK** and restart Excel. 

	For more information about the LoadBehavior entry, see [Registry Entries for VSTO Add-ins, LoadBehavior values](/visualstudio/vsto/registry-entries-for-vsto-add-ins#LoadBehavior).  

## Check to see if add-in is disabled

1.	From the Excel **File** menu, choose **Options**.
1. Choose Add-ins and from the **Manage** picklist, choose **Disabled Items**, and then choose **Go**.

      > [!div class="mx-imgBorder"]
   > ![Screenshot of Excel Options, Add-ins, Choose Disabled Items.](media/excel-com-disabled-items.png)
   
1. If you see "Azure DevOps Add In" in the list, select it and click **Enable**.

      > [!div class="mx-imgBorder"]
   > ![Screenshot of disabled items dialog, Azure DevOps Add In checked.](media/excel-com-list-of-disabled-items.png) 
   
## Office add-in doesn't load or open in Excel when Visual Studio fails

To connect to Azure Boards, go to the **Team** ribbon and choose **New List**. If the New List dialog fails to open, or you receive TF86001 or similar error message, then you might need to repair Visual Studio. 
 
> [!div class="mx-imgBorder"]
> ![TF86001 error message, Team Foundation was unable to load the Office Add-in.](media/tfs-office-issues-tf86001.png) 

This error is typically caused when you install Visual Studio before you install Office Excel or Project. In this instance, the Visual Studio Tools for Office Run Time aren't correctly configured. To correct this error, you must repair Visual Studio.

> [!NOTE]
> For authentication issues, such as `TF31003` and `TF30063`, please refer to [User account does not have permission](/previous-versions/azure/devops/reference/error/tf31003-user-account-no-permission-connect-tfs).

### Prerequisites 

Install Visual Studio to ensure that you have access to the Visual Studio Command Prompt and the  [Gacutil.exe (Global Assembly Cache Tool)](/dotnet/framework/tools/gacutil-exe-gac-tool). If you don't have Visual Studio, you can install the [Visual Studio Community edition for free](https://visualstudio.microsoft.com/downloads/).   

### Run the Gacutil tool  

1. Open the Visual Studio Command Prompt and choose to run it as an administrator. 

> [!div class="mx-imgBorder"]
> ![Screenshot of Developer Command Prompt for VS2015 start menu with 'Run as administrator](media/tfs-office-issues-run-developer-cmd-prompt.png) 
   
   
4. **For Microsoft 365**, run the following commands:   

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.14.0.Microsoft.Office.Interop.Excel\15.0.0.0__71e9bce111e9429c\Policy.14.0.Microsoft.Office.Interop.Excel.dll
   ```  

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.14.0.office\15.0.0.0__71e9bce111e9429c\Policy.14.0.Office.dll
   ```

   **For Office 2016 and Office 2013**, run the following commands:   

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.12.0.Microsoft.Office.Interop.Excel\15.0.0.0__71e9bce111e9429c\Policy.12.0.Microsoft.Office.Interop.Excel.dll
   ```  

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.12.0.office\15.0.0.0__71e9bce111e9429c\Policy.12.0.Office.dll
   ```

   **For Office 2010**, run the following commands:  

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.12.0.Microsoft.Office.Interop.Excel\14.0.0.0__71e9bce111e9429c\Policy.12.0.Microsoft.Office.Interop.Excel.dll
   ```  

   ```
   GACUTIL /I C:\Windows\assembly\GAC_MSIL\Policy.12.0.office\14.0.0.0__71e9bce111e9429c\Policy.12.0.Office.dll
   ```  

3. Once you've successfully run the `GACUTIL` commands, restart Excel and look for the Azure DevOps Integration Tool for Office add-in. 

If the above steps are unsuccessful, try the following steps:  

1.	Run a full [repair of Office](https://support.office.com/article/Repair-an-Office-application-7821d4b6-7c1d-4205-aa0e-a6b40c5bb88b?ui=en-US&rs=en-US&ad=US).  

2.	Uninstall Office and Reinstall Office. 

3.	Contact the Microsoft support team.  

## User can't sign in to Azure DevOps from Excel after password change

If a user changed their network password and begins receiving authentication errors with the new account info, they might be experiencing a known issue. The token stored within Visual Studio is no longer valid, but the system doesn't recognize that it needs to be refreshed.  The user doesn't have to take any action, the token expires after some time and authentication begins working again, but there's no way to estimate the delay. Use the following workaround to manually remove the token.

#### Remove the token from the registry

1. Close all open instances of Excel.
1. Save and then clear the registry path, these commands can be run from Command Prompt opened with the "run as administrator" option:
   ```CommandPrompt
   reg export HKEY_CURRENT_USER\SOFTWARE\Microsoft\VSCommon\14.0\ClientServices\TokenStorage\VisualStudio\VssApp %TEMP%\oicreds.reg
   ```

   ```CommandPrompt
   reg delete HKEY_CURRENT_USER\SOFTWARE\Microsoft\VSCommon\14.0\ClientServices\TokenStorage\VisualStudio\VssApp
   ```

1. Open Excel and it prompts for sign-in when it connects to Azure DevOps.

Wait until the token expires or delete this reg key every time a password changes, if it's configured in a way that causes this issue.  

## Intermittent issues doing refresh and publish

If a user has errors when doing a refresh or publish, it might be due to a Conditional Access Policy in Microsoft Entra ID. To resolve this issue, try clearing the contents of the folder ```%LOCALAPPDATA%\.IdentityService```. 

## Unable to cast COM object of type Microsoft.Office.Interop.Excel.ApplicationClass...

You might receive an error message when you try to open a TFS work item list in Excel, triggered from Team Explorer. For more information, see [How to solve “Unable to cast COM object of type Microsoft.Office.Interop.Excel.ApplicationClass' to interface type 'Microsoft.Office.Interop.Excel._Application'.”](/archive/blogs/dau-blog/how-to-solve-unable-to-cast-com-object-of-type-microsoft-office-interop-excel-applicationclass-to-interface-type-microsoft-office-interop-excel-_application) 

## Related articles
- [Bulk modify work items (web portal)](../bulk-modify-work-items.md)  
- [Bulk import or update work items using CSV files](../../queries/import-work-items-from-csv.md)
- [FAQs: Work in Excel connected to Azure Boards](faqs.yml)
- [Add or remove add-ins](https://support.office.com/article/Add-or-remove-add-ins-0af570c4-5cf3-4fa9-9b88-403625a0b460)
