import React from "react";
import Program1 from "../../assets/img/Program/program1.jpg";
import Program2 from "../../assets/img/Program/program2.webp";
import Program3 from "../../assets/img/Program/program3.webp";

const ProgramContent = () => {
  return (
    <div className="bg-[#DAD7CD]">
      <div className="py-16">
        <div className="flex justify-center items-center md:flex-row flex-col gap-10 ">
          <img
            src={Program1}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Mall Sampah Box Penukaran Sampah
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-justify pt-4">
              Mallsampah meluncurkan Ms Box, inovasi RVM tanpa listrik yang
              bekerja sama dengan Kopi Soe di Makassar pada 7 Desember 2021.
              Menggunakan aplikasi Mallsampah, Ms Box mengonversi botol plastik
              menjadi Ms Point untuk ditukar dengan voucher. Ini mendukung
              ekonomi sirkuler dengan memastikan botol plastik didaur ulang.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:flex-row-reverse flex-col gap-10 py-10 ">
          <img
            src={Program2}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Mall Sampah dan Gojek Indonesia{" "}
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-justify pt-4">
            Mallsampah dan Gojek, dua startup Indonesia, meluncurkan program 10 Ton Bottle Recycling Campaign pada 20 Maret 2021 di Makassar. Program ini mengajak pengguna GoFood untuk mendaur ulang botol plastik, di mana setiap pesanan GoFood mendaur ulang 10 botol plastik. Mereka juga bekerja sama dengan merchant GoFood untuk memilah dan mengumpulkan sampah plastik. Targetnya adalah mendaur ulang 10 ton sampah plastik dari wilayah pesisir Sulawesi. Upaya ini menggunakan aplikasi Mallsampah dan Gojek untuk memfasilitasi proses daur ulang.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:flex-row flex-col gap-10 ">
          <img
            src={Program3}
            alt=""
            className="xl:w-[30em] lg:w-[28em] w-[21em] object-cover xl:h-[25em] lg:h-[23em] h-[16em] rounded-xl"
          />
          <div className="xl:w-[30em] lg:w-[28em] w-[21em]">
            <h1 className="font-kanit font-semibold text-[#3A5A40] xl:text-5xl lg:text-4xl md:text-3xl text-2xl ">
              Sinergi BUMN dan Green Tech{" "}
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-justify pt-4">
              Pada 22 September 2021, PT Industri Kapal Indonesia (IKI) bersama
              Mallsampah dan Guna Olah Limbah meluncurkan gerakan
              #RecycleYourMask untuk mengatasi limbah masker. Didukung oleh
              beberapa BUMN dan organisasi pemuda, gerakan ini mengajak karyawan
              mengumpulkan masker bekas yang akan diolah menjadi bijih plastik.
              Pada 29 Oktober 2021, bertepatan dengan HUT IKI ke-44, masker yang
              terkumpul dikirim ke Bandung untuk didaur ulang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
