
const DealsLHS = (cat, title_one, title_two, was_price, now_price, cat_img_link, generic_message, message_two_a, message_two_b, promo, promo_text, code, url_link) => {

  let message = `<h4 style="position:absolute;left:0;right:0;margin:auto;bottom: 148px;margin-top: 0;font-weight: 700;text-align: center;font-size: 25px;width:170px;color:#cd2e31;border-bottom: 1px solid #f1f1f1;padding-bottom: 6px;"> Great value</h4>`,
      promo_spot = ``;

  if(generic_message === "NO") {
    message = (
      `<h4 style="position:absolute;left:0;right:0;margin:auto;bottom: 148px;margin-top: 0;font-weight: 700;text-align: center;font-size: 25px;width:170px;color:#cd2e31;border-bottom: 1px solid #f1f1f1;padding-bottom: 6px;"> ${message_two_a} ${message_two_b}</h4>`
    )
  }

    return `
    <div class="sw_layout--content">
        <a href="${url_link}" style="text-decoration:none;" title="View this offer">

          <div style="background-color:#fff; width:200px;height:550px;border:1px solid #3b3b3b;position:relative;overflow:hidden;margin-bottom:20px;">

            <svg style="width: 330px;position: absolute;top: -150px;right: -58px;" enable-background="new 0 0 200 200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m176.3 46.2-66.9-38.6c-5.1-2.9-13.1-2.9-18.2 0l-66.9 38.6c-5.1 2.9-9.1 9.8-9.1 15.7v77.2c.3 6.4 3.7 12.3 9.1 15.7l66.9 38.6c5.7 2.9 12.5 2.9 18.2 0l66.9-38.6c5.4-3.5 8.8-9.3 9.1-15.7v-77.2c-.1-5.9-4-12.8-9.1-15.7z" fill="#3b3b3b"></path></svg>

            <h3 style="position: relative;color: #fff;font-weight: 500;font-size: 50px;text-align: center;margin-top: 15px;line-height: 52px;"> Deals</h3>
            <p style="position: relative;color: #fff;font-weight: 500;font-size: 20px;text-align: center;margin-top: 5px;line-height: 20px;"> Big brands. </p>
            <p style="position: relative;color: #fff;font-weight: 500;font-size: 20px;text-align: center;margin-top: 5px;">Great prices.</p>


            <img src="${cat_img_link}" alt="Great deals at wolseley.co.uk" style="position:absolute;left: 17px;top: 210px;">


            <div style="width: 100px;height: 100px;position: absolute;top: 170px;right: 5px;">
              <svg style="position:absolute;"enable-background="new 0 0 200 200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="m176.3 46.2-66.9-38.6c-5.1-2.9-13.1-2.9-18.2 0l-66.9 38.6c-5.1 2.9-9.1 9.8-9.1 15.7v77.2c.3 6.4 3.7 12.3 9.1 15.7l66.9 38.6c5.7 2.9 12.5 2.9 18.2 0l66.9-38.6c5.4-3.5 8.8-9.3 9.1-15.7v-77.2c-.1-5.9-4-12.8-9.1-15.7z" fill="#cd2e31"></path></svg>
                <p style="position:absolute;text-align: center;font-size: 14px;font-weight: 500;top: 23px;right: 0;left: 0;margin: auto;margin-top: 0;color: #fff;line-height: 19px;">${was_price} <span style="color:#fff;display: block;font-size: 20px;font-weight: 700;">${now_price}</span> ex VAT </p>
            </div>

            ${message}

            <p style="position:absolute;margin-top: 0;left:0;right:0;margin:auto;bottom: 83px;text-align: center;font-size: 21px;width:170px;"> ${title_one} <br>${title_two} </p>


            <button class="btn btn-secondary" style="display:inline-block;border:none;transition: all .5s;bottom: 22px;left:25px;position:  absolute;margin:auto; padding-right:40px;" title="View this offer"> Find out more
              <svg style="margin-top: -2px;margin-left: 9px;display:inline-block; position:absolute;" xmlns="http://www.w3.org/2000/svg" class="sw_deals__arrow-icon sw_deals__arrow-icon--full" viewBox="0 0 16.81 16.81">
                <circle style="background-color:#3b3b3b;" class="sw_selector_icon-circle" cx="8.4" cy="8.4" r="8.4"></circle>
                <polygon style="fill:#cd2e31;" class="sw_selector_icon-arrow" points="13.95 8.45 8.52 3.55 4.81 3.55 9.09 8.45 4.81 13.26 8.93 13.26 13.95 8.45">
                </polygon>
              </svg>
            </button>

          </div>
        </a>
    </div>
    `
};

module.exports = {
  DealsLHS
};
