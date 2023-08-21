import { register } from "swiper/element/bundle"
import ButtonSlot from "../components/slots/buttonSlot"
import ImageSlot from "../components/slots/imageSlot"
import ShoeSize from "../components/slots/shoeSizeSlot"
import ShoeCard from "../components/shoes/card"
import { useEffect, useState } from "react"

register()

const mountSwiper = () => {
  const swiperEl = document.querySelector("swiper-container")

  const swiperParams = {
    breakpoints: {
      slidesPerView: "1",
      1024: {
        slidesPerView: "4",
      },
      768: {
        slidesPerView: "3",
      },
    },
    on: {
      init() {
        // ...
      },
    },
  }

  Object.assign(swiperEl, swiperParams)

  // and now initialize it
  swiperEl.initialize()
}

const fetchData = async (link) => {
  try {
    const conectApi = await fetch(link)
    const shoes = await conectApi.json()
    return shoes
  } catch (e) {
    console.log("Aconteceu um erro durante o fetch de dados:", e)
    return []
  }
}

function Home() {
  const [shoeList, setShoeList] = useState([])

  useEffect(() => {
    fetchData("https://api.brchallenges.com/api/paqueta/shoes").then((shoes) =>
      setShoeList(shoes)
    )

    mountSwiper()
  }, [])

  const shoeSwiperList = shoeList.map((shoe, index) => {
    return (
      <swiper-slide key={index}>
        <ShoeCard shoe={shoe} />
      </swiper-slide>
    )
  })

  return (
    <>
      <div className="banner-hero h-40 mt-5 md:h-[250px] md:pt-10 lg:h-[500px] lg:pt-32">
        <div className="max-w-6xl m-auto">
          <div className="w-40 md:mr-5 lg:w-[350px] ml-auto lg:mr-0">
            <h1 className="text-shadeblack font-bold text-xl lg:text-5xl">
              Tênis Casual
            </h1>
            <span className="text-orange text-xl font-medium">Masculino</span>

            <div className="price">
              <span className="font-medium text-shadeblack text-xs">
                A partir de
              </span>
              <p className="text-xl text-shadeblack font-bold lg:text-2xl">
                R$ 79,99
              </p>

              <ButtonSlot className="w-40 hover:text-white transition duration-500">
                Aproveite
              </ButtonSlot>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-orange p-4">
        <ul className="m-auto max-w-5xl grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:gap-2">
          <li className="flex gap-3 items-center">
            <img src="/icons/creditcard.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-normal text-white text-xs">
                Pague em até 10x
              </span>
              <p className="font-bold text-white text-xs">Sem juros*</p>
            </div>
          </li>

          <li className="flex gap-3 items-center">
            <img src="/icons/location.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-normal text-white text-xs">
                Retire grátis
              </span>
              <p className="font-bold text-white text-xs">Em nossas lojas</p>
            </div>
          </li>

          <li className="flex gap-3 items-center">
            <img src="/icons/discount.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-normal text-white text-xs">
                Ganhe 20% de
              </span>
              <p className="font-bold text-white text-xs">desconto</p>
            </div>
          </li>

          <li className="flex gap-3 items-center">
            <img src="/icons/delivery.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-normal text-white text-xs">
                Frente grátis para
              </span>
              <p className="font-bold text-white text-xs">
                regiões sul e sudeste
              </p>
            </div>
          </li>

          <li className="flex gap-3 items-center">
            <img src="/icons/change.svg" alt="" className="w-8 h-8" />
            <div>
              <span className="font-normal text-white text-xs">
                Primeira troca grátis
              </span>
            </div>
          </li>
        </ul>
      </div>

      <main className="p-2 max-w-5xl  m-auto">
        <div className="shoes mt-10">
          <div className="flex flex-col gap-2 justify-center items-center lg:flex-row">
            <ImageSlot
              sex="Calçados femininos"
              position="left-10"
              filter="bg-gradient-to-r"
            >
              <img
                src="/images/calcados-femininos.png"
                alt="Calçado Feminino"
              />
            </ImageSlot>
            <div className="max-w-[500px] md:text-center lg:text-right lg:mb-20">
              <p className="text-sm lg:text-lg font-montserrat">
                Escolher o seu sapato favorito entre nossa
                <span className="font-bold">
                  {" "}
                  variedade de modelos e cores
                </span>{" "}
                não será uma tarefa fácil, mas o que uma mulher não consegue
                fazer?
              </p>

              <ButtonSlot className="px-24 mt-5 mb-5 hover:text-white transition duration-500">
                Conferir
              </ButtonSlot>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center lg:flex-row lg:mt-10">
            <ImageSlot
              sex="Calçados masculino"
              position="right-10"
              filter="bg-gradient-to-l"
              order="lg:order-2"
            >
              <img
                src="/images/calcados-masculinos.png"
                alt="Calçado Feminino"
              />
            </ImageSlot>

            <div className=" max-w-[500px] md:text-center lg:text-left lg:mb-20 lg:order-1">
              <p className="text-sm lg:text-lg font-montserrat">
                Tenha em seu guarda roupa sapatos de qualidade e confortáveis,
                para o dia a dia, trabalho e até mesmo para praticar esportes!
              </p>

              <ButtonSlot className="px-24 mt-5 hover:text-white transition duration-500">
                Conferir
              </ButtonSlot>
            </div>
          </div>
        </div>

        <div className="outlet mt-10">
          <div className="flex gap-4 justify-center items-center lg:justify-between">
            <div className="logo w-36 flex flex-col">
              <img src="/images/logo.png" alt="PaquetáStore" className="w-32" />
              <span className="text-3xl text-orange font-bold uppercase self-end">
                Outlet
              </span>
            </div>

            <div className="max-w-lg lg:text-right">
              <p className="text-sm lg:text-lg">
                Você também pode escolher o seu novo sapato favorito de acordo
                com a sua numeração.
              </p>
            </div>
          </div>

          <ul className="mt-5 flex gap-2 flex-wrap lg:justify-around">
            <ShoeSize border="border border-shadeblack">33</ShoeSize>
            <ShoeSize border="border border-shadeblack">34</ShoeSize>
            <ShoeSize border="border border-shadeblack">35</ShoeSize>
            <ShoeSize border="border border-shadeblack">36</ShoeSize>
            <ShoeSize border="border border-shadeblack">37</ShoeSize>
            <ShoeSize border="border border-shadeblack">38</ShoeSize>
            <ShoeSize border="border border-shadeblack">39</ShoeSize>
            <ShoeSize border="border border-shadeblack">40</ShoeSize>
            <ShoeSize border="border border-shadeblack">41</ShoeSize>
            <ShoeSize border="border border-shadeblack">42</ShoeSize>
            <ShoeSize border="border border-shadeblack">43</ShoeSize>
            <ShoeSize border="border border-shadeblack">44</ShoeSize>
          </ul>
        </div>

        <section className="mt-10">
          <div className="header flex justify-between items-center">
            <h1 className="font-bold text-lg uppercase">Destaques</h1>
            <a href="" className="text-md border-b-orange border-b">
              <span className="hover:scale-95 block transition-all duration-100">
                Conferir tudo
              </span>
            </a>
          </div>
        </section>

        <section className="mt-10 mb-10">
          <h1 className="font-montserrat text-xl font-bold text-center">
            As melhores marcas estão aqui
          </h1>

          
            <swiper-container init="false">
              {shoeSwiperList}
            </swiper-container>
          

          <div className="flex flex-wrap justify-between items-baseline mt-5">
            <img src="/icons/adidas.svg" alt="" className="w-16" />
            <img src="/icons/viamarte.svg" alt="" className="w-24" />
            <img src="/icons/bebece.svg" alt="" className="w-20" />
            <img src="/icons/dumond.svg" alt="" className="w-24" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
