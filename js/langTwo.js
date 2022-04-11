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
  $('.twoLang1').html(`
      <p class="p1">85%</p>
      <p class="p2">AVERAGE ON <span>CROSS-RACE</span> PATIENTS</p>
      <p class="p3">SENSITIVITY / SPECIFICITY</p>
  `)

  $('.twoLang2').html(`
    <p class="p1">75%</p>
    <p class="p2">AVERAGE ON <span>CROSS-RACE</span> PATIENTS</p>
    <p class="p3">ASYMPTOMATIC DETECTION RATE</p>
  `)


  $('.twoLang3').html(`
    <p class="p1">97%</p>
    <p class="p2">AVERAGE ON <span>ASIAN</span> PATIENTS</p>
    <p class="p3">SENSITIVITY / SPECIFICITY</p>
  `)

  $('.twoLang4').html(`
    ON AUTHORISED RT-PCR CONFIRMED SUBJECTS<br />
    <span>VARIANCE =±10% </span>IN TERMS OF TESTING EXAMPLES
  `)


  $('.bottomText').html(`
          Since February 2020, we have launched a globally COVID-19 eye test
          program with registered clinical trials, and propose a new fast
          screening method of analyzing the eye-region images, captured by
          common CCD and CMOS cameras. This could reliably make a rapid risk
          screening of COVID-19 with the sustainable stable high performance in
          different countries and races. Meantime, we have built a globally
          COVID-19 eye test platform which implements
          our algorithms and helps fast screening COVID-19. Furthermore, this
          platform could gradually open more than 300 diseases eye tests and
          joint study programs' invitation, such as virus influenza, diabetes,
          hepatopathy, etc. We believe that the eye test study by AIETECH can
          be inspiring and helpful for encouraging more researches in this
          direction, and provide effective and rapid assist for clinical risk
          screening, especially during the daily country wide screening,
          outbreak monitoring, test pooling candidate selection.
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
  $(".identification").html("ไทย");

  $(".pcNav").html(`<a onclick="goHome()"><span class="fontCon">หน้าหลัก</span></a>
    <a onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></a>
    <a onclick="goAbout()"><span class="fontCon">เกี่ยวกับเรา</span></a>
    <a onclick="goContact()"><span class="fontCon">ติดต่อเรา</span></a>`);


$('.twoLang1').html(`
    <p class="p1 fontCon">85%</p>
    <p class="p2 fontCon">ค่าเฉลี่ยของผู้ป่วย<span>ข้ามเชื้อชาติ</span></p>
    <p class="p3 fontCon">ค่าความไว / ความจำเพาะ</p>
`)


  $('.twoLang2').html(`
  <p class="p1 fontCon">75%</p>
  <p class="p2 fontCon">ค่าเฉลี่ยของผู้ป่วย<span>ข้ามเชื้อชาติ</span></p>
  <p class="p3 fontCon">อัตราการตรวจจับแบบไม่แสดงอาการ (ASYMPTOMATIC)</p>
  `)

  $('.twoLang3').html(`
    <p class="p1 fontCon">97%</p>
    <p class="p2 fontCon">ค่าเฉลี่ยของผู้ป่วยชาว<span>เอเชีย</span></p>
    <p class="p3 fontCon">ค่าความไว / ความจำเพาะ</p>
  `)
  $('.twoLang4').html(`ทดลองกับผู้ป่วยที่ได้รับการยืนยันการตรวจ RT-PCR<br /><span class="fontCon">ความแปรปรวน &plusmn;10%</span> ในตัวอย่างการทดสอบ `)
  $('.bottomText').html(`<span class="fontCon">
  ตั้งแต่เดือนกุมภาพันธ์ 2020 เราได้เปิดตัวโปรแกรมตรวจ โควิด-19 ผ่านตา ทั่วโลกพร้อมการทดลองทางคลินิก และเสนอวิธีการคัดกรองข้อมูลที่รวดเร็วในการวิเคราะห์ภาพของดวงตาซึ่งถ่ายด้วยกล้อง CCD และ CMOS ทั่วไป ซึ่งทำให้การคัดกรองความเสี่ยงของ โควิด-19 ได้อย่างอย่างรวดเร็ว น่าเชื่อถือและมีเสถียรภาพ ในประเทศและกับเชื้อชาติต่างๆ เราได้สร้างแพลตฟอร์ม โปรแกรมตรวจ โควิด-19 API และลิงก์สำหรับสาธิตการทดสอบดวงตาฟรีทั่วโลก ซึ่งใช้อัลกอริทึมของเราและช่วยในการคัดกรองโควิด-19 อย่างรวดเร็ว นอกจากนี้ แพลตฟอร์มนี้สามารถทยอยเปิดโปรแกรมตรวจตาและโปรแกรมการศึกษาร่วมได้มากกว่า 300 รายการ เช่น ไวรัสไข้หวัดใหญ่ เบาหวาน โรคตับ เป็นต้น เราเชื่อว่าการศึกษาทดสอบสายตาโดย AIETECH สามารถสร้างแรงบันดาลใจและเป็นประโยชน์ในการสนับสนุนให้มีการวิจัยมากขึ้น และให้ความช่วยเหลืออย่างมีประสิทธิภาพและรวดเร็วสำหรับการตรวจคัดกรองความเสี่ยง โดยเฉพาะอย่างยิ่งในระหว่างการคัดกรองทั่วประเทศในแต่ละวัน การเฝ้าติดตามการระบาด</span>
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

