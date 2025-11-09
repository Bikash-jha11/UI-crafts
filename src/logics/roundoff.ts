function roundOffTo60s(num:Number){
    let pixels;
  if(num < 60 && num > 0){
    pixels = 60;
  }else if(num <= 120 && num >= 60){
     pixels = 120;
  }else if(num <= 180 && num >= 120){
    pixels = 180
  }else if(num <= 240 && num >= 180){
    pixels = 230;
  }else{
    pixels = 230;
  }
  return pixels;
}
export default roundOffTo60s;