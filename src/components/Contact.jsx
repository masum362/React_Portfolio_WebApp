import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>
                <form >
                    <div>
                        <label >name</label>
                        <input type="text" required placeholder='ABC' />
                    </div>
                    <div>
                        <label >email</label>
                        <input type="emial" required placeholder='abc@gmail.com' />
                    </div>
                    <div>
                        <label >message</label>
                        <input type="text" required placeholder='tell us about your query...' />
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact