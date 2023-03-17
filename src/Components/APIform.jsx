import React from 'react'

export default function APIform({ inputs, handleChange, onSubmit }) {
    return (
        <>


            <form className='form-container'>
                <div className='title-container'>
                    <h1>Shot on Mars</h1>
                    <h3>Discover photos taken by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on the red neighbor.</h3>
                </div>

                <div className='content-container'>
                    <div className='attribute-container'>
                        <button>Rover</button>
                        <button>Cameras</button>
                        <button>Date</button>

                    </div>
                    <div className='image-container'></div>
                    <button type="submit" className="button" >
                        Show me Mars 📡
                    </button>
                </div>

            </form>
        </>

    )
}
