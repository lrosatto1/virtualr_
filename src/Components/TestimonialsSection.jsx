import { testimonials } from "../constants"

const TestimonialsSection = () => {
    return (
        <div className="mt-10 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10">
                What people are saying
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-neutral p-6 rounded-md text-md border border-neutral-800 font-light h-full flex flex-col justify-between">
                            <p className="mb-6">{testimonial.text}</p>
                            <div className="flex items-center">
                                <img
                                    className="w-16 h-16 mr-4 rounded-full border border-neutral-300"
                                    src={testimonial.image}
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <h6 className="text-lg font-medium">{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialsSection

