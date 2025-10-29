---
author: gloridelmorales
ms.author: glmorale
ms.date: 11/4/2025
ms.topic: include
---

### Reduce authorization timeout

Before a YAML pipeline run can access a protectable resource for the first time, such as a service connection or an agent pool, authorization is required. During the authorization process, runs are paused, which may result in many runs being temporarily halted. After authorization is granted, all runs resume. This change in status could sometimes have unintended effects.

To limit the number of resumed runs, we’re reducing the authorization timeout from 30 days to 7 days. Runs that are already blocked and waiting for authorization will not be affected by this adjustment. Some blocked runs may display UI irregularities, including negative timeouts.

### Pipeline Parameters

When inspecting or debugging a deployment pipeline run, it's useful to know the run's inputs. This helps clarify why the pipeline behaved in a certain way or what the run's purpose is.

In this sprint, we've added a new _Parameters_ panel.

> [!div class="mx-imgBorder"]
> [![Screenshot of new Parameters button.](../../media/264-pipelines-01.png "Screenshot of new Parameters button.")](../../media/264-pipelines-01.png#lightbox)

This is how the panel's information is populated. Imagine we queue a pipeline run with the following parameters.

> [!div class="mx-imgBorder"]
> [![Screenshot of run with parameter.](../../media/264-pipelines-02.png "Screenshot of new Parameters button.")](../../media/264-pipelines-02.png#lightbox)

Additionally, we change the value of a variable named _defaultTimeout_ to 240, and deselect the last stage.

> [!div class="mx-imgBorder"]
> [![Screenshot of stage selection.](../../media/264-pipelines-03.png "Screenshot of stage selection.")](../../media/264-pipelines-03.png#lightbox)

The _Parameters_ panel shows you the values of the pipeline parameters, the (non-secret) variables defined in the UI, and the selected stages.

Parameter values look like this.

> [!div class="mx-imgBorder"]
> [![Screenshot of parameter values.](../../media/264-pipelines-04.png "Screenshot of parameter values.")](../../media/264-pipelines-04.png#lightbox)

Variables defined in the UI look like this.

> [!div class="mx-imgBorder"]
> [![Screenshot of view parameter and stage.](../../media/264-pipelines-05.png "Screenshot of view parameter and stage.")](../../media/264-pipelines-05.png#lightbox)

Selected stages look like this.

> [!div class="mx-imgBorder"]
> [![Screenshot of stages to run.](../../media/264-pipelines-06.png "Screenshot of stages to run.")](../../media/264-pipelines-06.png#lightbox)