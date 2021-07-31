const questionList = [
  {
    id: 1,
    choices: ['เสือ', 'วัว', 'ควาย', 'เด็กทารก'],
    videoUrl: 'https://vimeo.com/581527219',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736721/00%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD01%E0%B8%A7%E0%B8%B1%E0%B8%A702%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A203%E0%B9%81%E0%B8%A1%E0%B8%A5%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99_stlwd9.mp3',
    answer: 0,
  },
  {
    id: 2,
    choices: ["ไดโนเสาร์","วัว","เสือ","ช้าง"],
    videoUrl: 'https://vimeo.com/581527179',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736721/00%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD01%E0%B9%84%E0%B8%94%E0%B9%82%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%8C02%E0%B8%A7%E0%B8%B1%E0%B8%A703%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87_jgsksu.mp3',
    answer: 2,
  },
  {
    id: 3,
    choices: ['เด็กทารก','แมว','กบ','กระต่าย'],
    videoUrl: 'https://vimeo.com/581527140',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736721/00%E0%B9%81%E0%B8%A1%E0%B8%A701%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%97%E0%B8%B2%E0%B8%A3%E0%B8%8102%E0%B8%81%E0%B8%9A03%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2_vkr028.mp3',
    answer: 1,
  },
  {
    id: 4,
    choices: ['นกพิราบ','หมา','คนบีทบ็อกซ์','เป็ด'],
    videoUrl: 'https://vimeo.com/581527090',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B8%A1%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%B2%E0%B8%AB%E0%B8%A2%E0%B8%B5_01%E0%B8%99%E0%B8%81%E0%B8%9E%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87_02_%E0%B8%84%E0%B8%99%E0%B8%9A%E0%B8%B5%E0%B8%97%E0%B8%9A%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B9%8C%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%97%E0%B9%88_03%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%81%E0%B9%8A%E0%B8%B2%E0%B8%9A%E0%B9%86_rqy0nq.mp3',
    answer: 1,
  },
  {
    id: 5,
    choices: ['แพะ','มนุษย์','ประยุทธ์','ไม่รู้ไม่รู้'],
    videoUrl: 'https://vimeo.com/581527065',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B9%81%E0%B8%9E%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B9%8A%E0%B8%94%E0%B8%9401%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B9%89%E0%B8%B202%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%95%E0%B8%B9%E0%B9%8803%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%89_ij8ijh.mp3',
    answer: 0,
  },
  {
    id: 6,
    choices: ['นกนางนวล','คน','หมา','แมว'],
    videoUrl: 'https://vimeo.com/581527041',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B8%99%E0%B8%81%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%A7%E0%B8%A501%E0%B8%84%E0%B8%9902%E0%B8%AB%E0%B8%A1%E0%B8%B203%E0%B9%81%E0%B8%A1%E0%B8%A7_uzygau.mp3',
    answer: 1,
  },
  {
    id: 7,
    choices: ['หมา','คน'],
    videoUrl: 'https://vimeo.com/581527018',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87_01%E0%B8%AB%E0%B8%A1%E0%B8%B2_dzneds.mp3',
    answer: 1,
  },
  {
    id: 8,
    choices: ['แพะ','หมู','ม้า','คน'],
    videoUrl: 'https://vimeo.com/581526971',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B8%84%E0%B8%9901%E0%B8%AB%E0%B8%A1%E0%B8%B902%E0%B9%81%E0%B8%9E%E0%B8%B003%E0%B8%A1%E0%B9%89%E0%B8%B2_hm8ofl.mp3',
    answer: 3,
  },
  {
    id: 9,
    choices: ['คน','หมู','นกฟลามิงโก้','เสือ'],
    videoUrl: 'https://vimeo.com/581526920',
    audioUrl: 'https://res.cloudinary.com/deaghhlei/video/upload/v1627736720/00%E0%B8%84%E0%B8%99_01%E0%B8%AB%E0%B8%A1%E0%B8%B9_02%E0%B8%99%E0%B8%81%E0%B8%9F%E0%B8%A5%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%87%E0%B9%82%E0%B8%81%E0%B9%89_03%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD_osfkdd.mp3',
    answer: 0,
  },
]


export {
  questionList
}