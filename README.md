[![Works with Sketch Runner](http://sketchrunner.com/img/badge_blue.png)](http://bit.ly/SketchRunnerWebsite)

# Sync Sketch Plugin
Share styles with your team using Google Sheets.
* Import and update styles from a shared Google Sheet.
* Export styles as CSV files, which can be uploaded to Google Sheets and shared with your team.
* Use formulas in Google Sheets to set relative font sizes and line heights.

# Installation
Install from [Sketch Toolbox](http://sketchtoolbox.com/) (recommended) or [download the zip](https://github.com/nolastan/sync.sketchplugin/releases/download/1.3/sync.sketchplugin.zip), unzip, and open `sync.sketchplugin`.

# Setting up Google Sheets
You'll need a published sheet to use Sync.

![](http://g.recordit.co/Nc8675CESb.gif)

1. Create a Google Sheet from [this template](https://drive.google.com/previewtemplate?id=17q6GOMM1X6kkvgeL3LeGkRr4C2vOhpM_JiQUWxbBtew&mode=public) (click the "Use this template" button).

2. Select *File > Publish to web…* and then click the *Publish* button.

# Exporting styles
Export styles from Sketch to your sheet. Alternatively, you can skip this step and define your initial styles in the Google Sheets interface.

![](http://g.recordit.co/BtV9lRpUJV.gif)

1. With the Sketch document containing your styles open, run the *Export* command from the Sync plugin menu. A finder window should open revealing `typography.csv`.
2. Open your Google Sheet,  select *File > Import…* and then *Upload*.
3. Drag `typography.csv` into the upload screen and select *Replace current sheet* then click *Import*.

# Importing styles
Import styles from your sheet to Sketch.

![](http://g.recordit.co/7ZrZSaRCWx.gif)

1. Copy the URL to your Google Sheet. (See below if you are using Google Apps at work)

2. Run the `Import` command from the Sync plugin menu and paste your URL into the prompt.

Your text styles, layer styles, and color palette should now be synced with your spreadsheet. Run the plugin again any time to update. Share your published sheet URL with your team to stay in sync.

## Using Google Apps at work?
Some companies prevent employees from publishing sheets. If the *Published content & settings* drill-down in the *Publish to the web* modal says that people at your company must log in to view, then Sync will not be able to access your sheet. Don't worry – you can still use Sync for typography. Just visit [Sheetsu](http://sheetsu.com/) to generate an API for your new sheet. Use your new Sheetsu URL and continue to step 4.

## Font Weight
Font variants—such as bold, italic, or narrow—are actually separate font files on your computer. You should specify these exactly as named in `~/Library/Fonts/` folder on your Mac, *excluding* the file extension (e.g. `ttf`). The [Google Sheet template](https://drive.google.com/previewtemplate?id=17q6GOMM1X6kkvgeL3LeGkRr4C2vOhpM_JiQUWxbBtew&mode=public) provides an example of this. If you get stuck, consider defining your styles in Sketch and using the export feature.

## Need help?
[View the screencast](https://dl.dropboxusercontent.com/s/f4ubqenqz8n5wne/68D4E91B-173A-4AA0-964C-AA7F9EA77AC8-5233-000032842DD067F4.gif?dl=0), [create an issue](https://github.com/nolastan/sync.sketchplugin/issues/new) or [tweet @stan](https://twitter.com/stan).

# Pattern Libraries
[Share your pattern library](https://github.com/nolastan/sync.sketchplugin/issues/new?title=Add%20library&body=I%27d%20like%20to%20add%20this%20library%20I%20created:%20) with the Sync community.
* [Material Design](https://docs.google.com/spreadsheets/d/1UkS9KRWmjvDu_DpCnB3KZ0mcYdmgyZmuWu-lkpfgjMw/pubhtml) ([Download Roboto](https://www.google.com/fonts/specimen/Roboto))

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
Run the *Import* command from the Sync plugin menu and paste your API endpoint URL into the prompt.
