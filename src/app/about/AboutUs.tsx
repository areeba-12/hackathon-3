import Image from "next/image";
import about from "../../../public/about.png"
import coffee from "../../../public/Coffee.png"
import man from "../../../public/man.png"
import student from "../../../public/Student.png"
import { IoPlayOutline } from "react-icons/io5";


export default function Aboutus() {
  return (
    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="text-white body-font">
  <div className="container mx-auto flex flex-col lg:flex-row px-5 py-12">
    {/* Image Section */}
    <div className="flex flex-col items-center  lg:flex-row lg:items-start md:space-x-4">
      <div className="flex-shrink-0">
        <Image
          className="object-cover object-center rounded-md"
          alt="hero"
          src="/about1.png"
          width={309}
          height={536}
        />
      </div>
      <div className="flex flex-col mt-4 lg:mt-0 md:ml-4 space-y-4">
        <Image
          className="object-cover object-center rounded-md"
          alt="image2"
          src="/youget.png"
          width={309}
          height={271}
        />
        <Image
          className="object-cover object-center rounded-md"
          alt="image3"
          src="/youget2.png"
          width={309}
          height={371}
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col mt-8 md:mt-0 md:ml-8">
      <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
        About us _____
      </h1>
      <p className="text-black title-font text-3xl font-bold">
        Food is an important part of a balanced Diet
      </p>
      <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
          Show More
        </button>
        <button className="ml-4 inline-flex text-black border-0 py-2 px-3 focus:outline-none rounded text-lg">
          <IoPlayOutline className="mr-2 block" />
          Watch video
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col w-[579px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = {about}
            width={1320} height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="text-white body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
          <Image
        
            src={student}
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=""
            src={coffee}
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=" flex flex-col justify-center items-center"
            src={man}
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}