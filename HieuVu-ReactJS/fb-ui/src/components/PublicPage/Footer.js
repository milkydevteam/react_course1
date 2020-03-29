import React, { Component } from 'react';
import styled from "styled-components"

const Footerr = styled.div`
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

class Footer extends Component {
    render() {
        return (
            <Footerr>
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
                        <li><a href="/r.php" title="Đăng ký Facebook">Đăng ký</a></li><li><a href="/login/" title="Đăng nhập Facebook">Đăng nhập</a></li><li><a href="https://messenger.com/" title="Xem Messenger.">Messenger</a></li><li><a href="/lite/" title="Facebook Lite dành cho Android.">Facebook Lite</a></li><li><a href="https://www.facebook.com/watch/" title="Lướt xem video của chúng tôi trên tab Watch."> Watch </a></li><li><a href="/directory/people/" title="Lướt xem thư mục con người của chúng tôi.">Danh bạ</a></li><li><a href="/directory/pages/" title="Lướt xem thư mục trang của chúng tôi.">Trang</a></li><li><a href="/pages/category/">Hạng mục Trang</a></li><li><a href="/places/" title="Xem những địa điểm nổi tiếng trên Facebook.">Địa điểm</a></li><li><a href="/games/" title="Xem trò chơi trên Facebook.">Trò chơi</a></li><li><a href="/directory/places/" title="Lướt xem thư mục địa điểm của chúng tôi.">Vị trí</a></li><li><a href="/marketplace/" title="Mua bán trên Facebook Marketplace.">Marketplace</a></li><li><a href="/directory/groups/" title="Lướt xem danh mục nhóm.">Nhóm</a></li><li><a href="https://instagram.com/" title="Hãy xem Instagram" target="_blank" rel="noopener nofollow" data-lynx-mode="asynclazy" data-lynx-uri="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F&amp;h=AT3z44sYD7hnIbeUKKtj2-CNYfaJ9RKLUkQaqf7QL3Gnibjvs0aBYBGPPBhtWNGSEE_Uz0hLXOcKsOaWnHK7ORkD_VZt8NcVEYyqQclaEMrVVXo0JNloorCUcpx3-CNkpYyK69F_x9EHk86A-6sBcfz9ELJ9jqpgUHCB_Q">Instagram</a></li><li><a href="/local/lists/245019872666104/" title="Lướt xem thư mục Danh sách địa phương của chúng tôi.">Địa phương</a></li><li><a href="/fundraisers/" title="Quyên góp cho các mục đích có ý nghĩa.">Trang gây quỹ</a></li><li><a href="/biz/directory/" title="Lướt xem thư mục Dịch vụ Facebook của chúng tôi.">Dịch vụ</a></li><li><a href="/facebook"  title="Đọc blog của chúng tôi, khám phá trung tâm tài nguyên và tìm cơ hội việc làm.">Giới thiệu</a></li><li><a href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;extra_1=auto" title="Quảng cáo trên Facebook.">Tạo quảng cáo</a></li><li><a href="/pages/create/?ref_type=site_footer" title="Tạo Trang">Tạo Trang</a></li><li><a href="https://developers.facebook.com/?ref=pf" title="Phát triển trên nền tảng của chúng tôi.">Nhà phát triển</a></li><li><a href="/careers/?ref=pf" title="Tạo bước ngoặt mới trong sự nghiệp của bạn với công ty tuyệt vời của chúng tôi">Tuyển dụng</a></li><li><a data-nocookies="1" href="/privacy/explanation" title="Tìm hiểu về quyền riêng tư của bạn và Facebook">Quyền riêng tư</a></li><li><a href="/policies/cookies/" title="Tìm hiểu về cookie và Facebook." data-nocookies="1">Cookie</a></li><li><a  data-nocookies="1" href="https://www.facebook.com/help/568137493302217" title="Tìm hiểu về Lựa chọn quảng cáo.">Lựa chọn quảng cáo<i></i></a></li><li><a data-nocookies="1" href="/policies?ref=pf"  title="Xem lại điều khoản và chính sách của chúng tôi.">Điều khoản</a></li><li><a href="/help/?ref=pf"  title="Truy cập Trung tâm trợ giúp của chúng tôi.">Trợ giúp</a></li><li><a href="/settings" title="Xem và chỉnh sửa cài đặt Facebook.">Cài đặt</a></li><li><a   href="/allactivity?privacy_source=activity_log_top_menu" title="Xem nhật ký hoạt động">Nhật ký hoạt động</a></li>
                    </FooterUl>
                </div>
                <FooterCopyright>
                    Facebook © 2020
                    </FooterCopyright>
            </Footerr>
        );
    }
}


export default Footer;