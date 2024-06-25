"use client"
import { Button } from '@/components/ui/button';
import { LoginLink, LogoutLink, useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs';
import React, { useEffect } from 'react';

function Hero() {
  const {user} = useKindeBrowserClient();
  useEffect(()=>{
    console.log(user);
  }, [user])

  return (
    <section> {/* Menggunakan warna latar belakang homepage */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        SEA Salon
        </h2>
          <p className="mt-2 sm:text-2xl text-gray-700 font-cinzel">
            Beauty and Elegance
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Salon"
              src="/salon.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                eius quidem quam repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
              </p>
        
              <LoginLink><Button className='mt-5'> Get Started </Button></LoginLink>
            </article>
          </div>
        </div>
      </div>

      <div className="bg-homepage py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center text-primary">Our Services</h2>
          <p className="mt-2 text-gray-1000 text-center">We offer a wide range of top-quality services designed to cater to all of your beauty needs.</p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-center ">Hair Cut and Styling</h3>
              <img src="/layanan1.jpeg" alt="Hair Cut and Styling" className="w-full h-100 object-cover rounded-t-lg mt-5" />
              <p className="mt-2 text-gray-600">Deskripsi singkat tentang layanan 1.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md items-center">
              <h3 className="text-2xl font-bold  text-center">Manicure and Pedicure</h3>
              <img src="/layanan2.jpeg" alt="Hair Cut and Styling" className="w-full h-100 object-cover rounded-t-lg mt-5" />
              <p className="mt-2 text-gray-600">Deskripsi singkat tentang layanan 2.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-center">Facial Care</h3>
              <img src="/layanan3.jpeg" alt="Hair Cut and Styling" className="w-full h-100 object-cover rounded-t-lg mt-5" />
              <p className="mt-2 text-gray-600">Deskripsi singkat tentang layanan 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
