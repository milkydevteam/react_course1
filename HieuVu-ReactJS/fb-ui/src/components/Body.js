import React, { Component } from 'react';
import styled from "styled-components"
import AddIcon from ".././icon.png"

const Content = styled.div`
    margin: 0;
    outline: none;
    padding: 0;
    width: auto;
    min-height: 640px;
    padding-top: 20px;
    padding-bottom: 20px;
    zoom: 1;
    background-color: #e9ebee;
`

const LoginInfomation = styled.div`
    overflow: visible;
    padding-right: 48px;
    position: relative;
    flex: 1 0 0px;
`

//done

const LoginImages = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SignUp = styled.div`
    float: none;
    width: 400px;
`

const AddAcountButton = styled.div`
    align-items: center;
    background-color: #f5f6f7;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    height: 160px;
    justify-content: center;
    width: 160px;
`
const AddAcountIcon = styled.i`
    background-image: url(${AddIcon});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
`

const SignUpWrap = styled.div`
    margin: 0 auto 0 auto;
    padding-bottom: 30px;
`

const InputName = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    position: relative;
`

const UiStickyPlaceholderInput = styled.div`
    background: white;
    border-radius: 5px;
    display: inline-block;
    position: relative;
`

const Footer = styled.div`
    color: #737373;
    margin: 0 auto;
    width: 980px;
`

const LanguageSelector = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 8px;
`

const FooterUl = styled.ul`
    line-height: 1.6;
    margin-left: -10px
`
const FooterCopyright = styled.div`
    font-size: 11px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px
`

