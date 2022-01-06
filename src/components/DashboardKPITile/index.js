import './style.css';

function DashboardKPITile(props) {
    const { heading, value, percentage, icon, isNegative } = props;
    return (
        <div className='col-xs-3 col-sm-3 col-md-6 col-lg-6 kpi-data-tile ' style={props.styles}>
            <div className='d-md-flex justify-content-between kpi-data-reading'>
                <h1 className='kpi-data-tile-head-text'>{heading}</h1>
                <div className='d-flex align-items-center justify-content-center'>
                    <img className='kpi-data-tile-perc-icon' src={icon} />
                    <h1 className='kpi-data-tile-perc-text' style={{
                        color: isNegative ? '#FC5D5B' : '#77E477'
                    }}>{percentage}</h1>
                </div>
            </div>

            <h1 className='kpi-value-text'>{value}</h1>
        </div>

    );
}

export default DashboardKPITile;
