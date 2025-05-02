// دالة تحويل المستخدم بعد تسجيل الدخول
function redirectToDashboard(event) {
  event.preventDefault(); // يمنع إعادة تحميل الصفحة
  window.location.href = "dashboard.html"; // ينقلك للصفحة التالية
}

// دالة تسجيل الخروج
function logout() {
  // لو فيه localStorage هنا ممكن تمسح بيانات من الـ localStorage
  // localStorage.clear();

  // تحويل المستخدم لصفحة تسجيل الدخول
  window.location.href = "index.html";
}

// -------------------------------
// دالة تأكيد تقديم الطالب على كورس (تُستخدم في apply.html)
function applyForCourse(courseCode) {
  let appliedCourses = JSON.parse(localStorage.getItem("appliedCourses")) || [];

  // لو مش مقدم عليه قبل كده، ضيفه
  if (!appliedCourses.includes(courseCode)) {
    appliedCourses.push(courseCode);
    localStorage.setItem("appliedCourses", JSON.stringify(appliedCourses));
  }

  // رجعه لصفحة الكورسات
  window.location.href = "courses.html";
}

// -------------------------------
// دالة مساعدة لتتحقق إذا الكورس متقدم عليه (تُستخدم في courses.html)
function isCourseApplied(courseCode) {
  let appliedCourses = JSON.parse(localStorage.getItem("appliedCourses")) || [];
  return appliedCourses.includes(courseCode);
}
/* ====== كود خاص بصفحة home.html ====== */

// دالة تسجيل الخروج
function logout() {
  // مسح بيانات التخزين المحلي (لزيادة الأمان)
  localStorage.clear();
  // تحويل المستخدم إلى صفحة تسجيل الدخول
  window.location.href = "index.html";
}

// عند تحميل الصفحة، نعرض اسم الطالب المخزن في localStorage داخل صفحة الترحيب
document.addEventListener("DOMContentLoaded", function() {
  const studentName = localStorage.getItem("studentName");
  if (studentName) {
    const nameElement = document.getElementById("studentName");
    if (nameElement) {
      nameElement.textContent = studentName;
    }
  }
});

// -------------------------------
// دالة عرض ملخص طلبات إعادة الامتحان (ريتيك) في مودال
function showRetakeSummary() {
  const retakeList = document.getElementById("retakeList");
  retakeList.innerHTML = ""; // تفريغ المودال أولاً

  const exams = JSON.parse(localStorage.getItem("resitApplied")) || [];
  if (exams.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No retake exams applied.";
    li.className = "list-group-item text-center";
    retakeList.appendChild(li);
  } else {
    exams.forEach(exam => {
      const li = document.createElement("li");
      li.textContent = exam;
      li.className = "list-group-item text-center";
      retakeList.appendChild(li);
    });
  }

  // فتح المودال تلقائيًا
  const modal = new bootstrap.Modal(document.getElementById("retakeModal"));
  modal.show();
}
