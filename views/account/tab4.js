/**
 * Created by DuHuiling on 2016/12/14.
 */
var Alert = require('../../components/alert/alert');
var BankCard = require('../../components/bankcard/bankcard');

var alertData = {
    mes:"温馨提示：银行卡只可绑定1张",
    //des:"辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述辅助性描述",
    //diyClose:"close",
    showClose:false,
    showIcon:true,
    type:"tips-info",
    bgColor:true,
    callback:function(){

    }
}
var setting = {
    cards : [
        {
            "cardName": "招商银行",
            "cardLogoClassName": "bank-mianyang",
            "cardNumber": "**** **** **** 8888",
            "cardType": "储蓄卡",
            "userName": "* * 聪"
        },
        {
            "cardName": "招商银行",
            "cardLogoClassName": "bank-abc",
            "cardNumber": "**** **** **** 9999",
            "cardType": "储蓄卡",
            "userName": "* * 明"
        }
    ]
};

var Tab4 = React.createClass({
    render: function(){
        return(
            <div className="tab-content">
                <div className="content">
                    <div className="account-bank-tips">
                        <Alert  {...alertData}/>
                    </div>
                    <div className="account-box account-box-pd">
                        <div className="account-bank-box">
                            <BankCard {...setting}></BankCard>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Tab4;