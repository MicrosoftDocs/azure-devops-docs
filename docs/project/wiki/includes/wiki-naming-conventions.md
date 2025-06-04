---
ms.topic: include
ms.date: 06/03/2025
---

Each wiki page corresponds to a file in the wiki Git repository. The following restrictions apply to page file names and the file size:

- **File name**: When choosing a name for the page file, keep in mind that the fully qualified path to the file should be 235 characters or less. The full path to the page consists of the repo URL, the folder path to the page file, and the page file name. For example, `https://github.com/ExampleWiki/Contributors/Code/How-to-add-code-to-the-project.md`.
- **Uniqueness**: The page file name must be unique within its folder location in the wiki repo hierarchy. The name is case sensitive.
- **Special characters**: The page file name has restrictions about the following special characters:
   - No Unicode control characters or surrogate characters
   - No printable characters: forward slash `/`, back slash `\`, hash `#`
   - No period `.` symbol at the start or end of the name

- **File size**: The maximum page file size is 18 MB.
- **Attachment file size**: The maximum size for any attachment to a page file is 19 MB.

### Allowed special characters

Several special characters are allowed in a page file name, such as the colon `:` and hyphen `-`. For example, you might name a Markdown file as _FAQ:0525_ or _Setup-Guide_. 

> [!IMPORTANT]
> To avoid errors in page syntax and browser navigation, don't use the space character (` `) in page file names. If you name your page files based on the page title, replace any spaces in the page title with a hyphen (`-`) in the file name.

The following table lists the special characters allowed in wiki page file names and the corresponding URI encoded string:

| Character  | Symbol  | URI string      |
|------------|:-------:|:---------------:|
| **Colon**                 | `:`  | %3A |
| **Left angle bracket**    | `<`  | %3C |
| **Right angle bracket**   | `>`  | %3E |
| **Asterisk** (_wildcard_) | `*`  | %2A |
| **Question mark**         | `?`  | %3F |
| **Pipe**                  | `|`  | %7C |
| **Hyphen** (_dash_)       | `-`  | %2D |
| **Double quote**          | `"`  | %22 |

For example, the file name _FAQ:0525_ is encoded as `FAQ%3A0525`.