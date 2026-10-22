/**
 * Detektif Digital Challenge - Kunci Jawaban Lengkap (Case 1 - 10)
 * Membedakan Foto Asli vs Gambar Rekayasa AI (Kecerdasan Artifisial)
 * 
 * 🌐 Live URL Demo: https://glenrioariesto.github.io/detektif-digital-challenge/
 * 📂 Repository: https://github.com/glenrioariesto/detektif-digital-challenge
 */

export interface DigitalDetectiveAnswer {
  caseId: number;
  title: string;
  category: string;
  liveUrl: string;
  realImage: 'A' | 'B';
  aiImage: 'A' | 'B';
  locationOfArtifacts: string;
  explanation: string;
}

export const digitalDetectiveAnswers: DigitalDetectiveAnswer[] = [
  {
    caseId: 1,
    title: 'Tanaman Hias di Pot Hitam',
    category: 'Tulisan Tangan & Tekstur Permukaan',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Tulisan Pot, Tekstur Tanah & Kilap Daun',
    explanation: 'Gambar A adalah HASIL KA. Pot hitam tampak terlalu mulus sempurna tanpa tulisan penanda, kilap permukaan daun terlalu seragam, dan efek blur latar belakang tampak sintetis. Gambar B adalah FOTO ASLI tanaman hias Aglaonema dalam pot plastik hitam dengan tulisan cat putih "kel 8 IX".'
  },
  {
    caseId: 2,
    title: 'Etalase Warung & Keranjang Jajanan',
    category: 'Teks Kemasan Produk & Properti Warung',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Teks Bungkus Jajanan, Cobek & Capitan',
    explanation: 'Gambar B adalah HASIL KA. Tulisan merek pada bungkus jajanan di keranjang hijau mengalami distorsi huruf acak (gibberish) yang tidak terbaca, ditambah kemunculan objek mirip cobek yang tidak wajar di atas etalase. Gambar A adalah FOTO ASLI dengan teks kemasan "Garuda Pilus" dan "Brownies Crispy" yang terbaca jelas.'
  },
  {
    caseId: 3,
    title: 'Potret Kartini',
    category: 'Potret Sejarah & Kebaya Tradisional',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Bordir Kebaya, Konde Rambut & Latar Dinding',
    explanation: 'Gambar A adalah HASIL KA. Potret wanita berkebaya ungu dengan bordir emas dan wallpaper bunga terlihat seperti rekonstruksi digital: kulit mulus, latar terlalu dekoratif, dan detail tradisional terlalu "sempurna". Gambar B adalah FOTO ASLI arsip sejarah.'
  },
  {
    caseId: 4,
    title: 'Kucing Putih di Dekat Kursi Kayu',
    category: 'Tekstur Bulu Hewan & Pencahayaan Dramatis',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Tekstur Bulu, Bantalan Kaki & Sinar Matahari',
    explanation: 'Gambar B adalah HASIL KA. Anak kucing putih tampil dengan pencahayaan keemasan yang terlalu sinematik, tekstur bulu sehalus kapas digital, dan pose mengulurkan kaki depan ke kamera yang tampak dibuat-buat. Gambar A adalah FOTO ASLI kucing putih yang menyandarkan dagu di kaki kursi kayu sambil menggigit selang plastik bening.'
  },
  {
    caseId: 5,
    title: 'Tiang Listrik & Kabel Semrawut',
    category: 'Logika Konstruksi Kabel & Utilitas Kota',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Sambungan Kabel, Isolator & Kotak Panel',
    explanation: 'Gambar A adalah HASIL KA. Konstruksi tiang listrik tidak logis: terdapat dua kotak panel bersih yang berdampingan secara janggal, lampu jalan yang menempel aneh, serta untaian kabel dan isolator yang tidak mengikuti fungsi kelistrikan nyata. Gambar B adalah FOTO ASLI tiang listrik beton dengan kotak panel berkarat dan lilitan ijuk hitam.'
  },
  {
    caseId: 6,
    title: 'Membakar Sate Ayam di Atas Arang',
    category: 'Anatomi Jari Tangan & Efek Bara Api',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Jari Tangan Pedagang, Kipas Bambu & Barisan Sate',
    explanation: 'Gambar B adalah HASIL KA. Jari-jari tangan pedagang yang menggenggam kipas anyaman bambu tampak meleleh dan menyatu secara tidak wajar, disertai pencahayaan bara api dan bokeh malam yang terlalu sinematik. Gambar A adalah FOTO ASLI sate ayam yang sedang dibakar di atas pemanggang arang besi.'
  },
  {
    caseId: 7,
    title: 'Prasmanan Lauk & Sate Angkringan',
    category: 'Tata Letak Makanan & Anatomi Tangan',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Tangan Pemegang Kipas, Nampan Daun Pisang & Kilap Lauk',
    explanation: 'Gambar A adalah HASIL KA. Seluruh nampan stainless beralas daun pisang tertata terlalu simetris dengan kilau makanan yang artifisial, serta jari tangan pedagang yang memegang kipas di belakang bara api mengalami distorsi anatomi. Gambar B adalah FOTO ASLI prasmanan warung makan nyata dengan nampan plastik merah dan capitan.'
  },
  {
    caseId: 8,
    title: 'Memasak Telur Dadar di Wajan',
    category: 'Fisika Memasak & Tekstur Makanan',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Pori-Pori Telur, Kobaran Api & Sudut Spatula',
    explanation: 'Gambar B adalah HASIL KA. Telur dadar memiliki tekstur berlubang-lubang seragam seperti spons dengan posisi spatula kayu yang janggal, serta kobaran api kompor yang terlalu besar dan sinematik. Gambar A adalah FOTO ASLI telur dadar yang sedang digoreng di dalam wajan dengan pinggiran krispi alami.'
  },
  {
    caseId: 9,
    title: 'Teras Rumah & Pagar Besi Abu-Abu',
    category: 'Konsistensi Objek & Pencahayaan Eksterior',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Gulungan Selang Biru, Lampu Gantung & Kabel Jalan',
    explanation: 'Gambar A adalah HASIL KA. Merupakan hasil olahan AI yang membuat selang biru melingkar kaku tanpa ujung keran yang jelas serta lampu teras menyala di siang bolong. Gambar B adalah FOTO ASLI teras rumah nyata dengan selang air biru yang tergeletak alami di lantai.'
  },
  {
    caseId: 10,
    title: 'Bingkai Foto & Lukisan di Meja Kerja',
    category: 'Duplikasi Visual & Tata Ruang Studio',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Lukisan Kembar, Peralatan Lukis & Cahaya Jendela',
    explanation: 'Gambar B adalah HASIL KA. Studio lukis tampak terlalu ideal dengan pencahayaan sempurna, serta terdapat anomali duplikasi khas AI di mana lukisan pemandangan danau di atas meja tampak kembar dengan lukisan yang tergantung di dinding. Gambar A adalah FOTO ASLI tumpukan bingkai di bengkel pigura nyata.'
  }
];

export const projectMeta = {
  title: 'Detektif Digital Challenge',
  url: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
  github: 'https://github.com/glenrioariesto/detektif-digital-challenge'
};
