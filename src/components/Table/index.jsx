import { useContext } from 'react';
import { langContext } from '../../contexts/commonContext';
import { LANG } from '../../dictionary';
import './style.css';

const Table = (props) => {
    const { lang, setLang } = useContext(langContext);
    return (
        <div className="container-component-table">
            <button onClick={() => {
                setLang()
            }}>Thay đổi ngôn ngữ</button>
            <div className="header-table">
                <div className="header name-todo">{LANG[lang]['A_1']}</div>
                <div className="header description-todo">{LANG[lang]['A_2']}</div>
                <div className="header status-todo">{LANG[lang]['A_3']}</div>
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