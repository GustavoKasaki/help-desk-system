import { redirect } from 'next/navigation'

const Home = () => redirect('/login') // Or "/dashboard" if user is logged in

export default Home
