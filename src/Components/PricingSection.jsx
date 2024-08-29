import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
const PricingSection = () => {
  return (
   <div className="mt-20">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10
    tracking-wider">
        Pricing
        </h2>
        <div className="flex flex-wrap">
        {pricingOptions.map((option, index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                    <p className="text-4x mb-8">
                        {option.title}
                        {option.title === "Pro" && (
                            <span className="bg-gradient-to-r from-orange-500 to-red-400 
                            text-transparent bg-clip-text text-xl mb-4 ml-2">
                                (Most Popular)
                                </span>
                            
                        )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{option.price}</span>
                            <span className="text-2xl text-neutral-500 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index)=>(
                                <li key={index} className="flex items-center mb-2 mt-4">
                                    <CheckCircle2 className="w-5 h-5 mr-2"/>
                                    <span className="ml-1">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center 
                        w-full py-3 px-6 text-xl font-medium text-white bg-neutral-800
                        rounded-xl hover:bg-orange-800 border border-orange-800 rounded-lg transition duration-300">Suscribe</a>
                </div>
            </div>
        ))}
        </div>
   </div>
  )
}

export default PricingSection