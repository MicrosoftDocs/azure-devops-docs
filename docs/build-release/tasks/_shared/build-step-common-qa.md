#### Q: I'm having problems. How can I troubleshoot them?

A: Try this:

 0. On the variables tab, add ```system.debug``` and set it to ```true```. Select to allow at queue time.

 0. In the explorer tab, view your completed build and click the build step to view its output.

The control options arguments described above can also be useful when you're trying to isolate a problem.

#### Q: How do variables work? What variables are available for me to use in the arguments? 

A: ```$(Build.SourcesDirectory)``` and ```$(Agent.BuildDirectory)``` are just a few of the variables you can use. See [Variables](../../concepts/definitions/build/variables.md).
