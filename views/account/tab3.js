var totalProgress = require('../../../components/progress/progress');
var Progress = totalProgress.Progress;
var Icon = require('../../../components/icon/icon');
var Html=React.createClass({
    render:function(){
        return (
            <div className="account-box account-box-pd">
                <div className="account-selection-box"> <span className="f-left">融资日期</span>
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
                            <option>募集中</option>
                            <option>募集完成待划款</option>
                            <option>还款中</option>
                            <option>还款完成</option>
                            <option value="">项目流标</option>
                        </select>
                    </div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-hkz"><Icon type="hkz"/>募集中</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-hkz"><Icon type="hkz"/>募集完成待划款</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-hkz"><Icon type="hkz"/>还款中</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-ywc"><Icon type="correct"/>还款完成</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-ywc"><Icon type="correct"/>还款完成</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-ywc"><Icon type="correct"/>还款完成</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
                <div className="financing-record-box">
                    <h3><strong>信富e投项目名称【20150810】</strong>2014-08-14&nbsp;09:00:00<a href="融资记录详情.html" className="fcblue">查看详情</a></h3>
                    <ul>
                        <li>融资规模<br/>
                            <strong className="fcred">1000</strong></li>
                        <li>状态<br/>
                            <div className="investment-record-status-bids"><Icon type="bids"/>项目流标</div></li>
                        <li>项目起息时间<br/>
                            2015-10-12</li>
                        <li>项目到期时间<br/>
                            2015-10-12</li>
                        <li>融资进度<br/>
                            <Progress type = "line" percent = {30} showInfo = {true}></Progress>
                        </li>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
});

module.exports=Html;