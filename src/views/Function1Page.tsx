import React, { useEffect, useState } from 'react'
import dataJSON from '../json/exam-data.json'

export default function Function1Page() {

    const [state, setstate] = useState(dataJSON)
    const [data, setData] = useState<any>()


    async function wow() {
        const afterFilter = await state.filter((v) => {
            return v.is_editable_price === false
        })

        var weightAll: any = []
        var weightAll2: any = []

        var sum: any = 0
        await afterFilter.map(async (v: any) => {
            if (v.products.length > 1) {
                await v.products.map((vv: any) => {
                    sum = sum + vv.weight
                })
                weightAll2.push({ name: v.name, totalSubProductWeight: sum })
            } else {
                weightAll.push(v.products[0].weight)
                weightAll2.push({ name: v.name, totalSubProductWeight: v.products[0].weight })
            }
        })
        setData(weightAll2)
    }


    useEffect(() => {
        wow()
    }, [])

    return (
        <div className="container mt-4 text-center">
            <div className="card text-center p-5">
                {data ? <div>{JSON.stringify(data)}</div> : <p>dasd</p>}
            </div>
            {/* {data && data.map((value: any, key: number) => {
                return (
                    <p key={key}>name : {value.name}, totalSubProductWeight : {value.weight}</p>
                )
            })} */}



        </div>
    )
}