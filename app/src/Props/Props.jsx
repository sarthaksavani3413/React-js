const Props = ({ a, color, sum }) => {
    return (
        <div>
            <h1>A :- {a}</h1>
            <ul>
                {
                    color.map((c) => {
                        return (
                            <p style={{ color: c }}>{c}</p>
                        )
                    })
                }
            </ul>
            <h1>sum is :- {sum()}</h1>
        </div>
    )
}
export default Props;