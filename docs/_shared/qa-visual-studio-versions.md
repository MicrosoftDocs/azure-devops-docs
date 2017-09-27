####Q: Which versions of Visual Studio can I use with VSTS?

A: You can use:

* Visual Studio 2017
* Visual Studio 2015
* Visual Studio 2013
* Visual Studio 2012
* Visual Studio 2010, 
requires [Service Pack 1](https://www.microsoft.com/download/details.aspx?id=29082) 
and [KB2662296](http://support.microsoft.com/kb/2662296)
* Visual Studio 2008 SP1, requires [GDR update](http://support.microsoft.com/kb/2673642)

To connect to VSTS with Visual Studio 2008 through Visual Studio 2012

1.	Start Visual Studio.
2.	From the Team menu or Team Explorer, 
go to Connect to Team Foundation Server > Select Team Projects > Servers.
3.	Add your VSTS account ({youraccount}.visualstudio.com).
4.	Select your team project, 
and finish connecting.

If you get connection errors, try choosing HTTPS as your protocol.

To connect to VSTS with Visual Studio 2015 and later, 
learn [how to connect to team projects](../user-guide/connect-team-projects.md). 
