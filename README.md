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
![IMG_20241220_105253](https://github.com/user-attachments/assets/45d9c443-eea1-4c29-bf9d-8ccd76c4c53b)
![IMG_20241220_105231](https://github.com/user-attachments/assets/453fa19e-8787-4d85-b099-3b4f7db3e864)
  
  - **QR-Image and Download option**

     ![IMG_20241220_105202](https://github.com/user-attachments/assets/e8268bb2-aa89-4c63-a787-c67426115909)
  
  - **Alert Message**

![IMG_20241220_105218](https://github.com/user-attachments/assets/94925029-d877-4398-b42d-5aecae018b50))

## Generate Your QR

 - You can try out the working here: [Generate QR code](https://qr-image.onrender.com)
---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/QR-Generator.git
cd QR-Generator
