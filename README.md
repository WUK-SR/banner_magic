
![Example of Excel sheet data model](Utils/Images/logo.png)

Version 2.0.0

Banner Magic is a semi-automatic HTML banner creation application that can be used to speed up the process.

There are 2 steps to running Banner Magic -
<br/>
**Add the data** > **Choose a template and run!**

Follow the contents sections below in order to setup the application to fit your needs.

### Download the application
[Click here!](https://github.com/stevenrobertswolseley/banner_magic/archive/master.zip)

### Contents
1. [Installation](#Installation)
2. [Uploading the data](#Uploading_the_data)
3. [Choosing a template](#Choosing_a_template)
4. [Output](#Output)


<a name="Installation"></a>
## Installation
Clone banner magic and then run `npm install` to download all the dependencies.

<a name="Uploading_the_data"></a>
## Uploading the data
Inside the `Data` folder - found inside `Utils` in of the application - you will find two Excel sheets, one titled `deals_data_model.xlsx`, and the other titled `online_offer_data_model.xlsx`.

To update this data, open up the desired Excel and enter the data that you want, making sure to follow the supplied headings. Use  **Each row will be its own banner** and you can generate both category/homepage banners from the same Excel sheet, just use the keyword `YES` in the `HP` column at the end of the sheet. Make sure to update the data in the correct Excel sheet, as they contain the correct branding/colours for that style of banner eg. deals or online offers.

![Example of Excel sheet data model](Utils/Images/Excel_Sheet_Example.png)

### THE ORDER OF THE COLUMNS IS IMPORTANT!

<a name="Choosing_a_template"></a>
## Choosing a template
Once the data has been loaded into the correct Excel sheet, you have 4 templates to choose from.
1. Deals category banner
2. Deals homepage banner
3. Online offers category banner
4. Online offers homepage banner

### Deals category banner
To choose and run the app with a deals category banner template, use the line `npm run magic_DC`.

### Deals homepage banner
To choose and run the app with a deals category banner template, use the line `npm run magic_DH`.
** All the data in the Excel sheet will be converted into a Homepage banner, but only the ones where the keyword `YES` was stated in the `HP` column of the sheet will contain content, otherwise the files will render `Empty.`. These empty files can simply be deleted after generation.

### Online offers category banner
To choose and run the app with a deals category banner template, use the line `npm run magic_OC`.

### Online offers homepage banner
To choose and run the app with a deals category banner template, use the line `npm run magic_OOH`.
** All the data in the Excel sheet will be converted into a Homepage banner, but only the ones where the keyword `YES` was stated in the `HP` column of the sheet will contain content, otherwise the files will render `Empty.`. These empty files can simply be deleted after generation.

<a name="Output"></a>
## Output
The outputted code can be found in the `Banners` folder at the root level of the application. Once the application has been successfully run, this folder will be populated with each generated banner as a `.txt` file.

You will also get a `.zip` folder containing all of the generated banners.
