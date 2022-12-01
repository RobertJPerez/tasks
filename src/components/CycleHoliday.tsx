import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type HolidayList =
        | "New_Years"
        | "Valentine's_Day"
        | "St_Patty's_Day"
        | "Halloween"
        | "Christmas";
    interface Holiday {
        name: HolidayList;
        date: number;
        alphaorder: number;
        emoji: string;
    }
    const firstholiday = {
        name: "New_Years",
        date: 1,
        alphaorder: 1,
        emoji: "🧨"
    } as Holiday;
    const secondholiday = {
        name: "Valentine's_Day",
        date: 2,
        alphaorder: 1,
        emoji: "❤️"
    } as Holiday;
    const thirdholiday = {
        name: "St_Patty's_Day",
        date: 3,
        alphaorder: 1,
        emoji: "🍺"
    } as Holiday;
    const fourthholiday = {
        name: "Halloween",
        date: 4,
        alphaorder: 1,
        emoji: "😊"
    } as Holiday;
    const fifthholiday = {
        name: "Christmas",
        date: 5,
        alphaorder: 1,
        emoji: "🎄"
    } as Holiday;
    const ListofHolidaysByDates = [
        firstholiday,
        secondholiday,
        thirdholiday,
        fourthholiday,
        fifthholiday
    ];
    const ListofHolidaysByAlpha = [
        fifthholiday,
        fourthholiday,
        firstholiday,
        thirdholiday,
        secondholiday
    ];
    const getNextHolidayByDate = (currentHoliday: Holiday): Holiday => {
        return ListofHolidaysByDates.reduce((res, comparingHoliday, index) => {
            if (comparingHoliday.name === currentHoliday.name) {
                if (index + 1 >= ListofHolidaysByDates.length) {
                    return ListofHolidaysByDates[0];
                } else {
                    return ListofHolidaysByDates[index + 1];
                }
            }

            return res;
        }, {} as Holiday);
    };

    const getNextHolidayByAlpha = (currentHoliday: Holiday): Holiday => {
        return ListofHolidaysByAlpha.reduce((res, comparingHoliday, index) => {
            if (comparingHoliday.name === currentHoliday.name) {
                if (index + 1 >= ListofHolidaysByAlpha.length) {
                    return ListofHolidaysByAlpha[0];
                } else {
                    return ListofHolidaysByAlpha[index + 1];
                }
            }

            return res;
        }, {} as Holiday);
    };

    const [holiday, setHoliday] = useState<Holiday>(firstholiday);

    return (
        <span>
            <Button onClick={() => setHoliday(getNextHolidayByAlpha(holiday))}>
                Alphabet
            </Button>

            <Button onClick={() => setHoliday(getNextHolidayByDate(holiday))}>
                Year
            </Button>
            {"Holiday: " + holiday.emoji}
        </span>
    );
}

//List of enums = [holiday 1, holiday 2]
// holidays {alphabetic order: 1, postion in year 3}
// onclick sort by alphabetic order(enums),
// onclick position
// function getNextHolidayByAlpha(currentHoliday)
// function getNextHolidayByTime(currentHoliday)
//
