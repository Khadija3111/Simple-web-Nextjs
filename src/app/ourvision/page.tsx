export default async  function OurVision(){
    await new Promise ((resolve)=> {
        setTimeout(resolve,2000)
    })
    return (
        <div className="flex justify-center h-screen">
        <div className="w-11/12 h-11/12 bg-white border-s-10 border-gray-950 mt-2 bg-gradient-to-tr from-white to-gray-200 shadow-xl flex flex-col text-center p-8">
          <h2 className="font-semibold text-slate-600 text-4xl shadow-md">
            Our Vision
          </h2>
          <p className="text-slate-600 text-lg  mt-4">
            At our core, we believe in unleashing creativity and innovation on the web. Our vision is to empower individuals and businesses to bring their ideas to life with cutting-edge technology, inspiring designs, and user-centric solutions. Together, we can shape a future where the web is a limitless canvas for imagination and growth.
          </p>
        </div>
      </div>

    )
}