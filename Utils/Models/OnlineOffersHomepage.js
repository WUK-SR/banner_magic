
const OnlineOffersHP = (cat, title_one, title_two, was_price, now_price, cat_img_link, hp_img_link, generic_message, message_two_a, message_two_b, promo, promo_text, code, url_link, HP) => {

  if(HP === "YES") {
    let message = `<h2 style="margin-top: 0px;position:absolute;font-size: 84px;left: 330px;top: 17px;color: #ee7421;font-weight: 800;line-height: 76px;"> Great<br> value </h2>`,
        promo_spot = ``;

    if(generic_message === "NO") {
      message = (
        `<h2 style="margin-top: 0px;position:absolute;font-size: 50px;left: 320px;top:14px;color: #3b3b3b;font-weight: 500;line-height: 76px;"> ${title_one}<br><span style="color:#ee7421;float:left;font-weight:  800;font-size: 110px;"> ${title_two} </span></h2>`
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
    <div style="margin-bottom:0;min-width: 940px;position:relative; height:340px; border: 1px solid #000;">

      <a style="text-decoration:none;" href="${url_link}" title="View this offer">
          <div style="position: relative;">
              <svg class="icon" style="position: absolute;top:30px;transition: all .5s;width: 280px;height: 280px;" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>Browse plumbing</title><path d="M88.28,22.63,54.83,3.32a9.88,9.88,0,0,0-9.07,0L12.31,22.63a9.9,9.9,0,0,0-4.53,7.86V69.11A9.91,9.91,0,0,0,12.31,77l33.45,19.3a9.82,9.82,0,0,0,9.07,0L88.28,77a9.91,9.91,0,0,0,4.53-7.86V30.49A9.9,9.9,0,0,0,88.28,22.63Z" fill="#ee7421"/></svg>
              <h3 style="margin-top: 0px;color:#fff;position:absolute;top: 100px;bottom:  0;left: 0px;right: 0;width: 30%;font-size: 45px;text-align:  center;line-height:50px;font-weight: 300;"> Online exclusive offer</h3>
          </div> <!-- end .icon -->

          <button class="btn btn-primary" style="padding-right: 40px;position: absolute;background-color:#3b3b3b; border:none; font-size: 17px;transition: all .5s;top: 272px;left: 320px;z-index: 1;margin-top:0px;" title="View this offer"> Find out more <svg style="position: absolute; margin-top: 2px;margin-left: 9px;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                  <circle style="background-color:#3b3b3b;"class="sw_selector_icon-circle" cx="8.4" cy="8.4" r="8.4"></circle>
                  <polygon style="fill:#cd2e31;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45"></polygon>
              </svg></button>

          <h2 style="margin-top: 0px;position:absolute;font-size: 50px;left: 320px;top:14px;color: #3b3b3b;font-weight: 500;line-height: 76px;"> Save up to<br><span style="color:#ee7421;float:left;font-weight:  800;font-size: 110px;"> 20% </span></h2>
          <h1 style="margin-top: 0px;position:absolute;top: 184px;left: 320px;line-height: 37px;font-size: 32px;"> ${title_one} <br> ${title_two} </h1>

          <div style="position:absolute;width: 130px;height: 130px;background-color:#cd2e31;border-radius: 100px;top: 10px;left: 800px;z-index: 1;">
            <p style="color:#fff;position:  absolute;top: 0;left: 0;right: 0;bottom: 0;text-align:  center;height: 55%;margin:  auto;width: 96%;font-size: 25px;line-height: 27px;"> PLUS <br>FREE <br>TRV </p>
          </div>

          <img style="position: absolute;height: auto;width: 300px;left: 578px;top: 21px;" src="${hp_img_link}" alt="">


          <div style="position:relative;top: 380px;left: 675px;">
    <div style="background-color:#ee7421;" class="sw_deals__callout sw_deals__callout--half sw_deals__callout--dark">
        <div class="sw_deals__callout-wrapper"><span class="sw_deals__callout-text sw_deals__callout-text--intro">${was_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--price">${now_price}</span> <span class="sw_deals__callout-text sw_deals__callout-text--was">ex VAT</span></div>
        <div class="sw_deals__callout-hex-wrapper sw_deals__callout-hex-wrapper--dark">
            <svg style="background:linear-gradient(to left, transparent 50%, #ee7421 50%)" class="sw_deals__callout-hexagon" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 69 79.66">
                <path class="sw_deals__callout-hex-outline--dark" transform="translate(-659.99 -333.58)" d="M694.49,340.58,722,357v32.83l-27.5,16.42L667,389.83V357l27.5-16.42m0-7a7,7,0,0,0-3.59,1L663.4,351a7,7,0,0,0-3.41,6v32.83a7,7,0,0,0,3.41,6l27.5,16.42a7,7,0,0,0,7.18,0l27.5-16.42a7,7,0,0,0,3.41-6V357a7,7,0,0,0-3.41-6l-27.5-16.42a7,7,0,0,0-3.59-1Z" fill="#ee7421"></path>
                <path class="sw_deals__callout-hex-centre" transform="translate(-659.99,-333.58)" d="m 694.49,340.42 c -0.72226,10e-4 -1.43066,0.1984 -2.05,0.57 l -24.29,14.5 c -1.20789,0.72092 -1.94833,2.02333 -1.95,3.43 v 29 c 0.002,1.40667 0.74211,2.70908 1.95,3.43 l 24.29,14.5 c 1.26276,0.75367 2.83724,0.75367 4.1,0 l 24.29,-14.5 c 1.20789,-0.72092 1.94833,-2.02333 1.95,-3.43 v -29 c -0.002,-1.40667 -0.74211,-2.70908 -1.95,-3.43 L 696.54,341 c -0.61934,-0.3716 -1.32774,-0.56856 -2.05,-0.57 z" fill="#ee7421"></path>
            </svg> <span style="color:#ee7421;" class="sw_deals__callout-saving sw_deals__callout-saving--text"> Great <span style="color:#ee7421;font-weight:700;">value</span></span></div>
    </div>
</div>
          </div> </a>

    </div>
      `
  } else {
    return "Empty"
  }
};

module.exports = {
  OnlineOffersHP
};
