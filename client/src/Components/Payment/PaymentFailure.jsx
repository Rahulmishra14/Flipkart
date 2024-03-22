import React from 'react'

const styles={
  width:"50%",
  "margin-left":"25%",
  height:"50%"
}
const PaymentFailure = () => {
  const url="https://1.bp.blogspot.com/-Lypzb5BW_2Q/XbVuZ51SYJI/AAAAAAAAAFo/VOMWTd7m-IE_5c2RqJC_MT_0MxOlqaeGQCLcBGAsYHQ/s1600/payment_fail01.jpg"
  return (
    <>
      <img src={url} alt='payment-failed' style={styles}/>
    </>
  )
}

export default PaymentFailure
