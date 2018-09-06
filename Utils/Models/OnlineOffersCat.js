
const OnlineOffersCat = (cat, title_one, title_two, was_price, now_price, cat_img_link, hp_image_link, generic_message, message_two_a, message_two_b, promo, promo_text, code, url_link, HP) => {

  let message = `<h2 style="position:absolute;font-size: 41px;left: 603px;top: 11px;color: #ee7421;font-weight: 800;margin-top: 0;line-height: 38px;"> Great <br> value </h2>`,
      promo_spot = ``;

  if(generic_message === "NO") {
    message = (
      `<h2 style="position:absolute;font-size: 18px;left: 603px;top: 8px;color: #3b3b3b;font-weight: 500;margin-top: 0;line-height: 30px"> ${message_two_a} <br><span style="color:#ee7421;float:left;font-weight:  800;font-size: 64px;line-height: 49px;"> ${message_two_b} </span></h2>`
    )
  }

  if(promo === "YES") {
    promo_spot = (
      `<div style="position:absolute;width: 60px;height: 60px;background-color:#cd2e31;border-radius: 100px;top: 80px;left: 521px;z-index: 1;">
              <p style="color:#fff;position:  absolute;top: 0;left: 3px;right: 0;bottom: 0;text-align:  center;height: 59%;margin:  auto;/* width: 99%; */font-size: 13px;line-height: 14px;"> ${promo_text} </p>
            </div>`
    )
  }

    return `
    <div class="sw_layout--content">
      <a href="${url_link}" style="text-decoration:none;" title="View this offer">
          <div style="width:745px;height:150px!important;margin-bottom:15px;position:relative;margin-top:20px; padding:30px; box-sizing:border-box; height:130px; background-color: #fff; border:1px solid #3b3b3b; display:inline-block;">
              <h3 style="margin-top: 0px;color: #fff;z-index: 1;position:  absolute;font-weight:300;width:  100px;font-size: 22px;text-align:  center;line-height: 24px;top: 27%;">Online exclusive offers </h3>
              <svg style="width: 135px;height: 135px;position:  absolute;top: 7px;left: 11px;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M176.26,46.17,109.37,7.55c-5.09-2.94-13.06-2.93-18.15,0L24.33,46.17c-5.09,2.94-9.07,9.85-9.07,15.72v77.23a19.78,19.78,0,0,0,9.07,15.72l66.89,38.62a19.74,19.74,0,0,0,18.15,0l66.89-38.62a19.78,19.78,0,0,0,9.07-15.72V61.89C185.33,56,181.35,49.11,176.26,46.17Z" fill="#ee7421"/></svg>
              <h1 style="font-weight:300;transition: all .5s;color: #3b3b3b;text-align: left;font-size: 27px;left: 170px;margin-top: 0;position:  absolute;top: 13px;line-height: 30px;"> ${title_one} <br> ${title_two}</h1>

              <div style="position:absolute;top: 196px;left: 140px;">
                <div style="background-color:#ee7421;height: 60px;z-index: 1;" class="sw_deals__callout sw_deals__callout--half sw_deals__callout--dark">
                    <div class="sw_deals__callout-wrapper"><span class="sw_deals__callout-text sw_deals__callout-text--intro" style="font-size:14px;line-height:16px;">${was_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--price" style="font-size:31px;">${now_price}
      <span style="font-size: 13px;color: #fff;">ex VAT </span></span> </div>
                    <div style="height:60px;"class="sw_deals__callout-hex-wrapper sw_deals__callout-hex-wrapper--dark">
                        <svg style="height:60px;background:linear-gradient(to left, transparent 50%, #ee7421 50%)" class="sw_deals__callout-hexagon" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 69 79.66">
                            <path class="sw_deals__callout-hex-outline--dark" transform="translate(-659.99 -333.58)" d="M694.49,340.58,722,357v32.83l-27.5,16.42L667,389.83V357l27.5-16.42m0-7a7,7,0,0,0-3.59,1L663.4,351a7,7,0,0,0-3.41,6v32.83a7,7,0,0,0,3.41,6l27.5,16.42a7,7,0,0,0,7.18,0l27.5-16.42a7,7,0,0,0,3.41-6V357a7,7,0,0,0-3.41-6l-27.5-16.42a7,7,0,0,0-3.59-1Z" fill="#ee7421"></path>
                            <path class="sw_deals__callout-hex-centre" transform="translate(-659.99,-333.58)" d="m 694.49,340.42 c -0.72226,10e-4 -1.43066,0.1984 -2.05,0.57 l -24.29,14.5 c -1.20789,0.72092 -1.94833,2.02333 -1.95,3.43 v 29 c 0.002,1.40667 0.74211,2.70908 1.95,3.43 l 24.29,14.5 c 1.26276,0.75367 2.83724,0.75367 4.1,0 l 24.29,-14.5 c 1.20789,-0.72092 1.94833,-2.02333 1.95,-3.43 v -29 c -0.002,-1.40667 -0.74211,-2.70908 -1.95,-3.43 L 696.54,341 c -0.61934,-0.3716 -1.32774,-0.56856 -2.05,-0.57 z" fill="#ee7421"></path>
                        </svg> <span style="color:#ee7421;top: 17px;font-size: 13px;line-height:14px;" class="sw_deals__callout-saving sw_deals__callout-saving--text"> Great <span style="color:#ee7421;font-weight:700;">value</span></span></div>
                </div>
              </div>

              ${promo_spot}

                  <img style="position: absolute;height: auto;width: 143px;left: 427px;top: 8px;" src="${cat_img_link}" alt="Online offers at Wolseley.co.uk">


                  ${message}

                  <button class="btn btn-secondary" style="display:inline-block;border:none;font-size: 12px;transition: all .5s;top: 98px;left: 603px;z-index: 1;position:  absolute;margin-top:0px; padding-right:40px;" title="View this offer"> Find out more <svg style="margin-top: -2px;margin-left: 9px;display:inline-block; position:absolute;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                        <circle style="background-color:#3b3b3b;"class="sw_selector_icon-circle" cx="8.4" cy="8.4" r="8.4"></circle>
                        <polygon style="fill:#cd2e31;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
                    </svg></button>


          </div></a>
  </div>

    `
};

module.exports = {
  OnlineOffersCat
};
