"use client";
import IndServicesHeader from "@/components/india/IndServicesHeader";
import IndAllServices from "@/components/india/IndAllServices";
import MovingTextBanner from "@/components/MovingTextBanner";
import Icons from "@/components/ui/Icon";
import Image from "next/image";

const Content = () => {
  const services = [
    {
      id: 1,
      icon: "ContentInd",
      title: "PHOTO & VIDEO PRODUCTION",
      description: "High-quality video and photography solutions to bring your brand story to life visually.",
      projects: [
        { image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80" },
      ],
      projectTitle: "PHOTO & VIDEO PRODUCTION PROJECTS",
      imageLayout: "horizontal"
    },
    {
      id: 2,
      icon: "DesignInd",
      title: "VISUAL CONTENT DESIGN",
      description: "Strategic visuals and storytelling to engage audiences across platforms with impactful design.",
      projects: [
        { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80" },
      ],
      projectTitle: "VISUAL CONTENT DESIGN PROJECTS",
      imageLayout: "horizontal"
    },
    {
      id: 3,
      icon: "DevelopmentInd",
      title: "AUDIO & MOTION GRAPHICS",
      description: "Dynamic audio and motion design to elevate digital experiences and captivate your audience.",
      projects: [
        { image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80" },
      ],
      projectTitle: "AUDIO & MOTION GRAPHICS PROJECTS",
      imageLayout: "grouped"
    },
    {
      id: 4,
      icon: "MarketingInd",
      title: "BLOG POSTS & ARTICLES",
      description: "SEO-optimized blog writing and professional content tailored for traffic and engagement.",
      projects: [
        { image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80" },
        { image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" },
      ],
      projectTitle: "BLOG POSTS & ARTICLES PROJECTS",
      imageLayout: "horizontal"
    },
  ];

  return (
    <>
      <IndServicesHeader />
      <IndAllServices activeService="Content" />
      
      <div className="container mx-auto lg:mt-24 mt-8 xl:px-10 md:px-5 px-3 lg:pb-20 pb-10">
        {/* Header Section - Mobile Responsive */}
        <div className="lg:pb-10 pb-6">
          <p className="font-avalors font-normal xl:text-[32px] sm:text-2xl text-lg xl:leading-6 align-middle text-primary ">
            OUR SERVICES
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 sm:gap-8">
            <h2 className="font-avalors text-gray-400 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-normal leading-[1.2]">
              DISCOVER OUR<br />
              DIGITAL SOLUTIONS
            </h2>
            <p className="text-gray-200 font-montserrat text-[13px] sm:text-[14px] md:text-[15px] max-w-[450px] leading-[1.6] sm:leading-[1.7]">
              Our services cover everything from website design and social media creatives to complete branding solutions. We combine creativity and strategy to deliver tailored results that help your business grow and stand out.
            </p>
          </div>
        </div>

        {/* Services Container - Mobile Responsive */}
        <div className="border-[2px] sm:border-[2.5px] border-primary/25 rounded-[24px] sm:rounded-[36px] p-3 sm:p-5 md:p-6 space-y-4 sm:space-y-5">
          {services.map((service) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {/* Left Side - Service Info */}
              <div className="bg-[#F4EFFF] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Icons name={service.icon} width="28" height="28" className="sm:w-[34px] sm:h-[34px]" color="#8752FF" />
                      <h3 className="font-montserrat font-bold text-gray-400 text-[14px] sm:text-[16px] md:text-[17px] leading-tight pt-0.5 sm:pt-1">
                        {service.title}
                      </h3>
                    </div>
                    <div className="relative w-fit flex-shrink-0">
                      <div className="relative w-[105px] sm:w-[115px] h-[34px] sm:h-[38px] bg-white rounded-[20px] sm:rounded-[22px] flex items-center justify-between px-2.5 sm:px-3 cursor-pointer group hover:shadow-md transition-all border border-gray-300">
                        <span className="text-gray-400 font-semibold font-montserrat text-[11px] sm:text-[12px]">Learn more</span>
                        <div className="w-[24px] sm:w-[28px] h-[24px] sm:h-[28px] bg-transparent rounded-full flex items-center justify-center transition border border-gray-300">
                          <svg width="10" height="10" className="sm:w-[11px] sm:h-[11px]" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-montserrat text-[12px] sm:text-[13px] md:text-[13.5px] leading-[1.5] sm:leading-[1.6] mb-4 sm:mb-6">{service.description}</p>
                </div>
                <div className="text-center pt-4 sm:pt-6">
                  <p className="text-gray-400 font-montserrat font-bold text-[13px] sm:text-[14px] md:text-[15px] uppercase tracking-wide">STARTS FROM TODAY</p>
                </div>
              </div>

              {/* Right Side - Projects */}
              <div className="bg-[#F4EFFF] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8 lg:p-10">
                <h4 className="font-montserrat font-bold text-gray-400 text-[12px] sm:text-[13px] md:text-[14px] uppercase tracking-wide mb-4 sm:mb-5">{service.projectTitle}</h4>
                
                {service.imageLayout === "horizontal" && (
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {service.projects.map((project, idx) => (
                      <div key={idx} className="relative rounded-[12px] sm:rounded-[18px] overflow-hidden group cursor-pointer aspect-[4/3] border border-gray-300/50 sm:border-2">
                        <Image src={project.image} alt={`${service.title} project ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1.5 sm:gap-2">
                          <div className="w-5 sm:w-7 h-5 sm:h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg width="8" height="8" className="sm:w-[11px] sm:h-[11px]" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#8752FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-white font-montserrat text-[9px] sm:text-[10.5px] font-medium">open projects</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {service.imageLayout === "grouped" && (
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {[0, 1].map((groupIdx) => (
                      <div key={groupIdx} className="relative rounded-[12px] sm:rounded-[18px] overflow-hidden border border-gray-300/50 sm:border-2">
                        <div className="grid grid-cols-3 gap-0">
                          {service.projects.slice(0, 3).map((project, idx) => (
                            <div key={idx} className="relative group cursor-pointer aspect-square">
                              <Image src={project.image} alt={`${service.title} project ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-0">
                          {service.projects.slice(3, 6).map((project, idx) => (
                            <div key={idx + 3} className="relative group cursor-pointer aspect-square">
                              <Image src={project.image} alt={`${service.title} project ${idx + 4}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            </div>
                          ))}
                        </div>
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex items-center gap-1.5 sm:gap-2">
                          <div className="w-5 sm:w-7 h-5 sm:h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <svg width="8" height="8" className="sm:w-[11px] sm:h-[11px]" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#8752FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-white font-montserrat text-[9px] sm:text-[10.5px] font-medium">open projects</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <MovingTextBanner />
    </>
  );
};

export default Content;
