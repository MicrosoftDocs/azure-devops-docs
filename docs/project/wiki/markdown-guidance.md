---
title: Markdown Syntax for Files, Widgets, Wikis
titleSuffix: Azure DevOps  
ms.custom: wiki, devdivchpfy22
description: Use Markdown syntax to format content as tables, lists, headings, links, math notation, and more. Share information effectively in pull requests, README files, dashboards, and wikis in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.assetid: 43D2156E-2E20-42B8-B816-43E95CB479C5 
ai-usage: ai-assisted 
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: concept-article
monikerRange: '<= azure-devops'
ms.date: 06/18/2025
#customer intent: As an Azure DevOps developer, I want to use Markdown to create tables, lists, headings, and more, so I can share my project information in pull requests, README files, dashboards, and wikis.
---

# Use Markdown in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [version-selector](../../includes/version-selector.md)]

This article describes the basic syntax for using Markdown (_.md_) format with Azure DevOps features, including [Wiki pages](#markdown-in-an-azure-devops-wiki). Markdown syntax lets you add special formatting to your page content, such as headings, lists, tables, and images. Use Markdown to format your README files, dashboards, pull request content, and so on.

You have two formatting options: common [Markdown conventions](https://daringfireball.net/projects/markdown/syntax) and [Markdown extensions for GitHub](https://docs.github.com/get-started/writing-on-github).

## Support for Azure DevOps features

Markdown syntax covers a wide range of formatting options, such as content headers, reference links, text emphasis like bold, and file attachments. Not all Markdown syntax is available for all features in Azure DevOps. Some of the significant features that support Markdown syntax include:

- Criteria for the [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done) for project milestones
- Information like team goals and metrics with the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md)
- [Pull requests](../../repos/git/pull-requests.md) for project files in a Git repository
- [README files](../../repos/git/create-a-readme.md) in a Git repo to support contributors
- [Wiki files](add-edit-wiki.md) for page content in a team project wiki

> [!NOTE]
> Markdown in Azure DevOps doesn't support JavaScript or iframes. For example, you can't embed interactive elements like countdown timers directly.

The following table outlines the feature support for different Markdown elements and provides links to the syntax sections in this article. The table uses the notation Definition of **Done**, Markdown **Widget**, Pull requests (**PR**), **README** files, and **Wiki** files.

| Markdown type                           | Done | Widget | PR  | README | Wiki |
|-----------------------------------------|:----:|:------:|:---:|:------:|:----:|
| [Headers](#headers)                     |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Paragraphs and line breaks](#breaks)   |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Block quotes](#block-quotes)             |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Horizontal rules](#rules)              |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Emphasis](#emphasis)                   |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Code highlighting](#code)              |      |        | ✔️  |  ✔️   |  ✔️ |
| [Suggest change](#suggest-change)       |      |        | ✔️  |        |     |
| [Tables](#tables)                       |      |   ✔️  |  ✔️  |  ✔️   |  ✔️ |
| [Lists](#lists)                         |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Links](#links)                         |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Images](#images)                       |      |   ✔️  |  ✔️  |  ✔️   |  ✔️ |
| [Checklist or task list](#checklists)   |      |        | ✔️  |       |  ✔️ |
| [Emojis](#emoji-reactions)              |      |        | ✔️  |       |  ✔️ |
| [Ignore or escape Markdown](#ignore)    |  ✔️ |   ✔️   | ✔️  |  ✔️   |  ✔️ |
| [Attachments](#attachments)             |      |        | ✔️  |       |  ✔️ |
| [Mathematical notation](#math-notation) |      |        | ✔️  |       |  ✔️ |

## Headers

Structure your content by using Markdown headers. Headers help to separate long portions of page content into sections that are easier to read. You can add headers in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

To define a top-level header, start a line with a single hash mark `#` followed by the heading text, such as `# Get Started on the Project`. Organize your remarks with subheaders by starting the line with more than one hash mark like `## Request Permissions` or `### Send Feedback`. You can use up to six hash marks to create size levels of headers.

### Example: Create headers in Markdown

The following Markdown creates a top-level header (H1) and four levels of subheaders (H2, H3, H4, and H5):

```md
# This is a top-level (H1) header
## This is a subheader (H2)
### This is a lower subheader (H3)
#### This is an H4 header
##### This is an H5 header
```

The following image shows the published view of the Markdown:

:::image type="content" source="media/markdown-guidance/markdown-headers.png" alt-text="Screenshot that shows a published view of the Markdown syntax for five levels of headers.":::

<a id="breaks"></a>

## Paragraphs and line breaks

Make your text easier to read by breaking long portions into smaller paragraphs or insert line breaks to create spaces between lines of text.  

You can add paragraphs and line breaks in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

### Example: Add breaks in Markdown and pull requests

Comments in a pull request accept Markdown, such as **Bold** and _Italic_ style for text. You can also use the **Enter** key to insert a line break to start new text on the next line or add spacing between lines.

In the following Markdown, the author uses the **Enter** key to start the second sentence on a new line: 

```md
_Markdown_ lets you separate long lines of text by using the **Enter** key in a pull request comment. <!-- Select Enter -->
Select **Enter** once to start text on a new line. <!-- Select Enter twice -->
Select **Enter** twice to insert a blank line between lines of text.
```

The following image shows the published view of the Markdown for spacing in a pull request comment:

:::image type="content" source="media/markdown-guidance/markdown-breaks.png" alt-text="Screenshot that shows a published view of the Markdown syntax for line and paragraph breaks.":::

### Example: Add breaks in Markdown files or widgets

In a Markdown file or Markdown widget, you can separate lines of text to create new paragraphs. Add two spaces (**Space** key) before the line break, and select **Enter** to start a new paragraph.

```md
Add two **Space** characters before the end of the line and then select **Enter**. <!-- Select Space twice, Selet Enter -->
The next paragraph starts on a new line. The two paragraphs are separated by a blank line.
```

The following image shows the published view of the Markdown for spacing in a widget:

:::image type="content" source="media/markdown-guidance/markdown-widget-breaks.png" alt-text="Screenshot that shows a published view of the Markdown syntax for the Enter and Space keys.":::

## Block quotes

Quote comments or text to set the context for your new comment or text. The quoted text displays indented from the left margin with a vertical line along the quoted section.

You can add block quotes in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

To quote a single line of text or a paragraph block, insert a right angle bracket `>` before the first text.

To creat a nested quote, insert two or more brackets before the text. The nested quote is indented further from the left margin with double vertical lines along the quoted section. 

### Example: Quote text by using brackets

```md
> Insert a bracket ">" before the text to quote the line of text.

This text references the quoted sentence.

> To quote a paragraph, insert a bracket ">" before the first text. The other lines in the paragraph are also included in the block quote. Notice the entire paragraph is indented from the left margin and highlighted with a vertical line.

This text references the quoted paragraph.

>> Insert two or more brackets ">>" before the text to create a nested quote.

>>> Nested quotes can also be multiple lines of text. Notice the nested quote text is indented further from the left margin and a vertical line is drawn for each level of bracket you insert.

This text references the nested block quotes.
```

The following image shows the published view of the Markdown for quoted text:

:::image type="content" source="media/markdown-guidance/markdown-block-quotes.png" alt-text="Screenshot that shows a published view of the Markdown syntax for quoting blocks of text.":::

<a id="rules"></a>

## Horizontal rules

Underline or separate content and page sections with horizontal rules. You can add separators in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

To add a horizontal rule, enter a blank line and then another line with three hyphens (dashes) `---`.

### Example: Insert horizontal separators

The following Markdown creates two horizontal rules:

```md
Text **above** a horizontal rule
<!-- Blank -->
---
Text **between** horizontal rules
<!-- Blank -->
---
Text **under** a horizontal rule
```

The following image shows the published view of the Markdown for horizontal rules: 

:::image type="content" source="media/markdown-guidance/markdown-horizontal-rules.png" alt-text="Screenshot that shows a published view of the Markdown syntax for horizontal rules.":::

<a id="emphasis"></a>

## Emphasis (bold, italics, strikethrough)

Markdown provides several style options for emphasizing text:

| Style             | Example              | Markdown |
|-------------------|----------------------|----------|
| **Italics**       | _Italicized text_    | Enclose text within single asterisk `*` or underscore `_` characters. |
| **Bold** (Strong) | __Bolded text__      | Enclose text within double asterisk `**` or underscore `__` characters. |
| **Strikethrough** | ~~Crossed out text~~ | Enclose text within double tilde `~~` characters. |

You can combine these styles to apply emphasis to the text. The emphasis styles are available in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

> [!NOTE]  
> There's no Markdown syntax for underlining text. In a wiki page, you can underline text by using the HTML underline `<u>` element.

### Example: Emphasize text

The following Markdown shows how to emphasize text by using different styles and combining styles:

```md
**Italics** highlights text in a larger block like _new terminology_.

**Bold** (strong) adds presence to text, such as **Important!**

**Strikethrough** is useful for corrections like "Send feedback ~~to the team~~.

Combine styles for other effects, such as ~~__Content removed__~~ and **_Milestones_**.
```

The following image shows the published view of the Markdown for text emphasis styles: 

:::image type="content" source="media/markdown-guidance/markdown-emphasis-styles.png" alt-text="Screenshot that shows a published view of the Markdown syntax for text emphasis styles.":::

<a id="code"></a>

## Code highlighting

Highlight text blocks or inline text as code by using code highlights. You can add code highlighting in pull requests, Readme files, and wiki files.

To format a text block as code, enclose the block within three backtick (` ``` `) characters. The backticks that start and end the section must be on a separate line from the code block to highlight.

You can also format a portion of text within a larger text block as an inline code segment. For this style, enclose the inline code within single backticks. The backticks are inline with the text and not on separate lines.

Code highlighting entered in the Markdown widget renders code as plain preformatted text.

### Example: Highlight code block in Markdown widget

The following example shows how to highlight a text block as code in the Markdown widget:

```bash
<!-- ```  Three backticks to start block " -->
sudo npm install vsoagent-installer -g
<!-- ```  Three backticks to end block -->
``` 

The following example shows the published view of the Markdown for a text block highlighted as code:

```bash
sudo npm install vsoagent-installer -g
```

### Example: Highlight inline code in Markdown widget

The following example shows how to highlight a portion of text as an inline code segment in the Markdown widget: 

```md
To install the Microsoft Cross Platform Build and Release Agent, run the following: <!-- ` - Single backtick --> $ sudo npm install vsoagent-installer -g <!-- ` - Single backtick -->
``` 

The following image shows the published view of the Markdown for a portion of text highlighted as an inline code segment:

:::image type="content" source="media/markdown-guidance/markdown-widget-inline-code.png" alt-text="Screenshot that shows a published view of the Markdown syntax for a portion of text highlighted as an inline code segment.":::

### Example: Convert text to code, identify code language

There's an alternate method for converting a text block into code. When a line of text in the Markdown starts with four spaces in the left margin, the text automatically converts to a code block. The following example demonstrates this behavior:

```md
    This article is a Markdown file (_.md_). This line of text automatically formats as code because the line starts with four spaces in the left margin.
```

The preferred approach is to enclose the text within three backticks so you can specify the language identifier. The identifier applies syntax highlighting to the code according to the conventions of the specified language. Identifier labels are available for most programming languages, such as JavaScript (`js`), C# (`csharp`), and Markdown (`md`). For the list of supported languages, see the [highlightjs](https://github.com/highlightjs/highlight.js/tree/stable-11/src/languages) GitHub repository.

The following examples show how to identify a text block as JavaScript or C#. You add the language identifier label after the first three backticks, as in ` ```md `.

**JavaScript**

```Code Snippet
<!-- ```js       - Three backticks and identifier 'js' -->
const count = records.length;
<!-- ```         - Three backticks -->
``` 

Here's the published view of the JavaScript code:

```js
const count = records.length;
```

**C#**

```Code Snippet
<!-- ```csharp   - Three backticks and identifier 'csharp' -->
Console.WriteLine("Hello, World!");
<!-- ```         - Three backticks -->
```

Here's the published view of the C# code:

```csharp
Console.WriteLine("Hello, World!");
```

## Suggest change

GitHub pull requests support the **Comment** feature where contributors can provide input and suggest changes. You can add a comment for a specific line or multiple lines in a file. The pull request author can apply the suggested change in a comment by selecting **Apply Change**. This action commits the change to the pull request and starts a build.

If you add a comment that includes code highlighting in the Markdown widget, the code renders in a differences format. The changes in the modified line are annotated to show the differences. The minus symbol `-` indicates removed content and the plus symbol `+` highlights new content.

### Example: Suggest changes in a pull request comment

The following example shows how to suggest code changes on a pull request in the Markdown widget. In this scenario, the code block uses the identifier `suggestion`:

```
<!-- ```suggestion   - Three backticks and identifier 'suggestion' -->
  for i in range(A, B+100, C):
<!-- ```         - Three backticks -->
```

The following image shows the differences view with the comment suggestion:

:::image type="content" source="media/markdown-guidance/suggestion-snapshot.png" alt-text="Screenshot that shows an example of a suggested change for code in a pull request comment."::: 

For more information, see [Suggest changes in comments](../../repos/git/review-pull-requests.md?tabs=browser#suggest-changes-in-comments).

## Tables

Organize structured data with Markdown tables. You can add tables in the Markdown widget, pull requests, Readme files, and wiki files. Tables are especially useful for describing function parameters, object methods, and other data with a clear name-to-description mapping. 

Here are some points about working with tables in Markdown:

- Create each row on a separate line and end each row with a carriage return (CR) or line feed (LF).
- Create columns with hyphens `-` and the pipe symbol `|`, as in `|---|---|---|`.
- Define the column headers in the first row, as in `| First | Middle | Last |`.
- Define the column alignment (left, center, right) by using colons `:` in the second row, as in `|:--|:--:|--:|`.
- Escape the pipe symbol with a backslash `\|` when used in table text, as in `| Describe the pipe \| symbol. |`
- Add line breaks within a cell by using the HTML break tag `<br/>`. This approach works within a wiki but not elsewhere.  
- Add a blank space before and after a work item or pull request mentioned in table text.

### Example: Create a table

The following example shows how to create a table about with three columns and five rows in Markdown:

```md
| Feature | Prerelease | Release target |  
|:---|:---:|---:|
| Calculator | No | 10/27/2025 |
| Graphs | Yes | 8/18/2025 |
| Mail | No | 2/16/2025 |
| Tables | Yes | 10/27/2025 |
| Search | No | 1/5/2026 |
```

Here's the published view of the Markdown table:

| Feature | Prerelease | Release target |  
|:---|:---:|---:|
| Calculator | No | 10/27/2025 |
| Graphs | Yes | 8/18/2025 |
| Mail | No | 2/16/2025 |
| Tables | Yes | 10/27/2025 |
| Search | No | 1/5/2026 |

## Lists

Organize related items with different types of lists. Create an ordered list to show the precedence of items or items in a sequence. Create lists of related but unordered items by using bullet points. You can add list styles in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

Here are some points about working with lists in Markdown:

- Specify each list item on a separate line.
- Start each item in an ordered list with a number followed by a period, as in `1. First item 2. Next item.`
  You can also start each item with `1.` and let the publishing system determine the numbering for you.
- Start each item in an unordered list with a hyphen `-` or asterisk `*`, as in `- First point - Next point`.
- Check the spacing before and after lists in a Markdown file or widget:
   - For the initial list, add a blank line before and after the list.
   - For nested lists, use correct indentation. No extra before and after line breaks are needed.

### Example: Create a numbered (ordered) list

The following example shows how to create a numbered list for items in a sequence by using Markdown:

```md
<!-- Blank -->
1. First step in the procedure.
1. Second step.
1. Third step.
<!-- Blank -->
```

Here's the published view of the Markdown ordered list:

1. First step in the procedure.
1. Second step.
1. Third step.

### Example: Create a bullet (unordered) list

The following example shows how to create an unordered list of related items by using Markdown:

```md
<!-- Blank -->
- First item in the list.
- Next item.
- Last item.
<!-- Blank -->
```

Here's the published view of the Markdown unordered list:

- First item in the list.
- Next item.
- Last item.

### Example: Nested lists

You can also create lists within lists and mix the styles.

The following example shows how to create a numbered list that has nested bullet lists in Markdown:

```md
<!-- Blank -->
1. First step in the procedure.
   - First item in a nested list.
   - Next item.
   - Last item.
1. Second step.
   - First item in a nested list.
      - First item in a subnested list.
      - Next item.
   - Last item.
1. Third step.
   1. First substep.
   1. Next substep.
   1. Last substep.
<!-- Blank -->
```

Here's the published view of the list with nested lists:

1. First step in the procedure.
   - First item in a nested list.
   - Next item.
   - Last item.
1. Second step.
   - First item in a nested list.
      - First item in a subnested list.
      - Next item.
   - Last item.
1. Third step.
   1. First substep.
   1. Next substep.
   1. Last substep.

<a id="link-work-items"></a>

## Links

Link to work items by entering the hash mark `#` followed by a work item ID, and then select the work item from the list. You can add different types of links in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

Here are some points about working with links in Markdown:

- The standard Markdown syntax for a link is `[Link display text](Link path)`.
- In pull request comments and wikis, URLs that start with HTTP or HTTPS automatically format as links.
- If you use the hash mark `#` in other ways like color hex codes, you can avoid auto suggestions for work items by prefixing the hash mark `#` with a backslash `\`.
- In Markdown files and widgets, you can create text hyperlinks for a URL by using the standard Markdown link syntax. The `Link path` can be relative or absolute.

   The following example shows how to specify a relative link in Markdown, where the text renders as a hyperlink:

   ```md
   For more information, see the [C# language reference](/dotnet/csharp/language-reference/).
   ```

   Here's the published view of the link:

   For more information, see the [C# language reference](/dotnet/csharp/language-reference/).

### Supported links

When you link to another Markdown page in the same Git or Team Foundation Version Control (TFVC) repository, you can specify the link target as a relative or absolute path.

> [!NOTE]  
> Links to documents on file shares (`file://...`) aren't supported for security purposes.

The following table lists the types of links supported for different Markdown scenarios.

#### Example: Welcome page relative links

Here are some examples of relative links in the Welcome page for a wiki:

- Relative path: `[Display text](target.md)` 

- Absolute path in Git: `[Display text](/folder/target.md)`

- Absolute path in TFVC: `[Display text]($/project/folder/target.md)`

- URL: `[Display text](http://address.com)`

#### Example: Markdown widget relative links

The following example shows a relative link in a Markdown widget:

- URL: `[Display text](http://address.com)`

#### Example: Wiki pages relative links

Here are some examples of relative links in a wiki page:

- Absolute path of Wiki pages: `[Display text](/parent-page/child-page)`

- URL: `[Display text](http://address.com)`

<a id="relative-links"></a>

### Source control relative links

Relative links to source control files are interpreted differently in a Welcome page versus a Markdown widget:

#### Example: Welcome page relative links

Relative links in a Welcome page are relative to the root of the source control depository where the Welcome page exists. Here are some examples:

- _/BuildTemplates/AzureContinuousDeploy.11.xaml_
- _./page-2.md_

#### Example: Markdown widget relative links

Relative links in a Markdown widget are relative to the team project collection URL base. Here are some examples:

- _/DefaultCollection/Fabrikam/versionControl#path=$/TFVC-Welcome/BuildTemplates/AzureContinuousDeploy.11.xaml_
- _/DefaultCollection/Fabrikam/versionControl#path=$/TFVC-Welcome/page-2.md_ 

### Anchor links

When a Markdown file renders as HTML, the system assigns an anchor ID to each header on the page. The ID is a converted form of the header text. The system applies the following changes to create the ID:

- Replace spaces in the header text with hyphens `-`
- Change uppercase letters to lowercase
- Ignore (don't include) most special characters, such as `#`, `@`, `$` 
- Ignore (don't include) most punctuation, such as `:`, `"`, `?`

You use the hash mark `#` to link to the header in the document, as in `[Display text](#<header-anchor>)`.

The following example shows a heading and a link its anchor ID:

```md
#### Team #1 : Release Wiki!

Welcome to the Release wiki. For more information, [Visit the Project Wiki](#team-1--release-wiki).
```

Here's the published view:

#### Team #1 : Release Wiki!

Welcome to the Release wiki. For more information, [Visit the Project Wiki](#team-1--release-wiki).

You can also link to a heading in another Markdown file by specifying the file name with the anchor ID in the link:

```md
[Set up a project wiki](about-readme-wiki.md#set-up-a-project-wiki).
```

A wiki page is also a Markdown file. You can reference a heading in one page in the wiki from another page:

```md
Welcome to the Wiki!

- [Get Started](/get-started-page)
- [Contribute content](/get-started-page#contribute)
- [Send Feedback](/contact-page#send-feedback)
```

<a name="images"></a>

## Images

Demonstrate concepts and add visual interest by using images and animated GIFs in your content. You can add images in the Markdown widget, pull requests, Readme files, and wiki files.

The standard Markdown syntax for an image or animated GIF is `![Image alt text](Image path)`. The syntax is similar to the syntax for a link, but the line begins with an exclamation point `!` symbol.

The `Image alt text` value describes the image. The alt text value displays when the user hovers over the image in the published view. The `Image path` identifies the image location.

The following example adds an illustration to a Markdown file:

```md
![Illustration to use for new users](https://azurecomcdn.azureedge.net/cvt-779fa2985e70b1ef1c34d319b505f7b4417add09948df4c5b81db2a9bad966e5/images/page/services/devops/hero-images/index-hero.jpg)
```

### Image path

The path to the image file can be a relative path or the absolute path in Git or TFVC, just like the path to another Markdown file in a link.  

- Relative path: `![Image alt text](./image.png)`  
- Absolute path in Git: `![Image alt text](/media/markdown-guidance/image.png)`  
- Absolute path in TFVC: `![Image alt text]($/project/folder/media/markdown-guidance/image.png)`

### Image size

You can set the image size with the `Image-path =Image-widthxImage-height` syntax:

- The letter `x` represents the `by` portion in the calculation expression "width-by-height."
- Don't add a space before or after the letter `x`.
- Do include a space before the equal `=` sign.
- If you prefer, you can specify the `Image-width` only, as in `Image-path =Image-widthx`. Notice that you still specify the letter `x`.

The following example shows the Markdown syntax for an image where you specify a width of 500 and a height of 250:

```md
![Image alt text](./image.png =500x250)
```

<a id="checklists"></a>

## Checklist or task list

Track the progress of your assignments and action items with lightweight task lists. You can add checklists or task lists in pull requests and wiki files. This feature is useful in the pull request description to track input from reviewers or in a wiki project page to track task status.

### Example: Create checklist in Markdown

You can create a checklist directly in the Markdown:

- Use empty square brackets `[<space>]` to create a new task.
- Show a task as completed by including the letter `x` inside the square brackets `[x]`.
- Precede each task with a hyphen and space `-<space>[<space>]` or a number and space `1.<space>[<space>]`. You can use any numeral.
- Don't use a checklist inside a Markdown table.

The following example creates a checklist with four items, where the first item is marked as completed:

```md
- [x] Project plan
- [ ] Draft 1 code
- [ ] Draft 2 code
- [ ] Test plan
```

Here's the published view of the checklist:

:::image type="content" source="media/markdown-guidance/markdown-checklists.png" alt-text="Screenshot that shows a checklist where the first item is marked as completed."::: 

After the checklist is published, users can mark an item as completed by selecting the item checkbox in the list. 

### Example: Apply task list Markdown to selected text

You can also select existing text in the web portal and use actions on the Markdown toolbar to apply the checklist format. After you add a checklist or task in this manner, you can edit the list or task in the Markdown.

The following image shows how to apply the **Task List** style on the Markdown toolbar to the selected text:

:::image type="content" source="media/markdown-guidance/checklist-pr-apply.png" alt-text="Screenshot that shows how to apply the Task List style on the Markdown toolbar to selected text in a pull request."::: 

A task is marked as completed by checking the task box in the list:

:::image type="content" source="media/markdown-guidance/checklist-pr-applied-check.png" alt-text="Screenshot that shows tasks marked as completed in the task list.":::

## Emoji reactions

Add emoji reactions in pull requests and wiki files. You can use emoji reactions to add character and react to comments in the request. 

Enter the name of an emotion or expression like `smile` and enclose the text within colon `:` characters. In the published view of the Markdown, your input is converted to the corresponding [emoji graphic](https://www.webpagefx.com/tools/emoji-cheat-sheet/). Markdown in Azure DevOps supports most emoji graphics.

### Example: Add emoji reactions in a pull request

The following example shows how to add emoji reactions with Markdown in a pull request comment:

```md
The code review received :+1::+1: and the team is :smile:
```

Here's the published view of the emoji reactions:

:::image type="content" source="media/markdown-guidance/markdown-emoji-pull-request.png" alt-text="Screenshot that shows the published view of emojis in a pull request comment."::: 

### Example: Escape emoji syntax in Markdown

The following example shows how to escape emoji syntax with the backslash `\` character in Markdown:

```md
Markdown syntax for some emoji reactions:
- **Happy** \:smile:
- **Angry** \:angry:
- **Sad** \:cry:
```

Here's the published view of the Markdown that shows the emoji syntax:

:::image type="content" source="media/markdown-guidance/markdown-escape-emoji.png" alt-text="Screenshot that shows how to escape emoji syntax in Markdown by using the backslash '\' character."::: 

In a pull request comment, you need two backslashes `\\` to escape the emoji syntax conversion.

<a id="ignore"></a>

## Special characters as literal text

Publish special characters as literal text by using the backslash `\` as an escape character in the Markdown. The backslash causes the publishing system to bypass any interpretation and conversion process for the special character. The special character is shown as literal text in the published view.

You can use ignore and escape syntax in a [Definition of Done (board)](../../boards/boards/add-columns.md#definition-of-done), the [Markdown widget](../../report/dashboards/add-markdown-to-dashboard.md), pull requests, Readme files, and wiki files.

### Example: Publish special characters

The Markdown syntax \`Enclose text in backticks\` has the published view `Enclose text in backticks`. The publishing system applies the `inline code` format to the text within the backticks (\`) and it doesn't publish the backticks.

If you prefix the backtick (\`) with a backslash (\\), the format of the text  within the backticks doesn't change and the backticks are published. This behavior is available for most special characters, including parentheses `()`, square brackets `[]]`, underscore `_`, hyphen `-`, hash mark `#` asterisk `*`, ``` backtick \` ```, and the backslash `\` itself.

The following Markdown uses the backslash `\` character to publish special characters as literal text:

```md
\\\ Code comment

Show the **\_\_**underscores**\_\_**

\# Code comment and not a **Heading** 

**\(** Include the **parentheses \)**

Show the __\*__asterisks__\*__ and don't change to *italics*
```

Here's the published view of the Markdown:

\\\ Code comment

Show the **\_\_**underscores**\_\_**

\# Code comment and not a **Heading** 

**\(** Include the **parentheses \)**

Show the __\*__asterisks__\*__ and don't change to *italics*

> [!NOTE]
> For some Markdown, you can enter the HTML code `&#92;` for the backslash rather than the character symbol `\`.

<a name="attach"></a>

## Attachments

Attach files in pull request comments and wiki pages. Attachments can help illustrate your point or provide details about your suggestions. Attachments support the following file formats:

:::row:::
:::column span="1":::
**Attachment type**
:::column-end:::
:::column span="2":::
**File formats**
:::column-end:::
:::row-end:::

:::row:::
:::column span="1":::
**Code**
:::column-end:::
:::column span="2":::
C# (_.cs_), Extensible Markup Language (_.xml_), JavaScript Object Notation (_.json_), Hypertext Markup Language (_.html_, _.htm_), Layer (_.lyr_), Windows PowerShell script (_.ps1_), Roshal Archive (_.rar_), Remote Desktop Connection (_.rdp_), Structured Query Language (_.sql_)

**Note**: Code attachments aren't supported in pull request comments.
:::column-end:::
:::row-end:::
:::row:::
:::column span="1":::
**Compressed files**
:::column-end:::
:::column span="2":::
ZIP (_.zip_), GZIP (_.gz_)
:::column-end:::
:::row-end:::
:::row:::
:::column span="1":::
**Documents**
:::column-end:::
:::column span="2":::
Markdown (_.md_), Microsoft Office Message (_.msg_), Microsoft Project (_.mpp_), Word (_.doc_, _.docx_), Excel (_.xls_, _.xlsx_, _.csv_), PowerPoint (_.ppt_, _.pptx_), Plain text (_.txt_), Portable Document Format (_.pdf_)
:::column-end:::
:::row-end:::
:::row:::
:::column span="1":::
**Images**
:::column-end:::
:::column span="2":::
PNG (_.png_), GIF (_.gif_), JPEG (_.jpeg_, _.jpg_), Icons (_.ico_)
:::column-end:::
:::row-end:::
:::row:::
:::column span="1":::
**Visio**
:::column-end:::
:::column span="2":::
VSD (_.vsd_, _.vsdx_)
:::column-end:::
:::row-end:::
:::row:::
:::column span="1":::
**Video**
:::column-end:::
:::column span="2":::
MOV (_.mov_), MP4 (_.mp4_)
:::column-end:::
:::row-end:::

> [!NOTE]
> Not all file formats are supported as attachments in pull request comments, such as Microsoft Office Message (_.msg_) files.

### Attach images or files

There are several ways you can attach an image or file in a pull request **Comment** box or on a wiki page in the **Edit** pane:

- Drag and drop a file into the comment or onto the wiki page.
- Paste an image on your clipboard into the comment or onto the wiki page. The image renders directly in the comment or on the wiki page.
- Select the **Attach** (paperclip) icon in the comment or in the **Format** pane in your wiki page and choose the file to attach:

   :::image type="content" source="media/markdown-guidance/attach-files.png" alt-text="Screenshot that shows how to select the paperclip icon to attach a file onto a wiki page.":::   

When you attach a nonimage file, the system creates a link to the file in the comment or on the wiki page. You can change the link display text within the square brackets, as in `[Updated link display text](LINK URL)`. When you publish the page or comment, the user can select the link to access the attachment.

<a id="math-notation"></a>

## Mathematical notation and characters

You can use mathematical notation and characters in pull request comments and wiki files. Both inline and block [KaTeX](https://khan.github.io/KaTeX/function-support.html) notation are supported, which includes the following elements:

- Symbols
- Greek letters
- Mathematical operators
- Powers and indices
- Fractions and binomials
- Other KaTeX supported elements

In a Markdown file, mathematical notation is enclosed within dollar `$` signs. To create an expression inline with other text, enclose the notation with single dollar signs, `$ A + B = C $`. For a block expression, begin and end the block with two dollar signs, `$$ A = 1 \ B = 2 \ C = A + B $$`. 

### Example: List Greek characters

The following example lists Greek characters used in mathematical notation by adding a code snippet in the Markdown file. Notice that the language identifier for the snippet is `KaTeX` and not Markdown `md`:

```KaTeX
$
\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \kappa, \lambda, \mu, \nu, \omicron, \pi, \rho, \sigma, \tau, \upsilon, \phi, ...
$  

$\Gamma,  \Delta,  \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$
```

Here's the published view of the Greek characters:

:::image type="content" source="media/markdown-guidance/mathematical-notation-greek-characters.png" alt-text="Screenshot that shows the published view of the KaTex code snippet that lists Greek characters used in mathematical notation.":::

### Example: Use Algebraic notation

The following example uses an inline notation and an algebraic block expression:

```KaTeX
Area of a circle is $\pi r^2$

And, the area of a triangle is:

$$
A_{triangle}=\frac{1}{2}({b}\cdot{h})
$$
```

Here's the published view of the notation in the Markdown file:

:::image type="content" source="media/markdown-guidance/mathematical-notation-algebra.png" alt-text="Screenshot that shows the published view of the KaTex code snippet that includes inline notation and an algebraic block expression.":::

### Example: Show sums and integrals

The following example uses two block expressions to calculate sums and integrals:

```KaTeX
$$
\sum_{i=1}^{10} t_i
$$

$$
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$     
```

Here's the published view of the expressions in the Markdown file:

:::image type="content" source="media/markdown-guidance/mathematical-notation-sums-integrals.png" alt-text="Screenshot that shows the published view of the KaTex code snippet that uses two block expressions to calculate sums and integrals.":::

## Markdown in an Azure DevOps wiki

There are many ways you can use Markdown to enhance your Azure DevOps wiki. The following sections provide syntax examples for various tasks:

- Add Mermaid diagrams like sequences, flowcharts, and user journeys
- Create a table of contents (TOC) for pages and subpages
- Configure collapsible page sections
- Embed videos and Azure Boards query results
- Link to work items with the hash mark `#`
- Use `@<alias>` mentions for users and groups
- Include HTML elements like `<font>` for rich text 
- Check the page visit count

The availability of these features depends on your version of Azure DevOps.

::: moniker range=">= azure-devops-2022"

### Work with Mermaid diagrams

Mermaid lets you create diagrams and visualizations by using text and code. The Azure DevOps wiki supports the following Mermaid diagram types:

- [Sequence diagrams](https://mermaid.js.org/syntax/sequenceDiagram.html)
- [Gantt charts](https://mermaid.js.org/syntax/gantt.html)
- [Flowcharts](https://mermaid.js.org/syntax/flowchart.html)
- [Class diagram](https://mermaid.js.org/syntax/classDiagram.html)
- [State diagram](https://mermaid.js.org/syntax/stateDiagram.html)
- [User Journey](https://mermaid.js.org/syntax/userJourney.html)
- [Pie chart](https://mermaid.js.org/syntax/pie.html)
- [Requirements diagram](https://mermaid.js.org/syntax/requirementDiagram.html)

For more information, see the [Mermaid release notes](https://github.com/mermaid-js/mermaid/releases).

#### Limitations

When you work with Mermaid diagram in Azure DevOps, keep in mind the following limitations:

- Azure DevOps provides **limited syntax support** for the Mermaid diagram types. Unsupported syntax includes most HTML tags, Font Awesome, `flowchart` syntax (use `graph` element instead), LongArrow `---->`, and more.

- Internet Explorer doesn't support Mermaid. If you use Mermaid diagrams in your wiki, the diagrams don't render in Internet Explorer.

#### Example: Add Mermaid diagram to wiki page

To add a Mermaid diagram to a wiki page, start and end the notation with three colons `:`. Specify the `mermaid` keyword, the diagram type, such as `sequenceDiagram`, and provide the information to illustrate. The information to diagram is specified as an indented section in the syntax.

The following example shows how to add a Mermaid diagram to a wiki page:

```md
::: mermaid
<diagram type>
   <diagam information>
:::
```

#### Example: Sequence diagram

A sequence diagram (type `sequenceDiagram`) is an interaction illustration that shows how processes operate with one another and in which order.

The following example shows how to add a sequence diagram to a wiki page:

```md
::: mermaid
sequenceDiagram
    Christie->>Josh: Hello Josh, how are you?
    Josh-->>Christie: Great!
    Christie->>Josh: See you later!
:::
```

Here's the published view of the sequence diagram:

:::image type="content" source="media/wiki/wiki-mermaid-sequence-diagram.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a sequence diagram and a preview of the published view." lightbox="media/wiki/wiki-mermaid-sequence-diagram.png":::

#### Example: Gantt chart

A Gantt chart (type `gantt`) records each scheduled task as one continuous bar that extends from left to right. The `x` axis represents time. The `y` axis records the tasks and their order for completion.

When you exclude a date, day, or collection of dates specific to a task, the Gantt chart accommodates the changes. The chart extends by an equal number of days toward the right rather than creating a gap inside the task.

The following example shows how to add a Gantt chart to a wiki page:

```md
::: mermaid
gantt
    title A Gantt chart
    dateFormat YYYY-MM-DD
    excludes 2022-03-16,2022-03-18,2022-03-19
    section Section

    A task          :a1, 2022-03-07, 7d
    Another task    :after a1 , 5d
:::
```

Here's the published view of the Gantt chart:

:::image type="content" source="media/wiki/wiki-mermaid-gantt-chart.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a Gantt chart and a preview of the published view." lightbox="media/wiki/wiki-mermaid-gantt-chart.png":::

#### Example: Flowchart

A flowchart (type `graph`) is composed of nodes, geometric shapes and edges, and arrows or lines. After you identify the `graph` diagram type, specify the flow direction for information in the chart, such as `TB;` for top-to-bottom.

The following example creates a flowchart with the `graph` type. The graph information follows a left-to-right `LR;` direction.

> [!NOTE]
> Azure DevOps doesn't support the `flowchart` diagram type, the arrow `---->` syntax, or links to and from a `subgraph` diagram type.

```md
:::mermaid
graph LR;
    A[Hard edge] -->|Link text| B(Round edge) --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
:::
```

Here's the published view of the flowchart graph:

:::image type="content" source="media/wiki/wiki-mermaid-flowchart.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a flowchart graph and a preview of the published view." lightbox="media/wiki/wiki-mermaid-flowchart.png":::

#### Example: Class diagram

The class diagram (type `classDiagram`) is the essential part of the object-oriented programming model. The diagram describes objects with their attributes and methods, and the inheritance between objects. 

The following example shows how to add a class diagram to a wiki page:

```md
:::mermaid
classDiagram
    Creature <|-- Superman
    Creature <|-- Vampire
    Creature <|-- Diavolo
    Creature: +int size
    Creature: +int weight
    Creature: +isBenign()
    Creature: +power()
    class Superman{
        +String currentName
        +fly()
        +heal()
    }
    class Vampire{
        -int age
        -canBite()
    }
    class Diavolo{
        +bool is_serving
        +heat()
    }
:::
```

Here's the published view of the class diagram:

:::image type="content" source="media/wiki/wiki-mermaid-class-diagram.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a class diagram and a preview of the published view." lightbox="media/wiki/wiki-mermaid-class-diagram.png":::

#### Example: State diagram

The state diagram (type `stateDiagram`) describes how system states can change when they transition from one state to another. 

The following example shows how to add a state diagram to a wiki page. This example uses version 2 of the state diagram type (type `stateDiagram-v2`).

```md
:::mermaid
stateDiagram-v2
    [*] --> Active
    state Active {
        [*] --> NumLockOff
        NumLockOff --> NumLockOn : EvNumLockPressed
        NumLockOn --> NumLockOff : EvNumLockPressed
        --
        [*] --> CapsLockOff
        CapsLockOff --> CapsLockOn : EvCapsLockPressed
        CapsLockOn --> CapsLockOff : EvCapsLockPressed
        --
        [*] --> ScrollLockOff
        ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
        ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
    }
:::
```

Here's the published view of the state diagram:

:::image type="content" source="media/wiki/wiki-mermaid-state-diagram.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a state diagram and a preview of the published view." lightbox="media/wiki/wiki-mermaid-state-diagram.png":::

#### Example: User journey diagram

The user journey (type `journey`) diagram describes what steps are required to complete a specific higher level action or task. 

The following example shows how to add a user journey diagram to a wiki page:

```md
:::mermaid
journey
    title Home office day
    section Go to work
      Wake up: 1: Me, Dog
      Take shower: 2: Me
      Go downstairs: 3: Me, Dog
      Make coffee: 4: Me
      Have a breakfast: 5: Me, Dog
      Go upstairs: 3: Me, Dog
      Do work: 1: Me, Dog
    section Go home
      Go downstairs: 3: Me, Dog
      Sit down: 5: Me
:::
```

Here's the published view of the user journey diagram:

:::image type="content" source="media/wiki/wiki-mermaid-user-journey.png" alt-text="Screenshot that shows a published preview of a user journey diagram in the Mermaid Live Editor." lightbox="media/wiki/wiki-mermaid-user-journey.png":::

#### Example: Pie chart

The pie chart (type `pie`) diagram helps to visualize the percentages of information in a circle graph. After you identify the `pie` diagram type, specify the `title` keyword with a title for the pie chart.

The following example creates a pie chart with the title `Fishermen in countries`:

```md
:::mermaid
pie title Fishermen in countries
    "Norway" : 684
    "Sweeden" : 234
    "Switzerland" : 10
:::
```

Here's the published view of the pie chart:

:::image type="content" source="media/wiki/wiki-mermaid-pie-chart.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a pie chart and a preview of the published view." lightbox="media/wiki/wiki-mermaid-pie-chart.png":::

#### Example: Requirements diagram

The requirements diagram (type `requirementDiagram`) creates a visualization of the requirements and their connections.

The following example shows how to add a requirements diagram to a wiki page:

```md
:::mermaid
requirementDiagram
    requirement development_req {
    id: 1
    text: requirements spec.
    risk: medium
    verifymethod: test
    }
    element test_suite {
    type: manual test
    }
    test_suite - verifies -> development_req
:::
```

Here's the published view of the requirements diagram:

:::image type="content" source="media/wiki/wiki-mermaid-requirements-diagram.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a requirements diagram and a preview of the published view." lightbox="media/wiki/wiki-mermaid-requirements-diagram.png":::

::: moniker-end

::: moniker range="<=azure-devops"

<a id="toc-wiki"></a>

## Table of contents for a wiki page

Create a table of contents (TOC) for your wiki page by using the `[[_TOC_]]` syntax tag. When the publishing system encounters the tag and confirms at least one heading on the wiki page, it generates the TOC for the page. The title of the TOC on the page is "Contents." 

:::image type="content" source="media/toc-sample.png" alt-text="Screenshot that shows how to apply the TOC syntax tag to generate a TOC for a wiki page.":::

To create the TOC, you can add the `[[_TOC_]]` syntax tag to the wiki page in the Markdown or select **More options** (**...**) > **Table of Contents** in the **Edit** view for the page.

Here are some points about adding a TOC:

- The syntax for the `[[_TOC_]]` tag is case-sensitive. If you specify the syntax by using lowercase `[[_toc_]]`, the TOC might not render.
- The publishing system renders the TOC for the first instance of the `[[_TOC_]]` tag in the Markdown page. It ignores other instances of the tag on the same page.
- You can place the `[[_TOC_]]` tag anywhere in the Markdown. The system renders the TOC on the page at the location where you placed the tag in the Markdown.
- The system confirms only Markdown style headings identified by the hash mark `#` syntax. It ignores HTML style heading tags.
- The system uses only the heading text to create the TOC entry. It ignores all extra HTML and Markdown syntax.

The following example shows how the publishing system ignores extra formatting for a heading when it creates the entry for the TOC. The heading formats the word "Flagship" with _italics_, but the TOC entry for the heading removes the extra style.

:::image type="content" source="media/toc-tags.png" alt-text="Screenshot that shows how the publishing system ignores extra formatting for a heading when it creates the entry for the TOC.":::

::: moniker-end

::: moniker range="azure-devops"

## Table of subpages for a wiki page

Add a table of subpages for a wiki page by using the `[[_TOSP_]]` syntax tag. The title of the table on the page is "Child Pages." The table includes an entry for each subpage of the wiki page.

To create the table of subpages, you can add the `[[_TOSP_]]` syntax tag to the wiki page in the Markdown or select **More options** (**...**) > **Table of Subpages** in the **Edit** view for the page.

Here are some points about adding a table of subpages:

- The syntax for the `[[_TOSP_]]` tag is case-sensitive. If you specify the syntax by using lowercase `[[_tosp_]]`, the table of subpages might not render.
- The publishing system renders the table of subpages for the first instance of the `[[_TOSP_]]` tag in the Markdown page. It ignores other instances of the tag on the same page.
- You can place the `[[_TOSP_]]` tag anywhere in the Markdown. The system renders the table of subpages on the page at the location where you placed the tag in the Markdown.

:::image type="content" source="media/wiki/wiki-table-content-subpages.png" alt-text="Screenshot that shows how the publishing system generates a table of subpages for a wiki page.":::

::: moniker-end

::: moniker range="<=azure-devops"

## Collapsible sections in a wiki page

Add a collapsible section in a wiki page with the HTML `<details><summary>` syntax. You can use a collapsible section to limit visibility of specific content on the page, such as outdated or archived data, or set up a question/answer scenario.

When the wiki page opens, the collapsible section is closed (collapsed), but the section summary is visible. Users can select the title to expand (open) and collapse the section as needed. 

Here are some points about adding a collapsible section:

- Provide the title for the section within the `<summary>Title</summary>` tags. The summary is always visible on the page.
- Add a blank line after the closing `</summary>` tag. If you don't add the empty line, the section doesn't render correctly.
- Provide the main content after the blank line. You can use Markdown syntax and HTML to format the main content.
- If you create multiple collapsible sections on the page, add a blank line after each closing `</details>` tag.

The following example creates a collapsible section on a wiki page:

```html
# A collapsible section with Markdown syntax
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>
```

:::image type="content" source="media/wiki/add-collapsible-section-wiki.png" alt-text="Screenshot of the Mermaid Live Editor with the code for a collapsible section and a preview of the published view.":::

## Embedded videos

Embed videos from YouTube and Microsoft Streams in a wiki page by using the `::: video :::` syntax. Inside the `video` declaration, define an `<iframe>` block for the video. Provide a link to the video and specify the preferred width and height. You can set other attributes like borders and fullscreen mode. The closing colons `:::` are required to prevent a break in the page.

The following example embeds a video in the wiki page:

```md
Watch the following video:

::: video
<iframe width="640" height="360" src="https://www.youtube.com/embed/OtqFyBA6Dbk" allowfullscreen style="border:none"></iframe>
:::
```

Here's the published view of the wiki page with the video embedded:

:::image type="content" source="media/wiki/wiki-embedded-video.png" alt-text="Screenshot that shows the published view of the wiki page with the embedded video.":::

<a id="embed-azure"></a>

## Embedded Azure Boards query results

Embed Azure Boards query results in a wiki page as a table by using the `query-table` syntax with a query ID:

```md
Results from the Azure Boards query:

:::
query-table 6ff7777e-8ca5-4f04-a7f6-9e63737dddf7
:::
```

You can also select **More options** (**...**) > **Query Results** on the toolbar:

:::image type="content" source="media/select-query-results.png" alt-text="Screenshot that shows how to select Query Results in the More options menu to embed the query results as a table in the wiki page.":::

In the **Query Results** dialog, select the query results, and then select **Insert** to embed the results as table in the wiki page.

For more information about how to copy the query URL, which provides a GUID for the query, see [Email query items or share query URL](../../boards/queries/view-run-query.md#email-query-items-or-share-a-query-url).

## Notifications with @ mentions

Create mentions for users or groups with the _at_ symbol `@`, as in `@<user-alias>`. When you enter the _at_ `@` symbol, the **Autosuggest** dialog opens where you can select users or groups to receive email notifications:

:::image type="content" source="media/mention-autosuggest.png" border="false" alt-text="Screenshot that shows how to select a user in the Autosuggest dialog to add an @ mention in the wiki page.":::

You can also select **More options** (**...**) > **@ Mention** on the toolbar:

:::image type="content" source="media/select-at-mention.png" alt-text="Screenshot that shows how to select @ Mention in the More options menu to add a mention for a user or group in the wiki page.":::

When you edit pages directly in code, use the following pattern, `@<{identity-guid}>`.

::: moniker-end

::: moniker range=">= azure-devops-2020"

## Page visit count for a wiki page

Add an automatically aggregated count of page visits for the last 30 days on every page in the wiki. A page visit is a view of the page by a specified user during a 15-minute interval.

Use the batch API `pagesBatch` to see the daily count of visits to all pages in a paginated view. The view isn't sorted by number of visits.

For data over 30 days old, use the REST API to get a list of all page visits. Sort the pages based on the number of visits and determine the top 100. You can store the visits in a dashboard or database.

The following image shows the page count on a published wiki page:

:::image type="content" source="media/wiki/wiki-page-visits.png" alt-text="Screenshot that shows the aggregated count of page visits on a published wiki page.":::

::: moniker-end

<a name="html"></a>

## HTML tags in wiki pages

Create rich content by using HTML tags in wiki pages, such as `<font>` and `<span>`. In Azure DevOps Server 2019.1 and later, you can also paste rich content like images and video as HTML.

### Example: Use Markdown syntax inside HTML

The following example shows how to use Markdown syntax inside an HTML element in a wiki page. Add a blank line after the opening HTML element and before the Markdown:

```html
<p>

This article describes how to **get started** with an Azure DevOps wiki.

For more information, see the [Wikis, search, & navigation documentation](https://learn.microsoft.com/azure/devops/project/) for Azure DevOps.
</p>
```

### Example: Embed a video with HTML

The following example shows how to embed a video in a wiki page by using the `<video>` HTML element with a URL to the video:

```HTML
<video src="https://sec.ch9.ms/ch9/7247/7c8ddc1a-348b-4ba9-ab61-51fded6e7247/vstswiki_high.mp4" width=400 controls>
</video>
```

### Example: Use rich text format

The following example shows how to use HTML rich text format in a wiki page:

```HTML
<p>This text needs to <del>strikethrough</del> <ins>since it is redundant</ins>!</p>
<p><tt>This text is teletype text.</tt></p>
<font color="blue">Colored text</font>
<center>This text is center-aligned.</center>
<p>This text contains <sup>superscript</sup> text.</p>
<p>This text contains <sub>subscript</sub> text.</p>
<p>The project status is <span style="color:green;font-weight:bold">GREEN</span> even though the bug count / developer might be shown as <span style="color:red;font-weight:bold">red.</span> - Capability of span
<p><small>Disclaimer: Wiki also supports showing small text</small></p>
<p><big>Bigger text</big></p>
```

The following image shows the published view of the HTML rich text content in a wiki page, as shown in standard Light theme view:

:::image type="content" source="media/wiki/green-red-light-theme.png" alt-text="Screenshot of a published wiki page that uses HTML rich text formatting, as shown in Light theme view.":::

Here's the same published page in Dark theme view:

:::image type="content" source="media/wiki/green-red-dark-theme.png" border="false" alt-text="Screenshot of a published wiki page that uses HTML rich text formatting, as shown in Dark theme view.":::

## Related content  

- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md)
- [Widget catalog](../../report/dashboards/widget-catalog.md)
- [Add and edit Wiki pages](add-edit-wiki.md)