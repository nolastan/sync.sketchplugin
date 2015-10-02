# Sync Sketch Plugin
Save your text styles on Google Sheet and keep your design team in sync.

# Installation
[Download the zip](https://github.com/nolastan/sync.sketchplugin/archive/master.zip), unzip it, and rename the folder to "sync.sketchplugin". It should now have a Sketch icon. Open the file and the plugin will install.

# Getting started

1. Create a Google Sheet with the following columns. Fill each row with your text styles.
 - Style (e.g. *Headline 1*)
 - Size (e.g. *32*)
 - Line (e.g. *40*)
 - Color (e.g. *DD2E1F*)
 - Opacity (e.g. *85*)
 - Typeface (e.g. *SourceSansPro-Semibold*)

 2. Visit [Sheetsu](http://sheetsu.com/) and generate an API for your spreadsheet.

 3. Run the Sync command from the plugin menu and paste your Sheetsu URL into the prompt.

All your text styles should now be synced with your spreadsheet. Run the plugin again any time to update.

# Custom API
As an alternative to Google Sheets, you can create a custom JSON api with the following structure:
```
{
  …
  result: [
    {
      Style: "Headline 1",
      Size: "32",
      Line: "40",
      Color: "DD2E1F",
      Opacity: "85",
      Typeface: "SourceSansPro-Semibold",
    },
    …
  ]
}
```
Run the Sync command from the plugin menu and paste your API endpoint URL into the prompt.
