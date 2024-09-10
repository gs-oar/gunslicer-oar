const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, 'previews');
const outputDir = path.join(__dirname, 'gh-pages');
const templateFile = path.join(__dirname, 'template.html');
const videoTemplateFile = path.join(__dirname, 'video_template.html');
const indexFile = path.join(outputDir, 'index.html');
const baseUrl = 'https://gs-oar.github.io/gunslicer-oar';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Supported video formats
const supportedFormats = ['.webm', '.mp4', '.gif'];

// Read all video files from the videos directory
const videoFiles = fs.readdirSync(videosDir).filter(file => supportedFormats.includes(path.extname(file).toLowerCase()));

// Function to create individual video pages
const createVideoPage = (videoFile) => {
  const videoPath = `previews/${videoFile}`;
  const videoTitle = videoFile;
  let videoElement;

  // Determine the correct HTML element based on file extension
  if (videoFile.endsWith('.gif')) {
    videoElement = `<img src="${videoPath}" alt="${videoTitle}">`;
  } else {
    videoElement = `
      <video width="100%" height="auto" controls loop>
        <source src="${videoPath}" type="video/${path.extname(videoFile).substring(1)}">
        Your browser does not support the video tag.
      </video>
    `;
  }

  // Read the video template file
  let videoTemplate = fs.readFileSync(videoTemplateFile, 'utf8');

  // Replace placeholders with actual values
  videoTemplate = videoTemplate.replace(/\{\{ video_title \}\}/g, videoTitle);
  videoTemplate = videoTemplate.replace(/\{\{ video_element \}\}/g, videoElement);

  // Write the individual video HTML file
  const outputVideoFile = path.join(outputDir, `${videoFile}.html`);
  fs.writeFileSync(outputVideoFile, videoTemplate);

  console.log(`Video page generated: ${outputVideoFile}`);
};

// Generate HTML for each video and create individual pages
const videoListHtml = videoFiles.map(videoFile => {
  createVideoPage(videoFile);
  return `
    <div class="video-item">
      <a href="${videoFile}.html">
        <h2>${videoFile}</h2>
        ${videoFile.endsWith('.gif') ? 
          `<img src="previews/${videoFile}" alt="${videoFile}">` :
          `<video muted autoplay loop>
            <source src="previews/${videoFile}" type="video/${path.extname(videoFile).substring(1)}">
            Your browser does not support the video tag.
          </video>`
        }
      </a>
    </div>
  `;
}).join('\n');

// Read the template file
const template = fs.readFileSync(templateFile, 'utf8');

// Replace the placeholder with the generated video list HTML
const outputHtml = template.replace('{{ video_list }}', videoListHtml);

// Write the output HTML to the output directory
fs.writeFileSync(indexFile, outputHtml);

console.log('Video gallery and individual pages generated successfully.');
