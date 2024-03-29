import React from 'react';
import './menu-items.styles.scss';
import { withRouter} from 'react-router-dom'

const menuItem = ({title,imageUrl, size,history,linkUrl,match}) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
        </div>
        </div>
    )
}
export default withRouter(menuItem);
