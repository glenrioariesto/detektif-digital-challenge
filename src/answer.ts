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
    title: 'Kucing Oren',
    category: 'Anatomi Hewan & Objek Dipegang',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Kaki Depan, Cangkir & Pose Selfie',
    explanation: 'Gambar A adalah HASIL KA. Kucing oren berpose selfie sambil memegang matcha iced drink — anatomi kaki depan dipaksa meniru tangan manusia, sesuatu yang tidak terjadi pada foto nyata. Gambar B adalah FOTO ASLI. Kucing berdiri di ubin dengan kaki, ekor, dan proporsi tubuh yang natural.'
  },
  {
    caseId: 2,
    title: 'Kios Sayur di Pasar Tradisional',
    category: 'Teks Label & Pencahayaan Pasar',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Teks Papan Harga, Bohlam Lampu & Detail Sayuran',
    explanation: 'Gambar B adalah HASIL KA. Tulisan pada papan harga dan label di Gambar B berupa huruf aneh/gibberish yang tidak bermakna, serta lampu filamen gantung tampak artifisial. Gambar A adalah FOTO ASLI pedagang pasar dengan sayuran segar alami.'
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
    title: 'Pemandangan Sawah Pedesaan',
    category: 'Lanskap Alam & Arsitektur Desa',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Kubah Masjid, Jalur Aspal Meliuk & Tekstur Bulir Padi',
    explanation: 'Gambar B adalah HASIL KA. Kubah masjid besar di tengah sawah tampak seperti ilustrasi fantasi: jalan aspal meliuk terlalu licin sempurna tanpa marka realistis, dan bulir padi di latar depan terlalu seragam. Gambar A adalah FOTO ASLI jalan desa Indonesia dengan pesepeda dan gunung berawan kabut.'
  },
  {
    caseId: 5,
    title: 'Kepulauan Karst Raja Ampat',
    category: 'Geografi Pesisir & Terumbu Karang',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Bentuk Pulau Karst, Kapal Melayang & Terumbu Karang',
    explanation: 'Gambar A adalah HASIL KA. Gugusan pulau karst terlihat seperti miniatur digital: bentuk pulau bulat seragam, kapal-kapal putih gepeng tanpa detail lambung, dan terumbu karang matematis. Gambar B adalah FOTO ASLI pemandangan udara Raja Ampat dengan terumbu karang alami dan tebing karst nyata.'
  },
  {
    caseId: 6,
    title: 'Aksi Sepak Bola di Lapangan',
    category: 'Fisika Olahraga & Pola Geometris Bola',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Pola Jahitan Bola, Pul Sepatu & Percikan Rumput',
    explanation: 'Gambar B adalah HASIL KA. Bola sepak memiliki garis panel melengkung acak yang tidak mengikuti pola geometris bola sepak resmi, serta pul sepatu bola tampak melayang di atas rumput dengan partikel hitam aneh. Gambar A adalah FOTO ASLI pemain menggiring bola klasik di rumput alami.'
  },
  {
    caseId: 7,
    title: 'Petani Menanam Padi (Tandur)',
    category: 'Aktivitas Manusia & Refleksi Air Sawah',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Jarak Tanam Bibit Padi, Riak Air & Noda Lumpur',
    explanation: 'Gambar A adalah HASIL KA. Bibit padi di sawah ditata dalam garis titik yang terlalu simetris sempurna seperti grid komputer, pantulan air terlukis, dan baju terlalu bersih. Gambar B adalah FOTO ASLI petani bercaping menanam padi dengan riak air konsentris nyata dan tangan berlumur lumpur.'
  },
  {
    caseId: 8,
    title: 'Semangkuk Bakso Aci',
    category: 'Tekstur Makanan & Properti Dapur',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Lubang Kerupuk, Kuah Merah & Properti Meja',
    explanation: 'Gambar B adalah HASIL KA. Semangkuk bakso aci tampak seperti iklan buatan: lubang kerupuk tidak wajar, kilau kuah seragam seperti plastik. Gambar A adalah FOTO ASLI makanan dengan tekstur alami.'
  },
  {
    caseId: 9,
    title: 'Pesisir Pantai Tropis',
    category: 'Tekstur Ombak Laut & Lanskap Pantai',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Buih Ombak Melengkung, Tekstur Batu & Daun Kelapa',
    explanation: 'Gambar A adalah HASIL KA. Ombak laut, buih air, dan bebatuan di bibir pantai tampak seperti lukisan cat minyak/digital: buih ombak terlalu halus dan daun kelapa tampak digambar AI. Gambar B adalah FOTO ASLI udara drone pantai pasir putih dengan perahu dan orang berenang di air jernih.'
  },
  {
    caseId: 10,
    title: 'Kerumunan Padat Orang Banyak',
    category: 'Anatomi Wajah Massal & Efek Uncanny Valley',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Wajah Meleleh di Barisan Belakang & Senyuman Seragam',
    explanation: 'Gambar B adalah HASIL KA. Wajah-wajah di barisan belakang mengalami distorsi parah (facial melting): mata dan mulut meleleh, beberapa wajah tampak menyeramkan (uncanny valley), dan semua orang tersenyum seragam. Gambar A adalah FOTO ASLI kerumunan ribuan demonstran nyata dengan ragam ekspresi dan pakaian otentik.'
  }
];

export const projectMeta = {
  title: 'Detektif Digital Challenge',
  url: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
  github: 'https://github.com/glenrioariesto/detektif-digital-challenge'
};
