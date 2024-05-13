import React from 'react'
import "./Overview.css"
import { TrendingUp } from 'lucide-react'

const Overview = () => {
    return (
        <>
            <div className="parent">
                <div className="container"> <p>Total User</p>
                    <span><sub><TrendingUp /></sub>10.0%</span>
                    <h1>200</h1>
                    <p>User</p>
                    </div>

                <div className="container">
                    <p>Total Loan Provided</p>
                    <span><sub><TrendingUp /></sub>10.0%</span>
                    <h1>200</h1>
                    <p>User</p>
                    </div>

                <div className="container">
                    <p>Total Loan Pending</p>
                    <span><sub><TrendingUp /></sub>10.0%</span>
                    <h1>200</h1>
                    <p>User</p>
                    </div>

                <div className="container">
                    <p>Total Loan Approve</p>
                    <span><sub><TrendingUp /></sub>10.0%</span>
                    <h1>200</h1>
                    <p>User</p>
                    </div>

                <div className="container">
                    <p>Total Deposit</p>
                    <span><sub><TrendingUp /></sub>10.0%</span>
                    <h1>200</h1>
                    <p>User</p>
                     </div>
            </div>
            </>
    )
}

export default Overview
