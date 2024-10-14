import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] relative h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center z-10">
        <Link
          to="/login"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-red-700 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800"
        >
          <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 me-3">
            Baru 
          </span>
          <span className="text-sm font-medium">
          SIMS PPOB Layanan Pembayaran Terbaru! Cek Selengkapnya
          </span>
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Bayar Tagihan Mudah dengan 
       

        </h1>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      
         SIMS PPOB

        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
        SIMS PPOB adalah layanan untuk pembayaran listrik, pulsa, internet, pajak, 
          PDAM, dan masih banyak lagi. Nikmati kemudahan transaksi dalam satu platform!
        </p>
        <Link to="/login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                Coba Sekarang
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
      </div>
      <div className="bg-gradient-to-b from-red-50 to-transparent dark:from-red-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}

export default HeroSection;
