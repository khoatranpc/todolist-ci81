import './style.css';

const Table = (props) => {
    return (
        <div className="container-component-table">
            <div className="header-table">
                <div className="header name-todo">Name</div>
                <div className="header description-todo">Description</div>
                <div className="header status-todo">Status</div>
                <div className="header action-todo">Action</div>
            </div>
            {props.data.length !== 0 ? props.data.map((item, idx) => {
                return <div className="row" key={idx}>
                    <div className="cell name">
                        {item.name}
                    </div>
                    <div className="cell des">
                        {item.des}
                    </div>
                    <div className="cell status">
                        <div className="data">{item.status ? 'Completed' : 'Pending'}</div>
                    </div>
                    <div className="cell action">
                        <button onClick={() => { props.showAlert(item) }}>Edit</button>
                        <button onClick={() => { props.deleteTodo(item.id) }}>Delete</button>
                    </div>
                </div>
            }) :
                <div>Không có dữ liệu</div>
            }
        </div>
    )
}
export default Table;