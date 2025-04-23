import ReactPlayers from "./ReactPlayer.jsx";

const Hope = () => {
  return (
    <div className="hope md:pt-20" id="hope">
      <div
        className="tittle flex justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="font-bold text-4xl">Hoopppee for yyoouu</h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-10">
        <ReactPlayers
          url={`../public/video/delia.mp4`}
          ucapan="Selamat ulang tahun aca semoga panjang umur sehat selalu dan makin cantikk pokoknyaaa."
          from="Adel"
        />
        <ReactPlayers
          url={`../public/video/nadia.mp4`}
          ucapan="Happy birth day acaaa semoga yang disemogakan ter semogakann acaa. kalo ada apa-apa cerita yaa acaaa."
          from="Nadia"
        />
        <ReactPlayers
          url={`../public/video/vika.mp4`}
          ucapan="Hallo selamat ulang tahun acaa, selamat ulang tahun yang ke-18 yaa. Semoga di ulang tahun yang ke-18 ini  kamu selalu diberikan kesehatan, dimurahkan rezeki dan semoga cita-cita mu tercapai yaaa."
          from="Vika"
        />
        <ReactPlayers
          url={`../public/video/mawar.mp4`}
          ucapan="Halloo, selamat ulang tahun semoga panjang umur, sehat selalu, makin cantik aca. semoga tahun ini menjadi tahun yang terbaik buat kamu. Tetep jadi aca yang aku kenal yaa. "
          from="Mawar"
        />
        <ReactPlayers
          url={`../public/video/nabila.mp4`}
          ucapan="Hallo acaaa, hari ini ulang tahun yaaa. selamat ulang tahun ya aca, semoga panjang umur, sehat selalu, dan menjadi anak yang berbakti kepada orang tua yaa acaa, makinn cantik, makin  berhati lembut."
          from="Nabila"
        />
        <ReactPlayers
          url={`../public/video/puput.mp4`}
          ucapan="Hallloo, Happy birth day acaa selamat ulang tahun, semoga di umur aca yang sekarang ini semoga aca menjadi lebih baik lagi di tahun inii. semogaaa acaa makin canttikkk."
          from="Puput"
        />
        <ReactPlayers
          url={`../public/video/nazwa.mp4`}
          ucapan="Hallo acaaa, happy birth day yang ke-18 tahun semoga di umur aca yang ke-18 tahun ini aca menjadi pribadi yang lebih baik, makin solehah, makin cantik, makin pinter dan murah rezeki. dan terutama dimana pun aca berada semoga sehat selalu. semoga aca sukses kedepannya untuk meraih cita-cita acaa."
          from="Nazwa"
        />
        <ReactPlayers
          url={`../public/video/resti.mp4`}
          ucapan="Hello aca, happy birthday yang ke-18 tahun, semoga aca dimudahkan segala urusannya, sehat selalu, dan langgeng terus ama firghi, semoga kita tetep temenan ber-9 selamanyaa. doa yang terbaik buat aca dari akuuu, dadaahhhh."
          from="Resti"
        />
      </div>
    </div>
  );
};

export default Hope;
