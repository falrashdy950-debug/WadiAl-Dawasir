// 1. عرض رسالة ترحيبية (تفاعل JavaScript)
function welcomeMessage() {
    alert("حياك الله في وادي الدواسر! نورت صفحتنا.");
}

// 2. قائمة Hamburger للشاشات الصغيرة
function toggleMenu() {
    var menu = document.getElementById("navlinks");
    menu.classList.toggle("show");
}

// 4. تحسين تجربة المستخدم (تفاعل عند تمرير الفأرة)
function changeText() {
    document.getElementById("hover-box").innerHTML = "وادي الدواسر قلب نجد النابض! ✨";
}
function resetText() {
    document.getElementById("hover-box").innerHTML = "مرر الفأرة هنا لاكتشاف سر!";
}
