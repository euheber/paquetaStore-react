import ButtonSlot from "../slots/buttonSlot"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "../../store/features/addToCart"

function shoeCard({ shoe }) {
  const timesX = Math.floor(Math.random() * 15) + 3
  const count = useSelector((state) => state.counter.cart.length)
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex flex-col  border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 h-80 relative">
        {shoe.soldout ? (
          <div className=" bg-orange w-full text-center text-white text-sm font-montserrat rounded-t-sm absolute">
            Esgotado
          </div>
        ) : (
          ""
        )}
        <h1>estou aqui: {count} </h1>
        <div className="w-44 h-90 flex flex-col justify-center items-center m-auto h-72">
          <button className="ml-auto mt-1" onClick={() => { 
            dispatch(increment(shoe))
          }}>
            <i className="fa-regular fa-heart text-orange"></i>
          </button>

          <img src={shoe.image} alt="" className="h-28 w-36 mb-6" />

          <p className="text-xs text-shadeblack mb-1 mr-auto font-montserrat">
            {shoe.name}
          </p>
          {Number.isInteger(shoe.price.value) ? (
            <span className="block font-bold text-sm text-shadeblack mr-auto font-montserrat">
              R$ {shoe.price.value}.00
            </span>
          ) : (
            <span className="block font-bold text-sm text-shadeblack mr-auto font-montserrat">
              R$ {shoe.price.value}
            </span>
          )}

          <span className="text-xs mr-auto mb-3 font-montserrat">
            OU {timesX}X de R$ {(shoe.price.value / timesX).toFixed(2)}
          </span>

          {!shoe.soldout ? (
            <ButtonSlot
              className={
                "text-xs font-bold w-full mt-auto hover:text-shadeblack transition duration-500"
              }
            >
              Adicionar ao carrinho
            </ButtonSlot>
          ) : (
            <ButtonSlot
              className={
                "text-xs font-bold w-full mt-auto hover:text-shadeblack transition duration-500"
              }
            >
              Me avise quando chegar
            </ButtonSlot>
          )}
        </div>
      </div>
    </>
  )
}

export default shoeCard
