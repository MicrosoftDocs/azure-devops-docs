---
title: Test objects overview
description: Understand the different test objects that you define and create using manual or automated testing.
ms.technology: devops-test
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2015'
ms.date: 09/14/2021
---


# Test objects overview 

<a name="testplans"></a>

## What are test plans, test suites, and test cases?

[!INCLUDE [test-hub-include](includes/test-hub-include.md)] provides three main types of test management artifacts: test plans, test suites, and test cases.
These elements are stored in your work repository as special types of work items. 
You can export and share them with your team, and benefit from close integration for all of your DevOps tasks.

* **Test plans** group test suites and individual test cases together.
  Test plans include static test suites, requirement-based suites, and [query-based suites](reference-qa.md#query-based-suites).

* **Test suites** group test cases into separate testing scenarios within a single test plan.
  Grouping test cases makes it easier to see which scenarios are complete.

* **Test cases** validate individual parts of your code or app deployment.
  You can ensure your code works correctly, has no errors, and meets business and customer requirements.
  You can add individual test cases to a test plan without creating a test suite, if you wish.
  More than one test suite or test plan can refer to a test case.
  You can effectively reuse test cases without needing to copy or clone them for each suite or plan.
  See [Create manual test cases](create-test-cases.md).

For example, you're building version 1.* of your product and you might create several test cases for that version.
Each of these test cases can be updated, and more added, at any time.
For each development cycle and release of your product, you create a test plan and import the existing test cases into that plan.
You can also, if you wish, divide the test cases into separate test suites within the plan to enable easier management and monitoring of these separate sets of test cases.

After you create your test plan, you [assign test configurations](test-different-configurations.md) and [assign testers](create-test-cases.md#assign-testers) to cover the required test matrix.
These testers [run the tests](run-manual-tests.md) and gauge the quality of the product.
Testers continue testing until the product meets exit criteria.
For the next development cycle and release, you can create a new test plan and reuse the same test cases.
You repeat this development-test-release cycle by importing the same test cases into each new test plan.

The great thing is that, because test plans refer to test cases, updates to a test case automatically reflect in all the test plans and test suites that use it.

In the next version of the product, you can reuse the existing test cases.
However, a better option may be to [copy or clone the test cases](reference-qa.md#creating-manual-test-cases). A copy creates a new baseline. Changes to these new test cases don't affect your previous test plans.

> [!TIP]
> For more information about the ways you can work with test plans, test suites, and test cases, see the [FAQs for manual testing](reference-qa.md#testplans).

