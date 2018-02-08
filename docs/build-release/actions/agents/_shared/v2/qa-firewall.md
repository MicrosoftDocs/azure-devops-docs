### I'm running a firewall and my code is in VSTS. What URLs does the agent need to communicate with?

If you're running an agent in a secure network behind a firewall, make sure the agent can initiate communication with the following URLs:

```
https://login.microsoftonline.com
https://app.vssps.visualstudio.com 
https://{accountname}.visualstudio.com
https://{accountname}.vsrm.visualstudio.com
https://{accountname}.pkgs.visualstudio.com
https://{accountname}.vssps.visualstudio.com
 ```
