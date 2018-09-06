
const DealsHP = (cat, title_one, title_two, was_price, now_price, cat_img_link, hp_img_link, generic_message, message_two_a, message_two_b, promo, promo_text, code, url_link, HP) => {

  if(HP === "YES") {
    let message = `<h2 style="margin-top: 0px;position:absolute;font-size: 84px;left: 330px;top: 17px;color: #C42C2D;font-weight: 800;line-height: 76px;"> Great<br> value </h2>`,
        promo_spot = ``;

    if(generic_message === "NO") {
      message = (
        `<h2 style="margin-top: 0px;position:absolute;font-size: 50px;left: 330px;top:14px;color: #3b3b3b;font-weight: 500;line-height: 76px;"> ${message_two_a}<br><span style="color:#C42C2D;float:left;font-weight:  800;font-size: 110px;"> ${message_two_b}</span></h2>`
      )
    }

    if(promo === "YES") {
      promo_spot = (
        `<div style="position:absolute;width: 130px;height: 130px;background-color:#cd2e31;border-radius: 100px;top: 10px;left: 800px;z-index: 1;">
            <p style="color:#fff;position:  absolute;top: 0;left: 0;right: 0;bottom: 0;text-align:  center;height: 57%;margin:  auto;width: 96%;font-size: 20px;line-height: 22px;"> ${promo_text}</p>
          </div>`
      )
    }
      return `
      <div class="sw_layout--content">
        <div style="margin-bottom:0;min-width: 940px;position:relative; height:340px; border: 1px solid #000;overflow:hidden;">

          <a style="text-decoration:none;" href="${url_link}" title="View this offer">
            <div style="transition: all .5s;height: 280px;width: 300px;position: absolute;top:30px;border-bottom-right-radius: 20px;border-top-right-radius: 20px;padding: 50px 30px 50px 30px;box-sizing: border-box;background-image:url('/wcsstore/Wolseley/Attachment/Deals/dark-grey-chevron-right.png');background-size:cover;">

              <h3 style="transition: all .5s;text-align: left;color: #fff;font-size: 70px;font-weight: 800;line-height: 70px;margin: 0;"> Deals </h3>
            <h3 style="transition: all .5s;text-align: left;color: #fff;font-size: 35px;margin: 0;"> Big brands. </h3>
                <h3 style="transition: all .5s;text-align: left;color: #fff;font-size: 35px; margin: 0;"> Great prices. </h3>
            </div> <!-- end .HTMLPullout -->

              <button class="btn btn-secondary" style="padding-right: 40px;position: absolute; border:none; font-size: 17px;transition: all .5s;top: 272px;left: 330px;z-index: 1;margin-top:0px;" title="View this offer"> Find out more <svg style="position: absolute; margin-top: 2px;margin-left: 9px;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                      <circle style="background-color:#3b3b3b;"class="sw_selector_icon-circle" cx="8.4" cy="8.4" r="8.4"></circle>
                      <polygon style="fill:#C42C2D;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
                  </svg></button>

              ${message}
              <h1 style="margin-top: 0px;position:absolute;top: 184px;left: 330px;line-height: 37px;font-size: 32px;"> ${title_one} <br> ${title_two}</h1>

              <img style="position: absolute;height: auto;width: 312px;left: 609px;top: 15px;" src="${hp_img_link}" alt="Great deals at wolseley.co.uk">

              <div style="position:relative;top: 380px;left: 616px;">
                <div style="background-color:#C42C2D;" class="sw_deals__callout sw_deals__callout--half sw_deals__callout--dark">
                    <div class="sw_deals__callout-wrapper"><span class="sw_deals__callout-text sw_deals__callout-text--intro">${was_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--price">${now_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--was">ex VAT</span></div>
                    <div class="sw_deals__callout-hex-wrapper sw_deals__callout-hex-wrapper--dark">
                        <svg style="background:linear-gradient(to left, transparent 50%, #C42C2D 50%)" class="sw_deals__callout-hexagon" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 69 79.66">
                            <path class="sw_deals__callout-hex-outline--dark" transform="translate(-659.99 -333.58)" d="M694.49,340.58,722,357v32.83l-27.5,16.42L667,389.83V357l27.5-16.42m0-7a7,7,0,0,0-3.59,1L663.4,351a7,7,0,0,0-3.41,6v32.83a7,7,0,0,0,3.41,6l27.5,16.42a7,7,0,0,0,7.18,0l27.5-16.42a7,7,0,0,0,3.41-6V357a7,7,0,0,0-3.41-6l-27.5-16.42a7,7,0,0,0-3.59-1Z" fill="#ee7421"></path>
                            <path class="sw_deals__callout-hex-centre" transform="translate(-659.99,-333.58)" d="m 694.49,340.42 c -0.72226,10e-4 -1.43066,0.1984 -2.05,0.57 l -24.29,14.5 c -1.20789,0.72092 -1.94833,2.02333 -1.95,3.43 v 29 c 0.002,1.40667 0.74211,2.70908 1.95,3.43 l 24.29,14.5 c 1.26276,0.75367 2.83724,0.75367 4.1,0 l 24.29,-14.5 c 1.20789,-0.72092 1.94833,-2.02333 1.95,-3.43 v -29 c -0.002,-1.40667 -0.74211,-2.70908 -1.95,-3.43 L 696.54,341 c -0.61934,-0.3716 -1.32774,-0.56856 -2.05,-0.57 z" fill="#ee7421"></path>
                        </svg> <span style="color:#C42C2D;" class="sw_deals__callout-saving sw_deals__callout-saving--text"> Great <span style="color:#cd2e31;font-weight:700;">value</span></span></div>
                </div>
            </div>

            ${promo_spot}

            <div class="sw_deals__table-container">
                <table class="sw_deals__table" style="position:  absolute;top: -120px;left: 839px;">
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
              </div> </a>
    </div>
      `
  } else {
    return "Empty"
  }
};

module.exports = {
  DealsHP
};
