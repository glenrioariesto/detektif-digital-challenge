import { Case } from '../types';

import level1Ai from '../../assets/level-1-ai.jpeg';
import level1Real from '../../assets/level-1-real.jpeg';
import level2Ai from '../../assets/level-2-ai.jpeg';
import level2Real from '../../assets/level-2-real.jpeg';
import level3Ai from '../../assets/level-3-ai.jpeg';
import level3Real from '../../assets/level-3-real.jpeg';
import level4Ai from '../../assets/level-4-ai.jpeg';
import level4Real from '../../assets/level-4-real.jpeg';
import level5Ai from '../../assets/level-5-ai.jpeg';
import level5Real from '../../assets/level-5-real.jpeg';
import level6Ai from '../../assets/level-6-ai.jpeg';
import level6Real from '../../assets/level-6-real.jpeg';
import level7Ai from '../../assets/level-7-ai.jpeg';
import level7Real from '../../assets/level-7-real.jpeg';
import level8Ai from '../../assets/level-8-ai.jpeg';
import level8Real from '../../assets/level-8-real.jpeg';
import level9Ai from '../../assets/level-9-ai.jpeg';
import level9Real from '../../assets/level-9-real.jpeg';
import level10Ai from '../../assets/level-10-ai.jpeg';
import level10Real from '../../assets/level-10-real.jpeg';

