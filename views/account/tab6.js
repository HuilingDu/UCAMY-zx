/**
 * Created by DuHuiling on 2016/12/14.
 */
var Pagination = require('../../components/pagination/pagination');
var Collapse = require('../../components/collapse/collapse');
var Panel = require('../../components/collapse/panel');

var Tab6 = React.createClass({
    render: function(){
        return (
            <div className="tab-content">
                <div className="content">
                    <div className="account-box account-box-pd">
                        <div className="account-selection-box">
                            <span className="f-left account-select-all">
                                <input name="" type="checkbox" value="" />全选
                            </span>
                            <div className="searchselet f-left">
                                <label>标记为已读</label>
                                <select>
                                    <option>标记为已读</option>
                                </select>
                            </div>
                            <a href="javascript:void(0)" className="icon-delete f-right"></a>
                        </div>
                        <div className="account-message-box">
                            <Collapse>
                                <Panel header={
                                <div>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="horn icon-mail"></span>
                                    <span><strong>2015-8-10   09:00:00</strong></span>
                                    <b className="more icon-adown"></b>
                                </div>
                                } key="1">
                                    <p>尊敬的客户： 您好！您在2015年8月8日进行参与的项目“信富e投信富e投”，投标成功，项目将在XX月XX日开始计息，投资周期为90天，到期将一次性归还您的本息收益，感谢您的参与！</p>
                                </Panel>

                                <Panel header={
                                <div>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="horn icon-mail-open"></span>
                                    <span><strong>2015-8-10   09:00:00</strong></span>
                                    <b className="more icon-adown"></b>
                                </div>
                                } key="2">
                                    <p>尊敬的客户： 您好！您在2015年8月8日进行参与的项目“信富e投信富e投”，投标成功，项目将在XX月XX日开始计息，投资周期为90天，到期将一次性归还您的本息收益，感谢您的参与！</p>
                                </Panel>

                                <Panel header={
                                <div>
                                    <input type="checkbox" name="checkbox"/>
                                    <span className="horn icon-mail-open"></span>
                                    <span><strong>2015-8-10   09:00:00</strong></span>
                                    <b className="more icon-adown"></b>
                                </div>
                                } key="3">
                                    <p>尊敬的客户： 您好！您在2015年8月8日进行参与的项目“信富e投信富e投”，投标成功，项目将在XX月XX日开始计息，投资周期为90天，到期将一次性归还您的本息收益，感谢您的参与！</p>
                                </Panel>
                            </Collapse>
                        </div>
                        <Pagination total="10" current="3"/>
                        <div className="no-project"><i className="icon-noproject"></i>暂无计息中的项目！</div>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Tab6;