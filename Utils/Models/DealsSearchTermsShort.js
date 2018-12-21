
const DealsSearchTermsShort = (cat,message,percentage) => {

  let price_message = ``;

  if(message === "Save over") {
    price_message = `<div style="position:absolute;top: 11px;right: 60px;text-align:center;">
      <h4 style="margin:0;color:#fff;font-size: 31px;font-weight: 500;line-height: 39px;"> Save </h4>
      <h4 style="margin:0;color:#fff;font-weight:  500;font-size: 19px;line-height: 16px;"> over </h4>
      <h3 style="margin:0;font-weight: 500;color:#fff;font-size: 50px;line-height: 52px;"> ${percentage} </h3>
    </div>`
  } else if(message === "Save") {
    price_message = `<div style="position:absolute;top: 11px;right: 60px;text-align:center;">
      <h4 style="margin:0;color:#fff;font-size: 31px;font-weight: 500;line-height: 39px;"> Save </h4>
      <h3 style="margin:0;font-weight: 500;color:#fff;font-size: 50px;line-height: 52px;"> ${percentage} </h3>
    </div>`
  } else if(message === "Save up to") {
    price_message = `<div style="position:absolute;top: 11px;right: 60px;text-align:center;">
      <h4 style="margin:0;color:#fff;font-size: 31px;font-weight: 500;line-height: 39px;"> Save </h4>
      <h4 style="margin:0;color:#fff;font-weight:  500;font-size: 19px;line-height: 16px;"> up to </h4>
      <h3 style="margin:0;font-weight: 500;color:#fff;font-size: 50px;line-height: 52px;"> ${percentage} </h3>
    </div>`
  } else if(message === "Great deals" || message === "Great Deals" || message === "great deals" ) {
    price_message = `<div style="position:absolute;top: 23px;right: 64px;text-align:center;">
          <h4 style="margin:0;color:#fff;font-size: 36px;font-weight: 500;line-height: 39px;"> Great </h4>
          <h4 style="margin:0;color:#fff;font-size: 36px;font-weight: 500;line-height: 39px;"> deals </h4>
        </div>`
  }

if(cat.length >= 9) {

  return (
    `<div class="sw_layout--content">
      <div style="width:750px;height:150px!important;margin-bottom:15px;position:relative;margin-top:5px; box-sizing:border-box; height:130px; background-color: #fff; display:inline-block;">

        <div style="background-color:#3b3b3b; height: 100px; width:100%;margin-top:25px;padding:20px 40px;box-sizing:border-box;">
          <h1 style="color:#fff;font-size:50px;font-weight:500;margin:0px;"> ${cat} </h1>
        </div>

        <svg viewBox="0 0 330.5 309" style="position:absolute;top: 7px;transform: rotate(90deg);width: 145px;left: 570px;" xmlns="http://www.w3.org/2000/svg"><path d="m321 199v291l62.67-.34h143.33c30.57 1 40.86-1 61-39.63l40-66c28.35-47.85 30-54.08 10.54-82l-52.91-89.25c-16.43-29.07-27.08-32.17-52-31.69h-212.13z" fill="#cd2e31" transform="translate(-321 -181)"/></svg>
        ${price_message}
      </div>
</div>
`
  )
} else {
  return (
    `<div class="sw_layout--content">
      <div style="width:750px;height:150px!important;margin-bottom:15px;position:relative;margin-top:5px; box-sizing:border-box; height:130px; background-color: #fff; display:inline-block;">

        <div style="background-color:#3b3b3b; height: 100px; width:100%;margin-top:25px;padding:20px 40px;box-sizing:border-box;">
          <h1 style="color:#fff;font-size:50px;font-weight:500;margin:0px;"> ${cat} </h1>

          <div style="position:absolute;top: 45px;left:370px;">
            <svg style="position: absolute;margin-top: -3px;margin-left: -52px;width: 60px;height: 34px;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                    <polygon style="fill:#C42C2D;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
                </svg>

                <svg style="position: absolute;margin-top: 30px;margin-left: -52px;width: 60px;height: 34px;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                        <polygon style="fill:#C42C2D;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
                    </svg>
            <p style="margin:0;color:#fff;font-size: 22px;font-weight: 300;line-height: 30px;">Big brands</p>
            <p style="margin:0;color:#fff;font-size: 22px;font-weight: 300;line-height: 38px;">Great prices</p>
          </div>

        </div>

        <svg viewBox="0 0 330.5 309" style="position:absolute;top: 7px;transform: rotate(90deg);width: 145px;left: 570px;" xmlns="http://www.w3.org/2000/svg"><path d="m321 199v291l62.67-.34h143.33c30.57 1 40.86-1 61-39.63l40-66c28.35-47.85 30-54.08 10.54-82l-52.91-89.25c-16.43-29.07-27.08-32.17-52-31.69h-212.13z" fill="#cd2e31" transform="translate(-321 -181)"/></svg>

        ${price_message}
      </div>
</div>`
  )
}

};

module.exports = {
  DealsSearchTermsShort
};
