import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import PropTypes from 'prop-types';
import { convertNumberTok } from "./helper";

const logoCard = {
    Facebook: facebookLogo,
    Twitter: twitterLogo,
    Instagram: instagramLogo,
    YouTube: youtubeLogo
};
const bgBordeCard = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-Gradient',
    YouTube: 'bg-YouTube'
};

export const OverviewCard = ({ item }) => {
    const { user, audience, audienceType, isUp, network, today } = item;


    const iconArrow = isUp ? iconUp : iconDown;
    return (
        <article className="border bg-Light-Grayish-Blue mx-auto   w-[326px]    h-[216px] mb-8 rounded-[5px]  cursor-pointer   overflow-hidden text-center dark:bg-Desaturated-Blue  hover:dark:brightness-125 hover:brightness-95">
            <div className={`${bgBordeCard[network]}   h-[4px] mb-8`}></div>
            <div className="flex items-center justify-center gap-2  ">
                <img src={logoCard[network]} width={25} height={25} alt={`Logo ${network}`} />
                <p className="text-xs text-Dark-Grayish-Blue font-bold">{user}</p>
            </div>
            <p className="text-[56px]  font-bold text-Very-Dark-Blue  dark:text-white ">{convertNumberTok(audience)}</p>
            <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6">{audienceType}</p>
            <div className="flex items-center justify-center mt-2 gap-1">
                <img src={iconArrow} alt="" height={15} width={15} />
                <span className={` ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} font-bold text-xs `}>{today} today</span>
            </div>
        </article>
    );
};

// Definir PropTypes para validar los props
OverviewCard.propTypes = {
    item: PropTypes.shape({
        user: PropTypes.string.isRequired,
        audience: PropTypes.number.isRequired,
        audienceType: PropTypes.string.isRequired,
        isUp: PropTypes.bool.isRequired,
        network: PropTypes.string.isRequired,
        today: PropTypes.number.isRequired
    }).isRequired
};



export const OverviewTodayCard = ({ item }) => {
    const {   network, statsType, stats, percentage, isUp } = item;
    return (
        <article className="bg-Light-Grayish-Blue w-[326px] h-[125px] m-4 mx-auto rounded-[5px] p-[27px] mb-[21px] cursor-pointer hover:brightness-95 dark:bg-Desaturated-Blue  hover:dark:brightness-125">
            <div className="flex justify-between items-center ">
                <p className="text-Dark-Grayish-Blue">{statsType}</p>
                <img src={logoCard[network]} alt="" />
            </div>
           <div className=" flex justify-between  ">
           <p className="text-[42px]  font-bold text-Very-Dark-Blue  dark:text-white ">{convertNumberTok(stats)}</p>
           <div className="flex items-center justify-center gap-1">
                <img src={isUp ? iconUp : iconDown} alt="arrow" width={15} height={15} />
                <p className={`text-xs font-bold ${isUp ? 'text-Lime-green' : 'text-Bright-Red'} `}>
                {percentage} today
                </p>
            </div>
           </div>


           
        </article>
    )
}

// Definir PropTypes para validar los props
OverviewTodayCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        network: PropTypes.string.isRequired,
        statsType: PropTypes.string.isRequired,
        stats: PropTypes.number.isRequired,
        percentage: PropTypes.number.isRequired,
        isUp: PropTypes.bool.isRequired,
    }).isRequired
};



