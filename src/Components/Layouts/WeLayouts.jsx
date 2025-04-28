import React from "react";
import We from "../Fragments/We";

const WeLayouts = () => {
  const WeLists = [
    {
      id: 1,
      title1: "Wee in Villa",
      img1: "/img/5.png",
      desk1: `waktuu ituu kita pernah ke villa bareng ternyata sayang setelah nikah teh kita ke villa, HAHAHAHAHAH. Villa ama anak-anak kelas waktu kita di kelas 11-8 Walikelas Bu Meti, edannnnn mantep parah sih ini moment udah mah bertepan ama kita 1 bulan, HAHAHAHA. serasa kaya suami istri tea sayangg, bangun pagi liat sunshine pagi harii beuheuhhhh, udah mah pas berangkat nya kita nyasar udah mah nyasar kehujanan bukan kehujanan lagi itu mah udah masuk nya hujanann. sokk pengen deui tehh ke villa miss momeennttt oooyyyy`,
    },
    {
      id: 2,
      title2: "Wee in home u",
      img2: "/img/6.png",
      desk2: `akuu udah ngerasain maen kerumah pacar ketemu orang tuanya sama anggota keluarga yang lain gini rasanyaa, ini pertama kali lagi aku bener-bener konteks nya maen ke rumah kamuu. soalnya, waktu itu aku kan pernah tidur dirumah kamu tapi itu sama anak-anak kelas 10-3 abis project kunjungan tea dehh udah hampir 3 tahun yang lalu itu mah sayangg. aku kerumah kamu itu pas malem hampir jam 9 nan orang gila emangg, kamu padahal niatnya basa basi kan nawarin doang tapi aku nya malah mau, HAHAHAHAHA. maaapiinn akuu yup, tapi aku bersyukur berkat itu aku bisa ke dalem rumah kamu mampirrr. Terimakasih yaa cinntaaa`,
    },
    {
      id: 3,
      title1: "Wee in photo booth",
      img1: "/img/7.png",
      desk1: `sumpahhh sayang ini pertama kali nya akuu ke foto studio, udah gitu sama kamu deuinan fotonya. beuhhh sedapp nyyoooo, ini teh aku nganter kamu awalnya ke Unpak kan yaa sayangg?? abis itu kamu ngajakin aku ke btm buat nyari kado buat temen kamu yang ultah teruss terlintas dehh mumpung di btm ada photobooth jadinya kita memutuskan untuk mengabadikan moment kita di photobooth ini, edaannn. akuu kira sebentar yaa datang terus foto ternyata seribet ituu harus nunggu dulu, baru tauu laa akuu. udah gitu yang bikin aku malu tehh beres kita foto, kita milih foto nya di samping abang-abang yang jagaa adddoiii maluu nyooo.`,
    },
    {
      id: 4,
      title2: "Wee in konser",
      img2: "/img/8.png",
      desk2: `dammmnnn brroo, ternyata kita pernah konser datee.HAHAHAHAAHA, walaupun di sekolah tetep aja kita konser date. soalnya adaa konser si Gangga yang tidak eddunn, karna hujan.jadi nya gaaa seru udah mah listrik maatii deuinan, haduhh kacoooww. tapi seengganya kita udah pernah konser dateee. ditambah beautifull sangat lagi kamu pake kerudung pertamina ditambah rok potih, kemeja unguu beuhh masaallahhh nyyooo.`,
    },
    {
      id: 5,
      title1: "Wee in home i",
      img1: "/img/9.png",
      desk1: `iniii bisa jadi bukti kamu jadi perempuan yang itu tuh pacar aku sendiri ke rumah akuu, ini pertama kalinya aku ajak perempuan ke rumah aku ketemu mamah akuu sayanggg. summpiilll, udah gitu ngerayain ulang tahun mamah aku yang dimana aku juga pertama kali nya ngasih kue ke mamah dari hasil uang aku sendiriii, biasanya aku sama aa aku ngasih kuer ke mamah, sekarang udah beda aku ngerayain ulang tahun mamah sama kammuuu, mmmakasihh yaa sayangg udah mau nyempetin waktu kamu buat ikut ngerayain ulang tahun mamakeee.`,
    },
    {
      id: 6,
      title2: "Wee in my birthday",
      img2: "/img/10.png",
      desk2: `untuk ke-2x nyaa kamu ke rumah aku dengan bermaksud untuk merayakan ulang tahun akuuu, awwww. lagi dan lagi kamu jadi perempuan yang ngerayain ulang tahun aku ini dengan mewah, pasti kamu bilang "gaa mewah laa" yaa  iya itu mah bagi kamu bagi aku kan meeewaah cinntaa, aku bener-bener kaget dengan prank kamu dan mamah yang kamu rencanain sayangg.gaa nyangka ajaa kamuu bener-bener se effort inniii. aku mau ucapp, terimakasih yaa sayaangggkuuu. <3`,
    },
    {
      id: 7,
      title1: "Wee in uika",
      img1: "/img/11.png",
      desk1: `gimana ga senengnya aku disini sayanggg, aku tampil sama the wood plane tiba-tiba kamu hadir datang buat liat aku ama nyemangatin akuuu, akuu bener-bener ga nyangka aja aseeeliii udahh gituu kamu meni masyyallahh pisannn, tapi aku kesel sikit. karna kamu banyak anak mahasiswa negliatin kamuuu,huhhh.Terimakasih yaa saayangg supportnyaaa, support baku terus yaa sayangg buat wujudin cita-cita akuu, Loveee Uuuuu Pokokknyaaa..`,
    },
    {
      id: 8,
      title2: "Wee in you birthday",
      img2: "/img/ultahKamu.png",
      desk2: `Untuk pertama kali nya aku kasih kue ulang tahun buat perempuan selain mamah akuuu, aku deg-deg an lahh waktu itu karna di luar rencana parah gara-gara hujan. aku diem di samping rumah tiba-tiba hujan nenek kamu keluar lewat pintu belakang aku kira itu kamu, aku ikumm terus aku pikir kesempatan buat lewat belakang (keberuntungan ada dipihak aku). aku nyalain lilin terus masuk ke rumah kamu udah gitu ada om kamu laaaa, malooooeee akuu. akhirsnya aku suprisein kamu cinntaaa. Terimakasih yup udah menjadi perempuan yang pertama kali aku rayakan selain bidadari di rumah akuu. <3`,
    },
  ];
  return (
    <div>
      <div className="you md:pt-20 pt-20" id="we">
        <div
          className="tittle flex justify-center items-center"
          data-aos="fade-up"
        >
          <h1 className="font-bold text-4xl">Weee Aree Forevverr</h1>
        </div>

        {WeLists.map((WeList) => (
          <We
            key={WeList.id}
            title1={WeList.title1}
            img1={WeList.img1}
            desk1={WeList.desk1}
            // Kanan
            title2={WeList.title2}
            img2={WeList.img2}
            desk2={WeList.desk2}
          />
        ))}
      </div>
    </div>
  );
};

export default WeLayouts;
