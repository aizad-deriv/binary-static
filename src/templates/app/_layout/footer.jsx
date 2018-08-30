import React from 'react';
import { List } from '../../_common/components/elements.jsx';

const FooterColumn = ({ header, items }) => (
    <div className='gr-4'>
        <h4 className='secondary-color'><strong>{header}</strong></h4>
        <List items={items} />
    </div>
);

const SocialIcons = ({ networks }) => (
    <div id='social-icons' className='social-icons flex-row'>
        { networks.map((net, idx) => (
            <a key={idx} href={net.href} target='_blank' rel='noopener noreferrer'>
                <img src={it.url_for(`images/pages/footer/${net.media}.svg`)} />
            </a>
        ))}
    </div>
);

const StatusNotification = () => (
    <div id='status_notification'>
        <div id='status_notification_type'>
            <img src={it.url_for('images/server_status/ic-warning.svg')}  alt='Information icon'/>
        </div>
        <p id='status_notification_text'/>
        <div id='status_notification_close'>
            <img src={it.url_for('images/server_status/ic-close.svg')}  alt='Warning icon'/>
        </div>
    </div>
);

const FooterJA = () => (
    <div id='footer' className='no-print'>
        <div id='footer-menu' className='primary-bg-color gr-padding-10'>
            <div className='container'>
                <div className='gr-row gr-padding-10'>
                    <div className='gr-6 gr-12-m gr-parent gr-no-gutter'>
                        <div className='gr-row'>
                            <FooterColumn
                                header={it.L('Our Company')}
                                items={[
                                    { text: it.L('About Us'),               href: it.url_for('about-us') },
                                    { text: it.L('Contact Us'),             href: it.url_for('contact'),           className: 'gr-hide gr-show-m' },
                                    { text: it.L('Regulatory Information'), href: it.url_for('regulation') },
                                    { text: it.L('Group History'),          href: it.url_for('group-history') },
                                    { text: it.L('Binary in Numbers'),      href: it.url_for('binary-in-numbers') },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Education')}
                                items={[
                                    { text: it.L('Why Us?'),                           href: it.url_for('why-us-jp') },
                                    { text: it.L('Getting Started'),                   href: it.url_for('get-started-jp') },
                                    { text: it.L('Platform Tour'),                     href: it.url_for('tour-jp') },
                                    { text: it.L('{JAPAN ONLY}Service Announcements'), href: it.url_for('service-announcements') },
                                    { text: it.L('Affiliate Program'),                 href: it.url_for('affiliate/signup-jp') },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Banking')}
                                items={[
                                    { text: it.L('Cashier'), href: it.url_for('cashier') },
                                ]}
                            />
                        </div>
                    </div>
                    <div className='gr-6 gr-12-m gr-parent gr-no-gutter'>
                        <div className='gr-row'>
                            <FooterColumn
                                header={it.L('Legal')}
                                items={[
                                    { text: it.L('Terms and Conditions'), href: it.url_for('terms-and-conditions-jp') },
                                    { text: it.L('Security and Privacy'), href: it.url_for('terms-and-conditions-jp'), param: '?#account-privacy' },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('{JAPAN ONLY}Company Profile')}
                                items={[
                                    { text: it.L('{JAPAN ONLY}Company Profile & Disclosure'), href: it.url_for('company-profile') },
                                ]}
                            />

                            <div className='gr-4'>
                                <h4 className='secondary-color'><strong>{it.L('{JAPAN ONLY}Social Media')}</strong></h4>
                                <SocialIcons
                                    networks={[
                                        { media: 'youtube',  href: 'https://www.youtube.com/channel/UC0BZmStXHJdsrjboyLgcf8A' },
                                        { media: 'facebook', href: 'https://www.facebook.com/BinaryKK/' },
                                        { media: 'twitter',  href: 'https://twitter.com/binarykk' },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='footer-regulatory' className='primary-bg-color-dark gr-padding-10 gr-child'>
            <div className='container'>
                <p id='regulatory-text' className='gr-padding-10 gr-parent content-inverse-color no-margin'>
                    {it.L('{JAPAN ONLY}Footer regulatory text')}
                </p>
            </div>
        </div>
        <div id='footer-last' className='primary-bg-color'>
            <div className='container'>
                <div className='gr-padding-10'>
                    <p className='gambling content-inverse-color no-para-margin'>
                        {it.L('Trading binary options may not be suitable for everyone, so please ensure that you fully understand the risks involved. Your losses can exceed your initial deposit and you do not own or have any interest in the underlying asset. In regards to binary options which are gambling products, remember that gambling can be addictive - please play responsibly. Read about [_1]Responsible Trading[_2].', `<a href="${it.url_for('responsible-trading')}">`, '</a>')}
                    </p>
                </div>
            </div>
        </div>
        <div id='end-note' className='invisible content-inverse-color center-text' />
        <StatusNotification />
    </div>
);

const FooterNormal = () => (
    <div id='footer' className='no-print'>
        <div id='footer-menu' className='primary-bg-color gr-padding-10'>
            <div className='container'>
                <div className='gr-row gr-padding-10'>
                    <div className='gr-6 gr-12-m gr-parent gr-no-gutter'>
                        <div className='gr-row'>
                            <FooterColumn
                                header={it.L('Our Company')}
                                items={[
                                    { text: it.L('About Us'),               href: it.url_for('about-us') },
                                    { text: it.L('Contact Us'),             href: it.url_for('contact'),           className: 'gr-hide gr-show-m' },
                                    { text: it.L('Regulatory Information'), href: it.url_for('regulation'),        className: 'id-hide ar-hide' },
                                    { text: it.L('Group History'),          href: it.url_for('group-history') },
                                    { text: it.L('Binary in Numbers'),      href: it.url_for('binary-in-numbers') },
                                    { text: it.L('Careers'),                href: it.url_for('careers') },
                                    { text: it.L('Patents'),                href: it.url_for('legal/us_patents'), className: 'id-hide' },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Education')}
                                items={[
                                    { text: it.L('Why Us?'),         href: it.url_for('why-us') },
                                    { text: it.L('Getting Started'), href: it.url_for('get-started') },
                                    { text: it.L('Platform Tour'),   href: it.url_for('tour') },
                                    { text: it.L('GamCare'),         href: 'http://www.gamcare.org.uk/',             className: 'id-hide', target: '_blank' },
                                    { text: it.L('Academy'),         href: 'https://academy.binary.com',             className: 'academy', target: '_blank' },
                                    { text: it.L('Webinars'),        href: 'https://academy.binary.com/en/events/',  className: 'id-hide', target: '_blank' },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Banking')}
                                items={[
                                    { text: it.L('Cashier'),         href: it.url_for('cashier') },
                                    { text: it.L('Payment Methods'), href: it.url_for('cashier/payment_methods') },
                                ]}
                            />
                        </div>
                    </div>
                    <div className='gr-6 gr-12-m gr-parent gr-no-gutter'>
                        <div className='gr-row'>
                            <FooterColumn
                                header={it.L('Legal')}
                                items={[
                                    { text: it.L('Terms and Conditions'), href: it.url_for('terms-and-conditions') },
                                    { text: it.L('Security and Privacy'), href: it.url_for('terms-and-conditions'), param: '?#privacy' },
                                    { text: it.L('Responsible Trading'),  href: it.url_for('responsible-trading') },
                                    { text: it.L('Complaints'),           href: it.url_for('terms-and-conditions?anchor=complaints-and-disputes#legal-binary') },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Trading')}
                                items={[
                                    { text: it.L('Platforms'),      href: it.url_for('platforms') },
                                    { text: it.L('Asset Index'),    href: it.url_for('resources/asset_indexws') },
                                    { text: it.L('Trading Times'),  href: it.url_for('resources/market_timesws') },
                                    { text: it.L('Network Status'), href: 'https://binarycom.statuspage.io', target: '_blank' },
                                ]}
                            />

                            <FooterColumn
                                header={it.L('Partner With Us')}
                                items={[
                                    { text: it.L('Affiliate Programme'),     href: it.url_for('affiliate/signup') },
                                    { text: it.L('IB Programme'),            href: it.url_for('ib-programme/ib-signup') },
                                    { text: it.L('API'),                     href: 'https://developers.binary.com', target: '_blank' },
                                    { text: it.L('Binary Shop'),             href: 'https://shop.binary.com',       target: '_blank' },
                                    { text: it.L('Charitable Activities'),   href: it.url_for('charity') },
                                    { text: it.L('All Partnership Options'), href: it.url_for('partners') },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='footer-regulatory' className='primary-bg-color-dark gr-padding-10'>
            <div className='container'>
                <div className='gr-row icon-row'>
                    <div className='gr-12 flex-row'>
                        <a href='https://www.gov.im/gambling/' target='_blank' rel='noopener noreferrer'>
                            <img id='iom_icon_footer' className='responsive' src={it.url_for('images/pages/footer/isle-of-man.png')} />
                        </a>
                        <div className='lga-gamstop-icon-container'>
                            <a href='https://www.authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1' target='_blank' rel='noopener noreferrer'>
                                <img id='lga_icon_footer' className='responsive' src={it.url_for('images/pages/footer/mga-logo-footer.svg')} />
                            </a>
                            <div data-show='iom, malta, default' className='id-hide'>
                                <a href='https://www.gamstop.co.uk' target='_blank' rel='noopener noreferrer'>
                                    <img id='gamstop_icon_footer' className='responsive' src={it.url_for('images/pages/footer/gamstop.svg')} />
                                </a>
                            </div>
                        </div>
                        <SocialIcons
                            networks={[
                                { media: 'youtube',     href: 'https://www.youtube.com/user/BinaryTradingVideos' },
                                { media: 'google-plus', href: 'https://plus.google.com/106251151552682209951' },
                                { media: 'facebook',    href: 'https://www.facebook.com/binarydotcom' },
                                { media: 'twitter',     href: 'https://twitter.com/Binarydotcom' },
                                { media: 'telegram',    href: 'https://t.me/binarydotcom' },
                                { media: 'reddit',      href: 'https://www.reddit.com/r/binarydotcom/' },
                            ]}
                        />
                    </div>
                </div>
                <div className='gr-row'>
                    <div className='gr-12'>
                        <p>
                            {it.L('In the EU, financial products are offered by Binary Investments (Europe) Ltd., Mompalao Building, Suite 2, Tower Road, Msida MSD1825, Malta, licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (licence no. IS/70156).')}
                        </p>
                        <p>
                            {/* TODO: insert links 1 */}
                            {it.L('In the Isle of Man and the UK, Volatility Indices are offered by Binary (IOM) Ltd., First Floor, Millennium House, Victoria Road, Douglas, IM2 4RW, Isle of Man, British Isles; licensed and regulated respectively by (1) the Gambling Supervision Commission in the Isle of Man (current licence issued on 31 August 2017) and by (2) the Gambling Commission in the UK (licence reference no: 39172).')}
                        </p>
                        <p>
                            {/* TODO: insert links 2 */}
                            {it.L('In the rest of the EU, Volatility Indices are offered by Binary (Europe) Ltd., Mompalao Building, Suite 2, Tower Road, Msida MSD1825, Malta; licensed and regulated by (1) the Malta Gaming Authority in Malta (licence no. MGA/B2C/102/2000 issued on 26 May 2015), for UK clients by (2) the UK Gambling Commission (licence reference no: 39495), and for Irish clients by (3) the Revenue Commissioners in Ireland (Remote Bookmaker\'s Licence no. 1010285 issued on 1 July 2017). View complete Regulatory Information.')}
                        </p>
                    </div>
                </div>
                <div className='gr-row about-binary'>
                    <div className='gr-12'>
                        <p>
                            {/* TODO: insert links 1 */}
                            {it.L('Binary.com is an award-winning online trading provider that helps its clients to trade on financial markets through binary options and CFDs. Trading binary options and CFDs on Volatility Indices is classified as a gambling activity. Remember that gambling can be addictive – please play responsibly. Learn more about Responsible Trading. Some products are not available in all countries. This website’s services are not made available in certain countries such as the USA, Canada, Costa Rica, Hong Kong, or to persons under age 18.')}
                        </p>
                    </div>
                </div>
                <div className='gr-row risk-warning'>
                    <div className='gr-12'>
                        <p>
                            {it.L('Trading binary options may not be suitable for everyone, so please ensure that you fully understand the risks involved. Your losses can exceed your initial deposit and you do not own or have any interest in the underlying asset.')}
                        </p>
                        <p>
                            {it.L('CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Between 74-89% of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id='end-note' className='invisible content-inverse-color center-text' />
        <StatusNotification />
    </div>
);

const Footer = () => (
    (it.language.toLowerCase() === 'ja') ? <FooterJA /> : <FooterNormal />
);

export default Footer;
