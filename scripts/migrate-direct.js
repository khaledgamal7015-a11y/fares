import clientPromise from '../src/lib/mongodb.ts';
import { GridFSBucket } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function migrateImagesDirect() {
  try {
    console.log('Starting direct MongoDB migration...');
    
    const client = await clientPromise;
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    
    console.log('Connected to MongoDB successfully');
    
    // Get all image files from public directory
    const publicDir = path.join(__dirname, '..', 'public');
    const imageFiles = fs.readdirSync(publicDir).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });
    
    console.log(`Found ${imageFiles.length} image files to migrate`);
    
    // Upload each image to GridFS
    const uploadedFiles = [];
    for (const filename of imageFiles) {
      const filePath = path.join(publicDir, filename);
      const fileBuffer = fs.readFileSync(filePath);
      
      const uploadStream = bucket.openUploadStream(filename, {
        contentType: getContentType(filename)
      });
      
      await new Promise((resolve, reject) => {
        uploadStream.end(fileBuffer);
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
      });
      
      uploadedFiles.push(filename);
      console.log(`✅ Uploaded: ${filename}`);
    }
    
    console.log(`Successfully uploaded ${uploadedFiles.length} images to GridFS`);
    
    // Now update the database collections
    await updateServicesData(db, uploadedFiles);
    await updateProductsData(db, uploadedFiles);
    await updateArticlesData(db, uploadedFiles);
    
    console.log('🎉 Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.error('Error details:', error.message);
  }
}

function getContentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const contentTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp'
  };
  return contentTypes[ext] || 'image/jpeg';
}

async function updateServicesData(db, uploadedFiles) {
  console.log('Updating services data...');
  
  const services = [
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
  
  for (const service of services) {
    await db.collection('services').updateOne(
      { id: service.id },
      { 
        $set: { 
          photoFilename: service.photoFilename,
          image: service.image
        }
      }
    );
    console.log(`Updated service ${service.id} with photoFilename: ${service.photoFilename}`);
  }
}

async function updateProductsData(db, uploadedFiles) {
  console.log('Updating products data...');
  
  const products = [
    { id: 1, image: '/646.jpg', photoFilename: '646.jpg' },
    { id: 2, image: '/30.jpg', photoFilename: '30.jpg' },
    { id: 3, image: '/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg', photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg' },
    { id: 4, image: '/31.jpg', photoFilename: '31.jpg' },
    { id: 5, image: '/32.jpg', photoFilename: '32.jpg' },
    { id: 6, image: '/33.jpg', photoFilename: '33.jpg' }
  ];
  
  const offers = [
    { id: 101, image: '/Untitled-1.jpgtd.jpg', photoFilename: 'Untitled-1.jpgtd.jpg' },
    { id: 102, image: '/01.jpg', photoFilename: '01.jpg' },
    { id: 103, image: '/252.jpg', photoFilename: '252.jpg' }
  ];
  
  for (const product of products) {
    await db.collection('products').updateOne(
      { id: product.id },
      { 
        $set: { 
          photoFilename: product.photoFilename,
          image: product.image
        }
      }
    );
    console.log(`Updated product ${product.id} with photoFilename: ${product.photoFilename}`);
  }
  
  for (const offer of offers) {
    await db.collection('products').updateOne(
      { id: offer.id },
      { 
        $set: { 
          photoFilename: offer.photoFilename,
          image: offer.image
        }
      }
    );
    console.log(`Updated offer ${offer.id} with photoFilename: ${offer.photoFilename}`);
  }
}

async function updateArticlesData(db, uploadedFiles) {
  console.log('Updating articles data...');
  
  const articles = [
    { id: 1, image: '/elaosboa49061.png', photoFilename: 'elaosboa49061.png' },
    { id: 2, image: '/www.ahlaabayt.com28-scaled.jpg', photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
    { id: 3, image: '/www.ahlaabayt.com28-scaled.jpg', photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
    { id: 4, image: 'https://images.pexels.com/photos/8837788/pexels-photo-8837788.jpeg?auto=compress&cs=tinysrgb&w=800', photoFilename: null },
    { id: 5, image: 'https://images.pexels.com/photos/8961292/pexels-photo-8961292.jpeg?auto=compress&cs=tinysrgb&w=800', photoFilename: null }
  ];
  
  for (const article of articles) {
    await db.collection('articles').updateOne(
      { id: article.id },
      { 
        $set: { 
          photoFilename: article.photoFilename,
          image: article.image
        }
      }
    );
    console.log(`Updated article ${article.id} with photoFilename: ${article.photoFilename || 'external image'}`);
  }
}

// Run the migration
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateImagesDirect().catch(console.error);
}

export { migrateImagesDirect };
