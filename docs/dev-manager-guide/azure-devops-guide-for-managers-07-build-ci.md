---
title: Practical DevOps
titleSuffix: Azure DevOps Services & TFS
description: Automated builds, continuous integration (CI), and the role of unit testing.
ms.prod: devops
ms.technology: devops-dev-manager
ms.article: get-started-article
ms.assetid: f27d39dc-b0a0-4bef-b2db-4e168ecbe4e9
ms.manager: douge
ms.author: kraigb
author: kraigb
ms.topic: reference
ms.date: 10/25/2018
monikerRange: '>= tfs-2013'
---

# Automated builds and continuous integration

After the "Dev" stage in the release pipeline, which is where code get written, the next part is Build and the related activity of Continuous Integration (CI), which means to build (and often run tests) whenever new code is committed to the repository.

![Build/CI follows commitment to a source repository in the delivery/release pipeline](media/04-pipeline-01-basic.png)

## What is Build?

Positioned where it is in the pipeline, Build can be defined as follows:

_**Build is what transforms source code into testable and deployable artifacts as needed by the rest of the release pipeline.**_

The outputs of Build are the inputs for the remaining stages of the pipeline that work or act on build artifacts. For example, all forms of testing operate against runnable app and service code, not raw source code. And, of course, you must have the appropriate binaries to deploy to web servers, app stores, and so on. Even in cases where source files go through the pipeline more or less unmodified (as with many Python, JavaScript, HTML and CSS files in a web app, for instance), Build still fulfills the role of creating the appropriate packages, combining files, applying preprocessors and minifiers, and so on.

Think of Build as you would about physical construction. A large pile of building materials, such as lumber, concrete and rebar, nails, screws, windows, pipe, wire, roofing, insulation, fixtures, and so forth, contains the potential for a house, but that pile doesn't automatically turn itself into such a structure. A structure happens only by having someone apply the knowledge of how all those pieces get put together, step by step. That's what "doing a build" is all about.

Of course, a big advantage with software is that doing a build doesn't consume the source materials in the process. You can do a build as often as you want, as many times as you want and, if the process is automated, at very little cost.

