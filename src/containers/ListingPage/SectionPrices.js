import React from 'react';
import { Tabs, PrimaryButton } from '../../components';
import PropTypes from 'prop-types';
import { createSlug, getMoney } from '../../util/urlHelpers';
import { injectIntl } from 'react-intl';
import css from './ListingPage.module.css';

const Tab = props => {
    return <div className={`${props.selected ? 'activeTab': 'noActive'}`}>{props.children}</div>;
};

const { node, func, object, string } = PropTypes;

Tab.propTypes = {
    children: node.isRequired,
};


const TabsWrapper = props => {
    const { currentListing: { attributes: { title, price, publicData: { priceTwo, priceThree } }, id, type }, tab = 'price', intl, priceData } = props;
    const slug = createSlug(title)
    const selfLinkProps = tab => ({
        name: 'ListingPageWithPrices',
        params: { id: id.uuid, slug, tab },
    });

    const { formattedPrice: priceFormatted } = price ? priceData(price, intl) : "N/A";
    const { formattedPrice: priceFormattedTwo } = priceTwo ? priceData(getMoney(priceTwo), intl) : "N/A";
    const { formattedPrice: priceFormattedThree } = priceThree ? priceData(getMoney(priceThree), intl) : "N/A";

    return (
        <Tabs className={css.tabsRootClass}>
            <Tab tabId="price" selected={tab === "price"} tabLabel="Basic" className={tab === "price" ? css.activeTab: css.inActiveTab} tabLinkProps={selfLinkProps("price")}>
                <div className={css.priceTab}>

                    <div className={css.priceRow}>
                            <div className={css.priceSection}>
                                {priceFormatted}
                                <div className={css.subhead}>Packages price</div>
                            </div>
                            <div className={css.priceSection}>

                                <PrimaryButton rootClassName={css.bookBtn}> Book </PrimaryButton>
                            </div>
                        </div>
                        <div className={css.reviewrow}>
                            <div>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                </ul>
                            </div>
                        </div>
                    
                </div>
            </Tab>
            <Tab tabId="priceTwo" selected={tab === "priceTwo"}  className={tab === "priceTwo" ? css.activeTab: css.inActiveTab} tabLabel="Premium" tabLinkProps={selfLinkProps("priceTwo")}>
                    <div className={css.priceTab}>

                        <div className={css.priceRow}>
                                <div className={css.priceSection}>
                                    {priceFormattedTwo}
                                    <div className={css.subhead}>Packages price</div>
                                </div>
                                <div className={css.priceSection}>

                                    <PrimaryButton rootClassName={css.bookBtn}> Book </PrimaryButton>
                                </div>
                            </div>
                            <div className={css.reviewrow}>
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
            </Tab>
            <Tab tabId="priceThree" selected={tab === "priceThree"}  className={tab === "priceThree" ? css.activeTab: css.inActiveTab} tabLabel="Standard" tabLinkProps={selfLinkProps("priceThree")}>
                        <div className={css.priceTab}>

                            <div className={css.priceRow}>
                                    <div className={css.priceSection}>
                                        {priceFormattedThree}
                                        <div className={css.subhead}>Packages price</div>
                                    </div>
                                    <div className={css.priceSection}>

                                        <PrimaryButton rootClassName={css.bookBtn}> Book </PrimaryButton>
                                    </div>
                                </div>
                                <div className={css.reviewrow}>
                                    <div>
                                        <ul class="list-group">
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Dapibus ac facilisis in</li>
                                            <li class="list-group-item">Morbi leo risus</li>
                                            <li class="list-group-item">Porta ac consectetur ac</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul class="list-group">
                                            <li class="list-group-item">Cras justo odio</li>
                                            <li class="list-group-item">Dapibus ac facilisis in</li>
                                            <li class="list-group-item">Morbi leo risus</li>
                                            <li class="list-group-item">Porta ac consectetur ac</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
            </Tab>
        </Tabs>
    );
};

TabsWrapper.propTypes = {
    priceData: func.isRequired,
    currentListing: object.isRequired
}


export default injectIntl(TabsWrapper)