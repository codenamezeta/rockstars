interface HoursOfOperationProps {
  hours: {
    day: string
    open: string
    close: string
  }[]
}

const hours = [
  { day: 'Monday', open: '9:00am', close: '5:00pm' },
  { day: 'Tuesday', open: '9:00am', close: '5:00pm' },
  { day: 'Wednesday', open: '9:00am', close: '5:00pm' },
  { day: 'Thursday', open: '9:00am', close: '5:00pm' },
  { day: 'Friday', open: '9:00am', close: '5:00pm' },
  { day: 'Saturday', open: '10:00am', close: '4:00pm' },
  { day: 'Sunday', open: 'Closed', close: 'Closed' },
]

const HoursOfOperation: React.FC<HoursOfOperationProps> = () => {
  return (
    <div>
      <h2>Hours of Operation</h2>
      <ul>
        {hours.map((hour, index) => (
          <li key={index}>
            <strong>{hour.day}:</strong> {hour.open} - {hour.close}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HoursOfOperation
