function shoeCard({shoe}) {
  return (
    <div className="flex flex-col  border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 h-80 relative">
      <div className="w-44 h-90 flex flex-col justify-center items-center m-auto h-72">
        <button className="ml-auto mt-1"></button>

        <p className="text-xs text-shadeblack mb-1 mr-auto font-montserrat"></p>

        <span className="text-xs mr-auto mb-3 font-montserrat"></span>
      </div>
    </div>
  )
}

export default shoeCard
