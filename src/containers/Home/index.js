import './style.css';
import Sidenav from '../../components/Sidenav';
import DashboardKPITile from '../../components/DashboardKPITile';
import { KPIsData, tableData } from '../../constants/data'

function Home() {
    return (
        <div className='d-md-flex'>
            <div className='d-none d-md-block col-md-3 col-lg-3 side-nav-container'>
                <Sidenav />
            </div>

            <div className='d-xs-12 d-sm-12 col-md-9 col-lg-9 body-container '>
                <div className='d-flex d-md-none align-items-center mb-4'>
                    <div style={{ width: '25%' }}>
                        <img className='header-user-avatar' src={require('../../assets/icons/avatar.png')} />

                    </div>
                    <div style={{ width: '50%' }}>

                        <img className='header-logo' src={require('../../assets/header-logo.png')} />
                    </div>



                </div>
                <div className='d-md-flex header-container align-items-baseline justify-content-between'>
                    <h1 className='page-header-text'>Sales Data</h1>
                    <div className='d-none d-md-flex'>
                        <h1 className='mysales-data-text'>MY SALES DATA</h1>
                        <input type={'text'} placeholder='Search experts...' className='search-input' />
                        <button className='d-flex add-filter-btn'>
                            <h1 className='add-filter-text' style={{ fontSize: '13px', color: '#6A6D7A', marginRight: '8px' }}>Period:</h1>
                            <h1 className='add-filter-text' style={{ fontWeight: 'bold' }}>This Week</h1>
                            <img className='add-filter-icon-down' src={require('../../assets/icons/arrow-down-filter.png')} />
                        </button>
                    </div>
                </div>

                {/* KPI Container Start */}
                <div className='d-flex kpi-container'>
                    <div className='row d-flex kpi-data-container'>
                        {KPIsData.map((data, i) => {
                            return (<DashboardKPITile
                                icon={data.icon}
                                index={i}
                                styles={{
                                    borderTop: [2, 3].indexOf(i) < 0 ? '1px #C3C5CA solid' : '0px',
                                    borderRight: [0, 2].indexOf(i) > -1 ? '1px #C3C5CA solid' : 'unset',
                                    paddingLeft: [0, 2].indexOf(i) > -1 ? '0px' : '10px'
                                }}
                                heading={data.heading}
                                value={data.value}
                                isNegative={data.isNegative}
                                percentage={data.percentage}
                            />)
                        })}
                    </div>
                    <div className='row kpi-data-chart'>
                        <h1 className='d-block d-md-none kpi-data-chart-text' style={{ marginLeft: '0px' }}>Sessions</h1>
                        <div className='d-none d-md-flex d-flex'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='kpi-data-tile-dot-icon' />
                                <h1 className='kpi-data-chart-text'>Completed</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='kpi-data-tile-dot-icon-grey' />
                                <h1 className='kpi-data-chart-text'>Missed</h1>
                            </div>
                        </div>
                        <img className='eclipse-icon' src={require('../../assets/icons/eclipse.png')} />
                        <div className='d-flex align-items-baseline justify-content-center'>
                            <h1 className='kpi-data-chart-val-text'>251</h1>
                            <h1 className='kpi-data-chart-subval-text'>completed sessions</h1>
                        </div>
                    </div>
                    <div className='row d-block d-md-none session-info-mobile-container pt-3 pb-3'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='kpi-data-tile-dot-icon' />
                                <h1 className='kpi-data-chart-text'>Completed</h1>
                            </div>
                            <h1 className='kpi-data-chart-text' style={{ color: '#6A6D7A' }}>68% of 1 808 sessions requested</h1>
                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='kpi-data-tile-dot-icon-grey' style={{ marginLeft: '0' }} />
                                <h1 className='kpi-data-chart-text'>Missed</h1>
                            </div>
                            <h1 className='kpi-data-chart-text' style={{ color: '#6A6D7A' }}>32% of 1 808 sessions requested</h1>
                        </div>
                    </div>
                </div>
                {/* KPI Container End */}


                {/* Bottom Table Container Start */}
                <div className='d-none d-md-block bottom-table-container'>
                    <div className='d-flex justify-content-between w-100'>
                        <div>
                            <h1 className='bottom-table-container-header'>Sessions</h1>
                            <h1 className='bottom-table-container-subheader'>Detailed table of sessions with our clients</h1>
                        </div>
                        <div className='d-flex'>
                            <input type={'text'} placeholder='Search experts...' className='search-input' />
                            <button className='d-flex add-filter-btn'>
                                <img className='add-filter-icon' src={require('../../assets/icons/filter.png')} />
                                <h1 className='add-filter-text'>Add Filter</h1>
                            </button>
                        </div>
                    </div>

                    <div className='d-flex session-found-container'>
                        <h1 className='session-found-text'>125 sessions found</h1>

                        <div className='d-flex align-items-center justify-content-center'>
                            <h1 className='session-sortby-text'>Sort by:</h1>
                            <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                                <h1 className='table-header-text' style={{ color: '#000' }}>Date</h1>
                                <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                            </button>
                            <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                                <h1 className='table-header-text'>Amount</h1>
                            </button>
                            <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                                <h1 className='table-header-text'>Call duration</h1>
                            </button>
                        </div>
                    </div>

                    <table className='w-100 session-table'>
                        <tr className='table-header-row'>
                            <th className='table-header-tile'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <h1 className='table-header-text'>Expert</h1>
                                    <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                                </div>
                            </th>
                            <th className='table-header-tile'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <h1 className='table-header-text'>Client</h1>
                                    <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                                </div>
                            </th>
                            <th className='table-header-tile'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <h1 className='table-header-text'>Duration</h1>
                                    <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                                </div>
                            </th>
                            <th className='table-header-tile'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <h1 className='table-header-text'>Status</h1>
                                    <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                                </div>
                            </th>
                            <th className='table-header-tile'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <h1 className='table-header-text'>Amount</h1>
                                    <img className='table-header-icon' src={require('../../assets/icons/sort.png')} />
                                </div>
                            </th>
                        </tr>
                        {tableData.map((data, i) => {
                            return (
                                <tr>
                                    <td className='table-data-tile align-items-center justify-content-center' style={{
                                        borderLeft: data.status === 'Purchase' ? '4px #71A0AF solid' : '0px'
                                    }}>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <img className='table-avatar-img' src={data.avatar} />
                                            <div>
                                                <h1 className='table-user-text'>{data.username}</h1>
                                                <h1 className='table-date-text'>{data.date}</h1>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='table-data-tile align-items-center justify-content-center'>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <div>
                                                <h1 className='table-user-text'>{data.client}</h1>
                                                <h1 className='table-date-text'>{data.email}</h1>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='table-data-tile align-items-center justify-content-center'>
                                        <h1 className='table-user-text text-center table-user-text-normal'>{data.duration}</h1>
                                    </td>
                                    <td className='table-data-tile align-items-center justify-content-center'>
                                        <div className='d-flex status-tile align-items-center justify-content-center'
                                            style={{
                                                background: data.status === 'Purchase' ? '#CDDCE1' : '#DFD8D1'
                                            }}>
                                            <div className='table-status-dot-icon' style={{
                                                backgroundColor: data.status === 'Purchase' ? '#71A0AF' : '#B49C85'
                                            }} />
                                            <h1 className='table-status-text'>{data.status}</h1>
                                        </div>
                                    </td>
                                    <td className='table-data-tile align-items-center justify-content-center'>
                                        <h1 className='table-user-text text-center table-user-text-normal'>{data.amount}</h1>
                                    </td>
                                </tr>
                            )
                        })}


                    </table>
                </div>
                {/* Bottom Table Container End */}

                {/* Bottom Table Container Mobile Start */}
                <div className='row d-block d-md-none bottom-table-container'>
                    <div className='justify-content-between w-100'>
                        <div>
                            <h1 className='bottom-table-container-header'>Sessions</h1>
                            <h1 className='bottom-table-container-subheader'>Detailed table of sessions with our clients</h1>
                        </div>
                        <div className='d-flex search-filter-mobile'>
                            <img className='search-filter-icon' src={require('../../assets/icons/search.png')} />
                            <input type={'text'} placeholder='Search experts...' className='search-input' />
                            <button className='d-flex add-filter-btn'>
                                <img className='add-filter-icon' src={require('../../assets/icons/filter.png')} />
                            </button>
                        </div>
                    </div>

                    <div className='d-flex align-items-center justify-content-between mt-4'>
                        <h1 className='session-sortby-text'>Sort by:</h1>
                        <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                            <h1 className='table-header-text' style={{ color: '#000', fontWeight: 'bold' }}>Date</h1>
                            <img className='table-header-icon' src={require('../../assets/icons/sort-black.png')} />
                        </button>
                        <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                            <h1 className='table-header-text'>Amount</h1>
                        </button>
                        <button className='d-flex session-sortby-btn align-items-center justify-content-center'>
                            <h1 className='table-header-text'>Call duration</h1>
                        </button>
                    </div>
                    {tableData.map((data, i) => {
                        return (
                            <div className='grid-session-mobile pb-4' style={{
                                borderLeft: data.status === 'Purchase' ? '4px #71A0AF solid' : '0px'
                            }}>
                                <div className='d-flex pt-4' style={{ paddingLeft: '5px' }}>
                                    <img className='table-avatar-img' src={data.avatar} />
                                    <div>
                                        <h1 className='table-user-text'>{data.username}</h1>
                                        <h1 className='table-date-text'>{data.date}</h1>

                                        <div className='mt-4'>
                                            <h1 className='table-user-text'>{data.client}</h1>
                                            <h1 className='table-date-text'>{data.email} / {data.duration}</h1>
                                        </div>

                                        <div className='d-flex  align-items-center justify-content-between mt-3'>
                                            <div className='d-flex status-tile align-items-center justify-content-center'
                                                style={{
                                                    background: data.status === 'Purchase' ? '#CDDCE1' : '#DFD8D1'
                                                }}>
                                                <div className='table-status-dot-icon' style={{
                                                    backgroundColor: data.status === 'Purchase' ? '#71A0AF' : '#B49C85'
                                                }} />
                                                <h1 className='table-status-text'>{data.status}</h1>
                                            </div>
                                            <h1 className='table-user-text text-center table-user-text-normal'>{data.amount}</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
                {/* Bottom Table Container Mobile End */}

            </div>

            {/* Footer container start */}
            <div className='d-block d-md-none bottom-tab'>
                <div className='d-flex'>
                    <input type={'text'} placeholder='Search experts...' className='search-input' />
                    <button className='d-flex add-filter-btn'>
                        <h1 className='add-filter-text' style={{ fontWeight: 'bold' }}>Period</h1>
                        <img className='add-filter-icon ml-1' src={require('../../assets/icons/arrow-down-filter.png')} />
                    </button>
                </div>
                <div className='bottom-tab-row'>
                    <div className='d-flex bottom-tab-tile'>
                        <img className='bottom-tab-icon' src={require('../../assets/sidenav-icons/homepage.png')} />
                        <h1 className='bottom-tab-text'>Home</h1>
                    </div>
                    <div className='d-flex bottom-tab-tile' style={{ borderTop: '2px #000 solid' }}>
                        <img className='bottom-tab-icon' src={require('../../assets/sidenav-icons/teamsalesdata.png')} />
                        <h1 className='bottom-tab-text' style={{ color: '#000' }}>Sales data</h1>
                    </div>
                    <div className='d-flex bottom-tab-tile'>
                        <img className='bottom-tab-icon' src={require('../../assets/sidenav-icons/teammembers.png')} />
                        <h1 className='bottom-tab-text'>Team</h1>
                    </div>
                    <div className='d-flex bottom-tab-tile'>
                        <img className='bottom-tab-icon' src={require('../../assets/sidenav-icons/menu.png')} />
                        <h1 className='bottom-tab-text'>Menu</h1>
                    </div>
                </div>

            </div>
            {/* Footer container end */}

        </div>
    );
}

export default Home;
