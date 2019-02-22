



Each wiki page corresponds to a file within the wiki Git repo. Names you assign to a wiki page title must conform to the following restrictions.

::: moniker range=">= azure-devops-2019"   
|Restriction type| Restriction|
|---------------|-----------|
| File name     | The fully qualified page path shouldn't exceed 235 characters.  |
| Uniqueness    | Page titles are case sensitive and must be unique within the wiki hierarchy.|
|Special characters| <ol><li>Must not contain any Unicode control characters or surrogate characters</li><li>Must not contain the following printable characters: / \  #</li><li>Must not start or end with a period (.)</li><li>Must not contain a blank space.</li></ol>|
| File size     | Must not exceed the maximum of 18 MB |
| Attachment file size |  Must not exceed the maximum of 19 MB  |

### Special characters in Wiki page titles

You can specify page titles which contain one or more of these special characters `: < > * ? | -`. For example, you can name a Markdown file as "FAQ?" or "Set-up guide". The following characters are translated to their URI encoded strings:

> [!div class="mx-tdCol2BreakAll"]
> |        Character        | Encoded string |
> |------|---------|
> |         :       |      %3A       |
> |         <       |      %3C       |
> |        >        |      %3E       |
> |        *        |      %2A       |
> |        ?        |      %3F       |
> |        \|       |      %7C       |
> |        -        |      %2D       |

::: moniker-end

::: moniker range="tfs-2018"


> [!div class="mx-tdCol2BreakAll"]
> |Restriction type| Restriction|
> |---------------|-----------|
> | File name     | The fully qualified page path shouldn't exceed 235 characters.  |
> | Uniqueness    | Page titles are case sensitive and must be unique within the wiki hierarchy.|
> |Special characters| <ol><li>Must not contain any Unicode control characters or surrogate characters</li><li>Must not contain the following printable characters: / : < \ * ? \ &#124; - #</li><li>Must not start or end with a period (.)</li><li>Titles of pages added offline titles must not contain a blank space.</li></ol>|
> | File size     | Must not exceed the maximum of 18 MB |
> | Attachment file size |  Must not exceed the maximum of 19 MB  |


::: moniker-end

