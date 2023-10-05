import React from 'react'

import Styles from './styles.scss'
import  Header  from '@/presentation/components/Template/Header'

type DashboardProps = {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className={Styles.container}>

      <Header />

      <div className={Styles.App}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
        <span>Start your development from here</span>
      </div>
    </div>
  )
}

export default Dashboard
