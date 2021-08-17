import moment from 'moment';
import React from 'react'

export default function Function2Page() {


    let dateData = new Date('2020-08-10T14:54:52+07:00')
    let monthNamesThai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤษจิกายน", "ธันวาคม"];


    // Jan-Mar = 0
    // Apr-Jun = 1
    // Jul-Sep = 2
    // Oct-Dec = 3
    // > 4 = 4
    let q = [1, 2, 3, 4, 4];

    let newTimeFormat = moment(dateData).format('DD/MM/YYYY HH:') + dateData.getMinutes()

    let yearToThai = dateData.getFullYear() + 543
    let thaiDate = dateData.getDate() + " " + monthNamesThai[dateData.getMonth()] + " " + yearToThai
    let lastDay = new Date(dateData.getFullYear(), dateData.getMonth() + 1, 0).getDate()
    let Q3 = q[Math.floor(dateData.getMonth() / 3)]
    let timestamp = new Date(dateData).getTime() / 1000

    return (
        <div className="container mt-4 text-center">
            <div className="card text-center p-5">
                <p>วัน : {newTimeFormat}</p>
                <p>รูปแบบปฏิทินไทย :{thaiDate}</p>
                <p>จำนวนวันในเดือนนี้ :{lastDay}</p>
                <p>ไตรมาตรของเดือนนี้ :{Q3}</p>
                <p>Unix timestamp :{timestamp}</p>
            </div>
        </div>
    )
}
