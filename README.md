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

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/QR-Generator.git
cd QR-Generator
