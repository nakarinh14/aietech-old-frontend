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
  “Personal Data” means any information that identifies or relates to a particular individual and also includes
  information referred to as “personally identifiable information” or “personal information” under applicable
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
  $(".identification").html("ภาษาไทย");

  $(".pcNav").html(`<a onclick="goHome()"><span class="fontCon">หน้าหลัก</span></a>
    <a onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></a>
    <a onclick="goAbout()"><span class="fontCon">เกี่ยวกับเรา</span></a>
    <a onclick="goContact()"><span class="fontCon">ติดต่อเรา</span></a>`);

  $('.threeTit').html(`<span class="fontTitle">คำเตือน!</span>`)

  $('.three1').html(`<span class="fontCon">โปรดอ่านก่อนใช้ระบบ</span>`)
  $('.three2').html(`<span class="fontCon">1. ในการปฏิบัติตามข้อมูลและวัตถุประสงค์ที่ไม่ใช่เชิงพาณิชย์, การทดสอบตรวจโรค โควิด-19 ทางสายตานั้นใช้ได้แค่ในประเทศไทยเท่านั้น</span>`)
  $('.three3').html(`<span class="fontCon">2. เพื่อป้องกันความเป็นส่วนตัวของบุคคล กรุณาใส่หน้ากากอนามัยตอนถ่ายรูป แล้วก็ถ่ายแค่บริเวณตา</span>`)
  $('.three4').html(`<span class="fontCon">3. การทดสอบทางสายตานั้นไม่สามารถนำเอามาใช้เพื่อเป็นการตัดสินใจในการรักษาหรือควบคุมการติดเชื้อ ในกรณีที่มีความเสี่ยงสูงควรไปยืนยันด้วยการทดสอบมาตรฐานของรัฐบาลหรือการทดสอบทางการแพทย์ที่จำเป็นอื่นๆ</span>`)
  $('.three5').html(`<span class="fontCon">4. การสทดสอบนี้ไม่มีการลงทะเบียนใดๆทั้งสิ้น รูปภาพตา ของผู้ทดสอบนั้นจะถูกยกเลิกหลังจากการทดสอบชั่วคราว คุณสามารถทดลองใช้ระบบเพียงแต่เข้าลิงค์และตอบตกลงเงื่อนไขการใช้งานรวมถึงนโยบายความเป็นส่วนตัว</span>`)
  $('.three6').html(`<span class="fontCon"><br class="visible-xs-block" /> นโยบายการใช้ระบบตรวจ โควิด-19 ทางสายตา</span>`)
  $('.three7').html(`
  <span class="sp1 fontCon">เราให้ความสำคัญกับข้อมูลส่วนส่วนตัวของคุณเพราะฉะนั้นโปรดอ่านนโยบายนี้เพื่อที่คุณจะรู้ว่าหลักการปฏิบัติของเราต่อข้อมูลส่วนบุคคลของคุณได้อย่างไร เมื่อคุณเข้าใช้หรือเข้าถึงระบบบริการของพวกเราในลักษณะใดๆ คุณยอมรับว่าคุณนั้นได้ตกลงแนวทางปฏิบัติและนโยบายที่ระบุไว้ด้านล่างแล้ว และได้แสดงความยินยอมให้กับเราในเรื่อง การรวบรวม ใช้ และแบ่งบัน ข้อมูลส่วนตัวของคุณที่อธิบายไว้ในนโยบายความเป็นส่วนบุคคลนี้ โปรดจำไว้ว่าการใช้บริการของคุณอยู่ภายใต้ข้อกำหนดการใช้งานของเราตลอดเวลา ซึ่งรวมถึงนโยบายความเป็นส่วนบุคคลอันนี้เช่นกัน ข้อกำหนดใดๆที่เราใช้ในโดยไม่ได้กำหนดไว้มีคำจำกัดไว้ในข้อกำหนดการใช้งาน
  </span>

<span class="sp1 fontCon">
ถ้าคุณยังมีความสงสัยหรืออยากสอบถามเกี่ยวกับนโยบายส่วนบุคคลของเรา, วิธีการที่เรารวบรวม ใช้ และแบ่งบัน ข้อมูลส่วนตัวของคุณ หรือ ทางเลือกและสิทธิของคุณเกี่ยวกับการเก็บรวบรวมและการใช้งานดังกล่าว โปรดติดต่อเราได้ที่：service@b-project.co.th . คุณสามารถเข้าถึงรูปแบบทางเลือกนโยบายความเป็นส่วนบุคคลโดยติดต่อ <i>service@b-project.co.th</i>.
 </span>
<span class="sp1 fontCon">
นโยบายความเป็นส่วนบุคคลครอบคลุมอะไรบ้าง</span>
<span class="fontCon">
นโยบายความเป็นส่วนบุคคลของเราครอบคลุมวิธีเราปฏิบัติต่อข้อมูลส่วนบุคคลที่เรารวบรวมเมื่อคุณเข้าถึงหรือใช้บริการของเรา “ข้อมูลส่วนตัว” หมายถึง ข้อมูลใดๆที่ระบุหรือเกี่ยวข้องกับบุคคลใดบุคคลหนึ่ง และรวมถึงข้อมูลที่เรียกว่า “ข้อมูลส่วนบุคคล” ภายใต้กฎหมายหรือข้อบังคับเกี่ยวกับความเป็นส่วนตัวของข้อมูล  นโยบายความเป็นส่วนบุคคลนี้ไม่ครอบคลุมแนวทางปฏิบัติของบบริษัทที่เราไม่ได้เป็นเจ้าของหรือคนที่เราไม้ได้จัดการ</span>
<span class="sp1 fontCon">หมวดหมู่ของข้อมูลส่วนบุคคลที่เรารวบรวม</span>

<span class="fontCon">
แผนภูมิในส่วนนี้บอกถึงรายละเอียดหมวดหมู่ข้อมูลส่วนบุคคลที่เรารวบรวมในหลายเดือนที่ผ่านมา：
</span>
<span  class="fontCon"><em>AIETECH EYE TEST</em>：เราไม่รวบรวมข้อมูลส่วนบุคคลใดๆ โดยไม่ต้องลงทะเบียน
</span>
<span  class="fontCon"><em>Aietech Eye Test API</em>：เราไม่รวบรวมข้อมูลความเป็นส่วนตัวปลายทางของแอปใดๆ โดย AIETECH API เราเก็บรวบรวมเฉพาะข้อมูลบริษัทระหว่างการลงทะเบียนนักพัฒนา AIETECH API และการประเมินคุณสมบัติของนักพัฒนาเท่านั้น
</span>


  `)





// mp


  $(".mpDH").html(`
    <li onclick="goHome()"><span class="fontCon">หน้าหลัก</span></li>
    <li onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></li>
    <li onclick="goMobileAbout()"><span class="fontCon">เกี่ยวกับเรา</span></li>
    <li onclick="goMobileContact()"><span class="fontCon">ติดต่อเรา</span></li>
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
