# 📘 Word Wizard – Dictionary Web App

**Word Wizard** is a simple, responsive, and user-friendly dictionary web application that allows users to look up the definition, part of speech, examples, and pronunciation of any English word using the [Free Dictionary API](https://dictionaryapi.dev/).

---

## 🚀 Live Demo

🔗 [Click here to try the app](https://23241a6749.github.io/word-wizard/)  

---

## ✨ Features

- 🔍 Search any English word instantly  
- 📖 View definitions, parts of speech, and example usage  
- 🔈 Hear pronunciation (audio if available)  
- ⚠️ Graceful error handling for invalid or unknown words  
- 📱 Fully responsive design – mobile & desktop friendly  

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **API:** [Free Dictionary API](https://dictionaryapi.dev/)  
- **Hosting:** GitHub Pages  

---

## 📦 How to Run Locally

```bash
git clone https://github.com/23241a6749/word-wizard.git
cd word-wizard
# Open index.html in your browser
```

No frameworks or build tools required – it runs entirely in the browser.

---

## 🧠 API Reference

**GET Request:**  
```
https://api.dictionaryapi.dev/api/v2/entries/en/<word>
```

**Example:**  
```
https://api.dictionaryapi.dev/api/v2/entries/en/example
```

The API returns:
- `word`
- `phonetics`: Text and audio
- `meanings`: Parts of speech, definitions, and examples

---

## 📸 Preview

> ![App Screenshot]![image](https://github.com/user-attachments/assets/9214afee-7945-482c-a332-fb4e6c04768c)


---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) – feel free to use, modify, and share.

---

