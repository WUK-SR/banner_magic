
const Model = (title) => {
  return `
  <div class="sw_layout--content" style="margin:auto;">
    <div class="sw_bens-banner">
        <div style="width: 100%; float:left; background-color:#032C4D;margin-top:10px;margin-bottom:20px;background: linear-gradient(45deg, rgba(118,162,185,1) 0%, rgba(8,55,90,1) 100%); padding:30px;box-sizing: border-box; min-height:110px;text-align:left;position:relative;">
          <img src="/wcsstore/Wolseley/Attachment/Bristan/Bristan_Logo.png" alt="Bristan at wolseley.co.uk" style="padding-right:30px;height:auto; width:180px;margin-bottom:15px;position:absolute;border-right:2px solid #fff;">
            <h1 style="position:absolute;left: 270px;font-weight: 300;color: #fff;font-size: 31px;text-align: left;margin-top:0;top: 35px;left: 236px;">${title}</h1>
        </div>
    </div> <!-- end .sw_bens-banner -->
  </div>
  `
};

module.exports = {
  Model
};
