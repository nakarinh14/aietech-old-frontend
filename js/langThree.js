$(function () {});
var localLang = localStorage.getItem('localLang');
if (localLang != null) {
  if (localLang === 'en') {
    langEn();
  } else {
    langTh();
  }
} else {
  if (window.navigator.language.slice(0, 2) == "en") {
    langEn();
  } else {
    langTh();
  }
}

function langEn() {
  localStorage.setItem('localLang', 'en');
  $(".identification").html("EN");

  $(".pcNav").html(`<a onclick="goHome()">HOME</a>
        <a onclick="showAlert()">NEWSROOM</a>
        <a onclick="goAbout()">ABOUT US</a>
        <a onclick="goContact()">CONTACT US</a>`);


  $('.threeTit').html(`<span class="fontTitle">CAUTION!</span>`)

  $('.three1').html(`BEFORE USING THE AIETECH EYE TEST `)
  $('.three2').html(`1. Regarding the Data compliance, all the AIETECH EYE TEST is only for Thailand use only!`)
  $('.three3').html(`2. In order to protect personal privacy, you must wear a mask when taking photos and only take 
                     pictures of the eye area`)
  $('.three4').html(`3. AIETECH EYE TEST is not for any treatment decisions or infection control decisions. Any
  high risk case should be confirmed with the local government standard test or other necessary medical intervention.`)

  $('.three5').html(`4. No any registration required! All input eye images in AIETECH EYE TEST from users will be
  terminated after each ephemeral testing. You can experience AIETECH EYE TEST by clicking the link and agree with
  the AIETECH EYE TEST terms including the privacy policy.`)

  $('.three6').html(`AIETECH EYE TEST<br class="visible-xs-block" /> PRIVACY POLICY`)


  $('.three7').html(`
  <span class="sp1">
  We take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal
  information. By using or accessing our Services in any manner, you acknowledge that you accept the practices
  and policies outlined below, and you hereby consent that we will collect, use and share your information as
  described in this Privacy Policy. Remember that your use of the Services is at all times subject to our Terms
  of Use, which incorporates this Privacy Policy. Any terms we use in this Policy without defining them have the
  definitions given to them in the Terms of Use.</span>

<span class="sp1">If you have any questions or comments about our privacy policy, the ways in which we collect
  and use your
  Personal Data or your choices and rights regarding such collection and use, please do not hesitate to contact
  us at: service@b-project.co.th . You may print a copy of this Privacy Policy If you have a disability, you may
  access this Privacy Policy in an alternative format by contacting <i>service@b-project.co.th</i>. </span>
<span class="sp1">
  What this Privacy Policy Covers</span>
<span>
  This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services.
  ???Personal Data??? means any information that identifies or relates to a particular individual and also includes
  information referred to as ???personally identifiable information??? or ???personal information??? under applicable
  data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we
  don't own or control or people we don't manage.</span>
<span class="sp1">Categories of Personal Data We Collect</span>

<span><em>AIETECH EYE TEST</em> : We don't collect any Personal Data with No registration required.
</span>
<span><em>Aietech Eye Test API</em> : We don't collect any APP's end-uesr personal privacy data by AIETECH API, We
  only collect the company information during AIETECH API developer registration and the developer
  qualification evaluation.
</span>


  `)





  //mp

  $(".mpDH").html(`
    <li onclick="goHome()">HOME</li>
    <li onclick="showAlert()">NEWSROOM</li>
    <li onclick="goMobileAbout()">ABOUT US</li>
    <li onclick="goMobileContact()">CONTACT US</li>
    `);







}

function langTh() {
  localStorage.setItem('localLang', 'th');
  $(".identification").html("?????????");

  $(".pcNav").html(`<a onclick="goHome()"><span class="fontCon">????????????????????????</span></a>
    <a onclick="showAlert()"><span class="fontCon">?????????????????????</span></a>
    <a onclick="goAbout()"><span class="fontCon">????????????????????????????????????</span></a>
    <a onclick="goContact()"><span class="fontCon">???????????????????????????</span></a>`);

  $('.threeTit').html(`<span class="fontTitle">?????????????????????!</span>`)

  $('.three1').html(`<span class="fontCon">?????????????????????????????????????????????????????????</span>`)
  $('.three2').html(`<span class="fontCon">1. ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????, ????????????????????????????????????????????? ???????????????-19 ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>`)
  $('.three3').html(`<span class="fontCon">2. ????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????</span>`)
  $('.three4').html(`<span class="fontCon">3. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>`)
  $('.three5').html(`<span class="fontCon">4. ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>`)
  $('.three6').html(`<span class="fontCon"><br class="visible-xs-block" /> ???????????????????????????????????????????????????????????? ???????????????-19 ????????????????????????</span>`)
  $('.three7').html(`
  <span class="sp1 fontCon">?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????? ????????? ?????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  </span>

<span class="sp1 fontCon">
????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????, ????????????????????????????????????????????????????????? ????????? ?????????????????????????????? ????????????????????????????????????????????????????????? ???????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????service@b-project.co.th . ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <i>service@b-project.co.th</i>.
 </span>
<span class="sp1 fontCon">
?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>
<span class="fontCon">
????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????? ????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>
<span class="sp1 fontCon">??????????????????????????????????????????????????????????????????????????????????????????????????????????????????</span>

<span class="fontCon">
????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
</span>
<span  class="fontCon"><em>AIETECH EYE TEST</em>????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????
</span>
<span  class="fontCon"><em>Aietech Eye Test API</em>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????? AIETECH API ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? AIETECH API ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
</span>


  `)





// mp


  $(".mpDH").html(`
    <li onclick="goHome()"><span class="fontCon">????????????????????????</span></li>
    <li onclick="showAlert()"><span class="fontCon">?????????????????????</span></li>
    <li onclick="goMobileAbout()"><span class="fontCon">????????????????????????????????????</span></li>
    <li onclick="goMobileContact()"><span class="fontCon">???????????????????????????</span></li>
    `);





}

function checkLanguage(val) {
  $("#pc_lang .index-header-lang").slideUp();

  $('.menu').css('display', 'none');

  $('#tan').slideUp()
  $('.arrow').removeClass('curr')
  $('.lang').css('display', 'none');
  pcflag = false;
  flag = false;


  if (val == 1) {
    langEn();
  } else if (val == 2) {
    langTh();
  }
}


function toggleLanguage() {
  const currentLang = localStorage.getItem('localLang');
  if (currentLang === 'en') {
    langTh();
  } else {
    langEn();
  }
}
