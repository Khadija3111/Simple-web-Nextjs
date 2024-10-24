

export default async function Home() {
  await new Promise ((resolve)=> {
    setTimeout(resolve,2000)
})
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-11/12 bg-white border-s-10 border-gray-950 mt-2 bg-gradient-to-tr from-white to-gray-200 shadow-xl flex justify-center items-center">
        <p className="font-semibold text-slate-600 text-6xl text-center shadow-md">
          {/* Become Creadible with Us */}
          UNLEASH YOUR <br />
          CREATIVITY ON <br />
          THE WEB
        </p>
      </div>
    </div>
  );
}
