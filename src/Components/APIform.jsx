import React from 'react'
import { useState } from 'react';

export default function APIform({ handleChange, onSubmit, currentImage, inputs }) {

    return (
        <>

            <div className='apiFormContainer'>


                <div className='title-container'>
                    <h1>Shot on Mars</h1>
                    <h3>Discover photos taken by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on the red neighbor.</h3>
                </div>
                <form className='form-container'>
                    <div className='content-container'>
                        <div className='attribute-container'>
                            <button>Rover: {inputs.rover}</button>
                            <button>Camera: {inputs.camera}</button>
                            <button>Sol: {inputs.sol}</button>

                        </div>
                        <div className='image-container'>
                            {currentImage ? (
                                <img
                                    className="screenshot"
                                    src={currentImage}
                                    alt="Screenshot returned"
                                />
                            ) : (
                                ""
                            )}
                        </div>

                    </div>
                    {/* {inputs &&
                        Object.entries(inputs).map(([category, value], index) => (
                            <li key={index}>
                                <button
                                    type="text"
                                    name={category}
                                    value={value}
                                    onChange={handleChange}
                                />
                                <p>{inputsInfo[index]}</p>
                            </li>

                        ))
                    } */}
                    {/* <div className='image-container'>
                        {currentImage ? (
                            <img
                                className="screenshot"
                                src={currentImage}
                                alt="Screenshot returned"
                            />
                        ) : (
                            ""
                        )}
                    </div> */}

                </form>
                <div className='form-button-container'>
                    <button type="submit" className="button" onClick={onSubmit}>
                        Show me Mars 📡
                    </button>
                </div>

            </div>
        </>

    )
}
