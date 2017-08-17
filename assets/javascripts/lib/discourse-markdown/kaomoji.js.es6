function insertKaomoji(buffer, matches, state) {

  const options = state.md.options.discourse;
  const kaomojiMappingJson = options.kaomojiMappingJson;

  var kaomojiMapping;

  try {
    kaomojiMapping = JSON.parse(kaomojiMappingJson);
  } catch (e) {
    kaomojiMapping = {};
  }

  const kaomojiName = matches[1];
  const result = kaomojiMapping[kaomojiName];

  let pushSegment = segment => {
    let token = new state.Token('text', '', 0);
    token.content = segment;
    buffer.push(token);
  };

  if (result) {
    const segments = result.split('\n');
    pushSegment(segments[0]);
    for (var i = 1; i < segments.length; i++) {
      buffer.push(new state.Token('softbreak', 'br', 0));
      pushSegment(segments[i]);
    }
  } else {
    pushSegment(matches[0]);
  }
}

export function setup(helper) {

  helper.registerOptions((opts, siteSettings) => {
    opts.features.kaomoji = siteSettings.kaomoji_enabled;
    opts.kaomojiMappingJson = siteSettings.kaomoji_mapping_json;
  });

  helper.registerPlugin(md=>{

    const rule = {
      matcher: /\/(\w{1,40})/,
      onMatch: insertKaomoji
    };

    md.core.textPostProcess.ruler.push('kaomoji', rule);
  });
}
