# Detektif Digital: Foto Manusia atau Hasil KA?

**Detektif Digital** adalah game simulasi interaktif edukatif yang menantang pemain untuk membedakan antara foto asli jepretan kamera manusia dan citra hasil rekayasa Kecerdasan Artifisial (KA / AI). Game ini dirancang menggunakan teknologi web modern untuk memberikan pengalaman penyelidikan digital yang imersif.

## 🚀 Fitur Utama

1. **10 Kasus Investigasi**: Menampilkan 10 pasang gambar dari berbagai kategori (potret wajah, detail jari tangan, hewan, pemandangan kota, kacamata reflektif, dll.).
2. **Kaca Pembesar Interaktif**: Arahkan kursor atau sentuh gambar untuk menggunakan kaca pembesar dengan zoom 2.5x guna memindai distorsi piksel halus secara detail.
3. **Petunjuk Detektif**: Panduan khusus di setiap kasus untuk membantu mendeteksi area kelemahan AI yang paling sering terjadi (seperti gigi yang bertumpuk, jari tidak wajar, tulisan acak, atau refleksi yang tidak konsisten).
4. **Analisis Edukatif**: Penjelasan mendalam dalam Bahasa Indonesia setelah setiap jawaban dikirimkan, menjelaskan secara ilmiah kegagalan struktural AI pada gambar tersebut.
5. **Evaluasi Akurasi & Pangkat**: Penilaian skor akhir beserta pemberian pangkat kepangkatan detektif (mulai dari Detektif Amatir hingga Detektif Legendaris) dan lembar review ringkasan kasus.
6. **Desain Cyberpunk Modern**: Antarmuka gelap bertema agensi detektif digital futuristik dengan efek pendaran neon, kisi siber bergerak, dan audio synthesizer internal berbasis Web Audio API.

## 🛠️ Tech Stack

- **Framework**: React 19 (TypeScript)
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4
- **Ikon**: Lucide React
- **Audio**: Web Audio API Synthesizer (Tanpa file eksternal)

## 📁 Struktur Proyek

```text
detektif-digital-challenge/
├── src/
│   ├── components/
│   │   ├── MagnifiedImage.tsx   # Menampilkan gambar dengan lensa pembesar
│   │   └── PortraitWarning.tsx  # Peringatan orientasi layar lanskap
│   ├── data/
│   │   └── questions.ts         # Data 10 kasus (deskripsi, gambar, kunci, penjelasan)
│   ├── hooks/
│   │   └── useGameState.ts      # Pengelolaan status game, skor, dan logika kasus
│   ├── pages/
│   │   ├── splash/
│   │   │   └── SplashPage.tsx   # Halaman beranda misi dossier
│   │   ├── arena/
│   │   │   └── ArenaPage.tsx    # Arena permainan utama dan analisis bukti
│   │   └── result/
│   │       └── ResultPage.tsx   # Halaman hasil akurasi & ringkasan laporan
│   ├── utils/
│   │   └── audio.ts             # Efek suara retro digital
│   ├── App.tsx                  # Root switcher halaman
│   ├── index.css                # Desain sistem dan tema neon cyberpunk
│   ├── main.tsx                 # Mounting React root
│   └── types.ts                 # Definisi tipe data TypeScript
├── index.html                   # HTML Entry Point
├── package.json                 # Pengaturan dependensi & script
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Konfigurasi bundler Vite
└── README.md                    # Dokumentasi proyek
```

## ⚙️ Cara Menjalankan Project

### Prerequisites
Pastikan Anda memiliki **Node.js** terinstal di komputer Anda.

### 1. Masuk ke Direktori Project
```bash
cd detektif-digital-challenge
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Dev Lokal
```bash
npm run dev
```
Setelah dijalankan, buka alamat server yang tertera di terminal (biasanya `http://localhost:3000`) pada peramban web Anda.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `dist/` untuk dihosting ke server web pilihan Anda.
