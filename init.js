const userType = localStorage.getItem("userType");
console.log(userType);  // أضف هذا السطر للتحقق من القيمة
if (userType !== "instructor") { 
  window.location.href = "index.html"; 
}