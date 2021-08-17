import React from 'react'

export default function Function3Page() {


    let arr: number[] = [] // null
    let arr2: number[] = [1] // 1
    let arr3: number[] = [1, 2, 3] // 2
    let arr4: number[] = [1, 1] // 1
    let arr5: number[] = [1, 2, 3, 4, 5, 6] // 5
    let arr6: number[] = [1, 5, 3, 2, 5, 10] // 5
    let arr7: number[] = [100, 5, 3, 2, 99] // 99
    let arr8: number[] = [35, 5, 3, 2, 5, 100] // 35
    let arr9: number[] = [1, 5, 101, 2, 5, 10] // 10
    let arr10: number[] = [10, 10, 9] // 9




    function maxArrNumber2(value: number[]) {
        let max1: number = 0
        let max2: number = 0
        if (value.length === 0) {
            return null
        } else if (value.length === 1) {
            return max2 = value[0]
        } else {
            max1 = Math.max(...value)
            value.map((v: any) => max2 = max2 < v && v !== max1 ? v : max2)
            return max2 === 0 ? max1 : max2
        }
    }

    return (
        <div className="container text-center mt-4">
            <div className="card text-center p-5">
                <h4 className="mb-4">Test case</h4>
                <p>{JSON.stringify(arr)} : {JSON.stringify(maxArrNumber2(arr))}</p>
                <p>{JSON.stringify(arr2)} : {JSON.stringify(maxArrNumber2(arr2))}</p>
                <p>{JSON.stringify(arr3)} : {JSON.stringify(maxArrNumber2(arr3))}</p>
                <p>{JSON.stringify(arr4)} : {JSON.stringify(maxArrNumber2(arr4))}</p>
                <p>{JSON.stringify(arr5)} : {JSON.stringify(maxArrNumber2(arr5))}</p>
                <p>{JSON.stringify(arr6)} : {JSON.stringify(maxArrNumber2(arr6))}</p>
                <p>{JSON.stringify(arr7)} : {JSON.stringify(maxArrNumber2(arr7))}</p>
                <p>{JSON.stringify(arr8)} : {JSON.stringify(maxArrNumber2(arr8))}</p>
                <p>{JSON.stringify(arr9)} : {JSON.stringify(maxArrNumber2(arr9))}</p>
                <p>{JSON.stringify(arr10)} : {JSON.stringify(maxArrNumber2(arr10))}</p>
            </div>
        </div>
    )
}
