function isInside(rect,x,y){
    //rect --> coordinates of rectangle
    //x,y coordinates of mouse
    //check if that cursor is inside reactange

    return !(
        x < rect.left ||
        x > rect.right ||
        y < rect.top ||
        y > rect.bottom
    )
}

export default isInside;