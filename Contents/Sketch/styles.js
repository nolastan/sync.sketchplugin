var applyStyles = function (newStyles, sharedStyles) {

  var alignmentHash = {
    'fill': 0,
    'border': 1,
    'shadow': 2,
    'innerShadow': 3
  };

  [sharedStyles removeAllSharedObjects];

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var sharedStyle = MSShapeGroup.alloc().init().style();

    if(style.Background) {
      var fill = sharedStyle.addStylePartOfType(alignmentHash['fill']);
      fill.color = MSImmutableColor.colorWithSVGString("#" + style.Background);
    }

    if(style.Borderthickness > 0 && style.Bordercolor) {
      var borders = sharedStyle.addStylePartOfType(alignmentHash['border']);
      borders.thickness = style.Borderthickness;
      borders.color = MSImmutableColor.colorWithSVGString("#" + style.Bordercolor);
    }

    if(style.Shadow) {
      var shadow = sharedStyle.addStylePartOfType(alignmentHash['shadow']);
      var shadowColor = MSImmutableColor.colorWithSVGString("#" + style.Shadowcolor);
      shadow.color = shadowColor.colorWithAlphaComponent(style.Shadowopacity);
      setShadowAttribute(shadow, style.Shadow);
    }

    if(style.Innershadow) {
      var innerShadow = sharedStyle.addStylePartOfType(alignmentHash['innerShadow']);
      var innerShadowColor = MSImmutableColor.colorWithSVGString("#" + style.Innershadowcolor);
      innerShadow.color = innerShadowColor.colorWithAlphaComponent(style.Innershadowopacity);
      setShadowAttribute(innerShadow, style.Innershadow);
    }

    sharedStyles.addSharedStyleWithName_firstInstance(style.Style, sharedStyle);
  }

  function setShadowAttribute(shadow, shadowStyle) {
    shadowAttr = shadowStyle.split(',');
    shadow.offsetX    = shadowAttr[0];
    shadow.offsetY    = shadowAttr[1];
    shadow.blurRadius = shadowAttr[2];
    shadow.spread     = shadowAttr[3];
  }
}
