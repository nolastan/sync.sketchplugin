var applyTypography = function (newStyles, sharedStyles) {

  var existingStyleObjects = [sharedStyles objects];

  var alignmentHash = {
    'left': 0,
    'right': 1,
    'center': 2,
    'justified': 3
  };


  // [sharedStyles removeAllSharedObjects];


  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }


  function checkForMatchingStyleAndMerge(existingStyleObjects, newStyleName, newStyle) {

    for (var i=0; i<existingStyleObjects.count(); i++) {
      // log(i);
      var existingName = existingStyleObjects[i].name();

      // log("existing name is " + existingName);
      // log("new style name is " + newStyleName);

      if(existingName == newStyleName) {
        // log("they match");

        sharedStyles.updateValueOfSharedObject_byCopyingInstance(existingStyleObjects[i], newStyle);

        return existingStyleObjects[i].objectID();
      }

    }

    // log("no matches");
    sharedStyles.addSharedStyleWithName_firstInstance(newStyleName, newStyle);

    return false;

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
    if("Alignment" in style)  { textLayer.setTextAlignment(alignmentHash[style.Alignment]); }
    if("Typeface"  in style)  { textLayer.setFontPostscriptName(style.Typeface); }
    if("Color"     in style)  {
      var color = MSColor.colorWithSVGString("#" + style.Color);
      color.alpha = style.Opacity;
      textLayer.setTextColor(color);
    }
    
    checkForMatchingStyleAndMerge(existingStyleObjects, style.Style, textLayer.style() );

  }


}
