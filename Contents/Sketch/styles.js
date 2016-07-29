var applyStyles = function (newStyles, sharedStyles) {

  // old way to add styles: 
  // layer.style().fills().addNewStylePart()
  // ---->
  // new way to add styles
  // layer.style().addStylePartOfType(0) // To add a new fill
  // layer.style().addStylePartOfType(1) // To add a new border
  // layer.style().addStylePartOfType(2) // To add a new shadow
  // layer.style().addStylePartOfType(3) // To add a new inner shadow

  removeAllStyles();

  for(var i=0; i<newStyles.length; i++) {
    createStyle(newStyles[i]);
  }

  function createStyle(style) {
    if(style.Style == "") { return; }

    var sharedStyle = MSShapeGroup.alloc().init().style();

    if(style.Background) {
      var fill = sharedStyle.addStylePartOfType(0);
      fill.color = MSColor.colorWithSVGString("#" + style.Background);
    }

    if(style.Borderthickness > 0 && style.Bordercolor) {
      var borders = sharedStyle.addStylePartOfType(1);
      borders.thickness = style.Borderthickness;
      borders.color = MSColor.colorWithSVGString("#" + style.Bordercolor);
    }

    if(style.Shadow) {
      var shadow = sharedStyle.addStylePartOfType(2);
      var shadowColor = MSColor.colorWithSVGString("#" + style.Shadowcolor);
      shadow.color = shadowColor.colorWithAlpha(style.Shadowopacity);
      setShadowAttribute(shadow, style.Shadow);
    }

    if(style.Innershadow) {
      var innerShadow = sharedStyle.addStylePartOfType(3);
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
