/** שאלות ידע כללי — אחרי כל תשובה נחשף הישג של הציונות הדתית */
window.TRIVIA_QUESTIONS = [
  {
    id: "tax-brackets",
    category: "כלכלה",
    categoryIcon: "chart",
    question: "מה תפקידן של מדרגות מס הכנסה?",
    options: [
      { icon: "receipt", label: "לקבוע כמה מס משלמים לפי גובה ההכנסה" },
      { icon: "bank", label: "לקבוע את ריבית המשכנתא בבנקים" },
      { icon: "cart", label: "לקבוע מחיר מקסימלי למוצרי מזון" },
      { icon: "card", label: "לקבוע כמה אשראי אפשר לקבל בכרטיס" }
    ],
    correctIndex: 0,
    achievementTitle: "הפחתת מדרגות מס",
    achievement: "אנחנו הורדנו את נטל המס על העובדים — הקלה של עד כ־5,000 ₪ בשנה לעובד, ישירות ביוקר המחיה."
  },
  {
    id: "fake-invoices",
    category: "כלכלה",
    categoryIcon: "chart",
    question: "מהי חשבונית פיקטיבית?",
    options: [
      { icon: "doc", label: "חשבונית על הוצאה שלא באמת קרתה — כדי להעלים מס" },
      { icon: "building", label: "חשבונית רגילה של עסק קטן" },
      { icon: "card", label: "קבלה על תשלום באשראי בלבד" },
      { icon: "phone", label: "חשבונית דיגיטלית שנשלחת בוואטסאפ" }
    ],
    correctIndex: 0,
    achievementTitle: "חוק חשבוניות ישראל",
    achievement: "אנחנו קידמנו את חוק חשבוניות ישראל — לצמצום הונאות ולחיסכון של מיליארדים לקופת המדינה."
  },
  {
    id: "miluim-tax",
    category: "כלכלה",
    categoryIcon: "medal",
    question: "מהן נקודות זיכוי במס?",
    options: [
      { icon: "star", label: "הטבה שמקטינה את סכום מס ההכנסה שמשלמים" },
      { icon: "ticket", label: "נקודות מועדון לקניון" },
      { icon: "fuel", label: "הנחה קבועה על דלק בכל תחנה" },
      { icon: "ban", label: "קנס על איחור בהגשת דוח שנתי" }
    ],
    correctIndex: 0,
    achievementTitle: "הטבת מס למילואימניקים",
    achievement: "אנחנו הבאנו נקודות זיכוי בשווי עד 11,616 ₪ למי ששירת 30+ ימי מילואים — הכרה אמיתית במאמץ."
  },
  {
    id: "regional-tax",
    category: "כלכלה",
    categoryIcon: "home",
    question: "למה מדינות נותנות הטבות מס באזורי עדיפות?",
    options: [
      { icon: "map", label: "כדי לחזק יישובים בפריפריה ובחזית ולעודד מגורים שם" },
      { icon: "hammer", label: "כדי להקפיא בנייה למגורים" },
      { icon: "bus", label: "כדי לבטל תחבורה ציבורית באזורים האלה" },
      { icon: "cash", label: "כדי להכפיל ארנונה על כל תושב" }
    ],
    correctIndex: 0,
    achievementTitle: "הטבת מס ליו״ש, אשקלון ונוף הגליל",
    achievement: "אנחנו הבאנו הטבת מס בשיעור 7% לתושבים — חיזוק למשפחות בחזית ובפריפריה."
  },
  {
    id: "early-childhood",
    category: "כלכלה",
    categoryIcon: "baby",
    question: "מהו ״גיל הרך״ בישראל בדרך כלל?",
    options: [
      { icon: "baby", label: "השנים הראשונות לחיי הילד — עד גיל 3 בערך" },
      { icon: "school", label: "רק כיתה א׳ עד ג׳" },
      { icon: "family", label: "גילאי 12–18 בלבד" },
      { icon: "ban", label: "רק תינוקות עד גיל חצי שנה" }
    ],
    correctIndex: 0,
    achievementTitle: "סיוע להורים בגיל הרך",
    achievement: "אנחנו העברנו נקודות זיכוי להורים לילדים עד גיל 3 — הקלה של כ־1,000 ₪ בחודש למשפחות."
  },
  {
    id: "bank-competition",
    category: "כלכלה",
    categoryIcon: "bank",
    question: "מה קורה כשיש יותר תחרות בין בנקים?",
    options: [
      { icon: "spark", label: "בדרך כלל הריבית והעמלות יורדות לטובת הלקוח" },
      { icon: "up", label: "המשכנתאות תמיד מתייקרות אוטומטית" },
      { icon: "building", label: "כל הבנקים חייבים להתמזג לבנק אחד" },
      { icon: "ban", label: "סוגרים סניפים רק בפריפריה" }
    ],
    correctIndex: 0,
    achievementTitle: "רפורמה לבנקים קטנים",
    achievement: "אנחנו קידמנו רפורמה להקמת בנקים קטנים — יותר תחרות, ואשראי זול יותר למשקי בית ולעסקים."
  },
  {
    id: "bank-profits",
    category: "כלכלה",
    categoryIcon: "gem",
    question: "מהם ״רווחי יתר״ של בנקים?",
    options: [
      { icon: "scale", label: "רווחים גבוהים במיוחד מעבר לרמה הרגילה במשק" },
      { icon: "ticket", label: "הנחות שהבנק נותן ללקוחות" },
      { icon: "down", label: "הפסדים של הבנק ברבעון" },
      { icon: "phone", label: "עמלת משיכת מזומן מכספומט" }
    ],
    correctIndex: 0,
    achievementTitle: "מס על רווחי יתר של הבנקים",
    achievement: "אנחנו הטלנו מס 15% על רווחים חריגים ל־5 שנים — כדי שגם הבנקים יתרמו את חלקם לציבור."
  },
  {
    id: "metro",
    category: "כלכלה",
    categoryIcon: "metro",
    question: "מהו פרויקט המטרו?",
    options: [
      { icon: "metro", label: "רשת רכבת תחתית/קלה גדולה שמיועדת לגוש דן" },
      { icon: "plane", label: "שדה תעופה חדש באילת" },
      { icon: "bike", label: "מסלולי אופניים בלבד בכל הארץ" },
      { icon: "ban", label: "ביטול כל הכבישים המהירים" }
    ],
    correctIndex: 0,
    achievementTitle: "חוק המטרו",
    achievement: "אנחנו קידמנו בחקיקה את חוק המטרו — האצת גוש דן והסרת חסמים מאחד מפרויקטי התשתית החשובים לדור הבא."
  },
  {
    id: "miluim-package",
    category: "כלכלה",
    categoryIcon: "ribbon",
    question: "מי הם משרתי המילואים?",
    options: [
      { icon: "medal", label: "אזרחים שנקראים לשירות צבאי נוסף אחרי הסדיר" },
      { icon: "ticket", label: "עובדי קולנוע במשרד הביטחון" },
      { icon: "phone", label: "מתנדבים באפליקציית תודה בלבד" },
      { icon: "cart", label: "עובדי סופרמרקט בחזית" }
    ],
    correctIndex: 0,
    achievementTitle: "מעטפת למילואימניקים",
    achievement: "אנחנו קידמנו מעטפת ממשלתית בהיקף של כ־26 מיליארד ₪ — חיזוק אמיתי למי שנושא בנטל ולמשפחותיהם."
  },
  {
    id: "dira-bahanaha",
    category: "כלכלה",
    categoryIcon: "home",
    question: "מהי תוכנית ״דירה בהנחה״?",
    options: [
      { icon: "home", label: "מכרזי דירות במחיר מופחת לזכאים" },
      { icon: "brick", label: "איסור מוחלט על מכירת דירות" },
      { icon: "door", label: "השכרת דירות לתיירים בלבד" },
      { icon: "chartBars", label: "מס רכישה כפול על כל דירה ראשונה" }
    ],
    correctIndex: 0,
    achievementTitle: "דירה בהנחה למילואימניקים",
    achievement: "אנחנו הקצנו 50% במכרזי דירה בהנחה למילואימניקים — הזדמנות אמיתית לדירה במחיר מופחת למי שמגן על כולנו."
  },
  {
    id: "security-budget",
    category: "ביטחון",
    categoryIcon: "shield",
    question: "למה מדינה מגדילה תקציב ביטחון בזמן מלחמה?",
    options: [
      { icon: "muscle", label: "כדי לממן כוחות, רכש וצרכים מבצעיים דחופים" },
      { icon: "cut", label: "כדי לקצץ מיד בצה״ל" },
      { icon: "globe", label: "כדי להעביר את כל התקציב לגופים בינלאומיים" },
      { icon: "pause", label: "כדי להקפיא רכש עד סוף הלחימה" }
    ],
    correctIndex: 0,
    achievementTitle: "תקצוב הביטחון במלחמה",
    achievement: "אנחנו הבאנו תוספות של מיליארדים לביטחון — תקצבנו את המלחמה הארוכה והיקרה בתולדות המדינה בלי להתפשר."
  },
  {
    id: "terror-funds",
    category: "ביטחון",
    categoryIcon: "scale",
    question: "מהי מדיניות ״שלם וסע״ של הרשות הפלסטינית?",
    options: [
      { icon: "cash", label: "תשלומים למשפחות מחבלים — תמריץ לטרור" },
      { icon: "handshake", label: "מענק נסיעות לסטודנטים בחו״ל" },
      { icon: "refresh", label: "החזר מס לכל תושב יו״ש" },
      { icon: "megaphone", label: "קמפיין פרסום בלבד בתקשורת" }
    ],
    correctIndex: 0,
    achievementTitle: "חילול כספי טרור",
    achievement: "אנחנו חילטנו כספי טרור מהרשות והעברנו אותם למשפחות נפגעות טרור — מחיר כלכלי על מעורבות בטרור."
  },
  {
    id: "settlements",
    category: "ביטחון",
    categoryIcon: "map",
    question: "מה המשמעות הביטחונית של התיישבות בחזית?",
    options: [
      { icon: "pin", label: "נוכחות אזרחית שמחזקת שליטה ומגן על המדינה" },
      { icon: "ban", label: "אין שום קשר לביטחון" },
      { icon: "camp", label: "רק מחנות קיץ לנוער" },
      { icon: "hide", label: "הסתרת גבולות בלבד במפות" }
    ],
    correctIndex: 0,
    achievementTitle: "נקודות התיישבות חדשות",
    achievement: "אנחנו אישרנו כ־150 חוות ויישובים חדשים — מגן אסטרטגי על מדינת ישראל ועל התושבים."
  },
  {
    id: "humanitarian",
    category: "ביטחון",
    categoryIcon: "target",
    question: "למה חשוב לפקח על סיוע הומניטרי בזמן לחימה?",
    options: [
      { icon: "target", label: "כדי שהסיוע לא יגיע לידי האויב וישמש נגדו" },
      { icon: "send", label: "כדי להעביר הכל בלי שום בדיקה" },
      { icon: "stop", label: "כדי לעצור כל סיוע בלי חלופה" },
      { icon: "handshake", label: "כדי למסור שליטה מלאה לגורמי טרור" }
    ],
    correctIndex: 0,
    achievementTitle: "סיוע בשליטה ישראלית",
    achievement: "אנחנו לחצנו על הקמת מרכזי סיוע בשליטה ישראלית — סיוע הומניטרי עם ביטחון ואחריות יחד."
  }
];
