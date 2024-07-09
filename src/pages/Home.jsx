import Nav from '../Components/Nav';
import Mic from '../assets/Mic.png';
import Engaging from '../assets/engaging_interface.png';
import Progress from '../assets/progress_tracking.png';
import Phonic from '../assets/holistic_phonic_training.png';
import Motor from '../assets/motor_based.png';
import Visual from '../assets/visual_auditory_stimulation.png';
import Learning from '../assets/multimodal_learning.png';
import RealTIme from '../assets/RealTIme.png';
import Dimensional from '../assets/threeDimensional.png'
import Illustration from '../assets/Illustration.png';
import Contact from '../assets/Contact Us.png';


import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'




export default function Home() {
  return (
    <div>
        <Nav/>
        <div className='grid xl:grid-cols-2 px-6 text-center mb-12 ' >
            <div className='md:px-24'>
                <div className='text-5xl font-bold md:m-4 font-mono'>
                    Speak. <span className='text-[#2D8CFF]'>Learn</span> .Thrive<br/>
                    <div className='mt-4'>
                    Bridging the gap with every word
                    </div>

                </div>

                <div className='text-xl my-12'>
                    Our goal is to empower individuals with speech challenges. Unlock your potential through personalized speech training.

                </div>

                <div className='grid grid-cols-2'>
                    <div className='flex justify-center'>
                    <button className='border rounded-md p-2 bg-lime-500 text-white hover:bg-white hover:text-black sm:w-40 sm:h-12'>Get Started</button>
                    </div>
                    <div className='flex justify-center'>
                    <button className='border rounded-md p-2 border-black hover:bg-black hover:text-white sm:w-40 sm:h-12'>Browse Features</button>
                    </div>

                </div>


            </div>

            <div className='flex md:justify-center md:w-full w-dvw'>
                <img src={Mic}/>
            </div>

        </div>

        <div>
            <div className='border-y-2 border-black font-medium text-4xl w-40 ml-20 text-center'>
                Features
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-20 p-12'>
                <div className='bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:w-80 min-w-60 max-w-96'>
                    <img src={Engaging} alt='' />
                    <div className='font-semibold text-white mb-2'>
                        Engaging Interfacing
                    </div>
                    <div className='text-white font-thin'>
                    Interactive sessions for an
                    immersive learning experience.
                    </div>
                </div>

                <div className='bg-white rounded-3xl p-6 shadow-2xl lg:w-80  min-w-60 max-w-96'>
                    <img src={Progress} alt='' className='mb-4'/>
                    <div className='font-semibold mb-2'>
                        Progress Tracking
                    </div>
                    <div className=' font-thin'>
                    Track success, analyze and 
                    celebrate milestone. 
                    </div>
                </div>

                <div className='bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:w-80  min-w-60 max-w-96'>
                    <img src={Phonic} alt='' />
                    <div className='font-semibold text-white mb-2'>
                        Holistic Phonics Training
                    </div>
                    <div className='text-white font-thin'>
                    The software covers the sounds of
                    Hindi in isolation and within different 
                    words across all word positions.
                    </div>
                </div>

                <div className='bg-white rounded-3xl p-6 shadow-2xl lg:w-80 min-w-60 max-w-96'>
                    <img src={Motor} alt='' className='mb-4'/>
                    <div className='font-semibold mb-2'>
                        Motor-Based Intervention
                    </div>
                    <div className=' font-thin'>
                    Incorporates both perceptual and 
                    production training.
                    </div>
                </div>


                <div className='bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl lg:w-80 min-w-60 max-w-96'>
                    <img src={Visual} alt='' />
                    <div className='font-semibold text-white mb-2'>
                            Visual, Auditory Stimulation
                    </div>
                    <div className='text-white font-thin'>
                    Emphasize the importance of both
                    senses in the learning process for
                    individuals with speech disorders.
                    </div>
                </div>

                <div className='bg-white rounded-lg p-6 shadow-2xl lg:w-80 min-w-60 max-w-96'>
                    <img src={Learning} alt='' className='mb-4'/>
                    <div className='font-semibold mb-2'>
                        Multimodal Learning
                    </div>
                    <div className=' font-thin'>
                    Multimodal approach with visual & 
                    cues and 3-Dimensional animations
                    for effective learning. 
                    </div>
                </div>



            </div>
        </div>



        <div>
            <div className='border-y-2 border-black font-medium text-4xl w-40 ml-20 my-16 text-center '>
                Strengths
            </div>

            <div>
                <div className='grid lg:grid-cols-2 h-[700px] lg:h-[500px]'>
                    <div className='md:px-24 h-min'>
                        <div className='text-3xl font-bold m-10'>
                            Real-Time Speech Detection
                            and Weekly Test Analysis
                        </div>
                        <div className='mx-10'>
                                Unlock the potential of your voice through
                                cutting-edge technology. Our platform not
                                only hears your words but guides you towards
                                eloquence with precision.
                        </div>

                    </div>
                    <div className='flex justify-center h-3/5'>
                        <img src={RealTIme} alt='' className=' mx-4 lg:my-0 mt-5 '/>
                    </div>

                </div>

                <div className='grid lg:grid-cols-2'>
                <div className='flex justify-center'>
                        <img src={Dimensional} alt='' className='mx-4 h-4/5 lg:h-full'/>
                    </div>
                    <div className='md:px-24'>
                        <div className='text-3xl font-bold m-10'>
                            Real-Time Speech Detection
                            and Weekly Test Analysis
                        </div>
                        <div className='mx-10'>
                                Unlock the potential of your voice through
                                cutting-edge technology. Our platform not
                                only hears your words but guides you towards
                                eloquence with precision.
                        </div>

                    </div>
                    

                </div>
            </div>

            
        </div>


        <div>
            <div className='bg-[#F3F3F3] my-32 mx-4 md:mx-32 rounded-3xl'> 
                <div className='grid lg:grid-cols-2'>
                    <div className='text-center m-4 sm:m-12 lg:m-28'>
                        <div className='text-3xl  font-mono'>
                            Let's Make things happen
                        </div>
                        <div className='font-thin m-8'>
                        To get started and gain some insights and knowledge about speech disorders, how to cure them and related stuff go to the articles section.
                        </div>
                        <button className='p-4 bg-[#89D85D] rounded-md'>
                            Read Articles →
                        </button>
                    </div>
                    <div className='flex justify-center lg:p-4 order-1 '>
                        <img src={Illustration} alt=''/>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className='border-y-2 border-black font-medium text-4xl w-60 sm:ml-20 my-16 text-center '>
                Contact Us
            </div>

            <div>
                <div className='grid lg:grid-cols-2'>

                    <div className='flex justify-center'>
                        <img src={Contact} alt='' className='lg:h-4/5'/>
                    </div>

                    <div>
                        <div className='p-8'>
                            <div className='font-mono text-3xl font-semibold'>
                                Connect With Us
                            </div>
                            <div>
                                <div className='lg:flex flex-row justify-between '>
                                        <input className=" px-4 py-3 outline-none sm:w-64 font-semibold m-3 font-mono rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                                name="text"
                                                placeholder="First Name"
                                                type="text"
                                                />
                                        
                                        <input className=" px-4 py-3 sm:w-64 outline-none m-3 font-semibold font-mono rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                                name="text"
                                                placeholder="Last Name"
                                                type="text"
                                                />

                                        
                                </div>
                                <div className='flex flex-col'>

                                <input className=" px-4 py-3 outline-none m-3 font-semibold font-mono rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                                name="text"
                                                placeholder="Email"
                                                type="text"
                                                />
                                <input className=" px-4 py-3 outline-none m-3 font-semibold font-mono rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                                name="text"
                                                placeholder="Phone Number"
                                                type="text"
                                                />
                                
                                <input className=" px-4 py-3 outline-none m-3  font-semibold font-mono rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                                name="text"
                                                placeholder="Message"
                                                type="text"
                                                />
                                </div>
                                    
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <footer className="bg-white">
        <div className="container px-4 mx-auto">
            <div className="pt-24 pb-11 mx-auto max-w-4xl">
            <a
                className="block md:mx-auto mb-5 max-w-max text-center"
                href="#"
            >
               <div className='font-bold text-5xl  text-left'>
                    Awaaz
                </div>
            </a>
            <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
                <div className="w-full md:w-auto p-3 md:px-6">
                <a
                    className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                    href="/terms"
                >
                    Terms
                </a>
                </div>
                <div className="w-full md:w-auto p-3 md:px-6">
                <a
                    className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                    href="/privacy"
                >
                    Privacy
                </a>
                </div>
                <div className="w-full md:w-auto p-3 md:px-6">
                <a
                    className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                    href=""
                >
                    Contact Us
                </a>
                </div>
                <div className="w-full md:w-auto p-3 md:px-6">
                <a
                    className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                    href="/careers"
                >
                    Careers
                </a>
                </div>
                <div className="w-full md:w-auto p-3 md:px-6">
                <a
                    className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                    href="/pricing"
                >
                    Pricing
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="border-b border-gray-100" />
        <div className="container px-4 mx-auto">
            <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
                    Copyright Awaaz 2024
            </p>
        </div>
        </footer>

    </div>
  )
}
