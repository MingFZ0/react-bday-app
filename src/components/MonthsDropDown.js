let months = ["January", "February", "April", "May", "June", "July", "September", "October", "November", "December"];

function MonthsDropDown() {
    return(
        <section>
            <label>Select Birthday Month </label>
            <select>
                {
                    months.map((month, index) => {
                        return (
                            <option key={index}>{month}</option>
                        )
                    })
                }
            </select>
        </section>
    )
}

export default MonthsDropDown;