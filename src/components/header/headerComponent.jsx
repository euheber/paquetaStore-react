import { useSelector } from "react-redux"


function header() {

  const cartLength = useSelector((state) => state.counter.cart.length)

  return (
    <header>
    <div className="bg-orange py-4">
      <div className="flex  items-center justify-between max-w-5xl m-auto px-3">
        <p className="text-white text-sm font-normal cursor-default">Loja de Calçados e Moda Online</p>

        <div className="flex gap-4 ">
          <div className="flex md: items-center justify-center">
            <img src="/icons/phone.svg" alt="Icone de fone" />
            <span className="hidden text-white font-montserrat ml-1 md:block cursor-default">Fale conosco</span> 
          </div>

          <div className="flex items-center justify-center">
            <img src="/icons/location.svg" alt="Icone de fone" />
            <span className="hidden text-white font-montserrat ml-1 md:block cursor-default">Encontrar uma loja física</span>
          </div>
        </div>
      </div>
    </div>

    <nav className="pt-1 max-w-5xl m-auto  px-2">
      <div className="flex justify-between items-center mt-2">
        <router-link to="/">
          <img src="/images/logo.png" alt="Logomarca Paquetá" className="w-40" />
        </router-link>

        <ul className="flex gap-5">
          <li className="relative">
            <router-link to="/listadedesejos">
              <img src="/icons/heart.svg" alt="ícone de lista de desejos" className="w-7" />
            </router-link>
            <span
              className="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal">
              1
            </span>
          </li>
          <li className="relative">
            <router-link to="/carrinho">
              <img src="/icons/bag.svg" alt="ícone de carrinho de compras" className="w-7" />
            </router-link>
            <span className="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal"> 
              {cartLength}
            </span>
          </li>
          <li>
            <img src="/icons/login.svg" alt="ícone de login" className="w-7" />
          </li>
        </ul>
      </div>

      <div className="sections mt-3" v-if="route.name == 'home'">
        <ul className="flex justify-center flex-wrap gap-6">
          <li className="hover:text-orange transition duration-500"><a href="/" className="text-sm">Novidades</a></li>
          <li className="hover:text-orange transition duration-500"><a href="/" className="text-sm">Feminino</a></li>
          <li className="hover:text-orange transition duration-500"><a href="/" className="text-sm">Masculino</a></li>
          <li className="hover:text-orange transition duration-500"><a href="/" className="text-sm">Paquetá-esportes</a></li>
          <li className="hover:text-orange transition duration-500"><a href="/" className="text-sm">Outlet</a></li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default header
