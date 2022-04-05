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

  $(".sy1").text(`FULLY SELF-PERFORMANT | EPHEMERAL ｜ NON-INVASIVE`);
  $(".sy2").text(`REAL-TIME RESULT ｜ UNLIMITED THROUGHPUT | LOW COST`);
  $(".sy3").html(`    
  <span>CAUTION!</span>
  <b>
    <em class="line">PRIVACY POLICY</em> ·<em class="line">MOBILE & PAD USE ONLY</em> · <em class="line">NO PRIVACY DATA STORED</em>
  </b>
  `);
  $(".sy4").text(`RAPID AI SCREENING SOLUTIONS`);
  $(".sy5").text(`FOR THE NON-COMMERCIAL USERS`);

  $(".sy6").html(`
    <span>COVID-19</span>
    <div>TEMPERATURE</div>
    <div>HEART RATE</div>
    <div>BLOOD PRESSURE</div>
    <div>DIABETES</div>
  `);
  $(".sy7").text(`FOR THE LIMITED & CUSTOM LICENSE`);
  $(".sy8").html(`
  <div>VIRAL INFLUENZA</div>
  <div>LIVER DISEASE</div>
  <div>HEART DISEASE</div>
  <div>LUNG DISEASE</div>
  <div>PSYCHIATRIC DISORDERS ARDIOVASCULAR</div>
  <div>CEREBROVASCULAR DISEASES</div>
  `);
  $(".sy9").text(`RAPID AI SCREENING SOLUTIONS`);
  $(".sy10").text(`FOR THE NON-COMMERCIAL DEVELOPERS`);
  $(".sy11").text(`PRIVACY POLICY`);
  $(".sy221").text(`COMMERCIAL API PRIVACY POLICY`);


  $(".sy12").html(`FOR THE LIMITED & CUSTOM LICENSE<br />
  MORE PROFESSIONAL AND FUNCTIONAL!`);

  $(".syAbout").text(`ABOUT US`);
  $(".syOur").text(`OUR PURPOSE`);
  $(".syEye").text(`EYE TEST GIFT`);
  $(".index-suggestion").text(`Screening once a day with the AIETECH EYE TEST can significantly reduce the risk of cluster infection  `)
  $(".syAboutText")
    .text(`We're a transnational team of scientists, machine learning, medical
  and commercial experts, working together to advance the state of the
  AI with human eye omics, using our EYE TEST technologies for the
  widespread public benefit and life sciences discovery and collaborate
  with others on critical challenges. we are looking forward to more
  scientists, engineers and developers join us to explore the eye test
  scientific field, ensuring "equality, altruism and ethics" are the
  highest principle!`);
  $(".syOurText")
    .text(`Our purpose is to grow a safer, easier and lower cost future by EYE
  TEST technology for everyone every day. This drives every decision and
  technologies we make and ensures everyone who corporates with us is
  focused on doing those purposes that make it happen.`);
  $(".syEyeText")
    .text(`The EYE TEST technology is not only an interdisciplinary, serious and
  rigorous scientific research, but also one of the best gifts we can
  receive since human knowledge. Just like the faith and destiny in the
  COVID-19 pandemic, it always does not make things easy, but makes them
  possible. Recognized that the possibility that we all have our own
  heavy burden in the COVID-19, more and more opportunities coming out
  to helping give our the time and space to relieve ourselves of it, now
  please turn our attention to all the people for whom we are
  responsible in the life, get them to take the time off and repair
  themselves. There is nothing better than people helping for each
  other, even there will be no cost but a lot of rewards.`);

  $(".syFromTit").html(`CONTACT US`);
  $(".index-inquiry").html(`Please write down your inquiry so we can be of assistance accordingly or send Email to <a href="mailto:service@b-project.co.th">service@b-project.co.th</a>`)
  $("#main_input_name").attr("placeholder", "Name");
  $("#main_input_last_name").attr("placeholder", "Last Name");
  $("#main_input_email").attr("placeholder", "Email");
  $("#main_input_telephone").attr("placeholder", "Telephone Number");
  $("#main_input_message").attr("placeholder", "Message");
  $(".mobile-button.sySubmit").html(
    `SUBMIT<span class="mobile-right-arrow"></span>`
  );
  $(".index-button.sySubmit").html(
    `SUBMIT<span class="right-arrow"></span>`
  );


  $(".syBtn1").html(`ENTER<span class="right-arrow"></span>`);

  //mp

  $(".mpDH").html(`
    <li onclick="goHome()">HOME</li>
    <li onclick="showAlert()">NEWSROOM</li>
    <li onclick="goMobileAbout()">ABOUT US</li>
    <li onclick="goMobileContact()">CONTACT US</li>
    `);

    $('.syMp1').html(`FULLY SELF-PERFORMANT | EPHEMERAL<br />
    NON-INVASIVE | REAL-TIME RESULT<br />
    UNLIMITED THROUGHPUT | LOW COST`)

    $('.syMp2').html(`CAUTION!`)
    $('.syMp3').html(`PRIVACY POLICY <br />
    MOBILE & PAD USE ONLY <br />
    NO PRIVACY DATA STORED`)


    $(".main_input_name").attr("placeholder", "Name");
    $(".main_input_last_name").attr("placeholder", "Last Name");
    $(".main_input_email").attr("placeholder", "Email");
    $(".main_input_telephone").attr("placeholder", "Telephone Number");
    $(".main_input_message").attr("placeholder", "Message");
    $(".mobile-button.sySubmit").html(
      `SUBMIT<span class="mobile-right-arrow"></span>`
    );
    $(".index-button.sySubmit").html(
      `SUBMIT<span class="right-arrow"></span>`
    );
  $(".index-box-asian").text("ASIAN ONLY")
  $(".index-box-footer").text("SENSITIVITY / SPECIFICITY")
  $(".index-box-average").html(`AVERAGE ON <span style="color: #FFDA39">ASIAN</span> PATIENT`)



}

