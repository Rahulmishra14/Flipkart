import React from 'react'
const styles={
  width:"50%",
  "margin-left":"25%",
  height:"50%"
}

const PaymentSuccess = () => {
  
  const url="https://indiaesevakendra.in/wp-content/uploads/2020/08/Paymentsuccessful21-768x427.png"
  return (
    <>
      <img src={url} alt='payment-success' style={styles}/>
    </>
  )
}

export default PaymentSuccess
