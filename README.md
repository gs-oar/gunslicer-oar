# Gunslicer Open Animations Replacer Pack

This repository hosts code and animation files for Gunslicer OAR animations pack and a video preview gallery that automatically updates and serves the previews via GitHub Pages. The videos are stored in the `previews` branch, and the gallery is generated to and deployed from the `gh-pages` branch.

## Workflow Overview

1. **Branch Setup**:
    - `previews`: Contains video files (`.webm`, `.mp4`, `.gif`) to be displayed on the GitHub Pages site.
    - `gh-pages`: Hosts the generated HTML files for the video gallery.

2. **GitHub Actions Workflow**:
    - The workflow triggers on pushes to the `previews` branch and on manual dispatch.
    - It checks out both the `previews` and `gh-pages` branches.
    - It copies the video files from the `previews` branch to the `gh-pages` branch.
    - It generates the video gallery HTML files.
    - It deploys the changes to the `gh-pages` branch, making them available on the GitHub Pages site.

## Contributing New Previews or OAR Config Changes

To add new previews or suggest changes to the OAR configs on main:

1. **Fork the Repository**:
    - Fork this repository to your GitHub account.

2. **Create a New Branch**:
    - Create a new branch in your forked repository.

3. **Add Your Videos**:
    - Add your video files (`.webm`, `.mp4`, `.gif`) to the `previews` directory in your new branch. Please keep individual file sizes to less than 10mb and avoid nudity.

4. **Create a Pull Request**:
    - Create a pull request from your new branch to the appropriate branch of this repository.
    - Provide a meaningful description of the changes in the PR.