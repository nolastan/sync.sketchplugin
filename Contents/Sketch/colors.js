var applyColors = function (newColors, assetColors) {
  var app = NSApplication.sharedApplication();
  var appController = app.delegate();
  var colors = [];
  for(var i=0; i<newColors.length; i++) {
    var color = MSImmutableColor.colorWithSVGString("#" + newColors[i].Rgb);
    if(newColors[i].Opacity) {
      color.alpha = newColors[i].Opacity;
    }
    colors.push(color);
  }
  [assetColors addColors:colors];

  // The following line is throwing the error: is not a function
  // appController.globalAssets().objectDidChange();

}