Continuous integration relies on these characteristics. You can build multiple, independent artifacts from the same source code, each of which has a separate release pipeline. (Note that you can use Build/CI for ongoing testing for your dev team without necessarily feeding into a release pipeline that ends in production deployment, because such builds aren't intended for general release.)

## The Role of Build automation in DevOps

Within professional construction crews that work on houses and other buildings, someone is always making sure all the necessary materials are on hand for at least the next few days of work. This continuous validation improves the efficiency and productivity of the crew, which is to say, their performance, and is essential for delivering results on time and within budget.

Build accomplishes the same efficiency in software. All DevOps activities and practices are ways to continually validate the performance of your apps and services. Build, therefore, is fundamentally a means to validate the contents of a source code repository. That is, you expect certain source material to be present in the repository, and build makes sure of that.

A build (excluding additional tests that might be run) generally has only one of two results: success or failure. Success means that the source repository contains the necessary, buildable files to produce testable and deployable artifacts. Failure means that one or more files are faulty (they have syntax errors), or that something is missing from the repository according to the way the build is configured. It's also possible that the build configuration is itself faulty, which is also valuable information.

Ideally, you want to know as quickly as possible when a defect that "breaks the build" is introduced into the repository. Build automation is a huge advantage in this case, because you can run a build and get immediate validation whenever there's a change to the repository. Such immediate validation is known as Continuous Integration.

## Continuous Integration

In times past, builds were often complex, tedious processes that, for large projects especially, typically required one or more full-time dedicated employees. For this reason, builds were run only infrequently, by which time many hundreds or even thousands of changes might have been committed to the repository. Because any number of those changes, in any combination, might cause the build to fail, it could be a real nightmare to get everyone's changes integrated into a working build. There have, in fact, been a few ambitious projects at Microsoft that were canceled simply because they couldn't actually be built!

Avoiding such nightmares has given rise to the principles of "continuous integration" or CI:

1. Build validates your repository, so you naturally want to run builds early and often.
2. If you can automate builds, you make the process highly repeatable at very little cost.
3. If you can automatically trigger a build whenever there's a change to the source repository, then you make the process of validating that code highly repeatable.
4. If you further validate changes by running automated unit tests with every successful build, then you add yet another layer of validation for each and every code change.

CI, in short, validates each and every change to the source repository as close in time as possible to the change itself. CI means that the developer who made the change is immediately notified if the build fails. Additional features like gated check-in (with Team Foundation Version Control) or pull requests (PRs, with Git) can also trigger builds with the new code before that code is actually checked in or merged. Such a gate guarantees that unvalidated code never makes it into the repository in the first place.

All this is why build automation with CI is one of the most common DevOps practices. Indeed, even if you do everything else in your release pipeline manually, you'll find that investing early in source control with automated builds and CI is well worth it, especially as a project becomes more complex.

## Unit tests and continuous integration minimizes the cost of bugs

Before moving on to a full discussion of most testing and other release activities, it's worthwhile taking a moment to talk about what's called "unit testing." This activity, as shown in an earlier article, typically occurs both during development and as part of continuous integration:

![DevOps activities at each stage in the pipeline](media/04-pipeline-02-activities.png)

The "units" being tested in this activity are the lowest-level units of code, such as classes, functions, properties, and so forth. Unit tests are meant to exercise only that bit of code in isolation. For example, unit testing a function means calling it with a full range of different parameters to make sure that it fails when it should and succeeds with the correct outputs when it should. Each unique set of parameters constitutes a single unit test with a distinct pass/fail result. It's not uncommon, in fact, for a single function to have a dozen or more specific unit tests.

This thorough exercising of a code unit helps detect whether change to that code resulted in unintended side effects. For example, if a suite of tests have been passing with every build for some time, but then one test suddenly fails, it's easy to pinpoint the exact point of this failure because each test isolates a specific test case.

Quickly catching such "regressions" (situations where code that has been working no longer works) is part of a "fail fast" strategy which, like continuous integration, seeks to surface problems as quickly as possible and as close to the source of the problem as possible.

Because unit tests are just pieces of code calling other pieces of code, they can (and should) run very quickly; a whole suite of unit tests typically runs in a matter of seconds. This characteristic makes it easy for a developer to run a test suite against their work-in-progress to quickly detect any unintended changes in behavior&mdash;called regressions&mdash;prior to committing code to the source repository. (Unit tests are *not* intended, however, to test how data gets to a function or what happens with outputs&mdash;those activities are for later "integration" tests. For this reason, unit tests generally use "mock" data and simulated inputs, and have no persistent effects on the system.)

Those same unit tests are then run with each successful build as part of the continuous integration process, so they can again help surface defects as quickly as possible. Early detection of defects minimizes the cost of fixing them. Because each unit test is (ideally) written to test a single case, any given test failure identifies exactly what parameters caused a failure in which unit of code. This means the developer can go immediately to that code unit, review the change history, and find the regression. There's no guesswork about where to look, and because unit testing happens very near in time to changes in the code, the developer doesn't spend much time getting familiar with that code again.

In contrast, an undetected defect may surface much later in the release process in any number of ways: bad output, incorrect data being sent to a backend (causing a failure there), or an app crash. The developer assigned to the bug report often spend several hours tracing the problem back to the offending piece of code, and the bug might even pass through the hands of multiple developers before it finally reaches the right person. Even then, the error might have been checked in days or weeks ago, so the developer has to shift his or her attention away from current tasks to investigate and fix the bug.

### Test-driven development

You may have gotten nervous when reading the previous section by the statement that a single function can have a dozen or more specific unit tests. "How on earth," you might be wondering, "do all those tests get written alongside the code?" And your question is fully justified: writing code is an expensive activity, and thus writing a lot of test code alongside your "real" code (that eventually goes out to customers) seems somewhat unreasonable.

But let's consider the expenses incurred with the usual ad-hoc method of software development. Developers, when charged with a certain task, typically like to whip out a bunch of code that demonstrates successful completion of that task (which means it makes a good demo!). The primary thought here is, "How do I write this code unit to do the required job?" In the process, developers are likely to take short cuts, make certain assumptions, and otherwise omit handling a variety of conditions that occur only in the "real world" such as bad inputs, network timeouts, failed requests, and any number of other challenges.

Of course, those conditions *will* occur when the code does reach the real world, and when they do, developers typically end up responding to such issues individually. This puts one into a pattern of bouncing back and forth between thinking about coding and thinking about data for test cases, which can result in missed test cases and faulty code. Furthermore, finding code defects in this way typically occurs long after the developer wrote the original code. That means he or she has spend time getting familiar with that code again to make a correction, and oftentimes the job falls on another developer entirely. (And we haven't even considered the cost of those errors to your customers.)

For these reasons, it ends up being much more efficient to invert the process and use what's called "test-driven development" or TDD. Instead of asking how to make a piece of code work under ideal conditions only, test-driven development, "How do I challenge this piece of code to fail?" This process recognizes that thinking through all the variations of good and bad input is a different mental process than thinking about how to handle those variations in the code itself. The benefit is that once you *have* thought through all those variations, it's far simpler to write robust code to handle all of them. And writing code in such a manner turns out to be far less expensive than repeatedly going back into code later on to make piecemeal corrections.

TDD is highly productive because once you start thinking about primary test cases and input variations, you very naturally articulate many boundary and edge cases. Once all those input cases are clearly identified, it's then a simple step to turn that list of inputs into unit tests. Once that work is done, you can then shift your focus entirely to writing the code without having to wonder (or worry!) whether you’re really handling all the possible inputs.

With TDD, in fact, you initially run all your unit tests against an empty implementation of a function. Many if not all of the unit tests will fail, of course, but that means that the list of failed tests becomes your to-do list for coding. If you've written each test with a single set of inputs, the list of failed tests maps *exactly* to the list of input cases that the function doesn't yet handle properly. As you write the code, then, you're simply making improvements to to pass each test one by one. And when the function passes all the tests, you can be completely confident that it can handle all the possibilities it should.

Test-driven development, in short, means to start with a body of tests, which you can actually write very quickly, and then write code to pass the tests. And although TDD may seem counter-intuitive, it's an effective way of defining, through tests, the exact behavior that’s expected of the code.

The big advantage of test-driven development is that it cleanly separates the task of coming up with input cases from the task of writing the code to handle those cases. Ultimately, if you're going to do a really good job testing your code, you have to separate these tasks one way or another. Test-driven development acknowledges this up front. It makes it easier to generate a comprehensive set of tests early on, which means you write more robust code earlier in the process and thus reduce the overall cost of development.

## Build and CI in Azure DevOps

TODO

> [!div class="nextstepaction"]
> [QA and release stages](azure-devops-guide-for-managers-08-qa-release.md)
