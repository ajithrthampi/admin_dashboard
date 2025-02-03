import Image from "next/image";
import profile from "../../../../public/images/profile.png";
import shape1 from "../../../../public/images/shape1.png";
import shape2 from "../../../../public/images/shape2.png";
import shape4 from "../../../../public/images/shape4.png";
import shape5 from "../../../../public/images/shape5.png";
import shape6 from "../../../../public/images/shape6.png";
import shape7 from "../../../../public/images/shape7.png";
import "../hero/hero.css";

const HeroSection = () => {
    return (
        <main className="max-w-[1600px] mx-auto pt-32 overflow-hidden ">
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        <h2 className="text-[250px] font-extrabold text-black tracking-tight uppercase mx-8">
                            Ajith R Thampi &nbsp; Ajith R Thampi &nbsp; Ajith R Thampi &nbsp; Ajith R Thampi
                        </h2>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold mb-2">
                        Hi, I'm <span className="italic">Ajith</span>!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">FrontEnd Expertise</p>

                    <div className="relative w-[350px] h-[350px] mb-6">
                        <div className="absolute lg:-left-72 -left-32 lg:-top-56 -top-32 rounded-lg z-10">
                            <Image
                                src={shape1}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[270px] w-[200px] "
                            />
                        </div>
                        <div className="absolute lg:-left-96 -left-40 lg:top-32 top-40 -translate-y-1/2  rounded-lg transform rotate-45 z-10" >
                            <Image
                                src={shape2}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[300px] w-[200px] "
                            />
                        </div>
                        <div className="absolute -bottom-32 lg:-left-72 -left-32  rounded-full z-10 -rotate-45" >
                            <Image
                                src={shape7}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[270px] w-[200px] "
                            />
                        </div>


                        <div className="absolute inset-8 rounded-[2.5rem] overflow-hidden bg-[#6366f1]">
                            <Image
                                src={profile}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover h-full"
                            />
                        </div>

                        {/*  */}

                        <div className="absolute lg:-right-72 -right-32 lg:-top-56 -top-32 rounded-lg z-10">
                            <Image
                                src={shape5}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[270px] w-[200px] "
                            />
                        </div>

                        <div className="absolute lg:-right-96 -right-40 lg:top-32 top-40 -translate-y-1/2  rounded-lg transform rotate-45 z-10" >
                            <Image
                                src={shape6}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[300px] w-[200px] "
                            />
                        </div>

                        <div className="absolute -bottom-32 lg:-right-72 -right-32  rounded-full z-10 -rotate-45" >
                            <Image
                                src={shape4}
                                alt="Profile"
                                width={1000}
                                height={1000}
                                className="object-cover lg:w-[270px] w-[200px] "
                            />
                        </div>
                    </div>
                    <button className="text-lg px-8 py-6 rounded-full bg-white border shadow-sm hover:shadow-md transition-shadow">
                        Let's Work Together!
                    </button>
                </div>

                {/* <div className="absolute inset-0 -z-20">
              <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 transform rotate-45" />

              <div className="absolute bottom-1/4 left-1/3 w-20 h-28 rounded-full bg-gradient-to-b from-blue-400 to-blue-600" />

              <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-purple-400" />

              <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-lime-300 to-lime-400" />

              <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 transform rotate-12" />

              <div className="absolute top-1/4 right-1/4 w-20 h-20">
                <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 transform rotate-45" />
              </div>
            </div> */}
            </div>

            <div className='h-screen'>

            </div>
        </main>
    )
}

export default HeroSection