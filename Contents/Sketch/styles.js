var applyStyles = function (newStyles, sharedStyles) {

  var alignmentHash = {
    'fill': 0,
    'border': 1,
    'shadow': 2,
    'innerShadow': 3
  };

  removeAllStyles();

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var sharedStyle = MSShapeGroup.alloc().init().style();

    if(style.Background) {
      var fill = sharedStyle.addStylePartOfType(alignmentHash['fill']);
      fill.color = MSColor.colorWithSVGString("#" + style.Background);
    }

    if(style.Borderthickness > 0 && style.Bordercolor) {
      var borders = sharedStyle.addStylePartOfType(alignmentHash['border']);
      borders.thickness = style.Borderthickness;
      borders.color = MSColor.colorWithSVGString("#" + style.Bordercolor);
    }

    if(style.Shadow) {
      var shadow = sharedStyle.addStylePartOfType(alignmentHash['shadow']);
      var shadowColor = MSColor.colorWithSVGString("#" + style.Shadowcolor);
      shadow.color = shadowColor.colorWithAlpha(style.Shadowopacity);
      setShadowAttribute(shadow, style.Shadow);
    }

    if(style.Innershadow) {
      var innerShadow = sharedStyle.addStylePartOfType(alignmentHash['innerShadow']);
      var innerShadowColor = MSColor.colorWithSVGString("#" + style.Innershadowcolor);
      innerShadow.color = innerShadowColor.colorWithAlpha(style.Innershadowopacity);
      setShadowAttribute(innerShadow, style.Innershadow);
    }

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, sharedStyle);
  }

  function removeAllStyles() {
    var existingStyles = sharedStyles.objects();

    while(existingStyles.count() > 0) {
      [sharedStyles removeSharedObjectAtIndex:0];
    }
  }

  function setShadowAttribute(shadow, shadowStyle) {
    shadowAttr = shadowStyle.split(',');
    shadow.offsetX    = shadowAttr[0];
    shadow.offsetY    = shadowAttr[1];
    shadow.blurRadius = shadowAttr[2];
    shadow.spread     = shadowAttr[3];
  }
}
