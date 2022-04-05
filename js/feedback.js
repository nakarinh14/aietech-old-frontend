var submitFeedbackLoading = false;
function submitFeedback(type) {
    if (submitFeedbackLoading) {
        return;
    }
    var Name = type === 'pc' ? document.getElementById('main_input_name').value : document.getElementById('mobile_input_name').value;
    var Company = type === 'pc' ? document.getElementById('main_input_company').value : document.getElementById('mobile_input_company').value;
    var Email = type === 'pc' ? document.getElementById('main_input_email').value : document.getElementById('mobile_input_email').value;
    var Message = type === 'pc' ? document.getElementById('main_input_message').value : document.getElementById('mobile_input_message').value;

    if (Name == null || Name === '') {
        showAlert('Please Enter Name');
        return;
    }
    if (Company == null || Company === '') {
        showAlert('Please Enter Company');
        return;
    }
    if (Email == null || Email === '') {
        showAlert('Please Enter Email');
        return;
    }
    if (Message == null || Message === '') {
        showAlert('Please Enter Message');
        return;
    }
    submitFeedbackLoading = true;
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/api/feedback/send');
    xhr.setRequestHeader("Content-type","application/json");
    postData = {
        name: Name,
        company: Company,
        email: Email,
        message: Message,
    }
    xhr.send(JSON.stringify(postData));
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                showAlert('Submit Success');
                submitFeedbackLoading = false;
            } else {
                showAlert('Submit Fail');
                submitFeedbackLoading = false;
            }
        }
    };
}

function submitRecord(event, text) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/api/record/send');
    xhr.setRequestHeader("Content-type","application/json");
    postData = {
        event: event,
        message: text
    }
    xhr.send(JSON.stringify(postData));
}

function showAlert(text) {
    if (text == null) {
        text = 'Under development, will be available soon';
    }
    var alertBox = document.getElementById('main_alert_box');
    var alertText = document.getElementById('main_alert_text');
    alertText.innerText = text;
    alertBox.style.display = 'block';
}

function cancelAlert() {
    var e = window.event || arguments.callee.caller.arguments[0];
    e.preventDefault();
    var alertBox = document.getElementById('main_alert_box');
    var alertText = document.getElementById('main_alert_text');
    alertBox.style.display = 'none';
    alertText.innerText = '';
}

function showPrivacy() {
    window.location.href="./caution.html";
}

function cancelPrivacy() {
    var e = window.event || arguments.callee.caller.arguments[0];
    e.preventDefault();
    var privacyBox = document.getElementById('main_privacy_box');
    privacyBox.style.display = 'none';
}
function goHome() {
    window.location.href="./";
}
function goDemo() {
    submitRecord('open-demo', '从首页进入Demo')
    window.location.href="http://aimomics.org/demo/?lang=en#/index";
}
function goZhDemo() {
    submitRecord('open-demo', '从首页进入Demo')
    window.location.href="http://aimomics.org/demo/?lang=zh#/index";
}
function goScenarios() {
    window.location.href="./one.html";
}
function showGlobal() {
    window.location.href="./two.html";
}
function goFreeDemo() {
    window.location.href="./index.html#index_2";
}
function goApiService() {
    window.location.href="./index.html#index_3";
}
function goAbout() {
    window.location.href="./index.html#index_5";
}
function goContact() {
    window.location.href="./index.html#index_6";
}
function goMobileFreeDemo() {
    window.location.href="./index.html#mobile_2";
}
function goMobileApiService() {
    window.location.href="./index.html#index_3";
}
function goMobileAbout() {
    window.location.href="./index.html#mobile_5";
}
function goMobileContact() {
    window.location.href="./index.html#mobile_6";
}
function goNewDemo(){
    window.location.href="./demo/index.html"
}





