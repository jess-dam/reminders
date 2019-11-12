import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { useDispatch, useSelector } from 'react-redux'
import { addToReminders, removeFromReminders } from '../redux'
import './Reminders.css'



function AddReminderInput(){
    const remindersState  = useSelector(storeState => storeState.myReminders)
    const [newReminder, setNewReminder] = React.useState('')
    const [reminderDate, setReminderDate]= React.useState('')
    const dispatch = useDispatch()

    return(
       <div className='reminder-input-container'>
                <input
                    className='reminder-input'
                    id='reminderInput'
                    type='text'
                    placeholder='add a reminder here...'
                    onChange={(e) => {
                        setNewReminder(e.target.value)
                    }}
                    value={newReminder}
                />

                <div className='date-picker container'>

                    <h4 className='date-title'>Pick a Date</h4>
                    <DayPickerInput
                        placeholder="DD/MM/YYYY"
                        format="DD/MM/YYYY"
                        selectedDays = {reminderDate}
                        onDayChange={(day) => {
                            setReminderDate(day)
                            console.log(reminderDate)
                        }}

                    />
                </div>

                <Button
                    variant='dark'
                    onClick={() => {
                        console.log(newReminder,reminderDate)
                        dispatch(addToReminders(newReminder, reminderDate))
                        setNewReminder('')
                    }}
                >
                +
                </Button>


        </div>
    )

}

export default AddReminderInput