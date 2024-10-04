
import PropTypes from "prop-types";
import { OverviewCard } from "./OverviewCards";


const OverviewContainer = ({ data }) => {



    return (
        <section className="  mx-auto max-w-[1440px]  gap-8   flex flex-wrap   absolute top-[191px] left-0 right-0    ">
            {
                data.overview.map((item, idx) => {

                    return (
                        <OverviewCard key={idx} item={item} />
                    )
                })
            }
        </section>
    )
}
// Validación de props con PropTypes
OverviewContainer.propTypes = {
    data: PropTypes.shape({
        overview: PropTypes.arrayOf(
            PropTypes.shape({

            })
        ).isRequired,
        overviewToday: PropTypes.arrayOf(
            PropTypes.shape({

            })
        ).isRequired,
    }).isRequired,
};


export default OverviewContainer
