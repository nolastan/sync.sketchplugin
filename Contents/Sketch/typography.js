var applyTypography = function (newStyles, sharedStyles) {

  var alignmentHash = {
    'left': 0,
    'right': 1,
    'center': 2,
    'justified': 3
  };

  // removes existing styles before importing 
  // keeps sketch from shitting its pants the the styles already exist
  // probably need to check for matching names though. This will wipe out other existing styles
  // [sharedStyles removeAllSharedObjects];

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function checkForMatchingStyleAndMerge(existingStyleArray, newStyleName, newStyle) {
    // log(existingStyleArray);
    // log(newStyleName);
    // log(newStyle);
    var existingStyleObjects = [existingStyleArray objects];

    for (var i=0; i<existingStyleObjects.count(); i++) {
      var existingName = existingStyleObjects[i].name();
      // log("existing name is " + existingName);
      // log("new name is " + newStyleName);

      if(existingName == newStyleName) {
        // log("name matched");
        // existingStyleArray.mergeSharedStyleWithName_sharedStyleID_instance( newStyleName, existingStyleArray[i].objectID(), newStyle );

        // existingStyleObjects[i].style().setValue(newStyle);
        // existingStyleObjects[i].mergeSharedStyleWithName_sharedStyleID_instance( newStyleName, newStyle );
        return existingStyleObjects[i].objectID();
      }
      return false;
    }

    // should return true or false
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

    // sharedStyles.addSharedStyleWithName_firstInstance(style.Style, textLayer.style());
    var matchedStyleID = checkForMatchingStyleAndMerge(sharedStyles, style.Style, textLayer.style() );
    // log(matchedStyleID);

    if( matchedStyleID != 0 ) {
      log('it matched. merging styles');
      // sharedStyles.mergeSharedStyleWithName_sharedStyleID_instance( style.Style, matchedStyleID, textLayer.style() );
    } else {
      log('no matches. appending new style');
      sharedStyles.addSharedStyleWithName_firstInstance(style.Style, textLayer.style());
    }
  }

  function removeAllStyles() {
    var existingStyles = sharedStyles.objects();

    while(existingStyles.count() > 0) {
      style = existingStyles.objectAtIndex(0);
      [sharedStyles removeSharedObjectAtIndex:0];
    }
  }
}
