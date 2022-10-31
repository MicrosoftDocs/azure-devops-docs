### Troubleshooting configuring the agent with the `runAsAutoLogon` option

Configuring the agent with the `runAsAutoLogon` option runs the agent each time after restarting the machine.
Perform next steps if the agent is not run after restarting the machine.

#### If the agent was already configured on the machine

Before reconfiguring the agent, it is necessary to remove the old agent configuration, so try to run this command from the agent folder:
```
.\config.cmd remove --auth 'PAT' --token '<token>'
```

Check if the agent was removed from your agent pool after executing the command:
```
<Azure DevOps organization> / <Project> / Settings / Agent pools / <Agent Pool> / Agents
```

Remove the agent from your agent pool manually if it was not removed by running the command.

Then try to reconfigure the agent by running this command from the agent folder:
```
.\config.cmd --unattended --agent '<agent-name>' --pool '<agent-pool-name>' --url '<azure-dev-ops-organization-url>' --auth 'PAT' --token '<token>' --runAsAutoLogon --windowsLogonAccount '<domain\user-name>' --windowsLogonPassword '<windows-password>'
```

Specify the agent name (any specific unique name) and check if this agent appeared in your agent pool after reconfiguring.

It will be much better to unpack an agent archive (which can be downloaded [here](https://github.com/microsoft/azure-pipelines-agent/releases/latest)) and run this command from the new unpacked agent folder.

#### Check if the Windows registry key is recorded and saved correctly

Run the `whoami /user` command to get the `<sid>`. Open `Registry Editor` and follow the path:
```
Computer\HKEY_USERS\<sid>\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
```

Check if there is the `VSTSAgent` key. Delete this key if it exists, then close `Registry Editor` and configure the agent by running the `.\config.cmd` command (without args) from the agent folder. Before answering the question `Enter Restart the machine at a later time?`, open `Registry Editor` again and check if the `VSTSAgent` key has appeared. Press `Enter` to answer the question, and check if the `VSTSAgent` key remains in its place after restarting the machine.

#### Check if Windows registry keys work fine on your machine

Create a `autorun.cmd` file that contains the following line: `echo "Hello from AutoRun!"`.
Open `Registry Editor` and create in the path above a new key-value pair with the key `AutoRun` and the value
```
C:\windows\system32\cmd.exe /D /S /C start "AutoRun" "D:\path\to\autorun.cmd"
```

Restart your machine. You have an issue with Windows registry keys if you do not see a console window with the `Hello from AutoRun!` message.
