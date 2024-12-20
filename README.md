# QR Code Generator

This is a simple web application that allows users to generate a QR code from a URL. The application uses `Express.js` as the server and `qr-image` for generating QR codes.

## Features:
- Users can input a URL to generate a QR code.
- The generated QR code can be downloaded as an image.
- If the QR code is not downloaded, it will automatically be deleted after 10 seconds.

## Tech Stack:
- **Node.js**
- **Express.js**
- **EJS (for templating)**
- **qr-image (for generating QR codes)**
- **body-parser (for parsing POST request data)**

## Preview

- **Here is a preview of the page's frontend. The layout and user interface display the area where the user can enter their URL and it redirects to the QR image.**
 
  - **Front-End**
![Screenshot 2024-12-20 182907](https://github.com/user-attachments/assets/b5011f3d-b329-4db4-b893-072c94e1a475)
![Screenshot 2024-12-20 184146](https://github.com/user-attachments/assets/d2732647-e83c-4b28-a6d9-7d073cdb3877)
  
  - **QR-Image and Download option**

    ![Screenshot 2024-12-20 183100](https://github.com/user-attachments/assets/9e4c6628-d80e-4955-af7b-babc6a991e59)
  
  - **Alert Message**

    ![Screenshot 2024-12-20 183024](https://github.com/user-attachments/assets/23335346-1b90-4253-9099-906f0c552b7b)

## Generate Your QR

 - You can try out the working here: [Generate QR code](https://qr-image.onrender.com)
---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/QR-Generator.git
cd QR-Generator
