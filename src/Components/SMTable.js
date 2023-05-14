function SMTable(props) {
    const { title, columns, datasource, onRowClick, isLoading } = props;

    return <div>
        <h2>{title}</h2>
        {
            isLoading ? <img width='40%' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="Loading..." /> :
                datasource && Array.isArray(datasource) && datasource.length < 1 ? <img src="https://www.useblackbox.io/style/images/Group-4.png" alt="No data" width="40%" /> : <table className="table table-stripped">
                    <thead>
                        <tr>
                            {
                                columns && Array.isArray(columns) && columns.length > 0 ? columns.map((x, i) => {
                                    return <th key={i}>{x.displayName}</th>
                                }) : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datasource && Array.isArray(datasource) && datasource.length > 0 ? datasource.map((x, i) => (
                                <tr key={i}>
                                    {columns.map((e, ind) => (
                                        <td key={ind}>
                                            {e.displayField ? e.displayField(x) : x[e.key]}
                                        </td>
                                    ))}
                                </tr>
                            )) : null
                        }
                    </tbody>
                </table>
        }
    </div>
}

export default SMTable;