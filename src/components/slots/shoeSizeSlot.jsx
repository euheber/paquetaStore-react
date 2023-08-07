function shoeSize({children, border}){
    return(
        <li className={`p-2 w-10 flex justify-center items-center cursor-default ${border}`}>
        <span className="text-shadeblack">
            {children}
        </span>
    </li>
    )
} 


export default shoeSize