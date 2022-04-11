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

  $('.oneLang1').text(`AIETECH EYE TEST API PLATFORM WILL IMPROVE THE SPECIFIC DISEASE
  SCREENING RELIABILITY ON YOUR APPS OR INTELLIGENT ACCESSORIES WITH
  JUST A SIMPLE EYE PHOTO OR VIDEO.`)

  $('.onelang2').html(`
    <span>
    &lt;AIETECH API PLATFORM&gt; is AIETECH's brand for overseas
    sales which was established in 2020. Our main products include
    &lt; AIETECH API PLATFROM&gt; and &lt;AIETECH APIs&gt;. We have
    operated the AIETECH EYE TEST program and established a
    cooperative relationship with more than 15 countries. with major
    operations in the Europe, the USA and Asia Pacific. Our
    customers operate in diverse sectors, including healthcare,
    hospital, CDC department, Mobile phone company, Mobile APP
    supplier, science researcher, industries, and commercial and
    public buildings, utilities.
    </span>

    <span
    >Through AIETECH API platform, the EYE TEST algorithm could be
    easily deployed or embedded in the HD camera and any detect
    accessories, combined into a multi-modal approach including
    vision and other sensors, continually monitoring the particular
    diseases control districts were around the public access,
    transportation hub, population centre, quarantine house, making
    everyone health care more accessible with lower cost.
    </span>

    <span
    >AIETECH API platform has small, medium-sized to international
    businesses' strategy, with a series of key technologies and
    products that own completely independent intellectual property
    rights, which could provide limited and custom EYE TEST API
    technology solutions in the health care and medical computer
    vision market. At the same time, we have a variety of routes to
    market, from public welfare free test, open source free
    developer, direct API sales to third party distribution, and a
    wide range of customers, from individuals to large groups.</span
    >
    `)

    $('.tuQie').html(`
    <img src="../img/useLeft.png" alt="" />
    `)








  //mp

  $(".mpDH").html(`
    <li onclick="goHome()">HOME</li>
    <li onclick="showAlert()">NEWSROOM</li>
    <li onclick="goMobileAbout()">ABOUT US</li>
    <li onclick="goMobileContact()">CONTACT US</li>
    `);

    $('.oneMp1').text(`USE SCENARIOS`)
    $('.oneMp2').text(`Mobile Device`)
    $('.oneMp3').html(`Video Surveillance<br />
    Real-time Airport Security Checkpoint Surveillance`)


    $('.oneMp4').html(`Disease Control<br />
      Medical Device`)
      $('.oneMp5').html(`Home Self Test<br />
      Remote Healthcare`)

      $(".appCON").html(`APP Software `)







}

function langTh() {
  localStorage.setItem('localLang', 'th');
  $(".identification").html("ไทย");

  $(".pcNav").html(`<a onclick="goHome()"><span class="fontCon">หน้าหลัก</span></a>
    <a onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></a>
    <a onclick="goAbout()"><span class="fontCon">เกี่ยวกับเรา</span></a>
    <a onclick="goContact()"><span class="fontCon">ติดต่อเรา</span></a>`);


$('.oneLang1').html(`<span class="fontCon">โปรแกรมตรวจสอบสายตา AIETECH แพลตฟอร์ม API จะช่วยปรับปรุงความน่าเชื่อถือในการคัดกรองโรคในแอปหรืออุปกรณ์อัจฉริยะของคุณด้วยภาพถ่ายหรือวิดีโออย่างง่ายดาย！</span>`)


$('.onelang2').html(`
<span  class="fontCon">
&lt;AIETECH API PLATFORM&gtเป็นแบรนด์ของ AIETECH สำหรับต่างประเทศซึ่งก่อตั้งขึ้นในปี พ.ศ.2562 ผลิตภัณฑ์หลักของเราคือ&lt;AIETECH API PLATFROM&gtกับ&lt;AIETECH API&gt เราได้ดำเนินการโปรแกรม AIETECH EYE TEST และสร้างความสัมพันธ์กับกว่า 15 ประเทศ โดยมีการดำเนินงานหลักในยุโรป สหรัฐอเมริกา และเอเชียแปซิฟิก ลูกค้าของเราดำเนินงานในภาคส่วนต่างๆ ที่หลากหลาย รวมถึงการดูแลสุขภาพ โรงพยาบาล ศูนย์ควบคุมและป้องกันโรค บริษัทโทรศัพท์มือถือ ซัพพลายเออร์แอพมือถือ นักวิจัยวิทยาศาสตร์ อาคารพาณิชย์ และอาคารสาธารณะ
</span>
<span  class="fontCon">ผ่านแพลตฟอร์ม AIETECH API อัลกอริธึม EYE TEST สามารถติดตั้งหรือฝังลงในกล้อง HD และอุปกรณ์เสริมการตรวจจับใดๆ ได้อย่างง่ายดาย มีหลายรูปแบบ รวมถึงเซ็นเซอร์ต่างๆ การตรวจสอบอย่างต่อเนื่องของเขตควบคุมโรคโดยเฉพาะที่สาธารณะ ศูนย์กลางการคมนาคมขนส่ง ศูนย์ประชากร สถานที่กักตัว ทำให้การดูแลสุขภาพง่ายขึ้นด้วยค่าใช้จ่ายที่ต่ำลง </span>
<span  class="fontCon">AIETECH API PLATFORM ผ่านแพลตฟอร์ม AIETECH API อัลกอริธึม EYE TEST สามารถติดตั้งหรือฝังลงในกล้อง HD และอุปกรณ์เสริมการตรวจจับใดๆ ได้อย่างง่ายดาย มีหลายรูปแบบ รวมถึงเซ็นเซอร์ต่างๆ การตรวจสอบอย่างต่อเนื่องของเขตควบคุมโรคโดยเฉพาะที่สาธารณะ ศูนย์กลางการคมนาคมขนส่ง ศูนย์ประชากร สถานที่กักตัว ทำให้การดูแลสุขภาพง่ายขึ้นด้วยค่าใช้จ่ายที่ต่ำลง
</span>
`)

$('.tuQie').html(`
<img src="../img/useLeft.png" alt="" />
`)




// mp


$(".mpDH").html(`
<li onclick="goHome()"><span class="fontCon">หน้าหลัก</span></li>
<li onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></li>
<li onclick="goMobileAbout()"><span class="fontCon">เกี่ยวกับเรา</span></li>
<li onclick="goMobileContact()"><span class="fontCon">ติดต่อเรา</span></li>
`);

    $('.oneMp1').html(`<span class="fontCon">สถานการณ์ในการใช้</span>`)
    $('.oneMp2').html(`<span class="fontCon">อุปกรณ์โทรศัพท์มือถือ</span>`)
    $('.oneMp3').html(`<span class="fontCon">วีดีโอวงจรปิด</span>`)


    $('.oneMp4').html(`<span class="fontCon">การควบคุมโรค</span>`)
    $('.oneMp5').html(`<span class="fontCon">ตรวจเองที่บ้าน</span>`)
    $(".appCON").html(`ซอฟต์แวร์แอพ`)



}


function checkLanguage(val) {
  $("#pc_lang .index-header-lang").slideUp();
  $(".arrow").removeClass("curr");

  $('.menu').css('display', 'none');
  $('.lang').css('display', 'none');
  $('#tan').slideUp()

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

