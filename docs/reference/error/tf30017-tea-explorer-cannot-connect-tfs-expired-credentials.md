---
title: TF30017-Team Explorer cannot connect to 
titleSuffix: Azure DevOps & TFS
description: Team Explorer will not connect to a server that does not have a valid CA certificate.
ms.prod: devops
ms.technology: devops-agile
ms.assetid: eb239d52-9b7b-41c9-98c6-118fb2f2173e
ms.manager: jillfra
ms.author: kaelliauthor: KathrynEE
ms.topic: Troubleshooting
ms.date: 01/20/2017
---


# TF30017: Team Explorer cannot connect to Team Foundation Server {0}. The security certificate is either not installed, misconfigured, or expired.

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

A security certificate associates an identity with a public key, and only the owner of the certificate knows the corresponding private key. The private key enables the owner to make a digital signature or decrypt information encrypted with the corresponding public key. A certification authority (CA) issues server and client authentication certificates to the servers and clients that request them.  
  
Team Explorer will not connect to a server that does not have a valid CA certificate. This error indicates there is a problem with the CA certificate on the application-tier server. When Team Explorer connects with the application-tier server, it reads the CA certificate on the server to determine whether the server is authentic and is safe to connect to. There are at least three conditions that can cause Team Explorer to avoid connecting to the server:  
  
-   The CA certificate is not from a trusted authority, is not installed correctly, or is missing.  
  
-   The CA certificate has expired and the certificate must be re-issued with an unexpired date.  
  
-   The name on the CA certificate is not correct or does not match the URL of the page used by Team Explorer. For example, if the certificate is issued to AdventureWorks.com, but the URL used by Team Explorer is www.AdventureWorks.com, the mismatch will cause this error. The certificate must be reissued using the correct name, or the URL must be changed to match the name on the certificate.  
  
### To determine the specific cause of this error  
  
1.  On the **Start** menu, click **Internet Explorer**.  
  
2.  In the **Address** bar, type **https://servername:portnumber/bisserver/**  
  
3.  In the **Security Alert** dialog box, click the **Content** tab, and then click **Certificates**.  
  
4.  On the **Certificate** dialog box, click the **Untrusted Publishers** tab, select the publisher, and then click **View**.  
  
5.  Look for a yellow warning icon in front of one of the following messages:  
  
    1.  **The security certificate was issued by a company you have not chosen to trust. View the certificate to determine whether you want to trust the certifying authority.**  
  
    2.  **The security certificate has expired.**  
  
    3.  **The security certificate name does not match the name of the page you are trying to view.**  
  
6.  If the red **X** appears before a. and you have Administrator permissions set on the client computer, follow the steps in the next set of procedures later in this document.  
  
     -or -  
  
     If the red **X** appears before b. or c. or you do not have Administrator permissions set on the client computer, contact the system administrator for the server and ask them to reconfigure or renew the CA certificate.  
  
### To correct this error if the CA certificate is not installed or from a trusted authority  
  
1.  In the **Security Alert** dialog box, click **View Certificate**.  
  
2.  In the **Certificate** dialog box, click the **Certification Path** tab.  
  
3.  On the **Certification Path** tab, click the top node (with the red icon in front of the node name), and then click **View Certificate**.  
  
4.  In the **Certificate** dialog box, click **Install Certificate**.  
  
5.  In the **Certificate Import Wizard**, click **Next**.  
  
6.  On the **Certificate Store** wizard page, click **Next**.  
  
7.  On the **Completing the Certificate Import Wizard** page, click **Finish**.  
  
8.  In the **Security Warning** dialog box, click **Yes**.  
  
9. Close Internet Explorer and try connecting to Team Foundation Server again.