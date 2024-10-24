

export default async function About() 
{
  await new Promise ((resolve)=> {
    setTimeout(resolve,2000)
})
  
    return (
      <section className="bg-white py-12 w-11/12 justify-self-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
      
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
              <h2 className=" text-slate-600 text-6xl font-bold">About Us</h2>
              <p className="mt-4 text-gray-600">
                Welcome to our website! We are dedicated to providing the best services and products to our customers. Our team of professionals is passionate about delivering high-quality solutions that meet your needs and exceed your expectations.
              </p>
              <p className="mt-4 text-gray-600">
                With years of experience in the industry, we have built a reputation for excellence and innovation. Our commitment to continuous improvement and customer satisfaction drives us to constantly evolve and adapt to the changing market demands.
              </p>
              <p className="mt-4 text-gray-600">
                We believe in the power of collaboration and teamwork. Our diverse team brings together a wealth of knowledge and expertise, allowing us to tackle complex challenges and deliver outstanding results.
              </p>
              <p className="mt-4 text-gray-600">
                Thank you for choosing us. We look forward to working with you and helping you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  