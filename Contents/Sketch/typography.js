var applyTypography = function (newStyles, sharedStyles) {

  var existingStyleObjects = [sharedStyles objects];

  var alignmentEnum = Object.freeze({
    'left': 0,
    'right': 1,
    'center': 2,
    'justified': 3
  });

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function checkForMatchingStyleAndMerge(existingStyleObjects, newStyleName, newStyle) {

    for (var i=0; i<existingStyleObjects.count(); i++) {
      var existingName = existingStyleObjects[i].name();
      if(existingName == newStyleName) {
        sharedStyles.updateValueOfSharedObject_byCopyingInstance(existingStyleObjects[i], newStyle);
        return;
      }
    }
    sharedStyles.addSharedStyleWithName_firstInstance(newStyleName, newStyle);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var textLayer = [[MSTextLayer alloc] initWithFrame:nil];

    if("Size"      in style)  { textLayer.setFontSize(style.Size); }
    if("Line"      in style)  { textLayer.setLineHeight(style.Line); }
    if("Character" in style)  {
      var characterSpacing = Number(style.Character);
      textLayer.setCharacterSpacing(characterSpacing);
    }
    if("Alignment" in style)  { textLayer.setTextAlignment(alignmentEnum[style.Alignment]); }
    if("Typeface"  in style)  { textLayer.setFontPostscriptName(style.Typeface); }
    if("Color"     in style)  {
      var color = MSColor.colorWithSVGString("#" + style.Color);
      color.alpha = style.Opacity;
      textLayer.setTextColor(color);
    }

    checkForMatchingStyleAndMerge(existingStyleObjects, style.Style, textLayer.style() );
  }
}
