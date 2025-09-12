import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Calendar, User, BookOpen, Share2, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  
  const articles = [
    {
      id: 1,
      title: language.code === 'ar' ? 'نصائح للحفاظ على نظافة المنزل يومياً' : 'Daily Home Cleaning Tips',
      excerpt: language.code === 'ar' 
        ? 'تعرف على أفضل الطرق للحفاظ على نظافة منزلك بشكل يومي دون عناء. نصائح عملية وسهلة التطبيق للحصول على منزل نظيف ومرتب دائماً.'
        : 'Learn the best ways to maintain daily home cleanliness effortlessly. Practical and easy-to-apply tips for a clean and organized home always.',
      content: language.code === 'ar' 
        ? `
        <h2>أهمية النظافة اليومية للمنزل</h2>
        <p>النظافة اليومية للمنزل ليست مجرد مظهر جمالي، بل هي ضرورة صحية واجتماعية. المنزل النظيف يعكس شخصية أصحابه ويوفر بيئة صحية آمنة للعائلة.</p>
        
        <h3>الفوائد الصحية للنظافة اليومية</h3>
        <ul>
          <li>تقليل انتشار البكتيريا والجراثيم</li>
          <li>تحسين جودة الهواء داخل المنزل</li>
          <li>الوقاية من الحساسية والأمراض التنفسية</li>
          <li>خلق بيئة نفسية إيجابية ومريحة</li>
        </ul>

        <h3>نصائح عملية للتنظيف اليومي</h3>
        <h4>1. ابدأ بالأساسيات</h4>
        <p>اجعل ترتيب السرير أول مهمة في يومك. هذا العمل البسيط يعطي شعوراً بالإنجاز ويجعل الغرفة تبدو مرتبة فوراً.</p>

        <h4>2. قاعدة الـ 15 دقيقة</h4>
        <p>خصص 15 دقيقة يومياً لتنظيف سريع لكل غرفة. هذا الوقت كافٍ لترتيب الأشياء وإزالة الغبار السطحي.</p>

        <h4>3. تنظيف فوري للانسكابات</h4>
        <p>لا تترك أي انسكاب أو بقعة دون تنظيف فوري. كلما طال الوقت، كلما أصبح التنظيف أصعب.</p>

        <h4>4. استخدم سلة للأشياء المبعثرة</h4>
        <p>ضع سلة في كل غرفة لجمع الأشياء المبعثرة، ثم أعدها لأماكنها الصحيحة في نهاية اليوم.</p>

        <h3>جدول التنظيف الأسبوعي</h3>
        <p><strong>السبت:</strong> تنظيف الحمامات والمطبخ</p>
        <p><strong>الأحد:</strong> تنظيف غرف النوم</p>
        <p><strong>الاثنين:</strong> تنظيف غرفة المعيشة</p>
        <p><strong>الثلاثاء:</strong> غسيل الملابس</p>
        <p><strong>الأربعاء:</strong> تنظيف النوافذ والمرايا</p>
        <p><strong>الخميس:</strong> تنظيف الأرضيات</p>
        <p><strong>الجمعة:</strong> يوم راحة أو تنظيف خفيف</p>

        <h3>أدوات التنظيف الأساسية</h3>
        <ul>
          <li>مكنسة كهربائية جيدة</li>
          <li>ممسحة للأرضيات</li>
          <li>قطع قماش من الميكروفايبر</li>
          <li>منظفات متعددة الأغراض</li>
          <li>قفازات مطاطية</li>
          <li>فرش تنظيف مختلفة الأحجام</li>
        </ul>

        <h3>نصائح لتوفير الوقت</h3>
        <p>• نظف أثناء الطبخ - اغسل الأواني أثناء انتظار الطعام</p>
        <p>• استخدم منتجات التنظيف متعددة الأغراض</p>
        <p>• اشرك جميع أفراد العائلة في المهام</p>
        <p>• استخدم الموسيقى لجعل التنظيف أكثر متعة</p>

        <h3>الخلاصة</h3>
        <p>النظافة اليومية للمنزل ليست مهمة شاقة إذا تم تنظيمها بشكل صحيح. باتباع هذه النصائح البسيطة، ستحصل على منزل نظيف ومرتب دون بذل جهد كبير. تذكر أن الاستمرارية هي المفتاح للنجاح.</p>
        `
        : `
        <h2>The Importance of Daily Home Cleaning</h2>
        <p>Daily home cleaning is not just about aesthetics, but a health and social necessity. A clean home reflects the personality of its owners and provides a safe, healthy environment for the family.</p>
        
        <h3>Health Benefits of Daily Cleaning</h3>
        <ul>
          <li>Reducing the spread of bacteria and germs</li>
          <li>Improving indoor air quality</li>
          <li>Preventing allergies and respiratory diseases</li>
          <li>Creating a positive and comfortable psychological environment</li>
        </ul>

        <h3>Practical Tips for Daily Cleaning</h3>
        <h4>1. Start with the Basics</h4>
        <p>Make bed-making the first task of your day. This simple act gives a sense of accomplishment and makes the room look tidy immediately.</p>

        <h4>2. The 15-Minute Rule</h4>
        <p>Dedicate 15 minutes daily for quick cleaning of each room. This time is sufficient to organize things and remove surface dust.</p>

        <h4>3. Immediate Spill Cleanup</h4>
        <p>Don't leave any spill or stain without immediate cleaning. The longer you wait, the harder it becomes to clean.</p>

        <h4>4. Use a Basket for Scattered Items</h4>
        <p>Place a basket in each room to collect scattered items, then return them to their proper places at the end of the day.</p>

        <h3>Weekly Cleaning Schedule</h3>
        <p><strong>Saturday:</strong> Clean bathrooms and kitchen</p>
        <p><strong>Sunday:</strong> Clean bedrooms</p>
        <p><strong>Monday:</strong> Clean living room</p>
        <p><strong>Tuesday:</strong> Laundry</p>
        <p><strong>Wednesday:</strong> Clean windows and mirrors</p>
        <p><strong>Thursday:</strong> Clean floors</p>
        <p><strong>Friday:</strong> Rest day or light cleaning</p>

        <h3>Essential Cleaning Tools</h3>
        <ul>
          <li>Good vacuum cleaner</li>
          <li>Floor mop</li>
          <li>Microfiber cloths</li>
          <li>Multi-purpose cleaners</li>
          <li>Rubber gloves</li>
          <li>Various sized cleaning brushes</li>
        </ul>

        <h3>Time-Saving Tips</h3>
        <p>• Clean while cooking - wash dishes while waiting for food</p>
        <p>• Use multi-purpose cleaning products</p>
        <p>• Involve all family members in tasks</p>
        <p>• Use music to make cleaning more enjoyable</p>

        <h3>Conclusion</h3>
        <p>Daily home cleaning is not a daunting task if organized properly. By following these simple tips, you'll have a clean and organized home without much effort. Remember that consistency is the key to success.</p>
        `,
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-15',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف المنازل' : 'Home Cleaning',
      readTime: language.code === 'ar' ? '5 دقائق' : '5 min read'
    },
    {
      id: 2,
      title: language.code === 'ar' ? 'أهمية تنظيف المكيفات بانتظام' : 'Importance of Regular AC Cleaning',
      excerpt: language.code === 'ar'
        ? 'لماذا يجب تنظيف المكيفات دورياً وكيف يؤثر ذلك على صحتك وفاتورة الكهرباء. دليل شامل لصيانة المكيفات وتوفير الطاقة.'
        : 'Why you should clean ACs regularly and how it affects your health and electricity bill. Complete guide to AC maintenance and energy saving.',
      content: language.code === 'ar' 
        ? `
        <h2>لماذا تنظيف المكيفات ضروري؟</h2>
        <p>تنظيف المكيفات بانتظام ليس مجرد إجراء صيانة روتيني، بل ضرورة حتمية للحفاظ على صحة الأسرة وتوفير الطاقة. المكيفات غير النظيفة تصبح مصدراً للبكتيريا والفطريات التي تؤثر سلباً على جودة الهواء.</p>
        
        <h3>المخاطر الصحية للمكيفات غير النظيفة</h3>
        <ul>
          <li>انتشار البكتيريا والفيروسات في الهواء</li>
          <li>تفاقم أعراض الحساسية والربو</li>
          <li>رائحة كريهة في المنزل</li>
          <li>التهابات الجهاز التنفسي</li>
          <li>متلازمة المباني المريضة</li>
        </ul>

        <h3>التأثير على فاتورة الكهرباء</h3>
        <p>المكيفات المتسخة تستهلك طاقة أكثر بنسبة تصل إلى 30% من المكيفات النظيفة. الفلاتر المسدودة تجبر المكيف على العمل بجهد أكبر لتبريد المكان.</p>

        <h4>كيف يحدث ذلك؟</h4>
        <ul>
          <li>انسداد الفلاتر يقلل تدفق الهواء</li>
          <li>تراكم الأتربة على الملفات يقلل كفاءة التبريد</li>
          <li>المكيف يعمل لفترات أطول لتحقيق درجة الحرارة المطلوبة</li>
          <li>زيادة الضغط على الضاغط يؤدي لاستهلاك طاقة أكبر</li>
        </ul>

        <h3>علامات تدل على حاجة المكيف للتنظيف</h3>
        <p><strong>1. ضعف التبريد:</strong> إذا لاحظت أن المكيف لا يبرد كما السابق</p>
        <p><strong>2. الروائح الكريهة:</strong> رائحة عفن أو رطوبة عند تشغيل المكيف</p>
        <p><strong>3. أصوات غريبة:</strong> أصوات غير طبيعية أثناء التشغيل</p>
        <p><strong>4. زيادة فاتورة الكهرباء:</strong> ارتفاع ملحوظ في استهلاك الطاقة</p>
        <p><strong>5. تسريب المياه:</strong> تجمع المياه حول الوحدة الداخلية</p>

        <h3>خطوات التنظيف الأساسية</h3>
        <h4>تنظيف الفلاتر</h4>
        <p>• أغلق المكيف واتركه لمدة 30 دقيقة</p>
        <p>• اخرج الفلاتر بحذر</p>
        <p>• اغسلها بالماء الفاتر والصابون</p>
        <p>• اتركها تجف تماماً قبل إعادة تركيبها</p>

        <h4>تنظيف الوحدة الخارجية</h4>
        <p>• أزل الأوراق والأتربة من حول الوحدة</p>
        <p>• نظف الملفات بفرشاة ناعمة</p>
        <p>• تأكد من عدم انسداد فتحات التهوية</p>

        <h3>جدول الصيانة الدورية</h3>
        <p><strong>شهرياً:</strong> تنظيف الفلاتر</p>
        <p><strong>كل 3 أشهر:</strong> تنظيف الوحدة الداخلية</p>
        <p><strong>كل 6 أشهر:</strong> صيانة شاملة بواسطة فني متخصص</p>
        <p><strong>سنوياً:</strong> فحص شامل للنظام</p>

        <h3>نصائح لإطالة عمر المكيف</h3>
        <ul>
          <li>لا تشغل المكيف على درجات حرارة منخفضة جداً</li>
          <li>استخدم مروحة السقف مع المكيف لتوزيع أفضل للهواء</li>
          <li>أغلق النوافذ والأبواب أثناء التشغيل</li>
          <li>نظف المنطقة المحيطة بالوحدة الخارجية</li>
          <li>استخدم ستائر أو عوازل للنوافذ</li>
        </ul>

        <h3>متى تحتاج لفني متخصص؟</h3>
        <p>بعض المهام تحتاج لخبرة فني متخصص مثل:</p>
        <ul>
          <li>تنظيف الملفات الداخلية</li>
          <li>فحص مستوى غاز التبريد</li>
          <li>تنظيف مجاري التصريف</li>
          <li>فحص الأجزاء الكهربائية</li>
          <li>معايرة الثرموستات</li>
        </ul>

        <h3>الخلاصة</h3>
        <p>تنظيف المكيفات بانتظام استثمار في صحة العائلة وتوفير المال. لا تنتظر حتى تظهر المشاكل، بل اجعل الصيانة الدورية جزءاً من روتين المنزل. مؤسسة الفارس وواحد تقدم خدمات تنظيف وصيانة المكيفات بأعلى معايير الجودة.</p>
        `
        : `
        <h2>Why is AC Cleaning Necessary?</h2>
        <p>Regular AC cleaning is not just routine maintenance, but an absolute necessity for maintaining family health and saving energy. Dirty air conditioners become a source of bacteria and fungi that negatively affect air quality.</p>
        
        <h3>Health Risks of Dirty Air Conditioners</h3>
        <ul>
          <li>Spread of bacteria and viruses in the air</li>
          <li>Worsening allergy and asthma symptoms</li>
          <li>Bad odors in the home</li>
          <li>Respiratory system infections</li>
          <li>Sick building syndrome</li>
        </ul>

        <h3>Impact on Electricity Bills</h3>
        <p>Dirty air conditioners consume up to 30% more energy than clean ones. Clogged filters force the AC to work harder to cool the space.</p>

        <h4>How does this happen?</h4>
        <ul>
          <li>Filter blockage reduces airflow</li>
          <li>Dust accumulation on coils reduces cooling efficiency</li>
          <li>AC runs longer to achieve desired temperature</li>
          <li>Increased pressure on compressor leads to higher energy consumption</li>
        </ul>

        <h3>Signs Your AC Needs Cleaning</h3>
        <p><strong>1. Poor Cooling:</strong> If you notice the AC doesn't cool as before</p>
        <p><strong>2. Bad Odors:</strong> Musty or humid smell when AC is running</p>
        <p><strong>3. Strange Noises:</strong> Unusual sounds during operation</p>
        <p><strong>4. Higher Electricity Bills:</strong> Noticeable increase in energy consumption</p>
        <p><strong>5. Water Leakage:</strong> Water pooling around indoor unit</p>

        <h3>Basic Cleaning Steps</h3>
        <h4>Filter Cleaning</h4>
        <p>• Turn off AC and wait 30 minutes</p>
        <p>• Carefully remove filters</p>
        <p>• Wash with warm water and soap</p>
        <p>• Let dry completely before reinstalling</p>

        <h4>Outdoor Unit Cleaning</h4>
        <p>• Remove leaves and debris around unit</p>
        <p>• Clean coils with soft brush</p>
        <p>• Ensure ventilation openings are not blocked</p>

        <h3>Regular Maintenance Schedule</h3>
        <p><strong>Monthly:</strong> Filter cleaning</p>
        <p><strong>Every 3 months:</strong> Indoor unit cleaning</p>
        <p><strong>Every 6 months:</strong> Comprehensive maintenance by specialist</p>
        <p><strong>Annually:</strong> Complete system inspection</p>

        <h3>Tips to Extend AC Life</h3>
        <ul>
          <li>Don't run AC at very low temperatures</li>
          <li>Use ceiling fan with AC for better air distribution</li>
          <li>Close windows and doors during operation</li>
          <li>Clean area around outdoor unit</li>
          <li>Use curtains or window insulation</li>
        </ul>

        <h3>When Do You Need a Specialist?</h3>
        <p>Some tasks require specialist expertise such as:</p>
        <ul>
          <li>Internal coil cleaning</li>
          <li>Refrigerant level check</li>
          <li>Drain line cleaning</li>
          <li>Electrical component inspection</li>
          <li>Thermostat calibration</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Regular AC cleaning is an investment in family health and money savings. Don't wait for problems to appear, make regular maintenance part of your home routine. Al-Fares & One provides AC cleaning and maintenance services with the highest quality standards.</p>
        `,
      image: 'https://images.pexels.com/photos/8865613/pexels-photo-8865613.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-12',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'صيانة المكيفات' : 'AC Maintenance',
      readTime: language.code === 'ar' ? '7 دقائق' : '7 min read'
    },
    {
      id: 3,
      title: language.code === 'ar' ? 'كيفية اختيار منتجات التنظيف الآمنة' : 'How to Choose Safe Cleaning Products',
      excerpt: language.code === 'ar'
        ? 'دليل شامل لاختيار منتجات التنظيف الآمنة للعائلة والبيئة. تعرف على المكونات الطبيعية والمواد الكيميائية الضارة.'
        : 'Complete guide to choosing family and eco-friendly cleaning products. Learn about natural ingredients and harmful chemicals.',
      content: language.code === 'ar' 
        ? `
        <h2>أهمية اختيار منتجات التنظيف الآمنة</h2>
        <p>في عالم مليء بالمنتجات الكيميائية، أصبح اختيار منتجات التنظيف الآمنة ضرورة حتمية لحماية صحة الأسرة والبيئة. العديد من منتجات التنظيف التقليدية تحتوي على مواد كيميائية ضارة قد تسبب مشاكل صحية خطيرة.</p>
        
        <h3>المخاطر الصحية للمنتجات الكيميائية</h3>
        <ul>
          <li>تهيج الجلد والعينين</li>
          <li>مشاكل في الجهاز التنفسي</li>
          <li>الحساسية والأكزيما</li>
          <li>اضطرابات هرمونية</li>
          <li>مشاكل في الجهاز العصبي</li>
          <li>زيادة خطر الإصابة بالسرطان</li>
        </ul>

        <h3>المواد الكيميائية الضارة التي يجب تجنبها</h3>
        <h4>1. الأمونيا (Ammonia)</h4>
        <p>توجد في منظفات الزجاج والأرضيات. تسبب تهيج الجهاز التنفسي وحروق الجلد.</p>

        <h4>2. الكلور (Chlorine)</h4>
        <p>موجود في المبيضات ومنظفات الحمامات. يسبب مشاكل تنفسية وتهيج الجلد.</p>

        <h4>3. الفورمالديهايد (Formaldehyde)</h4>
        <p>مادة مسرطنة توجد في بعض منتجات التنظيف والمعطرات.</p>

        <h4>4. الفوسفات (Phosphates)</h4>
        <p>يضر بالبيئة المائية ويسبب تلوث المياه الجوفية.</p>

        <h4>5. المركبات العضوية المتطايرة (VOCs)</h4>
        <p>تسبب صداع ودوخة ومشاكل في الجهاز التنفسي.</p>

        <h3>البدائل الطبيعية الآمنة</h3>
        <h4>الخل الأبيض</h4>
        <p>• منظف طبيعي ومطهر</p>
        <p>• يزيل الترسبات الكلسية</p>
        <p>• آمن تماماً للاستخدام</p>
        <p>• اقتصادي وفعال</p>

        <h4>صودا الخبز</h4>
        <p>• يزيل الروائح الكريهة</p>
        <p>• ينظف البقع الصعبة</p>
        <p>• آمن للأطفال والحيوانات الأليفة</p>
        <p>• يمكن استخدامه في جميع أنحاء المنزل</p>

        <h4>عصير الليمون</h4>
        <p>• مطهر طبيعي</p>
        <p>• يزيل البقع والترسبات</p>
        <p>• رائحة منعشة طبيعية</p>
        <p>• غني بحمض الستريك المنظف</p>

        <h4>زيت شجرة الشاي</h4>
        <p>• مضاد للبكتيريا والفطريات</p>
        <p>• طبيعي 100%</p>
        <p>• فعال ضد العفن</p>
        <p>• رائحة منعشة</p>

        <h3>وصفات منظفات طبيعية منزلية</h3>
        <h4>منظف متعدد الأغراض</h4>
        <p>• كوب من الخل الأبيض</p>
        <p>• كوب من الماء</p>
        <p>• ملعقة كبيرة من صودا الخبز</p>
        <p>• 10 قطرات من زيت عطري (اختياري)</p>

        <h4>منظف الزجاج</h4>
        <p>• نصف كوب خل أبيض</p>
        <p>• كوبين من الماء</p>
        <p>• ربع كوب كحول طبي</p>
        <p>• قطرتان من سائل الجلي الطبيعي</p>

        <h4>منظف الحمام</h4>
        <p>• نصف كوب صودا خبز</p>
        <p>• ربع كوب خل أبيض</p>
        <p>• ملعقة كبيرة سائل جلي طبيعي</p>
        <p>• 10 قطرات زيت شجرة الشاي</p>

        <h3>نصائح لقراءة ملصقات المنتجات</h3>
        <ul>
          <li>ابحث عن كلمة "طبيعي" أو "عضوي"</li>
          <li>تجنب المنتجات التي تحتوي على عطور صناعية</li>
          <li>اختر المنتجات القابلة للتحلل البيولوجي</li>
          <li>ابحث عن شهادات الأمان البيئي</li>
          <li>تجنب المنتجات التي لا تذكر مكوناتها</li>
        </ul>

        <h3>العلامات التجارية الموثوقة</h3>
        <p>ابحث عن المنتجات التي تحمل شهادات مثل:</p>
        <ul>
          <li>ECOCERT</li>
          <li>Green Seal</li>
          <li>EPA Safer Choice</li>
          <li>USDA Organic</li>
        </ul>

        <h3>نصائح للاستخدام الآمن</h3>
        <ul>
          <li>احتفظ بالمنتجات بعيداً عن متناول الأطفال</li>
          <li>تأكد من التهوية الجيدة أثناء التنظيف</li>
          <li>لا تخلط منتجات مختلفة أبداً</li>
          <li>اقرأ التعليمات بعناية</li>
          <li>استخدم قفازات عند الحاجة</li>
          <li>اختبر المنتج على منطقة صغيرة أولاً</li>
        </ul>

        <h3>الفوائد البيئية</h3>
        <p>استخدام منتجات التنظيف الطبيعية يساهم في:</p>
        <ul>
          <li>تقليل تلوث المياه</li>
          <li>حماية الحياة البحرية</li>
          <li>تقليل انبعاثات الغازات الضارة</li>
          <li>الحفاظ على جودة الهواء</li>
          <li>دعم الاستدامة البيئية</li>
        </ul>

        <h3>الخلاصة</h3>
        <p>اختيار منتجات التنظيف الآمنة ليس مجرد اتجاه، بل ضرورة لحماية صحة الأسرة والبيئة. البدائل الطبيعية فعالة وآمنة واقتصادية. ابدأ التغيير اليوم واجعل منزلك مكاناً أكثر صحة وأماناً للجميع.</p>
        `
        : `
        <h2>The Importance of Choosing Safe Cleaning Products</h2>
        <p>In a world full of chemical products, choosing safe cleaning products has become an absolute necessity to protect family health and the environment. Many traditional cleaning products contain harmful chemicals that can cause serious health problems.</p>
        
        <h3>Health Risks of Chemical Products</h3>
        <ul>
          <li>Skin and eye irritation</li>
          <li>Respiratory system problems</li>
          <li>Allergies and eczema</li>
          <li>Hormonal disruptions</li>
          <li>Nervous system problems</li>
          <li>Increased cancer risk</li>
        </ul>

        <h3>Harmful Chemicals to Avoid</h3>
        <h4>1. Ammonia</h4>
        <p>Found in glass and floor cleaners. Causes respiratory irritation and skin burns.</p>

        <h4>2. Chlorine</h4>
        <p>Present in bleaches and bathroom cleaners. Causes respiratory problems and skin irritation.</p>

        <h4>3. Formaldehyde</h4>
        <p>A carcinogenic substance found in some cleaning products and air fresheners.</p>

        <h4>4. Phosphates</h4>
        <p>Harms aquatic environment and causes groundwater pollution.</p>

        <h4>5. Volatile Organic Compounds (VOCs)</h4>
        <p>Cause headaches, dizziness, and respiratory problems.</p>

        <h3>Safe Natural Alternatives</h3>
        <h4>White Vinegar</h4>
        <p>• Natural cleaner and disinfectant</p>
        <p>• Removes lime deposits</p>
        <p>• Completely safe to use</p>
        <p>• Economical and effective</p>

        <h4>Baking Soda</h4>
        <p>• Removes bad odors</p>
        <p>• Cleans tough stains</p>
        <p>• Safe for children and pets</p>
        <p>• Can be used throughout the house</p>

        <h4>Lemon Juice</h4>
        <p>• Natural disinfectant</p>
        <p>• Removes stains and deposits</p>
        <p>• Natural fresh scent</p>
        <p>• Rich in cleaning citric acid</p>

        <h4>Tea Tree Oil</h4>
        <p>• Antibacterial and antifungal</p>
        <p>• 100% natural</p>
        <p>• Effective against mold</p>
        <p>• Refreshing scent</p>

        <h3>Homemade Natural Cleaner Recipes</h3>
        <h4>Multi-Purpose Cleaner</h4>
        <p>• 1 cup white vinegar</p>
        <p>• 1 cup water</p>
        <p>• 1 tablespoon baking soda</p>
        <p>• 10 drops essential oil (optional)</p>

        <h4>Glass Cleaner</h4>
        <p>• 1/2 cup white vinegar</p>
        <p>• 2 cups water</p>
        <p>• 1/4 cup rubbing alcohol</p>
        <p>• 2 drops natural dish soap</p>

        <h4>Bathroom Cleaner</h4>
        <p>• 1/2 cup baking soda</p>
        <p>• 1/4 cup white vinegar</p>
        <p>• 1 tablespoon natural dish soap</p>
        <p>• 10 drops tea tree oil</p>

        <h3>Tips for Reading Product Labels</h3>
        <ul>
          <li>Look for "natural" or "organic" labels</li>
          <li>Avoid products with artificial fragrances</li>
          <li>Choose biodegradable products</li>
          <li>Look for environmental safety certifications</li>
          <li>Avoid products that don't list ingredients</li>
        </ul>

        <h3>Trusted Brands</h3>
        <p>Look for products with certifications like:</p>
        <ul>
          <li>ECOCERT</li>
          <li>Green Seal</li>
          <li>EPA Safer Choice</li>
          <li>USDA Organic</li>
        </ul>

        <h3>Safe Usage Tips</h3>
        <ul>
          <li>Keep products away from children</li>
          <li>Ensure good ventilation while cleaning</li>
          <li>Never mix different products</li>
          <li>Read instructions carefully</li>
          <li>Use gloves when needed</li>
          <li>Test product on small area first</li>
        </ul>

        <h3>Environmental Benefits</h3>
        <p>Using natural cleaning products contributes to:</p>
        <ul>
          <li>Reducing water pollution</li>
          <li>Protecting marine life</li>
          <li>Reducing harmful gas emissions</li>
          <li>Maintaining air quality</li>
          <li>Supporting environmental sustainability</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Choosing safe cleaning products is not just a trend, but a necessity to protect family health and the environment. Natural alternatives are effective, safe, and economical. Start the change today and make your home a healthier and safer place for everyone.</p>
        `,
      image: 'https://images.pexels.com/photos/4239086/pexels-photo-4239086.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-10',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'منتجات التنظيف' : 'Cleaning Products',
      readTime: language.code === 'ar' ? '8 دقائق' : '8 min read'
    },
    {
      id: 4,
      title: language.code === 'ar' ? 'مكافحة الحشرات: الوقاية خير من العلاج' : 'Pest Control: Prevention is Better than Cure',
      excerpt: language.code === 'ar'
        ? 'طرق الوقاية من الحشرات ونصائح للحفاظ على منزل خالي من الآفات. استراتيجيات فعالة ومواد طبيعية آمنة.'
        : 'Prevention methods from insects and tips to maintain a pest-free home. Effective strategies and safe natural materials.',
      content: language.code === 'ar' 
        ? `
        <h2>أهمية الوقاية من الحشرات</h2>
        <p>الوقاية من الحشرات أفضل بكثير من محاولة التخلص منها بعد انتشارها. الحشرات لا تسبب الإزعاج فقط، بل قد تنقل الأمراض وتلحق الضرر بالممتلكات. اتباع استراتيجيات الوقاية الصحيحة يوفر الوقت والمال والجهد.</p>
        
        <h3>الأضرار التي تسببها الحشرات</h3>
        <ul>
          <li>نقل الأمراض والبكتيريا</li>
          <li>تلويث الطعام والمياه</li>
          <li>إتلاف الأثاث والملابس</li>
          <li>التسبب في الحساسية</li>
          <li>الإزعاج النفسي والقلق</li>
          <li>الأضرار الاقتصادية</li>
        </ul>

        <h3>أنواع الحشرات الشائعة في المنازل</h3>
        <h4>1. الصراصير</h4>
        <p>تنتشر في المطابخ والحمامات، تنقل البكتيريا وتلوث الطعام. تتكاثر بسرعة في البيئات الرطبة والدافئة.</p>

        <h4>2. النمل</h4>
        <p>يبحث عن الطعام والماء، يدخل من أصغر الشقوق. يترك أثراً كيميائياً يجذب المزيد من النمل.</p>

        <h4>3. الذباب</h4>
        <p>ينقل الأمراض من مكان لآخر، يتكاثر في القمامة والمواد المتعفنة.</p>

        <h4>4. البعوض</h4>
        <p>ينقل أمراض خطيرة مثل الملاريا وحمى الضنك، يتكاثر في المياه الراكدة.</p>

        <h4>5. العث والسوس</h4>
        <p>يتغذى على الأقمشة والمواد العضوية، يسبب الحساسية ومشاكل تنفسية.</p>

        <h3>استراتيجيات الوقاية الفعالة</h3>
        <h4>النظافة الشاملة</h4>
        <p>• نظف المطبخ يومياً وأزل بقايا الطعام</p>
        <p>• اغسل الأطباق فوراً بعد الاستخدام</p>
        <p>• امسح الأسطح بمنظف مطهر</p>
        <p>• نظف الأرضيات بانتظام</p>

        <h4>إدارة القمامة</h4>
        <p>• استخدم أكياس قمامة محكمة الإغلاق</p>
        <p>• أفرغ القمامة يومياً</p>
        <p>• نظف صناديق القمامة بانتظام</p>
        <p>• احتفظ بالقمامة بعيداً عن المنزل</p>

        <h4>إغلاق نقاط الدخول</h4>
        <p>• سد الشقوق والثقوب في الجدران</p>
        <p>• ركب شبك على النوافذ والأبواب</p>
        <p>• أغلق الفجوات حول الأنابيب</p>
        <p>• فحص وإصلاح الأبواب والنوافذ</p>

        <h3>الطرق الطبيعية لمكافحة الحشرات</h3>
        <h4>الزيوت العطرية</h4>
        <p>• زيت النعناع: طارد طبيعي للنمل والفئران</p>
        <p>• زيت اللافندر: يطرد العث والبعوض</p>
        <p>• زيت الأوكالبتوس: فعال ضد الذباب</p>
        <p>• زيت شجرة الشاي: مضاد للبكتيريا والحشرات</p>

        <h4>المواد الطبيعية</h4>
        <p>• القرفة: تطرد النمل والصراصير</p>
        <p>• الخل الأبيض: ينظف ويطرد الحشرات</p>
        <p>• صودا الخبز: فعالة ضد الصراصير</p>
        <p>• القهوة المطحونة: تطرد النمل والقطط</p>

        <h3>النباتات الطاردة للحشرات</h3>
        <ul>
          <li>الريحان: يطرد الذباب والبعوض</li>
          <li>اللافندر: يطرد العث والبراغيث</li>
          <li>النعناع: يطرد النمل والفئران</li>
          <li>إكليل الجبل: يطرد البعوض والذباب</li>
          <li>الأقحوان: يطرد معظم أنواع الحشرات</li>
        </ul>

        <h3>نصائح للمناطق المختلفة في المنزل</h3>
        <h4>المطبخ</h4>
        <p>• احتفظ بالطعام في حاويات محكمة</p>
        <p>• نظف الفرن والثلاجة بانتظام</p>
        <p>• أصلح تسريبات المياه فوراً</p>
        <p>• نظف تحت الأجهزة الكهربائية</p>

        <h4>الحمام</h4>
        <p>• حافظ على التهوية الجيدة</p>
        <p>• نظف البلاط والفواصل</p>
        <p>• أصلح تسريبات الأنابيب</p>
        <p>• استخدم مزيل الرطوبة</p>

        <h4>غرف النوم</h4>
        <p>• اغسل الفراش بالماء الساخن</p>
        <p>• نظف تحت السرير بانتظام</p>
        <p>• احتفظ بالملابس نظيفة ومرتبة</p>
        <p>• استخدم أكياس مفرغة للملابس الموسمية</p>

        <h3>علامات وجود الحشرات</h3>
        <ul>
          <li>رؤية الحشرات مباشرة</li>
          <li>وجود فضلات أو بقايا</li>
          <li>أصوات غريبة في الجدران</li>
          <li>رائحة كريهة غير مبررة</li>
          <li>تلف في الأقمشة أو الأوراق</li>
          <li>بقع على الجدران أو الأسقف</li>
        </ul>

        <h3>متى تحتاج لمتخصص؟</h3>
        <p>اتصل بشركة مكافحة الحشرات إذا:</p>
        <ul>
          <li>انتشرت الحشرات بشكل كبير</li>
          <li>فشلت الطرق الطبيعية</li>
          <li>ظهرت حشرات خطيرة (عقارب، ثعابين)</li>
          <li>تكررت المشكلة رغم المعالجة</li>
          <li>كان لديك أطفال أو حيوانات أليفة</li>
        </ul>

        <h3>الخلاصة</h3>
        <p>الوقاية من الحشرات تتطلب جهداً مستمراً ولكنها أفضل بكثير من التعامل مع الإصابة. النظافة المستمرة واستخدام الطرق الطبيعية يمكن أن يحمي منزلك بفعالية. مؤسسة الفارس وواحد تقدم خدمات مكافحة الحشرات الآمنة والفعالة.</p>
        `
        : `
        <h2>The Importance of Pest Prevention</h2>
        <p>Preventing insects is much better than trying to eliminate them after they spread. Insects don't just cause annoyance, but may transmit diseases and damage property. Following correct prevention strategies saves time, money and effort.</p>
        
        <h3>Damage Caused by Insects</h3>
        <ul>
          <li>Transmitting diseases and bacteria</li>
          <li>Contaminating food and water</li>
          <li>Damaging furniture and clothing</li>
          <li>Causing allergies</li>
          <li>Psychological disturbance and anxiety</li>
          <li>Economic damage</li>
        </ul>

        <h3>Common Household Insects</h3>
        <h4>1. Cockroaches</h4>
        <p>Spread in kitchens and bathrooms, transmit bacteria and contaminate food. Multiply quickly in humid and warm environments.</p>

        <h4>2. Ants</h4>
        <p>Search for food and water, enter through the smallest cracks. Leave chemical trails that attract more ants.</p>

        <h4>3. Flies</h4>
        <p>Transmit diseases from place to place, multiply in garbage and decaying materials.</p>

        <h4>4. Mosquitoes</h4>
        <p>Transmit serious diseases like malaria and dengue fever, multiply in stagnant water.</p>

        <h4>5. Moths and Mites</h4>
        <p>Feed on fabrics and organic materials, cause allergies and respiratory problems.</p>

        <h3>Effective Prevention Strategies</h3>
        <h4>Comprehensive Cleanliness</h4>
        <p>• Clean kitchen daily and remove food residue</p>
        <p>• Wash dishes immediately after use</p>
        <p>• Wipe surfaces with disinfectant cleaner</p>
        <p>• Clean floors regularly</p>

        <h4>Garbage Management</h4>
        <p>• Use tightly sealed garbage bags</p>
        <p>• Empty garbage daily</p>
        <p>• Clean garbage bins regularly</p>
        <p>• Keep garbage away from house</p>

        <h4>Sealing Entry Points</h4>
        <p>• Seal cracks and holes in walls</p>
        <p>• Install screens on windows and doors</p>
        <p>• Close gaps around pipes</p>
        <p>• Inspect and repair doors and windows</p>

        <h3>Natural Pest Control Methods</h3>
        <h4>Essential Oils</h4>
        <p>• Peppermint oil: Natural repellent for ants and mice</p>
        <p>• Lavender oil: Repels moths and mosquitoes</p>
        <p>• Eucalyptus oil: Effective against flies</p>
        <p>• Tea tree oil: Antibacterial and insect repellent</p>

        <h4>Natural Materials</h4>
        <p>• Cinnamon: Repels ants and cockroaches</p>
        <p>• White vinegar: Cleans and repels insects</p>
        <p>• Baking soda: Effective against cockroaches</p>
        <p>• Ground coffee: Repels ants and cats</p>

        <h3>Insect-Repelling Plants</h3>
        <ul>
          <li>Basil: Repels flies and mosquitoes</li>
          <li>Lavender: Repels moths and fleas</li>
          <li>Mint: Repels ants and mice</li>
          <li>Rosemary: Repels mosquitoes and flies</li>
          <li>Chrysanthemum: Repels most types of insects</li>
        </ul>

        <h3>Tips for Different Areas of the House</h3>
        <h4>Kitchen</h4>
        <p>• Keep food in sealed containers</p>
        <p>• Clean oven and refrigerator regularly</p>
        <p>• Fix water leaks immediately</p>
        <p>• Clean under electrical appliances</p>

        <h4>Bathroom</h4>
        <p>• Maintain good ventilation</p>
        <p>• Clean tiles and grout</p>
        <p>• Fix pipe leaks</p>
        <p>• Use dehumidifier</p>

        <h4>Bedrooms</h4>
        <p>• Wash bedding in hot water</p>
        <p>• Clean under bed regularly</p>
        <p>• Keep clothes clean and organized</p>
        <p>• Use vacuum bags for seasonal clothes</p>

        <h3>Signs of Insect Presence</h3>
        <ul>
          <li>Seeing insects directly</li>
          <li>Presence of droppings or remains</li>
          <li>Strange sounds in walls</li>
          <li>Unexplained bad odor</li>
          <li>Damage to fabrics or papers</li>
          <li>Stains on walls or ceilings</li>
        </ul>

        <h3>When Do You Need a Specialist?</h3>
        <p>Contact a pest control company if:</p>
        <ul>
          <li>Insects have spread extensively</li>
          <li>Natural methods have failed</li>
          <li>Dangerous insects appeared (scorpions, snakes)</li>
          <li>Problem recurred despite treatment</li>
          <li>You have children or pets</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Pest prevention requires continuous effort but is much better than dealing with infestation. Continuous cleanliness and using natural methods can effectively protect your home. Al-Fares & One provides safe and effective pest control services.</p>
        `,
      image: 'https://images.pexels.com/photos/8837788/pexels-photo-8837788.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-08',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'مكافحة الحشرات' : 'Pest Control',
      readTime: language.code === 'ar' ? '6 دقائق' : '6 min read'
    },
    {
      id: 5,
      title: language.code === 'ar' ? 'تنظيف خزانات المياه: دليل شامل' : 'Water Tank Cleaning: Complete Guide',
      excerpt: language.code === 'ar'
        ? 'كل ما تحتاج معرفته عن تنظيف وصيانة خزانات المياه لضمان سلامة الأسرة. خطوات التنظيف والتعقيم والفحص الدوري.'
        : 'Everything you need to know about cleaning and maintaining water tanks for family safety. Cleaning, sterilization and periodic inspection steps.',
      content: language.code === 'ar' 
        ? `
        <h2>أهمية تنظيف خزانات المياه</h2>
        <p>خزانات المياه هي المصدر الأساسي للمياه في معظم المنازل والمباني. إهمال تنظيفها يؤدي إلى تراكم الرواسب والبكتيريا والطحالب، مما يشكل خطراً على صحة الأسرة. التنظيف الدوري ضروري لضمان جودة المياه وسلامتها.</p>
        
        <h3>المخاطر الصحية للخزانات المتسخة</h3>
        <ul>
          <li>انتشار البكتيريا والفيروسات</li>
          <li>نمو الطحالب والفطريات</li>
          <li>تراكم المعادن الثقيلة</li>
          <li>تلوث المياه بالرواسب</li>
          <li>انتشار الأمراض المنقولة بالمياه</li>
          <li>تغير طعم ولون ورائحة المياه</li>
        </ul>

        <h3>علامات تدل على حاجة الخزان للتنظيف</h3>
        <h4>1. تغير لون المياه</h4>
        <p>إذا أصبحت المياه عكرة أو تغير لونها إلى الأصفر أو البني، فهذا يدل على تراكم الرواسب.</p>

        <h4>2. تغير الطعم والرائحة</h4>
        <p>طعم معدني أو رائحة كريهة في المياه تشير إلى وجود تلوث في الخزان.</p>

        <h4>3. وجود رواسب</h4>
        <p>ظهور رواسب في قاع الأكواب أو الأواني بعد استخدام المياه.</p>

        <h4>4. انخفاض ضغط المياه</h4>
        <p>انسداد الأنابيب بسبب الرواسب يؤدي إلى انخفاض ضغط المياه.</p>

        <h4>5. نمو الطحالب</h4>
        <p>ظهور طبقة خضراء أو بنية على جدران الخزان الداخلية.</p>

        <h3>خطوات تنظيف خزان المياه</h3>
        <h4>التحضير والأدوات المطلوبة</h4>
        <p>• قفازات مطاطية وأقنعة واقية</p>
        <p>• فرش تنظيف مختلفة الأحجام</p>
        <p>• منظفات آمنة للخزانات</p>
        <p>• مطهرات معتمدة للمياه</p>
        <p>• خرطوم مياه عالي الضغط</p>
        <p>• مضخة لتفريغ المياه</p>

        <h4>خطوات التنظيف</h4>
        <p><strong>1. إغلاق مصدر المياه:</strong> أغلق صمام دخول المياه للخزان</p>
        <p><strong>2. تفريغ الخزان:</strong> استخدم مضخة لتفريغ المياه بالكامل</p>
        <p><strong>3. الفحص الأولي:</strong> افحص الخزان من الداخل لتحديد مستوى التلوث</p>
        <p><strong>4. إزالة الرواسب:</strong> استخدم فرشاة لإزالة الرواسب والطحالب</p>
        <p><strong>5. الغسيل الأولي:</strong> اغسل الخزان بالماء عالي الضغط</p>
        <p><strong>6. التنظيف العميق:</strong> استخدم منظف آمن ونظف جميع الأسطح</p>
        <p><strong>7. الشطف النهائي:</strong> اشطف الخزان جيداً لإزالة بقايا المنظف</p>

        <h3>التعقيم والتطهير</h3>
        <h4>استخدام الكلور</h4>
        <p>• اخلط محلول كلور مخفف (1:100)</p>
        <p>• اتركه في الخزان لمدة 30 دقيقة</p>
        <p>• اشطف جيداً حتى تختفي رائحة الكلور</p>

        <h4>التعقيم بالأشعة فوق البنفسجية</h4>
        <p>• طريقة حديثة وآمنة</p>
        <p>• لا تترك بقايا كيميائية</p>
        <p>• فعالة ضد جميع أنواع الميكروبات</p>

        <h3>فحص جودة المياه</h3>
        <h4>الفحوصات الأساسية</h4>
        <ul>
          <li>فحص الحموضة (pH)</li>
          <li>فحص الكلور المتبقي</li>
          <li>فحص العكارة</li>
          <li>فحص البكتيريا</li>
          <li>فحص المعادن الثقيلة</li>
        </ul>

        <h4>المعايير المقبولة</h4>
        <p>• الحموضة: 6.5-8.5</p>
        <p>• الكلور المتبقي: 0.2-0.5 مجم/لتر</p>
        <p>• العكارة: أقل من 1 NTU</p>
        <p>• البكتيريا: صفر</p>

        <h3>الصيانة الدورية</h3>
        <h4>جدول الصيانة</h4>
        <p><strong>شهرياً:</strong> فحص بصري للخزان والأنابيب</p>
        <p><strong>كل 3 أشهر:</strong> فحص جودة المياه</p>
        <p><strong>كل 6 أشهر:</strong> تنظيف شامل للخزان</p>
        <p><strong>سنوياً:</strong> فحص شامل للنظام وتغيير الفلاتر</p>

        <h4>نصائح الصيانة</h4>
        <ul>
          <li>تأكد من إحكام إغلاق غطاء الخزان</li>
          <li>فحص الأنابيب بحثاً عن التسريبات</li>
          <li>تنظيف المنطقة المحيطة بالخزان</li>
          <li>فحص مضخة المياه دورياً</li>
          <li>تسجيل تواريخ التنظيف والصيانة</li>
        </ul>

        <h3>أنواع خزانات المياه</h3>
        <h4>الخزانات البلاستيكية</h4>
        <p>• سهلة التنظيف</p>
        <p>• مقاومة للتآكل</p>
        <p>• تحتاج حماية من أشعة الشمس</p>

        <h4>الخزانات الخرسانية</h4>
        <p>• متينة وطويلة الأمد</p>
        <p>• تحتاج عزل داخلي</p>
        <p>• صعبة التنظيف</p>

        <h4>الخزانات المعدنية</h4>
        <p>• قوية ومتينة</p>
        <p>• عرضة للصدأ</p>
        <p>• تحتاج طلاء واقي</p>

        <h3>نصائح للحفاظ على نظافة المياه</h3>
        <ul>
          <li>استخدم فلاتر مياه عالية الجودة</li>
          <li>تأكد من نظافة مصدر المياه</li>
          <li>تجنب تخزين المياه لفترات طويلة</li>
          <li>حافظ على درجة حرارة مناسبة للخزان</li>
          <li>استخدم أغطية محكمة الإغلاق</li>
        </ul>

        <h3>متى تحتاج لمتخصص؟</h3>
        <p>اتصل بشركة متخصصة إذا:</p>
        <ul>
          <li>كان الخزان كبير الحجم أو صعب الوصول</li>
          <li>وجدت تلوث شديد أو رواسب كثيفة</li>
          <li>احتجت لفحوصات مخبرية متقدمة</li>
          <li>كان هناك مشاكل في النظام الكهربائي</li>
          <li>احتجت لشهادات مطابقة صحية</li>
        </ul>

        <h3>الخلاصة</h3>
        <p>تنظيف خزانات المياه ليس مجرد إجراء صحي، بل ضرورة لضمان سلامة الأسرة. التنظيف الدوري والصيانة المنتظمة يضمنان مياه نظيفة وآمنة. مؤسسة الفارس وواحد تقدم خدمات تنظيف وصيانة خزانات المياه بأعلى معايير الجودة والسلامة.</p>
        `
        : `
        <h2>The Importance of Water Tank Cleaning</h2>
        <p>Water tanks are the primary source of water in most homes and buildings. Neglecting their cleaning leads to accumulation of sediments, bacteria and algae, posing a risk to family health. Regular cleaning is necessary to ensure water quality and safety.</p>
        
        <h3>Health Risks of Dirty Tanks</h3>
        <ul>
          <li>Spread of bacteria and viruses</li>
          <li>Growth of algae and fungi</li>
          <li>Accumulation of heavy metals</li>
          <li>Water contamination with sediments</li>
          <li>Spread of waterborne diseases</li>
          <li>Change in water taste, color and odor</li>
        </ul>

        <h3>Signs That Tank Needs Cleaning</h3>
        <h4>1. Water Color Change</h4>
        <p>If water becomes cloudy or changes color to yellow or brown, this indicates sediment accumulation.</p>

        <h4>2. Taste and Odor Change</h4>
        <p>Metallic taste or bad odor in water indicates contamination in the tank.</p>

        <h4>3. Presence of Sediments</h4>
        <p>Appearance of sediments at the bottom of cups or containers after using water.</p>

        <h4>4. Low Water Pressure</h4>
        <p>Pipe blockage due to sediments leads to low water pressure.</p>

        <h4>5. Algae Growth</h4>
        <p>Appearance of green or brown layer on internal tank walls.</p>

        <h3>Water Tank Cleaning Steps</h3>
        <h4>Preparation and Required Tools</h4>
        <p>• Rubber gloves and protective masks</p>
        <p>• Cleaning brushes of different sizes</p>
        <p>• Safe tank cleaners</p>
        <p>• Approved water disinfectants</p>
        <p>• High-pressure water hose</p>
        <p>• Pump for water drainage</p>

        <h4>Cleaning Steps</h4>
        <p><strong>1. Close water source:</strong> Close the water inlet valve to the tank</p>
        <p><strong>2. Empty tank:</strong> Use pump to completely drain water</p>
        <p><strong>3. Initial inspection:</strong> Inspect tank interior to determine contamination level</p>
        <p><strong>4. Remove sediments:</strong> Use brush to remove sediments and algae</p>
        <p><strong>5. Initial washing:</strong> Wash tank with high-pressure water</p>
        <p><strong>6. Deep cleaning:</strong> Use safe cleaner and clean all surfaces</p>
        <p><strong>7. Final rinse:</strong> Rinse tank thoroughly to remove cleaner residue</p>

        <h3>Sterilization and Disinfection</h3>
        <h4>Using Chlorine</h4>
        <p>• Mix diluted chlorine solution (1:100)</p>
        <p>• Leave in tank for 30 minutes</p>
        <p>• Rinse well until chlorine odor disappears</p>

        <h4>UV Sterilization</h4>
        <p>• Modern and safe method</p>
        <p>• Leaves no chemical residue</p>
        <p>• Effective against all types of microbes</p>

        <h3>Water Quality Testing</h3>
        <h4>Basic Tests</h4>
        <ul>
          <li>pH test</li>
          <li>Residual chlorine test</li>
          <li>Turbidity test</li>
          <li>Bacteria test</li>
          <li>Heavy metals test</li>
        </ul>

        <h4>Acceptable Standards</h4>
        <p>• pH: 6.5-8.5</p>
        <p>• Residual chlorine: 0.2-0.5 mg/L</p>
        <p>• Turbidity: Less than 1 NTU</p>
        <p>• Bacteria: Zero</p>

        <h3>Regular Maintenance</h3>
        <h4>Maintenance Schedule</h4>
        <p><strong>Monthly:</strong> Visual inspection of tank and pipes</p>
        <p><strong>Every 3 months:</strong> Water quality testing</p>
        <p><strong>Every 6 months:</strong> Comprehensive tank cleaning</p>
        <p><strong>Annually:</strong> Complete system inspection and filter replacement</p>

        <h4>Maintenance Tips</h4>
        <ul>
          <li>Ensure tank cover is tightly sealed</li>
          <li>Check pipes for leaks</li>
          <li>Clean area around tank</li>
          <li>Check water pump regularly</li>
          <li>Record cleaning and maintenance dates</li>
        </ul>

        <h3>Types of Water Tanks</h3>
        <h4>Plastic Tanks</h4>
        <p>• Easy to clean</p>
        <p>• Corrosion resistant</p>
        <p>• Need protection from sunlight</p>

        <h4>Concrete Tanks</h4>
        <p>• Durable and long-lasting</p>
        <p>• Need internal insulation</p>
        <p>• Difficult to clean</p>

        <h4>Metal Tanks</h4>
        <p>• Strong and durable</p>
        <p>• Prone to rust</p>
        <p>• Need protective coating</p>

        <h3>Tips for Maintaining Water Cleanliness</h3>
        <ul>
          <li>Use high-quality water filters</li>
          <li>Ensure water source cleanliness</li>
          <li>Avoid storing water for long periods</li>
          <li>Maintain appropriate tank temperature</li>
          <li>Use tightly sealed covers</li>
        </ul>

        <h3>When Do You Need a Specialist?</h3>
        <p>Contact a specialized company if:</p>
        <ul>
          <li>Tank is large or difficult to access</li>
          <li>You find severe contamination or dense sediments</li>
          <li>You need advanced laboratory tests</li>
          <li>There are electrical system problems</li>
          <li>You need health compliance certificates</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Water tank cleaning is not just a health procedure, but a necessity to ensure family safety. Regular cleaning and maintenance ensure clean and safe water. Al-Fares & One provides water tank cleaning and maintenance services with the highest quality and safety standards.</p>
        `,
      image: 'https://images.pexels.com/photos/8961292/pexels-photo-8961292.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-05',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف الخزانات' : 'Tank Cleaning',
      readTime: language.code === 'ar' ? '9 دقائق' : '9 min read'
    }
  ];

  // Add remaining articles (6-12) with shorter content for brevity
  const remainingArticles = [
    {
      id: 6,
      title: language.code === 'ar' ? 'تنظيف المطابخ التجارية: معايير السلامة' : 'Commercial Kitchen Cleaning: Safety Standards',
      content: language.code === 'ar' ? '<h2>معايير تنظيف المطابخ التجارية</h2><p>المطابخ التجارية تتطلب معايير نظافة عالية جداً لضمان سلامة الطعام والعملاء...</p>' : '<h2>Commercial Kitchen Cleaning Standards</h2><p>Commercial kitchens require very high cleanliness standards to ensure food and customer safety...</p>',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-03',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف المطابخ' : 'Kitchen Cleaning',
      readTime: language.code === 'ar' ? '6 دقائق' : '6 min read'
    },
    {
      id: 7,
      title: language.code === 'ar' ? 'تنظيف الأرضيات: الرخام والسيراميك والبورسلين' : 'Floor Cleaning: Marble, Ceramic and Porcelain',
      content: language.code === 'ar' ? '<h2>طرق تنظيف الأرضيات المختلفة</h2><p>كل نوع من أنواع الأرضيات يحتاج طريقة تنظيف خاصة للحفاظ على جماله ولمعانه...</p>' : '<h2>Different Floor Cleaning Methods</h2><p>Each type of flooring needs a special cleaning method to maintain its beauty and shine...</p>',
      image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025-01-01',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف الأرضيات' : 'Floor Cleaning',
      readTime: language.code === 'ar' ? '5 دقائق' : '5 min read'
    },
    {
      id: 8,
      title: language.code === 'ar' ? 'تنظيف المسابح: الصيانة الدورية والتعقيم' : 'Pool Cleaning: Regular Maintenance and Sterilization',
      content: language.code === 'ar' ? '<h2>أهمية تنظيف المسابح</h2><p>المسابح تحتاج صيانة دورية وتنظيف مستمر لضمان سلامة المياه ونظافتها...</p>' : '<h2>Importance of Pool Cleaning</h2><p>Pools need regular maintenance and continuous cleaning to ensure water safety and cleanliness...</p>',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-28',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف المسابح' : 'Pool Cleaning',
      readTime: language.code === 'ar' ? '7 دقائق' : '7 min read'
    },
    {
      id: 9,
      title: language.code === 'ar' ? 'خدمات التعقيم: الحماية من الفيروسات والبكتيريا' : 'Sterilization Services: Protection from Viruses and Bacteria',
      content: language.code === 'ar' ? '<h2>أهمية خدمات التعقيم</h2><p>التعقيم أصبح ضرورة حتمية خاصة بعد جائحة كورونا لحماية الأسرة والموظفين...</p>' : '<h2>Importance of Sterilization Services</h2><p>Sterilization has become an absolute necessity especially after COVID-19 pandemic to protect family and employees...</p>',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-25',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'خدمات التعقيم' : 'Sterilization Services',
      readTime: language.code === 'ar' ? '6 دقائق' : '6 min read'
    },
    {
      id: 10,
      title: language.code === 'ar' ? 'تنظيف الفلل والشقق: خدمة شاملة ومتخصصة' : 'Villa and Apartment Cleaning: Comprehensive and Specialized Service',
      content: language.code === 'ar' ? '<h2>تنظيف الفلل والشقق الكبيرة</h2><p>الفلل والشقق الكبيرة تحتاج خدمات تنظيف متخصصة ومعدات خاصة...</p>' : '<h2>Large Villa and Apartment Cleaning</h2><p>Large villas and apartments need specialized cleaning services and special equipment...</p>',
      image: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-22',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف الفلل' : 'Villa Cleaning',
      readTime: language.code === 'ar' ? '5 دقائق' : '5 min read'
    },
    {
      id: 11,
      title: language.code === 'ar' ? 'تنظيف المدارس والمؤسسات التعليمية' : 'School and Educational Institution Cleaning',
      content: language.code === 'ar' ? '<h2>معايير تنظيف المدارس</h2><p>المدارس والمؤسسات التعليمية تحتاج معايير نظافة خاصة لحماية الطلاب والمعلمين...</p>' : '<h2>School Cleaning Standards</h2><p>Schools and educational institutions need special cleanliness standards to protect students and teachers...</p>',
      image: 'https://images.pexels.com/photos/8471916/pexels-photo-8471916.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-20',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف المدارس' : 'School Cleaning',
      readTime: language.code === 'ar' ? '6 دقائق' : '6 min read'
    },
    {
      id: 12,
      title: language.code === 'ar' ? 'تنظيف المساجد: احترام المكان المقدس' : 'Mosque Cleaning: Respecting the Sacred Place',
      content: language.code === 'ar' ? '<h2>تنظيف المساجد بأدب واحترام</h2><p>المساجد أماكن مقدسة تحتاج تنظيف خاص مع مراعاة قدسية المكان وآدابه...</p>' : '<h2>Mosque Cleaning with Respect and Reverence</h2><p>Mosques are sacred places that need special cleaning while respecting the sanctity and etiquette of the place...</p>',
      image: 'https://images.pexels.com/photos/8961292/pexels-photo-8961292.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-18',
      author: language.code === 'ar' ? 'فريق الفارس وواحد' : 'Al-Fares & One Team',
      category: language.code === 'ar' ? 'تنظيف المساجد' : 'Mosque Cleaning',
      readTime: language.code === 'ar' ? '4 دقائق' : '4 min read'
    }
  ];

  const allArticles = [...articles, ...remainingArticles];
  const article = allArticles.find(a => a.id === parseInt(id || '0'));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('article.notFound', 'المقال غير موجود', 'Article Not Found')}
          </h1>
          <Link
            to="/articles"
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            {t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}
            {language.code === 'ar' ? (
              <ArrowLeft className="w-4 h-4 mr-2" />
            ) : (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `${article.title} - ${article.excerpt || ''}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(t('article.linkCopied', 'تم نسخ الرابط', 'Link copied to clipboard'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto px-4"
          >
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm sm:text-base">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString(language.code === 'ar' ? 'ar-SA' : 'en-US')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2 space-x-reverse">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{
                    direction: language.code === 'ar' ? 'rtl' : 'ltr',
                    textAlign: language.code === 'ar' ? 'right' : 'left'
                  }}
                />
                
                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t('article.share', 'شارك المقال', 'Share Article')}
                    </h3>
                    <button
                      onClick={handleShare}
                      className="flex items-center space-x-2 space-x-reverse bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{t('article.shareButton', 'مشاركة', 'Share')}</span>
                    </button>
                  </div>
                </div>

                {/* Back to Articles */}
                <div className="mt-6">
                  <Link
                    to="/articles"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {language.code === 'ar' ? (
                      <>
                        <ArrowLeft className="w-4 h-4 ml-2" />
                        <span>{t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}</span>
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        <span>{t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}</span>
                      </>
                    )}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {t('article.needHelp', 'تحتاج مساعدة؟', 'Need Help?')}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t('article.contactDesc', 'تواصل معنا للحصول على استشارة مجانية', 'Contact us for free consultation')}
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://wa.me/966534150198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{t('article.whatsapp', 'واتساب', 'WhatsApp')}</span>
                  </a>
                  
                  <a
                    href="tel:0534150198"
                    className="flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{t('article.call', 'اتصال', 'Call')}</span>
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {t('article.related', 'مقالات ذات صلة', 'Related Articles')}
                </h3>
                <div className="space-y-4">
                  {allArticles
                    .filter(a => a.id !== article.id)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        to={`/articles/${relatedArticle.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3 space-x-reverse">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(relatedArticle.date).toLocaleDateString(language.code === 'ar' ? 'ar-SA' : 'en-US')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;