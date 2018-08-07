
import {
    reminders
} from '../mocks/reminders';
import { dateFormat } from '../utils';

export class ReminderService {
    constructor() {
        this.reminders = reminders;
    }

    getReminders() {
        return this.reminders.map((reminder) => {
            reminder.remindDate = dateFormat(new Date(reminder.remindDate));
            return reminder;
        })
    }

    create(reminderData) {
        console.log("CREATE", reminderData);
    }

    findOne(id) {
        const result = this.reminders.find((reminder) => {
            return reminder.id === id;
        });
        return result;
    }
}