const userType = localStorage.getItem("userType");
console.log(userType);  // أضف هذا السطر للتحقق من القيمة
if (userType !== "faculty_secretary") { 
  window.location.href = "index.html"; 
}