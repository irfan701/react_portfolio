import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Countup = ({start,end}) => {
    return (
        <>
            <CountUp start={start} end={end}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                        <span ref={countUpRef} />
                    </VisibilitySensor>

                )}
            </CountUp>
        </>
    );
};

export default Countup;