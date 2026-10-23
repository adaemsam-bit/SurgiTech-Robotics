# SurgiTech | Surgical Robotics Website

موقع عربي تعليمي عن روبوتات الجراحة، مبني باستخدام HTML وCSS وJavaScript فقط.

## تشغيل الموقع في Visual Studio Code

1. فكّي ضغط مجلد `Surgical-Robotics-Website` إن كنتِ تستخدمين ملف ZIP.
2. افتحي Visual Studio Code.
3. اختاري **File → Open Folder** وافتحي مجلد `Surgical-Robotics-Website`.
4. افتحي `index.html` بالمتصفح. يفضّل تثبيت إضافة **Live Server** من صفحة Extensions، ثم الضغط بزر الفأرة الأيمن على `index.html` واختيار **Open with Live Server**.
5. أضيفي صورك إلى مجلد `images` بالأسماء التالية بالضبط:
   - `surgical-robot-hero.jpg`
   - `da-vinci-system.jpg`
   - `mako-robot.jpg`
   - `rosa-robot.jpg`
   - `hugo-surgical-system.jpg`
   - `robotic-surgery-team.jpg`
   - `surgeon-console.jpg`
   - `robotic-surgery-future.jpg`

   إذا لم تضيفي صورة، سيظهر مكانها بديل بصري تلقائيًا ولن ينهار التصميم.

## الملفات

- `index.html`: بنية الصفحة والنصوص والأقسام.
- `style.css`: الألوان والتنسيق والتجاوب.
- `script.js`: قائمة الجوال، ظهور العناصر عند التمرير، نافذة تفاصيل الأنظمة، وحفظ بيانات فريق المشروع محليًا.
- `images/`: ضعي الصور المحلية هنا.

## تعديل بيانات المدرسة

في قسم **إعداد المشروع** داخل الموقع، اكتبي عدد الطالبات واسم الأستاذة المشرفة واضغطي «حفظ بيانات المشروع». الحفظ محلي في المتصفح الحالي ولا يرسل البيانات إلى أي خادم.

## تعديل الألوان

في أول `style.css` عدّلي متغيرات `:root` مثل:

- `--navy`: الخلفية الكحلية.
- `--teal`: اللون التركوازي المضيء.
- `--teal-dark`: التركوازي الداكن للعناوين والروابط.
- `--ink`: لون النص الأساسي.

## المصادر الطبية الرسمية

- FDA — Computer-Assisted Surgical Systems: https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems
- FDA — Robotic Medical Devices: https://www.fda.gov/medical-devices/products-and-medical-procedures/robotic-medical-devices
- Intuitive — da Vinci: https://www.intuitive.com/en-us/products-and-services/da-vinci
- Stryker — Mako SmartRobotics: https://www.stryker.com/in/en/joint-replacement/systems/Mako_SmartRobotics_Overview.html
- Zimmer Biomet — Robotics: https://www.zimmerbiomet.com/en/products-and-solutions/specialties/robotics.html
- Medtronic — Hugo RAS: https://www.medtronic.com/en-us/healthcare-professionals/specialties/surgical-robotics/hugo-robotic-assisted-surgery.html

> الموقع تثقيفي ولا يحل محل المشورة الطبية. قد تختلف المؤشرات والاستخدامات المعتمدة بحسب النظام والطراز والبلد.


## بيانات فريق المشروع

يعرض قسم فريق المشروع أسماء الطالبات كما زُوّدت: هدى ناصر، لجين، هنوف عبد المجيد، رقية صديق، ورشا؛ بإشراف الأستاذة رايا. عدد الطالبات المعروض هو 5. هذه البيانات ثابتة في صفحة HTML لتظهر لجميع زوار الموقع بعد النشر، وليست محفوظة في متصفح واحد فقط.
