import You from "../Components/You.jsx";
import Hero from "../Components/Hero.jsx";
import We from "../Components/We.jsx";
import Hope from "../Components/Hope.jsx";
import Footer from "../Components/Footer.jsx";
import { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <div>
      {/* homepage */}
      <div className="homepage">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <Hero />

          {/* You */}
          <div className="you md:pt-20 pt-10" id="you">
            <div
              className="tittle flex justify-center items-center"
              data-aos="fade-in"
            >
              <h1 className="font-bold text-4xl">Aboouut Yoouu</h1>
            </div>
            <You
              // kiri
              title1="Cinnta in Kafa"
              img1="./public/img/1.png"
              desk1={`
                      ini kamu sayang waktu kamu di kafa ngerayain ultah temen kamuu yaa
                          sayangg!? sumpah kamu sadar ga sih??? engga? nih aku kasih tau, asal
                          kamu tau kamu udah jadi berlian terang parah di tempat itu sampe
                          orang-orang yang ada disitu ngelirik kamu sambil cengo sayangg.
                          heran aku mah da, bisa-bisa nya kamu se cantik ini secantik itu aku
                          kalo di liat secara langsung behhh allahhh mata aku nyoplok keknya
                          sayaanggg. aaargghhh tidak bisa dicerna otak udah diluar nurul
                          parahh ini mahh sayangggg.`}
              // kanan
              title2="Cinnta so beautifull"
              img2="./public/img/2.png"
              desk2={`
                      edannn-edannn aga gahaar tapi manis ngerti ga sih kamuu!? padahal udah pake efek burem-burem kaya gitu ge tetep aja kalo dari pabriknya udah cantik maahhh, beeheuuhhh kerudung pertamina berbahaya udah mah warna hitaammm ALLLAAAHHHHH MASYYAALLLAHHH.`}
            />
            <You
              // kiri
              title1="Cinnta in Taman"
              img1="./public/img/3.png"
              desk1={`
                      HAHAHAHAHAAHAHAHAAHA SAYAAANNGGGG KAMUUU INGET GAAA?? yang waktu itu aku so ngajak maen tapi ujung nya aku gatau mau kemanaaa karna dasar nya da emaang butaa mapp. Padahal kamu rela nolak ajakan maen dari temen kamu yang real ada tujuan sedangkan aku mah enggaa,wkwkwkw. jadi nya kita sedikit menjelajah jalan kota sampe akhirnya ketemu taman ini, demii kita kaya apa boa yaaa, gookil tea. kita sampe jam berapa tah disitu sampe akhirnya pulang sebelum pulang emam nassgoorr abah-abah yang ueenakk poll udah gitu banyak deinan kata kamu mah "ini mah porsi makan aku 2 hari" edaaannn 2 hari atuu gee. makasiihh yaa sayangg udah mau keluar maen tanpa tempat tujuan yang pasti yang ujung nya malah ngabisin waktu di motor doang udah mah pantat panass.`}
              // kanan
              title2="Cinnta so beautifull"
              img2="./public/img/4.png"
              desk2={`
                      coba kamu liat ini muka kamu se ga masyallahh apa coba!? ini kalo kamu keluar auto di cat call cinntaaa, mulai dari mataaa allahhh eta mata nya sungguh indah di padukan dengan bulu mata yang lentikk dan kerudung pertamina yang aduhai menggelegarrr ditambah lagi gaya muka yang seperti berkata "paakkk minta uangg, belum makan 2 harii" becandaa sayanggg ihhh pokonya masyaallahh, cantik, manis, indah pokoknya dan sebagainya.`}
            />
          </div>

          {/* We  */}
          <div className="you md:pt-20 pt-10" id="you">
            <div
              className="tittle flex justify-center items-center"
              data-aos="fade-up"
            >
              <h1 className="font-bold text-4xl">Weee Aree Forevverr</h1>
            </div>
            <We
              // Villa
              title1="Wee in Villa"
              img1="./public/img/5.png"
              desk1={`waktuu ituu kita pernah ke villa bareng ternyata sayang setelah nikah teh kita ke villa, HAHAHAHAHAH. Villa ama anak-anak kelas waktu kita di kelas 11-8 Walikelas Bu Meti, edannnnn mantep parah sih ini moment udah mah bertepan ama kita 1 bulan, HAHAHAHA. serasa kaya suami istri tea sayangg, bangun pagi liat sunshine pagi harii beuheuhhhh, udah mah pas berangkat nya kita nyasar udah mah nyasar kehujanan bukan kehujanan lagi itu mah udah masuk nya hujanann. sokk pengen deui tehh ke villa miss momeennttt oooyyyy`}
              // Maen ke rumah
              // kanan
              title2="Wee in home u"
              img2="./public/img/6.png"
              desk2={`akuu udah ngerasain maen kerumah pacar ketemu orang tuanya sama anggota keluarga yang lain gini rasanyaa, ini pertama kali lagi aku bener-bener konteks nya maen ke rumah kamuu. soalnya, waktu itu aku kan pernah tidur dirumah kamu tapi itu sama anak-anak kelas 10-3 abis project kunjungan tea dehh udah hampir 3 tahun yang lalu itu mah sayangg. aku kerumah kamu itu pas malem hampir jam 9 nan orang gila emangg, kamu padahal niatnya basa basi kan nawarin doang tapi aku nya malah mau, HAHAHAHAHA. maaapiinn akuu yup, tapi aku bersyukur berkat itu aku bisa ke dalem rumah kamu mampirrr. Terimakasih yaa cinntaaa`}
            />
            <We
              // Studio
              title1="Wee in photo booth"
              img1="./public/img/7.png"
              desk1={`sumpahhh sayang ini pertama kali nya akuu ke foto studio, udah gitu sama kamu deuinan fotonya. beuhhh sedapp nyyoooo, ini teh aku nganter kamu awalnya ke Unpak kan yaa sayangg?? abis itu kamu ngajakin aku ke btm buat nyari kado buat temen kamu yang ultah teruss terlintas dehh mumpung di btm ada photobooth jadinya kita memutuskan untuk mengabadikan moment kita di photobooth ini, edaannn. akuu kira sebentar yaa datang terus foto ternyata seribet ituu harus nunggu dulu, baru tauu laa akuu. udah gitu yang bikin aku malu tehh beres kita foto, kita milih foto nya di samping abang-abang yang jagaa adddoiii maluu nyooo.`}
              // Konser
              // kanan
              title2="Wee in konser"
              img2="./public/img/8.png"
              desk2={`dammmnnn brroo, ternyata kita pernah konser datee.HAHAHAHAAHA, walaupun di sekolah tetep aja kita konser date. soalnya adaa konser si Gangga yang tidak eddunn, karna hujan.jadi nya gaaa seru udah mah listrik maatii deuinan, haduhh kacoooww. tapi seengganya kita udah pernah konser dateee. ditambah beautifull sangat lagi kamu pake kerudung pertamina ditambah rok potih, kemeja unguu beuhh masaallahhh nyyooo.`}
            />
            <We
              // Ultah mamah
              title1="Wee in home i"
              img1="./public/img/9.png"
              desk1={`iniii bisa jadi bukti kamu jadi perempuan yang itu tuh pacar aku sendiri ke rumah akuu, ini pertama kalinya aku ajak perempuan ke rumah aku ketemu mamah akuu sayanggg. summpiilll, udah gitu ngerayain ulang tahun mamah aku yang dimana aku juga pertama kali nya ngasih kue ke mamah dari hasil uang aku sendiriii, biasanya aku sama aa aku ngasih kuer ke mamah, sekarang udah beda aku ngerayain ulang tahun mamah sama kammuuu, mmmakasihh yaa sayangg udah mau nyempetin waktu kamu buat ikut ngerayain ulang tahun mamakeee.`}
              // Ultah aku
              // kanan
              title2="Wee in my birthday"
              img2="./public/img/10.png"
              desk2={`untuk ke-2x nyaa kamu ke rumah aku dengan bermaksud untuk merayakan ulang tahun akuuu, awwww. lagi dan lagi kamu jadi perempuan yang ngerayain ulang tahun aku ini dengan mewah, pasti kamu bilang "gaa mewah laa" yaa  iya itu mah bagi kamu bagi aku kan meeewaah cinntaa, aku bener-bener kaget dengan prank kamu dan mamah yang kamu rencanain sayangg.gaa nyangka ajaa kamuu bener-bener se effort inniii. aku mau ucapp, terimakasih yaa sayaangggkuuu. <3`}
            />
            <We
              title1="Wee in uika"
              img1="./public/img/11.png"
              desk1={`gimana ga senengnya aku disini sayanggg, aku tampil sama the wood plane tiba-tiba kamu hadir datang buat liat aku ama nyemangatin akuuu, akuu bener-bener ga nyangka aja aseeeliii udahh gituu kamu meni masyyallahh pisannn, tapi aku kesel sikit. karna kamu banyak anak mahasiswa negliatin kamuuu,huhhh.Terimakasih yaa saayangg supportnyaaa, support baku terus yaa sayangg buat wujudin cita-cita akuu, Loveee Uuuuu Pokokknyaaa. `}
              // kanan
              title2="Wee in you birthday"
              img2="./public/img/ultahKamu.png"
              desk2={`Untuk pertama kali nya aku kasih kue ulang tahun buat perempuan selain mamah akuuu, aku deg-deg an lahh waktu itu karna di luar rencana parah gara-gara hujan. aku diem di samping rumah tiba-tiba hujan nenek kamu keluar lewat pintu belakang aku kira itu kamu, aku ikumm terus aku pikir kesempatan buat lewat belakang (keberuntungan ada dipihak aku). aku nyalain lilin terus masuk ke rumah kamu udah gitu ada om kamu laaaa, malooooeee akuu. akhirsnya aku suprisein kamu cinntaaa. Terimakasih yup udah menjadi perempuan yang pertama kali aku rayakan selain bidadari di rumah akuu. <3`}
            />
          </div>

          {/* Hope */}
          <Hope />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
