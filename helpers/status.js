// const status =  {
//     ar: [ 'تم انشائها', 'تم التواصل',"Bulk", 'تم استلامها', "BUlk", "BUlk", "BUlk" , "BUlk", 'تمت الحوالة', 'تشحن', 'وصلت', 'خطأ', 'باقي الشحنة', 'تم التحميل'],
//     en: [ 'Initiated', 'Contacted',"Bulk", 'Recived', "BUlk", "BUlk", "BUlk" , "BUlk", 'Swift', 'Shipping', 'Arraived', 'Wrong', 'RestRecived', 'Bullked'],
// };
const status = {
    ar: [
      "تم الإنشاء",
      " تم التواصل مع البائع",
      "خطأ",
      "تم تحويل القيمة",
      "استلمت في المخزن",
      "شحن جزئي",
      "قيد الشحن",
      "جاهزة للاستلام",
      "تم الإستلام",
      // "إنشاء Bulk",
    ],
    en: [
      "Initiated",
      "Contacted",
      "Wrong",
      "Swift",
      "Recived" ,
      "RestRecived",
      "Shipping",
      "Arraived",
      "Deliverd",
      // "Created Bulk",
    ],
  };
  
  const colors = [
    "#ADD8E6",  
    "#FFA500", //Turquoise
    "#BB3737",
    "#1557A9", //Blue
    "#32CD32", //Orange - Yellow
    "#7E90FF", //Yellow
    "#7E90FF", //Yellow
    "#90EE90", //Orange
    "#AAAAAA", // Neon Green
  ];
  
  export default {
    status,
    colors,
  };
  