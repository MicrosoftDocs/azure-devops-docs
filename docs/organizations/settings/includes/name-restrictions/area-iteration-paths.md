---
ms.technology: devops-agile
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: include
ms.date: 09/17/2021
---
 


:::row:::
   :::column span="1":::
      **Restriction type**
   :::column-end:::
   :::column span="3":::
      **Restriction**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Node length
   :::column-end:::
   :::column span="3":::
      - Must not contain more than 255 characters
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Reserved names
   :::column-end:::
   :::column span="3":::
      - Must not consist only of a period (.) or two periods (..)
      - Must not be a system-reserved name such as PRN, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, COM10, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, NUL, CON, or AUX
      For more information about reserved names, see <a href="/windows/win32/fileio/naming-a-file">File Names, Paths, and Namespaces</a>.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Special characters for nodes
   :::column-end:::
   :::column span="3":::
      - Must not contain Unicode control characters
      - Must not contain any one of the following characters: `&#92; &#47; $ ? &#42; : &quot; &amp; &gt; &lt; &#35; % | +`
      - Must not contain characters prohibited by the local file system. 
      For more information about Windows character restrictions, see <a href="/windows/win32/fileio/naming-a-file">Naming Files, Paths, and Namespaces</a>.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Path length
   :::column-end:::
   :::column span="3":::
      - Must not contain more than 4,000 Unicode characters
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Path hierarchy depth
   :::column-end:::
   :::column span="3":::
      - Must be fewer than 14 levels deep
   :::column-end:::
:::row-end:::
