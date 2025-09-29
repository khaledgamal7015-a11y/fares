import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Services data with photoFilename
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
  }
];

// Products data with photoFilename
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

// Articles data with photoFilename
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

async function seedData() {
  console.log('Starting data seeding...');
  
  try {
    // Seed services
    console.log('Seeding services...');
    for (const service of servicesData) {
      const response = await fetch('http://localhost:3000/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
      });
      
      if (response.ok) {
        console.log(`✅ Created service: ${service.name}`);
      } else {
        console.log(`❌ Failed to create service: ${service.name}`);
      }
    }
    
    // Seed products
    console.log('Seeding products...');
    for (const product of productsData) {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      
      if (response.ok) {
        console.log(`✅ Created product: ${product.name}`);
      } else {
        console.log(`❌ Failed to create product: ${product.name}`);
      }
    }
    
    // Seed articles
    console.log('Seeding articles...');
    for (const article of articlesData) {
      const response = await fetch('http://localhost:3000/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });
      
      if (response.ok) {
        console.log(`✅ Created article: ${article.title}`);
      } else {
        console.log(`❌ Failed to create article: ${article.title}`);
      }
    }
    
    console.log('🎉 Data seeding completed!');
    
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  }
}

// Run the seeding
if (import.meta.url === `file://${process.argv[1]}`) {
  seedData().catch(console.error);
}

export { seedData };

