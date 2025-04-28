import React from "react";
import You from "../Fragments/You";

const YouLayouts = () => {
  const youLists = [
    {
      id: 1,
      title1: "Cinta in Kafa",
      img1: "/img/1.png",
      desk1: `ini kamu sayang waktu kamu di kafa ngerayain ultah temen kamuu yaa sayangg!? sumpah kamu sadar ga sih??? engganih aku kasih tau, asal kamu tau kamu udah jadi berlian terang di tempat itu sampe orang-orang yang ada disitu ngelirik sambil cengo sayangg.heran aku mah da, bisa-bisa nya kamu se ini secantik itu aku
      kalo di liat secara langsung behhh mata aku nyoplok keknya sayaanggg. aaargghhh tidak bisa dicerna udah diluar nurul parahh ini mahh sayangggg.`,
    },
    {
      id: 2,
      title2: "Cinnta so beautifull",
      img2: "/img/2.png",
      desk2: `edannn-edannn aga gahaar tapi manis ngerti ga sih kamuu!? padahal udah pake efek burem-burem kaya gitu ge tetep aja kalo dari pabriknya udah cantik maahhh, beeheuuhhh kerudung pertamina berbahaya udah mah warna hitaammm ALLLAAAHHHHH MASYYAALLLAHHH.`,
    },
    {
      id: 3,
      title1: "Cinnta in Taman",
      img1: "/img/3.png",
      desk1: `HAHAHAHAHAAHAHAHAAHA SAYAAANNGGGG KAMUUU INGET GAAA?? yang waktu itu aku so ngajak maen tapi ujung nya aku gatau mau kemanaaa karna dasar nya da emaang butaa mapp. Padahal kamu rela nolak ajakan maen dari temen kamu yang real ada tujuan sedangkan aku mah enggaa,wkwkwkw. jadi nya kita sedikit menjelajah jalan kota sampe akhirnya ketemu taman ini, demii kita kaya apa boa yaaa, gookil tea. kita sampe jam berapa tah disitu sampe akhirnya pulang sebelum pulang emam nassgoorr abah-abah yang ueenakk poll udah gitu banyak deinan kata kamu mah "ini mah porsi makan aku 2 hari" edaaannn 2 hari atuu gee. makasiihh yaa sayangg udah mau keluar maen tanpa tempat tujuan yang pasti yang ujung nya malah ngabisin waktu di motor doang udah mah pantat panass.`,
    },
    {
      id: 4,
      title2: "Cinnta so beautifull",
      img2: "/img/4.png",
      desk2: `coba kamu liat ini muka kamu se ga masyallahh apa coba!? ini kalo kamu keluar auto di cat call cinntaaa, mulai dari mataaa allahhh eta mata nya sungguh indah di padukan dengan bulu mata yang lentikk dan kerudung pertamina yang aduhai menggelegarrr ditambah lagi gaya muka yang seperti berkata "paakkk minta uangg, belum makan 2 harii" becandaa sayanggg ihhh pokonya masyaallahh, cantik, manis, indah pokoknya dan sebagainya.`,
    },
  ];
  return (
    <div>
      <div className="you md:pt-20 pt-20" id="you">
        {/* title */}
        <div
          className="tittle flex justify-center items-center"
          data-aos="fade-up"
        >
          <h1 className="font-bold text-4xl">Aboouut Yoouu</h1>
        </div>
        {youLists.map((youList) => (
          <You
            // kiri
            key={youList.id}
            img1={youList.img1}
            title1={youList.title1}
            desk1={youList.desk1}
            // kanan
            img2={youList.img2}
            title2={youList.title2}
            desk2={youList.desk2}
          />
        ))}
      </div>
    </div>
  );
};

export default YouLayouts;
