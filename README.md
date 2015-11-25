# Sync Sketch Plugin
![](https://i.imgur.com/dUeIJjI.gif)

Save your text styles in a Google Sheet and keep your design team in sync. Every time you run this plugin your Sketch text styles will be replaced with those you specify in a spreadsheet. This should make it easier to share typography styles across teams!

# Installation
Install from [Sketch Toolbox](http://sketchtoolbox.com/) (recommended) or [download the zip](https://github.com/nolastan/sync.sketchplugin/releases/download/1.0/sync.sketchplugin.zip), unzip, and open `sync.sketchplugin`.

# Getting Started

1. Create a Google Sheet from [this template](https://drive.google.com/previewtemplate?id=17q6GOMM1X6kkvgeL3LeGkRr4C2vOhpM_JiQUWxbBtew&mode=public) (click the "Use this template" button).

2. Select *File > Publish to web…* and then click the *Publish* button. Copy the link that appears. (See below if you are using Google Apps at work)

3. Run the Sync command from the plugin menu and paste your URL into the prompt.

Your text styles and color palette should now be synced with your spreadsheet. Run the plugin again any time to update. Share your published sheet URL with your team to stay in sync.

## Using Google Apps at work?
Some companies prevent employees from publishing sheets. If the *Published content & settings* drill-down in the *Publish to the web* modal says that people at your company must log in to view, then Sync will not be able to access your sheet. Don't worry – you can still use Sync for typography. Just visit [Sheetsu](http://sheetsu.com/) to generate an API for your new sheet. Use your new Sheetsu URL and continue to step 3.

**Need help?** [View the screencast](https://dl.dropboxusercontent.com/s/f4ubqenqz8n5wne/68D4E91B-173A-4AA0-964C-AA7F9EA77AC8-5233-000032842DD067F4.gif?dl=0), [create an issue](https://github.com/nolastan/sync.sketchplugin/issues/new) or [tweet @stan](https://twitter.com/stan).

**Find it useful?** Please [like Sync on Dribbble](https://dribbble.com/shots/2367116-Sync-Sketch-Plugin).

# Pattern Libraries
[Share your pattern library](https://github.com/nolastan/sync.sketchplugin/issues/new?title=Add%20library&body=I%27d%20like%20to%20add%20this%20library%20I%20created:%20) with the Sync community.
* [Material Design](https://sheetsu.com/apis/592bd16f) ([Download Roboto](https://www.google.com/fonts/specimen/Roboto))

# Custom API
As an alternative to Google Sheets, you can create a custom JSON api with the following structure. Currently this method only supports typography.
```
{
  …
  result: [
    {
      Style: "Headline 1",
      Size: "32",
      Color: "DD2E1F",
      Opacity: "85",
      Typeface: "SourceSansPro-Semibold",
      Alignment: "center",
      Line: "40",
      Character: "0"
    },
    …
  ]
}
```
Run the Sync command from the plugin menu and paste your API endpoint URL into the prompt.
