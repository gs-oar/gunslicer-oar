# Preview Video Gallery

This branch contains a video gallery generator for the project. It automatically creates a static HTML gallery of video previews and individual video pages.

## Features

- Generates a responsive video gallery
- Creates individual pages for each video
- Supports .webm, .mp4, and .gif formats
- Automatically generates preview thumbnails for videos
- GitHub Actions workflow for automatic deployment to GitHub Pages

## How it Works

1. The `generate-video-gallery.js` script processes video files in the `previews` directory.
2. It generates preview thumbnails for each video using FFmpeg.
3. Individual HTML pages are created for each video.
4. A main gallery page (index.html) is generated with previews of all videos.
5. The GitHub Actions workflow automatically deploys the generated files to GitHub Pages.

## File Structure

- `generate-video-gallery.js`: Main script for generating the gallery
- `template.html`: Template for the main gallery page
- `video_template.html`: Template for individual video pages
- `.github/workflows/serve-previews.yml`: GitHub Actions workflow file

## Usage

To add new videos:

1. Add video files to the `previews` directory.
2. Push the changes to the `previews` branch.
3. The GitHub Actions workflow will automatically generate the gallery and deploy it to GitHub Pages.

## Development

To run the gallery generator locally:

1. Install dependencies: `npm install`
2. Ensure FFmpeg is installed on your system
3. Run the script: `node generate-video-gallery.js`

## Deployment

The gallery is automatically deployed to GitHub Pages when changes are pushed to the `previews` branch.