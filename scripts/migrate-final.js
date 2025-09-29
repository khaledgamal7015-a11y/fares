import { MongoClient, GridFSBucket } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGODB_URI = 'mongodb+srv://eslamabdullatif21:oneone2@cluster0fares.gpozmsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0fares';

async function migrateImagesAndData() {
  const client = new MongoClient(MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
  });
  
  try {
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected to MongoDB successfully');
    
    const db = client.db('fares-website');
    const bucket = new GridFSBucket(db, { bucketName: 'photos' });
    
    // Get all image files from public directory
    const publicDir = path.join(__dirname, '..', 'public');
    const imageFiles = fs.readdirSync(publicDir).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });
    
    console.log(`📁 Found ${imageFiles.length} image files to migrate`);
    
    // Upload each image to GridFS
    const uploadedFiles = [];
    for (const filename of imageFiles) {
      try {
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
      } catch (error) {
        console.error(`❌ Failed to upload ${filename}:`, error.message);
      }
    }
    
    console.log(`🎉 Successfully uploaded ${uploadedFiles.length} images to GridFS`);
    
    // Now update the database collections with photoFilename
    await updateDatabaseCollections(db);
    
    console.log('🎉 Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.error('Error details:', error.message);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection closed');
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

async function updateDatabaseCollections(db) {
  console.log('🔄 Updating database collections...');
  
  // Update services
  const servicesUpdates = [
    { id: 1, photoFilename: '36226.jpg' },
    { id: 2, photoFilename: '22.jpg' },
    { id: 3, photoFilename: '1.jpg' },
    { id: 4, photoFilename: '3.jpg' },
    { id: 5, photoFilename: '5245.jpg' },
    { id: 6, photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg' },
    { id: 7, photoFilename: 'Untitled-1.jpg' },
    { id: 8, photoFilename: 'images.jpg' },
    { id: 9, photoFilename: '12121212.jpg' },
    { id: 10, photoFilename: '321.jpg' },
    { id: 11, photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
    { id: 12, photoFilename: '01.jpg' },
    { id: 13, photoFilename: '02.jpg' },
    { id: 14, photoFilename: '03.jpg' },
    { id: 15, photoFilename: '283.jpg' }
  ];
  
  for (const update of servicesUpdates) {
    await db.collection('services').updateOne(
      { id: update.id },
      { $set: { photoFilename: update.photoFilename } }
    );
    console.log(`✅ Updated service ${update.id} with photoFilename: ${update.photoFilename}`);
  }
  
  // Update products
  const productsUpdates = [
    { id: 1, photoFilename: '646.jpg' },
    { id: 2, photoFilename: '30.jpg' },
    { id: 3, photoFilename: '152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg' },
    { id: 4, photoFilename: '31.jpg' },
    { id: 5, photoFilename: '32.jpg' },
    { id: 6, photoFilename: '33.jpg' },
    { id: 101, photoFilename: 'Untitled-1.jpgtd.jpg' },
    { id: 102, photoFilename: '01.jpg' },
    { id: 103, photoFilename: '252.jpg' }
  ];
  
  for (const update of productsUpdates) {
    await db.collection('products').updateOne(
      { id: update.id },
      { $set: { photoFilename: update.photoFilename } }
    );
    console.log(`✅ Updated product ${update.id} with photoFilename: ${update.photoFilename}`);
  }
  
  // Update articles
  const articlesUpdates = [
    { id: 1, photoFilename: 'elaosboa49061.png' },
    { id: 2, photoFilename: 'www.ahlaabayt.com28-scaled.jpg' },
    { id: 3, photoFilename: 'www.ahlaabayt.com28-scaled.jpg' }
  ];
  
  for (const update of articlesUpdates) {
    await db.collection('articles').updateOne(
      { id: update.id },
      { $set: { photoFilename: update.photoFilename } }
    );
    console.log(`✅ Updated article ${update.id} with photoFilename: ${update.photoFilename}`);
  }
  
  console.log('✅ Database collections updated successfully');
}

// Run the migration
console.log('🚀 Starting migration script...');
migrateImagesAndData().catch(console.error);

export { migrateImagesAndData };
