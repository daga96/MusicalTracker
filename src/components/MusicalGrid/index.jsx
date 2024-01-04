import MusicalCard from "../MusicalCard";
import MusicalRow from "../MusicalRow";

const MusicalGrid = ({ musicals, toggleView }) => {
  return toggleView ? (
    <div className={"grid grid-cols-5 gap-4"}>
      {musicals.map((musical, idx) => (
        <MusicalCard musical={musical} key={idx} />
      ))}
    </div>
  ) : (
    <div className={"flex flex-col"}>
      {musicals.map((musical, idx) => (
        <MusicalRow musical={musical} key={idx} />
      ))}
    </div>
  );
};

export default MusicalGrid;