class Body extends Component {
    render() {
        return (
            <>
                <Content>
                    <div className="centerContent">
                        <LoginInfomation>
                            <div className="LoginInfomation-label" >Đăng nhập gần đây</div>
                            <div className="LoginInfomation-guide" >Nhấp vào ảnh của bạn hoặc thêm tài khoản</div>
                            <LoginImages>
                                <div className="LoginInfomation-user">
                                    <div className="LoginInfomation-user-block" >
                                        <div>
                                            <a className="LoginInfomation-user-image" href="#">
                                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/87937083_2708941652487108_302197137351901184_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=KY2RgUoT5esAX_1dVJQ&_nc_ht=scontent-sin6-2.xx&_nc_tp=6&oh=fa5ab2a9d10edd119f22f0306eac4b84&oe=5EA4A67E" />
                                                <div className="LoginInfomation-user-name" >Hiếu Vũ</div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="LoginInfomation-user" >
                                    <div className="Witdh160px" >
                                        <a className="LoginInfomation-user-image" >
                                            <AddAcountButton>
                                                <AddAcountIcon className="AddIcon" />
                                            </AddAcountButton>
                                            <div className="LoginInfomation-action" >
                                                Thêm tài khoản
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </LoginImages>
                        </LoginInfomation>
                        <SignUp>
                            <div className="SignUp-label">Tạo tài khoản mới</div>
                            <div className="SignUp-guide">Nhanh chóng và dễ dàng</div>
                            <SignUpWrap>
                                <div>
                                    <div>
                                        <form>
                                            <div>
                                                <div>
                                                    <div className="Witdh399px">
                                                        <InputName className="InputName-left">
                                                            <div className="PositionRelative">
                                                                <UiStickyPlaceholderInput>
                                                                    <input placeholder="Tên" className="InputName-FirstName" />
                                                                </UiStickyPlaceholderInput>
                                                            </div>
                                                        </InputName>
                                                        <InputName className="InputName-right" >
                                                            <div className="PositionRelative" >
                                                                <UiStickyPlaceholderInput>
                                                                    <input placeholder="Họ" className="Input-LastName" />
                                                                </UiStickyPlaceholderInput>
                                                            </div>
                                                        </InputName>
                                                    </div>
                                                </div>
                                                <div>
                                                    <InputName>
                                                        <div className="PositionRelative" >
                                                            <UiStickyPlaceholderInput>
                                                                <input className="InputUsername" placeholder="Số di động hoặc email" />
                                                            </UiStickyPlaceholderInput>
                                                        </div>
                                                    </InputName>
                                                </div>
                                                <div>
                                                    <InputName>
                                                        <div className="PositionRelative">
                                                            <UiStickyPlaceholderInput>
                                                                <input className="InputPassword" placeholder="Mật khẩu mới" type="password" />
                                                            </UiStickyPlaceholderInput>
                                                        </div>
                                                    </InputName>
                                                </div>
                                                <div className="PositionRelative">
                                                    <div className="BirthDay-label">
                                                        Ngày sinh
                                                    </div>
                                                    <div className="PositionRelative">

                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </SignUpWrap>
                        </SignUp>

                    </div>
                </Content>
                <Footer>
                    <LanguageSelector>
                        <li>
                            Tiếng Ziệt
                        </li>
                        <li>
                            <a href="#">
                                English(UK)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                中文(台灣)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                한국어
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                日本語
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Français (France)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ภาษาไทย
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Español
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Português (Brasil)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Deutsch
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Italiano
                            </a>
                        </li>
                    </LanguageSelector>
                    <div id="contentCurve"></div>
                    <div>
                        <FooterUl className="FooterUI">
                            <li><a href="/r.php" title="Đăng ký Facebook">Đăng ký</a></li><li><a href="/login/" title="Đăng nhập Facebook">Đăng nhập</a></li><li><a href="https://messenger.com/" title="Xem Messenger.">Messenger</a></li><li><a href="/lite/" title="Facebook Lite dành cho Android.">Facebook Lite</a></li><li><a href="https://www.facebook.com/watch/" title="Lướt xem video của chúng tôi trên tab Watch."> Watch </a></li><li><a href="/directory/people/" title="Lướt xem thư mục con người của chúng tôi.">Danh bạ</a></li><li><a href="/directory/pages/" title="Lướt xem thư mục trang của chúng tôi.">Trang</a></li><li><a href="/pages/category/">Hạng mục Trang</a></li><li><a href="/places/" title="Xem những địa điểm nổi tiếng trên Facebook.">Địa điểm</a></li><li><a href="/games/" title="Xem trò chơi trên Facebook.">Trò chơi</a></li><li><a href="/directory/places/" title="Lướt xem thư mục địa điểm của chúng tôi.">Vị trí</a></li><li><a href="/marketplace/" title="Mua bán trên Facebook Marketplace.">Marketplace</a></li><li><a href="/directory/groups/" title="Lướt xem danh mục nhóm.">Nhóm</a></li><li><a href="https://instagram.com/" title="Hãy xem Instagram" target="_blank" rel="noopener nofollow" data-lynx-mode="asynclazy" data-lynx-uri="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F&amp;h=AT3z44sYD7hnIbeUKKtj2-CNYfaJ9RKLUkQaqf7QL3Gnibjvs0aBYBGPPBhtWNGSEE_Uz0hLXOcKsOaWnHK7ORkD_VZt8NcVEYyqQclaEMrVVXo0JNloorCUcpx3-CNkpYyK69F_x9EHk86A-6sBcfz9ELJ9jqpgUHCB_Q">Instagram</a></li><li><a href="/local/lists/245019872666104/" title="Lướt xem thư mục Danh sách địa phương của chúng tôi.">Địa phương</a></li><li><a href="/fundraisers/" title="Quyên góp cho các mục đích có ý nghĩa.">Trang gây quỹ</a></li><li><a href="/biz/directory/" title="Lướt xem thư mục Dịch vụ Facebook của chúng tôi.">Dịch vụ</a></li><li><a href="/facebook" accesskey="8" title="Đọc blog của chúng tôi, khám phá trung tâm tài nguyên và tìm cơ hội việc làm.">Giới thiệu</a></li><li><a href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;extra_1=auto" title="Quảng cáo trên Facebook.">Tạo quảng cáo</a></li><li><a href="/pages/create/?ref_type=site_footer" title="Tạo Trang">Tạo Trang</a></li><li><a href="https://developers.facebook.com/?ref=pf" title="Phát triển trên nền tảng của chúng tôi.">Nhà phát triển</a></li><li><a href="/careers/?ref=pf" title="Tạo bước ngoặt mới trong sự nghiệp của bạn với công ty tuyệt vời của chúng tôi">Tuyển dụng</a></li><li><a data-nocookies="1" href="/privacy/explanation" title="Tìm hiểu về quyền riêng tư của bạn và Facebook">Quyền riêng tư</a></li><li><a href="/policies/cookies/" title="Tìm hiểu về cookie và Facebook." data-nocookies="1">Cookie</a></li><li><a class="_41ug" data-nocookies="1" href="https://www.facebook.com/help/568137493302217" title="Tìm hiểu về Lựa chọn quảng cáo.">Lựa chọn quảng cáo<i class="img sp_3UHi6Z3AUhD sx_05159a"></i></a></li><li><a data-nocookies="1" href="/policies?ref=pf" accesskey="9" title="Xem lại điều khoản và chính sách của chúng tôi.">Điều khoản</a></li><li><a href="/help/?ref=pf" accesskey="0" title="Truy cập Trung tâm trợ giúp của chúng tôi.">Trợ giúp</a></li><li><a accesskey="6" class="accessible_elem" href="/settings" title="Xem và chỉnh sửa cài đặt Facebook.">Cài đặt</a></li><li><a accesskey="7" class="accessible_elem" href="/allactivity?privacy_source=activity_log_top_menu" title="Xem nhật ký hoạt động">Nhật ký hoạt động</a></li>
                        </FooterUl>
                    </div>
                    <FooterCopyright>
                    Facebook © 2020
                    </FooterCopyright>
                </Footer>
            </>
        );
    }
}

export default Body;