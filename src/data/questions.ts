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
    title: "Kios Sayur di Pasar Tradisional",
    category: "Teks Label & Pencahayaan Pasar",
    description: "Generator AI sering gagal membuat teks tulisan pada papan harga atau label kios di pasar, serta pencahayaan lampu gantung yang tidak konsisten secara fisik. Cari kios pasar yang teks labelnya tidak terbaca dan bentuk objeknya aneh.",
    imageA: level2Real,
    imageB: level2Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Teks Papan Harga, Bohlam Lampu & Detail Sayuran",
    clues: [
      "Perbesar tulisan pada papan nama dan label harga di Gambar B. Apakah huruf-hurufnya bisa dibaca sebagai kata bermakna atau hanya coretan acak khas AI?",
      "Perhatikan filamen dan kabel lampu gantung di Gambar B. Apakah konstruksi lampu dan pantulan cahayanya mengikuti hukum fisika yang masuk akal?",
      "Bandingkan dengan Gambar A. Apakah tomat, cabai hijau, dan sayuran tertata secara alami dengan lampu spiral penerangan pasar malam sungguhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Tulisan pada papan harga dan label di Gambar B berupa huruf aneh/gibberish yang tidak bermakna, serta lampu filamen gantung tampak artifisial. Gambar A adalah FOTO ASLI. Menampilkan kios pedagang pasar tradisional dengan aneka sayuran segar (tomat, cabai, sawi) dan lampu penerangan pasar yang nyata."
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
    title: "Pemandangan Sawah Pedesaan",
    category: "Lanskap Alam & Arsitektur Desa",
    description: "Pemandangan pedesaan buatan AI sering memadukan elemen arsitektur megah yang tidak proporsional dengan tekstur sawah yang terlalu mulus atau seragam seperti lukisan fantasi. Cari lanskap yang detail geometris dan vegetasinya terasa artifisial.",
    imageA: level4Real,
    imageB: level4Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Kubah Masjid, Jalur Aspal Meliuk & Tekstur Bulir Padi",
    clues: [
      "Perhatikan kubah masjid dan menara di Gambar B. Apakah gaya arsitektur dan proporsinya tampak seperti bangunan nyata atau lukisan fantasi yang ditempelkan?",
      "Lihat permukaan jalan aspal di Gambar B. Apakah kelokan jalan dan garis putihnya tampak sangat mulus tanpa cacat tekstur jalanan desa pada umumnya?",
      "Bandingkan dengan Gambar A. Apakah ada aktivitas kehidupan nyata seperti pesepeda ontel, mobil pikap, pohon kelapa, dan kabut pagi di lereng gunung?"
    ],
    explanation: "Gambar B adalah HASIL KA. Kubah masjid besar di tengah sawah tampak seperti ilustrasi fantasi: jalan aspal meliuk terlalu licin sempurna tanpa marka realistis, dan bulir padi di latar depan terlalu seragam. Gambar A adalah FOTO ASLI. Pemandangan pedesaan Indonesia nyata menampilkan pesepeda, mobil bak terbuka, deretan pohon kelapa, dan rumah warga dengan pencahayaan matahari pagi alami."
  },
  {
    id: 5,
    title: "Kepulauan Karst Raja Ampat",
    category: "Geografi Pesisir & Terumbu Karang",
    description: "AI sering menghasilkan pemandangan pulau karst tropis yang pulau-pulaunya berbentuk bulat simetris tidak alami, bentuk tebing yang meleleh, dan kapal laut yang tidak proporsional. Cari lanskap laut yang pulau dan terumbu karangnya tampak janggal.",
    imageA: level5Ai,
    imageB: level5Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Bentuk Pulau Karst, Kapal Melayang & Terumbu Karang",
    clues: [
      "Perbesar kapal-kapal putih kecil yang berada di perairan Gambar A. Apakah bentuk kapalnya proporsional atau tampak mencair dan tidak memiliki detail lambung kapal yang jelas?",
      "Perhatikan pulau kecil di bagian tengah bawah Gambar A. Apakah tebing batu dan puncak pohonnya tampak terlalu membulat atau berulang secara tidak wajar?",
      "Lihat perairan di Gambar B. Apakah gradasi terumbu karang dangkal dan tebing karst memiliki tekstur batuan kapur alami yang acak dan organik?"
    ],
    explanation: "Gambar A adalah HASIL KA. Gugusan pulau karst terlihat seperti miniatur digital: bentuk pulau-pulau bulat seragam, kapal-kapal putih berukuran aneh tanpa detail perahu asli, dan pola terumbu karang di tepi pantai tampak di-generate secara matematis. Gambar B adalah FOTO ASLI. Pemandangan udara Raja Ampat dengan air laut toska jernih, terumbu karang bawah laut alami, dan formasi batuan karst nyata."
  },
  {
    id: 6,
    title: "Aksi Sepak Bola di Lapangan",
    category: "Fisika Olahraga & Pola Geometris Bola",
    description: "AI sering gagal menggambar pola geometris segi lima/segi enam (pentagon/heksagon) pada bola sepak, serta sering menghasilkan stud (pul) sepatu bola yang menembus tanah atau melayang aneh. Cari foto sepak bola yang pola bolanya tidak beraturan.",
    imageA: level6Real,
    imageB: level6Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Pola Jahitan Bola, Pul Sepatu & Percikan Rumput",
    clues: [
      "Perbesar bola sepak di Gambar B. Apakah pola panel jahitannya membentuk heksagon bola standar, atau garis-garis hitam melengkung aneh menyerupai corak laba-laba?",
      "Periksa pul (studs) di bawah sol sepatu Gambar B. Apakah posisinya menancap secara logis di tanah atau tampak melayang dengan partikel hitam yang janggal?",
      "Bandingkan dengan Gambar A. Apakah panel hitam-putih pada bola sepak dan pul sepatu bola terlihat seperti peralatan olahraga sungguhan di bawah sinar matahari sore?"
    ],
    explanation: "Gambar B adalah HASIL KA. Bola sepak memiliki garis panel melengkung acak yang tidak mengikuti pola geometris bola sepak resmi, serta pul sepatu bola tampak melayang di atas rumput dengan partikel hitam aneh. Gambar A adalah FOTO ASLI. Menampilkan pemain bola menggiring bola klasik hitam-putih di atas rumput alami dengan cahaya golden hour."
  },
  {
    id: 7,
    title: "Petani Menanam Padi (Tandur)",
    category: "Aktivitas Manusia & Refleksi Air Sawah",
    description: "Foto aktivitas menanam padi (tandur) yang dihasilkan AI sering memiliki barisan bibit padi yang terlalu sejajar sempurna seperti grid komputer, serta tangan dan pakaian yang terlihat bersih tanpa noda lumpur yang realistis.",
    imageA: level7Ai,
    imageB: level7Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Jarak Tanam Bibit Padi, Riak Air & Noda Lumpur",
    clues: [
      "Perhatikan keteraturan bibit padi yang tertancap di air pada Gambar A. Apakah jarak antar rumpun padi terlalu presisi dan seragam seperti titik-titik di layar komputer?",
      "Periksa riak dan genangan air di sekitar kaki petani pada Gambar A. Apakah pantulan airnya tampak seperti lukisan digital?",
      "Bandingkan dengan Gambar B. Apakah ada lingkaran riak air konsentris alami saat tangan menancapkan bibit, dan lumpur pekat yang menempel di tangan serta kaki petani?"
    ],
    explanation: "Gambar A adalah HASIL KA. Bibit padi di sawah ditata dalam garis-garis titik yang terlalu simetris dan seragam, pantulan air tampak dilukis, serta pakaian petani tampak terlalu bersih dari lumpur sawah. Gambar B adalah FOTO ASLI. Petani bercaping merah menanam bibit padi dengan riak air konsentris nyata, tangan dan kaki berlumuran lumpur, serta pencahayaan alami di sawah."
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
    title: "Pesisir Pantai Tropis",
    category: "Tekstur Ombak Laut & Lanskap Pantai",
    description: "AI sering menghasilkan gulungan ombak dan pasir pantai yang terlihat seperti sapuan kuas cat minyak, serta batuan karang yang teksturnya terlalu licin dan tidak berpori. Cari pantai yang detail ombak dan batunya tampak digambar secara digital.",
    imageA: level9Ai,
    imageB: level9Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Buih Ombak Melengkung, Tekstur Batu & Daun Kelapa",
    clues: [
      "Perhatikan gulungan ombak yang pecah di pantai pada Gambar A. Apakah buih dan airnya tampak seperti lukisan cat minyak daripada foto kamera sungguhan?",
      "Periksa bebatuan hitam di atas pasir Gambar A. Apakah permukaannya terlalu mulus dan licin, tanpa tekstur kasar batu pantai alami?",
      "Bandingkan dengan foto udara Gambar B. Apakah perahu kecil, bayangan orang berenang di air dangkal, dan gradasi terumbu karang tampak tajam dan nyata?"
    ],
    explanation: "Gambar A adalah HASIL KA. Ombak laut, buih air, dan bebatuan di bibir pantai tampak seperti lukisan digital atau game render: buih ombak terlalu halus dan dedaunan pohon kelapa di tebing tampak digambar AI. Gambar B adalah FOTO ASLI. Foto udara (drone) pantai tropis berpasir putih menampilkan perahu kecil, orang yang sedang berenang, serta kejernihan air laut yang menembus dasar karang secara alami."
  },
  {
    id: 10,
    title: "Kerumunan Padat Orang Banyak",
    category: "Anatomi Wajah Massal & Efek Uncanny Valley",
    description: "AI paling sering mengalami kegagalan fatal saat menghasilkan kerumunan banyak orang (crowd). Wajah-wajah di barisan belakang hampir selalu meleleh, mata tidak simetris, atau tersenyum dengan cara yang menyeramkan (uncanny valley). Cari kerumunan yang wajah-wajah di belakangnya terdistorsi.",
    imageA: level10Real,
    imageB: level10Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Wajah Meleleh di Barisan Belakang & Senyuman Seragam",
    clues: [
      "Perbesar wajah-wajah orang di barisan tengah dan belakang pada Gambar B. Apakah bentuk mata, hidung, dan mulut mereka mulai meleleh dan terdistorsi menjadi rupa yang menyeramkan?",
      "Perhatikan ekspresi seluruh orang di Gambar B. Apakah hampir semua orang memiliki senyuman yang terlalu seragam dan tatapan mata kosong menghadap ke kamera?",
      "Bandingkan dengan Gambar A. Apakah kerumunan orang memiliki gestur tangan, topi, kacamata, dan ekspresi wajah yang beragam serta tetap berstruktur anatomi nyata meski berada di kejauhan?"
    ],
    explanation: "Gambar B adalah HASIL KA. Pada kerumunan AI ini, wajah-wajah di barisan belakang mengalami distorsi parah (facial melting): mata dan mulut meleleh, beberapa wajah tampak menyeramkan (uncanny valley), dan semua orang tersenyum seragam. Gambar A adalah FOTO ASLI. Menampilkan kerumunan ribuan demonstran nyata dengan berbagai ragam ekspresi, pose mengangkat tangan, pakaian, dan kedalaman fokus kamera lensa telefoto yang alami."
  }
];
