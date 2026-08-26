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
    explanation: 'Gambar A adalah HASIL KA. Kucing oren berpose selfie sambil memegang matcha iced drink — anatomi kaki depan dipaksa meniru tangan manusia, sesuatu yang tidak terjadi pada foto nyata. Gambar B adalah FOTO ASLI.'
  },
  {
    caseId: 2,
    title: 'Roti Artisan vs Secangkir Kopi',
    category: 'Tekstur Makanan & Still Life',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Biji Gandum, Tepung & Kulit Roti',
    explanation: 'Gambar B adalah HASIL KA. Tiga roti, batang gandum, dan taburan tepung ditata terlalu sempurna untuk foto dapur biasa; biji bunga matahari dan retakan kulit roti cenderung berpola. Gambar A adalah FOTO ASLI.'
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
    title: 'Kota Senja di Chicago',
    category: 'Arsitektur, Kendaraan & Teks',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Marquee Bus, Aspal Basah & Jendela Gedung',
    explanation: 'Gambar B adalah HASIL KA. Koridor jalan malam itu estetik, tetapi teks marquee, tepi kendaraan, dan pantulan basah sering pecah atau tidak konsisten secara struktural. Gambar A adalah FOTO ASLI pemandangan udara.'
  },
  {
    caseId: 5,
    title: 'Kelompok di Tepi Air',
    category: 'Anatomi Kelompok & Siluet',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Jari, Lengan Anak & Siluet Menyatu',
    explanation: 'Gambar A adalah HASIL KA. Siluet pantai senja itu dramatis, tetapi tangan, lengan anak, dan tepi tubuh sering menyatu atau terdistorsi dengan cahaya tepi (rim light) seragam. Gambar B adalah FOTO ASLI delapan orang duduk di tembok.'
  },
  {
    caseId: 6,
    title: 'Buku di Meja Baca',
    category: 'Teks Cetak & Punggung Buku',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Huruf di Punggung Buku & Tepi Jilid',
    explanation: 'Gambar B adalah HASIL KA. Tumpukan buku bisnis tampak rapi seperti pajangan, tetapi huruf di punggung buku dan tepi jilid kehilangan ketajaman huruf sungguhan. Gambar A adalah FOTO ASLI dengan teks cetak yang terbaca nyata.'
  },
  {
    caseId: 7,
    title: 'Objek di Atas Meja',
    category: 'Fisika Objek & Detail Merek',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Lampu Peri, Pita Goni & Huruf Spine',
    explanation: 'Gambar A adalah HASIL KA. Tumpukan buku berbentuk pohon natal melanggar hukum fisika kabel lampu dan pita goni, sementara tulisan spine goyah. Gambar B adalah FOTO ASLI kacamata hitam produk dengan logo dan bayangan presisi.'
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
    title: 'Lembah Pegunungan',
    category: 'Refleksi Air & Detail Pohon',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'B',
    aiImage: 'A',
    locationOfArtifacts: 'Pantulan Sungai, Kabut & Tepi Pohon',
    explanation: 'Gambar A adalah HASIL KA. Lembah senja memiliki kabut dan pohon yang berulang seperti stempel serta riak air menyerupai lukisan. Gambar B adalah FOTO ASLI pegunungan bersalju dan pohon cemara.'
  },
  {
    caseId: 10,
    title: 'Potret Pria di Luar Ruangan',
    category: 'Kulit, Gigi & Bokeh Cahaya',
    liveUrl: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
    realImage: 'A',
    aiImage: 'B',
    locationOfArtifacts: 'Gigi, Halo Rambut & Bokeh Latar',
    explanation: 'Gambar B adalah HASIL KA. Pria tersenyum di golden hour memiliki gigi terlalu putih seragam, halo rambut berlebihan, dan orbs bokeh berulang. Gambar A adalah FOTO ASLI portrait dengan jenggot dan pantulan kacamata alami.'
  }
];

export const projectMeta = {
  title: 'Detektif Digital Challenge',
  url: 'https://glenrioariesto.github.io/detektif-digital-challenge/',
  github: 'https://github.com/glenrioariesto/detektif-digital-challenge'
};
