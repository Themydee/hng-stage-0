#  HNG Stage 0 Backend Task — Cat Fact API

This is a simple **Node.js + Express.js API** built as part of the **HNG Stage 0 Backend Task**.  
It returns your **personal details**, the **current timestamp**, and a **random cat fact** fetched from the [Cat Fact API](https://catfact.ninja/fact).

---

## 🌐 Live API Endpoint

### **GET**
👉 [https://hng-stage-0-backend-851a9c4ac4fb.herokuapp.com/me](https://hng-stage-0-backend-851a9c4ac4fb.herokuapp.com/me)

---

## 🚀 Example Response

```json
{
  "status": "success",
  "user": {
    "email": "nifetemiboy@gmail.com",
    "name": "Temidayo Akanbi-Bello",
    "stack": "Node.js/Express.js"
  },
  "timestamp": "2025-10-16T15:25:40.663Z",
  "fact": "Cats have over 20 muscles that control their ears."
}
```

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Axios**
- **Dotenv**
- **Express Rate Limit**
- **Nodemon**

---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/hng-stage-0-backend.git
   cd hng-stage-0-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```bash
   PORT=3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The API should now be running at:
   ```
   http://localhost:3000/me
   ```

---

## 🧩 Project Structure

```
.
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---


## ✨ Author

**Temidayo Akanbi-Bello**  
👤 [@Themydee](https://themydee.vercel.com/Themydee)  
📧 nifetemiboy@gmail.com  
💻 Stack: Node.js / Express.js