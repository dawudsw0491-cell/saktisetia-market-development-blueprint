export interface GlossaryItem {
  category:
    | "executive"
    | "territory"
    | "outlet"
    | "institution"
    | "community"
    | "event"
    | "roadmap";

  term: string;
  fullName: string;
  description: string;
  businessMeaning: string;
}

export const glossary: GlossaryItem[] = [
  {
    category: "executive",
    term: "LHR",
    fullName: "Lead Hit Rate",
    description:
      "Persentase keberhasilan konversi prospek menjadi peluang bisnis aktif.",
    businessMeaning:
      "Mengukur efektivitas aktivitas akuisisi pasar."
  },

  {
    category: "executive",
    term: "TOC",
    fullName: "Territory Opportunity Coverage",
    description:
      "Persentase peluang pasar yang masih tersedia untuk dikembangkan.",
    businessMeaning:
      "Mengukur ruang pertumbuhan bisnis di suatu wilayah."
  },

  {
    category: "executive",
    term: "RO",
    fullName: "Registered Outlet",
    description:
      "Jumlah outlet yang telah terdaftar.",
    businessMeaning:
      "Mengukur cakupan distribusi pasar."
  },

  {
    category: "executive",
    term: "AO",
    fullName: "Active Outlet",
    description:
      "Jumlah outlet yang aktif bertransaksi.",
    businessMeaning:
      "Mengukur kualitas jaringan distribusi."
  },

  {
    category: "executive",
    term: "NOO",
    fullName: "New Outlet Opening",
    description:
      "Jumlah outlet baru yang berhasil dibuka.",
    businessMeaning:
      "Mengukur pertumbuhan jaringan outlet."
  },

  {
    category: "territory",
    term: "Territory Score",
    fullName: "Territory Performance Score",
    description:
      "Skor gabungan performa dan potensi wilayah.",
    businessMeaning:
      "Digunakan untuk menentukan prioritas ekspansi."
  },

  {
    category: "territory",
    term: "Priority Territory",
    fullName: "Priority Development Area",
    description:
      "Wilayah dengan skor tertinggi.",
    businessMeaning:
      "Menjadi fokus utama investasi dan aktivasi."
  },

  {
    category: "outlet",
    term: "Outlet Coverage",
    fullName: "Market Outlet Coverage",
    description:
      "Tingkat cakupan outlet pada suatu wilayah.",
    businessMeaning:
      "Mengukur kekuatan distribusi pasar."
  },

  {
    category: "institution",
    term: "Institution",
    fullName: "Institutional Market",
    description:
      "Pasar yang berasal dari sekolah, kampus, pesantren, dan institusi.",
    businessMeaning:
      "Sumber volume dan penetrasi pasar."
  },

  {
    category: "community",
    term: "Community",
    fullName: "Community Market",
    description:
      "Pasar yang berasal dari komunitas dan kelompok masyarakat.",
    businessMeaning:
      "Mendorong awareness dan engagement."
  },

  {
    category: "event",
    term: "ROI",
    fullName: "Return on Investment",
    description:
      "Perbandingan hasil dengan biaya event.",
    businessMeaning:
      "Mengukur efektivitas investasi kegiatan."
  },

  {
    category: "roadmap",
    term: "Milestone",
    fullName: "Strategic Milestone",
    description:
      "Target utama yang harus dicapai pada periode tertentu.",
    businessMeaning:
      "Menjadi indikator keberhasilan roadmap."
  }
];