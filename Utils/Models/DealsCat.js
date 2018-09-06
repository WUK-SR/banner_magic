
const DealsCat = (cat, title_one, title_two, was_price, now_price, img_link, generic_message, message_two_a, message_two_b, promo, promo_text, code, url_link) => {

  let message = `<h2 style="position:absolute;font-size: 41px;left: 603px;top: 11px;color: #cd2e31;font-weight: 800;margin-top: 0;line-height: 38px;"> Great <br> Value </h2>`,
      promo_spot = ``;

  if(generic_message === "NO") {
    message = (
      `<h2 style="position:absolute;font-size: 18px;left: 603px;top: 8px;color: #3b3b3b;font-weight: 500;margin-top: 0;line-height: 30px"> ${message_two_a} <br><span style="color:#cd2e31;float:left;font-weight:  800;font-size: 64px;line-height: 49px;"> ${message_two_b} </span></h2>`
    )
  }

  if(promo === "YES") {
    promo_spot = (
      `<div style="position:absolute;width: 70px;height: 70px;background-color:#cd2e31;border-radius: 100px;top: 4px;left: 393px;z-index: 1;">
                      <p style="color:#fff;position:  absolute;top: 0;left: 0;right: 0;bottom: 0;text-align:  center;height: 46%;margin:  auto;width: 96%;font-size: 11px;line-height: 14px;"> ${promo_text} </p>
                    </div>`
    )
  }

    return `
    <div class="sw_layout--content">
        <a href="${url_link}" style="text-decoration:none;" title="View this offer">
            <div style="width:745px;height:150px!important;margin-bottom:15px;position:relative;margin-top:20px;padding:30px; box-sizing:border-box; height:130px; background-color: #fff; border:1px solid #3b3b3b; display:inline-block;">

              <svg style="width: 145px;position: absolute;left: 0;top: 6px;" viewBox="0 0 330.5 309" xmlns="http://www.w3.org/2000/svg"><path d="m321 199v291l62.67-.34h143.33c30.57 1 40.86-1 61-39.63l40-66c28.35-47.85 30-54.08 10.54-82l-52.91-89.25c-16.43-29.07-27.08-32.17-52-31.69h-212.13z" fill="#3b3b3b" transform="translate(-321 -181)"/></svg>

                <h3 style="margin-top: 0px; color: #fff; z-index: 1;position:  absolute;font-weight: 500;width:  100px;text-align: left;font-size: 36px;line-height: 24px;left: 10px;top: 30px;">Deals </h3>
                <h3 style="margin-top: 0px; color: #fff; z-index: 1;position:  absolute;font-weight: 300;width:  200px;text-align: left;font-size: 17px;line-height: 24px;left: 12px;top: 65px;">Big brands. </h3>
                <h3 style="margin-top: 0px; color: #fff; z-index: 1;position:  absolute;font-weight: 300;width:  200px;text-align: left;font-size: 17px;line-height: 24px;left: 12px;top: 88px;">Great prices. </h3>


                <h2 style="font-weight:300;transition: all .5s;color: #3b3b3b;text-align: left;font-size: 27px;left: 170px;margin-top: 0;position:  absolute;top: 13px;line-height: 30px;"> ${title_one} <br>${title_two} </h2>

                <div style="position:absolute;top: 196px;left: 140px;">
                  <div style="background-color:#cd2e31;height: 60px;z-index: 1;width:170px;" class="sw_deals__callout sw_deals__callout--half sw_deals__callout--dark">
                      <div class="sw_deals__callout-wrapper"><span class="sw_deals__callout-text sw_deals__callout-text--intro" style="font-size:14px;line-height:16px;">${was_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--price" style="font-size:31px;">${now_price}
        <span style="font-size: 13px;color: #fff;">ex VAT </span></span> </div>
                      <div style="height:60px;"class="sw_deals__callout-hex-wrapper sw_deals__callout-hex-wrapper--dark">
                          <svg style="height:60px;background:linear-gradient(to left, transparent 50%, #cd2e31 50%)" class="sw_deals__callout-hexagon" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 69 79.66">
                              <path class="sw_deals__callout-hex-outline--dark" transform="translate(-659.99 -333.58)" d="M694.49,340.58,722,357v32.83l-27.5,16.42L667,389.83V357l27.5-16.42m0-7a7,7,0,0,0-3.59,1L663.4,351a7,7,0,0,0-3.41,6v32.83a7,7,0,0,0,3.41,6l27.5,16.42a7,7,0,0,0,7.18,0l27.5-16.42a7,7,0,0,0,3.41-6V357a7,7,0,0,0-3.41-6l-27.5-16.42a7,7,0,0,0-3.59-1Z" fill="#cd2e31" style="fill:#C42C2D"></path>
                              <path class="sw_deals__callout-hex-centre" transform="translate(-659.99,-333.58)" d="m 694.49,340.42 c -0.72226,10e-4 -1.43066,0.1984 -2.05,0.57 l -24.29,14.5 c -1.20789,0.72092 -1.94833,2.02333 -1.95,3.43 v 29 c 0.002,1.40667 0.74211,2.70908 1.95,3.43 l 24.29,14.5 c 1.26276,0.75367 2.83724,0.75367 4.1,0 l 24.29,-14.5 c 1.20789,-0.72092 1.94833,-2.02333 1.95,-3.43 v -29 c -0.002,-1.40667 -0.74211,-2.70908 -1.95,-3.43 L 696.54,341 c -0.61934,-0.3716 -1.32774,-0.56856 -2.05,-0.57 z" fill="#cd2e31"></path>
                          </svg> <span style="color:#cd2e31;top: 17px;font-size: 13px;line-height:14px;" class="sw_deals__callout-saving sw_deals__callout-saving--text"> Great <span style="color:#cd2e31;font-weight:700;">value</span></span></div>
                  </div>
                </div>

                    <img style="position: absolute;height: auto;width: 135px;left: 430px;top: 7px;" src="${img_link}" alt="Great deals at wolseley.co.uk">

                    <div class="sw_deals__table-container">
                        <table class="sw_deals__table" style="position:  absolute;top: -11px;left: 483px;">
                            <thead class="sw_deals__table-head">
                                <tr class="sw_deals__table-row">
                                    <td>CODE</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="sw_deals__table-row sw_deals__table-row--border-fat">
                                    <td></td>
                                </tr>
                                <tr class="sw_deals__table-row sw_deals__table-row--prod-code">
                                    <td>${code}</td>
                                </tr>
                                <tr class="sw_deals__table-row sw_deals__table-row--border-thin" style="">
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    ${message}


                    <button class="btn btn-secondary" style="display:inline-block;border:none;font-size: 12px;transition: all .5s;top: 98px;left: 603px;z-index: 1;position:  absolute;margin-top:0px; padding-right:40px;" title="View this offer"> Find out more <svg style="margin-top: -2px;margin-left: 9px;display:inline-block; position:absolute;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                            <circle style="background-color:#3b3b3b;"class="sw_selector_icon-circle" cx="8.4" cy="8.4" r="8.4"></circle>
                            <polygon style="fill:#cd2e31;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
                        </svg></button>

                        ${promo_spot}


            </div></a>
    </div>
    `
};

module.exports = {
  DealsCat
};