export const CASES_DATA: Case[] = [
  {
    id: 1,
    title: "Kucing Manis di Atas Karpet",
    category: "Tekstur Bulu & Pola Karpet rajut",
    description: "Mendeteksi bulu hewan dan pola berulang adalah tantangan bagi AI. Salah satu gambar di bawah menampilkan kucing asli, dan yang lainnya adalah hasil generator AI yang mencoba meniru pola wol rajut.",
    imageA: level1Ai,
    imageB: level1Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Kumis Kucing & Serat Rajutan",
    clues: [
      "Perhatikan kumis kucing di Gambar A. Apakah kumis tersebut tumbuh dari titik folikel yang tepat pada moncongnya?",
      "Periksa pola rajutan di latar belakang Gambar A. Apakah polanya konsisten atau ada area yang mendadak buram/berubah bentuk?",
      "Lihat pantulan mata kucing. Apakah pupil mata kiri dan kanan memiliki bentuk yang sejalan dengan pencahayaan ruangan?"
    ],
    explanation: "Gambar B adalah FOTO ASLI. Bulu-bulu halus di telinga dan kumis kucing tumbuh secara acak namun logis dari folikel kulitnya, serta tekstur lingkungan sekitarnya sangat alami. Gambar A adalah HASIL KA. Generator AI sering kali membuat kumis kucing yang melayang atau tumbuh dari tempat yang salah (seperti dari pipi atas), dan detail serat rajutan di sekitarnya cenderung kehilangan strukturnya di beberapa bagian, berubah menjadi pola acak yang tidak masuk akal."
  },
  {
    id: 2,
    title: "Jari Tangan Memegang Cangkir",
    category: "Anatomi Tangan & Integrasi Objek",
    description: "Kecerdasan Artifisial terkenal sangat kesulitan menggambar tangan manusia secara akurat. Bandingkan kedua gambar yang memperlihatkan tangan memegang cangkir/makanan ini.",
    imageA: level2Real,
    imageB: level2Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Sendi Jari, Kuku & Gagang Cangkir",
    clues: [
      "Hitung jumlah jari yang terlihat di kedua gambar. Apakah semuanya berjumlah normal?",
      "Perhatikan kerutan kulit di setiap sendi jari. Apakah kerutan tersebut terlihat alami atau terlalu licin?",
      "Lihat area pertemuan antara jari dengan benda yang dipegang. Apakah ada bagian yang tampak 'meleleh' atau menembus objek?"
    ],
    explanation: "Gambar A adalah FOTO ASLI. Kerutan pada sendi jari, kuku, dan cengkeraman pada cangkir memiliki anatomi yang sepenuhnya benar secara fisik dengan lipatan kulit yang logis. Gambar B adalah HASIL KA. Jika diperhatikan dengan saksama, tekstur kulit jari terlalu halus seperti lilin, batas antara kuku dan daging jari tampak kabur, serta cara jari melingkari objek memiliki sudut melengkung yang tidak ergonomis bagi anatomi manusia."
  },
  {
    id: 3,
    title: "Potret Wajah di Kedai Kopi",
    category: "Anatomi Wajah & Tekstur Kulit",
    description: "Periksa dua potret wanita ini. Salah satunya adalah foto jepretan kamera DSLR asli, sementara yang lain adalah hasil render AI (KA) dengan pencahayaan studio ultra-sempurna. Perhatikan detail tekstur kulit dan mata.",
    imageA: level3Ai,
    imageB: level3Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Mata, Anting-Anting & Rambut Halus",
    clues: [
      "Periksa anting-anting di Gambar A: apakah pola kiri dan kanan simetris dan terpasang dengan logis?",
      "Lihat pantulan cahaya (catchlight) di kornea mata Gambar A. Apakah bentuknya bulat sempurna atau agak distorsi?",
      "Perhatikan helai rambut halus (stray hairs) di Gambar B yang jatuh secara acak di dahi dan pelipis."
    ],
    explanation: "Gambar B adalah FOTO ASLI. Kulit subjek memiliki ketidaksempurnaan alami seperti pori-pori yang tidak merata, kemerahan, dan helai rambut halus yang jatuh secara tidak beraturan. Gambar A adalah HASIL KA. Meskipun terlihat sangat menakjubkan, kulitnya terlalu mulus secara tidak merata (efek plastik), pantulan cahaya di matanya memiliki bentuk tidak beraturan yang tidak sesuai dengan sumber cahaya, dan anting-antingnya tampak 'menyatu' dengan cuping telinga tanpa pengait yang jelas."
  },
  {
    id: 4,
    title: "Pemandangan Kota Malam Hari",
    category: "Teks Reklame & Refleksi Cahaya",
    description: "Lampu neon kota dan papan nama adalah musuh bebuyutan AI generasi lama dan menengah. AI sering gagal mengeja teks pada papan nama jalan atau menghasilkan teks cermin yang tidak logis pada aspal basah.",
    imageA: level4Real,
    imageB: level4Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Huruf pada Papan Nama & Bayangan Air",
    clues: [
      "Periksa tulisan atau logo yang terlihat pada gedung-gedung. Apakah ejaannya terbaca sebagai kata nyata atau hanya susunan huruf acak?",
      "Lihat pantulan gedung di permukaan air atau aspal basah. Apakah pantulan tersebut membentuk bayangan vertikal yang logis?",
      "Bandingkan detail lampu-lampu kecil di jendela gedung. Apakah ada pola jendela yang mendadak menciut atau tidak sejajar?"
    ],
    explanation: "Gambar A adalah FOTO ASLI. Semua logo dan tulisan di gedung-gedung perkotaan dapat dibaca dengan jelas, dan struktur arsitekturnya memiliki perspektif geometris yang sempurna. Gambar B adalah HASIL KA. Meskipun estetikanya sangat menawan dengan gaya neon-synthwave, papan nama di latar belakang menampilkan teks 'gibberish' (tulisan tanpa arti yang menyerupai huruf), dan jendela pada gedung-gedung tinggi di bagian kanan memiliki ukuran yang tidak konsisten secara struktural."
  },
  {
    id: 5,
    title: "Momen Kebersamaan di Taman",
    category: "Interaksi Sosial & Konsistensi Cahaya",
    description: "Memotret beberapa orang sekaligus dalam satu frame adalah hal sulit bagi AI karena harus menjaga konsistensi arah cahaya, bayangan, dan anatomi setiap individu di dalam kelompok.",
    imageA: level5Ai,
    imageB: level5Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Detail Wajah Belakang, Jari & Bayangan",
    clues: [
      "Lihat wajah orang-orang yang berada di latar belakang atau posisi sekunder di Gambar A. Apakah wajah mereka terdistorsi?",
      "Perhatikan bayangan di bawah meja atau di sekitar kaki di Gambar B. Apakah sesuai dengan arah datangnya cahaya matahari?",
      "Periksa bagian pakaian atau aksesoris (seperti kacamata atau tali tas). Apakah ada yang terputus di tengah jalan?"
    ],
    explanation: "Gambar B adalah FOTO ASLI. Ekspresi wajah tertawa yang natural, arah bayangan di tanah yang konsisten dengan posisi matahari sore, dan detail pakaian semuanya selaras. Gambar A adalah HASIL KA. Saat diperbesar, wajah orang-orang di latar belakang mengalami distorsi aneh (smudged), detail jari tangan beberapa orang tampak menyatu secara tidak wajar dengan pakaian, dan ada keganjilan pada cara tali pakaian/aksesoris tersampir tanpa ujung."
  },
  {
    id: 6,
    title: "Membaca Buku di Perpustakaan",
    category: "Detail Teks & Halaman Buku",
    description: "Periksa halaman buku yang sedang dibaca. Foto asli akan menangkap baris-baris kalimat yang tercetak rapi pada kertas, sedangkan AI sering menghasilkan barisan coretan meliuk-liuk yang tidak bermakna.",
    imageA: level6Real,
    imageB: level6Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Baris Kalimat & Tekstur Kertas Kuno",
    clues: [
      "Perhatikan halaman terbuka di Gambar A. Apakah baris teksnya lurus sejajar dan membentuk karakter huruf yang nyata?",
      "Lihat buku-buku di Gambar B. Apakah ketebalan halaman and jilidnya terlihat realistis atau seperti balok padat berpola?",
      "Periksa bayangan jemari di atas halaman buku. Apakah bayangan tersebut mengikuti lekukan kertas?"
    ],
    explanation: "Gambar A adalah FOTO ASLI. Halaman buku menunjukkan teks tercetak dengan layout baris yang lurus dan bayangan jari pembaca jatuh secara realistis di atas kertas melengkung. Gambar B adalah HASIL KA. Buku-buku tersebut tampak terlalu sempurna layaknya objek 3D dalam game, tepi-tepi kertasnya terlalu mulus, dan jika Anda mencoba mengeja tulisan di punggung buku, Anda akan menemukan keanehan bentuk karakter yang tidak terbaca."
  },
  {
    id: 7,
    title: "Pantulan di Kacamata Hitam",
    category: "Hukum Fisika Refleksi Cahaya",
    description: "Kacamata hitam reflektif bertindak sebagai cermin ganda. Foto asli harus mematuhi hukum fisika di mana kedua lensa memantulkan lingkungan yang sama dari sudut pandang yang sedikit berbeda. AI sering gagal menyinkronkan kedua pantulan ini.",
    imageA: level7Ai,
    imageB: level7Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Lensa Kiri vs Lensa Kanan & Bingkai",
    clues: [
      "Bandingkan gambar refleksi di lensa kiri dan lensa kanan Gambar A. Apakah mereka memantulkan objek/langit yang sama?",
      "Perhatikan detail bingkai kacamata di Gambar B. Apakah ada lekukan yang tidak simetris atau bahan bingkai yang tampak meleleh?",
      "Lihat bayangan kacamata di wajah. Apakah bayangan tersebut logis berdasarkan arah datangnya sinar matahari?"
    ],
    explanation: "Gambar B adalah FOTO ASLI. Refleksi lingkungan pada kacamata sangat konsisten dan detail material plastik/kacanya realistis lengkap dengan debu mikro. Gambar A adalah HASIL KA. Refleksi pada lensa kiri dan kanan tidak sinkron secara spasial (misal, lensa kiri memantulkan awan tebal sedangkan lensa kanan memantulkan pola yang berbeda drastis), serta terdapat ketidaksempurnaan sambungan engsel bingkai kacamata yang tidak masuk akal secara mekanis."
  },
  {
    id: 8,
    title: "Hidangan Lezat di Atas Meja",
    category: "Tekstur Makanan & Konsistensi Bahan",
    description: "Makanan asli memiliki ketidaksempurnaan organik: kelembapan yang tidak merata, serat daging, biji wijen yang letaknya acak, atau bagian gosong yang tipis. AI cenderung membuat makanan terlihat terlalu mengkilap seperti dilapisi lilin.",
    imageA: level8Real,
    imageB: level8Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Kilauan Minyak, Serat Sayur & Tepian Piring",
    clues: [
      "Perhatikan permukaan makanan di Gambar B. Apakah kilau cahayanya tampak alami atau seperti dilapisi plastik/lilin cair?",
      "Lihat susunan biji-bijian atau irisan sayur di Gambar A. Apakah mereka tampak ditumpuk satu per satu dengan gravitasi yang realistis?",
      "Periksa tepi piring. Apakah bentuk lingkaran piring presisi atau sedikit peyang/meleot di beberapa sudut?"
    ],
    explanation: "Gambar A adalah FOTO ASLI. Tekstur setiap bahan makanan (serat sayuran, kelembapan, biji wijen) memiliki variasi acak yang sangat alami di bawah cahaya ruangan biasa. Gambar B adalah HASIL KA. Makanan tersebut terlihat terlalu 'glamour' dan mengkilap dengan pencahayaan magis yang tidak realistis (seperti makanan iklan komputer), dan jika diperhatikan detail bagian bawah roti/piring, garis batasnya terlihat buram dan menyatu dengan meja kayu."
  },
  {
    id: 9,
    title: "Lanskap Pegunungan & Danau",
    category: "Refleksi Air & Detail Geometris Alam",
    description: "Di alam bebas, air bertindak sebagai reflektor yang mendistorsi cahaya sesuai riak gelombang. AI sering kali membuat refleksi air yang terlalu sempurna atau justru polanya terputus secara tidak logis.",
    imageA: level9Ai,
    imageB: level9Real,
    realImage: "B",
    aiImage: "A",
    locationOfArtifacts: "Riak Gelombang & Puncak Gunung Refleksi",
    clues: [
      "Bandingkan bentuk puncak gunung asli di atas dengan bentuk gunung hasil refleksi di air pada Gambar A. Apakah 100% sama?",
      "Lihat transisi antara daratan tepi danau dan permukaan air di Gambar B. Apakah ada bebatuan kecil dengan bayangan air yang logis?",
      "Perhatikan riak-riak air di Gambar A. Apakah polanya terlihat alami atau seperti filter noise komputer yang berulang?"
    ],
    explanation: "Gambar B adalah FOTO ASLI. Danau menampilkan distorsi riak air alami akibat tiupan angin yang memecah refleksi gunung secara realistis sesuai hukum optik. Gambar A adalah HASIL KA. Refleksi gunung di air tampak terlalu mirip dengan gambar aslinya (hanya di-flip secara vertikal dengan sedikit blur komputer), dan riak air di bagian depan memiliki pola fraktal yang terlalu matematis dan berulang."
  },
  {
    id: 10,
    title: "Potret Kakek Bersahaja",
    category: "Tekstur Kulit Lansia & Kerutan Wajah",
    description: "Kerutan wajah orang tua adalah salah satu detail paling kompleks. Kamera asli menangkap kerutan mikro, pori-pori kering, dan rambut halus. AI sering kali membuat kerutan yang terlalu rapi atau kulit yang tampak licin di sela-sela kerutan.",
    imageA: level10Real,
    imageB: level10Ai,
    realImage: "A",
    aiImage: "B",
    locationOfArtifacts: "Kerutan Mata, Pori-pori Kulit & Kumis",
    clues: [
      "Perhatikan kedalaman kerutan di sekitar mata Gambar A. Apakah ada detail pori-pori kulit kering yang tampak sangat nyata?",
      "Periksa kumis dan jenggot di Gambar B. Apakah setiap helai rambut tumbuh secara logis dari kulit atau terlihat seperti digambar dengan kuas digital?",
      "Lihat kilau mata dan area putih mata (sklera) di Gambar B. Apakah terlalu putih bersih tanpa pembuluh darah kecil?"
    ],
    explanation: "Gambar A adalah FOTO ASLI. Tekstur kulit kakek tersebut menunjukkan tanda-tanda penuaan alami yang sangat detail seperti bercak matahari, kerutan mikro yang tidak beraturan, pembuluh darah tipis di mata, dan jenggot yang tumbuh alami. Gambar B adalah HASIL KA. Kulit wajah pria tersebut terlihat terlalu halus layaknya lilin kosmetik, jenggot dan rambutnya memiliki transisi kabur di bagian tepi kulit, dan sklera matanya terlalu putih bersih tanpa pembuluh darah alami, memberikan kesan tatapan kosong (uncanny valley)."
  }
];
