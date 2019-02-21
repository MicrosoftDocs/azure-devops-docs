---
title: Version Control - How to Simply Git Log History
description: How git log history simplification works, and why it can lead to confusion.
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.assetid: 663ea04b-ee1e-41f9-8c5b-dfc269b093c2
ms.manager: jillfra
ms.date: 06/01/2016
ms.author: mlearned
author: mlearned
monikerRange: '>= tfs-2015'
---

# Git lost my changes: Taking a look at Git's history simplification
## How Git Log History Simplification Works

Git history simplification can be a confusing beast. 99% of the time you won't even know it exists, but every once in a while it will jump out of the dark corners of Git and bite you. In this article we'll explore what history simplification is and how it can cause confusion when looking at file history.

Let's start with a common scenario:

 1. You push a change to a file and then merge the change into master.
 2. Some of your colleagues also merge their branches to master.
 3. You come back some time later and notice your changes are missing.
 4. Looking for the culprit, you go look at the file history and notice... your changes aren't even listed!?

What is happening here is that Git commit history is a tree, and sometimes the chronological history is not the same as the actual file tree history. This is particularly true in cases where a merge commit reverts a file back to its original state. In that case, the default history view *won't actually show you all changes*, because technically the file didn't change.

In the above scenario, Git realizes it can simplify the history and the "changes" you are most likely looking for are removed from the log.

Unless you have run into it before, the result is often a lot of hair pulling and wondering *Where the heck did my changes go?*

## History Simplification: On by Default

By default, running the log command on a file: `git log file.txt` will automatically simplify history, possibly hiding some commits from its output. You can read more details over at the [git log man page](https://git-scm.com/docs/git-log#_history_simplification).

What makes this a tad more confusing is that history simplification does *not* occur if you just run `git log` (because you are looking at all changes there is nothing to simplify).

In order to turn off history simplification, we need to use the command line switch `--full-history`.

### An Example of History Simplification

This is all nice and theoretical, but let's create our own example of history simplification so we can see how it works. First, let's look at a diagram of the history we are going to create:

![Git Branches](./_img/git-log-history-simplification/history-simplification-branches.png)

As you can see, we are going to:

1. Create a file.
2. Add a line to that file in a branch (animals).
3. Add a different line to that file in another branch (fruit).
4. Merge branch *animals* back into master.
5. Merge branch *fruit* back into master, and choose the entire copy of the file from the fruit branch.
6. Check the history of the file.

As you will see, Git is going to simplify the history for us. The key here is step 5 -- we ignored all changes from the *animal* branch. Git will notice that our file essentially *did not change* between step 1 and step 5, and so it will only show us *two history entries*.

First we create the file and add it to our repo:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; cd sample
    &gt; git init
    &gt; echo "some content" &gt; test.txt
    &gt; git add test.txt
    &gt; git commit -m "Initial commit"
</pre>
    
Now we decide to append the text "donkeys" to the file in an animal branch:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git checkout -b animals
    &gt; echo "donkeys" &gt;&gt; test.txt
    &gt; git commit -am "We have added an animal"
</pre>
    
While we are experimenting, we decide maybe we want to go with fruit in our file instead, so we create a different branch and append the text "bananas" at the end of the file instead:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git checkout master -b fruit
    &gt; echo "bananas" &gt;&gt; test.txt
    &gt; git commit -am "We have added a fruit"
</pre>
    
Feeling satisfied with our changes, we decide to merge our animal branch back into master:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git checkout master
    &gt; git merge animals
</pre>
    
Now let's look at the log for our `test.txt` file:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git log test.txt
    
    commit 6b33d99b996c430a60c9552b79245d1aa8320339
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:45:33 2016 -0500

        We have added an animal

    commit 206613ccd9a54b055b184c7b6c16f2ece8067e51
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:44:18 2016 -0500

        Initial commit
</pre>

So far so good, right? Nothing looks out of the ordinary in our log output. Now let's say we changed our minds and decided to merge our fruit branch:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git merge fruit
    
    Auto-merging test.txt
    CONFLICT (content): Merge conflict in test.txt
    Automatic merge failed; fix conflicts and then commit the result.
</pre>
 
 Uh-oh, a merge conflict. After some consideration, we decide to _use the entire `test.txt` file_ from our fruit branch. Typically you would use some kind of text editor or merge tool, but we'll just recreate the entire file, since it's only two lines:
 <pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; echo "some content" &gt; test.txt
    &gt; echo "bananas" &gt;&gt; test.txt
    &gt; git commit -am "Fixed merge conflict"
</pre>
    
Now let's take a look at the history for our `test.txt` file:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git log test.txt
    
    commit fdd4dfd816c4efebc5bdb240f49e934e299db581
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:51:06 2016 -0500

        We have added a fruit

    commit 206613ccd9a54b055b184c7b6c16f2ece8067e51
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:44:18 2016 -0500

        Initial commit
</pre>
   
Sure enough, we don't see any changes from our first experiment in the log, nor do we see our merge! Are they still there? Did Git eliminate the changes entirely?
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    &gt; git log --full-history test.txt
</pre>

As you can see, although it simplified the log without the `full-history` flag, Git has kept all of our changes:
<pre style="color:white;background-color:black;font-family:Consolas,Courier,monospace;padding:10px">
    commit 5d0bb77a24e265dc154654fb3b5be331b53bf977
    Merge: 6b33d99 fdd4dfd
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:59:34 2016 -0500

        Fixed merge conflict

    commit fdd4dfd816c4efebc5bdb240f49e934e299db581
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:51:06 2016 -0500

        We have added a fruit

    commit 6b33d99b996c430a60c9552b79245d1aa8320339
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:45:33 2016 -0500

        We have added an animal

    commit 206613ccd9a54b055b184c7b6c16f2ece8067e51
    Author: hross &lt;robrodbe@microsoft.com&gt;
    Date:   Mon Feb 15 10:44:18 2016 -0500

        Initial commit
</pre>

## Git History Simplification in a Nutshell

The thing about history simplification is that most of the time you will never notice it. But when a merge conflict goes wrong and you want to know what happened -- you may find yourself looking at the git log history and wondering where your changes went. 

Now, instead of panicking, you know that:
* History simplification for files is turned on by default
* The `--full-history` flag will give you a more comprehensive file history

**Update**: Since I wrote this article, [Azure DevOps Services has introduced a number of awesome history viewing options on the web](https://blogs.msdn.microsoft.com/visualstudioalm/2017/05/10/announcing-git-graph-and-advanced-filters-to-visualize-commit-history/). 
What this means is that if you don't want to go slogging through the command line, you can simply pull up the file you wish to view history for in our explorer and you will be presented with the below history filter where you can specify simple or non-simple history views:

![Git Filters](./_img/git-log-history-simplification/Filters.png)

*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*