import React,{useEffect,useState} from 'react'
import "./Home.css"
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import TransactionCard from '../../compents/TransactionCard/TransactionCard'

function Home() {
  const[user,setUser]=useState('')
  const [transactions , setTransactions] = useState([])
  useEffect(()=>{
const currentUser =JSON.parse(localStorage.getItem('currentUser'))
if(currentUser){
  setUser(currentUser)
}
if(!currentUser){
  window.location.href='/login'
}
  },[])
  const loadTransactions=async()=>{
    if(!user._id){
      return
    }
    toast.loading('loding Transactions')
const response = await axios.get(`${process.env.REACT_APP_API_URI}/transactions?userId=${user._id}`)
toast.dismiss()


setTransactions(response.data.data)
  }
  useEffect(()=>{
    loadTransactions()
  },[user])
  return (
    <div>
      <h1 className='home-greeting'>Hello{user.fullName}</h1>
      <h2 className='home-heading'>Welcome To Expense Tracker</h2>
      <span className='home-logout'onClick={()=>{
        localStorage.clear()
        toast.success('logged successfully')
        setTimeout(() => {
          window.location.href = '/'
        }, 3000)
      }}>
        Logout
      </span>
     {
 transactions.map((transaction)=>{
 const {_id,title,amount,category,type,createdAt}=transaction
 return (<TransactionCard
  key={_id}
  _id={_id}
  title={title}
  amount={amount}
  category={category}
  type={type}
  createdAt={createdAt}
  loadTransactions={loadTransactions}
  />)
 })
     }
      <Toaster/>
    </div>
  )
}

export default Home
