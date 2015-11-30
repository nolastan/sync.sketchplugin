var applyStyles = function (newStyles, sharedStyles) {

  removeAllStyles();

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var sharedStyle = MSShapeGroup.alloc().init().style();

    if(style.Background) {
      var fill = sharedStyle.fills().addNewStylePart();
      fill.color = MSColor.colorWithSVGString("#" + style.Background);
    }

    if(style.Borderthickness > 0 && style.Bordercolor) {
      var borders = sharedStyle.borders().addNewStylePart();
      borders.thickness = style.Borderthickness;
      borders.color = MSColor.colorWithSVGString("#" + style.Bordercolor);
    }

    if(style.Shadow) {
      var shadow = sharedStyle.shadows().addNewStylePart();
      shadow.color = MSColor.blackColor().colorWithAlpha(style.Shadowopacity);
      shadowAttr = style.Shadow.split(',');
      shadow.offsetX    = shadowAttr[0];
      shadow.offsetY    = shadowAttr[1];
      shadow.blurRadius = shadowAttr[2];
      shadow.spread     = shadowAttr[3];
    }

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, sharedStyle);
  }

  function removeAllStyles() {
    var existingStyles = sharedStyles.objects();

    while(existingStyles.count() > 0) {
      style = existingStyles.objectAtIndex(0);
      [existingStyles removeObject:style];
    }
  }
}
