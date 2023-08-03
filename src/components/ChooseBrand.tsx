import { Brands } from "../constans";





const ChooseBrand = () => {
    
  return (
    <><p className="font-bold text-3xl mb-8 mx-36">Choose By Brand </p>
    <div className="   grid grid-cols-4 auto-cols-max px-20 ">
      {Brands.map(brand =>{
        return(
          <div className=" flex  rounded-xl bg-[#F5F6F6]  h-32  w-[350px] p-6 border border-transparent hover:border-black mb-5 mx-16">
          <img src={brand.Img} className="hover:scale-125 ease-in transition transform-gpu "/>
          <div className="flex flex-col gap-x-1"> 
          <p className="font-semibold  text-xl my-3  mx-4 ">{brand.title}</p>
          <p className="text-sm font-semibold text-[#4D4D4D] mx-4">{brand.Description}</p>
          </div>
      </div>
        )
      })
      }
    
    </div></>
  )
}

export default ChooseBrand