var applyColors = function (newColors, docData) {
  var app = NSApplication.sharedApplication();
  var appController = app.delegate();
  var colors = [];
  for(var i=0; i<newColors.length; i++) {
    var color = MSColor.colorWithSVGString("#" + newColors[i].Rgb);
    color.alpha = newColors[i] .Opacity;
    colors.push(color);
  }
  colors = MSArray.dataArrayWithArray(colors);
  appController.globalAssets().setPrimitiveColors(colors);
  appController.globalAssets().objectDidChange();
}