function langTh() {
  localStorage.setItem('localLang', 'th');
  $(".identification").html(`ภาษาไทย`);


    $(".pcNav").html(`<a onclick="goHome()"><span class="fontCon">หน้าหลัก</span></a>
    <a onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></a>
    <a onclick="goAbout()"><span class="fontCon">เกี่ยวกับเรา</span></a>
    <a onclick="goContact()"><span class="fontCon">ติดต่อเรา</span></a>`);

  $(".sy1").html(`<span>ประสิทธิภาพสูง  |  รวดเร็ว  |  ไม่ล่วงล้ำร่างกาย</span>`);
  $(".sy2").html(`<span>ผลลัพธ์เรียลไทม์  |  ไม่จำกัดจำนวนการใช้งาน  |  ไม่แพง</span>`);
  $(".sy3").html(`    
  <span  class="fontTitle">คำเตือน！ </span>
  <b>
    <em class="line fontCon">นโยบายความเป็นส่วนบุคคล</em> · <em class="line fontCon">สำหรับ สมาร์ทโฟน แท็บเล็ต</em> · <em class="line fontCon">ไม่เก็บข้อมูลความเป็นส่วนบุคคล</em>
  </b>
  `);



  $(".sy4").html(`<span class="fontCon">ทดสอบสายตา ใช้ระบบ AI ในการคัดกรอง</span>`);
  $(".sy5").html(`<span class="fontCon tip">สำหรับ ผู้ใช้ที่ไม่ใช่เชิงพาณิชย์ (บุคคลทั่วไป)</span>`);
  $(".sy6").html(`
    <span class="fontCon">COVID-19</span>
    <div><span class="fontCon">อุณภูมิ</span></div>
    <div><span class="fontCon">ชีพจรหัวใจ</span></div>
    <div><span class="fontCon">ความดันเลือด</span></div>
    <div><span class="fontCon">โรคเบาหวาน</span></div>
  `);
  $(".sy7").html(`สำหรับใบอนุญาตแบบจำกัดและกำหนดเอง`);
  $(".sy8").html(`
  <div><span class="fontCon">ไข้หวัดใหญ่</span></div>
  <div><span class="fontCon">โรคตับ</span></div>
  <div><span class="fontCon">โรคหัวใจ</span></div>
  <div><span class="fontCon">โรคปอด</span></div>
  <div><span class="fontCon">ความผิดปกติทางจิตเวช</span></div>
  <div><span class="fontCon">โรคระบบหัวใจหลอดเลือด</span></div>
  `);
  $(".sy9").html(`<span class="fontCon">สาธิตทดสอบสายตาฟรี ใช้ระบบ AI ในการคัดกรอง</span>`);
  $(".sy10").html(`<span class="fontCon">สำหรับ ผู้ใช้ที่ไม่ใช่เชิงพาณิชย์ (บุคคลทั่วไป)</span>`);
  $(".sy11").html(`<span class="fontCon">นโยบายความเป็นส่วนตัวของ API ฟรี</span>`);
  $(".sy221").html(`<span class="fontCon">นโยบายความเป็นส่วนตัวของ API เชิงพาณิชย์</span>`);

  $(".sy12").html(`<span class="fontCon">สำหรับใบอนุญาตแบบจำกัดและกำหนดเอง</span>`);

  $(".syAbout").html(`<span class="fontTitle">เกี่ยวกับเรา</span>`);
  $(".syOur").html(`<span class="fontTitle">จุดประสงค์ของเรา</span>`);
  $(".syEye").html(`<span class="fontTitle">ผลประโยชน์ของการทดสอบสายตา</span>`);
  $(".index-suggestion").text(`ใช้ AIETECH EYE TEST ทดสอบทุกวันสามารถลดคความเสี่ยงจากลัสเตอร์การติดเชื้อได้`)
  $(".syAboutText")
    .html(`<span class="fontCon">พวกเราคือทีมนักวิทยาศาสตร์ข้ามชาติ, แมชชีนเลิร์นนิ่ง, ผู้เชี่ยวชาญทางการแพทย์และทางเชิงพาณิชย์ที่ทำงานร่วมกันเพื่อพัฒนาสถานะของ AI ด้วยสายตามนุษย์ omics โดยใช้ เทคโนโลยีทดสอบสายตาของเราสำหรับสาธารณประโยชน์และ วิทยาศาสตร์เพื่อชีวิต โดยร่วมมือผู้เชี่ยวชาญอีกมากมายเพื่อแก้ปัญหาความท้าทายที่สำคัญ เราหวังว่านักวิทยาศาสตร์ วิศวกร และนักพัฒนาจำนวนมากมาช่วยเหลือเรื่องสำรวจสาขาวิทยาศาสตร์การทดสอบสายตาของเรา เพื่อให้มี "ความเท่าเทียม ความเห็นแก่ประโยชน์และจริยธรรม" เป็นหลักการสูงสุด</span>
  `);
  $(".syOurText")
    .html(`<span class="fontCon">จุดประสงค์ของเราคือการสร้าง เทคโนโลยีทดสอบสายตาที่ปลอดภัย และเข้าถึงทุกคนง่ายขึ้น นี่คือปัจจัยหลักที่เรานำมาตัดสิน และสร้างเทคโนโลยีของเรามาตลอดและเพื่อให้ผู้คนที่มาร่วมงานกับเราคำนึงและมุ่งมันสร้างเทคโนโลยีตามจุดประสงค์ที่ได้บ่งบอกไว้</span>
  `);
  $(".syEyeText")
    .html(`<span class="fontCon">เทคโนโลยีทดสอบสายตาไม่ใช่เป็นแค่การวิจัยทางวิทยาศาสตร์ระดับสหวิทยาการอย่างจริงจังอย่างเดียวแต่มันคือของขวัญที่ดีที่สุดที่เราจะได้รับจากความรู้ของมนุษย์  จากผลกระทบของการระบาดใหญ่ของโควิด -19 เรารู้ว่ามันไม่ได้ทำให้เรื่องง่ายเสมอไป แต่มันทำให้เป็นไปได้  เราทุกคนนั้นล้วนมีภาระหนักแน่นในช่วงเวลานี้แต่ก็ยังมีโอกาศมากหมายที่มาช่วยเหลือและบรรเทาทุกข์ เพราะงั้นเราควรกลับมาให้ความสนใจกับผู้คนที่เราต้องรับผิดชอบและดูแลให้คนเหล่านั้นมีเวลารักษาตัวเองเพราะไม่มีอะไรดีไปกว่าการยังมีคนช่วยเหลือซึ่งกันและกัน แม้จะไม่มีผลตอบแทนใดๆเลยก็ตาม แต่การช่วยเหลือกันและกันก็นับเป็นรางวัลที่คุ้มค่า</span>
  `);
  $(".syFromTit").html(`ติดต่อพวกเรา</span>`);
  $(".index-inquiry").html(`สามารถสอบถามข้อมูลเพิ่มเติมโดยกรอกข้อแบบฟอร์มด้านล่าง หรือส่งอีเมลไปที่ <a href="mailto:service@b-project.co.th">service@b-project.co.th</a>`)
  $("#main_input_name").attr("placeholder", "ชื่อ");
  $("#main_input_last_name").attr("placeholder", "นามสกุล");
  $("#main_input_email").attr("placeholder", "อีเมล");
  $("#main_input_telephone").attr("placeholder", "เบอร์ติดต่อ");
  $("#main_input_message").attr("placeholder", "ข้อความ");
  $(".mobile-button.sySubmit").html(`ส่งข้อความ <span class="mobile-right-arrow"></span>`);
  $(".index-button.sySubmit").html(`ส่งข้อความ <span class="right-arrow"></span>`);
  $(".syBtn1").html(`เข้าสู่ระบบ<span class="right-arrow"></span>`);
  $(".index-box-asian").text("ชาวเอเชียเท่านั้น")
  $(".index-box-footer").text("ค่าความไว / ความจำเพาะ")
  $(".index-box-average").html(`ค่าเฉลี่ยของผู้ป่วย <span style="color: #FFDA39">เอเชีย</span>`)













// mp


$(".mpDH").html(`
<li onclick="goHome()"><span class="fontCon">หน้าหลัก</span></li>
<li onclick="showAlert()"><span class="fontCon">ข่าวสาร</span></li>
<li onclick="goMobileAbout()"><span class="fontCon">เกี่ยวกับเรา</span></li>
<li onclick="goMobileContact()"><span class="fontCon">ติดต่อเรา</span></li>
`);

    $('.syMp1').html(`<span class="fontCon">ประสิทธิภาพสูง  |  รวดเร็ว<br />
    ไม่ล่วงล้ำร่างกาย | ผลลัพธ์เรียลไทม์<br />
    ไม่จำกัดจำนวนการใช้งาน | ไม่แพง</span>`)

    $('.syMp2').html(`<span class="fontCon">คำเตือน!</span>`)
    $('.syMp3').html(`<span class="fontCon"> นโยบายความเป็นส่วนบุคคล <br />
    สำหรับ สมาร์ทโฟน แท็บเล็ต <br />
    ไม่เก็บข้อมูลความเป็นส่วนบุคคล</span>`)

    $(".main_input_name").attr("placeholder", "ชื่อ");
    $(".main_input_last_name").attr("placeholder", "นามสกุล");
    $(".main_input_email").attr("placeholder", "อีเมล");
    $(".main_input_telephone").attr("placeholder", "เบอร์ติดต่อ");
    $(".main_input_message").attr("placeholder", "ข้อความ");
    $(".mobile-button.sySubmit").html(`ส่งข้อความ <span class="mobile-right-arrow"></span>`);
    $(".index-button.sySubmit").html(`ส่งข้อความ <span class="right-arrow"></span>`);

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
