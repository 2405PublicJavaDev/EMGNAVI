import Chart from "./Chart"


function GetEmergencyStat() {

    return (
        <>
            <div className="h-[100%] w-[100%]">
                {/* <h2>My First Bar Chart</h2> */}
                <Chart statType="DOW" />
            </div>
        </>
    )
}
export default GetEmergencyStat