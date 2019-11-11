import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../redux'
import ShowAReminder from './ShowAReminder'
import './Reminders.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function Reminders(){
    const remindersState  = useSelector(store => store.myReminders)
    const [newReminder, setNewReminder] = React.useState('')
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <h1 className='title'>Reminders</h1>
            <br></br>

            <div className='reminders-container'>
                {
                    remindersState.map((reminder, index) =>
                        <div className="reminder-box"
                            key={index + reminder}
                        >
                            <p className='reminder'>{reminder}</p>
                            <Button
                                id={index}
                                className='delete-button'
                                variant='light'
                                onClick= {()=>{
                                    console.log(index)
                                    console.log('removed a reminder')
                                    dispatch(removeFromReminders(index))
                                }}
                            >X</Button>
                        </div>
                    )
                }
            </div>

            <div className='reminder-input-container'>
                <input
                    className='reminder-input'
                    id='reminderInput'
                    type='text'
                    placeholder='add a reminder here'
                    onChange={(e) => {
                        setNewReminder(e.target.value)
                    }}
                    value={newReminder}
                />
                <Button
                    variant='dark'
                    onClick={() => {
                        console.log(newReminder)
                        dispatch(addToReminders(newReminder))
                        setNewReminder('')
                    }}
                >
                +
                </Button>
            </div>



        </div>
    )
}

export default Reminders