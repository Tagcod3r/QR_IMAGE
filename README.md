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

  ![Screenshot 2024-12-11 192835](https://github.com/user-attachments/assets/7095eb08-5e2d-4c86-bc3f-f83dea90cdd8)
  
  - **QR-Image and Download option**

  ![Screenshot 2024-12-11 193232](https://github.com/user-attachments/assets/ab361c55-f3dc-45ef-9c82-e75162a1c9ff)
  ![copy](https://github.com/user-attachments/assets/c7156972-c5d5-4b4c-a8d5-565c3ebb133e)
  
  - **Alert Message**

  ![Screenshot 2024-12-11 193310](https://github.com/user-attachments/assets/878832d4-77d5-4802-bb2f-025bade69410)

## Generate Your QR

 - You can try out the working here: [Generate QR code](https://qr-image.onrender.com)
---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/QR-Generator.git
cd QR-Generator
