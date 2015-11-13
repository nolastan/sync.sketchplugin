var loadTypography = function (styles, context) {
  var doc = context.document;
  var sharedStyles=doc.documentData().layerTextStyles(); // TODO DRY

  var alignmentHash = {
    'left': 0,
    'right': 1,
    'center': 2,
    'justified': 3
  };

  removeAllStyles();

  for(var i=0; i<styles.length; i++) {
    createStyle(styles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var color = MSColor.colorWithSVGString("#" + style.Color);
    color.alpha = style.Opacity;

    textLayer = doc.currentPage().addLayerOfType('text');

    textLayer.setFontSize(style.Size);
    textLayer.setLineSpacing(style.Line);
    textLayer.setCharacterSpacing(style.Character);
    textLayer.setTextAlignment(alignmentHash[style.Alignment]);
    textLayer.setTextColor(color);
    textLayer.setFontPostscriptName(style.Typeface);

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, textLayer.style());

    doc.currentPage().removeLayer(textLayer);
  }

  function removeAllStyles() {
    var existingStyles = doc.documentData().layerTextStyles().objects();

    while(existingStyles.count() > 0) {
      style = existingStyles.objectAtIndex(0);
      [existingStyles removeObject:style];
    }
  }



}
