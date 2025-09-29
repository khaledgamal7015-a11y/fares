import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Services mapping
const servicesMapping = [
  { id: 1, image: '/36226.jpg', photoFilename: '36226.jpg' },
  { id: 2, image: '/22.jpg', photoFilename: '22.jpg' },
  { id: 3, image: '/1.jpg', photoFilename: '1.jpg' },
  { id: 4, image: '/3.jpg', photoFilename: '3.jpg' },
  { id: 5, image: '/5245.jpg', photoFilename: '5245.jpg' },
  { id: 6, image: '/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg', photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg' },
  { id: 7, image: '/Untitled-1.jpg', photoFilename: 'Untitled-1.jpg' },
  { id: 8, image: '/images.jpg', photoFilename: 'images.jpg' },
  { id: 9, image: '/12121212.jpg', photoFilename: '12121212.jpg' },
  { id: 10, image: '/321.jpg', photoFilename: '321.jpg' },
  { id: 11, image: '/www.ahlaabayt.com28-scaled.jpg', photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
  { id: 12, image: '/01.jpg', photoFilename: '01.jpg' },
  { id: 13, image: '/02.jpg', photoFilename: '02.jpg' },
  { id: 14, image: '/03.jpg', photoFilename: '03.jpg' },
  { id: 15, image: '/283.jpg', photoFilename: '283.jpg' }
];

// Products mapping
const productsMapping = [
  { id: 1, image: '/646.jpg', photoFilename: '646.jpg' },
  { id: 2, image: '/30.jpg', photoFilename: '30.jpg' },
  { id: 3, image: '/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg', photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg' },
  { id: 4, image: '/31.jpg', photoFilename: '31.jpg' },
  { id: 5, image: '/32.jpg', photoFilename: '32.jpg' },
  { id: 6, image: '/33.jpg', photoFilename: '33.jpg' }
];

// Offers mapping
const offersMapping = [
  { id: 101, image: '/Untitled-1.jpgtd.jpg', photoFilename: 'Untitled-1.jpgtd.jpg' },
  { id: 102, image: '/01.jpg', photoFilename: '01.jpg' },
  { id: 103, image: '/252.jpg', photoFilename: '252.jpg' }
];

// Articles mapping
const articlesMapping = [
  { id: 1, image: '/elaosboa49061.png', photoFilename: 'elaosboa49061.png' },
  { id: 2, image: '/www.ahlaabayt.com28-scaled.jpg', photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
  { id: 3, image: '/www.ahlaabayt.com28-scaled.jpg', photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
  { id: 4, image: 'https://images.pexels.com/photos/8837788/pexels-photo-8837788.jpeg?auto=compress&cs=tinysrgb&w=800', photoFilename: null },
  { id: 5, image: 'https://images.pexels.com/photos/8961292/pexels-photo-8961292.jpeg?auto=compress&cs=tinysrgb&w=800', photoFilename: null }
];

function updateServicesFile() {
  console.log('Updating services file...');
  const servicesPath = path.join(__dirname, '..', 'src', 'data', 'services.ts');
  let content = fs.readFileSync(servicesPath, 'utf8');
  
  // Add photoFilename to each service
  servicesMapping.forEach(service => {
    const regex = new RegExp(`(id: ${service.id},[\\s\\S]*?image: '${service.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',)`, 'g');
    content = content.replace(regex, `$1\n    photoFilename: '${service.photoFilename}',`);
  });
  
  fs.writeFileSync(servicesPath, content);
  console.log('Services file updated successfully!');
}

function updateProductsFile() {
  console.log('Updating products file...');
  const productsPath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
  let content = fs.readFileSync(productsPath, 'utf8');
  
  // Add photoFilename to each product
  productsMapping.forEach(product => {
    const regex = new RegExp(`(id: ${product.id},[\\s\\S]*?image: '${product.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',)`, 'g');
    content = content.replace(regex, `$1\n    photoFilename: '${product.photoFilename}',`);
  });
  
  // Add photoFilename to each offer
  offersMapping.forEach(offer => {
    const regex = new RegExp(`(id: ${offer.id},[\\s\\S]*?image: '${offer.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',)`, 'g');
    content = content.replace(regex, `$1\n    photoFilename: '${offer.photoFilename}',`);
  });
  
  fs.writeFileSync(productsPath, content);
  console.log('Products file updated successfully!');
}

function updateArticlesFile() {
  console.log('Updating articles file...');
  const articlesPath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
  let content = fs.readFileSync(articlesPath, 'utf8');
  
  // Add photoFilename to each article
  articlesMapping.forEach(article => {
    if (article.photoFilename) {
      const regex = new RegExp(`(id: ${article.id},[\\s\\S]*?image: '${article.image.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',)`, 'g');
      content = content.replace(regex, `$1\n  photoFilename: '${article.photoFilename}',`);
    }
  });
  
  fs.writeFileSync(articlesPath, content);
  console.log('Articles file updated successfully!');
}

// Run the updates
console.log('Starting data file updates...');
updateServicesFile();
updateProductsFile();
updateArticlesFile();
console.log('All data files updated successfully!');

