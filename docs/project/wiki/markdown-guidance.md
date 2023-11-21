---
title: Markdown syntax for files, widgets, and wikis
titleSuffix: Azure DevOps  
ms.custom: wiki, devdivchpfy22
description: Discover how to utilize Markdown to incorporate tables, mathematical symbols, and share information effectively in pull requests, README files, dashboards, and wikis in Azure DevOps.  
ms.subservice: azure-devops-wiki
ms.assetid: 43D2156E-2E20-42B8-B816-43E95CB479C5  
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.date: 11/20/2023
---

# Use basic Markdown in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [version-selector](../../includes/version-selector.md)]

In this article, find basic syntax guidance for using Markdown in Azure DevOps features. You can use both common [Markdown conventions](https://daringfireball.net/projects/markdown/syntax) and [GitHub-flavored extensions](https://help.github.com/articles/github-flavored-markdown/).

Use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add formatting, tables, images, and more to your project pages, README files, dashboards, pull requests, [wikis](wiki-markdown-guidance.md), and so on.

Not all Markdown syntax is supported across all features in Azure DevOps. The following table links to each syntax section in this article and highlights which features support it.

|Markdown type |Supported features  |
|---------|---------|
|[Headers](#headers)   | Definition of Done (Kanban board), Markdown widget, pull request, README, wiki |
|[Paragraphs and line breaks](#paragraphs-and-line-breaks)| Definition of Done (Kanban board), Markdown widget, pull request, README files, wiki|
|[Blockquotes](#blockquotes)  | [Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md) |
|[Horizontal rules](#horizontal-rules)    |[Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md) |
|[Emphasis](#emphasis-bold-italics-strikethrough)    | [Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md) |
|[Code highlighting](#code-highlighting)   | [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md        |
|[Tables](#tables)    | [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md       |
|[Lists](#lists)    |[Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md)         |
|[Links](#links)    |[Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md)         |
|[Images](#images)    | [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md        |
|[Checklist or task list](#checklist-or-task-list)    |  [pull request](../../repos/git/pull-requests.md), [wiki](add-edit-wiki.md)       |
|[Emoji](#emoji)     | [pull request](../../repos/git/pull-requests.md), [wiki](add-edit-wiki.md)        |
|[Ignore or escape Markdown syntax](#ignore-or-escape-markdown-syntax-to-enter-specific-or-literal-characters)    |  [Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), [wiki](add-edit-wiki.md)     |
| [Attachments](#attachments) |  [pull request](../../repos/git/pull-requests.md), [wiki](add-edit-wiki.md)  |
| [Mathematical notation and characters](#mathematical-notation-and-characters)| [pull request](../../repos/git/pull-requests.md), [wiki](add-edit-wiki.md)     |

For more information, see [Definition of Done (Kanban board)](../../boards/boards/add-columns.md#definition-of-done), [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), [pull request](../../repos/git/pull-requests.md), [README files](../../repos/git/create-a-readme.md), and [wiki](add-edit-wiki.md).
For more supported syntax for wiki pages, see [Wiki Markdown guidance](wiki-markdown-guidance.md).
::: moniker range="tfs-2018"
> [!NOTE]
> Rich Markdown rendering in code repositories is supported for TFS 2018.2 and later versions. You can create rich README.md files in the code repositories. The Markdown rendering of the MD files in code repositories supports HTML tags, block quotes, emojis, image resizing, and mathematical formulas. There is parity in Markdown rendering in Wiki and MD files in code.
::: moniker-end

## Headers

Structure your content using headers. Headers segment longer content, making it easier to read.

Start a line with a hash character `#` to set a heading. Organize your remarks with subheadings by starting a line with more hash characters, for example, `####`. You can use up to six levels of headings.

**Example:**
```markdown
# This is a H1 header
## This is a H2 header
### This is a H3 header
#### This is a H4 header
##### This is a H5 header
```

**Result:**

:::image type="content" source="media/markdown-guidance/mrkdown-headers.png" alt-text="Screenshot of Web portal, headers 1 through 5.":::     

## Paragraphs and line breaks

#### Supported in: Definition of Done | Markdown widget | Pull Requests | README files | Wikis  

Make your text easier to read by breaking it into paragraphs or line breaks.  

### Pull requests

In pull request comments, select **Enter** to insert a line break and begin text on a new line.

**Example - pull request comment:**

<pre>
Add lines between your text with the **Enter** key.
Your text gets better spaced and makes it easier to read.
</pre>

**Result:**

Add lines between your text with the **Enter** key.

Your text gets better spaced and makes it easier to read.

### Markdown files or widgets

In a Markdown file or widget, enter two spaces before the line break, and then select **Enter** to begin a new paragraph.

**Example - Markdown file or widget:**

<pre>
Add two spaces before the end of the line, and then select **Enter**.(space, space, Enter)
A space gets added in between paragraphs.
</pre>

**Result:**  

Add two spaces before the end of the line, and then select Enter.

A space gets added in between paragraphs.

## Blockquotes

Quote previous comments or text to set the context for your comment or text. Quote single lines of text with `>` before the text. Use many `>` characters to nest quoted text. Quote blocks of lines of text by using the same level of `>` across many lines.

**Example:**

<pre>
> Single line quote
>> Nested quote
>> multiple line
>> quote
</pre>

**Result:**  

![Screenshot of Quoting in Markdown.](media/markdown-guidance/markdown_quote2.jpg)

## Horizontal rules

To add a horizontal rule, add a line that's a series of dashes `---`. The line above the line containing the `---` must be blank.

**Example:**

<div id="do_not_render">
<pre>
above
&nbsp;
&#45;&#45;&#45;&#45;
below
</pre>
</div>

**Result:**  

above    

-----    

below    

## Emphasis (bold, italics, strikethrough) 

#### Supported in: Definition of Done | Markdown widget | Pull Requests | README files | Wikis  

You can emphasize text by applying bold, italics, or strikethrough to characters:

- To apply italics: surround the text with an asterisk `*` or underscore `_` 
- To apply bold: surround the text with double asterisks `**`.
- To apply strikethrough: surround the text with double tilde characters `~~`.

Combine these elements to apply emphasis to the text.

::: moniker range=">= azure-devops-2019"

> [!NOTE]  
> There is no Markdown syntax that supports underlining text. Within a wiki page, you can use the HTML `<u>` tag to generate underlined text. For example, `<u>underlined text</u>` yields <u>underlined text</u>.

::: moniker-end

::: moniker range="tfs-2018"

> [!NOTE]
> There is no Markdown syntax that supports underlining text. Within a wiki page in TFS 2018.2 and later versions, you can use the HTML `<u>` tag to generate underlined text. For example, `<u>underlined text</u>` yields <u>underlined text</u>.

::: moniker-end

**Example:**

<pre>
Use _emphasis_ in comments to express **strong** opinions and point out ~~corrections~~  
**_Bold, italicized text_**  
**~~Bold, strike-through text~~**
</pre>

**Result:**  

Use _emphasis_ in comments to express **strong** opinions and point out <s>corrections</s>  
**_Bold, italicized text_**
**~~Bold, strike-through text~~**  

## Code highlighting

Highlight suggested code segments using code highlight blocks.
To indicate a span of code, wrap it with three backtick quotes (`&#96;&#96;&#96;`) on a new line at both the start and end of the block. To indicate code inline, wrap it with one backtick quote (`&#96;`).

Code highlighting entered within the Markdown widget renders code as plain preformatted text.

**Example:**

<pre>&#96;&#96;&#96;
sudo npm install vsoagent-installer -g  
&#96;&#96;&#96;
</pre>  

<br/>

**Result:**

```
sudo npm install vsoagent-installer -g
```

<br/>

**Example:**

<pre>
&#96;&#96;&#96;To install the Microsoft Cross Platform Build & Release Agent, run the following: &#96;$ sudo npm install vsoagent-installer -g&#96;.
&#96;&#96;&#96; 
</pre>

<br/>

**Result:**

To install the Microsoft Cross Platform Build & Release Agent, run the following command: `$ sudo npm install vsoagent-installer -g`.  

<br/>

Within a Markdown file, text with four spaces at the beginning of the line automatically converts to a code block.  

Set a language identifier for the code block to enable syntax highlighting for any of the supported languages in [highlightjs](https://github.com/highlightjs/highlight.js/tree/stable-11/src/languages).

<pre>
``` language
code
```
</pre>

<br/>

**More examples:**

<pre>
``` js
const count = records.length;
```
</pre>

``` js
const count = records.length;
```

<br/>

<pre>
``` csharp
Console.WriteLine("Hello, World!");
```
</pre>

``` csharp
Console.WriteLine("Hello, World!");
```

## Tables

Organize structured data with tables. Tables are especially useful for describing function parameters, object methods, and other data with a
clear name to description mapping.

- Place each table row on its own line.
- Separate table cells using the pipe character `|`.
- To use a pipe character within a table, you must escape with a backslash `\|`.
- The first two lines of a table set the column headers and the alignment of elements in the table.
- Use colons (`:`) when dividing the header and body of tables to specify column alignment (left, center, right).
- To start a new line, use the HTML break tag (`<br/>`) (works within a Wiki but not elsewhere).  
- Make sure to end each row with a CR or LF.
- You must enter a blank space before and after work item or pull request (PR) mentioned inside a table cell.

**Example:**

```markdown
| Heading 1 | Heading 2 | Heading 3 |  
|-----------|:-----------:|-----------:|  
| Cell A1 | Cell A2 | Cell A3 |  
| Cell B1 | Cell B2 | Cell B3<br/>second line of text |  
```

**Result:**  

| Heading 1 | Heading 2 | Heading 3 |  
|-----------|:---------:|-----------:|  
| Cell A1 | Cell A2 | Cell A3 |  
| Cell B1 | Cell B2 | Cell B3<br/>second line of text |  

## Lists

Use lists to organize related items. You can add ordered lists with numbers or unordered lists with just bullets. Ordered lists start with a number followed by a period for each list item. Unordered lists start with a `-`. 

Begin each list item on a new line. In a Markdown file or widget, enter two spaces before the line break to begin a new paragraph or enter two line breaks consecutively to begin a new paragraph.

### Ordered or numbered lists

**Example:**  
```markdown
1. First item.
1. Second item.
1. Third item.
```

**Result:**  
1. First item.
2. Second item.
3. Third item.

### Bulleted lists

**Example:**

```
- Item 1
- Item 2
- Item 3
```

**Result:**

- Item 1
- Item 2
- Item 3

### Nested lists

**Example:**  
```
1. First item.
   - Item 1
   - Item 2
   - Item 3
1. Second item.
   - Nested item 1
      - Further nested item 1
      - Further nested item 2
      - Further nested item 3
   - Nested item 2
   - Nested item 3
```

**Result:**  

1. First item.
    - Item 1
    - Item 2
    - Item 3
2. Second item.
    - Nested item 1
       - Further nested item 1
       - Further nested item 2
       - Further nested item 3 
    - Nested item 2
    - Nested item 3

<a id="link-work-items" />

## Links

In pull request comments and wikis, HTTP and HTTPS URLs automatically format as links. You can link to work items by entering the *#* key and a work item ID and then choosing the work item from the list.

Avoid auto suggestions for work items by prefixing *#* with a backslash (`\`). This action can be useful if you want to use *#* for color hex codes.

In Markdown files and widgets, you can set text hyperlinks for your URL using the standard Markdown link syntax:

```markdown
[Link Text](Link URL)
```

When you link to another Markdown page in the same Git or TFVC repository, the link target can be a relative path or an absolute path in the repository.  

**Supported links for Welcome pages:**

- Relative path: `[text to display](target.md)` 
- Absolute path in Git: `[text to display](/folder/target.md)`
- Absolute path in TFVC: `[text to display]($/project/folder/target.md)`
- URL: `[text to display](http://address.com)`

**Supported links for Markdown widget:**

<ul>
- URL: `[text to display](http://address.com)`  </br>
</ul>

**Supported links for Wiki:**  
<ul>
- Absolute path of Wiki pages: `[text to display](/parent-page/child-page)` </br>
- URL: `[text to display](http://address.com)`  </br>
</ul>

> [!NOTE]  
> - Links to documents on file shares using `file://` aren't supported on 2017.1 and later versions. This restriction has been implemented for security purposes.
> - For information on how to specify relative links from a Welcome page or Markdown widget, see [Source control relative links](#source-control-relative-links).

**Example:**  

```
[C# language reference](/dotnet/csharp/language-reference/)
```

**Result:**

[C# language reference](/dotnet/csharp/language-reference/)

<a id="relative-links">  </a>

### Source control relative links

Links to source control files get interpreted differently depending on whether you specify them in a Welcome page or a Markdown widget. The system interprets relative links as follows:

- **Welcome page:** relative to the root of the source control repository in which the welcome page exists
- **Markdown widget:**  relative to the team project collection URL base

For example:

| Welcome page  | Markdown widget equivalent  |  
|--------------------|-----------------------------------|  
| /BuildTemplates/AzureContinuousDeploy.11.xaml |/DefaultCollection/Fabrikam Fiber/_versionControl#path=$/Tfvc Welcome/BuildTemplates/AzureContinuousDeploy.11.xaml|  
| ./page-2.md |/DefaultCollection/Fabrikam Fiber/_versionControl#path=$/Tfvc Welcome/page-2.md |  

### Anchor links

Within Markdown files, anchor IDs are assigned to all headings when rendered as HTML. The ID is the heading text, with the spaces replaced by dashes (-) and all lower case. In general, the following conventions apply:

- Punctuation marks and leading white spaces within a file name are ignored
- Upper case letters convert to lower case letter
- Spaces between letters convert to dashes (-)

**Example:**

```
###Link to a heading in the page
```

<br/>

**Result:**

The syntax for an anchor link to a section...

<pre>
[Link to a heading in the page](#link-to-a-heading-in-the-page)
</pre>
<br/>
The ID is all lower case, and the link is case-sensitive, so be sure to use lower case, even though the heading itself uses upper case.

You can also reference headings within another Markdown file:

<pre>
[text to display](./target.md#heading-id)  
</pre>

<br/>
In wiki, you can also reference heading in another page:

<pre>
[text to display](/page-name#section-name)
</pre>

<a name="images"> </a>

## Images

To highlight issues or make things more interesting, you can add images and animated GIFs to the following aspects of your pull requests.

- Comments
- Markdown files
- Wiki pages

Use the following syntax to add an image: <div id="do_not_render"><pre>&#33;&#91;Text](URL)</pre></div> The text in the brackets describes the linked image and the URL points to the image location.

**Example:**

<pre>

![Illustration to use for new users](https://azurecomcdn.azureedge.net/cvt-779fa2985e70b1ef1c34d319b505f7b4417add09948df4c5b81db2a9bad966e5/images/page/services/devops/hero-images/index-hero.jpg)

</pre>

<br/>

**Result:**

The path to the image file can be a relative path or the absolute path in Git or TFVC, just like the path to another Markdown file in a link.  

- Relative path: `![Image alt text](./image.png)`  
- Absolute path in Git: `![Image alt text](/media/markdown-guidance/image.png)`  
- Absolute path in TFVC: `![Image alt text]($/project/folder/media/markdown-guidance/image.png)`  
- Resize image: `IMAGE_URL =WIDTHxHEIGHT`
  > [!NOTE]
  > Be sure to include a space before the equal sign.
  >- Example: `![Image alt text]($/project/folder/media/markdown-guidance/image.png =500x250)`
  >- It's also possible to specify only the WIDTH by leaving out the HEIGHT value: `IMAGE_URL =WIDTHx`

## Checklist or task list

Lightweight task lists are great ways to track progress on your to-dos as a pull request creator or reviewer in the PR description or in a wiki page. Select the Markdown toolbar to get started or apply the format to the selected text.

Use `[ ]` or `[x]` to support checklists. Precede the checklist with either `-<space>` or `1.<space>` (any numeral).

**Example - Apply the task list Markdown to a highlighted list**

> [!div class="mx-imgBorder"]  
> ![Screenshot of Markdown task list format in a highlighted list in a PR.](media/markdown-guidance/checklist-pr-apply.png)

To mark items as completed by checking the boxes, you need to manually edit the markdown and modify the syntax after adding a task list.

> [!div class="mx-imgBorder"]  
> ![Screenshot of checked boxes to mark items as completed.](media/markdown-guidance/checklist-pr-applied-check.png)

**Example - Format a list as a task list**

<pre>
- [ ] A  
- [ ] B  
- [ ] C  
- [x] A  
- [x] B  
- [x] C  

</pre>

<br/>

**Result:**  

<img src="media/markdown-guidance/markdown-checklists.png" alt="Checklists" /> 

> [!NOTE]
> A checklist within a table cell isn't supported.

## Emoji

In pull request comments and wiki pages, you can use emojis to add character and react to comments in the request. Enter what you're feeling surrounded by `:` characters to get a matching emoji in your text. We support the [full set of emojis](https://www.webpagefx.com/tools/emoji-cheat-sheet/).

**Example:**

<pre>
:smile:
:angry:
</pre>

<br/>

**Result:**  

![Emojis in Markdown](../../repos/git/media/pull-requests/emoji-markdown.png)

To escape emojis, enclose them using the \` character.

**Example:**

<pre>`:smile:` `:)` `:angry:`</pre>

**Result:**

 `:smile:` `:)` `:angry:`

## Ignore or escape Markdown syntax to enter specific or literal characters

:::row:::
   :::column span="1":::
      **Syntax**
   :::column-end::: 
   :::column span="1":::
      **Example/notes**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      To insert one of the following characters, prefix with a `&#92;`(backslash).  
      `&#92;`, backslash   
      `&#96;`, backtick  
      `&#95;`, underscore  
      `{}`, curly braces  
      `[]`, square brackets  
      `()`, parentheses  
      `#`, hash mark  
      `+`, plus sign 
      `-`, minus sign (hyphen) 
      `.`, period  
      `!`, exclamation mark 
      `*`, asterisk
   :::column-end::: 
   :::column span="1":::
      Some examples on inserting special characters:  
      Enter `&#92;&#92;` to get \   
      Enter `&#92;&#95;` to get &#95;   
      Enter `&#92;#` to get #  
      Enter `&#92;(` to get (  
      Enter `&#92;.` to get .  
      Enter `&#92;!` to get !  
      Enter `&#92;*` to get *  
   :::column-end:::
:::row-end:::

<a name="attach"></a>

## Attachments

In pull request comments and wiki pages, you can attach files to illustrate your point or to give more detailed reasoning behind your suggestions. To attach a file, drag and drop it into the comment field, or wiki page edit experience. You can also select the **paperclip** in the upper right of the comment box or from the format pane in your wiki page.

:::image type="content" source="media/markdown-guidance/attach_files.png" alt-text="Screenshot of Web portal, Pull Request, Attach files via drag and drop.":::   

If you have an image on your clipboard, you can paste it into the comment box or wiki page, and it renders directly into your comment or wiki page.

Attaching non-image files creates a link to the file in your comment. Update the description text between the brackets to change the text displayed in the link.
The attached image files render directly into your comment or wiki pages. Save or update your comment or wiki page with an attachment. Then, you can see the attached image and select links to download the attached files.

Attachments support the following file formats:

> [!div class="mx-tdCol2BreakAll"]
> |          Type          | File formats |
> |------|---------|
> | Code | CS (.cs), Extensible Markup Language (.xml), JavaScript Object Notation (.json), Hypertext Markup Language(.html, .htm), Layer (.lyr), Windows PowerShell script (.ps1), Roshal Archive (.rar), Remote Desktop Connection (.rdp), Structured Query Language (.sql) - **Note: Code attachments aren't permitted in PR comments**  |
> | Compressed files | ZIP (.zip) and GZIP (.gz) |
> | Documents | Markdown (.md), Microsoft Office Message (.msg), Microsoft Project (.mpp), Word (.doc and .docx), Excel (.xls, .xlsx and .csv), and Powerpoint (.ppt and .pptx), text files (.txt), and PDFs (.pdf) | 
> | Images | PNG (.png), GIF (.gif), JPEG (both .jpeg and .jpg), Icons (.ico) | 
> | Visio | VSD (.vsd and .vsdx)  |
> | Video | MOV (.mov), MP4 (.mp4) |

> [!NOTE]
> Not all file formats are supported within pull requests, such as Microsoft Office Message (.msg) files.

<a id="math-notation">  </a>
<a id="mathematical-notation">  </a>

## Mathematical notation and characters

We support both inline and block [KaTeX](https://khan.github.io/KaTeX/function-support.html) notation in wiki pages and pull requests. See the following supported elements:

- Symbols
- Greek letters
- Mathematical operators
- Powers and indices
- Fractions and binomials
- Other KaTeX supported elements

To include mathematical notation surround the mathematical notation with a `$` sign for inline and `$$` for block,  as shown in the following examples:

::: moniker range="tfs-2018"

> [!NOTE]  
> This feature is supported within Wiki pages and pull requests for TFS 2018.2 or later versions.

::: moniker-end

### Example: Greek characters

```KaTeX
$
\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \kappa, \lambda, \mu, \nu, \omicron, \pi, \rho, \sigma, \tau, \upsilon, \phi, ...
$  


$\Gamma,  \Delta,  \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$
```

**Result:**
> [!div class="mx-imgBorder"]
> ![Greek letters](media/markdown-guidance/mathematical-notation-greek-characters.png)

### Example: Algebraic notation

```KaTeX
Area of a circle is $\pi r^2$

And, the area of a triangle is:

$$
A_{triangle}=\frac{1}{2}({b}\cdot{h})
$$
```

**Result:**
> [!div class="mx-imgBorder"]
> ![Algebraic notation](media/markdown-guidance/mathematical-notation-algebra.png)

### Example: Sums and Integrals

```KaTeX
$$
\sum_{i=1}^{10} t_i
$$


$$
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$     
```

**Result:**
> [!div class="mx-imgBorder"]
> ![Sums and Integrals.](media/markdown-guidance/mathematical-notation-sums-integrals.png)

## Related articles  

- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md)
- [README files](../../repos/git/create-a-readme.md)
- [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Dashboards](../../report/dashboards/dashboards.md)
- [Widget catalog](../../report/dashboards/widget-catalog.md)
- [Add and edit Wiki pages](add-edit-wiki.md)
