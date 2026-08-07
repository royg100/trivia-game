/** שאלות הטריוויה — מבוססות על עדכון אתר הישגין.xlsx */
window.TRIVIA_QUESTIONS = [
  {
    id: "tax-brackets",
    category: "כלכלה",
    categoryIcon: "chart",
    question: "איך הורדנו את נטל המס על העובדים?",
    options: [
      { icon: "receipt", label: "הפחתת מדרגות מס — עד 5,000 ₪ בשנה לעובד" },
      { icon: "bank", label: "העלאת עמלות בנקים לכלל הציבור" },
      { icon: "down", label: "ביטול נקודות זיכוי להורים" },
      { icon: "cart", label: "מס חדש על מוצרי מזון בסיסיים" }
    ],
    correctIndex: 0,
    fact: "העברנו החלטת ממשלה להפחתת מס הכנסה בהסדרים 2026 — הקלה ישירה ביוקר המחיה."
  },
  {
    id: "fake-invoices",
    category: "כלכלה",
    categoryIcon: "chart",
    question: "מה המטרה של חוק חשבוניות ישראל?",
    options: [
      { icon: "doc", label: "להעלות מס על עצמאים קטנים" },
      { icon: "shield", label: "לצמצם חשבוניות פיקטיביות ולחסוך מיליארדים לקופה" },
      { icon: "building", label: "לבטל דיווח מע״מ לעסקים" },
      { icon: "card", label: "לאסור תשלום באשראי" }
    ],
    correctIndex: 1,
    fact: "חוק חשבוניות ישראל מצמצם הונאות ומגן על קופת המדינה — וזה מתגלגל להקלה ביוקר המחיה."
  },
  {
    id: "miluim-tax",
    category: "כלכלה",
    categoryIcon: "medal",
    question: "איזו הטבת מס הבאנו למשרתי המילואים?",
    options: [
      { icon: "ban", label: "ביטול נקודות זיכוי ללוחמים" },
      { icon: "box", label: "קופון חד־פעמי לקניון" },
      { icon: "star", label: "נקודות זיכוי בשווי עד 11,616 ₪ למי ששירת 30+ ימים" },
      { icon: "fuel", label: "הנחה על דלק בלבד" }
    ],
    correctIndex: 2,
    fact: "הכרנו במאמץ של המילואימניקים — הטבת מס משמעותית למי ששירת לפחות 30 ימים בשנה."
  },
  {
    id: "regional-tax",
    category: "כלכלה",
    categoryIcon: "home",
    question: "איזו הטבה הבאנו לתושבי יו״ש, אשקלון ונוף הגליל?",
    options: [
      { icon: "chartBars", label: "הטבת מס בשיעור 7% לתושבים" },
      { icon: "hammer", label: "הקפאת בנייה למגורים" },
      { icon: "bus", label: "ביטול תחבורה ציבורית" },
      { icon: "cash", label: "מס ארנונה כפול" }
    ],
    correctIndex: 0,
    fact: "חיזקנו יישובים בחזית ובפריפריה עם הטבות מס שמקלות על המשפחה ושומרות על הוודאות הכלכלית."
  },
  {
    id: "early-childhood",
    category: "כלכלה",
    categoryIcon: "baby",
    question: "מה עשינו כדי להקל על הורים לילדים בגיל הרך?",
    options: [
      { icon: "ban", label: "ביטול חופשת לידה" },
      { icon: "family", label: "נקודות זיכוי — כ־1,000 ₪ בחודש למשפחות" },
      { icon: "school", label: "סגירת מעונות יום" },
      { icon: "cash", label: "מס חדש על חיתולים" }
    ],
    correctIndex: 1,
    fact: "חוק סיוע להורים לילדים עד גיל 3 — הקלה חודשית אמיתית למשפחות צעירות."
  },
  {
    id: "bank-competition",
    category: "כלכלה",
    categoryIcon: "bank",
    question: "איך הגברנו תחרות במערכת הבנקאית?",
    options: [
      { icon: "building", label: "מיזוג כל הבנקים לבנק אחד" },
      { icon: "up", label: "העלאת ריבית על משכנתאות בחוק" },
      { icon: "spark", label: "רפורמה להקמת בנקים קטנים — אשראי זול יותר" },
      { icon: "ban", label: "סגירת סניפים בפריפריה" }
    ],
    correctIndex: 2,
    fact: "יותר תחרות = אשראי זול יותר למשקי בית ולעסקים — צעד ישיר נגד יוקר המחיה."
  },
  {
    id: "bank-profits",
    category: "כלכלה",
    categoryIcon: "gem",
    question: "מה הטלנו על רווחי היתר של הבנקים?",
    options: [
      { icon: "ticket", label: "פטור מס מלא לבנקים גדולים" },
      { icon: "down", label: "ביטול פיקוח על עמלות" },
      { icon: "building", label: "הלאמת כל הבנקים מיד" },
      { icon: "scale", label: "מס 15% על רווחים חריגים ל־5 שנים" }
    ],
    correctIndex: 3,
    fact: "וידאנו שגם הבנקים תורמים את חלקם — מס על רווחי יתר שמחזיר ערך לציבור."
  },
  {
    id: "metro",
    category: "כלכלה",
    categoryIcon: "metro",
    question: "איזה פרויקט תחבורה לאומי קידמנו בחקיקה?",
    options: [
      { icon: "metro", label: "חוק המטרו — האצת גוש דן והסרת חסמים" },
      { icon: "ban", label: "ביטול כבישים מהירים" },
      { icon: "plane", label: "סגירת נמל התעופה" },
      { icon: "bike", label: "איסור על אופניים חשמליים בכל הארץ" }
    ],
    correctIndex: 0,
    fact: "חוק המטרו מסיר חסמים ומאיץ את אחד מפרויקטי התשתית החשובים לדור הבא."
  },
  {
    id: "miluim-package",
    category: "כלכלה",
    categoryIcon: "ribbon",
    question: "מה היקף המעטפת הממשלתית למשרתי המילואים?",
    options: [
      { icon: "coin", label: "כ־100 מיליון ₪ חד־פעמי" },
      { icon: "gem", label: "תוכנית בהיקף של 26 מיליארד ₪" },
      { icon: "ticket", label: "הנחה לקולנוע בלבד" },
      { icon: "phone", label: "אפליקציית תודה בלבד" }
    ],
    correctIndex: 1,
    fact: "26 מיליארד ₪ לחיזוק המילואימניקים ומשפחותיהם — מחויבות אמיתית למי שנושא בנטל."
  },
  {
    id: "dira-bahanaha",
    category: "כלכלה",
    categoryIcon: "home",
    question: "איך עזרנו למילואימניקים לרכוש דירה?",
    options: [
      { icon: "door", label: "ביטול מכרזי דירה בהנחה" },
      { icon: "scroll", label: "הקצאה של 50% למילואימניקים במכרזי דירה בהנחה" },
      { icon: "brick", label: "איסור מכירת דירות לחיילים" },
      { icon: "chartBars", label: "מס רכישה כפול למילואים" }
    ],
    correctIndex: 1,
    fact: "קיבענו הזדמנות אמיתית לדירה במחיר מופחת — למי שמגן על כולנו."
  },
  {
    id: "security-budget",
    category: "ביטחון",
    categoryIcon: "shield",
    question: "מה עשינו למען תקצוב הביטחון במלחמה?",
    options: [
      { icon: "cut", label: "קיצוץ חד בתקציב הביטחון" },
      { icon: "pause", label: "הקפאת רכש לצה״ל" },
      { icon: "muscle", label: "תוספות של מיליארדים — למען הניצחון" },
      { icon: "globe", label: "העברת התקציב לגופים בינלאומיים" }
    ],
    correctIndex: 2,
    fact: "תקצבנו את המלחמה הארוכה והיקרה ביותר בתולדות המדינה — בלי להתפשר על הביטחון."
  },
  {
    id: "terror-funds",
    category: "ביטחון",
    categoryIcon: "scale",
    question: "מה עשינו עם כספי טרור מהרשות הפלסטינית?",
    options: [
      { icon: "refresh", label: "החזרנו אותם לרשות ללא תנאים" },
      { icon: "family", label: "חילטנו והעברנו למשפחות נפגעות טרור" },
      { icon: "hide", label: "התעלמנו מהנושא" },
      { icon: "megaphone", label: "רק פרסמנו הודעה לתקשורת" }
    ],
    correctIndex: 1,
    fact: "גבינו מחיר כלכלי על מעורבות בטרור — והכסף הגיע למשפחות שנפגעו."
  },
  {
    id: "settlements",
    category: "ביטחון",
    categoryIcon: "map",
    question: "כמה נקודות התיישבות חדשות אושרו כמגן לישראל?",
    options: [
      { icon: "pin", label: "כ־20 נקודות בלבד" },
      { icon: "camp", label: "כ־150 חוות ויישובים חדשים" },
      { icon: "ban", label: "אף נקודה חדשה לא אושרה" },
      { icon: "chartBars", label: "פחות מ־5 בשנה" }
    ],
    correctIndex: 1,
    fact: "כ־150 נקודות התיישבות — מגן אסטרטגי על מדינת ישראל ועל התושבים."
  },
  {
    id: "humanitarian",
    category: "ביטחון",
    categoryIcon: "target",
    question: "איך דאגנו שסיוע הומניטרי לא יתגלגל לאויב?",
    options: [
      { icon: "target", label: "לחץ להקמת מרכזי סיוע בשליטה ישראלית" },
      { icon: "send", label: "העברה חופשית ללא פיקוח" },
      { icon: "stop", label: "עצירת כל סיוע ללא חלופה" },
      { icon: "handshake", label: "מסירת השליטה המלאה לגורמי טרור" }
    ],
    correctIndex: 0,
    fact: "לחצנו על מודל שמאפשר סיוע הומניטרי תחת שליטה ישראלית — ביטחון ואחריות יחד."
  }
];
