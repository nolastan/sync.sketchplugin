var loadTypography = function (newStyles, sharedStyles) {

  var alignmentHash = {
    'left': 0,
    'right': 1,
    'center': 2,
    'justified': 3
  };

  removeAllStyles();

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var color = MSColor.colorWithSVGString("#" + style.Color);
    color.alpha = style.Opacity;

    textLayer = [[MSTextLayer alloc] initWithFrame:nil];

    textLayer.setFontSize(style.Size);
    textLayer.setLineSpacing(style.Line);
    textLayer.setCharacterSpacing(style.Character);
    textLayer.setTextAlignment(alignmentHash[style.Alignment]);
    textLayer.setTextColor(color);
    textLayer.setFontPostscriptName(style.Typeface);

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, textLayer.style());
  }

  function removeAllStyles() {
    var existingStyles = sharedStyles.objects();

    while(existingStyles.count() > 0) {
      style = existingStyles.objectAtIndex(0);
      [existingStyles removeObject:style];
    }
  }



}
