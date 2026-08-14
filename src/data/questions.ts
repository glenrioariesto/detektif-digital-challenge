import { Case } from '../types';

import level1Ai from '../../assets/level-1-ai.webp';
import level1Real from '../../assets/level-1-real.jpeg';
import level2Ai from '../../assets/level-2-ai.jpeg';
import level2Real from '../../assets/level-2-real.jpeg';
import level3Ai from '../../assets/level-3-ai.webp';
import level3Real from '../../assets/level-3-real.jpeg';
import level4Ai from '../../assets/level-4-ai.jpeg';
import level4Real from '../../assets/level-4-real.jpeg';
import level5Ai from '../../assets/level-5-ai.jpeg';
import level5Real from '../../assets/level-5-real.jpeg';
import level6Ai from '../../assets/level-6-ai.jpeg';
import level6Real from '../../assets/level-6-real.jpeg';
import level7Ai from '../../assets/level-7-ai.jpeg';
import level7Real from '../../assets/level-7-real.jpeg';
import level8Ai from '../../assets/level-8-ai.webp';
import level8Real from '../../assets/level-8-real.jpeg';
import level9Ai from '../../assets/level-9-ai.jpeg';
import level9Real from '../../assets/level-9-real.jpeg';
import level10Ai from '../../assets/level-10-ai.jpeg';
import level10Real from '../../assets/level-10-real.jpeg';

