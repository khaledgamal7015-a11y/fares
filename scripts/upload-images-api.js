import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function uploadImageToAPI(filePath, filename) {
  const formData = new FormData();
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer]);
  formData.append('file', blob, filename);

  try {
    const response = await fetch('http://localhost:3000/api/photos', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Uploaded: ${filename}`);
      return result.filename;
    } else {
      console.error(`❌ Failed to upload ${filename}:`, await response.text());
      return null;
    }
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error.message);
    return null;
  }
}

async function migrateImagesViaAPI() {
  console.log('Starting image migration via API...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imageFiles = fs.readdirSync(publicDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
  });
  
  console.log(`Found ${imageFiles.length} image files to migrate`);
  
  const uploadedFiles = [];
  for (const filename of imageFiles) {
    const filePath = path.join(publicDir, filename);
    const result = await uploadImageToAPI(filePath, filename);
    if (result) {
      uploadedFiles.push(result);
    }
  }
  
  console.log(`Successfully uploaded ${uploadedFiles.length} images`);
  return uploadedFiles;
}

// Run the migration
if (import.meta.url === `file://${process.argv[1]}`) {
  migrateImagesViaAPI().catch(console.error);
}

export { migrateImagesViaAPI };

