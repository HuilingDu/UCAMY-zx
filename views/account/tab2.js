var Icon = require('../../../components/icon/icon');
var Html=React.createClass({
    render:function(){
        return (
            <div className="account-box account-box-pd">
                <div className="account-selection-box"> <span className="f-left">投资日期</span>
                    <div className="f-left account-selection-input">
                        <input name="" type="text"/>
                        <a href="javascript:void(0)" className="icon-date"></a></div>
                    <span className="f-left">-</span>
                    <div className="f-left account-selection-input">
                        <input name="" type="text"/>
                        <a href="javascript:void(0)" className="icon-date"></a></div>
                    <div className="searchselet f-right">
                        <label>所有项目</label>
                        <select>
                            <option>处理中</option>
                            <option>已投标待起息</option>
                            <option value="">回收完成</option>
                            <option value="">计息中</option>
                            <option value="">投标失败</option>
                            <option value="">项目超募</option>
                            <option value="">清算中</option>
                            <option value="">项目流标</option>
                        </select>
                    </div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/>
                            <div className="investment-record-status-ywc jieshi" alt="本息将于1-3个工作日内到账，敬请留意"><Icon type="correct"/>回收完成</div>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-hkz jieshi" alt="已支付成功，等待处理中"><Icon type="hkz"/>处理中</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-hkz jieshi" alt="距离项目起息日还有X天（X=项目起息日 - 当前系统日期）"><i className="icon-hkz"></i>已投标待起息</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-ywc jieshi" alt="本息将于1-3个工作日内到账，敬请留意"><Icon type="correct"/>回收完成</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-hkz jieshi" alt="距离项目到期日还有X天（X=项目到期日 - 当前系统日期）"><Icon type="hkz"/>计息中</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-failure jieshi" alt="若已支付成功，投资资金最晚将于一个工作日后退款至您的支付账户中"><Icon type="error"/>投标失败</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-hkz jieshi" alt="您本次投标的本金和收益正在清算中，请耐心等待"><Icon type="hkz"/>清算中</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/>
                            <strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-failure jieshi" alt="投资资金最晚将于一个工作日后退款至您的支付账户中，请留意账户"><Icon type="error"/>项目超募</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="投资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li><strong>投资本金</strong>（元）<br/><strong className="fcred">1000.00 </strong></li>
                        <li><strong>预期收益</strong>（元）<br/><strong className="fcred">1000.00 </strong></li>
                        <li>项目起息时间<br/>2015-10-12</li>
                        <li>项目到期时间<br/>2015-10-12</li>
                        <li>状态<br/><div className="investment-record-status-bids jieshi" alt="投资资金最晚将于一个工作日后退至您的支付账户"><Icon type="bids"/>项目流标</div></li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
});

module.exports=Html;