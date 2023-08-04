function header() {
  return (
    <header>
  <div className="bg-orange py-4">
      <div className="flex  items-center justify-between max-w-5xl m-auto px-3">
        <p className="text-white text-sm font-normal">Loja de Calçados e Moda Online</p>

        <div className="flex gap-4 ">
          <div className="flex md: items-center justify-center">
            
            <span className="hidden text-white font-montserrat ml-1 md:block">Fale conosco</span> 
          </div>

          <div className="flex items-center justify-center">
            
            <span className="hidden text-white font-montserrat ml-1 md:block">Encontrar uma loja física</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default header
