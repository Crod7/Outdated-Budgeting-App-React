import { useEffect, useState } from "react"



// Components 
import BudgetDetails from '../components/BudgetDetails'
import BudgetForm from '../components/BudgetForm'




const Home = () => {
    const[budgets, setBudgets] = useState(null)

    useEffect(() => {
        const fetchBudgets = async () =>{
            const response = await fetch('/api/budgets') // By changing the package.json proxy parameter
                                                         // in the FRONTEND folder to the localhost of the
                                                         // BACKEND folder, we can connect them together.
            const json = await response.json()
            
            if  (response.ok){
                setBudgets(json)
            }
        }
        fetchBudgets()
    }, [])



    return (                                               // We return all the budgets in our DB to the homepage
                                                           // In this case we are grabbing just the title of each
                                                           // budget item by using their id (budget._id)
        <div className="home">
            <div className="budgets">
                {budgets && budgets.map((budget) => (
                    //<p key={budget._id}>{budget.title}</p> // <---- This is how we are calling them
                    <BudgetDetails key={budget._id} budget={budget}/>
                
                
                
                ))}
            </div>
            <BudgetForm />
        </div>
    )
}

export default Home