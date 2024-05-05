import React from 'react'
import greatSymbol from '../../assets/great.png'
import notGreatSymbol from '../../assets/noGreat.png'
import image from '../../assets/image.png'
import { useState } from 'react'

function Body() {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [BMI, setBMI] = useState();

    const symbol = 18.6 <= BMI && BMI < 24.9 ? greatSymbol : notGreatSymbol;

    let statement;
    let font;
    if (BMI < 18.6) {
        statement = "You are Under Weight"
        font = "text-red-500"
    } else if (18.6 <= BMI && BMI < 24.9) {
        statement = "You are in Great Shape"
        font = "text-green-500"
    } else {
        statement = "You are Over Weight"
        font = "text-red-500"
    }

    function calculateBMI() {
        let BMI = (weight / ((height * height) / 10000)).toFixed(2);
        setBMI(BMI);
        setHeight(0)
        setWeight(0)
    }

    return (
        <div className='bg-custom-primary-dark'>
            <div className="flex justify-center items-center h-screen ">
                <div className=" flex flex-col bg-white shadow-md rounded-md p-6">
                    <label className="mt-1 block text-custom-primary-dark text-1xl">Height (in cm):</label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md border border-custom-secondary-dark focus:border-custom-primary-dark p-1"
                        placeholder="Height"
                        value={height > 0 ? height : ''}
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />

                    <label className="mt-2.5 block text-custom-primary-dark text-1xl" >Weight (in kg):</label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md border border-custom-secondary-dark focus:border-custom-primary-dark p-1"
                        placeholder="Weight"
                        value={weight > 0 ? weight : ''}
                        onChange={(e) => setWeight(Number(e.target.value))}
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-custom-secondary-dark hover:bg-custom-primary-dark text-2xl text-white font-robotoCondensed py-1 px-4  rounded focus:outline-none focus:shadow-outline"
                        onClick={calculateBMI}
                    >
                        Calculate
                    </button>

                    {
                        BMI && (
                            <div className='mt-4 flex justify-center'>
                                <p className='text-1xl mr-2 pt-5'>Your BMI is</p>
                                <h1 className={`text-5xl font-bold font-robotoCondensed text-custom-secondary-dark ${font}`}>{BMI}</h1>
                            </div>
                        )
                    }


                    <img className="mx-auto my-5 justify-center h-20 w-20" src={symbol && BMI ? symbol : image} />

                    <h1 className={`text-5xl font-bold font-robotoCondensed text-custom-secondary-dark ${font}`}>{BMI ? statement : ""}</h1>
                </div>

            </div>
        </div>
    )
}

export default Body