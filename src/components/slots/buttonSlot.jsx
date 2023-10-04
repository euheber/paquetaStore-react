function buttonSlot({children, className, onClick}){ 
    return (
       <>
        <button className={`cursor-pointer px-2 py-1 bg-gradient-to-r from-grandientOne from-50% to-yellowish ${className}`}  onClick={onClick}>
            {children} 
            </ button>  
       </>
    )
    
}

export default buttonSlot