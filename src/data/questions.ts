import { Case } from '../types';

import level1Ai from '../../assets/level-1-ai.webp';
import level1Real from '../../assets/level-1-real.webp';
import level2Ai from '../../assets/level-2-ai.webp';
import level2Real from '../../assets/level-2-real.webp';
import level3Ai from '../../assets/level-3-ai.webp';
import level3Real from '../../assets/level-3-real.webp';
import level4Ai from '../../assets/level-4-ai.webp';
import level4Real from '../../assets/level-4-real.webp';
import level5Ai from '../../assets/level-5-ai.webp';
import level5Real from '../../assets/level-5-real.webp';
import level6Ai from '../../assets/level-6-ai.webp';
import level6Real from '../../assets/level-6-real.webp';
import level7Ai from '../../assets/level-7-ai.webp';
import level7Real from '../../assets/level-7-real.webp';
import level8Ai from '../../assets/level-8-ai.webp';
import level8Real from '../../assets/level-8-real.webp';
import level9Ai from '../../assets/level-9-ai.webp';
import level9Real from '../../assets/level-9-real.webp';
import level10Ai from '../../assets/level-10-ai.webp';
import level10Real from '../../assets/level-10-real.webp';

export const CASES_DATA: Case[] = [
  {
    id: 1,
    title: "Tanaman Hias di Pot Hitam",
    category: "Tulisan Tangan & Tekstur Permukaan",
    description: "Foto objek sehari-hari hasil rekayasa AI sering menghilangkan detail penanda autentik seperti tulisan tangan di pot, serta membuat kilap daun dan butiran tanah tampak terlalu seragam. Cari gambar tanaman yang tampak terlalu mulus tanpa jejak penggunaan nyata.",
    imageA: level1Ai,
    imageB: level1Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Tulisan Pot, Tekstur Tanah & Kilap Daun",
    clues: [
      "Periksa dinding pot plastik hitam pada kedua gambar. Apakah ada tulisan cat putih 'kel 8 IX' khas inventaris kelas di Gambar B yang tidak ditemukan pada pot polos Gambar A?",
      "Perhatikan permukaan daun dan pencahayaan di Gambar A. Apakah kilap daunnya tampak terlalu licin dan merata seperti render digital?",
      "Bandingkan tekstur tanah di dalam pot serta nat keramik lantai di Gambar B yang memiliki ketidaksempurnaan alami."
    ],
    explanation: "Gambar A adalah HASIL KA. Pot hitam tampak terlalu mulus sempurna tanpa tulisan penanda, kilap permukaan daun terlalu seragam, dan efek blur latar belakang tampak sintetis. Gambar B adalah FOTO ASLI. Menampilkan tanaman hias Aglaonema dalam pot plastik hitam dengan tulisan cat putih 'kel 8 IX', tekstur tanah yang alami, serta ubin lantai nyata."
  },
  {
    id: 2,
    title: "Etalase Warung & Keranjang Jajanan",
    category: "Teks Kemasan Produk & Properti Warung",
    description: "Generator AI sangat sering gagal merender tulisan merek pada bungkus jajanan di warung sehingga hurufnya berubah menjadi simbol acak (gibberish). Cari foto etalase warung yang teks kemasannya tidak terbaca dan memiliki objek ganjil.",
    imageA: level2Real,
    imageB: level2Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Teks Bungkus Jajanan, Cobek & Capitan",
    clues: [
      "Perbesar bungkus makanan ringan di dalam keranjang hijau pada Gambar B. Apakah huruf pada kemasannya bisa dibaca dengan jelas atau berubah menjadi karakter acak khas AI?",
      "Perhatikan benda di sebelah keranjang hijau pada Gambar B. Apakah wajar ada cobek di atas etalase kaca dengan bentuk yang tampak melebur?",
      "Bandingkan dengan Gambar A. Apakah tulisan merek 'Garuda Pilus' dan 'Brownies Crispy' terbaca jelas, lengkap dengan toples kerupuk dan capitan besi?"
    ],
    explanation: "Gambar B adalah HASIL KA. Tulisan merek pada bungkus jajanan di keranjang hijau mengalami distorsi huruf acak (gibberish) yang tidak terbaca, ditambah kemunculan objek mirip cobek yang tidak wajar di atas etalase. Gambar A adalah FOTO ASLI. Teks kemasan 'Garuda Pilus' dan 'Brownies Crispy' terbaca tajam di atas taplak kotak-kotak hijau bersama toples kerupuk dan capitan."
  },
  {
    id: 3,
    title: "Potret Kartini",
    category: "Potret Sejarah & Kebaya Tradisional",
    description: "AI sering 'menghidupkan ulang' tokoh sejarah dengan kulit terlalu mulus, kebaya terlalu mewah, dan latar yang terlalu dekoratif. Cari potret yang terasa seperti rekonstruksi digital, bukan arsip foto kuno.",
    imageA: level3Ai,
    imageB: level3Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Bordir Kebaya, Konde Rambut & Latar Dinding",
    clues: [
      "Perbesar kulit di Gambar A. Apakah tekstur wajah terlalu halus dan bersih, tanpa grain atau ketidaksempurnaan foto vintage?",
      "Periksa bordir emas di kebaya dan bunga melati di konde rambut Gambar A. Apakah motifnya terlalu simetris atau tampak 'melukis', bukan tekstil sungguhan?",
      "Lihat Gambar B. Apakah foto hitam-putih sepia ini punya grain kamera kuno, kebaya putih sederhana, dan latar polos yang konsisten dengan arsip sejarah?"
    ],
    explanation: "Gambar A adalah HASIL KA. Potret wanita berkebaya ungu dengan bordir emas dan wallpaper bunga terlihat seperti rekonstruksi digital: kulit mulus, latar terlalu dekoratif, dan detail tradisional terlalu 'sempurna'. Gambar B adalah FOTO ASLI. Foto sejarah Kartini hitam-putih menampilkan kebaya putih, konde rambut, kalung, dan grain fotografi kuno yang otentik."
  },
  {
    id: 4,
    title: "Kucing Putih di Dekat Kursi Kayu",
    category: "Tekstur Bulu Hewan & Pencahayaan Dramatis",
    description: "AI sering menghasilkan gambar hewan peliharaan dengan pencahayaan dramatis yang berlebihan, bulu yang tampak berpendar terlalu halus seperti boneka, dan pose kaki yang kurang natural. Cari gambar kucing putih yang tampak seperti ilustrasi sinematik.",
    imageA: level4Real,
    imageB: level4Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Tekstur Bulu, Bantalan Kaki & Sinar Matahari",
    clues: [
      "Perhatikan tekstur bulu dan sorot cahaya matahari pada Gambar B. Apakah bulunya tampak terlalu halus berpendar dengan garis cahaya emas yang dramatis?",
      "Lihat pose kaki depan kucing yang terangkat ke arah kamera di Gambar B. Apakah bantalan kaki merah mudanya tampak seperti lukisan digital?",
      "Bandingkan dengan Gambar A. Apakah terlihat momen alami kucing putih yang sedang menyandarkan dagu di kaki kursi kayu sambil menggigit selang plastik bening?"
    ],
    explanation: "Gambar B adalah HASIL KA. Anak kucing putih tampil dengan pencahayaan keemasan yang terlalu sinematik, tekstur bulu sehalus kapas digital, dan pose mengulurkan kaki depan ke kamera yang tampak dibuat-buat. Gambar A adalah FOTO ASLI. Kucing putih terekam secara candid dari sudut atas sedang menyandarkan kepala di palang kursi kayu sambil bermain menggigit selang plastik bening."
  },
  {
    id: 5,
    title: "Tiang Listrik & Kabel Semrawut",
    category: "Logika Konstruksi Kabel & Utilitas Kota",
    description: "Saat menggambar infrastruktur seperti tiang listrik, AI sering membuat jalur kabel yang terputus di udara, isolator yang tidak terhubung secara logis, serta kotak panel yang terlalu bersih. Cari tiang listrik yang sambungan kabel dan komponennya tidak masuk akal.",
    imageA: level5Ai,
    imageB: level5Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Sambungan Kabel, Isolator & Kotak Panel",
    clues: [
      "Perbesar bagian puncak tiang dan gulungan kabel di Gambar A. Apakah jalur kabelnya tersambung secara logis atau ada ujung kabel dan isolator yang menyatu secara aneh?",
      "Periksa dua kotak panel berdampingan (hitam dan putih) serta lampu jalan di Gambar A. Apakah penataannya lazim ditemukan pada tiang beton biasa?",
      "Bandingkan dengan Gambar B. Apakah tampak kotak panel besi tua berkarat dengan tiga bulatan oranye dan lilitan ijuk hitam penghalang panjat yang nyata?"
    ],
    explanation: "Gambar A adalah HASIL KA. Konstruksi tiang listrik tidak logis: terdapat dua kotak panel bersih yang berdampingan secara janggal, lampu jalan yang menempel aneh, serta untaian kabel dan isolator yang tidak mengikuti fungsi kelistrikan nyata. Gambar B adalah FOTO ASLI. Menampilkan tiang listrik beton sungguhan dengan kotak panel berkarat, lilitan ijuk hitam, dan kabel semrawut berlatar langit mendung."
  },
  {
    id: 6,
    title: "Membakar Sate Ayam di Atas Arang",
    category: "Anatomi Jari Tangan & Efek Bara Api",
    description: "Gambar aktivitas kuliner malam hari buatan AI sering menampilkan efek bokeh dan bara api yang terlalu sinematik, namun gagal merender anatomi jari tangan pedagang yang sedang memegang kipas. Cari foto bakaran sate yang jari tangannya terdistorsi.",
    imageA: level6Real,
    imageB: level6Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Jari Tangan Pedagang, Kipas Bambu & Barisan Sate",
    clues: [
      "Perbesar tangan pedagang yang memegang kipas bambu di sisi kiri Gambar B. Apakah jumlah dan bentuk jari-jarinya normal, atau tampak menyatu dan terdistorsi?",
      "Perhatikan susunan tusuk sate dan nyala bara api di Gambar B. Apakah sate berjajar terlalu rapi dalam satu baris dengan efek bokeh lampu jalan yang berlebihan?",
      "Bandingkan dengan Gambar A. Apakah tampak panggangan besi panjang di tepi jalan dengan tusuk sate yang menyebar alami dan kepulan asap bakaran nyata?"
    ],
    explanation: "Gambar B adalah HASIL KA. Jari-jari tangan pedagang yang menggenggam kipas anyaman bambu tampak meleleh dan menyatu secara tidak wajar, disertai pencahayaan bara api dan bokeh malam yang terlalu sinematik. Gambar A adalah FOTO ASLI. Diambil dari sudut atas, menampilkan tusukan sate ayam yang sedang dibakar di atas pemanggang arang besi di pinggir jalan dengan asap dan tekstur daging yang autentik."
  },
  {
    id: 7,
    title: "Prasmanan Lauk & Sate Angkringan",
    category: "Tata Letak Makanan & Anatomi Tangan",
    description: "AI sering menyusun hidangan warung makan dalam nampan-nampan yang terlalu simetris dan berkilau seragam, serta merusak detail tangan pedagang di latar belakang. Cari etalase lauk prasmanan yang tampak seperti lukisan iklan digital.",
    imageA: level7Ai,
    imageB: level7Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Tangan Pemegang Kipas, Nampan Daun Pisang & Kilap Lauk",
    clues: [
      "Periksa tangan pedagang yang memegang kipas bambu di dekat kepulan asap Gambar A. Apakah jari-jarinya proporsional atau tampak kaku dan menyatu dengan anyaman kipas?",
      "Lihat deretan nampan lauk di Gambar A. Apakah semua nampan beralas daun pisang tampak terlalu rapi, seragam, dan berkilap seperti dilapisi pernis?",
      "Bandingkan dengan Gambar B. Apakah terlihat suasana warung sungguhan dengan nampan plastik merah, capitan besi, rak hijau berisi lalapan, serta susunan sate usus dan sosis yang alami?"
    ],
    explanation: "Gambar A adalah HASIL KA. Seluruh nampan stainless beralas daun pisang tertata terlalu simetris dengan kilau makanan yang artifisial, serta jari tangan pedagang yang memegang kipas di belakang bara api mengalami distorsi anatomi. Gambar B adalah FOTO ASLI. Menampilkan prasmanan warung makan nyata lengkap dengan nampan plastik merah, capitan, rak lalapan hijau, tahu kuning, ayam ungkep, ikan, serta sate usus dan sosis."
  },
  {
    id: 8,
    title: "Memasak Telur Dadar di Wajan",
    category: "Fisika Memasak & Tekstur Makanan",
    description: "Foto proses memasak hasil rekayasa AI sering menampilkan kobaran api kompor yang terlalu dramatis serta tekstur makanan yang berpori seragam seperti spons. Cari foto menggoreng telur dadar yang tampak tidak wajar secara fisik.",
    imageA: level8Real,
    imageB: level8Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Pori-Pori Telur, Kobaran Api & Sudut Spatula",
    clues: [
      "Perhatikan tekstur permukaan telur dadar yang sedang dibalik di Gambar B. Apakah pori-porinya tampak terlalu seragam menyerupai busa atau spons sintetis?",
      "Lihat kobaran api oranye dan biru di bawah wajan Gambar B. Apakah nyala api sebesar itu wajar untuk menggoreng telur di dapur rumah?",
      "Bandingkan dengan Gambar A. Apakah tepian telur yang garing berenda, gelembung minyak goreng, dan tungku kompor gas terlihat seperti proses memasak sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Telur dadar memiliki tekstur berlubang-lubang seragam seperti spons dengan posisi spatula kayu yang janggal, serta kobaran api kompor yang terlalu besar dan sinematik. Gambar A adalah FOTO ASLI. Menampilkan telur dadar yang sedang digoreng di dalam wajan cekung dengan pinggiran krispi alami, gelembung minyak panas, dan spatula kayu."
  },
  {
    id: 9,
    title: "Teras Rumah & Pagar Besi Abu-Abu",
    category: "Konsistensi Objek & Pencahayaan Eksterior",
    description: "Transformasi gambar berbasis AI (image-to-image) sering memodifikasi foto asli menjadi tampak lebih mewah dan estetis, tetapi meninggalkan kejanggalan pada benda fungsional seperti selang air dan lampu yang menyala di siang terik.",
    imageA: level9Ai,
    imageB: level9Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Gulungan Selang Biru, Lampu Gantung & Kabel Jalan",
    clues: [
      "Perbesar selang air warna biru di bagian bawah pilar putih pada Gambar A. Apakah gulungan selangnya terhubung ke keran secara logis atau hanya melingkar kaku menempel di dinding?",
      "Perhatikan lampu gantung di plafon teras dan lampu dinding di Gambar A. Mengapa semua lampu berpendar kuning hangat padahal matahari siang sedang bersinar terik?",
      "Bandingkan dengan Gambar B. Apakah selang biru menjuntai alami di lantai keramik dari keran kecil, dengan latar warung tetangga yang nyata di seberang jalan?"
    ],
    explanation: "Gambar A adalah HASIL KA. Merupakan hasil olahan AI yang menambahkan pintu kayu, tanaman hias, dan bayangan dramatis, namun membuat selang biru melingkar kaku tanpa ujung keran yang jelas serta lampu teras menyala di siang bolong. Gambar B adalah FOTO ASLI. Menampilkan teras rumah nyata dengan selang air biru yang tergeletak alami di lantai, pagar lipat besi abu-abu, dan pemandangan jalan lingkungan warga."
  },
  {
    id: 10,
    title: "Bingkai Foto & Lukisan di Meja Kerja",
    category: "Duplikasi Visual & Tata Ruang Studio",
    description: "Saat diminta membuat suasana ruang kerja pengrajin bingkai atau studio lukis, AI cenderung menciptakan ruangan bergaya Eropa yang terlalu rapi dan sering menduplikasi gambar lukisan yang sama di beberapa tempat.",
    imageA: level10Real,
    imageB: level10Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Lukisan Kembar, Peralatan Lukis & Cahaya Jendela",
    clues: [
      "Bandingkan lukisan pemandangan danau berbingkai emas di atas meja Gambar B dengan lukisan besar yang tergantung di dinding belakang. Mengapa kedua lukisan tersebut memiliki komposisi gambar yang hampir kembar identik?",
      "Perhatikan penataan kuas, botol cat, dan lampu meja yang menyala di siang hari pada Gambar B. Apakah suasananya terasa terlalu mulus dan ideal seperti ilustrasi katalog?",
      "Lihat Gambar A. Apakah tumpukan bingkai kosong berbagai ukuran, pantulan kaca, dan gelas kopi di atas meja menunjukkan suasana bengkel pigura sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Studio lukis tampak terlalu ideal dengan pencahayaan sempurna, serta terdapat anomali duplikasi khas AI di mana lukisan pemandangan danau di atas meja tampak kembar dengan lukisan yang tergantung di dinding. Gambar A adalah FOTO ASLI. Menampilkan tumpukan berbagai bingkai foto dan kaca di bengkel pigura nyata, lengkap dengan cangkir bertutup di atas meja dan pekerja di sisi kanan."
  }
];
