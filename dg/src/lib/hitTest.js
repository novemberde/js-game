export default (me, target) => {
  const me_x= parseInt(me.style.left);
  const me_y= parseInt(me.style.top);
  const me_width=parseInt(me.style.width);
  const me_height=parseInt(me.style.height);

  const target_x= parseInt(target.style.left);
  const target_y= parseInt(target.style.top);
  const target_width=parseInt(target.style.width);
  const target_height=parseInt(target.style.height);

  const result1=(me_x >= target_x) && (me_x <= (target_x+target_width));
  const result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));

  const result3=(me_y >= target_y) && (me_y <= (target_y+target_height));
  const result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));

  return (result1 || result2) && (result3 || result4);
}