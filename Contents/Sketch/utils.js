var utils = {

	updateStyles : function(existingStyleObjects, newStyleName, newStyle, sharedStyles) {
    for (var i=0; i<existingStyleObjects.count(); i++) {
      var existingName = existingStyleObjects[i].name();
      if(existingName == newStyleName) {
        sharedStyles.updateValueOfSharedObject_byCopyingInstance(existingStyleObjects[i], newStyle);
        return;
      }
    }
    sharedStyles.addSharedStyleWithName_firstInstance(newStyleName, newStyle);
  }
}
