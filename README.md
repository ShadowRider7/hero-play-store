📱 Hero Play Store

## 📖 Description

Hero Play Store is a modern web-based Play Store clone where users can explore apps, view detailed information, and install their favorite applications. The platform provides an interactive and user-friendly experience with dynamic routing, persistent storage, and data visualization.

Users can browse through a collection of apps, search in real-time, and manage their installed apps efficiently.

🚀 Features

- 🔍 **Live Search**  
  Instantly filter apps by title (case-insensitive)

- 📦 **Install Apps System**  
  Add apps to installed list with persistent storage

- 🔒 **Disable Install Button**  
  Prevent duplicate installations even after page reload

- 📱 **App Details Page**  
  View detailed information including:
  - App description
  - Ratings & reviews
  - Downloads
  - Size

- 📊 **Rating Visualization**  
  Interactive horizontal bar chart using Recharts

- 💾 **Local Storage Integration**  
  Installed apps are saved and persist after reload

- ⚡ **Dynamic Routing**  
  Seamless navigation using React Router

- 🎨 **Responsive UI**  
  Clean and modern design using Tailwind CSS

- ❌ **No App Found State**  
  Displays message when search results are empty

---

## 🛠️ Technologies Used

- **React** – Component-based UI development
- **React Router** – Routing & data loading
- **Tailwind CSS** – Styling and responsiveness
- **Recharts** – Data visualization
- **JavaScript (ES6+)** – Core logic
- **Local Storage API** – Data persistence

---

## 📂 Project Structure

```

src/
├── components/
│    ├── InstalledAppsCard/
│    ├── RatingChart/
│    └── Utilities/
├── pages/
│    ├── AppDetailsBig/
│    ├── InstalledApps/
│    └── ShowAllApps/
├── assets/
└── main.jsx

```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/ShadowRider7/hero-play-store.git
```

2. Navigate to the project folder:

```bash
cd hero-play-store
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## 🌐 Live Demo

## https://hero-play-store.vercel.app/

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