export const CASES_DATA: Case[] = [
  {
    id: 1,
    title: "Kucing Oren",
    category: "Anatomi Hewan & Objek Dipegang",
    description: "Generator AI sering membuat hewan melakukan pose manusia yang tidak masuk akal. Cari gambar kucing yang memegang kamera atau minuman dengan cara yang tidak alami bagi anatomi kaki kucing.",
    imageA: level1Ai,
    imageB: level1Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Kaki Depan, Cangkir & Pose Selfie",
    clues: [
      "Periksa kaki depan di Gambar A. Apakah kucing benar-benar bisa memegang cangkir dan kamera seperti tangan manusia?",
      "Lihat es dan sedotan di minuman hijau Gambar A. Apakah bentuknya konsisten atau ada bagian yang meleleh/aneh?",
      "Bandingkan dengan Gambar B. Apakah pose berdiri di ubin masih masuk akal untuk seekor kucing sungguhan?"
    ],
    explanation: "Gambar A adalah HASIL KA. Kucing oren berpose selfie sambil memegang matcha iced drink — anatomi kaki depan dipaksa meniru tangan manusia, sesuatu yang tidak terjadi pada foto nyata. Gambar B adalah FOTO ASLI. Kucing berdiri di ubin dengan kaki, ekor, dan proporsi tubuh yang natural."
  },
  {
    id: 2,
    title: "Roti Artisan vs Secangkir Kopi",
    category: "Tekstur Makanan & Still Life",
    description: "Foto makanan AI sering terlihat seperti iklan: remah, tepung, dan biji-bijian ditata terlalu artistik. Cari still life yang terasa 'didirikan', bukan jepretan sederhana di atas meja.",
    imageA: level2Real,
    imageB: level2Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Biji Gandum, Tepung & Kulit Roti",
    clues: [
      "Periksa biji dan batang gandum di Gambar B. Apakah bentuknya berulang atau terlalu identik satu sama lain?",
      "Lihat tepung yang bertebaran di meja kayu Gambar B. Apakah polanya tampak ditabur secara acak alami atau seperti filter dekoratif?",
      "Bandingkan dengan busa kopi di Gambar A. Apakah gelembung crema-nya tidak merata, seperti minuman sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Tiga roti, batang gandum, dan taburan tepung ditata terlalu sempurna untuk foto dapur biasa; biji bunga matahari dan retakan kulit roti cenderung berpola. Gambar A adalah FOTO ASLI. Cangkir kopi dari atas menampilkan crema yang tidak merata, tepi cangkir sederhana, dan kayu meja yang buram secara optik kamera."
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
    title: "Kota Senja di Chicago",
    category: "Arsitektur, Kendaraan & Teks",
    description: "AI sering gagal pada teks papan, bentuk kendaraan, dan pantulan basah di aspal. Cari pemandangan kota yang detailnya mulai 'aneh' saat diperbesar, bukan skyline yang geometrinya konsisten.",
    imageA: level4Real,
    imageB: level4Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Marquee Bus, Aspal Basah & Jendela Gedung",
    clues: [
      "Perbesar tulisan di bus atau papan nama Gambar B. Apakah hurufnya terbaca lurus atau mulai berubah jadi karakter aneh?",
      "Lihat pantulan lampu di aspal basah Gambar B. Apakah garis pantulannya logis mengikuti lajur jalan, atau pecah tidak beraturan?",
      "Bandingkan jendela dan spire gedung di Gambar A. Apakah tepi bangunan tetap lurus meski diambil dari ketinggian?"
    ],
    explanation: "Gambar B adalah HASIL KA. Koridor jalan malam itu estetik, tetapi teks marquee, tepi kendaraan, dan pantulan basah sering pecah atau tidak konsisten secara struktural. Gambar A adalah FOTO ASLI. Skyline udara menampilkan massa bangunan, danau, dan cahaya matahari sore yang arahnya seragam di seluruh fasad."
  },
  {
    id: 5,
    title: "Kelompok di Tepi Air",
    category: "Anatomi Kelompok & Siluet",
    description: "AI kesulitan menggambar banyak orang sekaligus: jari menyatu, lengan memanjang, dan tubuh yang meleleh satu sama lain. Cari kelompok yang anatomi sentuhannya tidak masuk akal.",
    imageA: level5Ai,
    imageB: level5Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Jari, Lengan Anak & Siluet Menyatu",
    clues: [
      "Hitung jari dan bentuk tangan orang di ujung kiri Gambar A. Apakah jumlah dan sendinya normal?",
      "Periksa anak kecil yang digendong di Gambar A. Apakah lengan atau kakinya tampak terlalu kurus dan memanjang?",
      "Bandingkan cara lengan bertumpu di bahu teman-teman pada Gambar B. Apakah setiap tangan masih terpisah jelas dari baju orang di sebelahnya?"
    ],
    explanation: "Gambar A adalah HASIL KA. Siluet pantai senja itu dramatis, tetapi tangan, lengan anak, dan tepi tubuh sering menyatu atau terdistorsi. Cahaya tepi (rim light) juga terlalu seragam di setiap orang. Gambar B adalah FOTO ASLI. Delapan orang duduk di tembok dengan pakaian, tas, dan kabel gondola yang tetap terbaca sebagai objek nyata."
  },
  {
    id: 6,
    title: "Buku di Meja Baca",
    category: "Teks Cetak & Punggung Buku",
    description: "Foto asli menangkap huruf tercetak yang bisa dieja. AI sering membuat punggung buku atau halaman yang menyerupai teks, tetapi karakternya tidak konsisten. Cari tumpukan yang tulisannya goyah.",
    imageA: level6Real,
    imageB: level6Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Huruf di Punggung Buku & Tepi Jilid",
    clues: [
      "Perbesar punggung buku di Gambar B. Apakah judul dan nama penulis tetap terbaca huruf demi huruf, atau ada karakter yang meleleh?",
      "Lihat ketebalan dan tepi kertas tumpukan Gambar B. Apakah halaman tampak seperti blok padat, bukan lembaran tipis?",
      "Bandingkan halaman terbuka di Gambar A. Apakah judul bab dan isi paragrafnya merupakan kalimat sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Tumpukan buku bisnis tampak rapi seperti pajangan toko, tetapi huruf di punggung, logo, dan tepi jilid sering kehilangan ketajaman huruf sungguhan. Gambar A adalah FOTO ASLI. Halaman kiri-kanan menampilkan teks cetak yang bisa dibaca, bayangan kisi jendela, dan jahitan jeans yang natural."
  },
  {
    id: 7,
    title: "Objek di Atas Meja",
    category: "Fisika Objek & Detail Merek",
    description: "Satu gambar adalah foto produk dengan logo yang jelas, yang lain adalah tumpukan buku bertema pohon natal. Cari komposisi yang lampu, pita, dan judul bukunya tidak taat fisika.",
    imageA: level7Ai,
    imageB: level7Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Lampu Peri, Pita Goni & Huruf Spine",
    clues: [
      "Ikuti kabel lampu peri di Gambar A. Apakah ia melilit tumpukan secara logis, atau menembus/menghilang di sela buku?",
      "Perbesar judul di punggung buku Gambar A. Apakah ejaan dan spasi hurufnya konsisten, atau ada kata yang berubah jadi guratan?",
      "Lihat logo di lensa kacamata Gambar B. Apakah mereknya tercetak tajam, dan engsel bingkai masih berupa benda mekanis yang masuk akal?"
    ],
    explanation: "Gambar A adalah HASIL KA. Tumpukan buku berbentuk pohon natal terlalu 'ditata magis': pita goni, lampu peri, dan lantern kawat sering tidak menyambung secara fisik, sementara teks spine goyah. Gambar B adalah FOTO ASLI. Kacamata hitam produk menampilkan logo lensa, highlight plastik, dan bayangan studio yang konsisten."
  },
  {
    id: 8,
    title: "Semangkuk Bakso Aci",
    category: "Tekstur Makanan & Properti Dapur",
    description: "Foto makanan AI sering menata bakso, kerupuk, dan alat dapur terlalu artistik. Cari semangkuk yang kerupuk, kuah, atau properti di sekitarnya tampak tidak konsisten secara fisik.",
    imageA: level8Real,
    imageB: level8Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Lubang Kerupuk, Kuah Merah & Properti Meja",
    clues: [
      "Perbesar kerupuk tegak di Gambar B. Apakah lubang-lubangnya berbentuk aneh atau tidak natural, seolah 'direka' AI?",
      "Lihat bakso, pilus kuning, dan kuah merah di Gambar B. Apakah permukaannya terlalu mengkilap seragam, seperti dilapisi plastik?",
      "Bandingkan mangkuk, cangkir hitam, botol minyak, dan sendok di Gambar A. Apakah bayangan dan jarak antar benda masih logis untuk foto dapur sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Semangkuk bakso aci dengan kerupuk, pilus, pangsit goreng, dan jeruk nipis tampak seperti iklan makanan, tetapi lubang kerupuk, kilau kuah, dan penataan properti di sekitarnya sering tidak konsisten secara fisik. Gambar A adalah FOTO ASLI. Foto bakso aci yang sama menampilkan tekstur bakso, kuah pedas, cangkir keramik, dan bayangan alami yang masuk akal."
  },
  {
    id: 9,
    title: "Lembah Pegunungan",
    category: "Refleksi Air & Detail Pohon",
    description: "Pemandangan AI sering membuat langit, kabut, dan pantulan air terlalu pelukis. Cari lembah yang riak air atau tepi pohonnya terasa seperti sapuan kuas, bukan optik kamera.",
    imageA: level9Ai,
    imageB: level9Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Pantulan Sungai, Kabut & Tepi Pohon",
    clues: [
      "Bandingkan pantulan tebing di sungai Gambar A dengan bentuk gunung di atasnya. Apakah pantulannya terlalu rapi atau justru putus aneh?",
      "Perbesar deretan pohon gelap di tengah Gambar A. Apakah puncak pohonnya berulang seperti stempel, bukan tajuk yang acak?",
      "Lihat pepohonan dan salju di Gambar B. Apakah setiap puncak dan lereng masih punya keragaman batuan yang tidak simetris?"
    ],
    explanation: "Gambar A adalah HASIL KA. Lembah senja itu memukau, tetapi kabut oranye, pantulan sungai, dan garis pohon terlalu halus seperti lukisan. Gambar B adalah FOTO ASLI. Lembah siang menampilkan pohon cemara, dasar lembah berbatu, dan puncak bersalju dengan awan yang tidak 'dilukis' merata."
  },
  {
    id: 10,
    title: "Potret Pria di Luar Ruangan",
    category: "Kulit, Gigi & Bokeh Cahaya",
    description: "Potret AI suka memakai golden hour, senyum lebar, dan bokeh bundar yang terlalu teratur. Cari wajah yang gigi, pori, atau latarnya terasa seperti poster, bukan foto studio biasa.",
    imageA: level10Real,
    imageB: level10Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Gigi, Halo Rambut & Bokeh Latar",
    clues: [
      "Periksa gigi dan tepi bibir di Gambar B. Apakah gigi terlalu putih seragam, dan gusi menyatu aneh dengan bibir?",
      "Lihat cahaya di rambut Gambar B. Apakah ada halo keemasan yang terlalu rapi mengelilingi kepala?",
      "Bandingkan kacamata, jenggot, dan kemeja di Gambar A. Apakah pantulan lensa dan helai jenggot masih punya detail acak yang natural?"
    ],
    explanation: "Gambar B adalah HASIL KA. Pemuda tersenyum di padang rumput golden hour tampak seperti stok foto: kulit terlalu halus, gigi terlalu rapi, dan bokeh cahaya berbentuk orbs yang berulang. Gambar A adalah FOTO ASLI. Headshot pria berkacamata di latar putih menampilkan jenggot, kemeja, dan pantulan lensa yang tidak 'dilukis ulang'."
  }
];
