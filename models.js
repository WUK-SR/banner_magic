
const custom_request = (title, colour) => {
  return `
  <div class="sw_layout--content">
        <div style="width:750px;height:102px!important;margin-bottom:15px;position:relative;margin-top:20px; padding:30px; box-sizing:border-box; height:130px; background-color: ${colour}; display:inline-block;">
            <h1 style="font-weight: 300;transition: all .5s;color: #fff;text-align: left;font-size: 32px;left: 30px;margin-top: 0;position:  absolute;top: 37px;line-height: 30px;"> ${title}</h1>
            <img src="/wcsstore/Wolseley/Attachment/Nabis/Nabis_fitsperfectly_main_WO.png" style="width: 110px;position:  absolute;right: 42px;top:15px;border-left: 2px solid #fff;padding: 10px 0px 10px 25px;">
        </div> <!-- end .sw_bens-banner -->
</div> <!-- end .sw_layout--content -->
  `
};

const online_offers = (title, colour) => {
  return `
  <div class="sw_layout--content">
        <div style="width:750px;height:102px!important;margin-bottom:15px;position:relative;margin-top:20px; padding:30px; box-sizing:border-box; height:130px; background-color: ${colour}; display:inline-block;">
            <h1 style="font-weight: 300;transition: all .5s;color: #fff;text-align: left;font-size: 32px;left: 30px;margin-top: 0;position:  absolute;top: 37px;line-height: 30px;"> ${title}</h1>
            <img src="/wcsstore/Wolseley/Attachment/Nabis/Nabis_fitsperfectly_main_WO.png" style="width: 110px;position:  absolute;right: 42px;top:15px;border-left: 2px solid #fff;padding: 10px 0px 10px 25px;">
        </div> <!-- end .sw_bens-banner -->
</div> <!-- end .sw_layout--content -->
  `
};


module.exports = {
  custom_request
};
