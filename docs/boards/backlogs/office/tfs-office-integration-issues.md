---
title: TFS-Office integration issues
titleSuffix: Azure Boards
description: Resolve common integration issues that occur with TFS Office integration, resolve TF86001 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 819EA180-2BAC-46DB-A17E-A5179E6BEADC
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: troubleshooting
ms.date: 09/28/2018   
---


# TFS-Microsoft Office integration issues

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

If you don't see the Team ribbon in Microsoft Excel, as shown in the image below, you may be able to resolve the issue with the procedures provided in this article. 

<img src="_img/tfs-office-issues-excel-team-ribbon.png" alt="Excel TFS-Office integration Team ribbon" style="border: 1px solid #C3C3C3;" /> 


## Enable the Team Foundation Add-in 

1.	From the Excel **File** menu, choose **Options**.  
2.	Choose Add-ins and from the **Manage** picklist, choose **COM Add-ins**, and then choose **Go**.

	<img src="_img/tfs-office-issues-excel-open-com-add-ins.png" alt="Excel Options, Add-ins, Choose Com Add-ins" style="border: 1px solid #C3C3C3;" /> 

3.	Make sure that a check is placed in the **Team Foundation Add-in** checkbox. 

 	<img src="_img/tfs-office-issues-excel-tfs-add-in-checkbox.png" alt="COM Add-ins dialog, Team Foundation Add-in checked" style="border: 1px solid #C3C3C3;" /> 

4.	Restart Excel. You should now see the Team ribbon. 

If the Team ribbon does not appear at next launch, the load behavior of the add-in may have changed and you will need to complete the following steps: 

### Update the Registry 
1.	Launch the Registry Editor from your Windows Start Menu by typing regedit in the Search or Run box.

	<img src="_img/tfs-office-issues-run-regedit.png" alt="Run regedit command" style="border: 1px solid #C3C3C3;" /> 

2.	Navigate to one of the following paths containing the **TFCOfficeShim.Connect.[version]** folder:
	
	> [!NOTE]  
	>If there are multiple folders with the same name, select the one with the highest version number. 

	- HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\Excel\Addins (if this key does not exist, try one of the options below)
	- HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\Excel\Addins
	- HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Office\Excel\Addins

	<img src="_img/tfs-office-issues-regedit-loadbehavior-key.png" alt="LoadBehavior entry" style="border: 1px solid #C3C3C3;" /> 


3.	Double click to open **LoadBehavior** and set the value data field to **3** (if the value is **0**, the Team ribbon will not load).
 
4.	Press **OK** and restart Excel. 

	To learn more about the LoadBehavior entry, see [Registry Entries for VSTO Add-ins, LoadBehavior values](https://msdn.microsoft.com/library/bb386106.aspx#LoadBehavior).  

##Office Add-in doesn't load or "Open in Excel" from Visual Studio fails

To connect to Azure Boards or TFS, go to the Team ribbon and choose **New List**. If the New List dialog fails to open, or you receive TF86001 or similar error message, follow the steps below to ensure that policy redirection is configured. 
 
<img src="_img/tfs-office-issues-tf86001.png" alt="TF86001 error message, Team Foundation was unable to load the Office Add-in" style="border: 2px solid #C3C3C3;" />

This error is typically caused when you install Visual Studio before you install Office Excel or Project. In this instance, the Visual Studio Tools for Office Run Time are not correctly configured. To correct this error, you must repair Visual Studio.


### Prerequisites 
Install Visual Studio to ensure that you have access to the Visual Studio Command Prompt and the  [Gacutil.exe (Global Assembly Cache Tool)](/dotnet/framework/tools/gacutil-exe-gac-tool). If you do not have Visual Studio, you can install the [Visual Studio Community edition for free](https://visualstudio.microsoft.com/downloads/).   

### Run the Gacutil tool  

0. Open the Visual Studio Command Prompt and choose to run it as an administrator. 

	<img src="_img/tfs-office-issues-run-developer-cmd-prompt.png" alt="Developer Command Prompt for VS2015 start menu with 'Run as administrator' context menu" style="border: 2px solid #C3C3C3;" />

0.	**For Office 2016 and Office 2013**, run the following commands:   

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
0. Once you've successfully run the `GACUTIL` commands, restart Excel and look for the Team Foundation Add-in. 

If the above steps are unsuccessful, try the following steps:
1.	Perform a full [repair of Office](https://support.office.com/article/Repair-an-Office-application-7821d4b6-7c1d-4205-aa0e-a6b40c5bb88b?ui=en-US&rs=en-US&ad=US). 
2.	Uninstall Office and Reinstall Office.
3.	Contact the Microsoft support team. 


## Related articles

- [Add or remove add-ins](https://support.office.com/article/Add-or-remove-add-ins-0af570c4-5cf3-4fa9-9b88-403625a0b460)  
