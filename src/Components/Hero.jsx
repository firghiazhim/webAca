const Hero = () => {
  return (
    <div className="hero lg:pt-25 pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
      <div className="box" data-aos="fade-right">
        <img
          src="../public/img/hero1.jpg"
          className="md:h-99 w-full object-cover"
        />
      </div>
      <div
        className="box flex flex-col lg:justify-between gap-4"
        data-aos="fade-down"
      >
        <h1 className="lg:text-6xl text-5xl font-miring font-bold">
          Rasya Putri Natarina.
        </h1>
        <p className="tracking-wide text-[13px] md:text-md lg:text-[15px]">
          Play music dulu yupp cintaa untuk menemani perjalanan kammmuu
          menjelajah sssayaangkuu <span className="text-red-600">{"<3"}</span>
          <audio controls loop className="rounded-2xl w-full mt-2">
            <source
              src="../public/song/song.mp3"
              type="audio/mpeg"
              className="bg-red-500"
            />
          </audio>
        </p>
        <p className="tracking-wide text-[13px] md:text-md lg:text-[15px]">
          hey <span className="text-red-600 font-bold"> cinta! </span>
          aku mau ucap selamat ulang tahun sayangkuuu, selamat kamu udah
          melewati rintangan demi rintangan selama tahun kebelakang ini, inget
          sayangg. jadiin bahan belajar setiap rintangan yang udah kamu lewatin
          itu, karna apa?? didepan sana masih banyak rintangan yang harus kamu
          hadapi yaa sayaangggg, kalo semisalkan kamu ga mampu cepett minta
          tolong ke aku sayangkuuu, aku always ready untuk membantu mu yaa
          sayangg, jangan ngerasa sendirii. umur kamu sekarang udah menginjak 18
          tahun sayangg, selamaat ulangg tahunn yuppp. mari bersama menjadi
          lebih baik untuk kita kedepan nya sayangggg.
          <br />
          <span className="text-red-600 font-bold">
            {" "}
            Happy Birth Dayyy Sayaanggggkuuuu{" <3 "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
