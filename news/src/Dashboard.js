import SendPara from "./Sendpara"
import YourTransactions from "./YourTransactions"

const Dashboard = () => {
    let showSendPara = false
    return (
         <>
           <h1>Dashboard</h1>
           <button onClick={true}>Send Para</button>
           <button onClick={true}>Your Transactions</button>
         </>
    )
}

export default Dashboard