# Banner Magic 1.0.0
Banner Magic is a semi-automatic HTML banner creation application that can be used to speed up the process of creating a range of generic banners.

## Installation
Clone banner magic and then run `npm install` to download all the dependencies.

## Using the application
There is currently a three step process to using Banner Magic.

### Uploading a template
Once you have created one HTML banner and it has been tested and put through a QA process. Take the HTML code for the banner - which will most likely be from your local development environment - and navigate to the file `models.js` that can be found in the root of the application.

Once inside this file, you will see a function that will return the HTML template into the main `app.js`. To update the template, paste the HTML code between the back-ticks, like so...

```
const Model = () => {
  return `

  <PASTE YOUR TEMPLATE HTML CODE HERE>

  `
};

module.exports = {
  Model
};
```

Once the template in is place, you will need to update the changing variables within the HTML template. To do this, use `Template Literals` referenced from the parameters given from the `Model` function.

To add variables into the code, firstly you will need to reference the name of the variable inside the parentheses of the Model function, like so...

```
const Model = (VarOne, VarTwo, VarThree) => {
```
