import React from 'react'
import Header from '../../elements/header'
import Faq from '../../elements/faq'
import Advantages from '../../elements/advantages'
import Vacancies from '../../elements/vacancies'
import Partners from '../../elements/partners'
import Activity from '../../elements/activity'
import Info from '../../elements/info'
import Admission from '../../elements/admission'
import Footer from '../../layout/footer'
import Values from '../../elements/values'

const Home = () => {
    return (
        <div className="Layout-Group">
            <Header />
            <Values/>
            <div id="about">
                <Info />
            </div>
            <Admission />
            <Advantages />
            <div id="careers">
                <Vacancies />
            </div>
            <div id="activities">
                <Activity />
            </div>
            <Partners />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
