// 🔥 توليد 100000 نصيحة مبهرة تلقائيًا 🔥
const beginnings = [
  "ابدأ يومك بـ", "احرص دائمًا على", "تذكّر أن", "اجعل كل لحظة فرصة لـ",
  "ثق أن", "لا تنسَ أن", "تعلّم كيف", "ابتسم لأن", "تجرّأ على", "توقّف عن"
];

const actions = [
  "تحقيق أحلامك", "تطوير ذاتك", "نشر الخير", "السيطرة على أعصابك",
  "كسب احترام نفسك", "زرع الأمل في الآخرين", "كسر الروتين", "صنع الفرق",
  "التفكير بإيجابية", "إلهام من حولك", "خلق السعادة بداخلك", "تحدي نفسك كل يوم"
];

const endings = [
  "فكل خطوة صغيرة تصنع مجدك.", "فالحياة لا تنتظر المترددين.",
  "فمن يسقط ثم يقوم أقوى ألف مرة.", "فمن يزرع النور لا يخشى الظلام.",
  "فما تفعله اليوم يرسم مستقبلك غدًا.", "فالناجحون لا يولدون، بل يصنعون.",
  "لأن العظماء لا يتوقفون عند العقبات.", "فالقوة ليست في الجسد، بل في الإرادة.",
  "لأن كل فشل هو باب لفرصة أعظم.", "فالإصرار يهزم المستحيل."
];

// إنشاء 100000 نصيحة مختلفة
let tips = [];
for (let i = 0; i < 100000; i++) {
  const b = beginnings[Math.floor(Math.random() * beginnings.length)];
  const a = actions[Math.floor(Math.random() * actions.length)];
  const e = endings[Math.floor(Math.random() * endings.length)];
  tips.push(`${b} ${a} ${e}`);
}

// عناصر HTML
const tipBox = document.getElementById("tipBox");
const welcome = document.getElementById("welcome");
const content = document.getElementById("content");
const prevTip = document.getElementById("prevTip");
const nextTip = document.getElementById("nextTip");
const counter = document.getElementById("counter");

let index = 0;

// بعد الترحيب بـ 5 ثواني
setTimeout(() => {
  welcome.classList.add("hidden");
  content.classList.remove("hidden");
  showTip();
}, 5000);

// عرض النصيحة
function showTip() {
  tipBox.textContent = tips[index];
  counter.textContent = `نصيحة رقم ${index + 1} من ${tips.length}`;
}

// تنقل بين النصائح
nextTip.onclick = () => {
  index = (index + 1) % tips.length;
  showTip();
};
prevTip.onclick = () => {
  index = (index - 1 + tips.length) % tips.length;
  showTip();
};

// الأزرار
document.getElementById("likeBtn").onclick = () => alert("تم تسجيل إعجابك ❤️");
document.getElementById("copyBtn").onclick = () => {
  navigator.clipboard.writeText(tipBox.textContent);
  alert("✅ تم نسخ النصيحة بنجاح!");
};
document.getElementById("shareBtn").onclick = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "نصيحة اليوم",
      text: tipBox.textContent,
      url: window.location.href
    });
  } else {
    alert("❌ المشاركة غير مدعومة على هذا الجهاز.");
  }
};
