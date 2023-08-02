import addCalendarEvent from 'react-native-add-calendar-event';

export async function setReminder(title: string, location: string, date: Date) {
  const details = {
    title,
    location,
    startDate: date,
    endDate: date,
    alarms: {
      alarmDate: date, // Sets notification reminder
    },
  };

  try {
    const id = await addCalendarEvent(details);
    return id;
  } catch (error) {
    console.log(error);
  }
}
