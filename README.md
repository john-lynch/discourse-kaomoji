# discourse-kaomoji

This plugin adds support for slash-command textual substitutions in posts in [Discourse][1] forums, primarily to allow users to insert kaomoji (aka dongers, aka Japanese emoticons) into posts without having to go Googling around for the correct characters. This is probably the most critical possible feature for your Discourse install.

Information on how to install a Discourse plugin is avaliable [here][2].

Once installed, users simply have to type `/examplecommand` and the slash text will be replaced with a substitution. For example, by default `/shrug` is replaced by `¯\_(ツ)_/¯`.

The plugin is currently configured in a rather crude fashion: the administrator enters a string of JSON into the "kaomoji mapping json" field in the Discourse plugin configuration page. This JSON is parsed so that each key on the result object is a command and each value associated with it is the value to use when that command is encountered. So for example:

    {
    	"shrug": "¯\\_(ツ)_/¯"
    }

This bit of JSON configures the plugin to replace the command `/shrug` with `¯\_(ツ)_/¯`. Additional replacements can be added simply by ammending the JSON. Since the discourse plugin uses a single line edit box for text, it's probably best to do this in an external editor, then minify and paste the results back. Yeah, it would be nice to configure this differently.

[1]: https://www.discourse.org/
[2]: https://meta.discourse.org/t/install-a-plugin/19157

