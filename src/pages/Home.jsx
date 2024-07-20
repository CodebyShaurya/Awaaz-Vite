import Nav from "../Components/Nav";
import Mic from "../assets/Mic.png";
import Engaging from "../assets/engaging_interface.png";
import Progress from "../assets/progress_tracking.png";
import Phonic from "../assets/holistic_phonic_training.png";
import Motor from "../assets/motor_based.png";
import Visual from "../assets/visual_auditory_stimulation.png";
import Learning from "../assets/multimodal_learning.png";
import RealTIme from "../assets/RealTIme.png";
import Dimensional from "../assets/threeDimensional.png";
import Illustration from "../assets/Illustration.png";
import Contact from "../assets/Contact Us.png";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-2">
        <div className="flex flex-col pl-20 justify-center">
          <div>
            <div className="text-6xl text-left flex flex-col gap-4 font-spacegrotesksemibold">
              <div>
                Speak.<span className="text-[#2D8CFF]"> Learn</span>. Thrive
              </div>
              <div>Bridging the gap with</div>
              <div>every word</div>
            </div>

            <div className="text-xl font-spacegroteskregular my-10">
              Our goal is to empower individuals with speech challenges. Unlock
              your potential through personalized speech training.
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex justify-center">
              <button className="border rounded-md font-spacegroteskmedium flex items-center justify-center px-8 py-4 bg-[#89D85D] text-black hover:bg-opacity-70 border-black">
                <p>Get Started</p>
              </button>
            </div>
            <div className="flex justify-center">
              <button className="border flex font-spacegroteskmedium items-center justify-center rounded-md px-8 py-4 border-black hover:bg-black hover:text-white">
                <p>Browse Features</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={Mic} />
        </div>
      </div>

      <div>
        <div className="border-y-4 mt-36 font-spacegrotesksemibold border-black font-medium text-4xl w-fit ml-20 text-center">
          Features
        </div>

        <div className="">
          <div className="flex flex-wrap items-center justify-center gap-8 p-10">
            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl h-64 w-96">
              <img src={Engaging} alt="arrows" className="h-24" />
              <div className="font-spacegrotesksemibold text-2xl text-white mb-2">
                Engaging Interfacing
              </div>
              <div className="text-white font-spacegrotesklight">
                Interactive sessions for an immersive learning experience.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl h-64 w-96">
              <img src={Progress} alt="" className="mb-4 h-20" />
              <div className="font-spacegrotesksemibold mb-2 text-2xl">
                Progress Tracking
              </div>
              <div className=" font-spacegrotesklight">
                Track success, analyze and celebrate milestone.
              </div>
            </div>

            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl h-64 w-96">
              <img src={Phonic} alt="" className="h-24" />
              <div className="font-spacegrotesksemibold text-white mb-2 text-2xl">
                Holistic Phonics Training
              </div>
              <div className="text-white font-spacegrotesklight">
                The software covers the sounds of Hindi in isolation and within
                different words across all word positions.
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-2xl h-64 w-96">
              <img src={Motor} alt="" className="mb-4 h-20" />
              <div className="font-spacegrotesksemibold mb-2 text-2xl">
                Motor-Based Intervention
              </div>
              <div className=" font-spacegrotesklight">
                Incorporates both perceptual and production training.
              </div>
            </div>

            <div className="bg-[#2D8CFF] rounded-3xl p-6 shadow-2xl h-64 w-96">
              <img src={Visual} alt="" className="h-24" />
              <div className="font-spacegrotesksemibold text-white mb-2 text-2xl">
                Visual, Auditory Stimulation
              </div>
              <div className="text-white font-spacegrotesklight">
                Emphasize the importance of both senses in the learning process
                for individuals with speech disorders.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-2xl w-96 h-64">
              <img src={Learning} alt="" className="mb-4 h-20" />
              <div className="font-spacegrotesksemibold mb-2 text-2xl">
                Multimodal Learning
              </div>
              <div className=" font-spacegrotesklight">
                Multimodal approach with visual & cues and 3-Dimensional
                animations for effective learning.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-y-4 line p-1 border-black font-spacegrotesksemibold text-4xl w-fit ml-20 mt-24">
          Strengths
        </div>

        <div>
          <div className="grid grid-cols-2">
            <div className="ml-20 flex flex-col gap-8 items-center justify-center">
              <div className="text-4xl font-spacegrotesksemibold">
                Real-Time Speech Detection and Weekly Test Analysis
              </div>
              <div className="font-spacegroteskregular text-xl">
                Unlock the potential of your voice through cutting-edge
                technology. Our platform not only hears your words but guides
                you towards eloquence with precision.
              </div>
            </div>
            <div className="flex justify-center">
              <img src={RealTIme} alt="" className="h-[400px]" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center">
              <img src={Dimensional} alt="" className="h-[400px]" />
            </div>
            <div className="ml-20 flex flex-col gap-8 items-center justify-center pr-8">
              <div className="text-4xl font-spacegrotesksemibold">
                Real-Time Speech Detection and Weekly Test Analysis
              </div>
              <div className="font-spacegroteskregular text-xl">
                Unlock the potential of your voice through cutting-edge
                technology. Our platform not only hears your words but guides
                you towards eloquence with precision.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#F3F3F3] my-32 mx-4 md:mx-32 rounded-3xl">
          <div className="grid lg:grid-cols-2">
            <div className="text-center p-10 flex flex-col items-start justify-center gap-6">
              <div className="text-4xl font-spacegroteskmedium">
                Let's Make things happen
              </div>
              <div className="font-spacegroteskregular text-lg text-start">
                To get started and gain some insights and knowledge about speech 
                disorders, how to cure them and related stuff go to the articles
                section.
              </div>
              <button className="p-4 bg-[#89D85D] rounded-md font-spacegroteskmedium hover:bg-opacity-90">
                Read Articles →
              </button>
            </div>
            <div className="flex justify-center lg:p-4 order-1 ">
              <img src={Illustration} alt="" className="w-[300px] h-[320px]" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-y-4 p-1 w-fit border-black font-spacegroteskmedium text-4xl sm:ml-20 my-16 text-center ">
          Contact Us
        </div>

        <div>
          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center">
              <img src={Contact} alt="" className="lg:h-4/5" />
            </div>

            <div>
              <div className="p-8">
                <div className="flex items-center justify-center">

                <div className="font-spacegroteskmedium text-4xl">
                  Connect With Us
                </div>
                </div>
                <div>
                  <div className="lg:flex flex-row justify-between ">
                    <input
                      className=" px-4 py-3 outline-none w-full font-spacegrotesksemibold m-3 rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="First Name"
                      type="text"
                    />

                    <input
                      className=" px-4 py-3 w-full outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className=" px-4 py-3 outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Email"
                      type="text"
                    />
                    <input
                      className=" px-4 py-3 outline-none m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Phone Number"
                      type="text"
                    />

                    <input
                      className=" px-4 py-3 outline-none m-3  font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                      name="text"
                      placeholder="Message"
                      type="text"
                    />
                    <button className="bg-[#89D85D] border-[#89D85D] px-4 py-3 m-3 font-spacegrotesksemibold rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95]">
                      Send the message →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-200">
        <div className="container px-4 mx-auto">
          <div className="pt-24 pb-11 mx-auto max-w-4xl">
            <a className="block md:mx-auto mb-5 max-w-max text-center" href="#">
              <div className="font-spacegroteskbold text-5xl text-left">Awaaz</div>
            </a>
            <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/terms"
                >
                  Terms
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/privacy"
                >
                  Privacy
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href=""
                >
                  Contact Us
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/careers"
                >
                  Careers
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
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
          <p className="py-10 md:pb-20 text-md text-gray-400 font-spacegroteskmedium text-center">
            Copyright Awaaz 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
