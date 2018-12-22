import React, { Component } from 'react';
import './style.css';
import GoogleMap from './GoogleMap';

const profileImg = {
    backgroundImage:"url('https://i.pinimg.com/736x/2c/2c/60/2c2c60b20cb817a80afd381ae23dab05.jpg')"
}
class Index extends Component {
    render() {
        return(
            <div className="map_wrap">
                <aside>
                    <div className="user_info">
                        <span className="user_profile" style={profileImg}></span>
                        <span className="user_name">알렉시스산체스네마냐비디치</span>
                    </div>
                    <div className="user_comment">
                        <ul>
                            <li><a href="#" className="time01">위하여서, 목숨을 있는 구하지 그들에게 구하지 구하기 이것이다. 꽃 목숨이 원대하고, 것이다.보라, 물방아 길을 인생을 아름다우냐?</a></li>
                            <li><a href="#" className="time02">되는 따뜻한 위하여 무한한 커다란 그들의 것이다. 살 얼음 끓는 이상의 모래뿐일 심장은 사막이다.</a></li>
                            <li><a href="#" className="time03">할지라도 천지는 그것은 뿐이다. 별과 힘차게 발휘하기 동산에는 크고 이상의 아름다우냐? 그들의 청춘의 이상 남는 예가 위하여 웅대한 것이다.</a></li>
                            <li><a href="#" className="time04">이 있는 이상은 열매를 뭇 피에 발휘하기 뿐이다. 이것이야말로 곳이 굳세게 뛰노는 그것을 만천하의 것이다. 그러므로 끝에 그들은 청춘을 일월과 충분히 아니다.</a></li>
                            <li><a href="#" className="time05">그들의 같은 청춘의 영락과 착목한는 위하여, 있는 위하여서. 곳이 대중을 이성은 인생에 더운지라 뿐이다. 이는 생명을 대한 힘차게 같이, 만물은 있는 있음으로써 날카로우나 칼이다.</a></li>
                            <li><a href="#" className="time06">품으며, 끓는 사람은 심장의 것이다. 꽃이 위하여서, 온갖 얼마나 소금이라 힘있다. 사랑의 때에, 되는 바로 되려니와, 그들에게 우리 사막이다.</a></li>
                            <li><a href="#" className="time07">것은 까닭이요, 봄이 묻힌 가난한 지나가는 거외다. 별 그리워 별 있습니다. 패, 애기 새워 책상을 별을 잠, 버리었습니다. 때 쉬이 옥 어머니, 듯합니다.</a></li>
                            <li><a href="#" className="time08">릴케 북간도에 불러 이름자 까닭이요, 책상을 봅니다. 북간도에 내린 지나가는 소학교 하늘에는 마리아 아름다운 하나에 풀이 봅니다. 자랑처럼 말 별 나는 당신은 이제 있습니다.</a></li>
                            <li><a href="#" className="time09">헤는 다하지 가득 이제 프랑시스 불러 언덕 버리었습니다. 이런 별 이름과, 오는 흙으로 별이 마리아 계절이 버리었습니다. 나의 계집애들의 자랑처럼 이웃 청춘이 비둘기, 우는 듯합니다. 위에 지나가는 하늘에는 계십니다.</a></li>
                            <li><a href="#" className="time10">둘 이런 시와 위에 같이 별들을 딴은 못 겨울이 봅니다. 둘 토끼, 딴은 듯합니다. 별빛이 차 추억과 별에도 패, 거외다.</a></li>
                            <li><a href="#" className="time11">하나에 이제 노루, 위에 까닭입니다. 남은 잠, 이름과, 내린 흙으로 속의 별 걱정도 비둘기, 봅니다.</a></li>
                            <li><a href="#" className="time12">벌써 이제 가을 새겨지는 피어나듯이 이국 헤는 하나 있습니다. 어머니, 아직 이런 까닭입니다. 별에도 북간도에 까닭이요, 않은 청춘이 슬퍼하는 봅니다. 별 이네들은 무덤 어머니, 가슴속에 멀듯이, 덮어 듯합니다.</a></li>
                            <li><a href="#" className="time13">소녀들의 별에도 새겨지는 이제 겨울이 어머니 벌써 쓸쓸함과 거외다. 덮어 밤이 멀듯이, 지나고 버리었습니다. 가을 그러나 별 가슴속에 차 그리고 묻힌 까닭입니다. 하나에 북간도에 말 많은 이국 어머님, 듯합니다.</a></li>
                            <li><a href="#" className="time14">아스라히 추억과 벌레는 써 차 거외다. 옥 덮어 지나가는 자랑처럼 버리었습니다. 가을 위에 청춘이 경, 하나에 가득 책상을 버리었습니다. 못 시인의 노루, 하나에 별들을 때 시와 까닭입니다.</a></li>
                            <li><a href="#" className="time15">위하여서, 목숨을 있는 구하지 그들에게 구하지 구하기 이것이다. 꽃 목숨이 원대하고, 것이다.보라, 물방아 길을 인생을 아름다우냐?</a></li>
                            <li><a href="#" className="time16">되는 따뜻한 위하여 무한한 커다란 그들의 것이다. 살 얼음 끓는 이상의 모래뿐일 심장은 사막이다.</a></li>
                            <li><a href="#" className="time17">할지라도 천지는 그것은 뿐이다. 별과 힘차게 발휘하기 동산에는 크고 이상의 아름다우냐? 그들의 청춘의 이상 남는 예가 위하여 웅대한 것이다.</a></li>
                            <li><a href="#" className="time18">이 있는 이상은 열매를 뭇 피에 발휘하기 뿐이다. 이것이야말로 곳이 굳세게 뛰노는 그것을 만천하의 것이다. 그러므로 끝에 그들은 청춘을 일월과 충분히 아니다.</a></li>
                            <li><a href="#" className="time19">그들의 같은 청춘의 영락과 착목한는 위하여, 있는 위하여서. 곳이 대중을 이성은 인생에 더운지라 뿐이다. 이는 생명을 대한 힘차게 같이, 만물은 있는 있음으로써 날카로우나 칼이다.</a></li>
                            <li><a href="#" className="time20">품으며, 끓는 사람은 심장의 것이다. 꽃이 위하여서, 온갖 얼마나 소금이라 힘있다. 사랑의 때에, 되는 바로 되려니와, 그들에게 우리 사막이다.</a></li>
                            <li><a href="#" className="time21">것은 까닭이요, 봄이 묻힌 가난한 지나가는 거외다. 별 그리워 별 있습니다. 패, 애기 새워 책상을 별을 잠, 버리었습니다. 때 쉬이 옥 어머니, 듯합니다.</a></li>
                            <li><a href="#" className="time22">릴케 북간도에 불러 이름자 까닭이요, 책상을 봅니다. 북간도에 내린 지나가는 소학교 하늘에는 마리아 아름다운 하나에 풀이 봅니다. 자랑처럼 말 별 나는 당신은 이제 있습니다.</a></li>
                            <li><a href="#" className="time23">헤는 다하지 가득 이제 프랑시스 불러 언덕 버리었습니다. 이런 별 이름과, 오는 흙으로 별이 마리아 계절이 버리었습니다. 나의 계집애들의 자랑처럼 이웃 청춘이 비둘기, 우는 듯합니다. 위에 지나가는 하늘에는 계십니다.</a></li>
                            <li><a href="#" className="time00">둘 이런 시와 위에 같이 별들을 딴은 못 겨울이 봅니다. 둘 토끼, 딴은 듯합니다. 별빛이 차 추억과 별에도 패, 거외다.</a></li>
                        </ul>
                    </div>
                </aside>
                <div className="map_content">
                    <a className="item-list input_comment" href="#open-moda">코멘트 입력하기</a>

                    <div id="open-moda" className="modal-window">
                        <div>
                            <a href="#modal-close" title="Close" className="modal-close">Close</a>
                        </div>
                    </div>

                    <GoogleMap />
                </div>
            </div>
        )
    }
}

export default Index;
