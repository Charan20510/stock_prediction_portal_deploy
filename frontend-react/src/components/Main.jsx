import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Protal</h1>
                <p className="text-light lead">Building a stock prediction portal with Python, Django REST Framework, React.js, and Machine Learning combines powerful tools for real-world financial insights. Python handles data processing and modeling, Django REST Framework ensures secure APIs, and React.js delivers a dynamic user interface. Machine learning algorithms provide accurate stock predictions, making this project ideal for mastering full-stack development and applying AI in finance.</p>
                <Button text='Explore Now' class='btn-info' url='/dashboard' />
            </div>
        </div>
    </>
  )
}

export default Main
