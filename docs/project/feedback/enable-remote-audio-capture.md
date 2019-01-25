---
title: Enable remote audio capture
titleSuffix: Azure DevOps Services & TFS
description: Configures audio redirection settings on a remote machine that is running Microsoft Feedback Client, Test Runner, or Exploratory Testing window 
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.assetid: 98e82b7a-768a-4fee-8259-0d8a578c0026
ms.author: kaelli
ms.manager: jillfra
monikerRange: '>= tfs-2013'
ms.date: 02/22/2017 
---

# Enable remote audio capture

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

To record audio, you must have an audio recording device configured on your computer, or on a remote machine if you access Microsoft Feedback Client, Test Runner, or Exploratory Testing from a remote device.  
  
To record audio as part of a feedback or testing session on a remote machine that is running Microsoft Feedback Client, Test Runner, or Exploratory Testing window, you must configure audio redirection settings on the remote machine. You must also enable record from this computer when you connect to the remote machine. You can perform this procedure only if your local computer is running Windows 7 or Windows Server 2008 R2.  
  
> [!IMPORTANT]  
>  We recommend that you open Microsoft Feedback Client on your local computer. Redirection will decrease audio quality. Microsoft Feedback Client does not require you to record audio as part of the feedback session.  
  
## To set a default microphone on your local computer  
 To record audio from your local computer, you must set a microphone device as the default device.  
  
1.  Choose **Start, Control Panel**.  
  
2.  In the Control Panel window, choose the **Hardware and Sound** link, and then choose **Sound**.  
  
3.  In the Sound window, choose the **Recording** tab.  
  
4.  Select a recording device from the list provided and then choose **Set Default**.  
  
## To enable remote audio capture  

> [!IMPORTANT]
> If you edit the registry incorrectly, you might severely damage your system. Before you make any changes to the registry, you should back up any valued data on the computer.  

1.  Choose **Start**, choose **Run**, enter **regedit**, choose the **OK** button, and then set the value of the following registry key to **0**.  
  
     `HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp\fDisableAudioCapture`  
  
     For more information about how to set values of registry keys, see the following page on the Microsoft website: [How to add, modify, or delete registry subkeys and values by using a registration entries (.reg) file](http://go.microsoft.com/fwlink/?LinkId=227171).  
  
2.  To connect to the remote machine, choose **Start**, choose **Run**, enter `mstsc`, and then choose the **OK** button.  
  
    The **Remote Desktop Connection** dialog box opens.  

	![Enable remote audio](_img/alm_rm_remoteaudio.png "ALM_RM_RemoteAudio")  

3.  In the **Computer** list, choose or enter the name of the computer to which you want to connect, and, in the **User name** box, enter your user name.  
  
4.  On the **Local Resources** tab, choose the **Settings** button.  
  
5.  Under **Remote audio recording**, choose the **Record from this computer** option button, and then choose the **OK** button.  
  
6.  Choose the **Connect** button.  
  
7.  Exit and restart whichever client tool that you are using, for example Microsoft Feedback Client, Test Runner, or Exploratory Testing.  
  
     You must restart you client in order for it to register the audio settings.  
  
## Related articles
 [Exploratory testing](../../test/perform-exploratory-tests.md)   
 [Run your tests](../../test/run-manual-tests.md)   
 [Provide feedback using the Microsoft Feedback Manager](give-feedback.md)
