import React from "react";
import image1 from "./../public/car.png"
const Part = () => {
    const sections_for_ourprojects = [
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        },
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        },
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        }
    ]
    const section_for_upcomingprojects=[
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        }
    ]

    return(
        <div className="bg-black min-h-screen w-full">
            <h1 className="text-blue-400 pt-[100px] pl-[100px] text-[40px] font-bold" style={{ fontFamily: 'Airstrike' }}>OUR PROJECTTS</h1>
            <div>
                {
                    sections_for_ourprojects.map((sec,i) =>(
                        <div key = {i} className="flex items-start gap-[300px] flex-row justify-center mt-[100px] ">
                            {/* images */}
                            <div className="flex ml-[100px]">
                                    <div  className="hexagon w-[250px] h-[250px] overflow-hidden" >
                                        <img className="w-full h-full object-cover" src={sec.photo1} alt="" />
                                    </div>  
                                    <div  className="hexagon w-[200px] h-[200px] overflow-hidden mt-[180px] ml-[-30px]" >
                                        <img className="w-full h-full object-cover" src={sec.photo2} alt="" />
                                    </div>  
                                    <div  className="hexagon w-[150px] h-[150px] overflow-hidden mt-[300px] ml-[-370px]" >
                                        <img className="w-full h-full object-cover" src={sec.photo3} alt="" />
                                    </div>  
                            </div>
                            <div>
                                <h1 className="text-red-500 text-[25px] font-semibold">{sec.title}</h1>
                                <p  className="text-white pr-[100px] mt-[40px] text-[25px] font-semibold">{sec.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/*this one is for upcoming project */}
            <h1 className="text-blue-400 pt-[100px] pl-[100px] text-[40px] font-bold " style={{ fontFamily: 'Airstrike' }}>UPCOMING PROJECTS</h1>
            <div>
                {
                    section_for_upcomingprojects.map((sec,i) =>(
                        <div key = {i} className="flex items-start gap-[300px] flex-row justify-center mt-[100px] ">
                            {/* images */}
                            <div className="flex ml-[100px]">
                                    <div  className="hexagon w-[250px] h-[250px] overflow-hidden" >
                                        <img className="w-full h-full object-cover" src={sec.photo1} alt="" />
                                    </div>  
                                    <div  className="hexagon w-[200px] h-[200px] overflow-hidden mt-[180px] ml-[-30px]" >
                                        <img className="w-full h-full object-cover" src={sec.photo2} alt="" />
                                    </div>  
                                    <div  className="hexagon w-[150px] h-[150px] overflow-hidden mt-[300px] ml-[-370px]" >
                                        <img className="w-full h-full object-cover" src={sec.photo3} alt="" />
                                    </div>  
                            </div>
                            <div>
                                <h1 className="text-red-500 text-[25px] font-semibold">{sec.title}</h1>
                                <p  className="text-white pr-[100px] mt-[40px] text-[25px] font-semibold">{sec.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h1 className="text-blue-400 pt-[100px] pl-[100px] text-[40px] font-bold " style={{ fontFamily: 'Airstrike' }}>Achivements</h1>
            <div className="flex justify-between px-[150px] pb-[300px]">
                <div className="">
                    <div className="flex flex-col items-center mt-[50px]">
                        <h1 className="text-white font-extrabold text-[35px]" >13</h1>
                        <h6 className="text-white font-bold text-[10px] pt-1" >Rank</h6>
                        <div className="bg-gray-500 w-fit px-[40px] py-[5px] rounded-[8px] text-center mt-[40px]">SAE ADC </div>
                    </div> 
                </div>
                <div className="">
                    <div className="flex flex-col items-center mt-[50px]">
                        <h1 className="text-white font-extrabold text-[35px]" >2</h1>
                        <h6 className="text-white font-bold text-[10px] pt-1" >Rank</h6>
                        <div className="bg-gray-500 w-fit px-[40px] py-[5px] rounded-[8px] text-center mt-[40px]">Agrone Cognizance 2022</div>
                    </div> 
                </div>
                <div className="">
                    <div className="flex flex-col items-center mt-[50px]">
                        <h1 className="text-white font-extrabold text-[35px]" >56</h1>
                        <h6 className="text-white font-bold text-[10px] pt-1" >Rank</h6>
                        <div className="bg-gray-500 w-fit px-[40px] py-[5px] rounded-[8px] text-center mt-[40px]">SAE Aerothon 2021</div>
                    </div> 
                </div>
            </div>


        </div>
    )
}

export default Part