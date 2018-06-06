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

Once the template in is place, you will need to update the changing variables within the HTML template. To do this, use `Template Literals` referenced from the parameters given from the `Model` function. Here is an example of the HTML template with variables added.

```
const Model = (title, colour, img_path) => {
  return `

  <div class="sw_layout--content" style="margin:auto;">
    <div class="sw_bens-banner">
        <div style="width: 100%; float:left; background-color:${colour} ;margin-top:10px;margin-bottom:20px;background: linear-gradient(45deg, rgba(118,162,185,1) 0%, rgba(8,55,90,1) 100%); padding:30px;box-sizing: border-box; min-height:110px;text-align:left;position:relative;">
          <img src="${img_path}" alt="Bristan at wolseley.co.uk" style="padding-right:30px;height:auto; width:180px;margin-bottom:15px;position:absolute;border-right:2px solid #fff;">
            <h1 style="position:absolute;left: 270px;font-weight: 300;color: #fff;font-size: 31px;text-align: left;margin-top:0;top: 35px;left: 236px;"> ${title} </h1>
        </div>
    </div> <!-- end .sw_bens-banner -->
  </div>

  `
};

module.exports = {
  Model
};
```
