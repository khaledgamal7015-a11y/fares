import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://eslamabdullatif21:oneone2@cluster0fares.gpozmsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0fares';

const servicesData = [
  {
    id: 1,
    name: 'تنظيف المنازل',
    nameEn: 'Home Cleaning',
    description: 'خدمة تنظيف شاملة للمنازل تشمل جميع الغرف والمرافق',
    descriptionEn: 'Comprehensive home cleaning service including all rooms and facilities',
    image: '/36226.jpg',
    photoFilename: '36226.jpg',
    features: [
      'تنظيف جميع الغرف',
      'تنظيف الحمامات والمطابخ',
      'تنظيف النوافذ',
      'تنظيف الأرضيات',
      'تعقيم الأسطح'
    ],
    featuresEn: [
      'Clean all rooms',
      'Clean bathrooms and kitchens',
      'Clean windows',
      'Clean floors',
      'Sanitize surfaces'
    ]
  },
  {
    id: 2,
    name: 'تنظيف الشركات والفنادق',
    nameEn: 'Corporate & Hotel Cleaning',
    description: 'خدمات تنظيف متخصصة للشركات والفنادق والمؤسسات التجارية',
    descriptionEn: 'Specialized cleaning services for companies, hotels and commercial establishments',
    image: '/22.jpg',
    photoFilename: '22.jpg',
    features: [
      'تنظيف المكاتب والقاعات',
      'تنظيف الممرات والردهات',
      'تنظيف دورات المياه العامة',
      'تنظيف المطاعم والكافيهات',
      'خدمات التعقيم المتقدمة'
    ],
    featuresEn: [
      'Clean offices and halls',
      'Clean corridors and lobbies',
      'Clean public restrooms',
      'Clean restaurants and cafes',
      'Advanced sanitization services'
    ]
  },
  {
    id: 3,
    name: 'تنظيف الفلل والشقق',
    nameEn: 'Villa & Apartment Cleaning',
    description: 'خدمات تنظيف متخصصة للفلل والشقق السكنية',
    descriptionEn: 'Specialized cleaning services for villas and residential apartments',
    image: '/1.jpg',
    photoFilename: '1.jpg',
    features: [
      'تنظيف شامل للفلل الكبيرة',
      'تنظيف الحدائق والمسابح',
      'تنظيف الشقق المفروشة',
      'خدمات ما بعد الإنشاء',
      'تنظيف دوري منتظم'
    ],
    featuresEn: [
      'Comprehensive cleaning for large villas',
      'Garden and pool cleaning',
      'Furnished apartment cleaning',
      'Post-construction cleaning',
      'Regular scheduled cleaning'
    ]
  },
  {
    id: 4,
    name: 'تنظيف وغسيل المكيفات',
    nameEn: 'AC Cleaning & Washing',
    description: 'خدمة تنظيف وصيانة أجهزة التكييف لضمان الأداء الأمثل',
    descriptionEn: 'AC cleaning and maintenance service to ensure optimal performance',
    image: '/3.jpg',
    photoFilename: '3.jpg',
    features: [
      'تنظيف المكيفات الداخلية والخارجية',
      'تغيير الفلاتر',
      'فحص وصيانة الأنابيب',
      'تعقيم وتطهير الوحدات',
      'ضمان على الخدمة'
    ],
    featuresEn: [
      'Clean indoor and outdoor AC units',
      'Filter replacement',
      'Pipe inspection and maintenance',
      'Unit sanitization and sterilization',
      'Service warranty'
    ]
  },
  {
    id: 5,
    name: 'تنظيف وعزل الخزانات',
    nameEn: 'Tank Cleaning & Insulation',
    description: 'خدمات تنظيف وعزل خزانات المياه لضمان سلامة المياه',
    descriptionEn: 'Water tank cleaning and insulation services to ensure water safety',
    image: '/5245.jpg',
    photoFilename: '5245.jpg',
    features: [
      'تنظيف وتعقيم الخزانات',
      'عزل الخزانات حرارياً ومائياً',
      'فحص جودة المياه',
      'إصلاح التسريبات',
      'شهادات مطابقة صحية'
    ],
    featuresEn: [
      'Tank cleaning and sterilization',
      'Thermal and water insulation',
      'Water quality testing',
      'Leak repair',
      'Health compliance certificates'
    ]
  }
];

const productsData = [
  {
    id: 1,
    name: 'عرض تنظيف منزل كامل',
    nameEn: 'Complete House Cleaning Package',
    price: 300,
    image: '/646.jpg',
    photoFilename: '646.jpg',
    description: 'تنظيف شامل لجميع غرف المنزل مع التعقيم والتطهير',
    descriptionEn: 'Complete cleaning of all house rooms with sanitization and sterilization'
  },
  {
    id: 2,
    name: 'عرض تنظيف مكيفات (4 وحدات)',
    nameEn: 'AC Cleaning Package (4 Units)',
    price: 200,
    image: '/30.jpg',
    photoFilename: '30.jpg',
    description: 'تنظيف وصيانة 4 وحدات تكييف شاملة الفلاتر والأنابيب',
    descriptionEn: 'Cleaning and maintenance of 4 AC units including filters and pipes'
  },
  {
    id: 3,
    name: 'عرض مكافحة حشرات',
    nameEn: 'Pest Control Package',
    price: 250,
    image: '/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg',
    photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg',
    description: 'مكافحة شاملة للحشرات والقوارض مع ضمان 6 أشهر',
    descriptionEn: 'Comprehensive pest and rodent control with 6-month warranty'
  }
];

const articlesData = [
  {
    id: 1,
    title: 'شركة تنظيف بالقصيم – مؤسسة الفارس وواحد لنظافة وصيانة المنازل',
    excerpt: 'مؤسسة الفارس وواحد لنظافة وصيانة المنازل بالقصيم تقدم خدمات تنظيف شاملة للمنازل، الفلل، المكاتب، السجاد والمجالس بأعلى جودة وأسعار مناسبة.',
    image: '/elaosboa49061.png',
    photoFilename: 'elaosboa49061.png',
    content: '<h1>شركة تنظيف بالقصيم – مؤسسة الفارس الأفضل في بريدة وجميع مدن القصيم</h1><p>إذا كنت تبحث عن شركة تنظيف بالقصيم متميزة وموثوقة، فإنك ستجد أن الخيارات كثيرة، لكن القليل منها يقدم الجودة والاحترافية التي تبحث عنها.</p>',
    date: '2025-01-08',
    author: 'فريق الفارس وواحد',
    category: 'تنظيف المنازل',
    published: true,
    featured: true
  }
];

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  });
  
  try {
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');
    
    const db = client.db('fares-website');
    
    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await db.collection('services').deleteMany({});
    await db.collection('products').deleteMany({});
    await db.collection('articles').deleteMany({});
    
    // Insert services
    console.log('📝 Inserting services...');
    await db.collection('services').insertMany(servicesData);
    console.log(`✅ Inserted ${servicesData.length} services`);
    
    // Insert products
    console.log('🛍️ Inserting products...');
    await db.collection('products').insertMany(productsData);
    console.log(`✅ Inserted ${productsData.length} products`);
    
    // Insert articles
    console.log('📰 Inserting articles...');
    await db.collection('articles').insertMany(articlesData);
    console.log(`✅ Inserted ${articlesData.length} articles`);
    
    console.log('🎉 Database seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection closed');
  }
}

// Run the seeding
console.log('🚀 Starting database seeding...');
seedDatabase().catch(console.error);

