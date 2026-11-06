# Avanthika J — Personal Portfolio Website

A complete, modern, premium personal portfolio website for **Avanthika J**, a BTech Computer Science and Engineering student at Amal Jyothi College of Engineering, Kerala, India.

Built with **Vite**, **React**, **JavaScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## ✨ Features & Design Highlights

- **Aesthetic**: Inspired by Apple design and modern developer portfolios — crisp white & soft-gray background (`#FAFCFF` / `#F8FAFC`) with Royal Blue (`#2563EB`) accents.
- **Typography**: Clean, elegant typography pairing **Manrope** (for headings) and **Inter** (for body text).
- **Navigation**: Sticky frosted glass (`backdrop-blur`) navbar with scrollspy active tab indicator, smooth scrolling, and mobile responsive menu.
- **Hero Section**:
  - Badge label: `BTECH CSE STUDENT | ASPIRING DEVELOPER`
  - Heading: `Hi, I'm Avanthika J.`
  - Bio description
  - Profile picture placeholder with abstract tech illustration & floating status badges
  - Interactive buttons: *Explore My Projects*, *Download Resume* (modal with PDF print support), and *Let's Connect*
- **About Me**:
  - Full introduction text
  - Modern academic cards: College (Amal Jyothi College of Engineering), Degree (BTech CSE), Graduation (2026–2030), CGPA (9.1), Location (Kerala, India)
- **Skills**:
  - Visual cards with icons: Programming (C, C++), Web Development (HTML), Tools (GitHub), Design (UI/UX), Soft Skills (Problem Solving, Communication, Leadership)
  - Authentic representation without arbitrary proficiency percentages
- **Featured Project**:
  - Prominent card for **Smart Water Purification System**
  - Sensor-based architecture tags (`ESP Sensors`, `Embedded Systems`, `Water Quality Monitoring`)
  - Interactive monitoring illustration & project overview modal
  - GitHub repository link
- **Experience**:
  - Modern timeline showcasing volunteering activities beyond academics
  - Competency highlights: Communication, Teamwork, Leadership, Collaboration
- **Interests**:
  - Interactive cards for Web Development, Cybersecurity, Artificial Intelligence, and Innovative Technologies
- **Contact**:
  - Heading: *Let's Connect*
  - Placeholders for Email, GitHub, and LinkedIn with one-click copy
  - Fully validated contact form with real-time feedback and success state
- **Footer**:
  - Designed and built by Avanthika J
  - Social media links, dynamic copyright year, and smooth back-to-top button
- **Accessibility & Motion**:
  - Framer Motion scroll reveals
  - Respects `prefers-reduced-motion` settings

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler / Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended; v26.13.0 verified)
- npm or pnpm or yarn

### Installation

1. Navigate to the portfolio project directory:
   ```bash
   cd "c:\Users\Avanthika J\New folder\portfolio"
   ```

2. Dependencies are already installed! If installing in a new environment, run:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)

Start the local Vite development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── index.html              # HTML entry point with Google Fonts & SEO meta tags
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration with royal blue palette
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── assets/             # Static assets & images
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navbar with mobile drawer & scrollspy
│   │   ├── Hero.jsx        # Hero section with avatar, badges & CTA buttons
│   │   ├── ResumeModal.jsx # Interactive resume viewer & printable PDF preview
│   │   ├── About.jsx       # Academic cards & personal introduction
│   │   ├── Skills.jsx      # Categorized skill cards with icons
│   │   ├── Projects.jsx    # Featured Smart Water Purification System project
│   │   ├── Experience.jsx  # Modern volunteering experience timeline
│   │   ├── Interests.jsx   # 4 interactive tech passion cards
│   │   ├── Contact.jsx     # Contact form with validation & social placeholders
│   │   └── Footer.jsx      # Footer with back-to-top & dynamic copyright
│   ├── App.jsx             # Main layout & component integration
│   ├── index.css           # Tailwind directives & custom utilities
│   └── main.jsx            # React root mount
```

---

## 📄 License

MIT © Avanthika J

