var Icon = require('../../../components/icon/icon');
var Html = React.createClass({
    render:function(){
        return (
            <div className="account-box account-box-pd">
                <div className="account-money">
                    <ul>
                        <li><b>56,481,231</b>待收益总额（元）</li>
                        <li><b>456,523,000</b>待回收本金（元）</li>
                        <li><b>8,314,723,00</b>账户累计收益（元）</li>
                        <li><b>56,481,231</b>已融资总额（元）</li>
                    </ul>
                </div>
                <div className="account-project-list">
                    <h3>正在计息中的项目<strong className="fcred">5</strong>个</h3>
                    <table className="table-1">
                        <tbody>
                        <tr>
                            <th>项目名称</th>
                            <th>认购本金（元）</th>
                            <th>预期收益（元）</th>
                            <th>到期时间</th>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td><span className="fcred">500.00</span></td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td><span className="fcred">500.00</span></td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td><span className="fcred">500.00</span></td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td><span className="fcred">500.00</span></td>
                            <td>2015.12.12</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="no-project"><i className="icon-noproject"></i>暂无计息中的项目！</div>
                </div>
                <div className="account-project-list">
                    <h3>正在融资中的项目<strong className="fcred">5</strong>个</h3>
                    <table className="table-1">
                        <tbody>
                        <tr>
                            <th>项目名称</th>
                            <th>融资规模</th>
                            <th>融资进度</th>
                            <th>起息日期</th>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td>
                                <div className="account-progress-bar"><span></span><b>80%</b></div>
                            </td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td>
                                <div className="account-progress-bar"><span></span><b>80%</b></div>
                            </td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td>
                                <div className="account-progress-bar"><span></span><b>80%</b></div>
                            </td>
                            <td>2015.12.12</td>
                        </tr>
                        <tr>
                            <td><strong>惠益计划7号121期</strong></td>
                            <td><span className="fcred">5,000.00</span></td>
                            <td>
                                <div className="account-progress-bar"><span></span><b>80%</b></div>
                            </td>
                            <td>2015.12.12</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="account-project-list">
                    <h3><strong>推荐项目</strong></h3>
                    <div className="account-project-list-box f-left"><i className="icon"></i>
                        <h3>惠益计划7号121期</h3>
                        <ul>
                            <li>
                                <p>项目发行规模</p>
                                <b className="t1">100<em>.00</em></b><span>万</span></li>
                            <li>
                                <p>预期年化收益率</p>
                                <b className="t2">9.</b><b className="t3">00%</b></li>
                            <li className="last">
                                <p>投资周期</p>
                                <b className="t4">90</b><span>天</span></li>
                        </ul>
                        <div>
                            <div className="account-project-progress"><span></span><b style={{width:'50%'}}></b><strong>50%</strong>
                            </div>
                            <input name="" type="button" value="立即投标" className="cell-btn-blue"/>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="account-project-list-box f-right"><i className="icon"></i>
                        <h3>惠益计划7号121期</h3>
                        <ul>
                            <li>
                                <p>项目发行规模</p>
                                <b className="t1">100<em>.00</em></b><span>万</span></li>
                            <li>
                                <p>预期年化收益率</p>
                                <b className="t2">9.</b><b className="t3">00%</b></li>
                            <li className="last">
                                <p>投资周期</p>
                                <b className="t4">90</b><span>天</span></li>
                        </ul>
                        <div>
                            <div className="account-project-progress"><span></span><b style={{width:'40%'}}></b><strong>40%</strong>
                            </div>
                            <input name="" type="button" value="立即投标" className="cell-btn-blue"/>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="account-project-list-box f-left"><i className="icon"></i>
                        <h3>惠益计划7号121期</h3>
                        <ul>
                            <li>
                                <p>项目发行规模</p>
                                <b className="t1">100<em>.00</em></b><span>万</span></li>
                            <li>
                                <p>预期年化收益率</p>
                                <b className="t2">9.</b><b className="t3">00%</b></li>
                            <li className="last">
                                <p>投资周期</p>
                                <b className="t4">90</b><span>天</span></li>
                        </ul>
                        <div>
                            <div className="account-project-progress"><span></span><b style={{width:'70%'}}></b><strong>70%</strong>
                            </div>
                            <input name="" type="button" value="立即投标" className="cell-btn-blue"/>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="account-project-list-box f-right"><i className="icon"></i>
                        <h3>惠益计划7号121期</h3>
                        <ul>
                            <li>
                                <p>项目发行规模</p>
                                <b className="t1">100<em>.00</em></b><span>万</span></li>
                            <li>
                                <p>预期年化收益率</p>
                                <b className="t2">9.</b><b className="t3">00%</b></li>
                            <li className="last">
                                <p>投资周期</p>
                                <b className="t4">90</b><span>天</span></li>
                        </ul>
                        <div>
                            <div className="account-project-progress"><span></span><b style={{width:'20%'}}></b><strong>20%</strong>
                            </div>
                            <input name="" type="button" value="立即投标" className="cell-btn-blue"/>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
});

module.exports = Html;