## Create personal access tokens to authenticate access

0.  Sign in to either your Visual Studio Team Services account (```https://{youraccount}.visualstudio.com```)
or your Team Foundation Server web portal (```https://{server}:8080/tfs/```).

0.  From your home page, open your profile. Go to your security details.

	<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

	<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
		<li style="float:left;" data-toggle="collapse" data-target="#my-security"></li>
		<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#tfs15">TFS 2017</a></li>
		<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#ts">Team Services</a></li>
	</ul>

	<div id="my-security" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
	<div id="ts" class="tab-pane fade in active">

	<img alt="Go to Team Services account home, open your profile, go to Security" src="./_img/my-profile-team-services.png" style="border: 1px solid #CCCCCC" />

	</div>

	<div class="tab-pane fade" id="tfs15" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

	<img alt="TFS home page, open your profile, go to Security" src="./_img/my-profile-tfs.png" style="border: 1px solid #CCCCCC" />

	</div></div></div>

0. Create a personal access token.

   <img alt="Add a personal access token" src="./_img/add-personal-access-token.png" style="border: 1px solid #CCCCCC" />

0.  Name your token. Select a lifespan for your token.

	If you're using VSTS, and you have more than one account,
	you can also select the Team Services account where you want to use the token.

   <img alt="Name your token, select a lifespan. If using VSTS, select an account for your token" src="./_img/setup-personal-access-token.png" style="border: 1px solid #CCCCCC" />

0.  Select the [scopes](../../integrate/get-started/authentication/oauth.md#scopes)
that this token will authorize for **your specific tasks**.

	For example, to create a token to enable a [build and release agent](../../build-release/concepts/agents/agents.md) to authenticate to VSTS or TFS, 
	limit your token's scope to **Agent Pools (read, manage)**. 

   <!-- <img alt="Select scopes for this token" src="./_img/select-personal-access-token-scopes.png" style="border: 1px solid #CCCCCC" />  -->

0. When you're done, make sure to *copy the token*. You'll use this token as your password.

   <img alt="Use token as the password for your git tools or apps" src="./_img/create-personal-access-token.png" style="border: 1px solid #CCCCCC" />

   **Note: Remember that this token is your identity and acts as you when it's used.
	Keep your tokens secret and treat them like your password.**

	**Tip:** To keep your token more secure, use credential managers
	so that you don't have to enter your credentials every time.
	Here are some recommended credential managers:

	*	Git: [Git Credential Manager for Mac OS X and Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)
	or [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows)
	(Requires [Git for Windows](https://www.git-scm.com/download/win))
	*	NuGet: [NuGet Credential Provider](/vsts/package/nuget/auth)

## Revoke personal access tokens to remove access

When you don't need your token anymore, just revoke it to remove access.

0. From your home page, open your profile. Go to your security details.

	<div style="background-color: #f2f0ee;padding-top:10px;padding-bottom:10px;">

	<ul class="nav nav-pills" style="padding-right:15px;padding-left:15px;padding-bottom:5px;vertical-align:top;font-size:18px;">
		<li style="float:left;" data-toggle="collapse" data-target="#my-security2"></li>
		<li style="float: right;"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#AEAEAE;margin: 0px 0px 0px 8px;min-width:90px;color: #fff;border: solid 2px #AEAEAE;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#tfs15-2">TFS 2017</a></li>
		<li class="active" style="float: right"><a style="max-width: 374px;min-width: 120px;vertical-align: top;background-color:#007acc;margin: 0px 0px 0px 0px;min-width:90px;color: #fff;border: solid 2px #007acc;border-radius: 0;padding: 2px 6px 0px 6px;outline-style:none;height:32px;font-size:14px;font-weight:400" data-toggle="pill" href="#ts-2">Team Services</a></li>
	</ul>

	<div id="my-security2" class="tab-content collapse in fade" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">
	<div id="ts-2" class="tab-pane fade in active">

	<img alt="Go to Team Services account home page, open your profile, go to Security" src="./_img/my-profile-team-services.png" style="border: 1px solid #CCCCCC" />

	</div>

	<div class="tab-pane fade" id="tfs15-2" style="background-color: #ffffff;margin-left: 15px;margin-right:15px;padding: 5px 5px 5px 5px;">

	<img alt="Go to TFS home page, open your profile, go to Security" src="./_img/my-profile-tfs.png" style="border: 1px solid #CCCCCC" />

	</div></div></div>

0.	Revoke access.

	<img alt="Revoke a token or all tokens" src="./_img/revoke-personal-access-tokens.png" style="border: 1px solid #CCCCCC" />
