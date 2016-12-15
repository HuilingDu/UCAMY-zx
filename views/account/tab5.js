/**
 * Created by DuHuiling on 2016/12/14.
 */
var Icon = require('../../components/icon/icon');
var Collapse = require('../../components/collapse/collapse');
var Panel = require('../../components/collapse/panel');

var Tab5 = React.createClass({
    render: function () {
        return (
            <div className="tab-content">
                <div className="content">
                    <div className="account-box account-box-pd">
                        <div className="settings-title">
                            <b className="fcgray">您好，</b>
                            <b className="fcblack">想像力有限公司！</b>
                            <span className="fcgreen">已验证</span>
                            <span className="fcred">待验证</span>
                            <Icon type="wenhao"/>
                        </div>
                        <div className="account-settings border">
                            <div className="item"><span className="filename"><strong>组织机构代码</strong></span>12345678-X</div>
                        </div>
                        <div className="account-settings border">
                            <div className="item"><span className="filename"><strong>企业用户id</strong></span>201604070001</div>
                        </div>
                        <Collapse>
                            <Panel header={
                            <div className="item">
                                <span className="filename"><strong>经办人身份信息</strong></span>
                                姓名：张**  /  身份证号码：4442**********0203
                                <a href="Javascript:;" className="fcblue showhide">
                                    修改<span className="icon-adown"></span>
                                </a>
                            </div>
                            } key="1">
                                <div className="account-settings border">
                                    <div className="item item-input"><span className="filename">姓名</span>
                                        <div className="ui-input">
                                            <input type="test" value="请输入姓名" className="cell-input" />
                                            <div className="ui-tips">
                                                <div className="note"><Icon type="note"/>输入提示</div>
                                                <div className="error"><Icon type="error"/>错误提示</div>
                                                <div className="correct" style={{display:"block"}}><Icon type="correct"/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item item-input"><span className="filename">身份证号码</span>
                                        <div className="ui-input">
                                            <input type="test" value="请输入身份证号码" className="cell-input" />
                                            <div className="ui-tips">
                                                <div className="note"><Icon type="note"/>输入提示</div>
                                                <div className="error" style={{display:"block"}}><Icon type="error"/>错误提示</div>
                                                <div className="correct"><Icon type="correct"/>正确提示</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                        <Collapse>
                            <Panel header={
                            <div className="item"><span className="filename"><strong>联系人手机号</strong></span>136****1234 <a href="Javascript:;" className="fcblue showhide">修改<span className="icon-adown"></span></a></div>
                            } key="1">
                                <div className="account-settings border">
                                    <div className="item item-input"><span className="filename">原手机号码</span>136****1234 </div>
                                    <div className="item item-input"><span className="filename">手机验证码</span>
                                        <div className="ui-input">
                                            <input type="text" value="" className="cell-input input-code" />
                                            <input type="button" value="获取验证码" className="cell-btn-auto btn-code" />
                                        </div>
                                    </div>
                                    <div className="item"> <span className="filename"></span>
                                        <input type="button" value="验证" className="cell-btn-blue openwindown" data-action="layer-changmobile" />
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </Panel>
                        </Collapse>
                        <Collapse>
                            <Panel header={
                            <div className="item"><span className="filename"><strong>登录密码</strong></span>******** <a href="Javascript:;" className="fcblue showhide">修改<span className="icon-adown"></span></a></div>
                            } key="1">
                                <div className="account-settings border">
                                    <div className="item item-input"><span className="filename">原登录密码</span>
                                        <div className="ui-input">
                                            <input type="password" data-value="请输入原登录密码" className="cell-input" />
                                            <div className="ui-tips">
                                                <div className="note" style={{display:"block"}}><i className="icon-note"></i>输入提示</div>
                                                <div className="error"><i className="icon-error"></i>错误提示</div>
                                                <div className="correct"><i className="icon-correct"></i>正确提示</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item item-input"><span className="filename">新登录密码</span>
                                        <div className="ui-input">
                                            <input type="password" data-value="请输入新登录密码" className="cell-input" />
                                            <div className="ui-tips">
                                                <div className="note"><i className="icon-note"></i>输入提示</div>
                                                <div className="error" style={{display:"block"}}><i className="icon-error"></i>错误提示</div>
                                                <div className="correct"><i className="icon-correct"></i>正确提示</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item item-input"><span className="filename">确认登录密码</span>
                                        <div className="ui-input">
                                            <input type="password" data-value="请输入新登录密码" className="cell-input" />
                                            <div className="ui-tips">
                                                <div className="note"><i className="icon-note"></i>输入提示</div>
                                                <div className="error"><i className="icon-error"></i>错误提示</div>
                                                <div className="correct" style={{display:"block"}}><i className="icon-correct"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item"> <span className="filename"></span>
                                        <input type="button" value="保存" className="cell-btn-blue open-success-password" />
                                    </div>
                                    <div className="clear"></div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Tab5;