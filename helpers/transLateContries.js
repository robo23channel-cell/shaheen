const translateConstToEnum = (key) => {
    const [CHINA, TURKY, UAE, USA, KSI] = ["CHINA", "TURKY", "UAE", "USA", "KSI"]

    switch (key) {
      case USA:
        return "United States";
      case CHINA:
        return "china";
        case "89cf78c1-6f6c-4cbd-b25e-bad63e3a7935":
          return "italy";
        case UAE:
          return "United Arab Emirates";
        case TURKY:
          return "Turkey";
        case KSI:
          return "Saudi Arabia";
        default: ""
      }
    };


const translateToEnum = (key) => {
    switch (key) {
      case "d7d05bd1-4804-4be9-8d5c-f1c0b704cfd6":
        return "United States";
      case "67f1df67-7a44-457b-84f0-d7996d20c2cd":
        return "china";
        case "89cf78c1-6f6c-4cbd-b25e-bad63e3a7935":
          return "italy";
        case "2204cd5c-393e-4d89-ba08-953329feccc3":
          return "United Arab Emirates";
        case "a0a81d95-6ba4-4021-a80e-5f08c63933ac":
          return "Turkey"
        default: ""
      }
    };
    
    const translateToArabic = (key) => {
      switch (key) {
        case "United States":
          return "امريكا";
        case "China":
          return "الصين";
        case "Italy":
          return "اوروبا";
        case "United Arab Emirates":
        return "الامارات";
        case "Turkey":
        return "تركيا";
        default: ""
    }
  };
  
  const translateCurrency = (key) => {
    switch (key) {
      case "United States":
        return "الدولار";
      case "China":
        return "الإيوان";
      case "Italy":
        return "اليورو";
      case "United Arab Emirates":
      return "الدرهم";
      case "Turkey":
      return "الليرة";
      default: ""
  }
  };
  
  export default {
    translateToEnum,
    translateToArabic,
    translateCurrency,
    translateConstToEnum
  };
  