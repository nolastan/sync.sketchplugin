var applyTypography = function (newStyles, sharedStyles) {

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

    var textLayer = [[MSTextLayer alloc] initWithFrame:nil];

    if("Size"      in style)  { textLayer.setFontSize(style.Size); }
    if("Line"      in style)  { textLayer.setLineSpacing(style.Line); }
    if("Character" in style)  { textLayer.setCharacterSpacing(style.Character); }
    if("Alignment" in style)  { textLayer.setTextAlignment(alignmentHash[style.Alignment]); }
    if("Typeface"  in style)  { textLayer.setFontPostscriptName(style.Typeface); }
    if("Color"     in style)  {
      var color = MSColor.colorWithSVGString("#" + style.Color);
      color.alpha = style.Opacity;
      textLayer.setTextColor(color);
    }

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, textLayer.style());
  }

  function removeAllStyles() {
    var existingStyles = sharedStyles.objects();

    while(existingStyles.count() > 0) {
      style = existingStyles.objectAtIndex(0);
      // [existingStyles removeObject:style];
      [sharedStyles removeSharedObjectAtIndex:0];
    }
  }
}
