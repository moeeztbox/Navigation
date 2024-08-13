function FeedBackItem({item}){

  return(
    <>
    <div>
      <div style={{color:"blue",fontSize:"25px"}}>{item.rating}</div>
      <div style={{color:"blue",fontSize:"25px"}}>{item.text}</div>
    </div>    
    </>
  )
}
export default FeedBackItem