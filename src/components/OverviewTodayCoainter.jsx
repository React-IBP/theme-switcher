import PropTypes from "prop-types";
import { OverviewTodayCard } from "./OverviewCards"



const OverviewTodayCoainter = ({ data }) => {
    return (
        <section  className=" ">
            <h2 className="text-2xl font-bold mb-[27px]
            text-Dark-Grayish-Blue dark:text-white ml-8">Overview - Today</h2>
            <div className=" flex flex-wrap gap-4">
                {
                    data.overviewToday.map((item, idx) => {

                        return (
                            <OverviewTodayCard key={idx} item={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}

OverviewTodayCoainter.propTypes = {
    data: PropTypes.shape({

        overviewToday: PropTypes.arrayOf(
            PropTypes.shape({

            })
        ).isRequired,
    }).isRequired,
};


export default OverviewTodayCoainter
